
import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Go to the local server
        await page.goto("http://localhost:8000")

        # Wait for the main application to be visible immediately
        await expect(page.locator("#main-app")).to_be_visible()

        # Start with a baseline screenshot of the initial "Panduan" tab
        await page.screenshot(path="verification/01_initial_panduan_tab.png")

        # Click the "Desainer Prompt" tab.
        # Note: Navigating to Desainer tab now checks for API key and shows a modal if missing.
        # We need to simulate having an API key or handle the modal.

        # Scenario 1: No API key set. Expect Modal.
        await page.locator("#tab-desainer").click()

        # Check if API Key modal appears
        try:
             await expect(page.locator("#api-key-modal")).to_be_visible(timeout=3000)
             print("API Key modal appeared as expected.")

             # Fill API Key
             await page.locator("#modal-api-key-input").fill("DUMMY_API_KEY")
             await page.locator("#save-api-key-btn").click()

             # After saving, it should probably go to the tab or we need to click again?
             # Based on code: "if elements.apiKeyModal.dataset.returnTab === 'desainer' ... showTab('desainer')"
             await expect(page.locator("#content-desainer")).to_be_visible()

        except AssertionError:
             # If no modal, maybe API key was already there? (unlikely in fresh browser context)
             print("API Key modal did not appear (unexpected for fresh session).")

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
