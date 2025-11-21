
import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        await page.goto("http://localhost:8000")

        # Handle Welcome Screen
        await page.locator("#use-user-api-key").click()
        await page.locator("#api-key-input").fill("DUMMY_API_KEY")
        await page.locator("#start-with-api-key").click()
        await expect(page.locator("#main-app")).to_be_visible()

        # --- Step 1: Create and Save an IMAGE prompt ---
        print("Creating and saving a test prompt...")
        await page.locator("#tab-desainer").click()
        await page.locator("#designer-tab-image").click()
        await page.locator("#produk-gambar").fill("Kucing Oranye Cyberpunk")
        await page.locator("#gaya-gambar").fill("Neon, Futuristic, High Contrast")

        # Set Aspect Ratio to check if it appears in preview (default is 1:1)

        await page.locator("#final-prompt-container #save-prompt-button").click()
        await expect(page.locator("#save-prompt-button")).to_contain_text("TERSMPAN")

        # --- Step 2: Go to History and Open Preview ---
        print("Navigating to History...")
        await page.locator("#tab-riwayat").click()
        await expect(page.locator("#prompt-history-list").locator("div").first).to_be_visible()

        print("Clicking Preview button...")
        preview_btn = page.locator(".preview-prompt-btn").first
        await preview_btn.click()

        # --- Step 3: Verify Modal Content & New Button ---
        print("Verifying Modal content...")
        modal = page.locator("#preview-modal")
        await expect(modal).to_be_visible()

        # Check for "Input Mentah" data
        modal_body = page.locator("#preview-modal-body")
        await expect(modal_body).to_contain_text("Objek Utama")
        await expect(modal_body).to_contain_text("Kucing Oranye Cyberpunk")
        await expect(modal_body).to_contain_text("Aspek Rasio")
        await expect(modal_body).to_contain_text("1:1")

        # Check for "Gunakan" button
        use_btn = page.locator("#use-preview-btn")
        await expect(use_btn).to_be_visible()
        await expect(use_btn).to_have_text("Gunakan")

        await page.screenshot(path="verification/preview_modal_with_use.png")

        # --- Step 4: Test "Gunakan" Button ---
        print("Clicking 'Gunakan' in modal...")
        await use_btn.click()

        # Modal should close
        await expect(modal).to_be_hidden()

        # Should navigate to Designer tab and populate fields
        print("Verifying prompt loaded...")
        # Check if content section is visible instead of tab button class string
        await expect(page.locator("#content-desainer")).to_be_visible()
        await expect(page.locator("#produk-gambar")).to_have_value("Kucing Oranye Cyberpunk")

        print("Verification successful: Preview modal inputs and Use button work correctly.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
