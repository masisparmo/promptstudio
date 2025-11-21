import re
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Use port 8004
        page.goto("http://localhost:8004/index.html")

        # Force main-app visibility
        print("Setup environment...")
        page.add_style_tag(content="#welcome-screen { display: none !important; } #main-app { display: block !important; }")

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

        print("Injecting DB data...")
        page.evaluate("""(promptData) => {
            const request = indexedDB.open('PromptStudioDB', 1);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains('prompts')) {
                    db.createObjectStore('prompts', { keyPath: 'id', autoIncrement: true });
                }
            };
            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(['prompts'], 'readwrite');
                const store = transaction.objectStore('prompts');
                store.add(promptData);
            };
        }""", prompt_data)

        page.wait_for_timeout(2000)

        print("Switching to History tab...")
        page.click("#tab-riwayat")

        # Wait for filename to appear first
        expect(page.locator("text=lagu_220524-1000.dps")).to_be_visible()

        # Wait for content to appear
        expect(page.locator("text=Ini adalah lirik tes")).to_be_visible()

        print("Taking screenshot...")
        page.screenshot(path="/home/jules/verification/history_display_final_fixed.png")

        browser.close()

if __name__ == "__main__":
    run()
