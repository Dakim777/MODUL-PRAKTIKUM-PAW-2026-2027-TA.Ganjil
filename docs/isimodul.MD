# Konteks Lengkap Isi Modul Pertemuan 1–7 untuk Pengisian Website
### Praktikum Aplikasi Pengembangan Web — Teknik Informatika ITERA

## Catatan untuk Agent (baca dulu sebelum mulai)

File aslinya berupa PDF, dan environment Antigravity tidak bisa menerima upload PDF langsung. Karena itu, **seluruh isi modul di bawah ini sudah saya transkrip manual dari PDF ke teks/markdown** — anggap ini sebagai sumber kebenaran (source of truth) pengganti PDF aslinya. Kamu tidak perlu (dan tidak bisa) membaca file PDF lain; cukup gunakan isi di dokumen ini apa adanya untuk mengisi konten tiap halaman `/pertemuan/[n]` di website.

Instruksi pengisian:
1. Untuk setiap pertemuan, masukkan **seluruh bagian** (Tujuan Praktikum, Dasar Teori, Alat dan Bahan, Langkah Praktikum lengkap dengan kode, Hasil Praktikum, Tugas Praktikum, Kriteria Penilaian, Format Pengumpulan) ke dalam struktur konten yang sudah kita sepakati sebelumnya (file markdown/MDX per pertemuan).
2. Pertahankan urutan dan penomoran langkah persis seperti di bawah ini.
3. Blok kode harus tetap sebagai code block dengan bahasa yang sesuai (`html`, `javascript`, `python`, `ini`, `bash`, dll) supaya syntax highlighting bekerja.
4. Bagian bertanda **[LATIHAN MANDIRI]** adalah instruksi tambahan dari saya (bukan bagian asli modul) — ini WAJIB disisipkan di titik yang ditandai, sebagai section terpisah dengan gaya visual berbeda dari konten asli (lihat instruksi lengkap soal styling-nya di file `instruksi-tambah-handson-modul.md` yang sudah saya kirim sebelumnya). Selain bagian ini, semua yang lain adalah konten asli modul dan harus dimasukkan apa adanya, tanpa dikurangi.
5. Format pengumpulan/deadline di tiap modul kadang ada yang tanggalnya sudah lewat (karena diambil dari modul tahun lalu) — masukkan apa adanya dulu, nanti saya update tanggalnya belakangan secara manual, jangan diubah/ditebak sendiri oleh agent.

---
---

# PERTEMUAN 1 — Praktikum JavaScript Dasar

**Subjudul:** Mengenal dasar-dasar JavaScript dan konsep pemrograman web

## Tujuan Praktikum
Setelah menyelesaikan praktikum ini, Kalian diharapkan mampu:
- Memahami konsep dasar JavaScript sebagai bahasa pemrograman web
- Menguasai penggunaan variabel, tipe data, dan operator dalam JavaScript
- Mengimplementasikan struktur kendali (conditionals dan loops)
- Membuat dan menggunakan fungsi dalam JavaScript
- Mengerti cara menangani event dan memanipulasi DOM

## Dasar Teori

**Apa itu JavaScript?**
JavaScript adalah bahasa pemrograman tingkat tinggi, dinamis, dan serbaguna yang memungkinkan Kalian untuk menambahkan interaktivitas ke halaman web. Sejak diciptakan oleh Brendan Eich pada tahun 1995, JavaScript telah menjadi salah satu bahasa pemrograman paling populer di dunia.

Menurut survey Stack Overflow Developer Survey 2024, JavaScript tetap menjadi bahasa pemrograman yang paling banyak digunakan untuk tahun kesepuluh berturut-turut, dengan lebih dari 67% developer menggunakannya secara reguler.

JavaScript awalnya dikembangkan untuk browser Netscape Navigator dengan nama "Mocha", kemudian diubah menjadi "LiveScript", dan akhirnya menjadi "JavaScript" sebagai strategi pemasaran untuk memanfaatkan popularitas Java pada saat itu.

**Karakteristik Utama JavaScript**

| Karakteristik | Deskripsi |
|---|---|
| Client-side scripting | Berjalan di browser pengguna, tidak memerlukan kompilasi |
| Dinamis | Tipe data ditentukan saat runtime |
| Berorientasi objek | Berbasis prototipe alih-alih kelas |
| Event-driven | Dapat merespons tindakan pengguna |
| First-class functions | Fungsi dapat diperlakukan sebagai variabel |

**Engine JavaScript**
Engine JavaScript adalah program yang mengeksekusi kode JavaScript. Browser web modern memiliki engine JavaScript terintegrasi:
- V8: Dikembangkan oleh Google, digunakan di Chrome dan Node.js
- SpiderMonkey: Engine pertama, dikembangkan oleh Netscape, sekarang digunakan di Firefox
- JavaScriptCore: Dikembangkan oleh Apple untuk Safari
- Chakra: Dikembangkan oleh Microsoft untuk Edge (versi lama)

**Dasar-dasar JavaScript**
JavaScript memiliki 3 cara untuk mendeklarasikan variabel:
- `var`: Cara lama, memiliki cakupan fungsi atau global
- `let`: Diperkenalkan di ES6, memiliki cakupan blok
- `const`: Diperkenalkan di ES6, untuk nilai yang tidak berubah

**Tipe Data Primitif:** Number, String, Boolean, Undefined, Null, Symbol, dan BigInt

JavaScript modern tidak hanya terbatas pada browser, tetapi telah berkembang menjadi ekosistem lengkap:
- Server-side: Node.js, Deno
- Mobile: React Native, Ionic
- Desktop: Electron, NW.js
- IoT: Johnny-Five, Cylon.js
- Game: Phaser, Three.js
- AI/ML: TensorFlow.js, Brain.js

**Fitur JavaScript Modern**

| Fitur | Deskripsi |
|---|---|
| Arrow Functions | Sintaks ringkas untuk fungsi |
| Template Literals | String yang mendukung interpolasi |
| Destructuring | Ekstraksi nilai dari objek/array |
| Promises | Penanganan operasi asinkron |
| Async/Await | Sintaks untuk kode asinkron |

**Document Object Model (DOM)**
DOM adalah representasi terstruktur dari dokumen HTML yang memungkinkan JavaScript untuk berinteraksi dengan dan memanipulasi konten halaman web.

```javascript
// Mengakses elemen
const element = document.getElementById('myId');
// Mengubah konten
element.innerHTML = 'New content';
// Menambah event listener
element.addEventListener('click', function() {
  alert('Element clicked!');
});
```

**API Web Modern:** Fetch API (permintaan jaringan), Web Storage (penyimpanan browser), Geolocation, Canvas, WebSockets, IndexedDB.

## Prasyarat
- HTML dan CSS dasar
- Konsep logika pemrograman
- Penggunaan browser modern (Chrome, Firefox, dll.)

## Alat dan Bahan
- Browser Web: Chrome, Firefox, atau Edge
- Code Editor: Visual Studio Code, Sublime Text, atau editor teks lainnya
- Rekomendasi: Visual Studio Code dengan ekstensi JavaScript (ES6) code snippets dan LiveServer

## Langkah Praktikum

### Langkah 1 — Membuat File JavaScript Pertama
Buat sebuah file HTML baru dengan nama `index.html` dan file JavaScript dengan nama `script.js`. Hubungkan file JavaScript dengan file HTML menggunakan tag script.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Dasar</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <!-- Tailwind opsional karna kali ini kita tidak fokus ke styling -->
</head>
<body>
  <h1>Belajar JavaScript Dasar</h1>
  <div id="result"></div>

  <!-- Menghubungkan dengan file JavaScript -->
  <script src="script.js"></script>
</body>
</html>
```

> Catatan: Tag script dapat diletakkan di dalam head atau sebelum penutup body. Menempatkannya sebelum penutup body memastikan bahwa semua elemen HTML telah dimuat sebelum JavaScript dijalankan.

### Langkah 2 — Mengenal Variabel dan Output
Buka file `script.js` dan tulis kode berikut untuk mendeklarasikan variabel dan menampilkan output:

```javascript
// script.js
// Mendeklarasikan variabel dengan var, let, dan const
var nama = "Budi";
let usia = 20;
const TAHUN_LAHIR = 2004;

// Menampilkan output ke konsol
console.log("Nama: " + nama);
console.log("Usia: " + usia);
console.log("Tahun Lahir: " + TAHUN_LAHIR);

// Menampilkan output ke halaman HTML
document.getElementById("result").innerHTML = `
  <p>Nama: <strong>${nama}</strong></p>
  <p>Usia: <strong>${usia}</strong></p>
  <p>Tahun Lahir: <strong>${TAHUN_LAHIR}</strong></p>
`;
```
> Buka file HTML di browser dan buka konsol pengembang (F12 → Console) untuk melihat output log. Template literals (backtick ``` ` ```) memungkinkan interpolasi variabel langsung dengan `${variabel}`.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Biodata Sendiri*
- Instruksi: Buat 3 variabel baru (`namaKalian`, `prodi`, `angkatan`) berisi data kalian sendiri, lalu tampilkan ke halaman menggunakan template literal seperti contoh di atas.
- Expected output: Paragraf baru muncul di halaman berisi biodata kalian.

### Langkah 3 — Implementasi Struktur Kondisional
```javascript
// Struktur kondisional (tambahkan di bawah kode sebelumnya)
let nilai = 85;
let grade = "";

// If-else if-else
if (nilai >= 90) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 70) {
  grade = "C";
} else if (nilai >= 60) {
  grade = "D";
} else {
  grade = "E";
}
console.log("Nilai: " + nilai + ", Grade: " + grade);

document.getElementById("result").innerHTML += `
  <hr>
  <p>Nilai: <strong>${nilai}</strong></p>
  <p>Grade: <strong>${grade}</strong></p>
`;

// Ternary operator
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log("Status: " + status);
document.getElementById("result").innerHTML += `<p>Status: <strong>${status}</strong></p>`;

// Switch case
let hari = new Date().getDay();
let namaHari = "";
switch (hari) {
  case 0: namaHari = "Minggu"; break;
  case 1: namaHari = "Senin"; break;
  case 2: namaHari = "Selasa"; break;
  case 3: namaHari = "Rabu"; break;
  case 4: namaHari = "Kamis"; break;
  case 5: namaHari = "Jumat"; break;
  case 6: namaHari = "Sabtu"; break;
  default: namaHari = "Hari tidak valid";
}
console.log("Hari ini adalah: " + namaHari);
document.getElementById("result").innerHTML += `<p>Hari ini adalah: <strong>${namaHari}</strong></p>`;
```
> JavaScript menyediakan beberapa cara untuk membuat keputusan berdasarkan kondisi: if-else, ternary operator (`?:`), dan switch-case.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Cek Tahun Kabisat*
- Instruksi: Buat fungsi `cekKabisat(tahun)` yang mengembalikan `true`/`false`. Aturan: tahun kabisat jika habis dibagi 4, kecuali kalau habis dibagi 100 tapi tidak habis dibagi 400.
- Hint: Gunakan operator modulus (`%`) dan operator logika (`&&`, `||`).
- Expected output: `cekKabisat(2024)` → `true`, `cekKabisat(1900)` → `false`, `cekKabisat(2000)` → `true`.

### Langkah 4 — Menggunakan Loop
```javascript
// For loop
let nilaiSiswa = [85, 92, 78, 90, 88];
let total = 0;

document.getElementById("result").innerHTML += `
  <hr>
  <h3>Daftar Nilai Siswa:</h3>
  <ul id="daftar-nilai"></ul>
  <p id="rata-rata"></p>
`;

for (let i = 0; i < nilaiSiswa.length; i++) {
  total += nilaiSiswa[i];
  document.getElementById("daftar-nilai").innerHTML += `<li>Siswa ${i + 1}: ${nilaiSiswa[i]}</li>`;
}

let rataRata = total / nilaiSiswa.length;
document.getElementById("rata-rata").innerHTML = `Rata-rata nilai: <strong>${rataRata.toFixed(2)}</strong>`;

// While loop
document.getElementById("result").innerHTML += `<h3>Countdown:</h3><div id="countdown"></div>`;
let hitungMundur = 5;
while (hitungMundur > 0) {
  document.getElementById("countdown").innerHTML += `<span class="inline-block bg-blue-100 px-2 py-1 m-1 rounded">${hitungMundur}</span>`;
  hitungMundur--;
}

// For...of loop (ES6)
document.getElementById("result").innerHTML += `<h3>Nilai dengan for...of:</h3><div id="nilai-of" class="flex flex-wrap gap-2"></div>`;
for (let nilai of nilaiSiswa) {
  let statusNilai = nilai >= 80 ? "text-green-600" : "text-red-600";
  document.getElementById("nilai-of").innerHTML += `<span class="inline-block bg-gray-100 px-3 py-1 rounded ${statusNilai}">${nilai}</span>`;
}
```
> JavaScript menyediakan beberapa jenis loop: for, while, do-while, for...in, dan for...of. `for...of` (ES6) sangat berguna untuk mengiterasi array dan objek iterable lainnya.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Tabel Perkalian*
- Instruksi: Gunakan nested for loop untuk mencetak tabel perkalian 1–5 ke dalam elemen `<div>` baru di halaman.
- Expected output: Tampil 5x5 hasil perkalian, misalnya "3 x 4 = 12".

### Langkah 5 — Fungsi dan Event Handler
Tambahkan ke `index.html`:
```html
<hr>
<div class="event-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Event Handler</h2>
  <input type="text" id="nama-input" placeholder="Masukkan nama Kalian">
  <button id="sapa-button" class="bg-blue-500 text-white px-4 py-2 rounded">Sapa</button>
  <div id="sapa-output" class="mt-3"></div>

  <div class="mt-4">
    <h3 class="font-semibold mb-2">Kalkulator Sederhana</h3>
    <div class="flex gap-2 mb-3">
      <input type="number" id="angka1" placeholder="Angka 1">
      <input type="number" id="angka2" placeholder="Angka 2">
    </div>
    <div class="flex gap-2">
      <button id="btn-tambah" class="bg-green-500 text-white px-3 py-1 rounded">+</button>
      <button id="btn-kurang" class="bg-yellow-500 text-white px-3 py-1 rounded">-</button>
      <button id="btn-kali" class="bg-purple-500 text-white px-3 py-1 rounded">×</button>
      <button id="btn-bagi" class="bg-red-500 text-white px-3 py-1 rounded">÷</button>
    </div>
    <div id="hasil-kalkulator" class="mt-3 font-semibold"></div>
  </div>
</div>
```

```javascript
// script.js
function sapaNama(nama) {
  return `Halo, ${nama}! Selamat belajar JavaScript!`;
}

document.getElementById("sapa-button").addEventListener("click", function() {
  const nama = document.getElementById("nama-input").value;
  if (nama.trim() === "") {
    document.getElementById("sapa-output").innerHTML = `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu.</p>`;
  } else {
    const pesan = sapaNama(nama);
    document.getElementById("sapa-output").innerHTML = `<p class="text-green-500">${pesan}</p>`;
  }
});

function hitungKalkulator(angka1, angka2, operasi) {
  let hasil = 0;
  switch (operasi) {
    case "tambah": hasil = angka1 + angka2; break;
    case "kurang": hasil = angka1 - angka2; break;
    case "kali": hasil = angka1 * angka2; break;
    case "bagi":
      if (angka2 === 0) return "Error: Pembagian dengan nol tidak diperbolehkan";
      hasil = angka1 / angka2; break;
    default: return "Operasi tidak valid";
  }
  return hasil;
}

document.getElementById("btn-tambah").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "tambah");
    document.getElementById("hasil-kalkulator").innerHTML = `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-kurang").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kurang");
    document.getElementById("hasil-kalkulator").innerHTML = `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-kali").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kali");
    document.getElementById("hasil-kalkulator").innerHTML = `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-bagi").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "bagi");
    document.getElementById("hasil-kalkulator").innerHTML = `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
  }
});
```

### Langkah 6 — Array dan Objek
```javascript
// Array dan metode array
const buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];
document.getElementById("result").innerHTML += `<hr><h3>Manipulasi Array:</h3><div id="array-demo"></div>`;

document.getElementById("array-demo").innerHTML += `<p><strong>Array buah:</strong> ${buah.join(", ")}</p>`;

buah.push("Durian");
document.getElementById("array-demo").innerHTML += `<p><strong>Setelah push Durian:</strong> ${buah.join(", ")}</p>`;

const itemDihapus = buah.pop();
document.getElementById("array-demo").innerHTML += `<p><strong>Setelah pop:</strong> ${buah.join(", ")} (item dihapus: ${itemDihapus})</p>`;

buah.sort();
document.getElementById("array-demo").innerHTML += `<p><strong>Setelah sort:</strong> ${buah.join(", ")}</p>`;

const hargaBuah = [10000, 8000, 15000, 5000, 20000];
const daftarBuah = buah.map((item, index) => `${item} (Rp${hargaBuah[index]})`);
document.getElementById("array-demo").innerHTML += `<p><strong>Array dengan harga:</strong> ${daftarBuah.join(", ")}</p>`;

const buahMahal = buah.filter((item, index) => hargaBuah[index] > 10000);
document.getElementById("array-demo").innerHTML += `<p><strong>Buah dengan harga > 10.000:</strong> ${buahMahal.join(", ")}</p>`;

// Objek
const mahasiswa = {
  nama: "Budi Santoso",
  nim: "20210001",
  jurusan: "Teknik Informatika",
  nilai: { algoritma: 85, basis_data: 90, web: 88 },
  hobi: ["Coding", "Membaca", "Futsal"],
  tampilkanInfo: function() { return `${this.nama} (${this.nim}) - ${this.jurusan}`; },
  hitungRataRata: function() {
    const nilaiArray = Object.values(this.nilai);
    const total = nilaiArray.reduce((sum, nilai) => sum + nilai, 0);
    return (total / nilaiArray.length).toFixed(2);
  }
};

document.getElementById("result").innerHTML += `<hr><h3>Manipulasi Objek:</h3><div id="objek-demo"></div>`;
document.getElementById("objek-demo").innerHTML += `
  <p><strong>Info Mahasiswa:</strong> ${mahasiswa.tampilkanInfo()}</p>
  <p><strong>Rata-rata Nilai:</strong> ${mahasiswa.hitungRataRata()}</p>
  <p><strong>Hobi:</strong> ${mahasiswa.hobi.join(", ")}</p>
