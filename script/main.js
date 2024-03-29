// Mendapatkan elemen dengan ID 'waktu'
const waktu = document.getElementById("waktu");

// Fungsi untuk memperbarui waktu secara periodik
function tanggal() {
    // Membuat objek Date baru
    const date = new Date();
    // Memperbarui konten HTML elemen 'waktu' dengan tanggal dan waktu saat ini
    waktu.innerHTML = date.toLocaleString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
}

// Memanggil fungsi tanggal setiap 1000 milidetik (1 detik)
setInterval(tanggal, 1000);

// Memanggil fungsi tanggal untuk pertama kali saat halaman dimuat
tanggal();
