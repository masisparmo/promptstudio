import re
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8000/index.html")

        # Bypass Welcome Screen using Fake API Key
        print("Bypassing welcome screen...")
        if page.is_visible("#welcome-screen"):
            page.click("#use-user-api-key")
            page.fill("#api-key-input", "dummy_api_key_for_testing")
            page.click("#start-with-api-key")
            expect(page.locator("#main-app")).to_be_visible()

        # Inject data into IndexedDB
        prompt_data = {
            "type": "lagu",
            "timestamp": "2024-05-22T10:00:00.000Z",
            "filename": "lagu_220524-1000.dps",
            "data": {
                "inputs": { "tema": "Tes History" },
                "outputs": {
                    "lirik": "[Verse]\nIni adalah lirik tes.\nUntuk memastikan tampilan riwayat.",
                    "gaya": "Pop",
                    "judul": ["Judul 1"]
                }
            }
        }

        print("Injecting test data into IndexedDB...")
        page.evaluate("""(promptData) => {
            const request = indexedDB.open('PromptStudioDB', 1);
            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(['prompts'], 'readwrite');
                const store = transaction.objectStore('prompts');
                store.add(promptData);
            };
        }""", prompt_data)

        page.wait_for_timeout(1000)

        print("Switching to History tab...")
        page.click("#tab-riwayat")

        expect(page.locator("text=lagu_220524-1000.dps")).to_be_visible()

        print("Taking screenshot of History tab...")
        page.screenshot(path="/home/jules/verification/history_display.png")

        browser.close()

if __name__ == "__main__":
    run()