`;

mahasiswa.email = "budi.santoso@example.com";
document.getElementById("objek-demo").innerHTML += `<p><strong>Email:</strong> ${mahasiswa.email}</p>`;

mahasiswa.nilai.web = 92;
document.getElementById("objek-demo").innerHTML += `<p><strong>Nilai Web setelah diubah:</strong> ${mahasiswa.nilai.web}</p>`;

delete mahasiswa.hobi;
document.getElementById("objek-demo").innerHTML += `<p><strong>Hobi setelah dihapus:</strong> ${mahasiswa.hobi ? mahasiswa.hobi : "tidak ada"}</p>`;
```
> Array dan objek adalah struktur data penting dalam JavaScript. Array untuk koleksi data, objek untuk data key-value.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Nilai Tertinggi dan Terendah*
- Instruksi: Dari array `nilaiSiswa` (Langkah 4), cari nilai tertinggi/terendah pakai `Math.max(...nilaiSiswa)` dan `Math.min(...nilaiSiswa)`.
- Expected output: "Nilai tertinggi: 92, Nilai terendah: 78".

### Langkah 7 — Manipulasi DOM
Tambahkan ke `index.html` (sebelum tag script):
```html
<hr>
<div class="dom-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Manipulasi DOM</h2>
  <div id="dom-output" class="mb-3"></div>
  <button id="btn-tambah-item" class="bg-blue-500 text-white px-4 py-2 rounded">Tambah Item</button>
  <button id="btn-hapus-item" class="bg-red-500 text-white px-4 py-2 rounded">Hapus Item</button>
  <button id="btn-ubah-warna" class="bg-green-500 text-white px-4 py-2 rounded">Ubah Warna</button>
</div>
```
```javascript
const domOutput = document.getElementById("dom-output");
let itemCount = 0;

document.getElementById("btn-tambah-item").addEventListener("click", function() {
  itemCount++;
  const newItem = document.createElement("div");
  newItem.className = "p-2 mb-2 bg-gray-100 rounded";
  newItem.innerText = `Item ${itemCount}`;
  domOutput.appendChild(newItem);
});

document.getElementById("btn-hapus-item").addEventListener("click", function() {
  if (domOutput.lastChild) {
    domOutput.removeChild(domOutput.lastChild);
    itemCount--;
  }
});

document.getElementById("btn-ubah-warna").addEventListener("click", function() {
  const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  domOutput.className = `p-4 mb-3 ${randomColor} rounded`;
});
```
> DOM adalah representasi struktur HTML dalam bentuk pohon objek. JavaScript dapat memanipulasi DOM untuk mengubah konten, struktur, dan gaya halaman web secara dinamis.

### Langkah 8 — Fetch API dan Async/Await
```html
<hr>
<div class="api-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Fetch API</h2>
  <button id="btn-fetch" class="bg-blue-500 text-white px-4 py-2 rounded">Ambil Data</button>
  <div id="api-output" class="mt-3"></div>
</div>
```
```javascript
document.getElementById("btn-fetch").addEventListener("click", async function() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const apiOutput = document.getElementById("api-output");
    apiOutput.innerHTML = "<h3 class='font-bold mb-2'>Daftar Post:</h3>";
    data.slice(0, 5).forEach(post => {
      apiOutput.innerHTML += `
        <div class="p-3 mb-2 bg-gray-100 rounded">
          <h4 class="font-semibold">${post.title}</h4>
          <p class="text-sm">${post.body}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("api-output").innerHTML = `<div class="p-3 bg-red-100 text-red-800 rounded">Gagal mengambil data: ${error.message}</div>`;
  }
});
```
> Fetch API adalah cara modern untuk melakukan HTTP request di JavaScript. Dengan async/await, kode menjadi lebih mudah dibaca dibandingkan callback atau promise chaining.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Ambil Data User*
- Instruksi: Buat tombol baru "Ambil Data User" yang saat diklik memanggil `https://jsonplaceholder.typicode.com/users`, tampilkan nama dan email dari 3 user pertama saja.
- Expected output: Muncul 3 baris berisi nama dan email user dari API tersebut.

## Hasil Praktikum
Setelah menyelesaikan semua langkah, mahasiswa seharusnya telah: membuat file HTML dan JavaScript yang terhubung; menggunakan variabel, tipe data, dan operator; mengimplementasikan struktur kondisional dan loop; membuat dan menggunakan fungsi; menangani event dan memanipulasi DOM; menggunakan array dan objek; mengambil data dari API menggunakan Fetch API.

## Tugas Praktikum
1. **Aplikasi To-Do List Sederhana** (Bobot: 40%). Style tampilan tidak dinilai, fokus pada fungsionalitas: menambahkan item baru, menandai item selesai, menghapus item, menyimpan data ke `localStorage`.
2. **Modifikasi Kalkulator** (Bobot: 30%). Tambahkan operasi pangkat, akar kuadrat, dan modulus pada kalkulator di Langkah 5.
3. **Validasi Form Input** (Bobot: 30%). Kriteria: nama harus lebih dari 3 karakter; email harus valid; password minimal 8 karakter.

## Format Pengumpulan
- **Direktori GitHub:** Buat repository format `pemrograman_web_itera_[NIM]` (contoh: `pemrograman_web_itera_119140001`)
- **Struktur Folder:** Per pertemuan format `[NAMA]_[NIM]_pertemuan[X]` (contoh: `johndoe_119140001_pertemuan1`)
- **Deadline:** Minggu, 23 Maret 2025, pukul 23:59 WIB. Keterlambatan dikenakan pengurangan nilai 10% per hari.

---
---

# PERTEMUAN 2 — Praktikum JavaScript Next Gen

**Subjudul:** Mengenal fitur modern JavaScript (ES6+) dan penerapannya dalam pengembangan web

## Tujuan Praktikum
- Memahami fitur-fitur modern JavaScript (ES6+)
- Menguasai penggunaan `let` dan `const` untuk deklarasi variabel
- Mengimplementasikan arrow functions dalam kode JavaScript
- Menerapkan destructuring, rest dan spread operators
- Menggunakan template literals dengan efektif
- Mengenal dan mengimplementasikan modules dan import/export
- Menguasai metode array modern dan higher-order functions
- Menggunakan Promise dan async/await untuk operasi asinkron

## Dasar Teori

JavaScript Next Gen mengacu pada fitur-fitur modern dari JavaScript yang diperkenalkan dalam ECMAScript 2015 (ES6) dan versi-versi berikutnya. Fitur-fitur ini membuat kode menjadi lebih bersih, ekspresif, dan mudah dipelihara.

Fitur utama yang dipelajari: Let dan Const, Arrow Functions, Template Literals, Destructuring, Spread dan Rest Operators, Default Parameters, Classes, Modules, Promise dan Async/Await.

> **JavaScript Compatibility:** Meskipun sebagian besar browser modern telah mendukung fitur ES6+, beberapa browser lama mungkin tidak mendukungnya. Dalam produksi, sering digunakan transpiler seperti Babel untuk mengkonversi kode ES6+ ke ES5.

## Alat dan Bahan
- Browser Web: Chrome, Firefox, atau Edge (versi terbaru)
- Code Editor: Visual Studio Code, Sublime Text, atau editor kode lainnya
- Node.js: (Opsional) Untuk menjalankan JavaScript di luar browser
- Rekomendasi ekstensi VS Code: ESLint, Prettier, JavaScript (ES6) code snippets, LiveServer

## Langkah Praktikum

### Langkah 1 — Membuat Project dan Struktur File
```
project-js-nextgen/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── modules/
│   │     ├── utils.js
│   │     └── data.js
│   └── app.js
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JavaScript Next Gen</title>
<link rel="stylesheet" href="css/style.css">
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
<div class="max-w-4xl mx-auto">
  <header class="mb-8">
    <h1 class="text-3xl font-bold text-blue-600 mb-2">JavaScript Next Gen Praktikum</h1>
    <p class="text-gray-600">Belajar fitur modern JavaScript (ES6+)</p>
  </header>
  <main class="bg-white p-6 rounded-lg shadow-md">
    <div id="output" class="space-y-4"></div>
    <div class="flex space-x-4 mt-8">
      <button id="runBtn" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Run Demo</button>
      <button id="clearBtn" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">Clear Output</button>
    </div>
  </main>
</div>
<!-- Type module penting untuk mendukung ES modules -->
<script type="module" src="js/main.js"></script>
</body>
</html>
```

```css
/* css/style.css */
.output-item { padding: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; }
.output-item:nth-child(odd) { background-color: #f3f4f6; }
.output-item:nth-child(even) { background-color: #e5e7eb; }
.output-title { font-weight: 600; margin-bottom: 0.5rem; color: #1e40af; }
.code { font-family: monospace; background-color: #f1f5f9; padding: 0.125rem 0.25rem; border-radius: 0.25rem; }
.result { margin-top: 0.5rem; padding: 0.5rem; background-color: #dbeafe; border-radius: 0.25rem; }
```

```javascript
// js/main.js
import { formatDate, capitalizeString } from './modules/utils.js';
import { sampleData } from './modules/data.js';

const outputElement = document.getElementById('output');
const runButton = document.getElementById('runBtn');
const clearButton = document.getElementById('clearBtn');

function addOutput(title, code, result) {
  const outputItem = document.createElement('div');
  outputItem.className = 'output-item';

  const titleEl = document.createElement('div');
  titleEl.className = 'output-title';
  titleEl.textContent = title;

  const codeEl = document.createElement('div');
  codeEl.className = 'code';
  codeEl.textContent = code;

  const resultEl = document.createElement('div');
  resultEl.className = 'result';
  if (typeof result === 'object') {
    resultEl.textContent = JSON.stringify(result, null, 2);
  } else {
    resultEl.textContent = result;
  }

  outputItem.appendChild(titleEl);
  outputItem.appendChild(codeEl);
  outputItem.appendChild(resultEl);
  outputElement.appendChild(outputItem);
}

runButton.addEventListener('click', () => {
  clearOutput();
  runAllDemos();
});
clearButton.addEventListener('click', clearOutput);

function clearOutput() { outputElement.innerHTML = ''; }

function runAllDemos() {
  console.log('Demo akan dijalankan di sini');
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Next Gen Demo Ready!');
});
```

```javascript
// js/modules/utils.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function capitalizeString(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

export function calculateYears(startDate, endDate = new Date()) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const yearDiff = end.getFullYear() - start.getFullYear();
  if (end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())) {
    return yearDiff - 1;
  }
  return yearDiff;
}
```

```javascript
// js/modules/data.js
export const sampleData = {
  users: [
    { id: 1, name: "john doe", email: "johndoe@example.com", age: 28, joinDate: "2022-03-15", active: true, skills: ["JavaScript", "React", "Node.js"] },
    { id: 2, name: "jane smith", email: "janesmith@example.com", age: 32, joinDate: "2021-11-07", active: true, skills: ["Python", "Django", "JavaScript"] },
    { id: 3, name: "bob johnson", email: "bobjohnson@example.com", age: 24, joinDate: "2023-01-20", active: false, skills: ["Java", "Spring", "SQL"] },
    { id: 4, name: "alice williams", email: "alicewilliams@example.com", age: 35, joinDate: "2020-09-30", active: true, skills: ["JavaScript", "Vue", "CSS", "HTML"] },
    { id: 5, name: "charlie brown", email: "charliebrown@example.com", age: 22, joinDate: "2023-04-10", active: false, skills: ["PHP", "Laravel", "MySQL"] }
  ],
  products: [
    { id: 1, name: "Laptop", price: 12000000, stock: 15 },
    { id: 2, name: "Smartphone", price: 5000000, stock: 25 },
    { id: 3, name: "Headphones", price: 800000, stock: 30 },
    { id: 4, name: "Monitor", price: 2500000, stock: 10 },
    { id: 5, name: "Keyboard", price: 350000, stock: 20 }
  ]
};
```
> Memahami struktur proyek yang baik akan membantu mengelola kode JavaScript modern dengan lebih terstruktur. Penggunaan modules memungkinkan pemisahan kode yang lebih baik dan lebih maintainable.

### Langkah 2 — Let dan Const, Arrow Functions, Template Literals
```javascript
// js/app.js
export function demoVariables() {
  var oldVar = "Old variable";
  { var oldVar = "Changed inside block"; }

  let newLet = "New let variable";
  { let newLet = "Different variable inside block"; console.log("newLet inside block:", newLet); }

  const PI = 3.14159;
  const user = { name: "John", age: 30 };
  // PI = 3.15; // Error! Tidak bisa mengubah nilai const
  user.age = 31; // Valid! Konten objek const dapat diubah

  return { oldVar, newLet, PI, user };
}

export function demoArrowFunctions() {
  function regularSum(a, b) { return a + b; }
  const arrowSum = (a, b) => { return a + b; };
  const shortArrowSum = (a, b) => a + b;
  const sayHello = () => "Hello World!";
  const square = x => x * x;

  return {
    regularSum: regularSum(5, 3),
    arrowSum: arrowSum(5, 3),
    shortArrowSum: shortArrowSum(5, 3),
    sayHello: sayHello(),
    square: square(4)
  };
}

export function demoTemplateLiterals() {
  const name = "John";
  const age = 30;
  const oldWay = "Nama saya " + name + " dan umur saya " + age + " tahun.";
  const newWay = `Nama saya ${name} dan umur saya ${age} tahun.`;
  const multiLine = `
Ini adalah string multi-baris.
Sangat berguna untuk HTML template.
Nama: ${name}
Umur: ${age}
  `;
  const expression = `Tahun lahir: ${new Date().getFullYear() - age}`;
  return { oldWay, newWay, multiLine, expression };
}
```
```javascript
// tambahkan ke js/main.js
import { demoVariables, demoArrowFunctions, demoTemplateLiterals } from './app.js';

function runAllDemos() {
  const varResults = demoVariables();
  addOutput("1. Let dan Const", "var vs let/const dan block scope",
    `var (function scope): ${varResults.oldVar}
let (block scope): ${varResults.newLet}
const (immutable): ${varResults.PI}
const object (mutable content): ${JSON.stringify(varResults.user)}`);

  const arrowResults = demoArrowFunctions();
  addOutput("2. Arrow Functions", "Perbandingan fungsi reguler dan arrow functions",
    `Regular function: ${arrowResults.regularSum}
Arrow function: ${arrowResults.arrowSum}
Short arrow: ${arrowResults.shortArrowSum}
No params: ${arrowResults.sayHello}
Single param: ${arrowResults.square}`);

  const templateResults = demoTemplateLiterals();
  addOutput("3. Template Literals", "String concatenation vs template literals",
    `Old way: ${templateResults.oldWay}
New way: ${templateResults.newWay}
With expression: ${templateResults.expression}
Multi-line: ${templateResults.multiLine}`);
}
```
> `let` dan `const` memecahkan masalah hoisting dan scope. Arrow functions membuat kode lebih ringkas dan mengatasi masalah `this` binding. Template literals membuat interpolasi string jauh lebih mudah dibaca.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Sapaan Berdasarkan Waktu*
- Instruksi: Buat arrow function `sapaWaktu()` tanpa parameter yang mengembalikan string sapaan berbeda tergantung jam saat ini (`new Date().getHours()`): "Selamat pagi" (< 11), "Selamat siang" (11–15), "Selamat sore" (15–18), "Selamat malam" (lainnya). Gunakan template literal.
- Expected output: Fungsi mengembalikan salah satu dari 4 string sesuai jam saat kode dijalankan.

### Langkah 3 — Destructuring, Spread dan Rest Operators
```javascript
// tambahkan ke js/app.js
export function demoDestructuring() {
  const person = {
    firstName: "John", lastName: "Doe", age: 30, email: "john@example.com",
    address: { city: "Jakarta", postalCode: "12345" }
  };

  const { firstName, lastName } = person;
  const { firstName: fName, lastName: lName } = person;
  const { hobby = "coding" } = person;
  const { address: { city, postalCode } } = person;

  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [firstColor, secondColor] = colors;
  const [, , thirdColor] = colors;
  const [primary, secondary, ...restColors] = colors;

  let a = 1;
  let b = 2;
  [a, b] = [b, a];

  return {
    objectBasic: { firstName, lastName },
    objectRenamed: { fName, lName },
    objectDefault: hobby,
    objectNested: { city, postalCode },
    arrayBasic: { firstColor, secondColor },
    arraySkipped: thirdColor,
    arrayRest: { primary, secondary, restColors },
    swapped: { a, b }
  };
}

export function demoSpreadRest() {
  const numbers = [1, 2, 3];
  const moreNumbers = [...numbers, 4, 5];
  const numbersCopy = [...numbers];
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = [...array1, ...array2];

  const person = { name: "John", age: 30 };
  const personCopy = { ...person };
  const extendedPerson = { ...person, email: "john@example.com", age: 31 };

  function sum(...numbers) { return numbers.reduce((total, num) => total + num, 0); }
  function process(first, second, ...rest) { return { first, second, rest }; }

  return {
    spreadArray: moreNumbers,
    copyArray: numbersCopy,
    mergedArrays: mergedArray,
    spreadObject: extendedPerson,
    restSum: sum(1, 2, 3, 4, 5),
    restProcess: process("a", "b", "c", "d", "e")
  };
}
```
> Destructuring adalah cara efisien mengekstrak nilai dari array dan objek. Spread operator (`...`) memperluas array/objek, rest parameter mengumpulkan elemen tersisa ke array tunggal.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Produk Pertama & Total Stok*
- Instruksi: Dari `sampleData.products`, gunakan destructuring untuk mengambil `name` dan `price` dari produk pertama. Gunakan `reduce()` untuk menjumlahkan seluruh `stock`.
- Expected output: Nama & harga produk pertama tampil, dan total stok seluruh produk tampil.

