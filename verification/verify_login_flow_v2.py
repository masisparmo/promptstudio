from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # 1. Open the page
    page.goto("http://localhost:8080/index.html")

    # 2. Click the 'Desainer Prompt' tab
    page.click("#tab-desainer")

    # 3. Verify the Login Gate is visible
    if not page.is_visible("#login-gate"):
        print("Error: Login Gate should be visible initially.")
        return
    print("SUCCESS: Login Gate is visible.")
    page.screenshot(path="verification/1_gate_visible.png")

    # 4. Handle Dialogs (Login Prompts & Logout Confirm)
    def handle_dialog(dialog):
        print(f"Dialog Message: {dialog.message}")
        if "Nama" in dialog.message:
            dialog.accept("Test User")
        elif "Email" in dialog.message:
            dialog.accept("test@example.com")
        elif "keluar" in dialog.message:
            dialog.accept()
        else:
            dialog.accept()

    page.on("dialog", handle_dialog)

    # 5. Click Login
    print("Clicking Login...")
    page.click("#google-login-btn")

    # 6. Verify User Profile appears
    page.wait_for_selector("#user-profile-header", state="visible")
    print("SUCCESS: User Logged In.")

    # Verify Gate is gone
    if page.is_visible("#login-gate"):
        print("Error: Login Gate should be hidden.")
    else:
        print("SUCCESS: Login Gate hidden.")

    page.screenshot(path="verification/2_user_dashboard.png")

    # 7. Test Logout
    print("Clicking Logout...")
    page.click("#logout-btn")

    # 8. Verify Gate reappears
    page.wait_for_selector("#login-gate", state="visible")
    print("SUCCESS: Logged Out, Gate reappeared.")

    page.screenshot(path="verification/3_logout_complete.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
