// js/kalender.js

/**
 * Fungsi sederhana untuk mendapatkan Hari dan Pasaran dari tanggal Masehi.
 * Menggunakan perhitungan modulo berdasarkan tanggal referensi yang diketahui.
 * Ini adalah penyederhanaan dan mungkin tidak 100% akurat untuk semua kasus
 * kalender Jawa yang kompleks (misal: siklus Wuku, tahun kabisat Jawa, dll).
 *
 * Referensi: 1 Januari 1900 adalah Senin Pahing.
 * Hari ke-0 (Minggu) s/d 6 (Sabtu)
 * Pasaran ke-0 (Legi) s/d 4 (Kliwon)
 * Referensi Hari Index: 1 (Senin)
 * Referensi Pasaran Index: 1 (Pahing)
 */
function getJavaneseDetails(tanggalMasehi) {
    try {
        const tanggalTarget = new Date(tanggalMasehi);
        // Validasi tanggal sederhana
        if (isNaN(tanggalTarget.getTime())) {
            throw new Error("Format tanggal tidak valid.");
        }

        // Tanggal referensi: 1 Januari 1900 (Senin Pahing)
        const tanggalRef = new Date(1900, 0, 1); // Bulan dimulai dari 0 (Januari)
        const refDayIndex = 1; // Senin
        const refPasaranIndex = 1; // Pahing

        // Hitung selisih hari (dalam milidetik, lalu konversi ke hari)
        const selisihMiliDetik = tanggalTarget.getTime() - tanggalRef.getTime();
        // Perhatikan pembulatan ke bawah (floor) untuk hari penuh
        const selisihHari = Math.floor(selisihMiliDetik / (1000 * 60 * 60 * 24));

        // Hitung index hari (0-6)
        // Modulo 7, tambahkan selisih ke index referensi
        // Gunakan ((n % M) + M) % M untuk menangani hasil negatif modulo
        const indexHari = ((refDayIndex + selisihHari) % 7 + 7) % 7;

        // Hitung index pasaran (0-4)
        // Modulo 5, tambahkan selisih ke index referensi
        const indexPasaran = ((refPasaranIndex + selisihHari) % 5 + 5) % 5;

        const namaHari = NAMA_HARI[indexHari];
        const namaPasaran = NAMA_PASARAN[indexPasaran];
        const neptuHari = NEPTU_HARI[namaHari];
        const neptuPasaran = NEPTU_PASARAN[namaPasaran];
        const neptuWeton = neptuHari + neptuPasaran;
        const weton = `${namaHari} ${namaPasaran}`;

        // Konversi Tahun Saka (Samvat 78) - Perkiraan Sederhana
        const tahunMasehi = tanggalTarget.getFullYear();
        const tahunSaka = tahunMasehi - 78;

        // Mendapatkan watak (jika ada di config)
        const watak = WATAK_WETON[weton] || "Watak belum terdefinisi.";

        return {
            namaHari,
            namaPasaran,
            weton,
            neptuHari,
            neptuPasaran,
            neptuWeton,
            tahunSaka, // Tambahkan tahun Saka
            watak // Tambahkan watak
        };

    } catch (error) {
        console.error("Error di getJavaneseDetails:", error);
        return null; // Kembalikan null jika ada error
    }
}