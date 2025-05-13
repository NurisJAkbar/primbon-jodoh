// js/primbon.js

/**
 * Melakukan perhitungan pembagian berdasarkan Neptu Gabungan.
 * @param {number} neptuGabungan - Jumlah neptu weton kedua pasangan.
 * @returns {object} - Objek berisi hasil dan interpretasi untuk setiap pembagian.
 */
function hitungPembagian(neptuGabungan) {
    const hasil = {};

    // Pembagian 3
    let sisa3 = neptuGabungan % 3;
    if (sisa3 === 0) sisa3 = 3; // Sisa 0 dianggap 3
    hasil.pembagian3 = {
        sisa: sisa3,
        ...INTERPRETASI.pembagian3[sisa3] // Gabungkan hasil dan makna
    };

    // Pembagian 4
    let sisa4 = neptuGabungan % 4;
    if (sisa4 === 0) sisa4 = 4; // Sisa 0 dianggap 4
    hasil.pembagian4 = {
        sisa: sisa4,
        ...INTERPRETASI.pembagian4[sisa4]
    };

    // Pembagian 5
    let sisa5 = neptuGabungan % 5;
    if (sisa5 === 0) sisa5 = 5; // Sisa 0 dianggap 5
    hasil.pembagian5 = {
        sisa: sisa5,
        ...INTERPRETASI.pembagian5[sisa5]
    };

    // Pembagian 7
    let sisa7 = neptuGabungan % 7;
    if (sisa7 === 0) sisa7 = 7; // Sisa 0 dianggap 7
    hasil.pembagian7 = {
        sisa: sisa7,
        ...INTERPRETASI.pembagian7[sisa7]
    };

    // Pembagian 8 (Pal Srigati)
    let sisa8 = neptuGabungan % 8;
    if (sisa8 === 0) sisa8 = 8; // Sisa 0 dianggap 8
    hasil.pembagian8 = {
        sisa: sisa8,
        ...INTERPRETASI.pembagian8[sisa8]
    };

    // Pembagian 9
    let sisa9 = neptuGabungan % 9;
    if (sisa9 === 0) sisa9 = 9; // Sisa 0 dianggap 9
    hasil.pembagian9 = {
        sisa: sisa9,
        ...INTERPRETASI.pembagian9[sisa9]
    };

    // Tambahkan pembagian lain di sini jika diperlukan

    return hasil;
}

/**
 * Memberikan kesimpulan umum berdasarkan hasil pembagian utama (terutama 8, 7, 9).
 * @param {object} hasilPembagian - Objek hasil dari hitungPembagian.
 * @param {object} dataLaki - Detail weton laki-laki.
 * @param {object} dataPerempuan - Detail weton perempuan.
 * @returns {string} - String HTML berisi kesimpulan.
 */
