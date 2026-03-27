import socket
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
import threading
import time
import json
from playwright.sync_api import sync_playwright

def get_free_port():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind(('localhost', 0))
    port = s.getsockname()[1]
    s.close()
    return port

PORT = get_free_port()

def start_server():
    httpd = TCPServer(("", PORT), SimpleHTTPRequestHandler)
    httpd.serve_forever()

server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()
time.sleep(2)

def run_test():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        def handle_response(response):
            if "generativelanguage.googleapis.com" in response.url:
                print(f"--- API Response Status: {response.status} ---")

        page.on("response", handle_response)

        # Go to app
        page.goto(f"http://localhost:{PORT}/index.html")
        page.evaluate("localStorage.setItem('geminiApiKey', 'AIzaSyATGnp0biFwKMCGAIrJoqu9xYtBx-mRex4')")
        page.reload()

        # Switch tabs
        page.click('#tab-desainer')
        page.click('#designer-tab-lagu')

        # Fill inputs per user prompt
        page.fill('#tema-lagu', 'nasehat agar jangan asal share berita, informasi, video, dari sumber yang tidak kredibel. Harus melakukan verifikasi, tabayun, dahulu sebelum menyebarkan. Sebab sekarang jaman fitnah, jaman AI, segala hoax, kepalsuan, sangat mudah dibuat.')
        page.select_option('#vokalis-lagu', 'Laki-laki')
        page.fill('#genre-utama-search', 'workout rapp')
        page.click('body') # blur

        # Click Generate
        print("Clicking BUAT PROMPT LAGU")
        page.click('#buat-prompt-lagu-button')

        # Wait for the result
        print("Waiting for generation...")
        try:
            # We wait until the UI doesn't say "sedang meracik"
            page.wait_for_function('document.getElementById("output-lirik").value !== "AI sedang meracik lirik untuk Anda..."', timeout=15000)
            print("Generation completed or failed.")
            page.wait_for_timeout(1000) # Wait a bit for UI update
        except Exception as e:
            print("Timeout waiting for generation.")

        # Print output status
        print("Output Lirik starts with:")
        val = page.evaluate('document.getElementById("output-lirik").value')
        print(val[:100] if val else "Empty")

        page.screenshot(path="verification/test_real_song_generation.png", full_page=True)
        print("Screenshot saved to verification/test_real_song_generation.png")
        browser.close()

if __name__ == "__main__":
    run_test()
