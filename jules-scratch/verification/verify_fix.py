import asyncio
from playwright.async_api import async_playwright, expect
import os
import re

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # 1. Navigate to the local HTML file
        file_path = "file://" + os.path.abspath("index.html")
        await page.goto(file_path)

        # 2. Enter a dummy API key and start the app
        await page.locator("#use-user-api-key").click()
        await page.locator("#api-key-input").fill("dummy-api-key")
        await page.locator("#start-with-api-key").click()

        # Wait for the main app to be visible
        await expect(page.locator("#main-app")).to_be_visible()

        # 3. Navigate to the Video Prompt Designer
        await page.locator("#tab-desainer").click()
        await page.locator("#designer-tab-video").click()
        await expect(page.locator("#video-designer-form")).to_be_visible()

        # 4. Inject a dummy image (1x1 red pixel GIF) into the page's state
        dummy_base64_image = "R0lGODlhAQABAIABAP8AAP///yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        await page.evaluate(f"() => {{ window.videoRefImageBase64 = '{dummy_base64_image}'; }}")

        # Also need to set the file object to satisfy the handleVideoFileSelect function logic
        await page.evaluate("() => { window.videoRefImageFile = { name: 'dummy.gif', type: 'image/gif' }; }")

        # Make the preview container visible to simulate a real upload
        await page.locator("#video-preview-container").evaluate("element => element.classList.remove('hidden')")
        await page.evaluate(f"""
            element = document.querySelector('#uploaded-video-preview');
            if (element) {{
                element.setAttribute('src', 'data:image/gif;base64,{dummy_base64_image}');
            }}
        """)

        # 5. Click the analysis button
        analysis_button = page.locator("#analyze-video-image-button")
        await analysis_button.click()

        # 6. Assert that the button's text changes back after the failed API call.

        # The API call will fail because the key is fake, but the script shouldn't crash.
        # The 'finally' block should restore the button's text.
        await expect(analysis_button).to_contain_text("ANALISA GAMBAR & ISI FORM", timeout=15000)

        # Assert the textarea is visible and contains the error message
        textarea = page.locator("#video-image-analysis-result")
        await expect(textarea).to_be_visible()
        await expect(textarea).to_have_value(re.compile("Maaf, terjadi kesalahan"))

        # 7. Take a screenshot
        screenshot_path = "jules-scratch/verification/verification.png"
        await page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