### Langkah 4 — Default Parameters, Classes, Object Literals
```javascript
export function demoDefaultParams() {
  function greetOld(name, greeting) {
    name = name || "Guest";
    greeting = greeting || "Hello";
    return `${greeting}, ${name}!`;
  }
  function greet(name = "Guest", greeting = "Hello") { return `${greeting}, ${name}!`; }
  function createUser(name, role = "user", createdAt = new Date().toISOString()) { return { name, role, createdAt }; }
  function createOrder(product, quantity = 1, price, total = price * quantity) { return { product, quantity, price, total }; }

  return {
    oldWay: greetOld(),
    oldWayParams: greetOld("John", "Hi"),
    newWay: greet(),
    newWayParams: greet("John", "Hi"),
    withExpression: createUser("Alice"),
    usingPrevious: createOrder("Laptop", 2, 1000000)
  };
}

export function demoClasses() {
  class User {
    constructor(name, email) { this.name = name; this.email = email; this.createdAt = new Date(); }
    getInfo() { return `${this.name} (${this.email})`; }
    getCreatedDate() { return this.createdAt.toLocaleDateString(); }
  }

  class Admin extends User {
    constructor(name, email, role = "admin") { super(name, email); this.role = role; }
    getInfo() { return `${this.name} (${this.email}) - ${this.role}`; }
    hasAccess(module) { return true; }
  }

  const user = new User("John Doe", "john@example.com");
  const admin = new Admin("Admin User", "admin@example.com");

  return {
    user: { info: user.getInfo(), createdDate: user.getCreatedDate() },
    admin: { info: admin.getInfo(), createdDate: admin.getCreatedDate(), hasAccess: admin.hasAccess("dashboard") },
    isUserInstance: user instanceof User,
    isAdminInstance: admin instanceof User
  };
}

export function demoObjectLiterals() {
  const name = "John";
  const age = 30;
  const oldPerson = { name: name, age: age, sayHello: function() { return "Hello!"; } };
  const newPerson = {
    name, age,
    sayHello() { return "Hello!"; },
    ["skill_" + 1]: "JavaScript",
    ["skill_" + 2]: "React"
  };
  const prefix = "user";
  const userData = {
    [`${prefix}_id`]: 123,
    [`${prefix}_name`]: "john_doe",
    [Date.now()]: "timestamp"
  };

  return {
    oldWay: oldPerson, newWay: newPerson,
    methods: { old: oldPerson.sayHello(), new: newPerson.sayHello() },
    computedProps: { skill1: newPerson.skill_1, skill2: newPerson.skill_2 },
    dynamicProps: userData
  };
}
```
> Fungsi dengan default parameters mengurangi boilerplate. Class ES6 memberi sintaks OOP yang lebih ringkas dengan `extends` untuk inheritance. Enhanced object literals mendukung property/method shorthand serta computed property names.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Class Produk dengan Diskon*
- Instruksi: Buat `class Produk` dengan constructor `(nama, harga)` dan method `hargaSetelahDiskon(persen = 10)` yang mengembalikan harga setelah dipotong diskon (default 10%). Buat 2 instance dan tampilkan hasilnya.
- Expected output: Harga sebelum dan sesudah diskon untuk 2 produk berbeda.

### Langkah 5 — Array Methods dan Higher-Order Functions
```javascript
export function demoArrayMethods() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const users = [
    { id: 1, name: "John", age: 25, active: true },
    { id: 2, name: "Jane", age: 30, active: false },
    { id: 3, name: "Bob", age: 22, active: true },
    { id: 4, name: "Alice", age: 28, active: true },
    { id: 5, name: "Charlie", age: 35, active: false }
  ];

  const doubled = numbers.map(num => num * 2);
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const activeUsers = users.filter(user => user.active);
  const userJane = users.find(user => user.name === "Jane");
  const hasAdult = users.some(user => user.age >= 18);
  const allAdults = users.every(user => user.age >= 18);
  const sum = numbers.reduce((total, num) => total + num, 0);
  const oldest = users.reduce((oldest, user) => (user.age > oldest.age ? user : oldest), users[0]);
  const activeUsersNames = users.filter(user => user.active).map(user => user.name);
  const totalActiveAge = users.filter(user => user.active).reduce((sum, user) => sum + user.age, 0);

  return {
    map: doubled,
    filter: { evenNumbers, activeUsers: activeUsers.length },
    find: userJane, some: hasAdult, every: allAdults,
    reduce: { sum, oldest: oldest.name },
    chaining: { activeUsersNames, totalActiveAge }
  };
}

export function demoAdvancedArrays() {
  const numbers = [1, 2, 3, 4, 5];
  const numbersCopy = [...numbers];
  const moreNumbers = [...numbers, 6, 7, 8];
  const combinedArrays = [...numbers, ...[6, 7, 8, 9]];
  const fromIterable = Array.from("hello");
  const withMapFn = Array.from(numbers, n => n * n);
  const newArray = Array.of(1, "two", { three: 3 });
  const nestedArrays = [1, [2, 3], [[4, 5], 6]];
  const flattened = nestedArrays.flat();
  const deepFlattened = nestedArrays.flat(2);
  const flatMapped = numbers.flatMap(n => [n, n * 2]);
  const hasThree = numbers.includes(3);

  return {
    clone: numbersCopy,
    concat: { moreNumbers, combinedArrays },
    arrayFrom: { fromIterable, withMapFn },
    arrayOf: newArray,
    flatAndFlatMap: { flattened, deepFlattened, flatMapped },
    includes: hasThree
  };
}
```
> `map`, `filter`, `find`, `some`, `every`, `reduce` adalah higher-order functions yang menghindari mutasi langsung dan mendukung method chaining. `Array.from`, `Array.of`, `flat`, `flatMap` memberikan cara modern bekerja dengan array.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Filter Skill JavaScript*
- Instruksi: Dari `sampleData.users`, gunakan `filter()` untuk mendapatkan user yang punya `"JavaScript"` di `skills`, lalu `map()` hasilnya jadi array nama saja.
- Expected output: Array nama-nama user yang punya skill JavaScript.

### Langkah 6 — Promise dan Async/Await
```javascript
export function demoPromises() {
  function fetchData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) resolve({ id, name: `User ${id}`, success: true });
        else reject(new Error("Invalid ID"));
      }, 1000);
    });
  }

  fetchData(1)
    .then(data => { document.getElementById('promise-basic').textContent = `Success: ${JSON.stringify(data)}`; })
    .catch(err => { document.getElementById('promise-basic').textContent = `Error: ${err.message}`; });

  fetchData(2)
    .then(user => { return fetchData(3); })
    .then(secondUser => { document.getElementById('promise-chain').textContent = `Got users`; })
    .catch(err => { document.getElementById('promise-chain').textContent = `Error: ${err.message}`; });

  Promise.all([fetchData(4), fetchData(5), fetchData(6)])
    .then(results => { document.getElementById('promise-all').textContent = `All completed: ${results.map(r => r.name).join(', ')}`; })
    .catch(err => { document.getElementById('promise-all').textContent = `Error in one: ${err.message}`; });

  Promise.race([fetchData(7), fetchData(8), new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 500))])
    .then(winner => { document.getElementById('promise-race').textContent = `Race winner: ${winner.name}`; })
    .catch(err => { document.getElementById('promise-race').textContent = `Race error: ${err.message}`; });
}

export function demoAsyncAwait() {
  function fetchUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) resolve({ id, name: `User ${id}`, email: `user${id}@example.com` });
        else reject(new Error("Invalid user ID"));
      }, 1000);
    });
  }
  function fetchUserPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => resolve([{ id: 1, title: "Post 1", body: "Content for post 1" }, { id: 2, title: "Post 2", body: "Content for post 2" }]), 800);
    });
  }

  async function getUserData(id) {
    try {
      const user = await fetchUser(id);
      const posts = await fetchUserPosts(user.id);
      return { user, posts, success: true };
    } catch (error) {
      return { error: error.message, success: false };
    }
  }

  async function getMultipleUsers(ids) {
    try {
      const userPromises = ids.map(id => fetchUser(id));
      const users = await Promise.all(userPromises);
      const postPromises = users.map(user => fetchUserPosts(user.id));
      const allPosts = await Promise.all(postPromises);
      return users.map((user, i) => ({ user, posts: allPosts[i] }));
    } catch (error) {
      return { error: error.message };
    }
  }

  getUserData(42).then(result => { /* update UI */ });
  getMultipleUsers([101, 102, 103]).then(results => { /* update UI */ });
}
```
> Promise menyediakan `.then()/.catch()`, `Promise.all()` (jalankan paralel, tunggu semua), `Promise.race()` (ambil yang selesai duluan). Async/await memberikan sintaks yang lebih bersih untuk kode asinkron menggunakan `try/catch`.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Delay Berurutan*
- Instruksi: Buat fungsi `delay(ms)` yang mengembalikan Promise resolve setelah `ms` ms. Buat fungsi `async` yang memanggil `delay(500)` 3 kali berurutan (bukan paralel), catat waktu selesai tiap panggilan ke console.
- Hint: `await delay(500)` dipanggil 3 kali di dalam satu fungsi `async`.
- Expected output: 3 log muncul di console dengan jeda ±500ms antar log.

## Hasil Praktikum
Mahasiswa seharusnya memahami perbedaan `let`/`const`/`var`, arrow function, template literals, destructuring, spread/rest, default parameter, class + inheritance, enhanced object literals, module system, array modern methods, Promise & async/await, struktur proyek modular, dan Fetch API.

## Tugas Praktikum — Aplikasi Personal Dashboard
Buat aplikasi personal dashboard sederhana (jadwal kuliah, daftar tugas, catatan, atau info cuaca/waktu — bebas dipilih).

Persyaratan:
- Interaktif: bisa menambah, mengedit, menghapus informasi
- Penyimpanan lokal: gunakan `localStorage`
- Fitur ES6+ wajib: `let`/`const` tepat, minimal 3 arrow functions, template literals untuk rendering dinamis, fungsi asinkron (Async/Await atau Promises), implementasi Classes

**Kriteria Penilaian:**
| Aspek | Bobot |
|---|---|
| Fungsionalitas dan interaktivitas aplikasi | 30% |
| Implementasi fitur ES6+ | 25% |
| Penggunaan localStorage dan pengelolaan data | 20% |
| Desain UI dan UX | 15% |
| Dokumentasi dan kerapian kode | 10% |

**Dokumentasi di README:** penjelasan fungsi aplikasi & fitur, screenshot aplikasi, daftar fitur ES6+ yang diimplementasikan.

## Format Pengumpulan
Sama seperti Pertemuan 1 (repository `pemrograman_web_itera_[NIM]`, folder `[NAMA]_[NIM]_pertemuan2`). Deadline: *(belum ditentukan di modul asli — isi apa adanya, jangan ditebak)*.

---
---

# PERTEMUAN 3 — Praktikum React Basics

**Subjudul:** Memahami konsep dasar React dan membangun aplikasi interaktif dengan Component-Based Architecture

## Tujuan Praktikum
- Memahami filosofi dan konsep dasar React (Component-Based Architecture)
- Membuat dan menggunakan functional components dengan hooks
- Mengelola state dan props dalam aplikasi React
- Menerapkan event handling dan conditional rendering
- Membuat form interaktif dengan controlled components
- Mengelola daftar data dengan keys dan rendering lists
- Memahami lifecycle components melalui useEffect
- Mengimplementasikan routing dasar dengan React Router

## Dasar Teori
React adalah library JavaScript yang dikembangkan oleh Facebook (Meta) untuk membangun UI interaktif dan efisien. React berfokus pada satu hal: membangun UI dengan pendekatan component-based.

Konsep kunci: Component-Based, Declarative, Virtual DOM, Unidirectional Data Flow, JSX, Hooks.

> **React vs Framework Lain:** React hanya menangani layer view. Berbeda dari Angular/Vue yang lebih comprehensive, dengan React bebas memilih library tambahan (Redux/Zustand untuk state, React Router untuk routing, dsb).

## Alat dan Bahan
- Node.js dan npm (versi LTS terbaru)
- Code Editor: VS Code dengan ekstensi React/JSX
- Browser modern dengan React DevTools
- Git untuk version control
- Rekomendasi ekstensi: ES7+ React/Redux/React-Native snippets, ESLint, Prettier, Auto Import, React Developer Tools

## Langkah Praktikum

### Langkah 1 — Mempersiapkan Project React
```bash
# Buat project React baru
npx create-react-app my-react-app
cd my-react-app
npm start
```

Struktur folder yang lebih baik untuk praktikum:
```
my-react-app/
├── src/
│   ├── components/            # Reusable components
│   │   ├── Header/
│   │   │     ├── Header.jsx
│   │   │     └── Header.css
│   │   ├── TaskItem/
│   │   │     ├── TaskItem.jsx
│   │   │     └── TaskItem.css
│   │   └── TaskForm/
│   │         ├── TaskForm.jsx
│   │         └── TaskForm.css
│   ├── pages/
│   │   ├── Home/
│   │   │     └── Home.jsx
│   │   └── About/
│   │         └── About.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
```

```jsx
// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Task Manager</h1>
        <p>Selamat datang di aplikasi Task Manager!</p>
      </header>
    </div>
  );
}

export default App;
```
> Dalam pengembangan modern React, kita menggunakan functional components dengan Hooks daripada class components.

### Langkah 2 — Membuat Component Pertama
```jsx
// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

function Header({ title, description }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}

export default Header;
```
```css
/* src/components/Header/Header.css */
.header { background-color: #3498db; color: white; padding: 1rem; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.header h1 { margin: 0; font-size: 1.8rem; }
.header p { margin: 0.5rem 0 0; font-size: 1rem; opacity: 0.9; }
```

```jsx
// src/components/TaskItem/TaskItem.jsx
import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
        <span className="task-title">{task.title}</span>
      </div>
      <div className="task-actions">
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
```
```css
/* src/components/TaskItem/TaskItem.css */
.task-item { display: flex; justify-content: space-between; align-items: center; padding: 1rem; margin-bottom: 0.5rem; background-color: #f8f9fa; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: all 0.3s ease; }
.task-item.completed { background-color: #e9ecef; opacity: 0.7; }
.task-content { display: flex; align-items: center; }
.task-title { margin-left: 0.5rem; }
.completed .task-title { text-decoration: line-through; color: #6c757d; }
.task-actions { display: flex; }
.delete-btn { background-color: #dc3545; color: white; border: none; border-radius: 4px; padding: 0.25rem 0.5rem; cursor: pointer; transition: background-color 0.2s; }
.delete-btn:hover { background-color: #c82333; }
```

```jsx
// src/components/TaskForm/TaskForm.jsx
import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = { id: Date.now(), title: title, completed: false };
    onAddTask(newTask);
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Tambahkan tugas baru..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TaskForm;
```
```css
/* src/components/TaskForm/TaskForm.css */
.task-form { display: flex; margin-bottom: 1.5rem; }
.task-form input { flex: 1; padding: 0.75rem; border: 1px solid #ced4da; border-radius: 4px 0 0 4px; font-size: 1rem; }
.task-form button { padding: 0.75rem 1.5rem; background-color: #28a745; color: white; border: none; border-radius: 0 4px 4px 0; cursor: pointer; font-size: 1rem; transition: background-color 0.2s; }
.task-form button:hover { background-color: #218838; }
```
> **Props dalam React:** Props (properties) adalah cara mengirim data dari parent ke child component. Props bersifat read-only dan membantu membuat komponen reusable.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Komponen Footer*
- Instruksi: Buat komponen baru `Footer.jsx` yang menampilkan "© [tahun berjalan] Task Manager" — tahun otomatis dari `new Date().getFullYear()`, bukan di-hardcode. Tampilkan di `Home.jsx`.
- Expected output: Teks copyright muncul di bawah halaman dengan tahun yang selalu benar.

### Langkah 3 — Mengelola State dengan Hooks
```jsx
// src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => setTasks([...tasks, newTask]);
  const handleDeleteTask = (taskId) => setTasks(tasks.filter(task => task.id !== taskId));
  const handleToggleComplete = (taskId) =>
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));

  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header title="React Task Manager" description="Kelola tugas Anda dengan mudah" />
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        <TaskForm onAddTask={handleAddTask} />
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem key={task.id} task={task} onDelete={handleDeleteTask} onToggleComplete={handleToggleComplete} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
```
```css
/* src/pages/Home/Home.css */
.container { max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
.stats { display: flex; justify-content: space-between; background-color: #f1f8ff; padding: 1rem; border-radius: 4px; margin-bottom: 1.5rem; font-size: 0.9rem; }
.empty-message { text-align: center; padding: 2rem; background-color: #f8f9fa; border-radius: 4px; color: #6c757d; }
```
```jsx
// src/App.jsx (update)
import React from 'react';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
```
> **React Hooks:** `useState` menambahkan state ke functional component; `useEffect` melakukan side effects (data fetching, interaksi DOM). Perhatikan array dependensi pada `useEffect` yang mengontrol kapan effect dijalankan.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Edit Judul Task*
- Instruksi: Tambahkan kemampuan mengedit judul task — klik pada teks judul memunculkan input untuk mengubah teks, simpan ke state `tasks` saat Enter ditekan.
- Hint: Tambahkan state lokal `editingId` di `Home.jsx` untuk menandai task yang sedang diedit.
- Expected output: Judul task bisa diklik, muncul input, berubah setelah Enter ditekan.

