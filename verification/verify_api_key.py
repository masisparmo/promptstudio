from playwright.sync_api import sync_playwright, expect
import time

def verify_api_key_flow(page):
    # 1. Arrange: Go to the app (hosted locally)
    page.goto("http://localhost:8080/index.html")

    # 2. Assert: Welcome screen is GONE, main app is visible, Settings button exists
    expect(page.locator("#welcome-screen")).not_to_be_visible()
    expect(page.locator("#main-app")).to_be_visible()
    expect(page.locator("#settings-button")).to_be_visible()

    # 3. Act: Try to click "DESAINER PROMPT" without a key
    page.locator("#tab-desainer").click()

    # 4. Assert: Modal should appear
    expect(page.locator("#api-key-modal")).to_be_visible()

    # 5. Act: Close modal
    page.locator("#close-api-key-modal").click()

    # 6. Assert: Modal closed, Alert shown (we accept alert), still on Belajar tab
    # Note: Handling alerts in Playwright requires an event handler
    def handle_dialog(dialog):
        print(f"Alert message: {dialog.message}")
        dialog.accept()

    page.on("dialog", handle_dialog)

    # Re-trigger close to verify alert (since I closed it before setting listener, strictly speaking I should set listener first)
    # Let's re-open and close correctly
    page.locator("#settings-button").click()
    expect(page.locator("#api-key-modal")).to_be_visible()
    page.locator("#close-api-key-modal").click()

    # 7. Act: Enter API Key via Settings
    page.locator("#settings-button").click()
    page.locator("#modal-api-key-input").fill("dummy-api-key-123")
    page.locator("#save-api-key-btn").click()

    # 8. Assert: Modal closed
    expect(page.locator("#api-key-modal")).not_to_be_visible()

    # 9. Act: Click "DESAINER PROMPT" again
    page.locator("#tab-desainer").click()

    # 10. Assert: Tab switched successfully (content-desainer visible)
    expect(page.locator("#content-desainer")).to_be_visible()

    # Take screenshot of the success state
    page.screenshot(path="/home/jules/verification/api_key_flow.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        # Mock localStorage if needed, but we are testing fresh flow
        page = context.new_page()
        try:
            verify_api_key_flow(page)
            print("Verification script ran successfully.")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()
