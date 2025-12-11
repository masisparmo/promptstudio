# Panduan Backend: Google Sheets & Apps Script

File ini berisi panduan lengkap dan kode untuk membuat "Backend Gratis" menggunakan Google Sheets dan Google Apps Script (GAS). Sistem ini akan mencatat setiap pengguna yang login ke aplikasi Anda.

## Langkah 1: Siapkan Google Sheet

1. Buka [Google Sheets](https://sheets.google.com) dan buat spreadsheet baru.
2. Beri nama, misalnya: `Database Prompt Studio`.
3. Di **Sheet1**, buat header kolom di baris pertama:
   - Kolom A: `Timestamp`
   - Kolom B: `Email`
   - Kolom C: `Nama`
   - Kolom D: `Foto_URL`
   - Kolom E: `Status` (Ex: Free/Premium)
   - Kolom F: `Device_Token` (Untuk fitur keamanan masa depan)

## Langkah 2: Pasang Google Apps Script

1. Di Google Sheet tersebut, klik menu **Extensions** (Ekstensi) > **Apps Script**.
2. Editor kode akan terbuka. Hapus semua kode yang ada (`function myFunction() {...}`).
3. Salin dan tempel kode berikut ini ke dalam editor:

```javascript
// --- KONFIGURASI ---
const SHEET_NAME = "Sheet1";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Tunggu antrian maksimal 10 detik

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // Ambil data yang dikirim dari Website
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const name = data.name;
    const photo = data.photo || "";
    const action = data.action || "login";

    // Cek apakah user sudah ada?
    const users = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues().flat(); // Ambil kolom Email
    const rowIndex = users.indexOf(email);

    let status = "Free";

    if (rowIndex === -1) {
      // User Baru -> Tambah Baris
      const newRow = [
        new Date(), // Timestamp
        email,
        name,
        photo,
        "Free",     // Default Status
        GenerateToken() // Token Baru
      ];
      sheet.appendRow(newRow);
    } else {
      // User Lama -> Update Timestamp (Kolom A)
      const realRow = rowIndex + 2; // +2 karena header & index array mulai dari 0
      sheet.getRange(realRow, 1).setValue(new Date());

      // Ambil status user saat ini
      status = sheet.getRange(realRow, 5).getValue();
    }

    return ContentService.createTextOutput(JSON.stringify({
      "result": "success",
      "status": status,
      "message": "Data berhasil dicatat"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "error": e.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function GenerateToken() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Fungsi dummy untuk setup awal (jalankan sekali untuk izin akses)
function setup() {
  Logger.log("Setup OK");
}
```

4. Simpan project (Klik icon disket), beri nama "PromptBackend".

## Langkah 3: Deploy (Terbitkan) Script

Ini langkah krusial agar script bisa diakses oleh website.

1. Klik tombol **Deploy** (Warna biru di kanan atas) > **New deployment**.
2. Klik icon roda gigi (Select type) > pilih **Web app**.
3. Isi form berikut:
   - **Description:** Versi 1
   - **Execute as:** `Me` (email anda) -> **PENTING**
   - **Who has access:** `Anyone` (Siapa saja) -> **SANGAT PENTING** (Agar user yang tidak login ke Google pun bisa dicatat datanya oleh script).
4. Klik **Deploy**.
5. Google akan meminta izin akses ("Authorize access"). Ikuti prosesnya:
   - Pilih akun Google Anda.
   - Jika muncul "Google hasn't verified this app" (Wajar karena script pribadi), klik **Advanced** > **Go to PromptBackend (unsafe)**.
   - Klik **Allow**.
6. Salin **Web App URL** yang muncul (berakhiran `/exec`).
   - URL ini lah yang nanti Anda masukkan ke kode Javascript di `index.html`.

## Langkah 4: Sambungkan ke Website

Di file `index.html` (bagian Javascript), cari variabel konfigurasi (nanti akan saya siapkan tempatnya) dan tempel URL tadi.

Contoh:
```javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
```