### Langkah 4 — Menerapkan Routing dengan React Router
```bash
npm install react-router-dom
```

```jsx
// src/pages/About/About.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import './About.css';

function About() {
  return (
    <div className="about">
      <Header title="About Task Manager" description="Learn more about our app" />
      <main className="container">
        <div className="about-content">
          <h2>Welcome to Task Manager</h2>
          <p>Task Manager adalah aplikasi sederhana yang dibuat dengan React untuk membantu Anda mengelola tugas sehari-hari dengan mudah dan efisien.</p>
          <h3>Fitur:</h3>
          <ul>
            <li>Tambah, hapus, dan tandai tugas sebagai selesai</li>
            <li>Penyimpanan lokal di browser Anda</li>
            <li>Antarmuka pengguna yang responsif dan intuitif</li>
            <li>Statistik tugas real-time</li>
          </ul>
          <h3>Teknologi:</h3>
          <p>Aplikasi ini dibangun menggunakan React dengan functional components dan hooks. Kami juga menggunakan localStorage untuk menyimpan data Anda.</p>
        </div>
      </main>
    </div>
  );
}

export default About;
```
```css
/* src/pages/About/About.css */
.about-content { background-color: white; border-radius: 8px; margin-top: 2rem; padding: 2rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.about-content h2 { color: #3498db; margin-top: 0; }
.about-content h3 { margin-top: 1.5rem; margin-bottom: 0.5rem; color: #2c3e50; }
.about-content ul { padding-left: 1.5rem; }
.about-content li { margin-bottom: 0.5rem; }
```

```jsx
// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"><Link to="/">Task Manager</Link></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
```
```css
/* src/components/Navbar/Navbar.css */
.navbar { background-color: #2c3e50; padding: 1rem 0; }
.navbar .container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
.logo a { color: white; font-size: 1.5rem; font-weight: bold; text-decoration: none; }
.nav-links { display: flex; list-style: none; margin: 0; padding: 0; }
.nav-links li { margin-left: 1.5rem; }
.nav-links a { color: #ecf0f1; text-decoration: none; font-size: 1rem; transition: color 0.2s; }
.nav-links a:hover { color: #3498db; }
```

```jsx
// src/App.jsx (dengan Routing)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```
```css
/* src/App.css */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f4f7f9; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
```
> **React Router:** menggunakan client-side routing, navigasi antar halaman tidak memerlukan permintaan ke server untuk halaman baru, membuat navigasi sangat cepat.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Halaman Contact*
- Instruksi: Tambahkan halaman baru `Contact.jsx` dengan route `/contact`, berisi form sederhana (nama + pesan). Saat submit, `console.log` datanya (tidak perlu backend). Tambahkan link ke halaman ini di `Navbar`.
- Expected output: Navigasi ke `/contact` menampilkan form, submit menampilkan data di console.

### Langkah 5 — Membuat Custom Hook
```javascript
// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
```
```jsx
// src/pages/Home/Home.jsx (Updated, gunakan custom hook)
import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const handleAddTask = (newTask) => setTasks([...tasks, newTask]);
  const handleDeleteTask = (taskId) => setTasks(tasks.filter(task => task.id !== taskId));
  const handleToggleComplete = (taskId) =>
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));

  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header title="React Task Manager" description="Kelola tugas Anda dengan mudah" />
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        <TaskForm onAddTask={handleAddTask} />
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem key={task.id} task={task} onDelete={handleDeleteTask} onToggleComplete={handleToggleComplete} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
```
> **Custom Hooks:** mekanisme mengekstrak logika stateful dari komponen agar bisa dipakai ulang — mengurangi duplikasi kode, membuat logika kompleks lebih mudah dipahami. Nama custom hook harus dimulai dengan "use".

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Custom Hook Document Title*
- Instruksi: Buat custom hook `useDocumentTitle(title)` yang otomatis mengubah `document.title` browser sesuai parameter. Gunakan di halaman `Home` dan `About` dengan judul berbeda.
- Expected output: Tab browser menampilkan judul berbeda tergantung halaman yang dibuka.

### Langkah 6 — Menerapkan Context API
```jsx
// src/context/TaskContext.jsx
import React, { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK': return [...state, action.payload];
    case 'DELETE_TASK': return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_COMPLETE':
      return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
    default: return state;
  }
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const dispatch = (action) => setTasks(taskReducer(tasks, action));

  return <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a TaskProvider');
  return context;
}
```
```jsx
// src/App.jsx (Updated, dengan TaskProvider)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <TaskProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;
```
```jsx
// src/pages/Home/Home.jsx (Updated with Context)
import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import { useTasks } from '../../context/TaskContext';
import './Home.css';

function Home() {
  const { tasks, dispatch } = useTasks();

  const handleAddTask = (newTask) => dispatch({ type: 'ADD_TASK', payload: newTask });
  const handleDeleteTask = (taskId) => dispatch({ type: 'DELETE_TASK', payload: taskId });
  const handleToggleComplete = (taskId) => dispatch({ type: 'TOGGLE_COMPLETE', payload: taskId });

  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header title="React Task Manager" description="Kelola tugas Anda dengan mudah" />
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        <TaskForm onAddTask={handleAddTask} />
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem key={task.id} task={task} onDelete={handleDeleteTask} onToggleComplete={handleToggleComplete} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
```
> **Context API:** berguna untuk state yang diakses banyak komponen di berbagai level — menghindari "prop drilling", state management lebih terpusat. Untuk state management lebih kompleks, pertimbangkan Redux.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Dark Mode via Context*
- Instruksi: Tambahkan `ThemeContext` terpisah dari `TaskContext` untuk mengelola dark mode toggle (state boolean `isDark` + fungsi `toggleTheme`). Terapkan class `dark` pada elemen root saat aktif.
- Expected output: Tombol toggle mengubah tema gelap/terang di seluruh halaman.

### Langkah 7 — Testing Komponen dengan Jest dan React Testing Library
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```
```jsx
// src/components/TaskItem/TaskItem.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('TaskItem Component', () => {
  const mockTask = { id: 1, title: 'Test Task', completed: false };
  const mockOnDelete = jest.fn();
  const mockOnToggleComplete = jest.fn();

  it('renders task title', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('calls onToggleComplete when checkbox is clicked', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockOnToggleComplete).toHaveBeenCalledWith(1);
  });

  it('calls onDelete when delete button is clicked', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  it('shows completed style when task is completed', () => {
    const completedTask = { ...mockTask, completed: true };
    render(<TaskItem task={completedTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    const taskItem = screen.getByText('Test Task').closest('.task-item');
    expect(taskItem).toHaveClass('completed');
  });
});
```
```jsx
// src/components/TaskForm/TaskForm.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
  const mockOnAddTask = jest.fn();
  beforeEach(() => { mockOnAddTask.mockClear(); });

  it('renders form with input and button', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    expect(screen.getByPlaceholderText('Tambahkan tugas baru...')).toBeInTheDocument();
    expect(screen.getByText('Tambah')).toBeInTheDocument();
  });

  it('calls onAddTask with new task when form is submitted', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    const input = screen.getByPlaceholderText('Tambahkan tugas baru...');
    const button = screen.getByText('Tambah');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);
    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
  });

  it('does not call onAddTask when input is empty', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    fireEvent.click(screen.getByText('Tambah'));
    expect(mockOnAddTask).not.toHaveBeenCalled();
  });

  it('clears input after form submission', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    const input = screen.getByPlaceholderText('Tambahkan tugas baru...');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText('Tambah'));
    expect(input.value).toBe('');
  });
});
```
```bash
npm test
```
> **Testing Best Practices:** fokus pada pengujian perilaku bukan implementasi; gunakan React Testing Library; test interaksi pengguna bukan state internal; buat test kecil dan terfokus; gunakan mock untuk dependensi eksternal.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Test Tambahan*
- Instruksi: Tambahkan satu test baru di `TaskItem.test.jsx` yang memastikan judul task yang `completed` menampilkan class `completed` pada elemen `.task-item`.
- Expected output: `npm test` menampilkan test baru ini lulus di samping test yang sudah ada.

## Hasil Praktikum
Mahasiswa seharusnya memahami component-based architecture, functional components + hooks, state (`useState`) & side effects (`useEffect`), props, form controlled components, event handling & conditional rendering, rendering list dengan keys, React Router, custom hooks, Context API, testing dengan Jest + RTL, dan clean code principles dalam React.

## Tugas Praktikum — Aplikasi Manajemen Buku Pribadi
Buat aplikasi manajemen buku pribadi (mencatat buku milik/sedang dibaca/ingin dibeli).

**Fitur Dasar:** tambah buku (judul, penulis, status), edit & hapus buku, filter berdasarkan status, pencarian buku.

**Teknologi React:** `useState` & `useEffect`, minimal 3 komponen reusable, Context API untuk state management, React Router untuk navigasi multi-halaman.

**Penyimpanan:** `localStorage`.

**Persyaratan Teknis:** functional components dengan Hooks, minimal 2 custom hooks, PropTypes untuk type checking, minimal 5 test unit dengan React Testing Library, error handling untuk form input.

**Struktur folder disarankan:**
```
src/
├── components/
│     ├── BookForm/
│     ├── BookList/
│     └── BookFilter/
├── pages/
│     ├── Home/
│     └── Stats/
├── hooks/
│     ├── useLocalStorage.js
│     └── useBookStats.js
├── context/
│     └── BookContext.js
└── App.js
```

**Kriteria Penilaian:**
| Aspek | Bobot |
|---|---|
| Fungsi dasar aplikasi | 30% |
| Penerapan konsep React | 25% |
| Struktur kode dan organisasi | 20% |
| Testing dan error handling | 15% |
| Dokumentasi | 10% |

**Dokumentasi:** README.md (deskripsi, instruksi instalasi & menjalankan, screenshot, penjelasan fitur React), komentar kode, laporan testing (screenshot hasil test).

## Format Pengumpulan
Sama seperti pertemuan sebelumnya, folder `[NAMA]_[NIM]_pertemuan3`. Deadline: *(belum ditentukan di modul asli)*.

---
---

# PERTEMUAN 4 — Praktikum Python Dasar

**Subjudul:** Mengenal dasar-dasar Python dan pemrograman berbasis objek

## Tujuan Praktikum
- Memahami konsep dasar Python sebagai bahasa pemrograman
- Menguasai penggunaan variabel, tipe data, dan operator dalam Python
- Mengimplementasikan struktur kendali (conditionals dan loops)
- Membuat dan menggunakan fungsi dalam Python
- Bekerja dengan koleksi data seperti list, dictionary, dan set

## Dasar Teori
Python adalah bahasa pemrograman interpretatif multiguna dengan filosofi perancangan yang berfokus pada tingkat keterbacaan kode. Diciptakan oleh Guido van Rossum, pertama kali dirilis 1991. Python menggunakan indentasi untuk mendefinisikan blok kode, bukan kurung kurawal.

**Karakteristik Utama Python**

| Karakteristik | Deskripsi |
|---|---|
| Interpreted | Kode dieksekusi langsung tanpa perlu dikompilasi |
| Dinamis | Tipe data ditentukan saat runtime |
| Berorientasi Objek | Mendukung class dan inheritance |
| Indentasi | Menggunakan indentasi untuk blok kode |
| Multi-paradigma | Mendukung beberapa paradigma pemrograman |

**Interpreter Python:** CPython (standar, ditulis dalam C), PyPy (JIT compiler, lebih cepat), Jython (berjalan di JVM), IronPython (untuk .NET Framework).

**Tipe Data Dasar:** `int`, `float`, `str`, `bool`, `None`.
**Tipe Data Koleksi:** `list` (bisa diubah), `tuple` (tidak bisa diubah), `dict` (key-value), `set` (item unik tanpa urutan).

Python digunakan luas di: Data Science (NumPy, Pandas, Matplotlib), Machine Learning (TensorFlow, PyTorch, Scikit-learn), Web Development (Django, Flask, FastAPI), Automation (Selenium, PyAutoGUI, Scrapy), Game Development (Pygame), Scientific Computing (SciPy, Sympy).

**Fitur Python Modern:** List Comprehension, f-strings, Type Hints, Async/Await, Walrus Operator.

## Prasyarat
- Python 3.8 atau versi lebih baru
- Dasar pemahaman konsep pemrograman
- Editor teks atau IDE (VS Code, PyCharm, dll.)

## Alat dan Bahan
- Python 3.8+ (cek dengan `python --version`)
- Code Editor: VSCode, PyCharm, Sublime Text, IDLE
- Terminal/Command Prompt

## Langkah Praktikum

### Langkah 1 — Mengenal Python dan Cara Menjalankannya
```python
# hello.py
print("Hello, World!")
print("Selamat datang di praktikum Python")
print("Saya sedang belajar Python")
```
```bash
python hello.py
```
> Python adalah bahasa yang diinterpretasi — tidak perlu dikompilasi sebelum dijalankan.

Output yang diharapkan:
```
Hello, World!
Selamat datang di praktikum Python
Saya sedang belajar Python
```

### Langkah 2 — Variabel dan Tipe Data
```python
# variables.py
nama = "Budi Santoso"  # string
usia = 20               # integer
tinggi = 175.5          # float
is_mahasiswa = True     # boolean

print("Nama:", nama)
print("Usia:", usia, "tahun")
print("Tinggi:", tinggi, "cm")
print("Status mahasiswa:", is_mahasiswa)

print("\nTipe data variabel:")
print("Tipe data nama:", type(nama))
print("Tipe data usia:", type(usia))
print("Tipe data tinggi:", type(tinggi))
print("Tipe data is_mahasiswa:", type(is_mahasiswa))

usia_str = str(usia)
print("\nUsia (string):", usia_str)
print("Tipe data usia_str:", type(usia_str))

