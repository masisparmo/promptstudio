from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Listen to console logs
    page.on("console", lambda msg: print(f"Console: {msg.text}"))

    page.goto("http://localhost:8080/index.html")

    # Clear local storage to be safe
    page.evaluate("localStorage.clear()")
    page.reload()

    # Click tab
    page.click("#tab-desainer")

    # Check visibility
    is_gate_visible = page.is_visible("#login-gate")
    print(f"Gate visible: {is_gate_visible}")

    if not is_gate_visible:
        # Debug: Print classes of login-gate and content-desainer
        gate_class = page.get_attribute("#login-gate", "class")
        section_class = page.get_attribute("#content-desainer", "class")
        print(f"Gate classes: {gate_class}")
        print(f"Section classes: {section_class}")

    page.screenshot(path="verification/debug_login.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
