
import os
import http.server
import socketserver
import threading
import re
from playwright.sync_api import sync_playwright, expect

# Function to find a free port
def get_free_port():
    with socketserver.TCPServer(("localhost", 0), None) as s:
        return s.server_address[1]

# Start a simple HTTP server to serve the app
PORT = get_free_port()
DIRECTORY = os.getcwd()

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()

server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()

def verify_fix():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        try:
            # 1. Load the app
            page.goto(f"http://localhost:{PORT}/index.html")

            # 2. Set a dummy API key
            page.evaluate("localStorage.setItem('geminiApiKey', 'dummy_key')")
            page.reload()

            # 3. Navigate to Desainer Prompt -> Video
            page.get_by_role("button", name="DESAINER PROMPT").click()
            page.get_by_role("button", name="Video (Veo3)").click()

            # 4. Upload a dummy image
            if not os.path.exists("dummy.jpg"):
                with open("dummy.jpg", "wb") as f:
                    f.write(b'\xFF\xD8\xFF\xE0\x00\x10\x4A\x46\x49\x46\x00\x01\x01\x01\x00\x48\x00\x48\x00\x00\xFF\xDB\x00\x43\x00\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xC0\x00\x11\x08\x00\x10\x00\x10\x03\x01\x22\x00\x02\x11\x01\x03\x11\x01\xFF\xC4\x00\x15\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x08\xFF\xDA\x00\x0C\x03\x01\x00\x02\x11\x03\x11\x00\x3F\x00\xBF\x00\xFF\xD9')

            page.set_input_files("#image-upload-video", "dummy.jpg")

            # Wait for preview to appear
            expect(page.locator("#uploaded-video-preview")).to_be_visible()

            # 5. Click "Analisa Gambar & Isi Form"
            page.get_by_role("button", name="ANALISA GAMBAR & ISI FORM").click()

            # 6. Expect the loading state or result text area to be visible and contain something (or at least NOT crash)
            # The result textarea is #video-image-analysis-result. It should become visible.
            result_area = page.locator("#video-image-analysis-result")
            expect(result_area).to_be_visible()

            # Use regex to check for value because it is a textarea
            expect(result_area).to_have_value(re.compile(r"Maaf, terjadi kesalahan"))

            print("SUCCESS: The analysis function ran and handled the API error gracefully.")
            page.screenshot(path="verification/verification.png")

        except Exception as e:
            print(f"FAILED: An exception occurred: {e}")
            page.screenshot(path="verification/verify_fail.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_fix()
