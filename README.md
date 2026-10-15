# Bebenahan (website)

Website statis untuk Bebenahan, jasa merapikan dokumen, data, dan toko online.

Repo ini **publik**. Hanya isi yang memang untuk pengunjung yang boleh masuk ke sini. Draf harga internal, template, dan catatan usaha disimpan di tempat lain.

## Struktur

- `index.html`: seluruh halaman
- `assets/style.css`: tampilan
- `assets/main.js`: interaksi kecil (meja yang bisa dirapikan, tombol salin email)
- `favicon.svg`: ikon

Tanpa framework dan tanpa proses build, jadi cukup buka `index.html` di browser untuk melihat hasilnya.

## Yang sering diubah

- **Harga**: bagian `<ul class="services">` di `index.html`
- **Nomor WhatsApp**: cari komentar `WhatsApp` di `index.html`, lalu tambahkan tombol dengan tautan `https://wa.me/62xxxxxxxxxx`. Pakai nomor khusus usaha, karena nomor ini akan terlihat publik.
- **Contoh hasil dan testimoni**: bagian `id="contoh"`. Tampilkan hanya dengan izin klien.

## Menayangkan dengan GitHub Pages

Di GitHub: Settings, Pages, Source "Deploy from a branch", pilih branch `main` dan folder `/ (root)`.
