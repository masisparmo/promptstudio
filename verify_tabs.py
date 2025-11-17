
import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Go to the local server
        await page.goto("http://localhost:8000")

        # --- Handle Welcome Screen ---
        # Click the button to use a user API key
        await page.locator("#use-user-api-key").click()

        # Wait for the API key input section to appear
        await expect(page.locator("#api-key-section")).to_be_visible()

        # Fill in a dummy API key
        await page.locator("#api-key-input").fill("DUMMY_API_KEY")

        # Click the start button
        await page.locator("#start-with-api-key").click()

        # Wait for the main application to be visible
        await expect(page.locator("#main-app")).to_be_visible()
        # --- End of Welcome Screen Handling ---

        # Now that the main app is visible, proceed with tab verification

        # Start with a baseline screenshot of the initial "Panduan" tab
        await page.screenshot(path="verification/01_initial_panduan_tab.png")

        # Click the "Desainer Prompt" tab and take a screenshot
        await page.locator("#tab-desainer").click()
        await expect(page.locator("#content-desainer")).to_be_visible()
        await page.screenshot(path="verification/02_desainer_tab.png")

        # Click the "Riwayat" tab
        await page.locator("#tab-riwayat").click()

        # Verify the "Riwayat" content is visible and has the correct title
        riwayat_content = page.locator("#content-riwayat")
        await expect(riwayat_content).to_be_visible()
        await expect(riwayat_content.locator("h2")).to_have_text("Riwayat Prompt")

        # Check for the message indicating no prompts are saved yet
        await expect(riwayat_content).to_contain_text("Belum ada prompt yang disimpan.")

        # Take a screenshot of the "Riwayat" tab
        await page.screenshot(path="verification/03_riwayat_tab_empty.png")

        # Click back to the "Panduan" tab to ensure it still works
        await page.locator("#tab-belajar").click()
        await expect(page.locator("#content-belajar")).to_be_visible()
        await page.screenshot(path="verification/04_back_to_panduan_tab.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
