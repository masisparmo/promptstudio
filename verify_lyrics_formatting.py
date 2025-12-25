import pytest
from playwright.sync_api import sync_playwright, expect
import http.server
import socketserver
import threading
import os
import json
import time
import socket

# Function to find a free port
def find_free_port():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        return s.getsockname()[1]

# Define the port
PORT = find_free_port()

# Function to start the HTTP server
def start_server():
    os.chdir('.')  # Ensure we serve from the root
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()

def verify_lyrics_formatting():
    # Start the server in a separate thread
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Enable console logging
        page.on("console", lambda msg: print(f"PAGE CONSOLE: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))

        # Mock the API call
        def handle_route(route):
            request = route.request
            # Check if it's the Gemini API call
            if "generativelanguage.googleapis.com" in request.url:
                print("Intercepted Gemini API call")

                # Create a mock response with formatted lyrics
                # Using literal \n in the string to simulate what the model might return in JSON
                # The text field contains a stringified JSON.
                inner_json = json.dumps({
                    "lirik": "[Verse 1]\\nIni baris pertama\\nIni baris kedua\\n\\n[Chorus]\\nIni chorus baris satu\\nIni chorus baris dua",
                    "genre": "Pop",
                    "tema": "Testing"
                })

                mock_response_data = {
                    "candidates": [
                        {
                            "content": {
                                "parts": [
                                    {
                                        "text": inner_json
                                    }
                                ]
                            }
                        }
                    ]
                }

                route.fulfill(
                    status=200,
                    content_type="application/json",
                    body=json.dumps(mock_response_data)
                )
            else:
                route.continue_()

        # Set up the route interception
        page.route("**/*", handle_route)

        # Navigate to the page
        page.goto(f"http://localhost:{PORT}/index.html")

        # Inject a dummy API key to bypass the check
        page.evaluate("localStorage.setItem('geminiApiKey', 'dummy-key')")
        page.reload()

        # Navigate to the 'Lagu' tab (assuming it's the 3rd tab or by id)
        # First ensure we are in the designer tab
        page.click("#tab-desainer")

        # Click the Lagu tab
        page.click("#designer-tab-lagu")

        print("Uploading file...")

        # Simulate file upload (audio)
        with open("dummy.mp3", "wb") as f:
            f.write(b"dummy audio content")

        # Set input files
        page.set_input_files("#audio-upload", "dummy.mp3")

        print("File uploaded. Waiting for processing...")

        # The app should automatically trigger the analysis.
        # Wait for the output textarea to be populated.
        output_lirik = page.locator("#output-lirik")

        # First wait for the loading text if possible, or just wait for the result
        # The loading text is "🎧 AI sedang mendengarkan..."
        # We wait for it to NOT be empty first
        expect(output_lirik).not_to_be_empty(timeout=10000)
        print("Textarea is not empty. Checking content...")

        # Now wait for the specific content
        try:
            expect(output_lirik).to_contain_text("[Verse 1]", timeout=10000)
        except AssertionError as e:
            print(f"Assertion failed. Current content: {output_lirik.input_value()}")
            raise e

        # Get the value
        value = output_lirik.input_value()
        print(f"Textarea value:\n{value}")

        # Assertions
        assert "[Verse 1]" in value
        assert "Ini baris pertama" in value
        assert "\n" in value # Check for actual newlines

        # Check if double newlines exist (stanza separation)
        if "\n\n" in value:
            print("Double newline found (Stanza separation confirmed)")
        elif "\r\n\r\n" in value: # Windows style
             print("Double newline (CRLF) found")
        else:
             print("Warning: Double newline not found. Checking raw representation.")
             print(repr(value))

        print("Verification successful!")
        browser.close()

        # Clean up
        if os.path.exists("dummy.mp3"):
            os.remove("dummy.mp3")

if __name__ == "__main__":
    verify_lyrics_formatting()
