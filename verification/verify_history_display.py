import re
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
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
                    "judul": ["Judul 1"],
                    "prompt_alternatif": "Buatkan lagu pop tentang tes sejarah."
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

        # 1. Verify Inline Content is GONE
        expect(page.locator("text=lagu_220524-1000.dps")).to_be_visible()
        expect(page.locator("text=Ini adalah lirik tes")).not_to_be_visible()
        print("Verified: Inline content hidden.")

        # 2. Open Preview Modal
        print("Opening preview modal...")
        page.click(".preview-prompt-btn")
        expect(page.locator("#preview-modal")).to_be_visible()

        # 3. Verify Full Content in Modal
        modal_content = page.locator("#preview-modal-body").text_content()

        # Check for all parts
        assert "[LIRIK]" in modal_content
        assert "Ini adalah lirik tes" in modal_content
        assert "[GAYA]" in modal_content
        assert "Pop" in modal_content
        assert "[JUDUL]" in modal_content
        assert "Judul 1" in modal_content
        assert "[PROMPT ALTERNATIF]" in modal_content
        assert "Buatkan lagu pop tentang tes sejarah" in modal_content

        print("Verified: Modal contains full output.")

        print("Taking screenshot...")
        page.screenshot(path="/home/jules/verification/history_preview_final.png")

        browser.close()

if __name__ == "__main__":
    run()