print("\nInput dari pengguna:")
nama_input = input("Masukkan nama Anda: ")
usia_input = int(input("Masukkan usia Anda: "))
print(f"Halo {nama_input}, usia Anda {usia_input} tahun")
```
> Python tidak perlu deklarasi tipe data eksplisit ("dynamic typing"). `input()` selalu mengembalikan string; untuk tipe lain perlu konversi manual seperti `int(input())`.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Konversi Suhu ke Reamur*
- Instruksi: Buat program yang meminta input suhu Celsius, konversi ke Reamur dengan rumus `Reamur = Celsius * 4/5`, tampilkan hasilnya.
- Expected output: Input `25` → output "Suhu dalam Reamur: 20.0".

### Langkah 3 — Operator dan Ekspresi
```python
# operators.py
a = 10
b = 3
print("Operator Aritmatika:")
print("a + b =", a + b)
print("a - b =", a - b)
print("a * b =", a * b)
print("a / b =", a / b)
print("a // b =", a // b)
print("a % b =", a % b)
print("a ** b =", a ** b)

print("\nOperator Perbandingan:")
print("a == b:", a == b)
print("a != b:", a != b)
print("a > b:", a > b)
print("a < b:", a < b)
print("a >= b:", a >= b)
print("a <= b:", a <= b)

x = True
y = False
print("\nOperator Logika:")
print("x and y:", x and y)
print("x or y:", x or y)
print("not x:", not x)

c = 5
print("\nOperator Assignment:")
print("Nilai awal c =", c)
c += 3
print("Setelah c += 3, c =", c)
c -= 1
print("Setelah c -= 1, c =", c)
c *= 2
print("Setelah c *= 2, c =", c)
c /= 4
print("Setelah c /= 4, c =", c)
```
> Python juga mendukung operator identitas (`is`, `is not`) dan operator keanggotaan (`in`, `not in`).

### Langkah 4 — Struktur Kendali: Percabangan
```python
# conditionals.py
nilai = int(input("Masukkan nilai (0-100): "))
grade = ""

if nilai >= 90: grade = "A"
elif nilai >= 80: grade = "B"
elif nilai >= 70: grade = "C"
elif nilai >= 60: grade = "D"
else: grade = "E"

print(f"Nilai: {nilai}, Grade: {grade}")

if nilai >= 60:
    print("Status: LULUS")
else:
    print("Status: TIDAK LULUS")

print("\nKeterangan:")
if nilai >= 60:
    if nilai >= 90:
        print("Excellent!")
    elif nilai >= 80:
        print("Great job!")
    else:
        print("Good, keep improving!")
else:
    if nilai >= 40:
        print("Need more practice")
    else:
        print("Need serious attention")

status = "LULUS" if nilai >= 60 else "TIDAK LULUS"
print(f"Status (ternary): {status}")

if nilai >= 80 and nilai <= 100:
    print("Nilai sangat baik")
elif nilai >= 60 or nilai == 55:
    print("Nilai cukup")
elif not (nilai < 40):
    print("Nilai di atas 40")
```
> Python menggunakan indentasi (biasanya 4 spasi) untuk mengelompokkan blok kode, bukan kurung kurawal.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Kategori Usia*
- Instruksi: Buat program yang meminta input usia, lalu menampilkan kategori: "Anak-anak" (< 12), "Remaja" (12–17), "Dewasa" (18–59), "Lansia" (60+).
- Expected output: input `20` → "Kategori: Dewasa".

### Langkah 5 — Struktur Kendali: Perulangan
```python
# loops.py
print("For loop dengan range:")
for i in range(5):
    print(i, end=" ")
print()

print("\nRange dengan start, stop, step:")
for i in range(2, 10, 2):
    print(i, end=" ")
print()

print("\nFor loop dengan list:")
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
for item in buah:
    print(item)

print("\nFor loop dengan enumerate:")
for index, item in enumerate(buah):
    print(f"Index {index}: {item}")

print("\nWhile loop:")
count = 0
while count < 5:
    print(count, end=" ")
    count += 1
print()

print("\nWhile dengan break:")
angka = 0
while True:
    print(angka, end=" ")
    angka += 1
    if angka >= 5:
        break
print()

print("\nFor loop dengan continue:")
for i in range(10):
    if i % 2 == 0:
        continue
    print(i, end=" ")
print()

print("\nNested loops (multiplication table):")
for i in range(1, 5):
    for j in range(1, 5):
        print(f"{i}x{j}={i*j}", end="\t")
    print()

print("\nLoop dengan else:")
for i in range(5):
    print(i, end=" ")
else:
    print("Loop selesai")

print("\nList comprehension:")
squares = [x**2 for x in range(1, 6)]
print("Squares:", squares)
```
> List comprehension adalah fitur Python yang powerful untuk membuat list secara singkat: `[expression for item in iterable if condition]`.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Deret Fibonacci*
- Instruksi: Buat program dengan `while` loop yang mencetak `n` suku pertama deret Fibonacci (0, 1, 1, 2, 3, 5, 8, ...). Minta input `n` dari pengguna.
- Expected output: input `n=8` → output `0 1 1 2 3 5 8 13`.

### Langkah 6 — Fungsi
```python
# functions.py
def sapa():
    print("Halo, selamat datang!")

print("Memanggil fungsi sapa():")
sapa()

def sapa_nama(nama):
    print(f"Halo, {nama}! Selamat datang!")

print("\nFungsi dengan parameter:")
sapa_nama("Budi")
sapa_nama("Ani")

def sapa_lengkap(nama, pesan="Selamat datang!"):
    print(f"Halo, {nama}! {pesan}")

print("\nFungsi dengan parameter default:")
sapa_lengkap("Citra")
sapa_lengkap("Dodi", "Semoga harimu menyenangkan!")

def jumlah(a, b):
    return a + b

print("\nFungsi dengan return value:")
hasil = jumlah(5, 3)
print(f"5 + 3 = {hasil}")

def operasi_aritmatika(a, b):
    tambah = a + b
    kurang = a - b
    kali = a * b
    bagi = a / b
    return tambah, kurang, kali, bagi

print("\nFungsi dengan multiple return values:")
a, b, c, d = operasi_aritmatika(10, 2)
print(f"10 + 2 = {a}")
print(f"10 - 2 = {b}")
print(f"10 * 2 = {c}")
print(f"10 / 2 = {d}")

print("\nLambda function:")
kuadrat = lambda x: x**2
print(f"Kuadrat dari 5 adalah {kuadrat(5)}")

angka = [1, 5, 4, 3, 2, 6]
angka_urut = sorted(angka)
print(f"Sorted: {angka_urut}")

def apply_operation(a, b, operation):
    return operation(a, b)

print("\nFungsi sebagai argumen:")
add = lambda x, y: x + y
multiply = lambda x, y: x * y
print(f"5 + 3 = {apply_operation(5, 3, add)}")
print(f"5 * 3 = {apply_operation(5, 3, multiply)}")
```
> Python mendukung positional arguments, keyword arguments, default arguments, `*args`, dan `**kwargs`.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Cek Bilangan Prima*
- Instruksi: Buat fungsi `is_prime(n)` yang mengembalikan `True`/`False` apakah `n` bilangan prima.
- Hint: cek pembagi dari 2 sampai `n-1` (atau lebih efisien sampai akar kuadrat `n`).
- Expected output: `is_prime(7)` → `True`, `is_prime(10)` → `False`.

### Langkah 7 — Struktur Data: List dan Dictionary
```python
# data_structures.py
print("LIST OPERATIONS")
print("--------------")
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
print("List buah:", buah)

print("\nMengakses elemen list:")
print("Buah pertama:", buah[0])
print("Buah terakhir:", buah[-1])

print("\nSlicing list:")
print("Dua buah pertama:", buah[0:2])
print("Dua buah terakhir:", buah[-2:])

print("\nMengubah elemen list:")
buah[1] = "Strawberry"
print("Setelah mengubah buah[1]:", buah)

print("\nMetode list:")
buah.append("Anggur")
print("Setelah append Anggur:", buah)
buah.insert(2, "Durian")
print("Setelah insert Durian di indeks 2:", buah)

removed = buah.pop()
print(f"Elemen yang dihapus dengan pop(): {removed}")
print("List setelah pop():", buah)
buah.remove("Durian")
print("List setelah remove('Durian'):", buah)

print("\nList operations:")
print("Jumlah elemen:", len(buah))
print("Apel di indeks:", buah.index("Apel"))

angka = [3, 1, 4, 1, 5, 9, 2]
print("\nList angka:", angka)
angka.sort()
print("Setelah sort():", angka)
angka.reverse()
print("Setelah reverse():", angka)

print("\nNested list:")
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print("Matrix:", matrix)
print("matrix[1][2]:", matrix[1][2])

print("\n\nDICTIONARY OPERATIONS")
print("--------------------")
mahasiswa = {"nama": "Budi Santoso", "nim": "20210001", "jurusan": "Teknik Informatika", "usia": 20}
print("Dictionary mahasiswa:", mahasiswa)

print("\nMengakses nilai dengan key:")
print("Nama:", mahasiswa["nama"])
print("NIM:", mahasiswa["nim"])

print("\nMengakses dengan get():")
print("Jurusan:", mahasiswa.get("jurusan"))
print("IPK:", mahasiswa.get("ipk", "Data tidak tersedia"))

print("\nMengubah nilai:")
mahasiswa["usia"] = 21
print("Setelah mengubah usia:", mahasiswa)

mahasiswa["ipk"] = 3.75
print("Setelah menambah IPK:", mahasiswa)

print("\nMenghapus item:")
del mahasiswa["usia"]
print("Setelah menghapus usia:", mahasiswa)

print("\nDictionary methods:")
print("Keys:", list(mahasiswa.keys()))
print("Values:", list(mahasiswa.values()))
print("Items:", list(mahasiswa.items()))

print("\nLooping dictionary:")
for key in mahasiswa:
    print(f"{key}: {mahasiswa[key]}")

print("\nLooping items:")
for key, value in mahasiswa.items():
    print(f"{key}: {value}")

print("\nNested dictionary:")
kampus = {
    "fakultas": {"FTIK": ["Informatika", "Sistem Informasi"], "FTI": ["Teknik Elektro", "Teknik Mesin"]},
    "alamat": "Jl. Pendidikan No. 1"
}
print("Kampus:", kampus)
print("Prodi di FTIK:", kampus["fakultas"]["FTIK"])
```
> List dan dictionary adalah struktur data yang paling sering digunakan di Python. List untuk koleksi data terurut, dictionary untuk data key-value.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Cari Barang Termurah*
- Instruksi: Buat list berisi minimal 4 dictionary produk (`nama`, `harga`). Cari dan tampilkan produk termurah menggunakan `min()` dengan parameter `key`.
- Hint: `min(daftar_produk, key=lambda p: p["harga"])`.
- Expected output: Menampilkan nama dan harga produk termurah.

### Langkah 8 — Menggunakan Modul Python
```python
# my_module.py
pi = 3.14159

def hitung_luas_lingkaran(radius):
    return pi * radius * radius

def hitung_keliling_lingkaran(radius):
    return 2 * pi * radius

def celsius_ke_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_ke_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9
```
```python
# use_module.py
import my_module

print(f"Nilai Pi: {my_module.pi}")

radius = 5
luas = my_module.hitung_luas_lingkaran(radius)
keliling = my_module.hitung_keliling_lingkaran(radius)
print(f"Lingkaran dengan radius {radius}")
print(f"Luas: {luas:.2f}")
print(f"Keliling: {keliling:.2f}")

from my_module import celsius_ke_fahrenheit, fahrenheit_ke_celsius

celsius = 25
fahrenheit = celsius_ke_fahrenheit(celsius)
print(f"\n{celsius}°C = {fahrenheit:.2f}°F")

fahrenheit = 98.6
celsius = fahrenheit_ke_celsius(fahrenheit)
print(f"{fahrenheit}°F = {celsius:.2f}°C")

import my_module as mm
print(f"\nMenggunakan alias: Pi = {mm.pi}")
```
> Cara impor modul: `import modul`, `from modul import fungsi`, `from modul import *` (tidak disarankan), `import modul as alias`. Modul bawaan Python: `math`, `random`, `datetime`, `os`, `sys`.

```python
# built_in_modules.py
import math
import random
import datetime
import os

print("Modul math:")
print(f"Nilai Pi: {math.pi}")
print(f"Akar kuadrat dari 16: {math.sqrt(16)}")
print(f"Cos(0): {math.cos(0)}\n")

print("Modul random:")
print(f"Angka acak antara 1 dan 10: {random.randint(1, 10)}")
print(f"Pilihan acak dari list: {random.choice(['apel', 'jeruk', 'mangga'])}")

print("Modul datetime:")
today = datetime.datetime.now()
print(f"Tanggal dan waktu saat ini: {today}")
print(f"Hanya tanggal: {today.date()}")
print(f"Hanya waktu: {today.time()}\n")

print("Modul os:")
print(f"Direktori saat ini: {os.getcwd()}")
print(f"List file dalam direktori: {os.listdir()[:5]}")
```

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Modul String Utils*
- Instruksi: Buat file `string_utils.py` berisi 2 fungsi: `reverse_string(s)` (membalik string) dan `count_vowels(s)` (menghitung jumlah huruf vokal). Import dan gunakan kedua fungsi ini di file lain.
- Expected output: `reverse_string("informatika")` → `"akitamrofni"`, `count_vowels("informatika")` → `5`.

## Hasil Praktikum
Mahasiswa seharusnya telah: mengenal dasar-dasar bahasa Python; menggunakan variabel, tipe data, operator; struktur kendali if-else dan loops; membuat dan menggunakan fungsi; bekerja dengan list dan dictionary; menangani file dan exception; mengembangkan aplikasi sederhana (Todo List) menggunakan konsep OOP.

## Tugas Praktikum
1. **Program Penghitung BMI** (Bobot: 30%). Variabel berat (kg) & tinggi (m), rumus `BMI = berat / (tinggi * tinggi)`, kategori: `< 18.5` Berat badan kurang, `18.5–24.9` Normal, `25–29.9` Berlebih, `>= 30` Obesitas.
2. **Program Pengelolaan Nilai Mahasiswa** (Bobot: 40%). List minimal 5 dictionary (`nama`, `nim`, `nilai_uts`, `nilai_uas`, `nilai_tugas`). Nilai akhir = 30% UTS + 40% UAS + 30% Tugas. Grade: A (≥80), B (70–79), C (60–69), D (50–59), E (<50). Tampilkan tabel lengkap + mahasiswa nilai tertinggi & terendah.
3. **Modul Matematika Python** (Bobot: 30%). Buat `math_operations.py` (fungsi luas/keliling minimal 3 bentuk geometri: persegi, persegi panjang, lingkaran; fungsi konversi suhu minimal 2: Celsius-Fahrenheit, Celsius-Kelvin; minimal 1 konstanta seperti `PI = 3.14159`). Buat `main.py` yang mengimpor modul tersebut, gunakan semua fungsinya, tampilkan hasil rapi, gunakan minimal 2 cara berbeda untuk impor modul/fungsi.

## Format Pengumpulan
- Repository: `pemrograman_web_itera_[NIM]`
- Folder: `[NAMA]_[NIM]_pertemuan4`
- Deadline: Minggu, 27 April 2025, pukul 23:59 WIB. Keterlambatan dikenakan pengurangan nilai 10% per hari.

---
---

# PERTEMUAN 5 — Praktikum Python OOP

**Subjudul:** Pemrograman Berorientasi Objek dengan Python

## Tujuan Praktikum
- Memahami konsep dasar Object-Oriented Programming (OOP)
- Mengimplementasikan Class dan Object dalam Python
- Menerapkan Atribut dan Metode dalam Class
- Menggunakan Constructor dan Self dalam Python
- Implementasi Inheritance (Pewarisan) antar Class
- Menerapkan Encapsulation dan Access Modifiers
- Memahami Polymorphism dan Method Overriding
- Implementasi Abstract Class dan Interface

## Dasar Teori
Object-Oriented Programming (OOP) adalah paradigma pemrograman yang menggunakan konsep "objek" dengan atribut dan metode. Python sepenuhnya mendukung OOP: class, object, inheritance, encapsulation, polymorphism.

**Konsep Utama OOP**

| Konsep | Deskripsi |
|---|---|
| Class | Blueprint untuk membuat objek |
| Object | Instance dari sebuah class (state & behavior) |
| Inheritance | Kemampuan class mewarisi atribut/metode dari class lain |
| Encapsulation | Menyembunyikan detail implementasi & membatasi akses |
| Polymorphism | Objek berbeda merespons metode dengan nama sama |
| Abstraction | Menyederhanakan kompleksitas dengan menyembunyikan detail |

> **Tips Memahami OOP:** Bayangkan class seperti cetakan kue dan objek adalah kue yang dihasilkan. Setiap kue memiliki bentuk sama (metode) tapi isian berbeda (atribut). Inheritance seperti membuat cetakan kue baru berdasarkan cetakan yang sudah ada, dengan tambahan fitur baru.

## Alat dan Bahan
- Python 3.x
- Code Editor: VS Code, PyCharm, atau lainnya
- Terminal untuk menjalankan program Python
- Rekomendasi: gunakan virtual environment jika ingin instal package tambahan

## Langkah Praktikum

### Langkah 1 — Membuat Class dan Object Sederhana
```python
# mahasiswa.py
class Mahasiswa:
    # Atribut Class (shared by all instances)
    jurusan = "Teknik Informatika"

    def __init__(self, nama, nim):
        self.nama = nama
        self.nim = nim

    def display_info(self):
        print(f"Nama: {self.nama}")
        print(f"NIM: {self.nim}")
        print(f"Jurusan: {self.jurusan}")

    def update_nama(self, nama_baru):
        self.nama = nama_baru
        print(f"Nama berhasil diubah menjadi {nama_baru}")

mhs1 = Mahasiswa("Budi Santoso", "TI12345")
mhs2 = Mahasiswa("Ani Wijaya", "TI67890")

print(f"Mahasiswa 1: {mhs1.nama}, NIM: {mhs1.nim}")
print(f"Mahasiswa 2: {mhs2.nama}, NIM: {mhs2.nim}")

print("\nInformasi Mahasiswa 1:")
mhs1.display_info()
print("\nInformasi Mahasiswa 2:")
mhs2.display_info()

mhs1.update_nama("Budi Prakoso")

Mahasiswa.jurusan = "Informatika"
print("\nSetelah perubahan jurusan:")
mhs1.display_info()
mhs2.display_info()
```
> **Penjelasan:** `class Mahasiswa:` mendefinisikan blueprint; `__init__` adalah constructor/initializer; `self` referensi ke instance; `jurusan` adalah class attribute (shared semua instance); `nama`, `nim` adalah instance attributes (unik tiap objek); `display_info()`, `update_nama()` adalah methods.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Status Kelulusan Mahasiswa*
- Instruksi: Tambahkan method baru `is_lulus(self, nilai_rata_rata)` pada class `Mahasiswa` yang mengembalikan `True` jika nilai rata-rata >= 60, `False` jika kurang.
- Expected output: `mhs1.is_lulus(75)` → `True`, `mhs1.is_lulus(50)` → `False`.

### Langkah 2 — Inheritance (Pewarisan)
```python
# inheritance.py
class Kendaraan:
    def __init__(self, merek, tahun):
        self.merek = merek
        self.tahun = tahun
        self.odometer = 0

    def deskripsi(self):
        return f"{self.merek} ({self.tahun})"

    def baca_odometer(self):
        return f"Kendaraan ini telah berjalan sejauh {self.odometer} kilometer"

    def update_odometer(self, km):
        if km >= self.odometer:
            self.odometer = km
        else:
            print("Anda tidak dapat mengubah odometer!")

class Mobil(Kendaraan):
    def __init__(self, merek, tahun, tipe):
        super().__init__(merek, tahun)
        self.tipe = tipe
        self.bensin = 100

    def isi_bensin(self, liter):
        self.bensin += liter
        return f"Bensin diisi sebanyak {liter} liter. Total: {self.bensin}"

    def deskripsi(self):
        base_desc = super().deskripsi()
        return f"{base_desc} - {self.tipe}"

class Motor(Kendaraan):
    def __init__(self, merek, tahun, cc):
        super().__init__(merek, tahun)
        self.cc = cc

    def deskripsi(self):
        return f"{self.merek} ({self.tahun}) - {self.cc}cc"

kendaraan1 = Kendaraan("Generic", 2020)
mobil1 = Mobil("Toyota", 2022, "SUV")
motor1 = Motor("Honda", 2021, 150)

print(kendaraan1.deskripsi())
print(mobil1.deskripsi())
print(motor1.deskripsi())

mobil1.update_odometer(1500)
print(mobil1.baca_odometer())
print(mobil1.isi_bensin(20))
```
> **Penjelasan:** `class Mobil(Kendaraan)` — `Mobil` subclass dari `Kendaraan`; `super().__init__(...)` memanggil constructor parent; `deskripsi()` di `Mobil`/`Motor` adalah Method Overriding.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Class Truk*
- Instruksi: Buat class baru `Truk` yang mewarisi dari `Kendaraan`, dengan atribut tambahan `kapasitas_muatan` (kg) dan method `muat_barang(berat)` yang mengembalikan pesan berhasil/gagal tergantung apakah berat melebihi kapasitas.
- Expected output: Membuat instance `Truk`, `muat_barang(500)` menghasilkan pesan sesuai kapasitas.

### Langkah 3 — Encapsulation dan Access Modifiers
```python
# encapsulation.py
class Student:
    def __init__(self, name, nim):
        self.name = name           # Public attribute
        self._program = "Teknik"   # Protected attribute (konvensi)
        self.__id = "2023-" + nim  # Private attribute

    def display_info(self):
        return f"Name: {self.name}, Program: {self._program}"

    @property
    def program(self):
        return self._program

    @program.setter
    def program(self, value):
        if value in ["Teknik", "Sains", "Bisnis"]:
            self._program = value
        else:
            print("Program tidak valid")

student1 = Student("Budi", "12345")

print(f"Nama: {student1.name}")
print(f"Program (protected): {student1._program}")

try:
    print(student1.__id)  # Error!
except AttributeError as e:
    print(f"Error: {e}")

print(f"ID (dengan name mangling): {student1._Student__id}")

print(f"Program via property: {student1.program}")
student1.program = "Sains"
print(f"Program setelah diubah: {student1.program}")

student1.program = "Hukum"  # Akan menampilkan "Program tidak valid"
print(f"Program tetap: {student1.program}")
```
> **Access Modifiers di Python:** Public (tanpa underscore), Protected (`_program`, hanya konvensi), Private (`__id`, Python melakukan "name mangling"). `@property` membuat getter/setter yang lebih pythonic.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *NIM Read-Only*
- Instruksi: Modifikasi class `Student` supaya atribut `nim` **tidak bisa diubah** setelah objek dibuat, menggunakan `@property` tanpa setter (atau setter yang selalu menolak dan mencetak pesan error).
- Expected output: Mencoba `student1.nim = "123"` menghasilkan error atau pesan bahwa NIM tidak bisa diubah.

### Langkah 4 — Polymorphism dan Method Overriding
```python
# polymorphism.py
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Cow(Animal):
    def speak(self):
        return f"{self.name} says Moo!"

def animal_sound(animal):
    return animal.speak()

dog = Dog("Buddy")
cat = Cat("Whiskers")
cow = Cow("Milly")

print(animal_sound(dog))
print(animal_sound(cat))
print(animal_sound(cow))

animals = [Dog("Rex"), Cat("Felix"), Cow("Betty")]
for animal in animals:
    print(animal.speak())
```
> **Penjelasan:** Semua class punya method `speak()` dengan implementasi berbeda. `animal_sound()` bisa menerima objek apa pun yang punya method `speak()` — "Duck typing": Python tidak peduli tipe objek, selama objek punya method yang dipanggil.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Tambah Hewan Baru*
- Instruksi: Tambahkan 2 class baru `Bird` dan `Elephant` yang mewarisi dari `Animal`, masing-masing dengan implementasi `speak()` sendiri. Masukkan ke list `animals`, buktikan `animal_sound()` tetap bekerja tanpa modifikasi.
- Expected output: Loop `animals` mencetak suara masing-masing hewan termasuk 2 hewan baru.

### Langkah 5 — Abstract Classes dan Interface
```python
# abstract_class.py
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        """Method ini harus diimplementasikan oleh subclass"""
        pass

    @abstractmethod
    def perimeter(self):
        """Method ini harus diimplementasikan oleh subclass"""
        pass

    def describe(self):
        """Method non-abstract (tidak wajib di-override)"""
        return "Ini adalah bentuk geometris"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def describe(self):
        return f"Ini adalah persegi panjang dengan lebar {self.width} dan panjang {self.height}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        import math
        return math.pi * self.radius ** 2

    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

try:
    shape = Shape()  # Akan menghasilkan TypeError
except TypeError as e:
    print(f"Error saat membuat instance dari Shape: {e}")

rectangle = Rectangle(5, 4)
circle = Circle(3)

print(f"Luas persegi panjang: {rectangle.area()}")
print(f"Keliling persegi panjang: {rectangle.perimeter()}")
print(f"Deskripsi persegi panjang: {rectangle.describe()}")
print(f"Luas lingkaran: {circle.area():.2f}")
print(f"Keliling lingkaran: {circle.perimeter():.2f}")
print(f"Deskripsi lingkaran: {circle.describe()}")
```
> **Implementasi Interface di Python:** Tidak ada keyword "interface" seperti Java, tetapi bisa diimplementasikan dengan abstract base class di mana semua method abstract, memaksa subclass mengimplementasikan semua method yang ditentukan.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Shape: Triangle*
- Instruksi: Buat class `Triangle(Shape)` yang mengimplementasikan `area()` (rumus `0.5 * alas * tinggi`) dan `perimeter()` (jumlah 3 sisi).
- Expected output: Menampilkan luas dan keliling segitiga sesuai input.

## Tugas Praktikum — Sistem Manajemen Perpustakaan Sederhana
Fokus pada implementasi konsep class, inheritance, encapsulation, dan polymorphism.

**Persyaratan:**
- Abstract class `LibraryItem` sebagai dasar semua item perpustakaan
- Minimal 2 subclass (contoh: `Book` dan `Magazine`) yang mewarisi `LibraryItem`
- Setiap subclass mengimplementasikan minimal satu method abstract dari parent
- Class `Library` untuk menyimpan & mengelola koleksi item perpustakaan
- Encapsulation dengan access modifiers (protected/private) untuk data penting
- Property decorator untuk minimal satu atribut di salah satu class
- Sistem minimal bisa: menambahkan item, menampilkan daftar item, mencari item berdasarkan judul atau id

> **Tips Pengerjaan:** buat struktur sederhana namun menerapkan konsep OOP dengan benar; dokumentasi berupa komentar di setiap class dan method penting.

**Kriteria Penilaian:**
| Aspek | Bobot |
|---|---|
| Penggunaan Abstract Class dan Inheritance | 30% |
| Implementasi Encapsulation | 25% |
| Penerapan Polymorphism | 20% |
| Fungsionalitas Program | 15% |
| Dokumentasi Kode | 10% |

## Hasil Praktikum
Mahasiswa seharusnya memahami dan menerapkan konsep dasar OOP; membuat class dan object; menguasai atribut dan metode; mengimplementasikan inheritance; menerapkan encapsulation; memahami polymorphism dan method overriding; menggunakan abstract class dan interface; membuat aplikasi berbasis OOP yang lebih terstruktur dan mudah dipelihara.

## Format Pengumpulan
- Repository (pakai yang sudah ada): `pemrograman_python_itera_[NIM]` (contoh: `pemrograman_python_itera_119140001`)
- Folder: `[NAMA]_[NIM]_pertemuan5` (contoh: `johndoe_119140001_pertemuan5`)
- Deadline: Rabu, 7 Mei 2025, pukul 23:59 WIB. Keterlambatan dikenakan pengurangan nilai 10% per hari.

---
---

# PERTEMUAN 6 — Praktikum Pyramid Framework

**Subjudul:** Membuat Aplikasi CRUD Sederhana dengan Pyramid dan PostgreSQL

## Tujuan Praktikum
- Memahami konsep dasar Pyramid Framework dalam pengembangan web
- Menggunakan cookiecutter untuk membuat struktur proyek Pyramid
- Mengonfigurasi koneksi database PostgreSQL dengan SQLAlchemy
- Membuat model data menggunakan SQLAlchemy ORM
- Mengimplementasikan migrasi database dengan Alembic
- Membuat view dan route untuk operasi CRUD sederhana
- Mengembangkan aplikasi web CRUD pengelolaan data Mahasiswa

## Dasar Teori
Pyramid adalah framework Python yang bersifat minimalis namun sangat fleksibel. Berbeda dengan Django ("batteries included"), Pyramid mengutamakan fleksibilitas dengan pendekatan "pay only for what you eat".

**Kelebihan Pyramid:** Fleksibilitas (proyek kecil-besar), Modular, Konfigurasi Deklaratif, Database Agnostic, Skalabilitas, dukungan Template Engine (Jinja2, Mako, Chameleon).

> **Pyramid vs Framework Lainnya:** Pyramid berada di tengah antara micro-framework seperti Flask dan full-stack framework seperti Django — fleksibel seperti Flask, tapi lebih terstruktur, dan bisa berkembang dari sederhana ke kompleks tanpa ganti framework.

## Alat dan Bahan
- Python 3.7+
- PostgreSQL: database untuk menyimpan data
- Text Editor/IDE: VSCode, PyCharm, dll.
- Command Line/Terminal
- Git (opsional)
- Rekomendasi setup PostgreSQL: PostgreSQL App (macOS), pgAdmin, DBeaver, atau Docker

## Langkah Praktikum

### Langkah 1 — Persiapan Lingkungan Pengembangan
```bash
# Buat folder untuk proyek
mkdir pyramid_mahasiswa
cd pyramid_mahasiswa

# Buat virtual environment
python -m venv venv

# Aktifkan virtual environment (Windows)
venv\Scripts\activate
# Aktifkan virtual environment (macOS/Linux)
source venv/bin/activate
```
Terminal dengan virtual environment aktif akan menampilkan prefix `(venv) $`.

```bash
# Upgrade pip
pip install --upgrade pip setuptools

# Install cookiecutter untuk template proyek
pip install cookiecutter

# Install pyramid dan dependensi dasar
pip install pyramid pyramid_debugtoolbar waitress pyramid_jinja2
```
> **Troubleshooting:** Windows — pastikan execution policy PowerShell mengizinkan aktivasi (`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`). macOS/Linux — pastikan `venv/bin/activate` executable (`chmod +x venv/bin/activate`). Jika `python` tidak ditemukan, coba `python3`.

### Langkah 2 — Membuat Proyek Pyramid dengan Cookiecutter
```bash
# Pastikan virtual environment aktif
cookiecutter gh:Pylons/pyramid-cookiecutter-alchemy
```
Input untuk cookiecutter:
```
project_name [Pyramid Scaffold]: pyramid_mahasiswa
repo_name [pyramid_mahasiswa]:
Select template_language:
1 - jinja2
2 - chameleon
3 - mako
Choose from 1, 2, 3 [1]: 1
```
```bash
cd pyramid_mahasiswa
pip install -e ".[testing]"
```
Struktur direktori yang dihasilkan:
```
pyramid_mahasiswa/
├── .coveragerc
├── .gitignore
├── CHANGES.txt
├── MANIFEST.in
├── README.txt
├── development.ini
├── production.ini
├── pytest.ini
├── setup.py
└── pyramid_mahasiswa/
    ├── __init__.py
    ├── alembic/
    │   ├── env.py
    │   ├── README
    │   ├── script.py.mako
    │   └── versions/
    ├── models/
    │   ├── __init__.py
    │   ├── meta.py
    │   └── mymodel.py
    ├── routes.py
    ├── scripts/
    │   ├── __init__.py
    │   └── initialize_db.py
    ├── static/
    ├── templates/
    ├── tests/
    └── views/
        ├── __init__.py
        ├── default.py
        └── notfound.py
```
> Struktur direktori Pyramid mengikuti konvensi Python package. `development.ini`/`production.ini` berisi konfigurasi mode masing-masing.

### Langkah 3 — Konfigurasi Database PostgreSQL
```bash
# Verifikasi PostgreSQL
psql -U postgres -c "SELECT version();"
```
```sql
-- Membuat database
psql -U postgres
CREATE DATABASE pyramid_mahasiswa;
CREATE USER pyramid_user WITH ENCRYPTED PASSWORD 'pyramid_pass';
GRANT ALL PRIVILEGES ON DATABASE pyramid_mahasiswa TO pyramid_user;
\q
```
```bash
pip install psycopg2-binary
```
```ini
# development.ini (bagian sqlalchemy.url)
# Cari dan ganti baris:
sqlalchemy.url = sqlite:///%(here)s/pyramid_mahasiswa.sqlite
# Menjadi:
sqlalchemy.url = postgresql://pyramid_user:pyramid_pass@localhost:5432/pyramid_mahasiswa
```
> **Troubleshooting koneksi database:** pastikan PostgreSQL service berjalan, username/password benar, database sudah dibuat, port 5432 tidak diblokir firewall.

### Langkah 4 — Membuat Model Mahasiswa
```python
# pyramid_mahasiswa/models/mahasiswa.py
from sqlalchemy import Column, Integer, Text, Date
from .meta import Base

class Mahasiswa(Base):
    """ Model untuk tabel mahasiswa """
    __tablename__ = 'mahasiswa'
    id = Column(Integer, primary_key=True)
    nim = Column(Text, unique=True, nullable=False)
    nama = Column(Text, nullable=False)
    jurusan = Column(Text, nullable=False)
    tanggal_lahir = Column(Date)
    alamat = Column(Text)

    def to_dict(self):
        return {
            'id': self.id,
            'nim': self.nim,
            'nama': self.nama,
            'jurusan': self.jurusan,
            'tanggal_lahir': self.tanggal_lahir.isoformat() if self.tanggal_lahir else None,
            'alamat': self.alamat,
        }
```
```python
# pyramid_mahasiswa/models/__init__.py
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import configure_mappers
import zope.sqlalchemy

from .mahasiswa import Mahasiswa
from .mymodel import MyModel

configure_mappers()

def get_engine(settings, prefix='sqlalchemy.'):
    return engine_from_config(settings, prefix)

def get_session_factory(engine):
    factory = sessionmaker()
    factory.configure(bind=engine)
    return factory

def get_tm_session(session_factory, transaction_manager):
    dbsession = session_factory()
    zope.sqlalchemy.register(dbsession, transaction_manager=transaction_manager)
    return dbsession

def includeme(config):
    settings = config.get_settings()
    settings['tm.manager_hook'] = 'pyramid.tm.ThreadLocalManager'
    engine = get_engine(settings)
    session_factory = get_session_factory(engine)
    config.registry['dbsession_factory'] = session_factory
    config.add_request_method(
        lambda r: get_tm_session(session_factory, r.tm),
        'dbsession',
        reify=True
    )
```
```python
# pyramid_mahasiswa/scripts/initialize_db.py
import argparse
import sys
from datetime import date
from pyramid.paster import bootstrap, setup_logging
from sqlalchemy.exc import OperationalError
from .. import models

def setup_models(dbsession):
    mahasiswa1 = models.Mahasiswa(
        nim='12345', nama='Budi Santoso', jurusan='Teknik Informatika',
        tanggal_lahir=date(2000, 5, 15), alamat='Jl. Merdeka No. 123, Bandung'
    )
    mahasiswa2 = models.Mahasiswa(
        nim='54321', nama='Siti Aminah', jurusan='Sistem Informasi',
        tanggal_lahir=date(2001, 8, 22), alamat='Jl. Mawar No. 45, Jakarta'
    )
    dbsession.add(mahasiswa1)
    dbsession.add(mahasiswa2)

def parse_args(argv):
    parser = argparse.ArgumentParser()
    parser.add_argument('config_uri', help='Configuration file, e.g., development.ini')
    return parser.parse_args(argv[1:])

def main(argv=sys.argv):
    args = parse_args(argv)
    setup_logging(args.config_uri)
    env = bootstrap(args.config_uri)
    try:
        with env['request'].tm:
            dbsession = env['request'].dbsession
            setup_models(dbsession)
    except OperationalError:
        print('''
Pyramid is having a problem using your SQL database.
Your database should be up and running before you
initialize your project. Make sure your database server
is running and your connection string in development.ini
is correctly configured.
''')

if __name__ == '__main__':
    main()
```
> **Penjelasan Model:** `BaseModel`/`Mahasiswa` — SQLAlchemy ORM menerjemahkan class Python menjadi tabel database. `__tablename__` menentukan nama tabel. Method `to_dict()` memudahkan konversi model ke JSON untuk API.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Tambah Kolom Email*
- Instruksi: Tambahkan kolom baru `email` (unique, nullable) pada model `Mahasiswa`. Buat migrasi baru dengan `alembic revision --autogenerate` lalu jalankan `alembic upgrade head`.
- Expected output: Tabel `mahasiswa` di database punya kolom `email` baru setelah migrasi (cek dengan `\d mahasiswa` di psql).

### Langkah 5 — Menjalankan Migrasi Database dengan Alembic
```bash
# Verifikasi Alembic
pip list | grep alembic
# Jika tidak ada, install
pip install alembic

# Buat file migrasi
alembic -c development.ini revision --autogenerate -m "create mahasiswa table"

# Jalankan migrasi
alembic -c development.ini upgrade head

# Inisialisasi database dengan data awal
python -m pyramid_mahasiswa.scripts.initialize_db development.ini
```
> **Tentang Alembic:** memungkinkan migrasi bertahap. Bisa mundur ke versi sebelumnya (`alembic downgrade -1`) atau maju ke versi tertentu (`alembic upgrade +1`).

> **Troubleshooting:** pastikan PostgreSQL berjalan & bisa diakses; koneksi string di `development.ini` benar; jika "module not found", pastikan berada di direktori root proyek; jika error saat generate revision, pastikan model `Mahasiswa` sudah benar dan ter-import.

### Langkah 6 — Membuat Views untuk CRUD Mahasiswa
```python
# pyramid_mahasiswa/views/mahasiswa.py
import datetime
from pyramid.view import view_config
from pyramid.httpexceptions import HTTPFound, HTTPNotFound, HTTPBadRequest
from ..models import Mahasiswa

@view_config(route_name='mahasiswa_list', renderer='json')
def mahasiswa_list(request):
    """View untuk menampilkan daftar mahasiswa"""
    dbsession = request.dbsession
    mahasiswas = dbsession.query(Mahasiswa).all()
    return {'mahasiswas': [m.to_dict() for m in mahasiswas]}

@view_config(route_name='mahasiswa_detail', renderer='json')
def mahasiswa_detail(request):
    """View untuk melihat detail satu mahasiswa"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})
    return {'mahasiswa': mahasiswa.to_dict()}

@view_config(route_name='mahasiswa_add', request_method='POST', renderer='json')
def mahasiswa_add(request):
    """View untuk menambahkan mahasiswa baru"""
    try:
        json_data = request.json_body
        required_fields = ['nim', 'nama', 'jurusan']
        for field in required_fields:
            if field not in json_data:
                return HTTPBadRequest(json_body={'error': f'Field {field} wajib diisi'})

        tanggal_lahir = None
        if 'tanggal_lahir' in json_data and json_data['tanggal_lahir']:
            try:
                tanggal_lahir = datetime.datetime.fromisoformat(json_data['tanggal_lahir'])
            except ValueError:
                return HTTPBadRequest(json_body={'error': 'Format tanggal tidak valid'})

        mahasiswa = Mahasiswa(
            nim=json_data['nim'], nama=json_data['nama'], jurusan=json_data['jurusan'],
            tanggal_lahir=tanggal_lahir, alamat=json_data.get('alamat')
        )
        dbsession = request.dbsession
        dbsession.add(mahasiswa)
        dbsession.flush()
        return {'success': True, 'mahasiswa': mahasiswa.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='mahasiswa_update', request_method='PUT', renderer='json')
def mahasiswa_update(request):
    """View untuk mengupdate data mahasiswa"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})
    try:
        json_data = request.json_body
        if 'nim' in json_data: mahasiswa.nim = json_data['nim']
        if 'nama' in json_data: mahasiswa.nama = json_data['nama']
        if 'jurusan' in json_data: mahasiswa.jurusan = json_data['jurusan']
        if 'alamat' in json_data: mahasiswa.alamat = json_data['alamat']
        if 'tanggal_lahir' in json_data:
            if json_data['tanggal_lahir']:
                try:
                    mahasiswa.tanggal_lahir = datetime.datetime.fromisoformat(json_data['tanggal_lahir'])
                except ValueError:
                    return HTTPBadRequest(json_body={'error': 'Format tanggal tidak valid'})
            else:
                mahasiswa.tanggal_lahir = None
        return {'success': True, 'mahasiswa': mahasiswa.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='mahasiswa_delete', request_method='DELETE', renderer='json')
def mahasiswa_delete(request):
    """View untuk menghapus data mahasiswa"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})
    dbsession.delete(mahasiswa)
    return {'success': True, 'message': f'Mahasiswa dengan id {mahasiswa_id} berhasil dihapus'}
```
> `renderer='json'` mengonversi return value view menjadi JSON response secara otomatis.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Filter Berdasarkan Jurusan*
- Instruksi: Tambahkan view function dan route baru `GET /api/mahasiswa/jurusan/{jurusan}` yang mengembalikan daftar mahasiswa dari jurusan tertentu saja.
- Hint: gunakan `.filter_by(jurusan=...)`.
- Expected output: `curl http://localhost:6543/api/mahasiswa/jurusan/Teknik%20Informatika` mengembalikan hanya mahasiswa dari jurusan tersebut.

### Langkah 7 — Membuat Routes dan Update routes.py
```python
# pyramid_mahasiswa/routes.py
def includeme(config):
    """Add routes to the config."""
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')
    config.add_route('mahasiswa_list', '/api/mahasiswa', request_method='GET')
    config.add_route('mahasiswa_detail', '/api/mahasiswa/{id}', request_method='GET')
    config.add_route('mahasiswa_add', '/api/mahasiswa', request_method='POST')
    config.add_route('mahasiswa_update', '/api/mahasiswa/{id}', request_method='PUT')
    config.add_route('mahasiswa_delete', '/api/mahasiswa/{id}', request_method='DELETE')
```
> **Penting!** Parameter `request_method` sangat penting untuk membedakan endpoint dengan URL sama tapi method berbeda. Contoh: `GET /api/mahasiswa` → `mahasiswa_list`; `POST /api/mahasiswa` → `mahasiswa_add`; `GET /api/mahasiswa/1` → `mahasiswa_detail`; `PUT /api/mahasiswa/1` → `mahasiswa_update`; `DELETE /api/mahasiswa/1` → `mahasiswa_delete`.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Validasi NIM Minimal*
- Instruksi: Pada view `mahasiswa_add`, tambahkan validasi: jika panjang `nim` kurang dari 5 karakter, kembalikan `HTTPBadRequest` dengan pesan error yang jelas.
- Expected output: POST dengan `nim` pendek (misal "123") menghasilkan response error 400, bukan data tersimpan.

### Langkah 8 — Menjalankan dan Menguji API
```bash
# Jalankan server development
pserve development.ini --reload
```
Server berjalan default di `http://localhost:6543`.

```bash
# Mendapatkan daftar mahasiswa
curl -X GET http://localhost:6543/api/mahasiswa

# Mendapatkan detail mahasiswa
curl -X GET http://localhost:6543/api/mahasiswa/1

# Menambahkan mahasiswa baru
curl -X POST http://localhost:6543/api/mahasiswa \
-H "Content-Type: application/json" \
-d '{
"nim": "67890",
"nama": "Ahmad Fadli",
"jurusan": "Teknik Elektro",
"tanggal_lahir": "2001-11-05",
"alamat": "Jl. Mawar No. 10, Surabaya"
}'

# Mengupdate data mahasiswa
curl -X PUT http://localhost:6543/api/mahasiswa/1 \
-H "Content-Type: application/json" \
-d '{
"jurusan": "Informatika",
"alamat": "Jl. Melati No. 5, Bandung"
}'

# Menghapus data mahasiswa
curl -X DELETE http://localhost:6543/api/mahasiswa/3
```
> Alternatif pengujian API: browser (untuk GET), Postman, Insomnia, atau VS Code REST Client Extension.

> **Troubleshooting:** pastikan server berjalan, cek port (default 6543), cek log error di terminal, gunakan `http://127.0.0.1:6543` jika `localhost` tidak berfungsi.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Uji Semua Endpoint*
- Instruksi: Uji seluruh endpoint CRUD (GET list, GET detail, POST, PUT, DELETE) menggunakan Postman atau curl, pastikan semua mengembalikan response sesuai ekspektasi. Murni self-check, tidak perlu dikumpulkan.
- Expected output: Semua 5 endpoint merespons tanpa error tak terduga (status code sesuai).

## Hasil Praktikum
Mahasiswa seharusnya memahami konsep dasar Pyramid Framework, mampu membuat struktur proyek dengan cookiecutter, mengonfigurasi koneksi database PostgreSQL, menguasai SQLAlchemy ORM, melakukan migrasi database dengan Alembic, mengimplementasikan view function CRUD, memahami sistem routing di Pyramid, dan mampu mengembangkan RESTful API dari awal hingga akhir.

Aplikasi yang dibangun: REST API Manajemen Mahasiswa dengan fitur CRUD, validasi input dasar, penyimpanan PostgreSQL, dan migrasi Alembic.

## Tugas Praktikum — Aplikasi Manajemen Matakuliah dengan Pyramid
Buat aplikasi API sederhana untuk manajemen matakuliah.

**Persyaratan:**
- Satu model `Matakuliah` dengan atribut: `id`, `kode_mk`, `nama_mk`, `sks`, `semester`
- API endpoint untuk operasi dasar (GET, POST, PUT, DELETE)
- API berfungsi dan bisa diuji dengan curl/Postman

**Langkah pengerjaan:** gunakan kode praktikum sebagai dasar, ubah model dan view sesuai matakuliah, ingat tambahkan `request_method` pada route, jalankan migrasi database sebelum menguji API.

**Kriteria Penilaian:**
| Aspek | Bobot |
|---|---|
| Model Data | 30% |
| API Endpoints | 40% |
| Dokumentasi & Kerapian Kode | 30% |

## Format Pengumpulan
- Repository: `pemrograman_web_itera_[NIM]`
- Folder: `[NAMA]_[NIM]_pertemuan6`, sertakan README.md berisi instruksi instalasi dan cara menjalankan aplikasi
- Deadline: 15 Mei 2025, 23:59 WIB

---
---

# PERTEMUAN 7 — Basis Data (SQLAlchemy, Alembic, PostgreSQL, Pyramid) + Bonus React Frontend

## Tujuan Pertemuan
- Mempersiapkan lingkungan pengembangan dengan Python dan PostgreSQL
- Mengkonfigurasi koneksi basis data menggunakan SQLAlchemy
- Membuat dan mengelola model data menggunakan SQLAlchemy ORM
- Menerapkan migrasi basis data dengan Alembic
- Membuat layanan REST API dengan kerangka kerja Pyramid
- Mengintegrasikan model data dalam endpoint API
- Mengimplementasikan validasi data menggunakan Schema
- Membangun service layer untuk logika bisnis aplikasi

## Dasar Teori
- **SQLAlchemy:** toolkit SQL Python dan ORM yang memberi fleksibilitas penuh, menggunakan Python Database API (DBAPI) untuk berinteraksi dengan database.
- **Alembic:** alat migrasi database untuk SQLAlchemy, mengelola versi database, upgrade/downgrade, menjaga konsistensi database dalam lingkungan tim.
- **Pyramid:** kerangka kerja web Python untuk fleksibilitas dan skalabilitas, cocok untuk RESTful services.

**Komponen Utama Arsitektur Aplikasi**

| Komponen | Deskripsi |
|---|---|
| Models | Representasi data via SQLAlchemy ORM, mendefinisikan tabel & relasi |
| Views | Endpoint API yang menangani request HTTP dan merespons data |
| Schemas | Struktur validasi untuk integritas data masukan/keluaran |
| Services | Lapisan logika bisnis yang menghubungkan views dengan models |
| Migration | Perubahan skema database yang dikelola Alembic |

> **Praktik Terbaik:** kita mengimplementasikan pola arsitektur MVC (Model-View-Controller) dengan sedikit modifikasi untuk RESTful API. Pemisahan concerns antara model data, validasi, logika bisnis, dan presentasi sangat penting untuk aplikasi yang mudah dipelihara.

## Alat dan Bahan
- Python 3.8+
- PostgreSQL 12+
- Code Editor: VS Code, PyCharm, dll.
- Terminal/Command Prompt
- Git
- Postman/Insomnia untuk menguji API
- Rekomendasi: Docker untuk PostgreSQL container, atau layanan cloud seperti ElephantSQL

**Paket yang dibutuhkan (`requirements.txt`):**
```
# Web Framework
pyramid==2.0.1
pyramid-debugtoolbar==4.9
waitress==2.1.2

# Database
sqlalchemy==2.0.4
psycopg2-binary==2.9.5
alembic==1.9.4

# Schema Validation
marshmallow==3.19.0
pyramid-marshmallow==0.1.0

# Development Tools
pytest==7.2.1
webtest==3.0.0
pyramid-ipython==0.2.1

# Utility
python-dotenv==1.0.0
pydantic==1.10.5
```

## Langkah Studi Kasus

### Langkah 1 — Persiapan Lingkungan
```bash
# 1.1 Membuat Virtual Environment
mkdir products-api
cd products-api
python -m venv venv
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate
pip install cookiecutter
```
```bash
# 1.2 Membuat Scaffold Proyek Pyramid
cookiecutter gh:Pylons/pyramid-cookiecutter-starter
# project_name: ProductsAPI
# repo_name: products-api
# Select template_language: 1 - jinja2
# Select backend: 2 - sqlalchemy
```
Struktur proyek yang dihasilkan:
```
products-api/
├── CHANGES.txt
├── MANIFEST.in
├── README.txt
├── development.ini
├── production.ini
├── pytest.ini
├── setup.py
└── products-api/
    ├── __init__.py
    ├── alembic/
    │   ├── env.py
    │   ├── README
    │   ├── script.py.mako
    │   └── versions/
    ├── models/
    │   ├── __init__.py
    │   ├── meta.py
    │   └── mymodel.py
    ├── routes.py
    ├── scripts/
    │   └── initialize_db.py
    ├── static/
    ├── templates/
    └── views/
        ├── __init__.py
        ├── default.py
        └── notfound.py
```
```bash
# 1.4 Masuk ke direktori dan instal dependencies
cd products-api
pip install -e ".[testing]"
pip install python-dotenv marshmallow pyramid-marshmallow pydantic
```

### Langkah 2 — Konfigurasi Database
```env
# .env
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=products-api_db

APP_SECRET=supersecretkey
DEBUG=true
```
```python
# products-api/__init__.py
import os
from pyramid.config import Configurator
from dotenv import load_dotenv

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application. """
    load_dotenv()
    settings['sqlalchemy.url'] = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"

    with Configurator(settings=settings) as config:
        config.add_renderer('json', JSON(indent=4))
        config.add_cors_preflight_handler()
        config.add_route('cors', '{path:.*}')
        config.add_view(cors_options_view, route_name='cors', renderer='json')

        config.include('.models')
        config.include('pyramid_jinja2')
        config.include('.routes')
        config.scan()
    return config.make_wsgi_app()
```
```sql
-- Membuat Database PostgreSQL
psql -U postgres
CREATE DATABASE products-api_db;
\l
\q
```
```bash
# Alternatif dengan Docker
docker run --name pg-products-api -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=products-api_db -p 5432:5432 -d postgres
```
```python
# products-api/alembic/env.py (tambahan)
from dotenv import load_dotenv
import os

load_dotenv()
url = config.get_main_option("sqlalchemy.url")
if not url:
    url = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
```
> Pemisahan konfigurasi database ke file `.env` adalah praktik yang baik untuk keamanan dan fleksibilitas lingkungan pengembangan.

### Langkah 3 — Pembuatan Model Data
```python
# products-api/models/meta.py
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import MetaData

NAMING_CONVENTION = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=NAMING_CONVENTION)
Base = declarative_base(metadata=metadata)
```
```python
# products-api/models/base.py
from datetime import datetime
from sqlalchemy import Column, DateTime, Integer
from .meta import Base

