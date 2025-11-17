
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

        # --- Test 1: Save and Load IMAGE prompt ---
        await page.locator("#tab-desainer").click()
        await page.locator("#designer-tab-image").click()
        await page.locator("#produk-gambar").fill("Test Produk Gambar")
        await page.locator("#gaya-gambar").fill("Test Gaya Gambar")
        await page.locator("#final-prompt-container #save-prompt-button").click()

        # --- Test 2: Save and Load VIDEO prompt ---
        await page.locator("#designer-tab-video").click()
        await page.locator("#subjek-video-subject").fill("Test Subjek Video")
        await page.locator("#subjek-video-action").fill("Test Aksi Video")
        await page.locator("#final-prompt-container #save-prompt-button").click()

        # --- Test 3: Save and Load LAGU prompt ---
        await page.locator("#designer-tab-lagu").click()
        await page.evaluate("""() => {
            document.getElementById('output-lirik').value = 'Test Lirik Lagu';
            document.getElementById('output-gaya').value = 'Test Gaya Lagu';
        }""")
        await page.locator("#save-lagu-prompt-button").click()


        # --- Verification Step ---
        await page.locator("#tab-riwayat").click()
        await page.screenshot(path="verification/01_history_list_full.png")

        # Load and verify LAGU
        await page.locator(".use-prompt-btn").nth(0).click() # Most recent is first
        await expect(page.locator("#designer-tab-lagu")).to_have_class("designer-tab-button active")
        await expect(page.locator("#output-lirik")).to_have_value("Test Lirik Lagu")
        await expect(page.locator("#output-gaya")).to_have_value("Test Gaya Lagu")
        await page.screenshot(path="verification/02_load_lagu_success.png")

        # Go back to history and load VIDEO
        await page.locator("#tab-riwayat").click()
        await page.locator(".use-prompt-btn").nth(1).click()
        await expect(page.locator("#designer-tab-video")).to_have_class("designer-tab-button active")
        await expect(page.locator("#subjek-video-subject")).to_have_value("Test Subjek Video")
        await expect(page.locator("#subjek-video-action")).to_have_value("Test Aksi Video")
        await page.screenshot(path="verification/03_load_video_success.png")

        # Go back to history and load IMAGE
        await page.locator("#tab-riwayat").click()
        await page.locator(".use-prompt-btn").nth(2).click()
        await expect(page.locator("#designer-tab-image")).to_have_class("designer-tab-button active")
        await expect(page.locator("#produk-gambar")).to_have_value("Test Produk Gambar")
        await expect(page.locator("#gaya-gambar")).to_have_value("Test Gaya Gambar")
        await page.screenshot(path="verification/04_load_image_success.png")

        await browser.close()
        print("Verification successful: Save and Load functionality works for all designer types.")

if __name__ == "__main__":
    asyncio.run(main())