function buatKesimpulan(hasilPembagian, dataLaki, dataPerempuan) {
    let kesimpulanHTML = "<h3>Kesimpulan Analisis:</h3>";
    let skorNegatif = 0;
    let skorPositif = 0;
    let pesanPeringatan = [];
    let pesanPositif = [];

    // Analisis hasil pembagian yang paling signifikan (negatif)
    if (hasilPembagian.pembagian8.hasil === "PEGAT") {
        skorNegatif += 3; // Bobot tinggi untuk Pegat
        pesanPeringatan.push(`Hasil <strong>PEGAT</strong> (Pembagian 8): Ini adalah peringatan paling serius dalam Primbon, menunjukkan potensi perpisahan/perceraian yang sangat tinggi.`);
    }
    if (hasilPembagian.pembagian7.hasil === "PUNGGEL" || hasilPembagian.pembagian7.hasil === "SATRIO WIRANG" || hasilPembagian.pembagian7.hasil === "LEBU KATIUP ANGIN") {
        skorNegatif += 1;
        pesanPeringatan.push(`Hasil <strong>${hasilPembagian.pembagian7.hasil}</strong> (Pembagian 7): Menunjukkan potensi kesulitan besar, perpisahan (karena maut/cerai), atau kehidupan yang tidak stabil.`);
    }
     if (hasilPembagian.pembagian9.hasil === "LEBU KATIUP ANGIN" || hasilPembagian.pembagian9.hasil === "MACAN KETUWON" || hasilPembagian.pembagian9.hasil === "PASIR WUKIR") {
        skorNegatif += 1;
        pesanPeringatan.push(`Hasil <strong>${hasilPembagian.pembagian9.hasil}</strong> (Pembagian 9): Menggambarkan potensi ketidakstabilan, kesulitan, atau kesialan dalam rumah tangga.`);
    }
     if (hasilPembagian.pembagian4.hasil === "PATI" || hasilPembagian.pembagian4.hasil === "ROGO") {
        skorNegatif += 1;
        pesanPeringatan.push(`Hasil <strong>${hasilPembagian.pembagian4.hasil}</strong> (Pembagian 4): Menandakan potensi perpisahan, masalah kesehatan, atau 'cacat' dalam hubungan.`);
    }
     if (hasilPembagian.pembagian5.hasil === "LARA" || hasilPembagian.pembagian5.hasil === "PATI") {
        skorNegatif += 1;
        pesanPeringatan.push(`Hasil <strong>${hasilPembagian.pembagian5.hasil}</strong> (Pembagian 5): Menunjukkan potensi sakit-sakitan, kesulitan, atau perpisahan.`);
    }
     if (hasilPembagian.pembagian8.hasil === "SUJANAN") {
        skorNegatif += 1;
        pesanPeringatan.push(`Hasil <strong>SUJANAN</strong> (Pembagian 8): Peringatan adanya potensi perselingkuhan atau konflik besar karena cemburu.`);
    }
     if (hasilPembagian.pembagian8.hasil === "PADU") {
        skorNegatif += 0.5; // Bobot lebih rendah dari Pegat/Sujanan
        pesanPeringatan.push(`Hasil <strong>PADU</strong> (Pembagian 8): Menunjukkan potensi sering terjadi pertengkaran, meskipun mungkin tidak sampai berpisah.`);
    }


    // Analisis hasil positif
    if (hasilPembagian.pembagian8.hasil === "RATU" || hasilPembagian.pembagian8.hasil === "JODOH" || hasilPembagian.pembagian8.hasil === "PESTHI") {
        skorPositif += 2;
        pesanPositif.push(`Hasil <strong>${hasilPembagian.pembagian8.hasil}</strong> (Pembagian 8): Menunjukkan kecocokan yang baik, harmonis, dan langgeng.`);
    }
     if (hasilPembagian.pembagian5.hasil === "SRI" || hasilPembagian.pembagian5.hasil === "DANA" || hasilPembagian.pembagian5.hasil === "LUNGGUH") {
        skorPositif += 1;
        pesanPositif.push(`Hasil <strong>${hasilPembagian.pembagian5.hasil}</strong> (Pembagian 5): Pertanda baik untuk rezeki, kemakmuran, atau kedudukan.`);
    }
     if (hasilPembagian.pembagian7.hasil === "WASESO SEGORO" || hasilPembagian.pembagian7.hasil === "TUNGGAK SEMI" || hasilPembagian.pembagian7.hasil === "SATRIO WIBAWO" || hasilPembagian.pembagian7.hasil === "SUMUR SINABO") {
        skorPositif += 1;
        pesanPositif.push(`Hasil <strong>${hasilPembagian.pembagian7.hasil}</strong> (Pembagian 7): Pertanda sangat baik untuk rezeki, kewibawaan, dan keharmonisan.`);
    }
     if (hasilPembagian.pembagian9.hasil === "BANYU MILI" || hasilPembagian.pembagian9.hasil === "NOhan REMBULAN") {
        skorPositif += 1;
        pesanPositif.push(`Hasil <strong>${hasilPembagian.pembagian9.hasil}</strong> (Pembagian 9): Pertanda rezeki lancar atau dinaungi keberuntungan.`);
    }


    kesimpulanHTML += "<div><strong>Potensi Positif:</strong>";
    if (pesanPositif.length > 0) {
        kesimpulanHTML += "<ul>";
        pesanPositif.forEach(p => kesimpulanHTML += `<li>${p}</li>`);
        kesimpulanHTML += "</ul>";
    } else {
        kesimpulanHTML += "<p>Tidak ditemukan indikasi positif yang kuat dari perhitungan utama.</p>";
    }
    kesimpulanHTML += "</div>";

    kesimpulanHTML += "<div><strong>Peringatan / Potensi Negatif:</strong>";
     if (pesanPeringatan.length > 0) {
        kesimpulanHTML += "<ul>";
        pesanPeringatan.forEach(p => kesimpulanHTML += `<li>${p}</li>`);
        kesimpulanHTML += "</ul>";
    } else {
        kesimpulanHTML += "<p>Tidak ditemukan indikasi negatif yang signifikan dari perhitungan utama.</p>";
    }
    kesimpulanHTML += "</div>";

    // Tambahkan Watak Dasar
    kesimpulanHTML += `<div><strong>Watak Dasar Pasangan (Perlu Diperhatikan):</strong>
        <ul>
            <li>Laki-laki (${dataLaki.weton}): ${dataLaki.watak}</li>
            <li>Perempuan (${dataPerempuan.weton}): ${dataPerempuan.watak}</li>
        </ul>
        <p>Perbedaan atau kesamaan watak ini dapat mempengaruhi dinamika hubungan. Perlu saling memahami dan bertoleransi.</p>
    </div>`;


    // Interpretasi Keseluruhan berdasarkan skor (contoh sederhana)
    kesimpulanHTML += "<div><strong>Interpretasi Keseluruhan:</strong>";
    if (skorNegatif >= 3 && hasilPembagian.pembagian8.hasil === "PEGAT") {
         kesimpulanHTML += `<p style="color: red; font-weight: bold;">SANGAT TIDAK DIANJURKAN. Hasil perhitungan menunjukkan risiko perpisahan (PEGAT) yang sangat tinggi, didukung oleh beberapa indikasi negatif lainnya. Pertimbangkan ulang dengan sangat serius.</p>`;
    } else if (skorNegatif > skorPositif && skorNegatif >= 2) {
        kesimpulanHTML += `<p style="color: orange; font-weight: bold;">KURANG DIANJURKAN / PERLU KEHATI-HATIAN EKSTRA. Ditemukan beberapa hasil perhitungan negatif yang signifikan (meskipun tidak separah Pegat). Pernikahan ini diramalkan akan menghadapi banyak cobaan dan memerlukan usaha keras, kesabaran, dan komitmen luar biasa untuk berhasil.</p>`;
    } else if (skorNegatif > 0 && skorNegatif >= skorPositif) {
         kesimpulanHTML += `<p style="color: darkgoldenrod;">CUKUP BERISIKO / PERLU WASPADA. Ada beberapa potensi masalah atau pertengkaran (misal: Padu, Sujanan, Lara, Wirang). Diperlukan saling pengertian, komunikasi yang baik, dan kesabaran untuk menjaga keharmonisan.</p>`;
    } else if (skorPositif > skorNegatif && skorNegatif <= 1) {
        kesimpulanHTML += `<p style="color: green;">DIANJURKAN / BAIK. Hasil perhitungan mayoritas menunjukkan kecocokan dan potensi kehidupan rumah tangga yang baik, rukun, dan sejahtera. Meskipun mungkin ada sedikit riak, secara umum pasangan ini cocok.</p>`;
    } else {
         kesimpulanHTML += `<p style="color: blue;">SANGAT BAIK / IDEAL. Hasil perhitungan menunjukkan tingkat kecocokan yang sangat tinggi (misal: Ratu, Jodoh, Pesthi) dengan banyak pertanda positif lainnya. Pernikahan ini diramalkan akan langgeng, harmonis, dan penuh keberuntungan.</p>`;
    }
    kesimpulanHTML += `<p><strong>Penting Diingat:</strong> Primbon adalah panduan warisan leluhur berdasarkan pola dan pengalaman, bukan takdir mutlak. Keberhasilan pernikahan sangat bergantung pada cinta, komitmen, komunikasi, saling pengertian, dan usaha kedua belah pihak.</p>`;
    kesimpulanHTML += "</div>";


    return kesimpulanHTML;
}