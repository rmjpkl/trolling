// Fungsi untuk mendapatkan nama hari dalam bahasa Indonesia
function getNamaHari(hari) {
    const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    return namaHari[hari];
  }

  // Fungsi untuk mendapatkan nama bulan dalam bahasa Indonesia
  function getNamaBulan(bulan) {
    const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return namaBulan[bulan];
  }

  // Fungsi untuk mendapatkan tanggal per hari ini dalam format yang diinginkan
  function getTanggalHariIni() {
    const tanggalSekarang = new Date();
    const hari = getNamaHari(tanggalSekarang.getDay());
    const tanggal = tanggalSekarang.getDate();
    const bulan = getNamaBulan(tanggalSekarang.getMonth());
    const tahun = tanggalSekarang.getFullYear();
    return `${hari}, ${tanggal} ${bulan} ${tahun}`;
  }

  // Memperbarui elemen HTML dengan tanggal hari ini
  document.getElementById('tanggal').textContent = getTanggalHariIni();