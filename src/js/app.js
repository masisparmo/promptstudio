function formatLyrics(text) {
    if (!text) return "";
        // Pastikan literal \n diubah menjadi newline, dan hapus tanda kutip ganda di awal/akhir jika ada
        return text.replace(/\\n/g, '\n').replace(/^"|"$/g, '');
}
document.addEventListener('DOMContentLoaded', () => {

    let db;
    const dbRequest = indexedDB.open('PromptStudioDB', 1);

    dbRequest.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('prompts')) {
            db.createObjectStore('prompts', { keyPath: 'id', autoIncrement: true });
        }
    };

    dbRequest.onsuccess = (event) => {
        db = event.target.result;
        console.log("Database 'PromptStudioDB' opened successfully.");
    };

    dbRequest.onerror = (event) => {
        console.error("Error opening IndexedDB:", event.target.errorCode);
    };

    let userApiKey = localStorage.getItem('geminiApiKey');
    let uploadedImageBase64 = null;
    let composeImage1Base64 = null;
    let composeImage2Base64 = null;
    let characterRefImageBase64 = null;
    let videoRefImageFile = null;
    let videoRefImageBase64 = null;
    let selectedAspectRatio = '1:1';

    // State untuk Analisa Prompt
    let analisaImageBase64 = null;
    let analisaVideoFile = null;
    let activeAnalisaMode = 'image';

    const elements = {
        mainApp: document.getElementById('main-app'),
        assistantButton: document.getElementById('assistant-button'),
        settingsButton: document.getElementById('settings-button'),
        themeToggle: document.getElementById('theme-toggle'),
        lightIcon: document.getElementById('theme-icon-light'),
        darkIcon: document.getElementById('theme-icon-dark'),

        // API Key Modal Elements
        apiKeyModal: document.getElementById('api-key-modal'),
        modalApiKeyInput: document.getElementById('modal-api-key-input'),
        saveApiKeyBtn: document.getElementById('save-api-key-btn'),
        deleteApiKeyBtn: document.getElementById('delete-api-key-btn'),
        closeApiKeyModal: document.getElementById('close-api-key-modal'),

        mainTabButtons: {
            belajar: document.getElementById('tab-belajar'),
            desainer: document.getElementById('tab-desainer'),
            analisa: document.getElementById('tab-analisa'),
            riwayat: document.getElementById('tab-riwayat')
        },
        contentSections: {
            belajar: document.getElementById('content-belajar'),
            desainer: document.getElementById('content-desainer'),
            analisa: document.getElementById('content-analisa'),
            riwayat: document.getElementById('content-riwayat')
        },
        // Analisa Elements
        analisaTabImage: document.getElementById('analisa-tab-image'),
        analisaTabVideo: document.getElementById('analisa-tab-video'),
        analisaImageInput: document.getElementById('analisa-image-input'),
        analisaVideoInput: document.getElementById('analisa-video-input'),
        analisaUploadImage: document.getElementById('analisa-upload-image'),
        analisaUploadVideo: document.getElementById('analisa-upload-video'),
        dropZoneAnalisaImage: document.getElementById('drop-zone-analisa-image'),
        dropZoneAnalisaVideo: document.getElementById('drop-zone-analisa-video'),
        analisaPreviewContainer: document.getElementById('analisa-preview-container'),
        analisaImagePreview: document.getElementById('analisa-image-preview'),
        analisaVideoPreview: document.getElementById('analisa-video-preview'),
        analisaResetBtn: document.getElementById('analisa-reset-btn'),
        btnDoAnalisa: document.getElementById('btn-do-analisa'),
        analisaResultContainer: document.getElementById('analisa-result-container'),
        resTabEnglish: document.getElementById('res-tab-english'),
        resTabIndonesia: document.getElementById('res-tab-indonesia'),
        resTabJson: document.getElementById('res-tab-json'),
        resContentEnglish: document.getElementById('res-content-english'),
        resContentIndonesia: document.getElementById('res-content-indonesia'),
        resContentJson: document.getElementById('res-content-json'),
        outAnalisaEnglish: document.getElementById('out-analisa-english'),
        outAnalisaIndonesia: document.getElementById('out-analisa-indonesia'),
        outAnalisaJson: document.getElementById('out-analisa-json'),

        designerTabImage: document.getElementById('designer-tab-image'),
        designerTabVideo: document.getElementById('designer-tab-video'),
        designerTabLagu: document.getElementById('designer-tab-lagu'),
        imageForm: document.getElementById('image-designer-form'),
        videoForm: document.getElementById('video-designer-form'),
        laguForm: document.getElementById('lagu-designer-form'),
        outputPromptEl: document.getElementById('output-prompt'),
        copyButton: document.getElementById('copy-button'),
        standardImageForm: document.getElementById('standard-image-form'),
        tujuanGambarContainer: document.getElementById('tujuan-gambar-container'),
        tujuanGambarEl: document.getElementById('tujuan-gambar'),
        kemasanContainerEl: document.getElementById('kemasan-container'),
        jenisKemasanEl: document.getElementById('jenis-kemasan'),
        produkGambarEl: document.getElementById('produk-gambar'),
        gayaGambarEl: document.getElementById('gaya-gambar'),
        latarBelakangGambarEl: document.getElementById('latar-belakang-gambar'),
        detailGambarEl: document.getElementById('detail-gambar'),
        produkGambarLabelText: document.getElementById('produk-gambar-label-text'),
        gayaGambarLabelText: document.getElementById('gaya-gambar-label-text'),
        detailGambarLabelText: document.getElementById('detail-gambar-label-text'),
        singleUploadContainer: document.getElementById('single-upload-container'),
        uploadLabel: document.getElementById('upload-label'),
        imageCompositionForm: document.getElementById('image-composition-form'),
        compositionDetailsEl: document.getElementById('composition-details'),
        compositionPreviewContainer: document.getElementById('composition-preview-container'),
        backToTujuanButton: document.getElementById('back-to-tujuan-button'),
        characterCreatorForm: document.getElementById('character-creator-form'),
        backToTujuanButtonChar: document.getElementById('back-to-tujuan-button-char'),
        charNameEl: document.getElementById('char-name'),
        charPhysicEl: document.getElementById('char-physic'),
        charAttireEl: document.getElementById('char-attire'),
        charStyleEl: document.getElementById('char-style'),
        characterOutputSection: document.getElementById('character-output-section'),
        characterSheetOutputEl: document.getElementById('character-sheet-output'),
        characterScenarioInputEl: document.getElementById('character-scenario-input'),
        subjekVideoSubjectEl: document.getElementById('subjek-video-subject'),
        subjekVideoActionEl: document.getElementById('subjek-video-action'),
        latarBelakangVideoEl: document.getElementById('latar-belakang-video'),
        gayaVideoEl: document.getElementById('gaya-video'),
        audioVideoEl: document.getElementById('audio-video'),
        negatifVideoEl: document.getElementById('negatif-video'),
        allFormInputs: document.querySelectorAll('.form-input:not(#output-prompt):not(#character-sheet-output):not(#image-analysis-result):not(#video-image-analysis-result), .form-select'),
        enhanceButton: document.getElementById('enhance-prompt-button'),
        finalPromptContainer: document.getElementById('final-prompt-container'),
        imageUploadEl: document.getElementById('image-upload'),
        dropZone: document.getElementById('drop-zone'),
        imagePreviewContainer: document.getElementById('image-preview-container'),
        uploadedImagePreview: document.getElementById('uploaded-image-preview'),
        analyzeImageButton: document.getElementById('analyze-image-button'),
        analyzeImageText: document.getElementById('analyze-image-text'),
        analyzeImageIcon: document.getElementById('analyze-image-icon'),
        imageAnalysisResult: document.getElementById('image-analysis-result'),
        removeImageButton: document.getElementById('remove-image-button'),
        imageUploadCompose1: document.getElementById('image-upload-compose-1'),
        dropZoneCompose1: document.getElementById('drop-zone-compose-1'),
        uploadedComposePreview1: document.getElementById('uploaded-compose-preview-1'),
        removeCompose1: document.getElementById('remove-compose-1'),
        imageUploadCompose2: document.getElementById('image-upload-compose-2'),
        dropZoneCompose2: document.getElementById('drop-zone-compose-2'),
        uploadedComposePreview2: document.getElementById('uploaded-compose-preview-2'),
        removeCompose2: document.getElementById('remove-compose-2'),
        imageUploadChar: document.getElementById('image-upload-char'),
        dropZoneChar: document.getElementById('drop-zone-char'),
        characterPreviewContainer: document.getElementById('character-preview-container'),
        uploadedCharPreview: document.getElementById('uploaded-char-preview'),
        removeCharImageButton: document.getElementById('remove-char-image-button'),
        analyzeCharButton: document.getElementById('analyze-char-button'),
        analyzeCharText: document.getElementById('analyze-char-text'),
        analyzeCharIcon: document.getElementById('analyze-char-icon'),
        imageUploadVideoEl: document.getElementById('image-upload-video'),
        dropZoneVideo: document.getElementById('drop-zone-video'),
        videoPreviewContainer: document.getElementById('video-preview-container'),
        uploadedVideoPreview: document.getElementById('uploaded-video-preview'),
        removeVideoButton: document.getElementById('remove-video-button'),
        analyzeVideoImageButton: document.getElementById('analyze-video-image-button'),
        analyzeVideoImageText: document.getElementById('analyze-video-image-text'),
        analyzeVideoImageIcon: document.getElementById('analyze-video-image-icon'),
        videoImageAnalysisResult: document.getElementById('video-image-analysis-result'),
        aspectRatioContainer: document.getElementById('aspect-ratio-container'),
        aspectRatioDropdown: document.getElementById('aspect-ratio-dropdown'),
        aspectRatioButton: document.getElementById('aspect-ratio-button'),
        aspectRatioMenu: document.getElementById('aspect-ratio-menu'),
        aspectRatioOptions: document.querySelectorAll('.aspect-ratio-option'),
        assistantModal: document.getElementById('assistant-modal'),
        closeAssistantModal: document.getElementById('close-assistant-modal'),
        assistantChatBody: document.getElementById('assistant-chat-body'),
        assistantInput: document.getElementById('assistant-input'),
        sendAssistantMessage: document.getElementById('send-assistant-message'),
        showJsonButton: document.getElementById('show-json-button'),
        jsonOutputContainer: document.getElementById('json-output-container'),
        jsonOutputPrompt: document.getElementById('json-output-prompt'),
        copyJsonButton: document.getElementById('copy-json-button'),
        clearAllButton: document.getElementById('clear-all-button'),
        laguOutputSection: document.getElementById('lagu-output-section'),
        buatPromptLaguButton: document.getElementById('buat-prompt-lagu-button'),
        outputLirik: document.getElementById('output-lirik'),
        copyLirikButton: document.getElementById('copy-lirik-button'),
        outputGaya: document.getElementById('output-gaya'),
        copyGayaButton: document.getElementById('copy-gaya-button'),
        judulLaguList: document.getElementById('judul-lagu-list'),
        regenLirikButton: document.getElementById('regen-lirik-button'),
        regenGayaButton: document.getElementById('regen-gaya-button'),
        regenJudulButton: document.getElementById('regen-judul-button'),
        outputAlternatif: document.getElementById('output-alternatif'),
        regenAlternatifButton: document.getElementById('regen-alternatif-button'),
        copyAlternatifButton: document.getElementById('copy-alternatif-button'),
        genreUtamaSearch: document.getElementById('genre-utama-search'),
        genreUtamaResults: document.getElementById('genre-utama-results'),
        genreKombinasiSearch: document.getElementById('genre-kombinasi-search'),
        genreKombinasiResults: document.getElementById('genre-kombinasi-results'),
        importFromImageBtn: document.getElementById('import-from-image-btn'),
        savePromptButton: document.getElementById('save-prompt-button'),
        saveLaguPromptButton: document.getElementById('save-lagu-prompt-button'),
        promptHistoryList: document.getElementById('prompt-history-list'),
        exportPromptsButton: document.getElementById('export-prompts-button'),
        importPromptsInput: document.getElementById('import-prompts-input'),
        previewModal: document.getElementById('preview-modal'),
        closePreviewModal: document.getElementById('close-preview-modal'),
        closePreviewBtnSecondary: document.getElementById('close-preview-btn-secondary'),
        previewModalBody: document.getElementById('preview-modal-body'),
        usePreviewBtn: document.getElementById('use-preview-btn'),
        audioUpload: document.getElementById('audio-upload'),
    };

    function renderJudulLagu(titles = []) {
        elements.judulLaguList.innerHTML = '';
        if (titles.length === 0) {
             for (let i = 0; i < 5; i++) {
                titles.push(`Alternatif Judul ${i + 1}`);
            }
        }
        titles.forEach(title => {
            const container = document.createElement('div');
            container.className = 'relative flex items-center';
            const input = document.createElement('input');
            input.type = 'text';
            input.value = title;
            input.className = 'form-input w-full p-2 pr-12';
            const button = document.createElement('button');
            button.textContent = 'SALIN';
            button.className = 'absolute right-2 top-1/2 -translate-y-1/2 btn btn-secondary px-2 py-1 text-xs';
            button.onclick = () => {
                input.select();
                try {
                    document.execCommand('copy');
                    button.textContent = 'DISALIN!';
                    setTimeout(() => { button.textContent = 'SALIN'; }, 2000);
                } catch (err) {
                    button.textContent = 'GAGAL';
                }
            };
            container.appendChild(input);
            container.appendChild(button);
            elements.judulLaguList.appendChild(container);
        });
    }

    // --- Functions ---
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            elements.lightIcon.classList.add('hidden');
            elements.darkIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            elements.lightIcon.classList.remove('hidden');
            elements.darkIcon.classList.add('hidden');
        }
    };

    function toggleApiKeyModal(show, returnToTab = null) {
        const modal = elements.apiKeyModal;
        const modalContent = modal.querySelector('div');

        if (show) {
            // Populate input if key exists
            if (userApiKey) {
                elements.modalApiKeyInput.value = userApiKey;
                elements.deleteApiKeyBtn.classList.remove('hidden');
            } else {
                elements.modalApiKeyInput.value = '';
                elements.deleteApiKeyBtn.classList.add('hidden');
            }

            modal.classList.remove('hidden');
            void modal.offsetWidth; // Trigger reflow
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');

            // Store state for return action if needed
            modal.dataset.returnTab = returnToTab || '';
        } else {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    }

    function checkApiKey(actionType) {
        if (userApiKey) return true;

        toggleApiKeyModal(true, actionType === 'tab-desainer' ? 'desainer' : actionType);
        return false;
    }

    function showTab(tabName) {
        if ((tabName === 'desainer' || tabName === 'analisa') && !checkApiKey(tabName)) {
            return;
        }

        Object.values(elements.mainTabButtons).forEach(button => button.classList.remove('active'));
        elements.mainTabButtons[tabName].classList.add('active');
        Object.values(elements.contentSections).forEach(section => section.classList.remove('active'));
        elements.contentSections[tabName].classList.add('active');

        if (tabName === 'riwayat') {
            renderSavedPrompts();
        }
    }
    const genreLagu = {
        "MODERN POP, R&B, & HIP-HOP": [
            "Contemporary Pop – Radio-friendly, clean production (Taylor Swift, Ariana Grande)",
            "Indie Pop – Vokal unik, sound eksperimental (Billie Eilish, Lorde)",
            "Synth-Pop – Synth 80an, beat modern (The Weeknd, CHVRCHES)",
            "R&B Kontemporer – Vokal soulful, beat trap/hip-hop (SZA, Frank Ocean)",
            "Neo-Soul – Fusion soul, jazz, dan hip-hop (D'Angelo, Erykah Badu)",
            "Trap – Beat berat, hi-hat cepat, sub-bass dalam (Migos, Travis Scott)",
            "Boom Bap / Old School Hip-Hop – Drum break klasik, lirik fokus (Nas, A Tribe Called Quest)",
            "Drill – Varian trap yang gelap dan sinematik (Pop Smoke, Central Cee)",
            "Lo-Fi Hip-Hop – Santai, instrumental, fokus pada mood (Nujabes, J Dilla)",
            "Alternative R&B – Melodi eksperimental, produksi minimalis (Joji, FKA twigs)"
        ],
        "ROCK & ALTERNATIF": [
            "Classic Rock – Gitar elektrik, blues-based (Led Zeppelin, AC/DC)",
            "Indie Rock / Alternative – Sound non-mainstream, mandiri (Arctic Monkeys, The Strokes)",
            "Garage Rock – Sound mentah, distorsi, energi tinggi (The White Stripes, Ty Segall)",
            "Heavy Metal – Distorsi gitar agresif, solo cepat (Iron Maiden, Metallica)",
            "Pop Punk – Energi punk, melodi pop (Blink-182, Green Day)",
            "Post-Punk – Eksperimental, introspektif, bass menonjol (The Cure, Joy Division)",
            "Psychedelic Rock – Efek studio, sound trippy (Tame Impala, Pink Floyd)",
            "Stoner / Doom Metal – Tempo lambat, riff berat, sound ‘tebal’ (Sleep, Electric Wizard)",
            "Shoegaze – Dinding suara gitar, vokal tersembunyi (My Bloody Valentine, Slowdive)",
            "Folk Rock – Instrumen akustik dan lirik naratif (Bob Dylan, Fleet Foxes)"
        ],
        "ELEKTRONIK & DANCE": [
            "House Music – Beat 4/4, tempo 120-130 BPM (Daft Punk, Frankie Knuckles)",
            "Techno – Sound repetitif, futuristik, fokus pada ritme (Kraftwerk, Richie Hawtin)",
            "Trance – Melodi synth yang membangun, euforia (Armin van Buuren, Paul van Dyk)",
            "Drum & Bass – Tempo cepat (160-180 BPM), breakbeat kompleks (Pendulum, Goldie)",
            "Dubstep – Bass drop berat, tempo sekitar 140 BPM (Skrillex, Burial)",
            "UK Garage – Ritme sinkopasi, vokal soulful (Craig David, Artful Dodger)",
            "Ambient – Tanpa beat, fokus pada tekstur dan atmosfer (Brian Eno, Aphex Twin)",
            "Hardstyle – Kickdrum keras, melodi euforik (Headhunterz, Showtek)",
            "Vaporwave – Estetika retro 80/90an, melambat (Macintosh Plus, Blank Banshee)",
            "Future Bass – Drop melodik, synth ‘wobbly’ (Flume, Illenium)"
        ],
        "VIBE CERIA & ENERGIS": [
            "Uplifting Pop – Cerah, penuh semangat, chorus catchy (Katy Perry – Firework)",
            "Tropical House – Nuansa pantai, santai tapi energik (Kygo – Firestone)",
            "Funky Disco Pop – Groovy, bass menonjol, retro-modern (Dua Lipa – Levitating)",
            "Afrobeat Celebration – Irama funky dan vokal berulang positif (Burna Boy)",
            "Latin Dance / Reggaeton – Ritme sensual dan penuh gerak (Bad Bunny, J Balvin)",
            "J-Pop Idol Vibe – Ceria, synth penuh warna, cepat (Perfume, YOASOBI)",
            "K-Pop Energetic Anthem – Drop catchy, vokal harmonis (BLACKPINK, Stray Kids)",
            "Electro Swing – Campuran jazz klasik dan beat modern (Parov Stelar)",
            "Pop Rock Anthem – Gitar cerah, lirik motivatif (OneRepublic – Counting Stars)",
            "Bubblegum Pop – Manis, ringan, warna-warni (Charli XCX, early Britney Spears)",
        ],
        "CHILL, ROMANTIS & DREAMY": [
            "Lo-Fi Chillhop – Beat santai, tekstur analog, nuansa nostalgia",
            "Dream Pop – Suara lembut, ambient, dan efek reverb (The 1975, Beach House)",
            "Acoustic Love Song – Gitar lembut, vokal hangat (Ed Sheeran – Perfect)",
            "Bossa Nova Romance – Lembut dan elegan (João Gilberto, Astrud Gilberto)",
            "Indie Chillwave – Lembut, synth retro, vibe sore hari (Washed Out)",
            "Ambient Piano / Neo-Classical – Minimalis dan menenangkan (Ólafur Arnalds)",
            "R&B Slow Jam – Vokal lembut dan sensual (SZA, Usher)",
            "Soul Ballad – Vokal emosional, tempo lambat (Adele – Someone Like You)",
            "Jazz Lounge – Suasana malam elegan, bass lembut dan saxophone",
            "City Pop Nostalgia – Nuansa 80-an Jepang yang tenang dan romantis",
        ],
        "VIBE PENUH SEMANGAT & MOTIVATIF": [
             "EDM Festival Pop – Build-up tinggi, drop besar (Zedd, Calvin Harris)",
            "Electro Dance Rock – Gitar distorsi dan beat digital (Imagine Dragons)",
            "Epic Orchestral Hybrid – Musik sinematik dan heroik (Two Steps from Hell)",
            "Power Metal / Symphonic Rock – Cepat dan penuh semangat (Nightwish)",
            "Workout Trap / Hype Rap – Bass berat dan motivasi keras (Drake, Travis Scott)",
            "Drum & Bass Uplift – Tempo cepat, adrenaline tinggi (Pendulum)",
            "Pop Punk Revival – Energi remaja dan semangat bebas (Avril Lavigne, Blink-182)",
            "Marching Anthem / Stadium Pop – Chant dan chorus besar (Coldplay – Viva La Vida)",
            "Synthwave Heroic – Retro futuristik dengan semangat juang (The Midnight)",
            "Folk Empowerment – Akustik dan lirik optimis (Mumford & Sons, Of Monsters and Men)",
        ],
        "ETNIK & TRADISIONAL DUNIA": [
            "Dangdut (Indonesia) – Campuran Melayu, India, dan Arab dengan gendang khas",
            "Gamelan (Indonesia / Bali / Jawa) – Instrumen perunggu dan ritme kompleks",
            "Keroncong (Indonesia) – Gaya klasik dengan gitar ukulele dan cello",
            "Trot (Korea) – Musik rakyat Korea tempo cepat dengan vokal vibrato",
            "Enka (Jepang) – Lagu sentimental tradisional Jepang",
            "Bollywood / Filmi (India) – Lagu film dengan melodi India klasik & pop",
            "Bhangra (India / Punjab) – Irama energik dan tarian tradisional",
            "Qawwali (Pakistan / India) – Musik spiritual Sufi penuh improvisasi",
            "Arab Pop / Khaleeji / Rai – Musik Timur Tengah modern & tradisional",
            "Flamenco (Spanyol) – Gitar, tepukan, dan vokal penuh emosi",
            "Fado (Portugal) – Musik melankolis tentang nasib dan cinta",
            "Samba (Brasil) – Ritme cepat dengan perkusi khas Carnaval",
            "Bossa Nova (Brasil) – Gabungan samba dan jazz yang lembut",
            "Tango (Argentina) – Musik dansa dramatis dan romantis",
            "Mariachi (Meksiko) – Trompet, biola, dan gitar khas perayaan",
            "Celtic Folk (Irlandia / Skotlandia) – Seruling, biola, dan ritme tarian",
            "African Tribal / Highlife / Soukous – Beat ritmik dan vokal berulang",
            "Gnawa (Maroko) – Musik spiritual dengan guembri dan tepukan tangan",
            "Inuit Throat Singing (Arktik) – Teknik vokal dua nada bersamaan",
            "Native American Chant – Vokal ritual dan drum spiritual",
            "Balalaika Folk (Rusia) – Melodi cepat dengan instrumen petik khas",
            "Chinese Traditional / Guzheng – Musik klasik dengan instrumen dawai lembut",
            "Tibetan Chant / Mantra Music – Spiritual, meditasi, dan vibrasi rendah",
            "Polynesian / Hula / Maori Music – Vokal dan perkusi khas kepulauan Pasifik",
            "Mongolian Throat Singing (Khoomei) – Vokal resonan ganda khas Asia Tengah",
            "Nordic Folk / Viking Music – Drum dan nyanyian kuno Skandinavia",
            "Balkan Brass / Romani (Gipsy) – Musik dansa cepat dan penuh energi",
            "Andean Folk (Peru / Bolivia) – Seruling pan dan gitar charango",
            "Tarab / Oud Music (Timur Tengah) – Improvisasi Arab klasik",
            "Afro-Cuban / Salsa Tradisional – Ritme perkusi Latin kuat",
        ]
    };

    const alatMusik = {
        "Alat Musik Dawai (String Instruments)": [
            "Biola (Violin)", "Viola", "Cello", "Kontrabas / Double Bass",
            "Gitar Akustik / Elektrik", "Bass Guitar", "Harp / Kecapi / Guzheng (Cina)"
        ],
        "Alat Musik Tuts (Keyboard Instruments)": [
            "Piano", "Organ", "Synthesizer", "Keyboard Digital / MIDI Controller", "Melodica"
        ],
        "Alat Musik Perkusi (Percussion Instruments)": [
            "Drum Set", "Cajón", "Shaker, Tamborin, Maracas", "Bongo / Conga / Djembe",
            "Timpani / Snare / Bass Drum Orkestra", "Kendang (Indonesia)", "Tabla (India)",
            "Taiko (Jepang)", "Darbuka (Timur Tengah)"
        ],
        "Alat Musik Tiup (Wind Instruments)": [
            "Saxophone", "Clarinet", "Flute (Seruling)", "Oboe", "Bassoon",
            "Trumpet", "Trombone", "French Horn", "Tuba"
        ],
        "Alat Musik Elektronik & Digital": [
            "Synthesizer Analog/Digital", "Sampler / Drum Machine", "Digital Audio Workstation (DAW)",
            "E-Bow / Effect Pedal"
        ],
        "Alat Musik Tradisional & Etnik Dunia (World Instruments)": [
            "Gamelan (Indonesia)", "Sitar (India)", "Shamisen (Jepang)", "Accordion (Eropa)",
            "Banjo (Amerika)", "Bagpipe (Skotlandia)", "Pan Flute (Andes)", "Oud (Timur Tengah)",
            "Kalimba (Afrika)"
        ]
    };

    function setupGenreSearch(inputElement, resultsElement) {
        const allGenres = Object.values(genreLagu).flat();

        const renderResults = (filter = '') => {
            resultsElement.innerHTML = '';
            const filtered = allGenres.filter(genre => genre.toLowerCase().includes(filter.toLowerCase()));

            if (filtered.length === 0 && filter) {
                const item = document.createElement('div');
                item.textContent = `Gunakan genre custom: "${filter}"`;
                item.className = 'p-2 text-secondary italic';
                resultsElement.appendChild(item);
            } else {
                const genresToShow = filter ? filtered : allGenres;
                genresToShow.forEach(genre => {
                    const item = document.createElement('div');
                    item.textContent = genre;
                    item.className = 'p-2 cursor-pointer hover:bg-tertiary';
                    item.addEventListener('click', () => {
                        inputElement.value = genre;
                        resultsElement.classList.add('hidden');
                    });
                    resultsElement.appendChild(item);
                });
            }
            resultsElement.classList.remove('hidden');
        };

        inputElement.addEventListener('focus', () => renderResults(inputElement.value));
        inputElement.addEventListener('input', () => renderResults(inputElement.value));

        document.addEventListener('click', (e) => {
            if (!inputElement.parentElement.contains(e.target)) {
                resultsElement.classList.add('hidden');
            }
        });
    }

    function populateInstrumentDropdown() {
        const instrumentSelect = document.getElementById('alat-musik-utama');
        instrumentSelect.innerHTML = '';
        instrumentSelect.add(new Option("Pilih alat musik...", ""));
        instrumentSelect.add(new Option("Ketik sendiri...", "custom"));

        for (const group in alatMusik) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = group;
            alatMusik[group].forEach(instrument => {
                optgroup.appendChild(new Option(instrument, instrument));
            });
            instrumentSelect.appendChild(optgroup);
        }
    }

    function switchDesignerTab(tab) {
        const tabs = ['image', 'video', 'lagu'];
        tabs.forEach(t => {
            const tabButton = elements[`designerTab${t.charAt(0).toUpperCase() + t.slice(1)}`];
            const form = elements[`${t}Form`];
            if (tab === t) {
                tabButton.classList.add('active');
                form.classList.add('active');
            } else {
                tabButton.classList.remove('active');
                form.classList.remove('active');
            }
        });

        elements.imagePreviewContainer.classList.toggle('hidden', tab !== 'image' || !uploadedImageBase64);
        elements.videoPreviewContainer.classList.toggle('hidden', tab !== 'video' || !videoRefImageFile);

        // Bug Fix: Pastikan 'Character Sheet' hanya tampil di tab Gambar saat mode 'karakter' aktif
        elements.characterOutputSection.classList.toggle('hidden', tab !== 'image' || elements.tujuanGambarEl.value !== 'karakter');

        const isLaguTab = tab === 'lagu';

        if (isLaguTab) {
            elements.laguOutputSection.classList.remove('hidden');
            elements.finalPromptContainer.classList.add('hidden');
            elements.aspectRatioContainer.classList.add('hidden');
        } else {
            elements.laguOutputSection.classList.add('hidden');
            elements.finalPromptContainer.classList.remove('hidden');
            elements.aspectRatioContainer.classList.remove('hidden');
            updateGeneratedPrompt();
        }

        elements.jsonOutputContainer.classList.add('hidden');
        elements.showJsonButton.textContent = 'TAMPILKAN JSON';
    }

    function generateCharacterPrompt() {
        const name = elements.charNameEl.value.trim();
        const physic = elements.charPhysicEl.value.trim();
        const attire = elements.charAttireEl.value.trim();
        const style = elements.charStyleEl.value.trim();
        const scenario = elements.characterScenarioInputEl.value.trim();

        let sheet = `(character sheet: ${name || '[Nama Karakter]'}.`;
        if (physic) sheet += ` Ciri fisik: ${physic}.`;
        if (attire) sheet += ` Pakaian khas: ${attire}.`;
        if (style) sheet += ` Gaya visual: ${style}.`;
        sheet += ')';

        elements.characterSheetOutputEl.value = sheet;
        elements.outputPromptEl.value = `${sheet} ${scenario || '[Skenario/Aksi]'}. Aspek rasio ${selectedAspectRatio}.`.trim();
    }

    function generateImagePrompt() {
        const tujuan = elements.tujuanGambarEl.value;

        if (tujuan === 'gabungkan') {
            const details = elements.compositionDetailsEl.value.trim();
            let prompt = "Buat gambar baru dengan menggabungkan elemen dari gambar yang disediakan. ";
            prompt += details || "[Jelaskan cara menggabungkan foto 1 dan 2]";
            elements.outputPromptEl.value = (prompt + ` Aspek rasio ${selectedAspectRatio}.`).trim();
            return;
        }

        if (tujuan === 'karakter') {
            generateCharacterPrompt();
            return;
        }

        const isEditing = tujuan === 'edit';
        const produk = elements.produkGambarEl.value.trim();
        const gaya = elements.gayaGambarEl.value.trim();
        const latar = elements.latarBelakangGambarEl.value.trim();
        const detail = elements.detailGambarEl.value.trim();
        const jenisKemasan = elements.jenisKemasanEl.value;
        let prompt = "";

        if (isEditing) {
            // --- KODE PERBAIKAN ---
            let baseDescription = detail || `Sempurnakan foto dari "${produk || 'gambar ini'}"`;
            let styleInstruction = gaya ? ` terapkan gaya visual ${gaya}` : "";
            let backgroundInstruction = latar ? ` dengan latar belakang baru yaitu ${latar}` : "";

            prompt = `${baseDescription}${styleInstruction}${backgroundInstruction}.`;
            // --- AKHIR KODE PERBAIKAN ---
        } else {
             switch (tujuan) {
                case 'produk':
                    prompt = `Sebuah foto produk profesional dari ${produk || '[Produk Anda]'} dengan latar belakang ${latar || 'yang sesuai'}. Bergaya ${gaya || '[Gaya Visual Anda]'}. ${detail}`;
                    break;
                case 'packaging':
                    prompt = `Desain kemasan (${jenisKemasan}) untuk ${produk || '[Produk Anda]'} dengan latar belakang ${latar || 'yang menarik'}. Bergaya ${gaya || '[Gaya Visual Anda]'}. ${detail}`;
                    break;
                case 'pemasaran':
                     prompt = `Aset pemasaran visual untuk ${produk || '[Tujuan Pemasaran Anda]'} dengan latar belakang ${latar || 'profesional'}. Bergaya ${gaya || '[Gaya Visual Anda]'}. ${detail}`;
                    break;
                case 'logo':
                    prompt = `Desain logo untuk brand bernama "${produk || '[Nama Brand Anda]'}" dengan teks "${produk || '[Teks Logo Anda]'}". Desainnya harus bergaya ${gaya || '[Gaya Visual Anda]'} dengan latar belakang ${latar || 'sederhana'}. ${detail}`;
                    break;
                case 'ilustrasi':
                    prompt = `Sebuah ilustrasi dari ${produk || '[Subjek Ilustrasi Anda]'} di sebuah ${latar || 'lingkungan yang imajinatif'}. Gaya seni ${gaya || '[Gaya Artistik Anda]'}. ${detail}`;
                    break;
            }
        }

        elements.outputPromptEl.value = (prompt + ` Aspek rasio ${selectedAspectRatio}.`).trim();
    }

    function generateVideoPrompt() {
        const subject = elements.subjekVideoSubjectEl.value.trim() || "[Subjek]";
        const action = elements.subjekVideoActionEl.value.trim() || "[Aksi]";
        const latar = elements.latarBelakangVideoEl.value.trim();
        const subjekDanAksi = `${subject} ${action}`.trim();

        const gaya = elements.gayaVideoEl.value.trim() || "[Gaya, kamera, dan suasana]";
        const audio = elements.audioVideoEl.value.trim();
        const negativo = elements.negatifVideoEl.value.trim();
        let prompt = "";
        if (videoRefImageFile) {
            prompt += "[Gambar Input] ";
        }
        prompt += `${subjekDanAksi}`;
        if (latar) {
            prompt += ` berlatar di ${latar}`;
        }
        prompt += `. ${gaya}.`;

        if (audio) {
            prompt += ` Detail audio: ${audio}.`;
        }
        prompt += ` Aspek rasio ${selectedAspectRatio}.`;
        if (negativo) {
            prompt += ` -negative_prompt "${negativo}"`;
        }
        elements.outputPromptEl.value = prompt;
    }

    function updateGeneratedPrompt() {
        if (elements.designerTabImage.classList.contains('active')) {
            generateImagePrompt();
        } else {
            generateVideoPrompt();
        }
    }

    function generatePromptObject() {
        const promptData = {
            mode: '',
            form_type: '',
            prompt_string: elements.outputPromptEl.value,
            aspect_ratio: selectedAspectRatio,
            fields: {}
        };

        if (elements.designerTabVideo.classList.contains('active')) {
            promptData.mode = 'video';
            promptData.form_type = 'standard';
            promptData.fields = {
                subjek: elements.subjekVideoSubjectEl.value,
                aksi: elements.subjekVideoActionEl.value,
                latar_belakang: elements.latarBelakangVideoEl.value,
                gaya_kamera_suasana: elements.gayaVideoEl.value,
                audio: elements.audioVideoEl.value,
                prompt_negatif: elements.negatifVideoEl.value,
            };
            if (videoRefImageFile) {
                promptData.fields.gambar_referensi = videoRefImageFile.name;
                promptData.fields.gambar_referensi_base64 = videoRefImageBase64;
            }
        } else { // Image tab is active
            promptData.mode = 'image';
            const tujuan = elements.tujuanGambarEl.value;
            promptData.form_type = tujuan;

            switch (tujuan) {
                case 'gabungkan':
                    promptData.fields = {
                        detail_komposisi: elements.compositionDetailsEl.value,
                        gambar_referensi_1: composeImage1Base64 ? 'uploaded_image_1.jpg' : null,
                        gambar_referensi_2: composeImage2Base64 ? 'uploaded_image_2.jpg' : null,
                        gambar_referensi_1_base64: composeImage1Base64,
                        gambar_referensi_2_base64: composeImage2Base64,
                    };
                    break;
                case 'karakter':
                    promptData.fields = {
                        nama_karakter: elements.charNameEl.value,
                        ciri_fisik: elements.charPhysicEl.value,
                        pakaian_khas: elements.charAttireEl.value,
                        gaya_artistik: elements.charStyleEl.value,
                        skenario: elements.characterScenarioInputEl.value,
                        gambar_referensi: characterRefImageBase64 ? 'character_ref_image.jpg' : null,
                        gambar_referensi_base64: characterRefImageBase64,
                    };
                    break;
                default: // Standard image forms (produk, packaging, etc.)
                    promptData.fields = {
                        objek_utama: elements.produkGambarEl.value,
                        gaya_visual: elements.gayaGambarEl.value,
                        latar_belakang: elements.latarBelakangGambarEl.value,
                        detail_tambahan: elements.detailGambarEl.value,
                    };
                    if (tujuan === 'packaging') {
                        promptData.fields.jenis_kemasan = elements.jenisKemasanEl.value;
                    }
                    if (uploadedImageBase64) {
                        promptData.fields.gambar_referensi = 'uploaded_image.jpg';
                        promptData.fields.gambar_referensi_base64 = uploadedImageBase64;
                    }
                    break;
            }
        }
        return promptData;
    }

    function handleShowJson() {
        // If it's already visible, hide it and do nothing else.
        if (!elements.jsonOutputContainer.classList.contains('hidden')) {
            elements.jsonOutputContainer.classList.add('hidden');
            elements.showJsonButton.textContent = 'TAMPILKAN JSON';
            return;
        }

        const promptObject = generatePromptObject();

        // Buat deep copy untuk dimodifikasi sebelum ditampilkan
        const promptObjectForDisplay = JSON.parse(JSON.stringify(promptObject));

        // Hapus field base64 yang panjang dari tampilan
        if (promptObjectForDisplay.fields) {
            delete promptObjectForDisplay.fields.gambar_referensi_base64;
            delete promptObjectForDisplay.fields.gambar_referensi_1_base64;
            delete promptObjectForDisplay.fields.gambar_referensi_2_base64;
        }

        const jsonString = JSON.stringify(promptObjectForDisplay, null, 2); // Pretty print with 2 spaces
        elements.jsonOutputPrompt.value = jsonString;
        elements.jsonOutputContainer.classList.remove('hidden');
        elements.showJsonButton.textContent = 'SEMBUNYIKAN JSON';
    }

    function handleTujuanGambarChange() {
        const tujuan = elements.tujuanGambarEl.value;
        const isImageUploaded = uploadedImageBase64 !== null;

        // 1. Reset all form visibilities for a clean slate
        elements.standardImageForm.classList.add('hidden');
        elements.imageCompositionForm.classList.add('hidden');
        elements.characterCreatorForm.classList.add('hidden');
        elements.imagePreviewContainer.classList.add('hidden');
        elements.compositionPreviewContainer.classList.add('hidden');
        elements.characterOutputSection.classList.add('hidden');
        elements.kemasanContainerEl.classList.add('hidden');
        elements.finalPromptContainer.classList.add('hidden');
        elements.jsonOutputContainer.classList.add('hidden');
        elements.showJsonButton.textContent = 'TAMPILKAN JSON';

        // 2. Handle special forms that don't use the standard layout
        if (tujuan === 'gabungkan') {
            elements.imageCompositionForm.classList.remove('hidden');
            elements.compositionPreviewContainer.classList.remove('hidden');
            elements.finalPromptContainer.classList.remove('hidden');
            updateGeneratedPrompt();
            return;
        }

        if (tujuan === 'karakter') {
            elements.characterCreatorForm.classList.remove('hidden');
            elements.characterOutputSection.classList.remove('hidden');
            elements.finalPromptContainer.classList.remove('hidden');
            updateGeneratedPrompt();
            return;
        }

        // 3. For all other cases, show the standard form and final prompt area
        elements.standardImageForm.classList.remove('hidden');
        elements.finalPromptContainer.classList.remove('hidden');
        if (isImageUploaded) {
            elements.imagePreviewContainer.classList.remove('hidden');
        }

        // 4. Define all possible labels and placeholders
        const labelSets = {
            create: {
                produk: {
                    upload: "Opsional: Upload foto produk sebagai referensi",
                    label1: "Deskripsikan Produk",
                    placeholder1: "Contoh: sebotol madu dalam jar kaca dengan tutup kayu",
                    label2: "Deskripsikan Gaya Fotografi",
                    placeholder2: "Contoh: pencahayaan studio yang bersih, minimalis",
                    label3: "Detail Latar & Suasana",
                    placeholder3: "Contoh: di atas meja marmer putih dengan properti sarang lebah",
                },
                packaging: {
                    upload: "Opsional: Upload gambar referensi untuk kemasan",
                    label1: "Deskripsikan Produk di Dalam Kemasan",
                    placeholder1: "Contoh: Keripik kentang pedas, sabun organik",
                    label2: "Deskripsikan Gaya Desain Kemasan",
                    placeholder2: "Contoh: playful dan berwarna, mewah dengan nuansa emas",
                    label3: "Detail Tambahan (Teks, Logo, Material)",
                    placeholder3: "Contoh: Teks 'Rasa Original', logo di tengah, material kraft paper",
                },
                pemasaran: {
                    upload: "Opsional: Upload gambar aset sebagai referensi",
                    label1: "Apa Tujuan Aset Pemasaran?",
                    placeholder1: "Contoh: thumbnail YouTube, post Instagram, brosur",
                    label2: "Deskripsikan Gaya Visual",
                    placeholder2: "Contoh: cerah dan menarik, korporat dan profesional",
                    label3: "Teks atau Elemen Penting Lainnya",
                    placeholder3: "Contoh: teks 'Diskon 50%', logo di pojok kanan atas",
                },
                logo: {
                    upload: "Opsional: Upload sketsa atau referensi logo",
                    label1: "Nama Brand & Teks pada Logo",
                    placeholder1: "Contoh: Aroma Pagi",
                    label2: "Deskripsikan Gaya Logo & Font",
                    placeholder2: "Contoh: minimalis line-art, font sans-serif modern",
                    label3: "Detail Ikon atau Simbol (Opsional)",
                    placeholder3: "Contoh: ada ikon biji kopi sederhana di atasnya",
                },
                ilustrasi: {
                    upload: "Opsional: Upload sketsa atau gambar referensi",
                    label1: "Deskripsikan Subjek & Adegan",
                    placeholder1: "Contoh: seorang ksatria naga di puncak gunung",
                    label2: "Deskripsikan Gaya Artistik",
                    placeholder2: "Contoh: gaya anime fantasi, cat air digital, pixel art",
                    label3: "Detail Suasana & Palet Warna",
                    placeholder3: "Contoh: suasana senja, warna dominan ungu dan oranye",
                }
            },
            edit: {
                upload: "Wajib: Upload foto yang ingin diedit",
                label1: "Apa Objek Utama pada Gambar?",
                placeholder1: "Contoh: sebuah mobil merah, potret seorang wanita",
                label2: "Gaya Visual Baru (jika ingin diubah)",
                placeholder2: "Contoh: ubah menjadi gaya sinematik, buat lebih cerah",
                label3: "Jelaskan Perubahan/Penyempurnaan",
                placeholder3: "Contoh: Ganti latar belakang menjadi pemandangan pantai",
            }
        };

        // 5. Select the correct set of labels
        const currentLabels = (tujuan === 'edit')
            ? labelSets.edit
            : labelSets.create[tujuan];

        if (!currentLabels) return; // Exit if the purpose is not found

        // 6. Apply the labels and placeholders
        elements.uploadLabel.textContent = currentLabels.upload;
        elements.produkGambarLabelText.textContent = currentLabels.label1;
        elements.produkGambarEl.placeholder = currentLabels.placeholder1;
        elements.gayaGambarLabelText.textContent = currentLabels.label2;
        elements.gayaGambarEl.placeholder = currentLabels.placeholder2;
        elements.detailGambarLabelText.textContent = currentLabels.label3;
        elements.detailGambarEl.placeholder = currentLabels.placeholder3;

        // 7. Show packaging-specific dropdown only when needed
        if (tujuan === 'packaging') {
            elements.kemasanContainerEl.classList.remove('hidden');
        }

        // Renumber the form fields
        const formFields = elements.standardImageForm.querySelectorAll('.mt-5');
        let visibleFieldIndex = 1;
        formFields.forEach(field => {
            const formNum = field.querySelector('.form-num');
            if (formNum && !field.classList.contains('hidden')) {
                 // Check if the parent of formNum has a direct child label (not nested)
                const label = field.querySelector(':scope > label');
                if (label && label.contains(formNum)) {
                     visibleFieldIndex++;
                     formNum.textContent = `${visibleFieldIndex}.`;
                }
            }
        });

        updateGeneratedPrompt();
    }

    async function makeApiCallWithRetry(systemPrompt, userQuery, isJson = false, responseSchema = null, imageData = null) {
        if (!userApiKey) {
            throw new Error("API Key tidak ditemukan. Mohon isi API Key di pengaturan.");
        }
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${userApiKey}`;

        const parts = [{ text: userQuery }];
        if (imageData && imageData.length > 0) {
            imageData.forEach(img => {
                parts.push({ inlineData: { mimeType: img.mimeType, data: img.data } });
            });
        }

        const payload = {
            contents: [{ parts: parts }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
        };

        if (isJson && responseSchema) {
            payload.generationConfig = {
                responseMimeType: "application/json",
                responseSchema: responseSchema
            };
        }


        for (let i = 0; i < 3; i++) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();
                if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0].text) {
                    return result.candidates[0].content.parts[0].text;
                } else { throw new Error("Invalid API response structure"); }
            } catch (error) {
                if (i === 2) throw error;
                await new Promise(res => setTimeout(res, 1000 * Math.pow(2, i)));
            }
        }
    }

    async function enhancePromptWithGemini() {
        const basePrompt = elements.outputPromptEl.value;
        if (!basePrompt || (basePrompt.includes("[") && !basePrompt.startsWith("["))) {
            alert("Harap lengkapi detail pada form terlebih dahulu.");
            return;
        }
        elements.enhanceButton.disabled = true;
        elements.enhanceButton.innerHTML = `<span class="loader"></span> MENINGKATKAN...`;

        const isVideo = elements.designerTabVideo.classList.contains('active');
        const tujuan = elements.tujuanGambarEl.value;

        let systemPrompt = "";
         if (isVideo) {
            systemPrompt = "PENTING: Jawaban Anda HARUS dalam Bahasa Indonesia. Anda adalah seorang sutradara film dan ahli rekayasa prompt video. Ambil prompt dasar berikut dan buatlah menjadi jauh lebih deskriptif, sinematik, dan profesional. Tambahkan detail spesifik tentang gerakan kamera, sinematografi, pencahayaan, tempo, dan desain suara. Pertahankan subjek inti dan rasio aspek. Balas HANYA dengan teks prompt yang disempurnakan tanpa tambahan atau awalan apapun.";
        } else if (tujuan === 'gabungkan') {
            systemPrompt = "PENTING: Jawaban Anda HARUS dalam Bahasa Indonesia. Anda adalah ahli rekayasa prompt untuk image composition. Ubah instruksi dasar pengguna menjadi prompt yang detail dan profesional. Fokus pada cara mengintegrasikan elemen dari foto 1 ke foto 2 secara mulus (pencahayaan, bayangan, skala). Balas HANYA dengan teks prompt yang disempurnakan tanpa tambahan atau awalan apapun.";
        } else if (tujuan === 'karakter') {
            systemPrompt = "PENTING: Jawaban Anda HARUS dalam Bahasa Indonesia. Anda adalah ahli penulis karakter dan rekayasa prompt. Ambil 'character sheet' dan skenario dasar pengguna, lalu kembangkan menjadi prompt yang sangat deskriptif dan kaya detail untuk menghasilkan gambar yang konsisten dan sinematik. Fokus pada pengayaan detail karakter di dalam sheet. Balas HANYA dengan teks prompt yang disempurnakan tanpa tambahan atau awalan apapun.";
        } else {
            systemPrompt = "PENTING: Jawaban Anda HARUS dalam Bahasa Indonesia. Anda adalah seorang direktur kreatif dan ahli rekayasa prompt. Ambil prompt dasar berikut untuk model pembuatan gambar dan buatlah menjadi jauh lebih deskriptif, menggugah, dan profesional. Tambahkan detail spesifik tentang pencahayaan, komposisi, tekstur, dan suasana hati. Pertahankan subjek inti dan rasio aspek yang sama. Balas HANYA dengan teks prompt yang disempurnakan tanpa tambahan atau awalan apapun.";
        }

        const userQuery = `Berikut adalah prompt dasarnya: "${basePrompt}"`;
        try {
            const enhancedPrompt = await makeApiCallWithRetry(systemPrompt, userQuery);
            if(enhancedPrompt) {
                let cleanedPrompt = enhancedPrompt.trim().replace(/^"|"$/g, '').replace(/\[Gambar Input\]\s*/i, '');
                elements.outputPromptEl.value = cleanedPrompt;
                if (tujuan === 'karakter') {
                     const match = cleanedPrompt.match(/\(character sheet:.*?\)/);
                     if (match) elements.characterSheetOutputEl.value = match[0];
                }
            }
        } catch (error) {
            elements.outputPromptEl.value = "Maaf, terjadi kesalahan saat menyempurnakan prompt: " + error.message;
        } finally {
            elements.enhanceButton.disabled = false;
            elements.enhanceButton.innerHTML = '<span id="enhance-prompt-text">SEMPURNAKAN PROMPT</span>';
        }
    }

    function handleFileSelect(file, type) {
        if (!file || !file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result.split(',')[1];
            const src = e.target.result;

            if (type === 'single') {
                uploadedImageBase64 = base64;
                elements.uploadedImagePreview.src = src;
                if(elements.tujuanGambarEl.value !== 'edit') {
                    elements.tujuanGambarEl.value = 'edit';
                }
                handleTujuanGambarChange();
            } else if (type === 'compose1') {
                composeImage1Base64 = base64;
                elements.uploadedComposePreview1.src = src;
                elements.uploadedComposePreview1.parentElement.classList.remove('hidden');
            } else if (type === 'compose2') {
                composeImage2Base64 = base64;
                elements.uploadedComposePreview2.src = src;
                elements.uploadedComposePreview2.parentElement.classList.remove('hidden');
            } else if (type === 'character') {
                characterRefImageBase64 = base64;
                elements.uploadedCharPreview.src = src;
                elements.characterPreviewContainer.classList.remove('hidden');
            }
            updateGeneratedPrompt();
        };
        reader.readAsDataURL(file);
    }

    async function analyzeImageWithGemini() {
        if (!uploadedImageBase64) {
            alert("Mohon upload gambar terlebih dahulu.");
            return;
        }
        elements.analyzeImageButton.disabled = true;
        elements.analyzeImageText.textContent = 'MENGANALISA...';
        elements.analyzeImageIcon.innerHTML = `<span class="loader"></span>`;
        elements.imageAnalysisResult.value = "AI sedang menganalisa gambar Anda, mohon tunggu...";
        const systemPrompt = "PENTING: Jawaban Anda HARUS dalam Bahasa Indonesia. Anda adalah seorang ahli art director. Analisa gambar yang diberikan. Balas HANYA dengan format ini: '### Analisis Gambar\\n**Subjek Utama:** [Sebutkan subjek utama secara singkat]\\n**Deskripsi:** [Jelaskan gambar secara detail dalam satu paragraf]'. Jangan tambahkan apapun di luar format ini.";
        const userPrompt = "Analisa gambar ini sesuai format yang diperintahkan.";
        if (!userApiKey) {
             elements.imageAnalysisResult.value = "Error: API Key pengguna tidak valid. Mohon isi API Key di pengaturan.";
             return;
        }

        try {
            const analysisText = await makeApiCallWithRetry(
                systemPrompt,
                userPrompt,
                false, // isJson
                null, // responseSchema
                [{ mimeType: "image/jpeg", data: uploadedImageBase64 }]
            );

            if (analysisText) {
                elements.imageAnalysisResult.value = analysisText;
                const subjectMatch = analysisText.match(/\*\*Subjek Utama:\*\*\s*([^\n]+)/i);
                if (subjectMatch && subjectMatch[1]) {
                    elements.produkGambarEl.value = subjectMatch[1].trim();
                    elements.detailGambarEl.value = `Sempurnakan foto dari "${subjectMatch[1].trim()}" ini...`;
                } else {
                    elements.detailGambarEl.value = "Sempurnakan gambar ini berdasarkan hasil analisa.";
                }
                updateGeneratedPrompt();
            } else { throw new Error("Struktur respons API tidak valid."); }
        } catch (error) {
            elements.imageAnalysisResult.value = "Maaf, terjadi kesalahan saat menganalisa gambar. " + error.message;
        } finally {
            elements.analyzeImageButton.disabled = false;
            elements.analyzeImageText.textContent = 'ANALISA GAMBAR';
            elements.analyzeImageIcon.innerHTML = `🔍`;
        }
    }

   async function analyzeCharacterWithGemini() {
        if (!characterRefImageBase64) {
            alert("Mohon upload gambar referensi karakter terlebih dahulu.");
            return;
        }

        elements.analyzeCharButton.disabled = true;
        elements.analyzeCharText.textContent = 'MENGANALISA...';
        elements.analyzeCharIcon.innerHTML = `<span class="loader"></span>`;

        const systemPrompt = `PENTING: Jawaban Anda HARUS dalam Bahasa Indonesia. Anda adalah seorang analis karakter dan art director yang sangat detail. Diberikan sebuah gambar, tugas Anda adalah menganalisanya dan mengembalikan deskripsi karakter dalam format JSON yang ketat. Jangan menambahkan teks atau penjelasan lain di luar JSON. JSON harus memiliki properti berikut: "name" (saran nama atau deskripsi singkat, misal: "prajurit wanita futuristik"), "physic" (deskripsi detail tentang wajah, rambut, mata, dan postur tubuh), "attire" (deskripsi detail tentang pakaian dan aksesoris yang dikenakan), dan "style" (deskripsi gaya artistik gambar, misal: "fotorealistis, pencahayaan dramatis" atau "ilustrasi anime 2D").`;
        const userPrompt = "Analisa karakter dalam gambar ini dan berikan hasilnya dalam format JSON sesuai instruksi.";

        if (!userApiKey) {
            alert("API Key tidak valid. Mohon isi API Key di pengaturan.");
             elements.analyzeCharButton.disabled = false;
            elements.analyzeCharText.textContent = 'ANALISA KARAKTER & ISI FORM';
            elements.analyzeCharIcon.innerHTML = `🤖`;
            return;
        }

        const schema = {
            type: "OBJECT",
            properties: {
                "name": { "type": "STRING" },
                "physic": { "type": "STRING" },
                "attire": { "type": "STRING" },
                "style": { "type": "STRING" }
            },
            required: ["name", "physic", "attire", "style"]
        };

        try {
            // The API call is now wrapped in the retry function, with the schema passed correctly.
            const jsonText = await makeApiCallWithRetry(
                systemPrompt,
                userPrompt,
                true, // isJson
                schema, // responseSchema
                [{ mimeType: "image/jpeg", data: characterRefImageBase64 }] // imageData
            );

            const parsedJson = JSON.parse(jsonText);

            if (parsedJson) {
                elements.charNameEl.value = parsedJson.name || '';
                elements.charPhysicEl.value = parsedJson.physic || '';
                elements.charAttireEl.value = parsedJson.attire || '';
                elements.charStyleEl.value = parsedJson.style || '';
                updateGeneratedPrompt();
            } else {
                throw new Error("Respons JSON tidak valid.");
            }

        } catch (error) {
            console.error("Error calling Gemini Vision API for character analysis:", error);
            alert("Maaf, terjadi kesalahan saat menganalisa karakter: " + error.message);
        } finally {
            elements.analyzeCharButton.disabled = false;
            elements.analyzeCharText.textContent = 'ANALISA KARAKTER & ISI FORM';
            elements.analyzeCharIcon.innerHTML = `🤖`;
        }
    }

    async function analyzeVideoImageWithGemini() {
        if (!videoRefImageBase64) {
            alert("Mohon upload gambar referensi untuk video terlebih dahulu.");
            return;
        }

        elements.analyzeVideoImageButton.disabled = true;
        elements.analyzeVideoImageButton.innerHTML = `<span class="loader"></span> MENGANALISA...`;
        elements.videoImageAnalysisResult.classList.remove('hidden');
        elements.videoImageAnalysisResult.value = "AI sedang menganalisa gambar Anda untuk diubah menjadi ide prompt video...";

        const systemPrompt = `PENTING: Jawaban Anda HARUS dalam Bahasa Indonesia. Anda adalah seorang sutradara film dan pakar pemasaran video.

        Tugas Anda: Analisa gambar yang diberikan.

        KASUS 1: JIKA gambar adalah FLYER PROMOSI, POSTER PRODUK, atau IKLAN:
        - "subject": Nama produk/jasa dan nilai jual utamanya.
        - "action": Deskripsikan adegan iklan komersial yang dinamis (contoh: "reveal produk slow motion", "tipografi kinetik yang menampilkan fitur", "penggunaan gaya hidup").
        - "background": Latar studio profesional atau lingkungan yang relevan dengan brand.
        - "style": Estetika iklan komersial high-end, pencahayaan profesional, tajam 4k, mood energik atau elegan sesuai produk.

        KASUS 2: JIKA gambar adalah PEMANDANGAN atau FOTO BIASA:
        - "subject": Deskripsi subjek utama (2-5 kata).
        - "action": Deskripsi aksi atau suasana yang tersirat.
        - "background": Deskripsi latar belakang.
        - "style": Deskripsi gaya visual, gerakan kamera, dan sinematografi.

        Balas HANYA dengan format JSON yang ketat. JSON harus memiliki properti: "subject", "action", "background", dan "style".`;
        const userPrompt = "Analisa gambar ini. Jika ini flyer/iklan, buatkan prompt untuk video komersial profesional. Jika bukan, buatkan deskripsi adegan biasa. Berikan output JSON.";

        if (!userApiKey) {
            alert("API Key tidak valid. Mohon isi API Key di pengaturan.");
            elements.analyzeVideoImageButton.disabled = false;
            elements.analyzeVideoImageButton.innerHTML = `<span id="analyze-video-image-text">ANALISA GAMBAR & ISI FORM</span>`;
            return;
        }

        const schema = {
            type: "OBJECT",
            properties: {
                "subject": { "type": "STRING" },
                "action": { "type": "STRING" },
                "background": { "type": "STRING" },
                "style": { "type": "STRING" }
            },
            required: ["subject", "action", "background", "style"]
        };

        try {
             const jsonText = await makeApiCallWithRetry(
                systemPrompt,
                userPrompt,
                true, // isJson
                schema,
                [{ mimeType: "image/jpeg", data: videoRefImageBase64 }]
            );
            const parsedJson = JSON.parse(jsonText);

            if (parsedJson) {
                elements.subjekVideoSubjectEl.value = parsedJson.subject || '';
                elements.subjekVideoActionEl.value = parsedJson.action || '';
                elements.latarBelakangVideoEl.value = parsedJson.background || '';
                elements.gayaVideoEl.value = parsedJson.style || '';
                elements.videoImageAnalysisResult.value = `Analisa Selesai:\nSubjek: ${parsedJson.subject}\nAksi: ${parsedJson.action}\nLatar: ${parsedJson.background}\nGaya: ${parsedJson.style}`;
                updateGeneratedPrompt();
            } else {
                throw new Error("Respons JSON tidak valid.");
            }

        } catch (error) {
            console.error("Error calling Gemini Vision API for video analysis:", error);
            elements.videoImageAnalysisResult.value = "Maaf, terjadi kesalahan saat menganalisa gambar: " + error.message;
        } finally {
            elements.analyzeVideoImageButton.disabled = false;
            elements.analyzeVideoImageButton.innerHTML = `<span id="analyze-video-image-text">ANALISA GAMBAR & ISI FORM</span>`;
        }
    }


   function handleVideoFileSelect(file) {
       if (file && file.type.startsWith('image/')) {
           videoRefImageFile = file;
           const reader = new FileReader();
           reader.onload = (e) => {
               videoRefImageBase64 = e.target.result.split(',')[1];
               elements.uploadedVideoPreview.src = e.target.result;
               elements.videoPreviewContainer.classList.remove('hidden');
               updateGeneratedPrompt();
           };
           reader.readAsDataURL(file);
       }
   }

    function handleAudioUpload(file) {
        if (!file) return;

        if (!file.type.startsWith('audio/')) {
            alert('Mohon upload file audio (MP3/WAV).');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Data = e.target.result.split(',')[1];
            analyzeAudioWithGemini(base64Data, file.type);
        };
        reader.readAsDataURL(file);
    }

    async function analyzeAudioWithGemini(base64Data, mimeType) {
        const temaLaguEl = document.getElementById('tema-lagu');

        // Disable UI
        if (elements.buatPromptLaguButton) elements.buatPromptLaguButton.disabled = true;
        elements.outputLirik.value = "🎧 AI sedang mendengarkan lagu dan mengekstrak lirik...";
        temaLaguEl.value = "Menganalisa...";
        elements.genreUtamaSearch.value = "Menganalisa...";

        const systemPrompt = `PENTING: Jawaban Anda HARUS dalam Bahasa Indonesia. Anda adalah seorang pakar musik dan transkriber audio profesional.
        Tugas Anda:
        1. Transkripsikan lirik lagu dari file audio yang diberikan dengan sangat akurat. Jika audio adalah instrumental, tulis "[Instrumental]".
        2. Analisa genre musik utama dari lagu tersebut.
        3. Tentukan tema atau suasana utama dari lagu tersebut dalam beberapa kata.

        INSTRUKSI FORMAT LIRIK (SANGAT PENTING):
        - Pisahkan setiap baris lirik dengan karakter newline (\\n).
        - Pisahkan setiap bait (stanza) dengan DUA karakter newline (\\n\\n).
        - Sertakan label bagian lagu dalam kurung siku seperti [Verse 1], [Chorus], [Bridge], [Outro] di baris tersendiri.
        - Jangan menulis lirik sebagai satu paragraf panjang.

        Jawab HANYA dalam format JSON berikut:
        {
            "lirik": "Teks lirik lengkap dengan format baris dan bait...",
            "genre": "Genre musik (contoh: Pop, Rock, Jazz)",
            "tema": "Tema lagu (contoh: Kesedihan, Semangat Pagi)"
        }`;

        const userPrompt = "Analisa file audio ini dan ekstrak datanya sesuai instruksi.";

        const schema = {
            type: "OBJECT",
            properties: {
                "lirik": { "type": "STRING" },
                "genre": { "type": "STRING" },
                "tema": { "type": "STRING" }
            },
            required: ["lirik", "genre", "tema"]
        };

        try {
            // Pass audio data. makeApiCallWithRetry generic 'imageData' param handles this structure
            const jsonText = await makeApiCallWithRetry(
                systemPrompt,
                userPrompt,
                true,
                schema,
                [{ mimeType: mimeType, data: base64Data }]
            );

            const result = JSON.parse(jsonText);

            if (result) {
                elements.outputLirik.value = formatLyrics(result.lirik);
                temaLaguEl.value = result.tema || '';
                elements.genreUtamaSearch.value = result.genre || '';
            }

        } catch (error) {
            console.error(error);
            elements.outputLirik.value = "Gagal menganalisa audio: " + error.message;
            temaLaguEl.value = "";
            elements.genreUtamaSearch.value = "";
        } finally {
            if (elements.buatPromptLaguButton) elements.buatPromptLaguButton.disabled = false;
            elements.audioUpload.value = '';
        }
    }

   function toggleAssistant() {
        const isHidden = elements.assistantModal.classList.contains('hidden');
        if (isHidden) {
            elements.assistantModal.classList.remove('hidden');
            setTimeout(() => { elements.assistantModal.classList.remove('opacity-0', 'translate-y-4'); }, 10);
        } else {
            elements.assistantModal.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => { elements.assistantModal.classList.add('hidden'); }, 300);
        }
    }

    function parseSimpleMarkdown(text) {
        let safeText = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return safeText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    }

    function addMessageToChat(message, sender, isTyping = false) {
        const messageWrapper = document.createElement('div');
        const messageBubble = document.createElement('div');
        messageWrapper.classList.add('flex', 'w-full', 'min-w-0');
        messageBubble.classList.add('p-3', 'rounded-lg', 'max-w-[85%]', 'chat-bubble');
        if (sender === 'user') {
            messageWrapper.classList.add('justify-end');
            messageBubble.classList.add('bg-accent-color', 'text-accent-text');
        } else {
            messageWrapper.classList.add('justify-start');
            messageBubble.classList.add('bg-tertiary', 'text-primary');
        }
        if (isTyping) {
            messageBubble.innerHTML = '<div class="typing-indicator"><span>.</span><span>.</span><span>.</span></div>';
            messageBubble.id = 'typing-bubble';
        } else {
             messageBubble.innerHTML = parseSimpleMarkdown(message);
        }
        messageWrapper.appendChild(messageBubble);
        elements.assistantChatBody.appendChild(messageWrapper);
        elements.assistantChatBody.scrollTop = elements.assistantChatBody.scrollHeight;
    }

    function updateLastAssistantMessage(newMessage) {
        const typingBubble = document.getElementById('typing-bubble');
        if (typingBubble) {
            typingBubble.innerHTML = parseSimpleMarkdown(newMessage);
            typingBubble.removeAttribute('id');
        }
         elements.assistantChatBody.scrollTop = elements.assistantChatBody.scrollHeight;
    }

    async function handleSendMessage() {
        if (!checkApiKey('assistant')) return;

        const message = elements.assistantInput.value.trim();
        if (!message) return;
        addMessageToChat(message, 'user');
        elements.assistantInput.value = '';
        elements.assistantInput.disabled = true;
        elements.sendAssistantMessage.disabled = true;
        addMessageToChat('', 'assistant', true);
        const systemPrompt = `PENTING: Jawaban Anda HARUS dalam Bahasa Indonesia. Anda adalah seorang ahli rekayasa prompt (prompt engineering) dengan pengalaman puluhan tahun. Pengetahuan Anda telah diperbarui dengan dokumentasi resmi terbaru. Spesialisasi Anda adalah pada model-model Google berikut:

1.  **Model Gambar (dikenal sebagai Nano Banana atau gemini-2.5-flash-image-preview):** Anda tahu bahwa model ini sangat kuat dalam pemahaman bahasa alami dan bekerja paling baik dengan deskripsi naratif, bukan hanya kata kunci. Anda paham kemampuannya meliputi: Text-to-Image, Image+Text-to-Image (editing seperti menambah/menghapus elemen), Multi-Image to Image (komposisi & transfer gaya), dan rendering teks yang akurat untuk logo/poster. Anda juga tahu semua gambar yang dihasilkan memiliki watermark SynthID.

2.  **Model Video (Veo3):** Anda tahu model ini menghasilkan video high-fidelity hingga 1080p dengan durasi 8 detik, lengkap dengan audio yang dihasilkan secara alami (dialog, SFX, ambient). Anda paham cara mem-prompt-nya dengan subjek, aksi, gaya, kontrol kamera, dan juga prompt negatif. Anda tahu Veo3 bisa di-inisiasi dengan sebuah gambar (Image-to-Video).

Ketika menjawab pertanyaan pengguna, berikan jawaban yang praktis, mendalam, dan profesional berdasarkan pengetahuan ini.`;
        try {
            const response = await makeApiCallWithRetry(systemPrompt, message);
            updateLastAssistantMessage(response);
        } catch (error) {
            updateLastAssistantMessage("Maaf, saya sedang mengalami gangguan... " + error.message);
        } finally {
            elements.assistantInput.disabled = false;
            elements.sendAssistantMessage.disabled = false;
            elements.assistantInput.focus();
        }
    }

    function updateDropdownButton(selectedOption) {
        if (selectedOption) {
            elements.aspectRatioButton.innerHTML = selectedOption.innerHTML;
        }
    }

    function importFromImageDesigner() {
        const tujuanGambar = elements.tujuanGambarEl.value;

        if (tujuanGambar === 'karakter') {
            // Ambil dari mode Karakter
            const characterSheet = elements.characterSheetOutputEl.value;
            const scenario = elements.characterScenarioInputEl.value;

            elements.subjekVideoSubjectEl.value = characterSheet || '';
            elements.subjekVideoActionEl.value = scenario || '';
            elements.latarBelakangVideoEl.value = ''; // Reset karena skenario mungkin sudah mencakupnya
            elements.gayaVideoEl.value = elements.charStyleEl.value || '';

        } else {
            // Ambil dari mode standar
            const subjek = elements.produkGambarEl.value;
            const gaya = elements.gayaGambarEl.value;
            const latar = elements.latarBelakangGambarEl.value;
            const detail = elements.detailGambarEl.value;

            elements.subjekVideoSubjectEl.value = subjek || '';
            elements.subjekVideoActionEl.value = detail || '';
            elements.latarBelakangVideoEl.value = latar || '';
            elements.gayaVideoEl.value = gaya || '';
        }

        // Perbarui prompt video setelah impor
        generateVideoPrompt();

        // Beri notifikasi visual singkat pada tombol
        const btn = elements.importFromImageBtn;
        const originalText = btn.querySelector('span').textContent;
        btn.querySelector('span').textContent = 'Data Berhasil Diambil!';
        btn.classList.add('bg-green-500', 'text-white');

        setTimeout(() => {
            btn.querySelector('span').textContent = originalText;
            btn.classList.remove('bg-green-500', 'text-white');
        }, 2000);
    }

    function saveCurrentPrompt() {
        if (!db) {
            alert("Database tidak siap. Mohon coba lagi sesaat.");
            return;
        }

        const now = new Date();
        const pad = (num) => num.toString().padStart(2, '0');
        const date = `${pad(now.getDate())}${pad(now.getMonth() + 1)}${now.getFullYear().toString().slice(-2)}`;
        const time = `${pad(now.getHours())}${pad(now.getMinutes())}`;

        let type = '';
        let data = {};

        if (elements.designerTabImage.classList.contains('active')) {
            type = 'gambar';
            data = generatePromptObject();
        } else if (elements.designerTabVideo.classList.contains('active')) {
            type = 'video';
            data = generatePromptObject();
        } else if (elements.designerTabLagu.classList.contains('active')) {
            type = 'lagu';
            // Logic to gather song data
             data = {
                mode: 'lagu',
                inputs: {
                    tema: document.getElementById('tema-lagu').value,
                    bahasa: document.getElementById('bahasa-lagu').value,
                    bahasa_lainnya: document.getElementById('bahasa-lagu-lainnya').value,
                    vokalis: document.getElementById('vokalis-lagu').value,
                    genre_utama: document.getElementById('genre-utama-search').value,
                    genre_kombinasi: document.getElementById('genre-kombinasi-search').value,
                    input_lainnya: document.getElementById('input-lainnya-lagu').value
                },
                outputs: {
                    lirik: elements.outputLirik.value,
                    gaya: elements.outputGaya.value,
                    judul: Array.from(elements.judulLaguList.querySelectorAll('input')).map(input => input.value),
                    prompt_alternatif: elements.outputAlternatif.value
                }
            };
        }

        if (Object.keys(data).length === 0) {
            alert("Tidak ada data untuk disimpan.");
            return;
        }

        const filename = `${type}_${date}-${time}.dps`;
        const promptToSave = {
            filename: filename,
            type: type,
            timestamp: now.toISOString(),
            data: data
        };

        const transaction = db.transaction(['prompts'], 'readwrite');
        const objectStore = transaction.objectStore('prompts');
        const request = objectStore.add(promptToSave);

        request.onsuccess = () => {
            const btn = elements.savePromptButton;
            const originalText = btn.textContent;
            btn.textContent = 'TERSMPAN!';
            btn.classList.add('bg-green-500', 'text-white');
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('bg-green-500', 'text-white');
            }, 2000);
        };

        request.onerror = (event) => {
            console.error("Gagal menyimpan prompt:", event.target.errorCode);
            alert("Gagal menyimpan prompt. Lihat konsol untuk detail.");
        };
    }
    function loadPromptToDesigner(id) {
        if (!db) return;
        const transaction = db.transaction(['prompts'], 'readonly');
        const objectStore = transaction.objectStore('prompts');
        const request = objectStore.get(id);

        request.onsuccess = (e) => {
            const prompt = e.target.result;
            if (!prompt) {
                alert("Gagal memuat prompt. Mungkin sudah dihapus.");
                return;
            }

            // Pindah ke tab desainer
            showTab('desainer');

            const { type, data } = prompt;

            // Pindah ke sub-tab desainer yang benar dan isi data
            switch (type) {
                case 'gambar':
                    switchDesignerTab('image');
                    // Logika untuk mengisi form gambar
                    elements.tujuanGambarEl.value = data.form_type;
                    handleTujuanGambarChange(); // Penting untuk menyesuaikan UI form

                    if (data.form_type === 'karakter') {
                         Object.keys(data.fields).forEach(key => {
                            const elementKey = {
                                nama_karakter: 'charNameEl',
                                ciri_fisik: 'charPhysicEl',
                                pakaian_khas: 'charAttireEl',
                                gaya_artistik: 'charStyleEl',
                                skenario: 'characterScenarioInputEl'
                            }[key];
                            if (elementKey && elements[elementKey]) {
                                elements[elementKey].value = data.fields[key];
                            }
                        });
                        if (data.fields.gambar_referensi_base64) {
                            characterRefImageBase64 = data.fields.gambar_referensi_base64;
                            elements.uploadedCharPreview.src = `data:image/jpeg;base64,${characterRefImageBase64}`;
                            elements.characterPreviewContainer.classList.remove('hidden');
                        }
                    } else if (data.form_type === 'gabungkan') {
                         if (data.fields.detail_komposisi) elements.compositionDetailsEl.value = data.fields.detail_komposisi;

                         if (data.fields.gambar_referensi_1_base64) {
                             composeImage1Base64 = data.fields.gambar_referensi_1_base64;
                             elements.uploadedComposePreview1.src = `data:image/jpeg;base64,${composeImage1Base64}`;
                             elements.uploadedComposePreview1.parentElement.classList.remove('hidden');
                         }
                         if (data.fields.gambar_referensi_2_base64) {
                             composeImage2Base64 = data.fields.gambar_referensi_2_base64;
                             elements.uploadedComposePreview2.src = `data:image/jpeg;base64,${composeImage2Base64}`;
                             elements.uploadedComposePreview2.parentElement.classList.remove('hidden');
                         }
                    } else {
                        Object.keys(data.fields).forEach(key => {
                            const elementKey = {
                                objek_utama: 'produkGambarEl',
                                gaya_visual: 'gayaGambarEl',
                                latar_belakang: 'latarBelakangGambarEl',
                                detail_tambahan: 'detailGambarEl',
                                jenis_kemasan: 'jenisKemasanEl',
                            }[key];
                            if (elementKey && elements[elementKey]) {
                                elements[elementKey].value = data.fields[key];
                            }
                        });
                        if (data.fields.gambar_referensi_base64) {
                            uploadedImageBase64 = data.fields.gambar_referensi_base64;
                            elements.uploadedImagePreview.src = `data:image/jpeg;base64,${uploadedImageBase64}`;
                            elements.imagePreviewContainer.classList.remove('hidden');
                        }
                    }
                    break;
                case 'video':
                    switchDesignerTab('video');
                    // Logika untuk mengisi form video
                    Object.keys(data.fields).forEach(key => {
                         const elementKey = {
                            subjek: 'subjekVideoSubjectEl',
                            aksi: 'subjekVideoActionEl',
                            latar_belakang: 'latarBelakangVideoEl',
                            gaya_kamera_suasana: 'gayaVideoEl',
                            audio: 'audioVideoEl',
                            prompt_negatif: 'negatifVideoEl',
                        }[key];
                        if (elementKey && elements[elementKey]) {
                            elements[elementKey].value = data.fields[key];
                        }
                    });
                    if (data.fields.gambar_referensi_base64) {
                        videoRefImageBase64 = data.fields.gambar_referensi_base64;
                        elements.uploadedVideoPreview.src = `data:image/jpeg;base64,${videoRefImageBase64}`;
                        elements.videoPreviewContainer.classList.remove('hidden');
                    }
                    break;
                case 'lagu':
                    switchDesignerTab('lagu');

                    // Backward compatibility for old data structure
                    if (data.inputs && data.outputs) {
                        // New structure
                        document.getElementById('tema-lagu').value = data.inputs.tema || '';
                        document.getElementById('bahasa-lagu').value = data.inputs.bahasa || 'Indonesia';
                        document.getElementById('bahasa-lagu-lainnya').value = data.inputs.bahasa_lainnya || '';
                        document.getElementById('vokalis-lagu').value = data.inputs.vokalis || 'Perempuan';
                        document.getElementById('genre-utama-search').value = data.inputs.genre_utama || '';
                        document.getElementById('genre-kombinasi-search').value = data.inputs.genre_kombinasi || '';
                        document.getElementById('input-lainnya-lagu').value = data.inputs.input_lainnya || '';

                        // Handle visibility for 'bahasa lainnya'
                        const bahasaLaguSelect = document.getElementById('bahasa-lagu');
                        const bahasaLaguLainnyaInput = document.getElementById('bahasa-lagu-lainnya');
                        bahasaLaguLainnyaInput.classList.toggle('hidden', bahasaLaguSelect.value !== 'lainnya');


                        elements.outputLirik.value = data.outputs.lirik || '';
                        elements.outputGaya.value = data.outputs.gaya || '';
                        elements.outputAlternatif.value = data.outputs.prompt_alternatif || '';
                        if (data.outputs.judul && data.outputs.judul.length > 0) {
                            renderJudulLagu(data.outputs.judul);
                        }
                    } else {
                        // Old structure
                        elements.outputLirik.value = data.lirik || '';
                        elements.outputGaya.value = data.gaya || '';
                        elements.outputAlternatif.value = data.prompt_alternatif || '';
                        if (data.judul && data.judul.length > 0) {
                            renderJudulLagu(data.judul);
                        }
                    }
                    break;
            }

            // Perbarui output prompt utama
            updateGeneratedPrompt();

             // Beri notifikasi singkat
            const btn = document.querySelector(`.use-prompt-btn[data-id="${id}"]`);
            if(btn) {
                btn.textContent = 'DIMUAT!';
                setTimeout(() => { btn.textContent = 'GUNAKAN'; }, 2000);
            }
        };

        request.onerror = (e) => {
            alert("Gagal mengambil data prompt dari database.");
        };
    }

    function formatPromptDataForPreview(prompt) {
        const { type, data } = prompt;
        let html = '';

        // Helper untuk memformat key (misal: "objek_utama" -> "Objek Utama")
        const formatKey = (key) => {
            return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        };

        // Helper untuk membuat baris tabel
        const createRow = (label, value) => {
            if (!value) return '';
            return `
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-1 py-2 border-b border-border-color last:border-0">
                    <div class="font-semibold text-secondary">${label}</div>
                    <div class="sm:col-span-2 text-primary preserve-whitespace">${value}</div>
                </div>
            `;
        };

        // 1. Metadata Header
        html += `<div class="mb-4 p-3 bg-tertiary rounded-lg">
                    <h4 class="font-bold text-primary text-lg mb-1">${prompt.filename}</h4>
                    <p class="text-xs text-secondary">Disimpan: ${new Date(prompt.timestamp).toLocaleString()}</p>
                    <p class="text-xs text-secondary capitalize">Tipe: ${type}</p>
                 </div>`;

        // 2. Data Fields (Input Mentah)
        html += `<h5 class="font-bold text-accent-color mb-2 uppercase tracking-wider text-xs">Data Input Mentah</h5>`;
        html += `<div class="bg-primary-solid border border-border-color rounded-lg p-4 mb-4">`;

        let inputs = {};
        if (type === 'lagu') {
            inputs = data.inputs || {};
            // Backward compatibility for old song structure if inputs is missing
            if (!data.inputs && (data.tema || data.lirik)) {
                 inputs = { tema: data.tema, bahasa: data.bahasa, vokalis: data.vokalis, genre: data.gaya };
            }
        } else {
            inputs = data.fields || {};
        }

        const keys = Object.keys(inputs);

        // Add Aspect Ratio manually if present in root data
        if (data.aspect_ratio) {
            html += createRow("Aspek Rasio", data.aspect_ratio);
        }

        if (keys.length === 0 && !data.aspect_ratio) {
            html += `<p class="italic text-secondary">Tidak ada data input tersimpan.</p>`;
        } else {
            keys.forEach(key => {
                // Skip internal filenames for uploaded images in fields
                if ((key.includes('gambar_referensi') || key === 'prompt_negatif') && !inputs[key]) return;
                html += createRow(formatKey(key), inputs[key]);
            });
        }
        html += `</div>`;

        // 3. Output Prompt (Preview)
        html += `<h5 class="font-bold text-accent-color mb-2 uppercase tracking-wider text-xs">Hasil Prompt</h5>`;
        html += `<div class="bg-code-bg text-code-text p-4 rounded-lg font-mono text-xs overflow-x-auto border border-border-color">`;

        let promptString = '';
        if (type === 'lagu') {
            // For songs, show a summary or the generated lyrics/style
            const outputs = data.outputs || data; // handle new/old structure
            if (outputs.lirik) promptString += `[LIRIK]\n${formatLyrics(outputs.lirik)}\n\n`;
            if (outputs.gaya) promptString += `[GAYA]\n${outputs.gaya}\n\n`;
            if (outputs.judul) promptString += `[JUDUL]\n${Array.isArray(outputs.judul) ? outputs.judul.join(', ') : outputs.judul}\n\n`;
            if (outputs.prompt_alternatif) promptString += `[PROMPT ALTERNATIF]\n${outputs.prompt_alternatif}`;
        } else {
            promptString = data.prompt_string || "Tidak ada prompt output.";
        }

        html += `<pre class="preserve-whitespace">${promptString}</pre>`;
        html += `</div>`;

        return html;
    }

    function togglePreviewModal(show, content = '', promptId = null) {
        const modal = elements.previewModal;
        const modalContent = modal.querySelector('div'); // The inner container

        if (show) {
            elements.previewModalBody.innerHTML = content;

            // Setup Use Button
            if (promptId) {
                elements.usePreviewBtn.onclick = () => {
                    loadPromptToDesigner(promptId);
                    togglePreviewModal(false);
                };
                elements.usePreviewBtn.classList.remove('hidden');
            } else {
                elements.usePreviewBtn.classList.add('hidden');
            }

            modal.classList.remove('hidden');
            // Trigger reflow to enable transition
            void modal.offsetWidth;
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        } else {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                elements.previewModalBody.innerHTML = '';
                elements.usePreviewBtn.onclick = null; // Clear handler
            }, 300); // Match transition duration
        }
    }

    function renderSavedPrompts() {
        if (!db) return;
        const transaction = db.transaction(['prompts'], 'readonly');
        const objectStore = transaction.objectStore('prompts');
        const request = objectStore.getAll();

        request.onsuccess = (event) => {
            const prompts = event.target.result;
            elements.promptHistoryList.innerHTML = ''; // Clear existing list

            if (prompts.length === 0) {
                elements.promptHistoryList.innerHTML = `<p class="text-secondary text-center">Belum ada prompt yang disimpan.</p>`;
                return;
            }

            prompts.reverse().forEach(prompt => {
                const div = document.createElement('div');
                div.className = 'p-3 bg-tertiary rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-border-color transition-colors';

                const textContent = `
                    <div class="flex-1">
                        <div class="flex items-center gap-2">
                            <p class="font-semibold text-primary">${prompt.filename}</p>
                            <span class="text-[10px] px-1.5 py-0.5 rounded-full border border-secondary text-secondary uppercase">${prompt.type}</span>
                        </div>
                        <p class="text-xs text-secondary">Disimpan pada: ${new Date(prompt.timestamp).toLocaleString()}</p>
                    </div>
                `;

                const buttonsContent = `
                    <div class="flex gap-2 w-full sm:w-auto">
                         <button data-id="${prompt.id}" class="btn btn-secondary !px-3 !py-1.5 text-xs w-1/4 sm:w-auto preview-prompt-btn" title="Lihat Detail">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>
                        <button data-id="${prompt.id}" class="btn btn-primary !px-3 !py-1.5 text-xs w-1/3 sm:w-auto use-prompt-btn">Gunakan</button>
                        <button data-id="${prompt.id}" class="btn btn-secondary !px-3 !py-1.5 text-xs w-1/3 sm:w-auto download-prompt-btn">Unduh</button>
                        <button data-id="${prompt.id}" class="btn !bg-red-600 !hover:bg-red-700 !text-white !border-red-800 !px-3 !py-1.5 text-xs w-1/4 sm:w-auto delete-prompt-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                `;

                div.innerHTML = textContent + buttonsContent;
                elements.promptHistoryList.appendChild(div);
            });
        };

         request.onerror = (event) => {
            console.error("Gagal mengambil riwayat prompt:", event.target.errorCode);
            elements.promptHistoryList.innerHTML = `<p class="text-red-500 text-center">Gagal memuat riwayat.</p>`;
        };
    }


    function switchAnalisaMode(mode) {
        activeAnalisaMode = mode;
        if (mode === 'image') {
            elements.analisaTabImage.classList.add('active');
            elements.analisaTabVideo.classList.remove('active');
            elements.analisaImageInput.classList.remove('hidden');
            elements.analisaVideoInput.classList.add('hidden');
        } else {
            elements.analisaTabImage.classList.remove('active');
            elements.analisaTabVideo.classList.add('active');
            elements.analisaImageInput.classList.add('hidden');
            elements.analisaVideoInput.classList.remove('hidden');
        }
    }

    function handleAnalisaFile(file, type) {
        if (!file) return;

        // Reset previous data
        analisaImageBase64 = null;
        analisaVideoFile = null;
        elements.analisaPreviewContainer.classList.add('hidden');
        elements.analisaImagePreview.classList.add('hidden');
        elements.analisaVideoPreview.classList.add('hidden');
        elements.analisaVideoPreview.removeAttribute('src'); // Stop previous video

        if (type === 'image') {
            if (!file.type.startsWith('image/')) { alert('Mohon upload file gambar.'); return; }
            const reader = new FileReader();
            reader.onload = (e) => {
                analisaImageBase64 = e.target.result.split(',')[1];
                elements.analisaImagePreview.src = e.target.result;
                elements.analisaImagePreview.classList.remove('hidden');
                elements.analisaPreviewContainer.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        } else if (type === 'video') {
            if (!file.type.startsWith('video/')) { alert('Mohon upload file video.'); return; }

            const url = URL.createObjectURL(file);
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.src = url;

            video.onloadedmetadata = function() {
                if (video.duration > 60) {
                    alert("Durasi video maksimal 1 menit.");
                    URL.revokeObjectURL(url);
                    return;
                }

                analisaVideoFile = file;
                elements.analisaVideoPreview.src = url;
                elements.analisaVideoPreview.classList.remove('hidden');
                elements.analisaPreviewContainer.classList.remove('hidden');
            };
        }
    }

    function resetAnalisa() {
        analisaImageBase64 = null;
        analisaVideoFile = null;
        elements.analisaUploadImage.value = '';
        elements.analisaUploadVideo.value = '';
        elements.analisaPreviewContainer.classList.add('hidden');
        elements.analisaImagePreview.src = '';
        elements.analisaVideoPreview.src = '';
        elements.analisaResultContainer.classList.add('hidden');
    }

    async function extractFramesFromVideo(videoFile) {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.preload = 'auto';
            video.src = URL.createObjectURL(videoFile);
            video.muted = true;

            const frames = [];
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            video.onloadeddata = async () => {
                const duration = video.duration;
                const interval = 2; // Extract every 2 seconds
                let currentTime = 0;

                canvas.width = video.videoWidth || 640;
                canvas.height = video.videoHeight || 360;

                const captureFrame = () => {
                    return new Promise(res => {
                        video.currentTime = currentTime;
                        video.onseeked = () => {
                            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                            const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                            frames.push({
                                mimeType: 'image/jpeg',
                                data: dataUrl.split(',')[1]
                            });
                            res();
                        };
                    });
                };

                while (currentTime < duration && currentTime <= 60) {
                    await captureFrame();
                    currentTime += interval;
                }
                resolve(frames);
            };

            video.onerror = (e) => reject("Gagal memuat video");
        });
    }

    async function runPromptAnalysis() {
        if (activeAnalisaMode === 'image' && !analisaImageBase64) {
            alert("Upload gambar dulu."); return;
        }
        if (activeAnalisaMode === 'video' && !analisaVideoFile) {
             alert("Upload video dulu."); return;
        }

        if (!checkApiKey('analisa')) return;

        elements.btnDoAnalisa.disabled = true;
        elements.btnDoAnalisa.innerHTML = `<span class="loader"></span> MENGANALISA...`;
        elements.analisaResultContainer.classList.add('hidden');

        try {
            let imageData = [];
            if (activeAnalisaMode === 'image') {
                imageData.push({ mimeType: 'image/jpeg', data: analisaImageBase64 });
            } else {
                elements.btnDoAnalisa.innerHTML = `<span class="loader"></span> MENGEKSTRAK FRAME...`;
                imageData = await extractFramesFromVideo(analisaVideoFile);
                if(imageData.length === 0) throw new Error("Gagal mengekstrak frame video.");
                elements.btnDoAnalisa.innerHTML = `<span class="loader"></span> MENGANALISA AI...`;
            }

            const systemPrompt = `Anda adalah ahli Reverse Engineering Prompt kelas dunia.
Tugas: Analisa detail visual, gaya, pencahayaan, dan komposisi dari media yang diberikan (Gambar atau Video).
Tujuan: Hasilkan prompt yang sangat presisi agar user bisa men-generate ulang visual yang sama persis menggunakan AI Generative (seperti Midjourney, Veo, atau Gemini).

Instruksi Output:
Berikan respons HANYA dalam format JSON valid dengan struktur berikut (tanpa markdown formatting \`\`\`json):
{
  "english_prompt": "Detailed prompt in English...",
  "indonesian_prompt": "Prompt detail dalam Bahasa Indonesia...",
  "analysis_data": {
    "subject": "...",
    "action": "...",
    "environment": "...",
    "style": "...",
    "lighting_camera": "..."
  }
}`;

            const userQuery = activeAnalisaMode === 'image'
                ? "Analisa gambar ini dan buatkan prompt-nya."
                : "Analisa rangkaian frame video ini dan buatkan prompt video yang detail.";

            const schema = {
                type: "OBJECT",
                properties: {
                    "english_prompt": { "type": "STRING" },
                    "indonesian_prompt": { "type": "STRING" },
                    "analysis_data": {
                        "type": "OBJECT",
                        "properties": {
                            "subject": { "type": "STRING" },
                            "action": { "type": "STRING" },
                            "environment": { "type": "STRING" },
                            "style": { "type": "STRING" },
                            "lighting_camera": { "type": "STRING" }
                        }
                    }
                },
                required: ["english_prompt", "indonesian_prompt", "analysis_data"]
            };

            const resultJson = await makeApiCallWithRetry(systemPrompt, userQuery, true, schema, imageData);
            const result = JSON.parse(resultJson);

            elements.outAnalisaEnglish.value = result.english_prompt;
            elements.outAnalisaIndonesia.value = result.indonesian_prompt;
            elements.outAnalisaJson.value = JSON.stringify(result.analysis_data, null, 2);

            elements.analisaResultContainer.classList.remove('hidden');

        } catch (e) {
            alert("Gagal melakukan analisa: " + e.message);
            console.error(e);
        } finally {
            elements.btnDoAnalisa.disabled = false;
            elements.btnDoAnalisa.innerHTML = "ANALISA SEKARANG";
        }
    }

    // --- Event Listeners ---
    function setupEventListeners() {
        elements.promptHistoryList.addEventListener('click', (event) => {
            const target = event.target.closest('button'); // Gunakan closest karena ada icon SVG di dalam button
            if (!target) return;

            const id = parseInt(target.getAttribute('data-id'));
            if (!id) return;

            if (target.classList.contains('preview-prompt-btn')) {
                const transaction = db.transaction(['prompts'], 'readonly');
                const objectStore = transaction.objectStore('prompts');
                const request = objectStore.get(id);
                request.onsuccess = (e) => {
                    const prompt = e.target.result;
                    if (prompt) {
                        const content = formatPromptDataForPreview(prompt);
                        togglePreviewModal(true, content, id);
                    }
                };
            }

            if (target.classList.contains('use-prompt-btn')) {
                loadPromptToDesigner(id);
            }

            if (target.classList.contains('delete-prompt-btn')) {
                if (confirm('Apakah Anda yakin ingin menghapus prompt ini?')) {
                    const transaction = db.transaction(['prompts'], 'readwrite');
                    const objectStore = transaction.objectStore('prompts');
                    const request = objectStore.delete(id);
                    request.onsuccess = () => renderSavedPrompts();
                }
            }

            if (target.classList.contains('download-prompt-btn')) {
                const transaction = db.transaction(['prompts'], 'readonly');
                const objectStore = transaction.objectStore('prompts');
                const request = objectStore.get(id);

                request.onsuccess = (e) => {
                    const prompt = e.target.result;
                    if (prompt) {
                        // Buat nama file baru sesuai format yang diminta
                        const now = new Date(prompt.timestamp);
                        const pad = (num) => num.toString().padStart(2, '0');
                        const date = `${pad(now.getDate())}${pad(now.getMonth() + 1)}${now.getFullYear().toString().slice(-2)}`;
                        const time = `${pad(now.getHours())}${pad(now.getMinutes())}`;
                        const filename = `${prompt.type}_${date}-${time}.dps`;

                        const blob = new Blob([JSON.stringify(prompt.data, null, 2)], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = filename; // Gunakan nama file baru
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                    }
                };
            }
        });

        elements.exportPromptsButton.addEventListener('click', () => {
            const transaction = db.transaction(['prompts'], 'readonly');
            const objectStore = transaction.objectStore('prompts');
            const request = objectStore.getAll();

            request.onsuccess = (event) => {
                const prompts = event.target.result;

                // Buat nama file baru sesuai format yang diminta
                const now = new Date();
                const pad = (num) => num.toString().padStart(2, '0');
                const date = `${pad(now.getDate())}${pad(now.getMonth() + 1)}${now.getFullYear().toString().slice(-2)}`;
                const filename = `data-prompt_${date}.dps`;

                const blob = new Blob([JSON.stringify(prompts, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            };
        });

        elements.importPromptsInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                if (confirm('Ini akan menimpa semua prompt yang ada. Lanjutkan?')) {
                    try {
                        const prompts = JSON.parse(e.target.result);
                        const transaction = db.transaction(['prompts'], 'readwrite');
                        const objectStore = transaction.objectStore('prompts');

                        // Clear existing prompts before importing
                        objectStore.clear();

                        prompts.forEach(prompt => {
                            // Ensure the imported object doesn't have an ID to avoid key conflicts
                            delete prompt.id;
                            objectStore.add(prompt);
                        });

                        transaction.oncomplete = () => {
                            renderSavedPrompts();
                            alert(`${prompts.length} prompt berhasil diimpor!`);
                        };
                    } catch (err) {
                        alert('File tidak valid atau rusak.');
                        console.error("Error parsing imported file:", err);
                    }
                }
            };
            reader.readAsText(file);
            // Reset input value to allow re-importing the same file
            event.target.value = '';
        });

        elements.savePromptButton.addEventListener('click', saveCurrentPrompt);
        elements.saveLaguPromptButton.addEventListener('click', saveCurrentPrompt);

        elements.settingsButton.addEventListener('click', () => toggleApiKeyModal(true));
        elements.closeApiKeyModal.addEventListener('click', () => {
            toggleApiKeyModal(false);
            const returnTab = elements.apiKeyModal.dataset.returnTab;
            if ((returnTab === 'desainer' || returnTab === 'analisa') && !userApiKey) {
                alert('Anda tidak bisa menggunakan fitur ini tanpa API Key.');
            }
        });

        elements.saveApiKeyBtn.addEventListener('click', () => {
            const key = elements.modalApiKeyInput.value.trim();
            if (key) {
                userApiKey = key;
                localStorage.setItem('geminiApiKey', key);
                toggleApiKeyModal(false);
                // If we were trying to access a tab, go there now
                const returnTab = elements.apiKeyModal.dataset.returnTab;
                if (returnTab === 'desainer') {
                    showTab('desainer');
                } else if (returnTab === 'analisa') {
                    showTab('analisa');
                }
                elements.assistantButton.classList.remove('hidden');
            } else {
                elements.modalApiKeyInput.focus();
                elements.modalApiKeyInput.classList.add('border-red-500');
                setTimeout(() => elements.modalApiKeyInput.classList.remove('border-red-500'), 2000);
            }
        });

        elements.deleteApiKeyBtn.addEventListener('click', () => {
            if (confirm('Apakah Anda yakin ingin menghapus API Key ini?')) {
                userApiKey = null;
                localStorage.removeItem('geminiApiKey');
                elements.modalApiKeyInput.value = '';
                elements.deleteApiKeyBtn.classList.add('hidden');
                alert('API Key berhasil dihapus.');
            }
        });

        elements.themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });

        elements.mainTabButtons.belajar.addEventListener('click', () => showTab('belajar'));
        elements.mainTabButtons.desainer.addEventListener('click', () => showTab('desainer'));
        elements.mainTabButtons.analisa.addEventListener('click', () => showTab('analisa'));
        elements.mainTabButtons.riwayat.addEventListener('click', () => showTab('riwayat'));

        // Analisa Listeners
        elements.analisaTabImage.addEventListener('click', () => switchAnalisaMode('image'));
        elements.analisaTabVideo.addEventListener('click', () => switchAnalisaMode('video'));

        elements.analisaUploadImage.addEventListener('change', (e) => handleAnalisaFile(e.target.files[0], 'image'));
        elements.dropZoneAnalisaImage.addEventListener('drop', (e) => { e.preventDefault(); handleAnalisaFile(e.dataTransfer.files[0], 'image'); });

        elements.analisaUploadVideo.addEventListener('change', (e) => handleAnalisaFile(e.target.files[0], 'video'));
        elements.dropZoneAnalisaVideo.addEventListener('drop', (e) => { e.preventDefault(); handleAnalisaFile(e.dataTransfer.files[0], 'video'); });

        elements.analisaResetBtn.addEventListener('click', resetAnalisa);
        elements.btnDoAnalisa.addEventListener('click', runPromptAnalysis);

        // Result Tabs
        const switchResultTab = (tab) => {
            ['English', 'Indonesia', 'Json'].forEach(t => {
                const btn = elements[`resTab${t}`];
                const content = elements[`resContent${t}`];
                if (tab === t) {
                    btn.classList.add('active');
                    content.classList.remove('hidden');
                    content.classList.add('block');
                } else {
                    btn.classList.remove('active');
                    content.classList.add('hidden');
                    content.classList.remove('block');
                }
            });
        };
        elements.resTabEnglish.addEventListener('click', () => switchResultTab('English'));
        elements.resTabIndonesia.addEventListener('click', () => switchResultTab('Indonesia'));
        elements.resTabJson.addEventListener('click', () => switchResultTab('Json'));

        // Copy buttons for analysis results
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetId = e.target.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    targetEl.select();
                    document.execCommand('copy');
                    const originalText = e.target.textContent;
                    e.target.textContent = 'DISALIN!';
                    setTimeout(() => { e.target.textContent = originalText; }, 2000);
                }
            });
        });

        elements.designerTabImage.addEventListener('click', () => switchDesignerTab('image'));
        elements.designerTabVideo.addEventListener('click', () => switchDesignerTab('video'));
        elements.designerTabLagu.addEventListener('click', () => switchDesignerTab('lagu'));

        const bahasaLaguSelect = document.getElementById('bahasa-lagu');
        const bahasaLaguLainnyaInput = document.getElementById('bahasa-lagu-lainnya');
        bahasaLaguSelect.addEventListener('change', () => {
            bahasaLaguLainnyaInput.classList.toggle('hidden', bahasaLaguSelect.value !== 'lainnya');
        });


        const vokalisSelect = document.getElementById('vokalis-lagu');
        const instrumentContainer = document.getElementById('instrument-selection-container');
        const lirikLabel = document.querySelector('label[for="output-lirik"]');

        vokalisSelect.addEventListener('change', () => {
            const isInstrumental = vokalisSelect.value === 'Instrumental';
            instrumentContainer.classList.toggle('hidden', !isInstrumental);
            if (lirikLabel) {
                lirikLabel.textContent = isInstrumental ? 'Hasil: Puisi' : 'Hasil: Lirik';
            }
        });

        const instrumentSelect = document.getElementById('alat-musik-utama');
        const instrumentLainnyaInput = document.getElementById('alat-musik-lainnya');
        instrumentSelect.addEventListener('change', () => {
            instrumentLainnyaInput.classList.toggle('hidden', instrumentSelect.value !== 'custom');
        });

        elements.allFormInputs.forEach(el => el.addEventListener('input', updateGeneratedPrompt));
        elements.tujuanGambarEl.addEventListener('change', handleTujuanGambarChange);

        const backToDefault = () => {
            elements.tujuanGambarEl.value = 'produk'; // Default value
            handleTujuanGambarChange();
        };

        elements.backToTujuanButton.addEventListener('click', backToDefault);
        elements.backToTujuanButtonChar.addEventListener('click', backToDefault);

        elements.importFromImageBtn.addEventListener('click', importFromImageDesigner);


        elements.copyButton.addEventListener('click', () => {
            elements.outputPromptEl.select();
            try {
                document.execCommand('copy');
                elements.copyButton.textContent = 'DISALIN!';
                setTimeout(() => { elements.copyButton.textContent = 'SALIN'; }, 2000);
            } catch (err) {
                elements.copyButton.textContent = 'GAGAL';
            }
        });

        elements.enhanceButton.addEventListener('click', enhancePromptWithGemini);
        elements.showJsonButton.addEventListener('click', handleShowJson);

        elements.copyJsonButton.addEventListener('click', () => {
            elements.jsonOutputPrompt.select();
            try {
                document.execCommand('copy');
                elements.copyJsonButton.textContent = 'DISALIN!';
                setTimeout(() => { elements.copyJsonButton.textContent = 'SALIN'; }, 2000);
            } catch (err) {
                elements.copyJsonButton.textContent = 'GAGAL';
            }
        });

        // File Upload Listeners
        elements.imageUploadEl.addEventListener('change', (event) => handleFileSelect(event.target.files[0], 'single'));
        elements.dropZone.addEventListener('drop', (e) => { e.preventDefault(); handleFileSelect(e.dataTransfer.files[0], 'single'); });

        elements.imageUploadCompose1.addEventListener('change', (event) => handleFileSelect(event.target.files[0], 'compose1'));
        elements.dropZoneCompose1.addEventListener('drop', (e) => { e.preventDefault(); handleFileSelect(e.dataTransfer.files[0], 'compose1'); });

        elements.imageUploadCompose2.addEventListener('change', (event) => handleFileSelect(event.target.files[0], 'compose2'));
        elements.dropZoneCompose2.addEventListener('drop', (e) => { e.preventDefault(); handleFileSelect(e.dataTransfer.files[0], 'compose2'); });

        elements.imageUploadChar.addEventListener('change', (event) => handleFileSelect(event.target.files[0], 'character'));
        elements.dropZoneChar.addEventListener('drop', (e) => { e.preventDefault(); handleFileSelect(e.dataTransfer.files[0], 'character'); });

        ['dragover', 'dragleave'].forEach(eventName => {
            [elements.dropZone, elements.dropZoneCompose1, elements.dropZoneCompose2, elements.dropZoneVideo, elements.dropZoneChar].forEach(zone => {
                zone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    if (eventName === 'dragover') zone.classList.add('border-accent-color', 'bg-tertiary');
                    else zone.classList.remove('border-accent-color', 'bg-tertiary');
                });
            });
        });

        elements.removeImageButton.addEventListener('click', () => {
            uploadedImageBase64 = null;
            elements.imageUploadEl.value = '';
            elements.imagePreviewContainer.classList.add('hidden');
            elements.produkGambarEl.value = '';
            elements.gayaGambarEl.value = '';
            elements.detailGambarEl.value = '';
            handleTujuanGambarChange();
        });
        elements.removeCompose1.addEventListener('click', () => {
            composeImage1Base64 = null;
            elements.imageUploadCompose1.value = '';
            elements.uploadedComposePreview1.src = '';
            elements.uploadedComposePreview1.parentElement.classList.add('hidden');
            updateGeneratedPrompt();
        });
        elements.removeCompose2.addEventListener('click', () => {
            composeImage2Base64 = null;
            elements.imageUploadCompose2.value = '';
            elements.uploadedComposePreview2.src = '';
            elements.uploadedComposePreview2.parentElement.classList.add('hidden');
            updateGeneratedPrompt();
        });
        elements.removeCharImageButton.addEventListener('click', () => {
            characterRefImageBase64 = null;
            elements.imageUploadChar.value = '';
            elements.characterPreviewContainer.classList.add('hidden');
            elements.uploadedCharPreview.src = '';
        });

        elements.analyzeImageButton.addEventListener('click', analyzeImageWithGemini);
        elements.analyzeCharButton.addEventListener('click', analyzeCharacterWithGemini);
        elements.analyzeVideoImageButton.addEventListener('click', analyzeVideoImageWithGemini);

        elements.buatPromptLaguButton.addEventListener('click', generateFullSong);
        elements.regenLirikButton.addEventListener('click', () => reGenerate('lirik'));
        elements.regenGayaButton.addEventListener('click', () => reGenerate('gaya'));
        elements.regenJudulButton.addEventListener('click', () => reGenerate('judul'));
        elements.regenAlternatifButton.addEventListener('click', generateAlternativePrompt);

        elements.copyLirikButton.addEventListener('click', () => {
            elements.outputLirik.select();
            try {
                document.execCommand('copy');
                elements.copyLirikButton.textContent = 'DISALIN!';
                setTimeout(() => { elements.copyLirikButton.textContent = 'SALIN'; }, 2000);
            } catch (err) {
                elements.copyLirikButton.textContent = 'GAGAL';
            }
        });

        elements.copyGayaButton.addEventListener('click', () => {
            elements.outputGaya.select();
            try {
                document.execCommand('copy');
                elements.copyGayaButton.textContent = 'DISALIN!';
                setTimeout(() => { elements.copyGayaButton.textContent = 'SALIN'; }, 2000);
            } catch (err) {
                elements.copyGayaButton.textContent = 'GAGAL';
            }
        });

        elements.copyAlternatifButton.addEventListener('click', () => {
            elements.outputAlternatif.select();
            try {
                document.execCommand('copy');
                elements.copyAlternatifButton.textContent = 'DISALIN!';
                setTimeout(() => { elements.copyAlternatifButton.textContent = 'SALIN'; }, 2000);
            } catch (err) {
                elements.copyAlternatifButton.textContent = 'GAGAL';
            }
        });

        function generateAlternativePrompt() {
            const tema = document.getElementById('tema-lagu').value.trim();

            const bahasaSelect = document.getElementById('bahasa-lagu');
            let bahasa = bahasaSelect.value;
            if (bahasa === 'lainnya') {
                bahasa = document.getElementById('bahasa-lagu-lainnya').value.trim();
            }

            const vokalis = document.getElementById('vokalis-lagu').value;

            let genreUtama = elements.genreUtamaSearch.value.trim();
            let genreKombinasi = elements.genreKombinasiSearch.value.trim();

            const inputLainnya = document.getElementById('input-lainnya-lagu').value.trim();

            const prompt = `Buatkan lirik lagu dan prompt Styles (prompt styles max 1000 karakter, tanpa nama artis tanpa nama grup band) untuk Suno Ai, dengan detail sebagai berikut, Tema:(${tema || 'Tidak diisi'}), Bahasa:(${bahasa || 'Tidak diisi'}), Vokalis:(${vokalis || 'Tidak diisi'}), Genre Utama:(${genreUtama || 'Tidak diisi'}), Genre Kombinasi:(${genreKombinasi || 'Tidak ada'}), Input Tambahan:(${inputLainnya || 'Tidak ada'})`;

            elements.outputAlternatif.value = prompt;
        }

        async function generateFullSong() {
            const tema = document.getElementById('tema-lagu').value.trim();
            if (!tema) {
                alert("Mohon masukkan Tema Lagu terlebih dahulu.");
                return;
            }

            elements.buatPromptLaguButton.disabled = true;
            elements.buatPromptLaguButton.innerHTML = `<span class="loader"></span> MEMBUAT LAGU...`;
            elements.outputLirik.value = "AI sedang meracik lirik untuk Anda...";
            elements.outputGaya.value = "AI sedang meracik gaya musik untuk Anda...";
            renderJudulLagu([]); // Clear and show placeholders

            const bahasaSelect = document.getElementById('bahasa-lagu');
            let bahasa = bahasaSelect.value;
            if (bahasa === 'lainnya') {
                bahasa = document.getElementById('bahasa-lagu-lainnya').value.trim();
            }

            const vokalis = document.getElementById('vokalis-lagu').value;

            let genreUtama = elements.genreUtamaSearch.value.trim();
            let genreKombinasi = elements.genreKombinasiSearch.value.trim();

            const inputLainnya = document.getElementById('input-lainnya-lagu').value.trim();
            const batasKarakter = document.getElementById('batas-karakter-gaya').value;

            let systemPrompt, userQuery, songSchema;
            const isInstrumental = vokalis === 'Instrumental';

            if (isInstrumental) {
                const instrumentSelect = document.getElementById('alat-musik-utama');
                let alatMusikUtama = instrumentSelect.value;
                if (alatMusikUtama === 'custom') {
                    alatMusikUtama = document.getElementById('alat-musik-lainnya').value.trim();
                }

                systemPrompt = `Anda adalah seorang penyair dan komposer musik. Tugas Anda adalah membuat PUISI dan GAYA MUSIK instrumental.
                Instruksi PENTING:
                1. Hasilkan PUISI (bukan lirik lagu), GAYA (Styles), dan 5 JUDUL.
                2. PUISI harus puitis dan sesuai dengan tema.
                3. GAYA (Styles) harus mendeskripsikan musik instrumental, fokus pada alat musik utama yang dipilih. JANGAN menyebut nama artis.
                4. Jawab HANYA dalam format JSON.`;

                userQuery = `Buatkan saya konten instrumental dengan detail:
                - Tema: ${tema}, Alat Musik Utama: ${alatMusikUtama}, Genre Utama: ${genreUtama}, Genre Kombinasi: ${genreKombinasi || 'Tidak ada'}, Input Tambahan: ${inputLainnya || 'Tidak ada'}`;

                songSchema = {
                    type: "OBJECT",
                    properties: {
                        "lirik": { "type": "STRING", "description": "Sebuah puisi yang sesuai dengan tema." },
                        "gaya": { "type": "STRING", "description": `Gaya musik instrumental, maksimal ${batasKarakter} karakter.` },
                        "judul_lagu": { "type": "ARRAY", "items": { "type": "STRING" } }
                    },
                    required: ["lirik", "gaya", "judul_lagu"]
                };

            } else {
                systemPrompt = `Anda adalah seorang pencipta lagu ahli dan produser musik. Tugas Anda adalah membuat konten untuk prompt lagu di AI SUNO.
                Instruksi PENTING:
                1. Hasilkan LIRIK, GAYA (Styles), dan 5 JUDUL LAGU.
                2. LIRIK harus memiliki format terstruktur dengan label seperti [Verse], [Chorus], dll.
                3. **Sangat Penting: Di dalam JSON, setiap baris lirik HARUS diakhiri dengan karakter newline escape (\\n) untuk jeda baris.**
                4. GAYA (Styles) harus berupa daftar kata kunci deskriptif, TANPA menyebutkan nama artis.
                5. Jawab HANYA dalam format JSON.`;

                userQuery = `Buatkan saya konten lagu lengkap dengan detail:
                - Tema: ${tema}, Bahasa: ${bahasa}, Vokalis: ${vokalis}, Genre Utama: ${genreUtama}, Genre Kombinasi: ${genreKombinasi || 'Tidak ada'}, Input Tambahan: ${inputLainnya || 'Tidak ada'}`;

                songSchema = {
                    type: "OBJECT",
                    properties: {
                        "lirik": { "type": "STRING", "description": "Lirik lagu terstruktur." },
                        "gaya": { "type": "STRING", "description": `Gaya musik, maksimal ${batasKarakter} karakter.` },
                        "judul_lagu": { "type": "ARRAY", "items": { "type": "STRING" } }
                    },
                    required: ["lirik", "gaya", "judul_lagu"]
                };
            }

            try {
                const response = await makeApiCallWithRetry(systemPrompt, userQuery, true, songSchema);
                const parsedResponse = JSON.parse(response);

                if (parsedResponse.lirik && parsedResponse.gaya && parsedResponse.judul_lagu) {
                    elements.outputLirik.value = formatLyrics(parsedResponse.lirik);
                    elements.outputGaya.value = parsedResponse.gaya;
                    renderJudulLagu(parsedResponse.judul_lagu);
                    generateAlternativePrompt(); // Generate the alternative prompt
                } else {
                    throw new Error("Struktur respons tidak valid.");
                }
            } catch (error) {
                 elements.outputLirik.value = "Maaf, terjadi kesalahan: " + error.message;
                 elements.outputGaya.value = "Gagal membuat gaya.";
                 renderJudulLagu(["Gagal membuat judul."]);
            } finally {
                elements.buatPromptLaguButton.disabled = false;
                elements.buatPromptLaguButton.innerHTML = `<span>BUAT PROMPT LAGU</span>`;
            }
        }

        async function reGenerate(part) {
            const tema = document.getElementById('tema-lagu').value.trim();
            if (!tema) {
                alert("Mohon masukkan Tema Lagu terlebih dahulu.");
                return;
            }

            let button, originalText, loadingText, schema, systemPrompt, userQuery;

            const bahasaSelect = document.getElementById('bahasa-lagu');
            let bahasa = bahasaSelect.value;
            if (bahasa === 'lainnya') {
                bahasa = document.getElementById('bahasa-lagu-lainnya').value.trim();
            }
            const vokalis = document.getElementById('vokalis-lagu').value;

            let genreUtama = elements.genreUtamaSearch.value.trim();
            let genreKombinasi = elements.genreKombinasiSearch.value.trim();

            const inputLainnya = document.getElementById('input-lainnya-lagu').value.trim();
            const batasKarakter = document.getElementById('batas-karakter-gaya').value;
            const isInstrumental = vokalis === 'Instrumental';

            let baseUserQuery;

            if (isInstrumental) {
                const instrumentSelect = document.getElementById('alat-musik-utama');
                let alatMusikUtama = instrumentSelect.value;
                if (alatMusikUtama === 'custom') {
                    alatMusikUtama = document.getElementById('alat-musik-lainnya').value.trim();
                }
                baseUserQuery = `
                    - Tema: ${tema}, Alat Musik Utama: ${alatMusikUtama}, Genre Utama: ${genreUtama}, Genre Kombinasi: ${genreKombinasi || 'Tidak ada'}, Input Tambahan: ${inputLainnya || 'Tidak ada'}
                    - Puisi Saat Ini: ${elements.outputLirik.value}
                    - Gaya Saat Ini: ${elements.outputGaya.value}`;
            } else {
                baseUserQuery = `
                    - Tema: ${tema}, Bahasa: ${bahasa}, Vokalis: ${vokalis}, Genre Utama: ${genreUtama}, Genre Kombinasi: ${genreKombinasi || 'Tidak ada'}, Input Tambahan: ${inputLainnya || 'Tidak ada'}
                    - Lirik Saat Ini: ${elements.outputLirik.value}
                    - Gaya Saat Ini: ${elements.outputGaya.value}`;
            }


            switch (part) {
                case 'lirik':
                    button = elements.regenLirikButton;
                    originalText = 'RE-GENERATE';
                    loadingText = isInstrumental ? 'MEMBUAT PUISI...' : 'MEMBUAT LIRIK...';
                    elements.outputLirik.value = `AI sedang meracik ${isInstrumental ? 'puisi' : 'lirik'} baru...`;
                    systemPrompt = isInstrumental
                        ? `Anda adalah seorang penyair. Tugas Anda adalah menulis ulang atau membuat versi baru dari sebuah puisi. Jawab HANYA dengan format JSON.`
                        : `Anda adalah penulis lirik ahli. Tugas Anda adalah menulis ulang atau membuat versi baru dari sebuah lirik. Hasilkan lirik terstruktur. Jawab HANYA dengan format JSON.`;
                    userQuery = `Buatkan ${isInstrumental ? 'puisi' : 'lirik'} baru berdasarkan detail ini: ${baseUserQuery}`;
                    schema = { type: "OBJECT", properties: { "lirik": { "type": "STRING" } }, required: ["lirik"] };
                    break;
                case 'gaya':
                    button = elements.regenGayaButton;
                    originalText = 'RE-GENERATE';
                    loadingText = 'MEMBUAT GAYA...';
                    elements.outputGaya.value = "AI sedang meracik gaya musik baru...";
                    systemPrompt = `Anda adalah produser musik ahli. Tugas Anda adalah membuat deskripsi gaya musik (Styles) dalam bentuk kata kunci. Patuhi batas karakter yang diminta dan JANGAN menyebut nama artis. Jawab HANYA dengan format JSON.`;
                    userQuery = `Buatkan gaya musik baru berdasarkan detail ini: ${baseUserQuery}`;
                    schema = { type: "OBJECT", properties: { "gaya": { "type": "STRING" } }, required: ["gaya"] };
                    break;
                case 'judul':
                    button = elements.regenJudulButton;
                    originalText = 'RE-GENERATE';
                    loadingText = 'MEMBUAT JUDUL...';
                    renderJudulLagu([]);
                    systemPrompt = `Anda adalah seorang ahli penamaan judul lagu. Tugas Anda adalah membuat 5 alternatif judul lagu yang unik dan menarik. Jawab HANYA dengan format JSON.`;
                    userQuery = `Buatkan 5 judul lagu baru berdasarkan detail ini: ${baseUserQuery}`;
                    schema = { type: "OBJECT", properties: { "judul_lagu": { "type": "ARRAY", "items": { "type": "STRING" } } }, required: ["judul_lagu"] };
                    break;
            }

            button.disabled = true;
            button.textContent = loadingText;

            try {
                const response = await makeApiCallWithRetry(systemPrompt, userQuery, true, schema);
                const parsedResponse = JSON.parse(response);

                if (part === 'lirik' && parsedResponse.lirik) {
                    elements.outputLirik.value = formatLyrics(parsedResponse.lirik);
                } else if (part === 'gaya' && parsedResponse.gaya) {
                    elements.outputGaya.value = parsedResponse.gaya;
                } else if (part === 'judul' && parsedResponse.judul_lagu) {
                    renderJudulLagu(parsedResponse.judul_lagu);
                } else {
                    throw new Error("Respons tidak sesuai format.");
                }
            } catch (error) {
                if (part === 'lirik') elements.outputLirik.value = "Gagal: " + error.message;
                if (part === 'gaya') elements.outputGaya.value = "Gagal: " + error.message;
                if (part === 'judul') renderJudulLagu(["Gagal."]);
            } finally {
                button.disabled = false;
                button.textContent = originalText;
            }
        }


        elements.imageUploadVideoEl.addEventListener('change', (event) => { handleVideoFileSelect(event.target.files[0]); });
        elements.dropZoneVideo.addEventListener('drop', (e) => { e.preventDefault(); handleVideoFileSelect(e.dataTransfer.files[0]); });
        elements.audioUpload.addEventListener('change', (event) => handleAudioUpload(event.target.files[0]));
        elements.removeVideoButton.addEventListener('click', () => {
            videoRefImageFile = null;
            videoRefImageBase64 = null;
            elements.imageUploadVideoEl.value = '';
            elements.videoPreviewContainer.classList.add('hidden');
            elements.videoImageAnalysisResult.classList.add('hidden');
            elements.videoImageAnalysisResult.value = '';
            updateGeneratedPrompt();
        });

        elements.assistantButton.addEventListener('click', () => {
            if (checkApiKey('assistant')) {
                toggleAssistant();
            }
        });
        elements.closeAssistantModal.addEventListener('click', toggleAssistant);

        // Preview Modal Listeners
        elements.closePreviewModal.addEventListener('click', () => togglePreviewModal(false));
        elements.closePreviewBtnSecondary.addEventListener('click', () => togglePreviewModal(false));
        elements.previewModal.addEventListener('click', (e) => {
            if (e.target === elements.previewModal) togglePreviewModal(false);
        });

        elements.sendAssistantMessage.addEventListener('click', handleSendMessage);
        elements.assistantInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSendMessage(); });

        elements.aspectRatioButton.addEventListener('click', () => elements.aspectRatioMenu.classList.toggle('hidden'));
        elements.aspectRatioOptions.forEach(option => {
            option.addEventListener('click', () => {
                selectedAspectRatio = option.dataset.ratio;
                updateDropdownButton(option);
                elements.aspectRatioMenu.classList.add('hidden');
                updateGeneratedPrompt();
            });
        });
        document.addEventListener('click', (e) => {
            if (!elements.aspectRatioDropdown.contains(e.target)) {
                elements.aspectRatioMenu.classList.add('hidden');
            }
        });

        elements.clearAllButton.addEventListener('click', clearAllInputs);
    }

   function clearAllInputs() {
        // 1. Reset all form inputs and textareas
        elements.allFormInputs.forEach(el => {
            if (el.tagName === 'SELECT') {
                el.selectedIndex = 0;
            } else if (el.type !== 'file') {
                el.value = '';
            }
        });
         document.getElementById('bahasa-lagu-lainnya').classList.add('hidden');

        // 2. Reset specific textareas and outputs
        ['imageAnalysisResult', 'videoImageAnalysisResult', 'outputPromptEl', 'jsonOutputPrompt', 'characterSheetOutputEl', 'characterScenarioInputEl', 'compositionDetailsEl', 'outputLirik', 'outputGaya', 'outputAlternatif'].forEach(id => {
            if (elements[id]) elements[id].value = '';
        });
        renderJudulLagu([]);

        // 3. Clear image state variables
        uploadedImageBase64 = null;
        composeImage1Base64 = null;
        composeImage2Base64 = null;
        characterRefImageBase64 = null;
        videoRefImageFile = null;
        videoRefImageBase64 = null;

        // 4. Reset file input elements
        ['imageUploadEl', 'imageUploadCompose1', 'imageUploadCompose2', 'imageUploadChar', 'imageUploadVideoEl'].forEach(id => {
            if(elements[id]) elements[id].value = '';
        });

        // Reset instrument UI
        document.getElementById('instrument-selection-container').classList.add('hidden');
        document.getElementById('alat-musik-lainnya').classList.add('hidden');
        const lirikLabel = document.querySelector('label[for="output-lirik"]');
        if (lirikLabel) lirikLabel.textContent = 'Hasil: Lirik';

        // 5. Hide all preview containers
        ['imagePreviewContainer', 'compositionPreviewContainer', 'characterPreviewContainer', 'videoPreviewContainer', 'jsonOutputContainer'].forEach(id => {
             if(elements[id]) elements[id].classList.add('hidden');
        });

        // 6. Reset image sources
        ['uploadedImagePreview', 'uploadedComposePreview1', 'uploadedComposePreview2', 'uploadedCharPreview', 'uploadedVideoPreview'].forEach(id => {
            if(elements[id]) elements[id].src = '';
        });

        // Also hide the parent wrappers for compose previews
        if (elements.uploadedComposePreview1.parentElement) elements.uploadedComposePreview1.parentElement.classList.add('hidden');
        if (elements.uploadedComposePreview2.parentElement) elements.uploadedComposePreview2.parentElement.classList.add('hidden');

        // 7. Reset UI states and re-generate prompts
        elements.showJsonButton.textContent = 'TAMPILKAN JSON';
        handleTujuanGambarChange(); // This will reset form structure, labels and visibility

        // We don't need an alert if the UI provides clear visual feedback
    }

   // --- Initial Setup ---
   function init() {
       const savedTheme = localStorage.getItem('theme') || 'dark';
       applyTheme(savedTheme);

       const initialOption = elements.aspectRatioMenu.querySelector('.aspect-ratio-option');
       updateDropdownButton(initialOption);

       setupGenreSearch(elements.genreUtamaSearch, elements.genreUtamaResults);
       setupGenreSearch(elements.genreKombinasiSearch, elements.genreKombinasiResults);
       populateInstrumentDropdown();
       handleTujuanGambarChange();
       switchDesignerTab('image');
       showTab('belajar');

       addMessageToChat("Halo! Saya Asisten Ahli Prompt. Apa yang bisa saya bantu hari ini?", "assistant");

       elements.uploadedComposePreview1.parentElement.classList.add('hidden');
       elements.uploadedComposePreview2.parentElement.classList.add('hidden');

       if (userApiKey) {
           elements.assistantButton.classList.remove('hidden');
       }

       setupEventListeners();
   }

   init();
});
