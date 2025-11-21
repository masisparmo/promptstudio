
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
        await page.locator("#final-prompt-container #save-prompt-button").click()

        # Wait for save to complete
        await expect(page.locator("#save-prompt-button")).to_contain_text("TERSMPAN")

        # --- Step 2: Go to History and Open Preview ---
        print("Navigating to History...")
        await page.locator("#tab-riwayat").click()

        # Wait for list to populate
        await expect(page.locator("#prompt-history-list").locator("div").first).to_be_visible()

        print("Clicking Preview button...")
        # Find the first preview button (eye icon)
        preview_btn = page.locator(".preview-prompt-btn").first
        await preview_btn.click()

        # --- Step 3: Verify Modal Content ---
        print("Verifying Modal content...")
        modal = page.locator("#preview-modal")
        await expect(modal).to_be_visible()

        # Check for header
        await expect(modal.locator("h3")).to_have_text("Preview Data Prompt")

        # Check for specific field content
        modal_body = page.locator("#preview-modal-body")
        await expect(modal_body).to_contain_text("Objek Utama")
        await expect(modal_body).to_contain_text("Kucing Oranye Cyberpunk")
        await expect(modal_body).to_contain_text("Gaya Visual")
        await expect(modal_body).to_contain_text("Neon, Futuristic, High Contrast")

        await page.screenshot(path="verification/preview_modal_verified.png")

        # --- Step 4: Close Modal ---
        print("Closing Modal...")
        await page.locator("#close-preview-btn-secondary").click()
        await expect(modal).to_be_hidden()

        print("Verification successful: Preview modal works as expected.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