class BaseModel(Base):
    """Base model class for all models."""
    __abstract__ = True
    id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        """Convert model to dictionary."""
        return {column.name: getattr(self, column.name) for column in self.__table__.columns}
```
```python
# products-api/models/product.py
from sqlalchemy import Column, String, Float, Text, Boolean
from .base import BaseModel

class Product(BaseModel):
    """Model for products."""
    __tablename__ = 'products'
    name = Column(String(100), nullable=False, index=True)
    description = Column(Text, nullable=True)
    price = Column(Float, nullable=False)
    sku = Column(String(50), unique=True, nullable=False)
    is_active = Column(Boolean, default=True)

    def __repr__(self):
        return f"<Product(name='{self.name}', sku='{self.sku}')>"
```
```python
# products-api/models/__init__.py
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker, configure_mappers
import zope.sqlalchemy

from .product import Product

configure_mappers()

def get_engine(settings, prefix='sqlalchemy.'):
    return engine_from_config(settings, prefix)

def get_session_factory(engine):
    factory = sessionmaker()
    factory.configure(bind=engine)
    return factory

def get_tm_session(session_factory, transaction_manager):
    """ Get a sqlalchemy session managed by the transaction manager. """
    dbsession = session_factory()
    zope.sqlalchemy.register(dbsession, transaction_manager=transaction_manager)
    return dbsession

