from playwright.sync_api import sync_playwright
import os

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # 1. Open the page
    page.goto("http://localhost:8080/index.html")

    # 2. Click the 'Desainer Prompt' tab
    page.click("#tab-desainer")

    # 3. Verify the Login Gate is visible (Not Logged In State)
    if not page.is_visible("#login-gate"):
        print("Error: Login Gate should be visible initially.")
        return

    # Take screenshot of the gate
    page.screenshot(path="verification/1_login_gate.png")

    # 4. Mock the Login Process
    # Since prompt() blocks execution, we need to handle the dialog
    def handle_dialog(dialog):
        if "Nama" in dialog.message:
            dialog.accept("Test User")
        elif "Email" in dialog.message:
            dialog.accept("test@example.com")
        else:
            dialog.accept()

    page.on("dialog", handle_dialog)

    # Click the login button
    page.click("#google-login-btn")

    # Wait for UI update
    page.wait_for_selector("#user-profile-header")

    # 5. Verify the content is now accessible
    if page.is_visible("#login-gate"):
        print("Error: Login Gate should be hidden after login.")

    # Take screenshot of the accessible content
    page.screenshot(path="verification/2_logged_in.png")

    # 6. Test Logout
    # We need to handle the confirm dialog for logout
    page.on("dialog", lambda d: d.accept())
    page.click("#logout-btn")

    # Wait for UI update
    page.wait_for_selector("#login-gate")

    # Take screenshot of the gate reappearing
    page.screenshot(path="verification/3_logged_out.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
