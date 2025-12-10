from playwright.sync_api import sync_playwright, expect
import time

def verify_assistant_api_key_flow(page):
    # 1. Arrange: Go to the app (hosted locally)
    page.goto("http://localhost:8080/index.html")

    # Ensure button is visible (it should be now, always)
    expect(page.locator("#assistant-button")).to_be_visible()

    # 2. Act: Click Assistant Button without key
    page.locator("#assistant-button").click()

    # 3. Assert: Modal appears
    expect(page.locator("#api-key-modal")).to_be_visible()

    # 4. Act: Close modal
    page.locator("#close-api-key-modal").click()

    # 5. Assert: Modal closed, Assistant Modal NOT open
    expect(page.locator("#api-key-modal")).not_to_be_visible()
    expect(page.locator("#assistant-modal")).not_to_be_visible()

    # 6. Act: Enter API Key
    page.locator("#settings-button").click()
    page.locator("#modal-api-key-input").fill("dummy-api-key-456")
    page.locator("#save-api-key-btn").click()

    # 7. Act: Click Assistant Button WITH key
    page.locator("#assistant-button").click()

    # 8. Assert: Assistant Modal OPEN
    expect(page.locator("#assistant-modal")).to_be_visible()

    page.screenshot(path="/home/jules/verification/assistant_flow_fixed.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            verify_assistant_api_key_flow(page)
            print("Assistant Verification script ran successfully.")
        except Exception as e:
            print(f"Assistant Verification failed: {e}")
        finally:
            browser.close()
