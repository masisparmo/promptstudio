
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

        # Navigate to the Character Designer
        await page.locator("#tab-desainer").click()
        await page.locator("#tujuan-gambar").select_option("karakter")

        # Fill out the character form
        await page.locator("#char-name").fill("Aria Test")
        await page.locator("#char-physic").fill("Cybernetic eyes")
        await page.locator("#char-attire").fill("Hacker gear")
        await page.locator("#char-style").fill("Synthwave")

        # Save the character prompt
        await page.locator("#final-prompt-container #save-prompt-button").click()

        # Navigate to history to verify
        await page.locator("#tab-riwayat").click()
        await expect(page.locator("#prompt-history-list")).not_to_be_empty()
        await page.screenshot(path="verification/01_character_saved.png")

        # Click the "Gunakan" button to load the character data
        await page.locator(".use-prompt-btn").first.click()

        # Assert that we are on the correct designer tab and form
        await expect(page.locator("#designer-tab-image")).to_have_class("designer-tab-button active")
        await expect(page.locator("#character-creator-form")).to_be_visible()

        # Assert that the form fields are correctly populated
        await expect(page.locator("#char-name")).to_have_value("Aria Test")
        await expect(page.locator("#char-physic")).to_have_value("Cybernetic eyes")
        await expect(page.locator("#char-attire")).to_have_value("Hacker gear")
        await expect(page.locator("#char-style")).to_have_value("Synthwave")

        await page.screenshot(path="verification/02_character_loaded.png")

        print("Verification successful: Character designer save and load functionality works correctly.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
