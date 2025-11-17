
import asyncio
import re
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        await page.goto("http://localhost:8000")

        # Handle Welcome Screen
        await page.locator("#use-user-api-key").click()
        await expect(page.locator("#api-key-section")).to_be_visible()
        await page.locator("#api-key-input").fill("DUMMY_API_KEY")
        await page.locator("#start-with-api-key").click()
        await expect(page.locator("#main-app")).to_be_visible()

        # Go to the designer and save a prompt
        await page.locator("#tab-desainer").click()
        await page.locator("#produk-gambar").fill("Test Image Prompt")
        await page.locator("#save-prompt-button").click()

        # Go to the history tab
        await page.locator("#tab-riwayat").click()
        await expect(page.locator("#prompt-history-list")).not_to_be_empty()

        # --- Test Individual Download ---
        async with page.expect_download() as download_info:
            await page.locator(".download-prompt-btn").first.click()
        download = await download_info.value
        filename_single = download.suggested_filename

        # Verify single download filename format: gambar_DDMMYY-HHMM.dps
        assert re.match(r"gambar_\d{6}-\d{4}\.dps", filename_single), f"Invalid single download filename: {filename_single}"
        print(f"Verified single download filename: {filename_single}")

        # --- Test Export All ---
        async with page.expect_download() as download_info_all:
            await page.locator("#export-prompts-button").click()
        download_all = await download_info_all.value
        filename_all = download_all.suggested_filename

        # Verify export-all filename format: data-prompt_DDMMYY.dps
        assert re.match(r"data-prompt_\d{6}\.dps", filename_all), f"Invalid export-all filename: {filename_all}"
        print(f"Verified export-all filename: {filename_all}")

        # Take a screenshot for visual confirmation
        await page.screenshot(path="verification/export-verification.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
