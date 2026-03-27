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

        # Listen to API requests to see the payload
        def handle_request(request):
            if "generativelanguage.googleapis.com" in request.url:
                print(f"--- API Request Payload ---")
                try:
                    payload = request.post_data_json
                    print(json.dumps(payload, indent=2))
                except Exception as e:
                    print(f"Failed to parse payload: {e}")

        def handle_response(response):
            if "generativelanguage.googleapis.com" in response.url:
                print(f"--- API Response Status: {response.status} ---")
                try:
                    body = response.text()
                    print(body)
                except Exception as e:
                    print(f"Failed to read response body: {e}")

        page.on("request", handle_request)
        page.on("response", handle_response)

        # Go to app
        page.goto(f"http://localhost:{PORT}/index.html")
        page.evaluate("localStorage.setItem('geminiApiKey', 'dummy_fake_key_12345')")
        page.reload()

        # Switch tabs
        page.click('#tab-desainer')
        page.click('#designer-tab-lagu')

        # Fill inputs per user prompt
        page.fill('#tema-lagu', 'nasehat agar jangan asal share berita, informasi, video, dari sumber yang tidak kredibel. Harus melakukan verifikasi, tabayun, dahulu sebelum menyebarkan. Sebab sekarang jaman fitnah, jaman AI, segala hoax, kepalsuan, sangat mudah dibuat.')
        page.select_option('#vokalis-lagu', 'Laki-laki')
        page.fill('#genre-utama-search', 'workout rapp')

        # Let's bypass the dummy key check or see the real API response
        print("Clicking BUAT PROMPT LAGU")
        page.click('#buat-prompt-lagu-button')

        # Wait for the error or result
        try:
            page.wait_for_function('document.getElementById("output-lirik").value.includes("Maaf, terjadi kesalahan")', timeout=10000)
            print("Error message appeared on UI.")
        except Exception as e:
            print("Timeout waiting for error message on UI, maybe it succeeded or took too long.")

        browser.close()

if __name__ == "__main__":
    run_test()
