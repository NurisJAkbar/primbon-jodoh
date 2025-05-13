// js/main.js

document.getElementById('hitungButton').addEventListener('click', function() {
    const tanggalLakiInput = document.getElementById('tanggalLaki').value;
    const tanggalPerempuanInput = document.getElementById('tanggalPerempuan').value;
    const hasilDiv = document.getElementById('hasil');
    const dataPasanganDiv = document.getElementById('dataPasangan');
    const neptuGabunganDiv = document.getElementById('neptuGabungan');
    const hasilPembagianDiv = document.getElementById('hasilPembagian');
    const kesimpulanDiv = document.getElementById('kesimpulan');
    const errorDiv = document.getElementById('error');

    // Reset tampilan
    hasilDiv.style.display = 'none';
    errorDiv.style.display = 'none';
    dataPasanganDiv.innerHTML = '';
    neptuGabunganDiv.innerHTML = '';
    hasilPembagianDiv.innerHTML = '';
    kesimpulanDiv.innerHTML = '';

    // Validasi input tanggal
    if (!tanggalLakiInput || !tanggalPerempuanInput) {
        errorDiv.textContent = 'Harap masukkan kedua tanggal lahir.';
        errorDiv.style.display = 'block';
        return;
    }

    // Dapatkan detail weton
    const dataLaki = getJavaneseDetails(tanggalLakiInput);
    const dataPerempuan = getJavaneseDetails(tanggalPerempuanInput);

    // Cek jika ada error saat konversi tanggal
    if (!dataLaki || !dataPerempuan) {
         errorDiv.textContent = 'Terjadi kesalahan saat mengolah tanggal. Pastikan format tanggal benar.';
         errorDiv.style.display = 'block';
         return;
    }

    // Tampilkan Data Pasangan
    dataPasanganDiv.innerHTML = `
        <h3>1. Data Pasangan:</h3>
        <p>
            <strong>Laki-laki:</strong> ${dataLaki.weton} (Tahun Saka ~${dataLaki.tahunSaka})<br>
            Neptu Hari (${dataLaki.namaHari}) = ${dataLaki.neptuHari}<br>
            Neptu Pasaran (${dataLaki.namaPasaran}) = ${dataLaki.neptuPasaran}<br>
            <strong>Neptu Weton Laki-laki = ${dataLaki.neptuWeton}</strong>
        </p>
        <p>
            <strong>Perempuan:</strong> ${dataPerempuan.weton} (Tahun Saka ~${dataPerempuan.tahunSaka})<br>
            Neptu Hari (${dataPerempuan.namaHari}) = ${dataPerempuan.neptuHari}<br>
            Neptu Pasaran (${dataPerempuan.namaPasaran}) = ${dataPerempuan.neptuPasaran}<br>
            <strong>Neptu Weton Perempuan = ${dataPerempuan.neptuWeton}</strong>
        </p>
    `;

    // Hitung dan Tampilkan Neptu Gabungan
    const neptuGabungan = dataLaki.neptuWeton + dataPerempuan.neptuWeton;
    neptuGabunganDiv.innerHTML = `
        <h3>2. Penjumlahan Neptu Weton (Dasar Perhitungan):</h3>
        <p>
            Neptu Gabungan = Neptu Laki-laki + Neptu Perempuan<br>
            Neptu Gabungan = ${dataLaki.neptuWeton} + ${dataPerempuan.neptuWeton} = <strong>${neptuGabungan}</strong><br>
            Nilai ${neptuGabungan} ini akan menjadi dasar untuk perhitungan selanjutnya.
        </p>
    `;

    // Hitung dan Tampilkan Hasil Pembagian
    const hasilPembagian = hitungPembagian(neptuGabungan);
    let pembagianHTML = `<h3>3. Analisis Berdasarkan Berbagai Metode Pembagian:</h3>`;

    // Format output untuk setiap pembagian
    const formatPembagian = (pembagi, data) => {
        return `
            <div>
                <strong>Pembagian ${pembagi} (Sisa ${data.sisa}): Jatuh pada ${data.hasil}</strong><br>
                <em>Makna:</em> ${data.makna}
            </div>
        `;
    };

    pembagianHTML += formatPembagian(3, hasilPembagian.pembagian3);
    pembagianHTML += formatPembagian(4, hasilPembagian.pembagian4);
    pembagianHTML += formatPembagian(5, hasilPembagian.pembagian5);
    pembagianHTML += formatPembagian(7, hasilPembagian.pembagian7);
    pembagianHTML += formatPembagian(8, hasilPembagian.pembagian8); // Pal Srigati
    pembagianHTML += formatPembagian(9, hasilPembagian.pembagian9);
    // Tambahkan format untuk pembagian lain jika ada

    hasilPembagianDiv.innerHTML = pembagianHTML;

    // Buat dan Tampilkan Kesimpulan
    kesimpulanDiv.innerHTML = buatKesimpulan(hasilPembagian, dataLaki, dataPerempuan);


    // Tampilkan bagian hasil
    hasilDiv.style.display = 'block';
});