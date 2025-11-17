
import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        await page.goto(f"file:///app/index.html")

        print("1. Bypassing welcome screen...")
        await page.locator("#use-user-api-key").click()
        await page.locator("#api-key-input").fill("DUMMY_API_KEY")
        await page.locator("#start-with-api-key").click()
        await expect(page.locator("#main-app")).to_be_visible()

        print("2. Opening prompt history modal...")
        await page.locator("#show-history-button").click()
        await expect(page.locator("#history-modal")).to_be_visible()

        print("3. Triggering import and handling dialogs...")

        # Use asyncio.gather to perform the action that triggers the dialog
        # and wait for the dialog event at the same time.
        async def trigger_and_get_first_dialog():
            async with page.expect_event("dialog") as dialog_info:
                await page.locator("#import-prompts-input").set_input_files({
                    "name": "import_test.json",
                    "mimeType": "application/json",
                    "buffer": b'[{"filename": "test.json", "type": "test", "timestamp": "2025-01-01T00:00:00.000Z", "data": {}}]'
                })
            return await dialog_info.value

        first_dialog = await trigger_and_get_first_dialog()
        print(f"   - First dialog appeared: '{first_dialog.message}'")

        # Now, accept the first dialog, which will trigger the second one after processing.
        async def accept_and_get_second_dialog():
             async with page.expect_event("dialog") as dialog_info:
                 await first_dialog.accept()
             return await dialog_info.value

        second_dialog = await accept_and_get_second_dialog()
        print(f"   - Second dialog appeared: '{second_dialog.message}'")
        await second_dialog.accept()

        print("4. Verifying dialog messages...")
        assert first_dialog.message == "Ini akan menimpa semua prompt yang ada. Lanjutkan?"
        assert "1 prompt berhasil diimpor!" in second_dialog.message

        print("5. Verification successful.")

        await browser.close()

asyncio.run(main())
