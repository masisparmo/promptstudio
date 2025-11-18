
import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        try:
            await page.goto("http://localhost:8000")

            # Handle Welcome Screen
            await page.locator("#use-user-api-key").click()
            await page.locator("#api-key-input").fill("DUMMY_API_KEY")
            await page.locator("#start-with-api-key").click()
            await expect(page.locator("#main-app")).to_be_visible()

            # --- Step 1: Create and Save a Character Prompt ---
            await page.locator("#tab-desainer").click()
            await page.locator("#designer-tab-image").click()

            # Select "Buat Karakter Konsisten"
            await page.locator("#tujuan-gambar").select_option("karakter")
            await expect(page.locator("#character-creator-form")).to_be_visible()
            print("Character creator form is visible.")

            # Fill the form
            await page.locator("#char-name").fill("Aria Test")
            await page.locator("#char-physic").fill("Rambut ungu, mata tajam")
            await page.locator("#char-attire").fill("Jaket kulit hitam")
            await page.locator("#char-style").fill("Gaya anime sinematik")
            await page.locator("#character-scenario-input").fill("Berdiri di atap gedung")
            print("Filled character form.")

            await page.screenshot(path="verification/char_01_before_save.png")

            # Save the prompt
            await page.locator("#final-prompt-container #save-prompt-button").click()
            print("Saved character prompt.")

            # --- Step 2: Load the Character Prompt from History ---
            await page.locator("#tab-riwayat").click()
            await expect(page.locator("#prompt-history-list")).to_contain_text("gambar_")
            print("Navigated to history tab.")
            await page.screenshot(path="verification/char_02_history_list.png")

            # Click the "Gunakan" button for the most recent prompt
            await page.locator(".use-prompt-btn").first.click()
            print("Clicked 'Gunakan' button.")

            # --- Step 3: Verify the Data is Loaded Correctly ---
            await expect(page.locator("#content-desainer")).to_be_visible()
            await expect(page.locator("#designer-tab-image")).to_have_class("designer-tab-button active")

            # Verify the dropdown is set correctly
            await expect(page.locator("#tujuan-gambar")).to_have_value("karakter")
            await expect(page.locator("#character-creator-form")).to_be_visible()
            print("Switched back to designer and character form is visible.")

            # Verify all fields are correctly populated
            await expect(page.locator("#char-name")).to_have_value("Aria Test")
            await expect(page.locator("#char-physic")).to_have_value("Rambut ungu, mata tajam")
            await expect(page.locator("#char-attire")).to_have_value("Jaket kulit hitam")
            await expect(page.locator("#char-style")).to_have_value("Gaya anime sinematik")
            await expect(page.locator("#character-scenario-input")).to_have_value("Berdiri di atap gedung")
            print("All character fields verified successfully.")

            await page.screenshot(path="verification/char_03_load_success.png")

            print("\nVerification successful: Save and Load for 'Karakter Konsisten' works as expected.")

        except Exception as e:
            print(f"\nAn error occurred during verification: {e}")
            await page.screenshot(path="verification/char_error.png")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