def includeme(config):
    """ Initialize the model for a Pyramid app. """
    settings = config.get_settings()
    settings['tm.manager_hook'] = 'pyramid_tm.explicit_manager'
    settings['sqlalchemy.url'] = settings['sqlalchemy.url']
    engine = get_engine(settings)
    session_factory = get_session_factory(engine)
    config.registry['dbsession_factory'] = session_factory
    config.add_request_method(
        lambda r: get_tm_session(session_factory, r.tm),
        'dbsession',
        reify=True
    )
```
> **Penjelasan Model:** `BaseModel` = model abstrak menyediakan kolom dasar (`id`, `created_at`, `updated_at`). `Product` = model konkret. SQLAlchemy ORM menerjemahkan class Python menjadi tabel database. Method `to_dict()` memudahkan konversi ke JSON untuk API.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Tambah Kolom Category*
- Instruksi: Tambahkan kolom `category` (String, nullable) pada model `Product`, buat migrasi baru dengan Alembic.
- Expected output: Tabel `products` memiliki kolom `category` baru setelah migrasi dijalankan.

### Langkah 4 — Migrasi Database dengan Alembic
```bash
# 4.1 Inisialisasi skema migrasi
alembic -c development.ini revision --autogenerate -m "Create product model"

# 4.2 Terapkan migrasi
alembic -c development.ini upgrade head
psql -U postgres -d products-api_db -c "\dt"
```
Contoh isi file migrasi yang dihasilkan:
```python
# products-api/alembic/versions/1234_create_product_model.py
"""Create product model

Revision ID: 1234
Revises:
Create Date: 2023-01-01 00:00:00.000000
"""
from alembic import op
import sqlalchemy as sa

revision = '1234'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    op.create_table('products',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.DateTime(), nullable=True),
        sa.Column('updated_at', sa.DateTime(), nullable=True),
        sa.Column('name', sa.String(length=100), nullable=False),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('price', sa.Float(), nullable=False),
        sa.Column('sku', sa.String(length=50), nullable=False),
        sa.Column('is_active', sa.Boolean(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('sku')
    )
    op.create_index(op.f('ix_products_name'), 'products', ['name'], unique=False)

def downgrade():
    op.drop_index(op.f('ix_products_name'), table_name='products')
    op.drop_table('products')
```
> **Penjelasan:** Alembic bekerja dengan Autogenerate (bandingkan model dengan database), Revisions (file migrasi berisi perubahan skema), Upgrade/Downgrade (menerapkan/membatalkan perubahan).

```python
# products-api/scripts/initialize_db.py
import transaction
from ..models import get_tm_session
from ..models.product import Product

def main():
    from pyramid.paster import get_appsettings, setup_logging
    from sqlalchemy import engine_from_config

    config_uri = 'development.ini'
    setup_logging(config_uri)
    settings = get_appsettings(config_uri)
    engine = engine_from_config(settings, 'sqlalchemy.')

    session_factory = get_session_factory(engine)
    with transaction.manager:
        dbsession = get_tm_session(session_factory, transaction.manager)
        products = [
            Product(name='Laptop Premium', description='High performance laptop', price=1299.99, sku='LP1001', is_active=True),
            Product(name='Smartphone Pro', description='Latest model smartphone', price=899.99, sku='SP2002', is_active=True)
        ]
        dbsession.add_all(products)

if __name__ == '__main__':
    main()
```
```bash
python -m products-api.scripts.initialize_db
```

### Langkah 5 — Pembuatan Schema Validasi
```bash
mkdir -p products-api/schemas
touch products-api/schemas/__init__.py
touch products-api/schemas/product.py
```
```python
# products-api/schemas/product.py
from marshmallow import Schema, fields, validate

class ProductSchema(Schema):
    """Schema for product data validation."""
    id = fields.Integer(dump_only=True)
    name = fields.String(required=True, validate=validate.Length(min=2, max=100))
    description = fields.String(validate=validate.Length(max=500))
    price = fields.Float(required=True, validate=validate.Range(min=0.01))
    sku = fields.String(required=True, validate=validate.Length(min=5, max=50))
    is_active = fields.Boolean()
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)

