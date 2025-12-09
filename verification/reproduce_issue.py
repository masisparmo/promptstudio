import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Load the local HTML file
        page.goto(f"file://{os.getcwd()}/index.html")

        # Force entry to main app
        page.evaluate("document.getElementById('welcome-screen').style.display = 'none'")
        page.evaluate("document.getElementById('main-app').classList.add('active')")

        # Wait for main app to be visible
        page.wait_for_selector('#main-app.active')

        # 1. Go to Image Designer
        page.click('#tab-desainer')
        page.click('#designer-tab-image')

        # 2. Upload an image
        file_input = page.locator('input#image-upload')
        file_input.set_input_files('verification/test_image.png')

        # Wait for preview to appear
        page.wait_for_selector('#image-preview-container:not(.hidden)')

        # Verify preview source is set (initial state)
        preview_src = page.get_attribute('#uploaded-image-preview', 'src')
        assert "data:image" in preview_src, "Initial image preview not working"

        # 3. Fill other fields to make a valid prompt
        page.fill('#produk-gambar', 'Test Product')

        # 4. Save the prompt
        page.click('#save-prompt-button')

        # Wait for "TERSMPAN!" or check database
        page.wait_for_function("document.getElementById('save-prompt-button').textContent.includes('TERSMPAN')")

        # 5. Clear inputs
        page.click('#clear-all-button')

        # Verify preview is hidden
        assert page.is_hidden('#image-preview-container'), "Preview not hidden after clear"

        # 6. Go to History and Load
        page.click('#tab-riwayat')

        # Click the first "Gunakan" (Use) button.
        page.wait_for_selector('.use-prompt-btn')
        page.click('.use-prompt-btn')

        # Wait for "DIMUAT!" indication or switch back to designer
        page.wait_for_selector('#image-designer-form.active')

        # 7. VERIFY: Check if image preview is back
        is_preview_visible = page.is_visible('#image-preview-container')
        preview_src_loaded = page.get_attribute('#uploaded-image-preview', 'src')

        print(f"Preview Visible: {is_preview_visible}")
        print(f"Preview Src: {preview_src_loaded}")

        if not is_preview_visible or not preview_src_loaded or "data:image" not in preview_src_loaded:
            print("ISSUE REPRODUCED: Image was not restored after loading.")
        else:
            print("ISSUE NOT REPRODUCED: Image was restored.")

        browser.close()

if __name__ == "__main__":
    run()
