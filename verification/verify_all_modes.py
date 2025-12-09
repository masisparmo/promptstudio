import os
import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        page.goto(f"file://{os.getcwd()}/index.html")

        # Bypass Welcome Screen
        page.evaluate("document.getElementById('welcome-screen').style.display = 'none'")
        page.evaluate("document.getElementById('main-app').classList.add('active')")
        page.wait_for_selector('#main-app.active')

        # --- TEST 1: VIDEO MODE ---
        print("Testing Video Mode...")
        page.click('#tab-desainer')
        page.click('#designer-tab-video')

        # Upload video ref image
        page.locator('input#image-upload-video').set_input_files('verification/test_image.png')
        page.wait_for_selector('#video-preview-container:not(.hidden)')

        # Save
        page.fill('#subjek-video-subject', 'Video Subject')
        page.click('#save-prompt-button')
        page.wait_for_function("document.getElementById('save-prompt-button').textContent.includes('TERSMPAN')")

        # Clear
        page.click('#clear-all-button')
        assert page.is_hidden('#video-preview-container')

        # Load
        page.click('#tab-riwayat')
        page.wait_for_selector('.use-prompt-btn')
        page.click('.use-prompt-btn >> nth=0')

        page.wait_for_selector('#video-designer-form.active')

        # Verify
        visible = page.is_visible('#video-preview-container')
        src = page.get_attribute('#uploaded-video-preview', 'src')
        if visible and "data:image" in src:
            print("PASS: Video Mode Image Restored")
        else:
            print(f"FAIL: Video Mode Image Not Restored. Visible: {visible}, Src: {src[:30]}...")

        # --- TEST 2: CHARACTER MODE ---
        print("\nTesting Character Mode...")
        # Switch to Designer tab explicitly
        page.click('#tab-desainer')
        page.click('#designer-tab-image')

        # If we are in video mode, we need to ensure we are in image mode (clicked above)
        # If standard form is visible, select 'karakter'.
        # But if a previous test left us in a state where standard form is hidden, we might need to reset.
        if page.is_visible('#back-to-tujuan-button-char'):
             page.click('#back-to-tujuan-button-char')
        elif page.is_visible('#back-to-tujuan-button'):
             page.click('#back-to-tujuan-button')

        page.wait_for_selector('#tujuan-gambar', state='visible')
        page.select_option('#tujuan-gambar', 'karakter')

        # Upload char ref image
        page.locator('input#image-upload-char').set_input_files('verification/test_image.png')
        page.wait_for_selector('#character-preview-container:not(.hidden)')

        # Save
        page.fill('#char-name', 'Character Name')
        page.click('#save-prompt-button')
        page.wait_for_function("document.getElementById('save-prompt-button').textContent.includes('TERSMPAN')")

        # Clear
        page.click('#clear-all-button')
        assert page.is_hidden('#character-preview-container')

        # Load
        page.click('#tab-riwayat')
        page.wait_for_timeout(500) # Wait for list update
        page.click('.use-prompt-btn >> nth=0')

        page.wait_for_selector('#image-designer-form.active')

        # Verify
        visible = page.is_visible('#character-preview-container')
        src = page.get_attribute('#uploaded-char-preview', 'src')
        if visible and "data:image" in src:
            print("PASS: Character Mode Image Restored")
        else:
            print(f"FAIL: Character Mode Image Not Restored. Visible: {visible}, Src: {src[:30]}...")

        # --- TEST 3: COMPOSITION MODE ---
        print("\nTesting Composition Mode...")
        # Switch to Designer tab explicitly
        page.click('#tab-desainer')
        page.click('#designer-tab-image')

        # Reset if currently in character mode (which we likely are from previous test load)
        if page.is_visible('#back-to-tujuan-button-char'):
             page.click('#back-to-tujuan-button-char')
        elif page.is_visible('#back-to-tujuan-button'):
             page.click('#back-to-tujuan-button')

        page.wait_for_selector('#image-designer-form.active')
        page.wait_for_selector('#tujuan-gambar', state='visible')

        page.select_option('#tujuan-gambar', 'gabungkan')

        # Upload 2 images
        page.locator('input#image-upload-compose-1').set_input_files('verification/test_image.png')
        page.locator('input#image-upload-compose-2').set_input_files('verification/test_image.png')

        # Wait for previews
        page.wait_for_function("!document.getElementById('uploaded-compose-preview-1').parentElement.classList.contains('hidden')")
        page.wait_for_function("!document.getElementById('uploaded-compose-preview-2').parentElement.classList.contains('hidden')")

        # Save
        page.fill('#composition-details', 'Mix them')
        page.click('#save-prompt-button')
        page.wait_for_function("document.getElementById('save-prompt-button').textContent.includes('TERSMPAN')")

        # Clear
        page.click('#clear-all-button')
        # Verify hidden
        page.wait_for_function("document.getElementById('uploaded-compose-preview-1').parentElement.classList.contains('hidden')")

        # Load
        page.click('#tab-riwayat')
        page.wait_for_timeout(500)
        page.click('.use-prompt-btn >> nth=0')

        page.wait_for_selector('#image-designer-form.active')

        # Verify
        # Need to check the parent element visibility as per logic
        visible1 = page.evaluate("!document.getElementById('uploaded-compose-preview-1').parentElement.classList.contains('hidden')")
        src1 = page.get_attribute('#uploaded-compose-preview-1', 'src')

        if visible1 and "data:image" in src1:
             print("PASS: Composition Mode Image 1 Restored")
        else:
             print(f"FAIL: Composition Mode Image 1 Not Restored. Visible: {visible1}, Src: {src1[:30]}...")

        # Take Screenshot for frontend verification
        page.screenshot(path='verification/final_restored_state.png')

        browser.close()

if __name__ == "__main__":
    run()