class ProductCreateSchema(ProductSchema):
    """Schema for product creation (without read-only fields)."""
    pass

class ProductUpdateSchema(Schema):
    """Schema for product updates (only updatable fields)."""
    name = fields.String(validate=validate.Length(min=2, max=100))
    description = fields.String(validate=validate.Length(max=500))
    price = fields.Float(validate=validate.Range(min=0.01))
    is_active = fields.Boolean()
```
```python
# products-api/__init__.py (tambahkan ini di main())
config.include('pyramid_marshmallow')
config.add_settings({
    'marshmallow': { 'strict': True }
})
```
> **Penjelasan Schema:** `ProductSchema` = schema lengkap semua field; `ProductCreateSchema` = validasi pembuatan produk baru; `ProductUpdateSchema` = validasi update (hanya field yang bisa diupdate). Marshmallow otomatis memvalidasi input sesuai aturan.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Batas Harga Maksimal*
- Instruksi: Tambahkan validasi tambahan pada `ProductSchema`: field `price` maksimal 100.000.000, gunakan `validate.Range(min=0.01, max=100_000_000)`.
- Expected output: Mengirim `price: 999999999` melalui POST menghasilkan error validasi, bukan tersimpan ke database.

### Langkah 6 — Implementasi Service Layer
```bash
mkdir -p products-api/services
touch products-api/services/__init__.py
touch products-api/services/product.py
```
```python
# products-api/services/product.py
from typing import List, Optional
from ..models.product import Product
from ..schemas.product import ProductCreateSchema, ProductUpdateSchema, ProductSchema

class ProductService:
    """Service for product operations."""

    @staticmethod
    def get_all_products(dbsession) -> List[Product]:
        """Get all active products."""
        return dbsession.query(Product).filter(Product.is_active == True).all()

    @staticmethod
    def get_product_by_id(dbsession, product_id: int) -> Optional[Product]:
        """Get product by ID."""
        return dbsession.query(Product).get(product_id)

    @staticmethod
    def get_product_by_sku(dbsession, sku: str) -> Optional[Product]:
        """Get product by SKU."""
        return dbsession.query(Product).filter(Product.sku == sku).first()

    @staticmethod
    def create_product(dbsession, product_data: dict) -> Product:
        """Create a new product."""
        product = Product(**product_data)
        dbsession.add(product)
        dbsession.flush()
        return product

    @staticmethod
    def update_product(dbsession, product: Product, update_data: dict) -> Product:
        """Update existing product."""
        for field, value in update_data.items():
            setattr(product, field, value)
        dbsession.add(product)
        dbsession.flush()
        return product

    @staticmethod
    def delete_product(dbsession, product: Product) -> None:
        """Soft delete a product."""
        product.is_active = False
        dbsession.add(product)
        dbsession.flush()
```
> **Pemisahan Logika Bisnis:** views lebih sederhana & fokus pada HTTP; logika bisnis di-reuse dari berbagai endpoint; lebih mudah di-test terpisah; perubahan logika bisnis tidak mempengaruhi struktur API.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Pencarian Produk*
- Instruksi: Tambahkan method `search_by_name(dbsession, keyword)` pada `ProductService` yang mencari produk berdasarkan kecocokan sebagian nama (`.filter(Product.name.ilike(f"%{keyword}%"))`).
- Expected output: Memanggil `ProductService.search_by_name(dbsession, "lap")` mengembalikan produk seperti "Laptop Premium".

### Langkah 7 — Pembuatan API Endpoints
```python
# products-api/routes.py
def includeme(config):
    """Configure routes."""
    config.add_route('home', '/')
    config.add_route('api_v1.products', '/api/v1/products')
    config.add_route('api_v1.product', '/api/v1/products/{id}')
```
```python
# products-api/views/product.py
from pyramid.view import view_config
from pyramid.response import Response
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest, HTTPNoContent
from ..models.product import Product
from ..services.product import ProductService
from ..schemas.product import ProductSchema, ProductCreateSchema, ProductUpdateSchema

@view_config(route_name='api_v1.products', request_method='GET', renderer='json')
def get_products(request):
    """Get all active products."""
    products = ProductService.get_all_products(request.dbsession)
    schema = ProductSchema(many=True)
    return schema.dump(products)

@view_config(route_name='api_v1.products', request_method='POST', renderer='json')
def create_product(request):
    """Create a new product."""
    schema = ProductCreateSchema()
    try:
        product_data = schema.load(request.json_body)
    except ValidationError as err:
        raise HTTPBadRequest(json={'errors': err.messages})

    if ProductService.get_product_by_sku(request.dbsession, product_data['sku']):
        raise HTTPBadRequest(json={'errors': {'sku': ['Product with this SKU already exists']}})

    product = ProductService.create_product(request.dbsession, product_data)
    return ProductSchema().dump(product)

@view_config(route_name='api_v1.product', request_method='GET', renderer='json')
def get_product(request):
    """Get product by ID."""
    product_id = int(request.matchdict['id'])
    product = ProductService.get_product_by_id(request.dbsession, product_id)
    if not product or not product.is_active:
        raise HTTPNotFound()
    return ProductSchema().dump(product)

@view_config(route_name='api_v1.product', request_method='PUT', renderer='json')
def update_product(request):
    """Update existing product."""
    product_id = int(request.matchdict['id'])
    product = ProductService.get_product_by_id(request.dbsession, product_id)
    if not product or not product.is_active:
        raise HTTPNotFound()

    schema = ProductUpdateSchema()
    try:
        update_data = schema.load(request.json_body)
    except ValidationError as err:
        raise HTTPBadRequest(json={'errors': err.messages})

    updated_product = ProductService.update_product(request.dbsession, product, update_data)
    return ProductSchema().dump(updated_product)

@view_config(route_name='api_v1.product', request_method='DELETE')
def delete_product(request):
    """Soft delete a product."""
    product_id = int(request.matchdict['id'])
    product = ProductService.get_product_by_id(request.dbsession, product_id)
    if not product or not product.is_active:
        raise HTTPNotFound()
    ProductService.delete_product(request.dbsession, product)
    return HTTPNoContent()
```
```python
# products-api/views/__init__.py
from .product import get_products, create_product, get_product, update_product, delete_product
```
```python
# products-api/views/cors.py
from pyramid.view import view_config

@view_config(route_name='cors', renderer='json')
def cors_options_view(request):
    request.response.headers.update({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
        'Access-Control-Max-Age': '1728000',
    })
    return {}
```
> **Struktur Endpoint:** `GET /api/v1/products` (daftar produk aktif), `POST /api/v1/products` (buat produk baru), `GET /api/v1/products/{id}` (detail), `PUT /api/v1/products/{id}` (update), `DELETE /api/v1/products/{id}` (soft delete).

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Endpoint Pencarian*
- Instruksi: Tambahkan route dan view baru `GET /api/v1/products/search?q=keyword` yang memanfaatkan method `search_by_name` dari service layer yang sudah dibuat sebelumnya.
- Expected output: `curl "http://localhost:6543/api/v1/products/search?q=laptop"` mengembalikan produk yang namanya mengandung "laptop".

### Langkah 8 — Pengujian API
```bash
pserve development.ini
```
```bash
# Mendapatkan semua produk
curl -X GET http://localhost:6543/api/v1/products

# Membuat produk baru
curl -X POST http://localhost:6543/api/v1/products \
-H "Content-Type: application/json" \
-d '{
    "name": "New Product",
    "description": "A great new product",
    "price": 99.99,
    "sku": "NP1234",
    "is_active": true
}'

# Update produk
curl -X PUT http://localhost:6543/api/v1/products/1 \
-H "Content-Type: application/json" \
-d '{
    "name": "Updated Product Name",
    "price": 109.99
}'

# Menghapus produk
curl -X DELETE http://localhost:6543/api/v1/products/1
```
```python
# tests/test_products.py (contoh unit test)
import pytest
from products-api.models.product import Product

def test_product_model(dbsession):
    """Test product model."""
    product = Product(name='Test Product', price=10.99, sku='TEST123')
    dbsession.add(product)
    dbsession.flush()

    assert product.id is not None
    assert product.created_at is not None
    assert product.is_active is True
```

## Bonus: Implementasi Frontend React

### Langkah 1 — Persiapan Lingkungan React
```bash
npx create-react-app products-frontend
cd products-frontend
npm install react-router-dom axios tailwindcss
npx tailwindcss init -p
```
Struktur proyek:
```
src/
├── api/
│   └── productApi.js
├── components/
│   ├── product/
│   │    ├── ProductForm.jsx
│   │    ├── ProductItem.jsx
│   │    └── ProductList.jsx
│   └── ui/
│        ├── Button.jsx
│        └── Card.jsx
├── pages/
│   ├── ProductDetailPage.jsx
│   ├── ProductListPage.jsx
│   └── ProductFormPage.jsx
├── types/
│   └── product.js
└── App.jsx
```

### Langkah 2 — Implementasi API Service
```javascript
// src/api/productApi.js
const API_BASE_URL = 'http://localhost:6543/api/v1';

export const productApi = {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  async getById(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch product with id ${id}`);
    return response.json();
  },

  async create(product) {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors ? JSON.stringify(errorData.errors) : 'Failed to create product');
    }
    return response.json();
  },

  async update(id, productUpdate) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productUpdate),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors ? JSON.stringify(errorData.errors) : 'Failed to update product');
    }
    return response.json();
  },

  async delete(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error(`Failed to delete product with id ${id}`);
  },
};
```
> Service API berisi fungsi untuk: mengambil semua produk (`getAll`), mengambil produk berdasarkan ID (`getById`), membuat produk baru (`create`), memperbarui produk (`update`), menghapus produk (`delete`).

### Langkah 3 — Komponen Halaman Daftar Produk
```jsx
// src/pages/ProductListPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productApi } from '../api/productApi';
import ProductList from '../components/product/ProductList';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi.getAll();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unexpected error');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productApi.delete(id);
        setProducts(products.filter(product => product.id !== id));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to delete');
      }
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link to="/products/new" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add New Product
        </Link>
      </div>
      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <ProductList products={products} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default ProductListPage;
```
```jsx
// src/components/product/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium">Name</th>
            <th className="py-3 px-4 text-left text-xs font-medium">SKU</th>
            <th className="py-3 px-4 text-left text-xs font-medium">Price</th>
            <th className="py-3 px-4 text-left text-xs font-medium">Status</th>
            <th className="py-3 px-4 text-right text-xs font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map(product => (
            <ProductItem key={product.id} product={product} onDelete={() => onDelete(product.id)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
```
```jsx
// src/components/product/ProductItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, onDelete }) => {
  return (
    <tr>
      <td className="py-4 px-4">
        <Link to={`/products/${product.id}`} className="text-blue-600 hover:underline">{product.name}</Link>
      </td>
      <td className="py-4 px-4">{product.sku}</td>
      <td className="py-4 px-4">${product.price.toFixed(2)}</td>
      <td className="py-4 px-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${product.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {product.is_active ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td className="py-4 px-4 text-right space-x-2">
        <Link to={`/products/${product.id}/edit`} className="text-blue-600 hover:text-blue-800">Edit</Link>
        <button onClick={onDelete} className="text-red-600 hover:text-red-800">Delete</button>
      </td>
    </tr>
  );
};

export default ProductItem;
```
> Halaman utama menampilkan daftar produk; `ProductList` menampilkan tabel; `ProductItem` menampilkan tiap baris produk, memungkinkan lihat detail, edit, atau hapus.

**[LATIHAN MANDIRI — sisipkan di sini]**
- Judul: *Search Box di Frontend*
- Instruksi: Tambahkan input pencarian sederhana di `ProductListPage.jsx` yang memfilter state `products` secara client-side berdasarkan nama produk (cukup filter array di React dengan `.filter()`, tidak perlu memanggil endpoint search backend).
- Expected output: Mengetik di input pencarian langsung menyaring daftar produk yang tampil di tabel tanpa reload halaman.

### Langkah 4 — Halaman Detail dan Edit Produk
```jsx
// src/pages/ProductDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productApi } from '../api/productApi';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const data = await productApi.getById(parseInt(id));
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (!product) return;
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productApi.delete(product.id);
        navigate('/products');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to delete');
      }
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!product) return <div className="text-center p-4">Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div><p className="text-sm text-gray-500">SKU</p><p>{product.sku}</p></div>
          <div><p className="text-sm text-gray-500">Price</p><p>${product.price.toFixed(2)}</p></div>
          <div className="md:col-span-2"><p className="text-sm text-gray-500">Description</p><p>{product.description || 'No description available'}</p></div>
          <div><p className="text-sm text-gray-500">Status</p><p>{product.is_active ? 'Active' : 'Inactive'}</p></div>
          <div><p className="text-sm text-gray-500">Created</p><p>{new Date(product.created_at).toLocaleDateString()}</p></div>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => navigate(`/products/${product.id}/edit`)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Edit</button>
          <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
          <button onClick={() => navigate('/products')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">Back to List</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
```

```jsx
// src/pages/ProductFormPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productApi } from '../api/productApi';

const ProductFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({ name: '', description: '', price: 0, sku: '', is_active: true });
  const [loading, setLoading] = useState(isEditMode);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      if (!isEditMode) return;
      try {
        const product = await productApi.getById(parseInt(id));
        setFormData({
          name: product.name, description: product.description || '',
          price: product.price, sku: product.sku, is_active: product.is_active
        });
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? e.target.checked : name === 'price' ? parseFloat(value) : value
    });
    if (validationErrors[name]) setValidationErrors({ ...validationErrors, [name]: '' });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (formData.price <= 0) errors.price = 'Price must be greater than 0';
    if (!isEditMode && !formData.sku) errors.sku = 'SKU is required';
    if (formData.name && formData.name.length < 2) errors.name = 'Name must be at least 2 characters';
    if (formData.name && formData.name.length > 100) errors.name = 'Name must be at most 100 characters';
    if (formData.description && formData.description.length > 500) errors.description = 'Description must be at most 500 characters';
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setError(null);
    try {
      if (isEditMode) {
        const { sku, ...updateData } = formData;
        await productApi.update(parseInt(id), updateData);
      } else {
        await productApi.create(formData);
      }
      navigate('/products');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">{isEditMode ? 'Edit' : 'Create'} Product</h1>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${validationErrors.name ? 'border-red-500' : ''}`} />
          {validationErrors.name && <p className="text-red-500 text-xs italic">{validationErrors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3" rows={3} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price*</label>
          <input id="price" name="price" type="number" step="0.01" min="0.01" value={formData.price} onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${validationErrors.price ? 'border-red-500' : ''}`} />
          {validationErrors.price && <p className="text-red-500 text-xs italic">{validationErrors.price}</p>}
        </div>
        {!isEditMode && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">SKU*</label>
            <input id="sku" name="sku" type="text" value={formData.sku || ''} onChange={handleChange} disabled={isEditMode}
              className={`shadow appearance-none border rounded w-full py-2 px-3 ${validationErrors.sku ? 'border-red-500' : ''}`} />
            {validationErrors.sku && <p className="text-red-500 text-xs italic">{validationErrors.sku}</p>}
          </div>
        )}
        <div className="mb-6">
          <label className="flex items-center">
            <input id="is_active" name="is_active" type="checkbox" checked={formData.is_active} onChange={handleChange} className="mr-2" />
            <span className="text-gray-700 text-sm font-bold">Active</span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" disabled={submitting}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {submitting ? 'Saving...' : isEditMode ? 'Update' : 'Create'}
          </button>
          <button type="button" onClick={() => navigate('/products')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFormPage;
```
```jsx
// src/App.jsx (dengan routing)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductFormPage from './pages/ProductFormPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-xl font-semibold text-gray-900">Product Management</h1>
          </div>
        </header>
        <main className="container mx-auto py-6">
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/new" element={<ProductFormPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/products/:id/edit" element={<ProductFormPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
```

## Tugas dan Penilaian — Aplikasi Manajemen Matakuliah dengan Relasi
Berdasarkan apa yang telah dipelajari, buatlah aplikasi serupa dengan entitas yang berbeda (misalnya User, Order, Category, dll.) dengan ketentuan:
- Minimal memiliki 2 model yang berelasi
- Implementasikan semua operasi CRUD
- Gunakan validasi data dengan Marshmallow
- Terapkan service layer untuk logika bisnis
- Buat migrasi database menggunakan Alembic
- Sertakan unit test minimal untuk 2 endpoint

**Kriteria Penilaian:**
| Komponen | Bobot |
|---|---|
| Kesesuaian dengan spesifikasi | 30% |
| Implementasi relasi model | 20% |
| Validasi data | 15% |
| Struktur kode dan organisasi | 15% |
| Pengujian | 10% |
| Dokumentasi | 10% |

## Referensi
SQLAlchemy Documentation, Alembic Documentation, Pyramid Framework Documentation, Marshmallow Documentation, PostgreSQL Documentation

---

**Selesai — 7 pertemuan lengkap dengan titik sisip Latihan Mandiri sudah tertandai di atas.**

Ingat aturan main di awal dokumen ini: hanya menambahkan bagian **[LATIHAN MANDIRI]**, seluruh konten lainnya di atas dimasukkan apa adanya ke sistem konten website (satu file per pertemuan, sesuai struktur yang sudah disepakati sebelumnya).
