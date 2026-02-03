from playwright.sync_api import sync_playwright
import os

def run():
    os.makedirs('verification', exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate
            page.goto("http://localhost:8080/index.html")

            # Inject dummy API key to pass check
            page.evaluate("localStorage.setItem('geminiApiKey', 'dummy-key')")
            page.reload()

            # Click Analisa Tab
            page.click("#tab-analisa")
            page.wait_for_selector("#content-analisa.active")

            # Screenshot 1: Analisa Prompt Tab (Image Mode by default)
            page.screenshot(path="verification/analisa_tab_image.png")
            print("Screenshot 1 taken")

            # Switch to Video Mode
            page.click("#analisa-tab-video")
            # Wait for video input to be visible
            page.wait_for_selector("#analisa-video-input:not(.hidden)")

            # Screenshot 2: Analisa Prompt Tab (Video Mode)
            page.screenshot(path="verification/analisa_tab_video.png")
            print("Screenshot 2 taken")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
