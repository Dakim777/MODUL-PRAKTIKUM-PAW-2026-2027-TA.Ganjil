import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 1: JavaScript Dasar
export default function Pertemuan1() {
  const calloutInfo = (text: string) => (
    <div className="callout callout-info">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" /><path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div className="callout-body"><p>{text}</p></div>
    </div>
  );
  const calloutExercise = (title: string, text: string) => (
    <div className="callout callout-warning">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
        <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div className="callout-body"><p><strong>Latihan Mandiri: {title}</strong><br />{text}</p></div>
    </div>
  );

  return (
    <>
      <h2 id="dasar-teori">JavaScript Dasar</h2>

<h3 id="variabel-kondisional">Variabel & Kondisional</h3>
<p>Mengenal variabel, tipe data, dan struktur kondisional dalam JavaScript</p>


<h3 id="membuat-file-javascript-pertama">Membuat File JavaScript Pertama</h3>
<p>Buat sebuah file HTML baru dengan nama index.html dan file JavaScript dengan nama script.js. Hubungkan file JavaScript dengan file HTML menggunakan tag script.</p>

<CodeBlock language="">{`<!DOCTYPE html>
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
</html>`}</CodeBlock>

<p>Tag script dapat diletakkan di dalam head atau sebelum penutup body. Menempatkannya sebelum penutup body memastikan bahwa semua elemen HTML telah dimuat sebelum JavaScript dijalankan.</p>


<h3 id="mengenal-variabel-dan-output">Mengenal Variabel dan Output</h3>
<p>Buka file script.js dan tulis kode berikut untuk mendeklarasikan variabel dan menampilkan output:</p>

<CodeBlock language="">{`// Mendeklarasikan variabel dengan var, let, dan const
var nama = "Budi";
let usia = 20;
const TAHUN_LAHIR = 2004;

// Menampilkan output ke konsol
console.log("Nama: " + nama);
console.log("Usia: " + usia);
console.log("Tahun Lahir: " + TAHUN_LAHIR);

// Menampilkan output ke halaman HTML
document.getElementById("result").innerHTML = \`
  <p>Nama: <strong>\${nama}</strong></p>
  <p>Usia: <strong>\${usia}</strong></p>
  <p>Tahun Lahir: <strong>\${TAHUN_LAHIR}</strong></p>
\`;`}</CodeBlock>

<p>Buka file HTML Kalian di browser dan buka konsol pengembang (F12 atau klik kanan → Inspect → Console) untuk melihat output log yang dihasilkan.</p>

<p>Template literals (menggunakan backticks ``) memungkinkan Kalian untuk menyisipkan variabel langsung ke dalam string dengan menggunakan sintaks $&#123;variabel&#125;.</p>


<h3 id="implementasi-struktur-kondisional">Implementasi Struktur Kondisional</h3>
<p>Tambahkan kode berikut untuk mempelajari struktur kondisional dalam JavaScript:</p>

<CodeBlock language="">{`// Struktur kondisional
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

document.getElementById("result").innerHTML += \`
  <hr>
  <p>Nilai: <strong>\${nilai}</strong></p>
  <p>Grade: <strong>\${grade}</strong></p>
\`;

// Ternary operator
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log("Status: " + status);

document.getElementById("result").innerHTML += \`
  <p>Status: <strong>\${status}</strong></p>
\`;

// Switch case
let hari = new Date().getDay();
let namaHari = "";

switch (hari) {
  case 0:
    namaHari = "Minggu";
    break;
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  default:
    namaHari = "Hari tidak valid";
}

console.log("Hari ini adalah: " + namaHari);

document.getElementById("result").innerHTML += \`
  <p>Hari ini adalah: <strong>\${namaHari}</strong></p>
\`;`}</CodeBlock>

<p>JavaScript menyediakan beberapa cara untuk membuat keputusan berdasarkan kondisi: if-else, ternary operator (?:), dan switch-case. Pilih yang paling sesuai dengan kebutuhan kode Kalian.</p>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat variabel untuk menyimpan data diri Kalian (nama, umur, kota asal) menggunakan const dan let</li>
  <li>Implementasikan program pengecekan kelulusan dengan syarat nilai &gt;= 70</li>
  <li>Buat program untuk mengecek kategori umur (anak: &lt;12, remaja: 12-17, dewasa: 18-59, lansia: &gt;=60)</li>
  <li>Gunakan switch-case untuk membuat program konversi angka hari (1-7) ke nama hari dalam bahasa Inggris</li>
  <li>Buat kalkulator sederhana grade nilai dengan ternary operator</li>
</ul>

<p>Selanjutnya, mari kita lanjut ke Loop & Fungsi untuk mempelajari perulangan dan pembuatan fungsi.</p>

<p>Praktikum JavaScript Dasar</p>

<p>Mengenal dasar-dasar JavaScript dan konsep pemrograman web</p>

<p>Loop & Fungsi</p>

<p>Memahami perulangan dan pembuatan fungsi dalam JavaScript</p>


<h3 id="loop-fungsi">Loop & Fungsi</h3>
<p>Memahami perulangan dan pembuatan fungsi dalam JavaScript</p>


<h3 id="menggunakan-loop">Menggunakan Loop</h3>
<p>Tambahkan kode berikut untuk mempelajari loop dalam JavaScript:</p>

<CodeBlock language="">{`// For loop
let nilaiSiswa = [85, 92, 78, 90, 88];
let total = 0;

document.getElementById("result").innerHTML += \`
  <hr>
  <h3 id="daftar-nilai-siswa">Daftar Nilai Siswa:</h3>
  <ul id="daftar-nilai"></ul>
  <p id="rata-rata"></p>
\`;

for (let i = 0; i < nilaiSiswa.length; i++) {
  total += nilaiSiswa[i];
  document.getElementById("daftar-nilai").innerHTML += \`
    <li>Siswa \${i + 1}: \${nilaiSiswa[i]}</li>
  \`;
}

let rataRata = total / nilaiSiswa.length;
document.getElementById("rata-rata").innerHTML = \`
  Rata-rata nilai: <strong>\${rataRata.toFixed(2)}</strong>
\`;

// While loop
document.getElementById("result").innerHTML += \`
  <h3 id="countdown">Countdown:</h3>
  <div id="countdown"></div>
\`;

let hitungMundur = 5;
while (hitungMundur > 0) {
  document.getElementById("countdown").innerHTML += \`
    <span class="inline-block bg-blue-100 px-2 py-1 m-1 rounded">\${hitungMundur}</span>
  \`;
  hitungMundur--;
}

// For...of loop (ES6)
document.getElementById("result").innerHTML += \`
  <h3 id="nilai-dengan-forof">Nilai dengan for...of:</h3>
  <div id="nilai-of" class="flex flex-wrap gap-2"></div>
\`;

for (let nilai of nilaiSiswa) {
  let statusNilai = nilai >= 80 ? "text-green-600" : "text-red-600";
  document.getElementById("nilai-of").innerHTML += \`
    <span class="inline-block bg-gray-100 px-3 py-1 rounded \${statusNilai}">\${nilai}</span>
  \`;
}`}</CodeBlock>

<p>JavaScript menyediakan beberapa jenis loop: for, while, do-while, for...in, dan for...of. for...of (diperkenalkan di ES6) sangat berguna untuk meng-iterasi array dan objek iterable lainnya.</p>


<h3 id="fungsi-dan-event-handler">Fungsi dan Event Handler</h3>
<p>Pada langkah ini, kita akan belajar membuat fungsi dan menangani event:</p>

<CodeBlock language="">{`<hr>
<div class="event-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Event Handler</h2>
  <input type="text" id="nama-input" placeholder="Masukkan nama Kalian" class="border p-2 rounded w-full mb-3">
  <button id="sapa-button" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sapa Saya</button>
  <div id="sapa-output" class="mt-3"></div>

  <div class="mt-4">
    <h3 class="font-semibold mb-2">Kalkulator Sederhana</h3>
    <div class="flex gap-2 mb-3">
      <input type="number" id="angka1" placeholder="Angka 1" class="border p-2 rounded flex-1">
      <input type="number" id="angka2" placeholder="Angka 2" class="border p-2 rounded flex-1">
    </div>
    <div class="flex gap-2">
      <button id="btn-tambah" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">+</button>
      <button id="btn-kurang" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">-</button>
      <button id="btn-kali" class="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">×</button>
      <button id="btn-bagi" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">÷</button>
    </div>
    <div id="hasil-kalkulator" class="mt-3 font-semibold"></div>
  </div>
</div>`}</CodeBlock>

<CodeBlock language="">{`function sapaNama(nama) {
  return \`Halo, \${nama}! Selamat belajar JavaScript!\`;
}

// Event handler untuk tombol sapa
document.getElementById("sapa-button").addEventListener("click", function() {
  const nama = document.getElementById("nama-input").value;
  if (nama.trim() === "") {
    document.getElementById("sapa-output").innerHTML = 
      \`<p class="text-red-500">Silakan masukkan namaKalianterlebih dahulu!</p>\`;
  } else {
    const pesan = sapaNama(nama);
    document.getElementById("sapa-output").innerHTML = 
      \`<p class="text-green-500">\${pesan}</p>\`;
  }
});

// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
  let hasil = 0;
  switch (operasi) {
    case "tambah":
      hasil = angka1 + angka2;
      break;
    case "kurang":
      hasil = angka1 - angka2;
      break;
    case "kali":
      hasil = angka1 * angka2;
      break;
    case "bagi":
      if (angka2 === 0) {
        return "Error: Pembagian dengan nol tidak diperbolehkan";
      }
      hasil = angka1 / angka2;
      break;
    default:
      return "Operasi tidak valid";
  }
  return hasil;
}

// Event handler untuk tombol operasi matematika
document.getElementById("btn-tambah").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = 
      \`<p class="text-red-500">Masukkan angka yang valid!</p>\`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "tambah");
    document.getElementById("hasil-kalkulator").innerHTML = 
      \`<p>Hasil: \${angka1} + \${angka2} = \${hasil}</p>\`;
  }
});

document.getElementById("btn-kurang").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = 
      \`<p class="text-red-500">Masukkan angka yang valid!</p>\`
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kurang");
    document.getElementById("hasil-kalkulator").innerHTML = 
      \`<p>Hasil: \${angka1} - \${angka2} = \${hasil}</p>\`;
  }
});

document.getElementById("btn-kali").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = 
      \`<p class="text-red-500">Masukkan angka yang valid!</p>\`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kali");
    document.getElementById("hasil-kalkulator").innerHTML = 
      \`<p>Hasil: \${angka1} × \${angka2} = \${hasil}</p>\`;
  }
});

document.getElementById("btn-bagi").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = 
      \`<p class="text-red-500">Masukkan angka yang valid!</p>\`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "bagi");
    document.getElementById("hasil-kalkulator").innerHTML = 
      \`<p>Hasil: \${angka1} ÷ \${angka2} = \${hasil}</p>\`;
  }
});`}</CodeBlock>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat loop untuk mencetak tabel perkalian dari 1 sampai 10 untuk angka pilihan Kalian</li>
  <li>Implementasikan fungsi untuk menghitung faktorial dari sebuah angka</li>
  <li>Buat fungsi untuk memeriksa apakah sebuah angka adalah bilangan prima</li>
  <li>Buat kalkulator BMI (Body Mass Index) dengan fungsi dan event handler</li>
  <li>Implementasikan program FizzBuzz (print angka 1-100, tapi untuk kelipatan 3 print "Fizz", kelipatan 5 print "Buzz", kelipatan keduanya print "FizzBuzz")</li>
</ul>

<p>Selanjutnya, mari kita lanjut ke Array & Objek untuk mempelajari struktur data array dan objek.</p>

<p>Variabel & Kondisional</p>

<p>Mengenal variabel, tipe data, dan struktur kondisional dalam JavaScript</p>

<p>Array & Objek</p>

<p>Bekerja dengan struktur data array dan objek dalam JavaScript</p>


<h3 id="array-objek">Array & Objek</h3>
<p>Bekerja dengan struktur data array dan objek dalam JavaScript</p>


<h3 id="array-dan-metode-array">Array dan Metode Array</h3>
<p>Pada langkah ini, kita akan belajar bekerja dengan array dan berbagai metode array:</p>

<CodeBlock language="">{`// Array dan metode array
const buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];

document.getElementById("result").innerHTML += \`
  <hr>
  <h3 id="manipulasi-array">Manipulasi Array:</h3>
  <div id="array-demo"></div>
\`;

// Menampilkan array
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Array buah:</strong> \${buah.join(", ")}</p>
\`;

// Menambahkan item
buah.push("Durian");
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Setelah push Durian:</strong> \${buah.join(", ")}</p>
\`;

// Menghapus item terakhir
const itemDihapus = buah.pop();
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Setelah pop:</strong> \${buah.join(", ")} (item dihapus: \${itemDihapus})</p>
\`;

// Mengurutkan array
buah.sort();
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Setelah sort:</strong> \${buah.join(", ")}</p>
\`;

// Array map
const hargaBuah = [10000, 8000, 15000, 5000, 20000];
const daftarBuah = buah.map((item, index) => \`\${item} (Rp\${hargaBuah[index].toLocaleString()})\`);

document.getElementById("array-demo").innerHTML += \`
  <p><strong>Array dengan harga:</strong> \${daftarBuah.join(", ")}</p>
\`;

// Array filter
const buahMahal = buah.filter((item, index) => hargaBuah[index] > 10000);
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Buah dengan harga > 10.000:</strong> \${buahMahal.join(", ")}</p>
\`;`}</CodeBlock>

<p>Metode array seperti push(), pop(), map(), filter(), dan reduce() adalah tools yang sangat berguna untuk memanipulasi data dalam array. Metode-metode ini membuat kode lebih clean dan mudah dibaca.</p>


<h3 id="bekerja-dengan-objek">Bekerja dengan Objek</h3>
<p>Sekarang mari kita pelajari cara bekerja dengan objek dalam JavaScript:</p>

<CodeBlock language="">{`// Objek
const mahasiswa = {
  nama: "Budi Santoso",
  nim: "20210001",
  jurusan: "Teknik Informatika",
  nilai: {
    algoritma: 85,
    basis_data: 90,
    web: 88
  },
  hobi: ["Coding", "Membaca", "Futsal"],
  tampilkanInfo: function() {
    return \`\${this.nama} (\${this.nim}) - \${this.jurusan}\`;
  },
  hitungRataRata: function() {
    const nilaiArray = Object.values(this.nilai);
    const total = nilaiArray.reduce((sum, nilai) => sum + nilai, 0);
    return (total / nilaiArray.length).toFixed(2);
  }
};

document.getElementById("result").innerHTML += \`
  <hr>
  <h3 id="manipulasi-objek">Manipulasi Objek:</h3>
  <div id="objek-demo"></div>
\`;

// Menampilkan informasi objek
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Info Mahasiswa:</strong> \${mahasiswa.tampilkanInfo()}</p>
  <p><strong>Rata-rata Nilai:</strong> \${mahasiswa.hitungRataRata()}</p>
  <p><strong>Hobi:</strong> \${mahasiswa.hobi.join(", ")}</p>
\`;

// Menambahkan properti baru ke objek
mahasiswa.email = "budi.santoso@example.com";
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Email:</strong> \${mahasiswa.email}</p>
\`;

// Mengubah nilai properti
mahasiswa.nilai.web = 92;
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Nilai Web setelah diubah:</strong> \${mahasiswa.nilai.web}</p>
\`;

// Menghapus properti
delete mahasiswa.hobi;
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Hobi setelah dihapus:</strong> \${mahasiswa.hobi ? mahasiswa.hobi.join(", ") : "Tidak ada data hobi"}</p>
\`;`}</CodeBlock>

<p>Objek dalam JavaScript adalah struktur data key-value yang sangat fleksibel. Kalian dapat menambahkan, mengubah, atau menghapus properti objek secara dinamis. Objek juga dapat memiliki method (fungsi) sebagai properti.</p>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat array berisi minimal 5 objek mahasiswa (dengan properti nama, nim, jurusan, nilai) dan tampilkan dalam bentuk tabel HTML</li>
  <li>Implementasikan fungsi untuk mencari mahasiswa dengan nilai tertinggi menggunakan method array</li>
  <li>Filter dan tampilkan mahasiswa yang nilainya di atas rata-rata</li>
  <li>Buat fungsi untuk mengurutkan mahasiswa berdasarkan nama (ascending/descending)</li>
  <li>Tambahkan fitur CRUD sederhana (Create, Read, Update, Delete) untuk data mahasiswa dengan event handler</li>
</ul>

<p>Selanjutnya, mari kita lanjut ke DOM & API untuk mempelajari manipulasi DOM dan penggunaan Fetch API.</p>

<p>Loop & Fungsi</p>

<p>Memahami perulangan dan pembuatan fungsi dalam JavaScript</p>

<p>DOM & API</p>

<p>Manipulasi DOM dan penggunaan Fetch API dalam JavaScript</p>


<h3 id="dom-api">DOM & API</h3>
<p>Manipulasi DOM dan penggunaan Fetch API dalam JavaScript</p>

<CodeBlock language="">{`<hr>
<div class="dom-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Manipulasi DOM</h2>
  <div id="dom-output" class="mb-3"></div>
  <button id="btn-tambah-item" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Tambah Item</button>
  <button id="btn-hapus-item" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Hapus Item</button>
  <button id="btn-ubah-warna" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ubah Warna</button>
</div>`}</CodeBlock>

<CodeBlock language="">{`// Manipulasi DOM
const domOutput = document.getElementById("dom-output");
let itemCount = 0;

// Fungsi untuk menambahkan item
document.getElementById("btn-tambah-item").addEventListener("click", function() {
  itemCount++;
  const newItem = document.createElement("div");
  newItem.className = "p-2 mb-2 bg-gray-100 rounded";
  newItem.innerText = \`Item \${itemCount}\`;
  domOutput.appendChild(newItem);
});

// Fungsi untuk menghapus item
document.getElementById("btn-hapus-item").addEventListener("click", function() {
  if (domOutput.lastChild) {
    domOutput.removeChild(domOutput.lastChild);
    itemCount--;
  }
});

// Fungsi untuk mengubah warna background
document.getElementById("btn-ubah-warna").addEventListener("click", function() {
  const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  domOutput.className = \`p-4 mb-3 \${randomColor} rounded\`;
});`}</CodeBlock>

<p>Manipulasi DOM adalah salah satu fitur paling powerful dalam JavaScript. Dengan DOM manipulation, Kalian dapat membuat, mengubah, atau menghapus elemen HTML secara dinamis tanpa harus reload halaman.</p>


<h3 id="fetch-api-dan-asyncawait">Fetch API dan Async/Await</h3>
<p>Pelajari cara menggunakan Fetch API dan async/await untuk mengambil data dari server:</p>

<CodeBlock language="">{`<hr>
<div class="api-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Fetch API</h2>
  <button id="btn-fetch" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ambil Data</button>
  <div id="api-output" class="mt-3"></div>
</div>`}</CodeBlock>

<CodeBlock language="">{`// Fetch API dengan async/await
document.getElementById("btn-fetch").addEventListener("click", async function() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const apiOutput = document.getElementById("api-output");
    apiOutput.innerHTML = "<h3 class='font-bold mb-2'>Daftar Post:</h3>";

    data.slice(0, 5).forEach(post => {
      apiOutput.innerHTML += \`
        <div class="p-3 mb-2 bg-gray-100 rounded">
          <h4 class="font-semibold">\${post.title}</h4>
          <p class="text-sm">\${post.body}</p>
        </div>
      \`;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("api-output").innerHTML = \`
      <div class="p-3 bg-red-100 text-red-800 rounded">
        Gagal mengambil data: \${error.message}
      </div>
    \`;
  }
});`}</CodeBlock>

<p>Fetch API adalah cara modern untuk melakukan HTTP requests di JavaScript. Kombinasi dengan async/await membuat kode asynchronous menjadi lebih mudah dibaca dan dipahami, mirip seperti kode synchronous.</p>


<h3 id="hasil-praktikum">Hasil Praktikum</h3>
<p>Setelah menyelesaikan semua langkah praktikum, Kalian seharusnya telah:</p>

<ul>
  <li>Membuat file HTML dan JavaScript yang terhubung</li>
  <li>Menggunakan variabel, tipe data, dan operator</li>
  <li>Mengimplementasikan struktur kondisional dan loop</li>
  <li>Membuat dan menggunakan fungsi</li>
  <li>Menangani event dan memanipulasi DOM</li>
  <li>Menggunakan array dan objek</li>
  <li>Mengambil data dari API menggunakan Fetch API</li>
</ul>


<h3 id="tips-dan-best-practices">Tips dan Best Practices</h3>
<p>Perhatikan!</p>

<ul>
  <li>Selalu gunakan const untuk nilai yang tidak berubah, dan let untuk nilai yang berubah</li>
  <li>Hindari penggunaan var kecuali ada kebutuhan khusus untuk backward compatibility</li>
  <li>Gunakan === untuk comparison, bukan == untuk menghindari type coercion</li>
  <li>Selalu handle error saat menggunakan async operations</li>
  <li>Gunakan camelCase untuk penamaan variabel dan fungsi</li>
</ul>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat form input untuk menambahkan data mahasiswa baru dengan validasi form</li>
  <li>Implementasikan localStorage untuk menyimpan data mahasiswa secara persisten</li>
  <li>Tambahkan fitur search/filter pada daftar post dari API berdasarkan title</li>
  <li>Buat fitur dark mode toggle menggunakan manipulasi class CSS</li>
  <li>Implementasikan pagination untuk menampilkan data dari API dengan tombol "Previous" dan "Next"</li>
  <li>Buat aplikasi Todo List sederhana dengan fitur tambah, hapus, dan tandai selesai menggunakan DOM manipulation dan localStorage</li>
</ul>

<p>Array & Objek</p>

<p>Bekerja dengan struktur data array dan objek dalam JavaScript</p>

<p>Praktikum JavaScript Next Gen</p>

<p>Mengenal fitur modern JavaScript (ES6+) dan penerapannya dalam pengembangan web</p>


      <h2 id="tugas-praktikum">Tugas Praktikum: Aplikasi Kasir &amp; Keranjang Belanja Sederhana (Mini POS)</h2>
      <p>
        Buatlah sebuah aplikasi web <strong>Kasir &amp; Keranjang Belanja Sederhana (Mini POS)</strong> untuk kasir kantin atau toko kampus. Studi kasus ini dirancang dengan alur yang sangat jelas dan mudah dipahami untuk menyatukan ketiga kompetensi dasar praktikum (validasi input form, perhitungan kalkulator otomatis, dan manajemen keranjang belanja berbasis <code>localStorage</code>).
      </p>

      <h3 id="skenario-amp-persyaratan-fitur">Skenario &amp; Persyaratan Fitur</h3>

      <h4>1. Validasi Form Input Barang</h4>
      <ul>
        <li><strong>Nama Barang:</strong> Wajib diisi, minimal 3 karakter (contoh: "Buku Tulis", "Air Mineral").</li>
        <li><strong>Harga Satuan:</strong> Wajib berupa angka positif dan minimal bernilai Rp 500 (tidak boleh 0, negatif, atau teks kosong).</li>
        <li><strong>Jumlah / Qty:</strong> Wajib berupa angka bulat minimal 1.</li>
        <li><strong>Feedback Validasi:</strong> Jika data tidak valid, tampilkan pesan peringatan teks berwarna merah di bawah input yang salah dan cegah barang masuk ke keranjang belanja. Jika berhasil, form otomatis di-reset.</li>
      </ul>

      <h4>2. Modul Kalkulator &amp; Perhitungan Otomatis</h4>
      <ul>
        <li><strong>Kalkulasi Subtotal:</strong> Dihitung otomatis per baris barang: <code>Subtotal = Harga Satuan × Qty</code>.</li>
        <li><strong>Kalkulasi Total Belanja:</strong> Menjumlahkan seluruh subtotal barang yang ada di keranjang secara otomatis.</li>
        <li><strong>Kalkulator Diskon Sederhana:</strong> Jika total belanja mencapai minimal Rp 50.000, berikan potongan diskon 10% (atau sediakan input kode promo sederhana seperti <code>HEMAT10</code>). Tampilkan nominal diskon dan total akhir yang harus dibayar.</li>
        <li><strong>Kalkulator Pembayaran &amp; Kembalian:</strong> Sediakan input <em>"Uang Bayar"</em>. Saat kasir menginputkan nominal uang yang diterima, sistem menghitung kembalian secara otomatis: <code>Kembalian = Uang Bayar − Total Akhir</code>. Jika uang kurang, tampilkan keterangan bahwa uang belum mencukupi.</li>
      </ul>

      <h4>3. Manajemen List Keranjang &amp; LocalStorage</h4>
      <ul>
        <li><strong>Tabel Keranjang Belanja:</strong> Setiap barang yang ditambahkan langsung tampil di tabel daftar belanja (Kolom: No, Nama Barang, Harga Satuan, Qty, Subtotal, dan Aksi).</li>
        <li><strong>Aksi Hapus Item:</strong> Terdapat tombol <em>Hapus</em> di setiap baris barang untuk menghapus item dari keranjang. Setelah dihapus, total belanja dan diskon langsung terhitung ulang secara otomatis.</li>
        <li><strong>Penyimpanan Persisten (LocalStorage):</strong> Daftar keranjang belanja wajib disimpan ke dalam <code>localStorage</code> menggunakan <code>JSON.stringify()</code> dan dimuat ulang menggunakan <code>JSON.parse()</code>, sehingga isi keranjang tidak hilang saat halaman di-refresh.</li>
        <li><strong>Tombol Transaksi Baru / Reset:</strong> Tombol untuk mengosongkan seluruh keranjang belanja dan membersihkan <code>localStorage</code> setelah transaksi selesai.</li>
      </ul>

      <h3 id="kriteria-penilaian">Kriteria Penilaian</h3>
      <div style={{ overflowX: "auto", margin: "1.25rem 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ background: "var(--color-surface)", borderBottom: "2px solid var(--color-border)" }}>
              <th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600, color: "var(--color-text-primary)" }}>Aspek Penilaian</th>
              <th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600, color: "var(--color-text-primary)" }}>Deskripsi Implementasi</th>
              <th style={{ padding: "0.625rem 1rem", textAlign: "center", fontWeight: 600, color: "var(--color-text-primary)", width: "100px" }}>Bobot</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Manajemen List & LocalStorage", "Tabel keranjang belanja interaktif, fitur hapus item, tombol reset, dan sinkronisasi persisten dengan localStorage", "30%"],
              ["Logika Kalkulator & Perhitungan", "Perhitungan subtotal (harga × qty), akumulasi total, diskon otomatis/kupon, serta kalkulator uang kembalian", "30%"],
              ["Validasi Form & Error Handling", "Validasi nama barang min 3 karakter, harga > 500, qty >= 1, serta pesan error feedback yang jelas", "20%"],
              ["Desain Antarmuka (UI/UX)", "Kerapian tata letak form dan tabel belanja, keterbacaan angka/format Rupiah, dan responsivitas tampilan", "10%"],
              ["Struktur Kode & Dokumentasi", "Pemisahan file HTML/CSS/JS yang rapi, penamaan fungsi yang jelas, dan kelengkapan file README.md", "10%"],
            ].map(([aspek, deskripsi, bobot], i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "0.625rem 1rem", fontWeight: 600, color: "var(--color-text-primary)" }}>{aspek}</td>
                <td style={{ padding: "0.625rem 1rem", color: "var(--color-text-secondary)" }}>{deskripsi}</td>
                <td style={{ padding: "0.625rem 1rem", textAlign: "center", fontWeight: 600, color: "var(--color-accent)" }}>{bobot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="format-pengumpulan">Format Pengumpulan</h2>
      <ul>
        <li>
          <strong>Direktori GitHub:</strong>
          <ul>
            <li>Buat repository baru di GitHub dengan format: <code>pemrograman_web_itera_[NIM]</code></li>
            <li>Contoh: <code>pemrograman_web_itera_123140002</code></li>
            <li>Pastikan repository disetel dengan visibilitas <strong>Public</strong> agar dapat dinilai oleh asisten praktikum.</li>
          </ul>
        </li>
        <li>
          <strong>Struktur Folder Proyek:</strong>
          <ul>
            <li>Buat direktori folder untuk pertemuan ini dengan format: <code>[NAMA]_[NIM]_pertemuan1</code></li>
            <li>Contoh: <code>muhammaddaffahakim_123140002_pertemuan1</code></li>
            <li>Pemisahan file wajib dilakukan secara terstruktur:
              <ul>
                <li><code>index.html</code> (Struktur HTML aplikasi tugas)</li>
                <li><code>style.css</code> (Styling CSS antarmuka)</li>
                <li><code>script.js</code> (Logika pemrograman JavaScript)</li>
                <li><code>README.md</code> (Dokumentasi lengkap tugas)</li>
                <li>Folder <code>modul/</code> (Berisi file latihan yang dikerjakan selama mengikuti materi praktikum)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Kelengkapan Dokumentasi (README.md):</strong>
          <ul>
            <li><strong>Identitas:</strong> Nama Lengkap, NIM, dan Kelas Praktikum.</li>
            <li><strong>Deskripsi Aplikasi:</strong> Gambaran umum aplikasi, tujuan pembuatan, dan studi kasus yang dipilih.</li>
            <li><strong>Panduan Menjalankan:</strong> Langkah-langkah membuka dan menjalankan aplikasi di browser lokal (misal menggunakan Live Server di VS Code).</li>
            <li><strong>Daftar Fitur:</strong> Checklist seluruh fitur yang berhasil diimplementasikan (validasi form, kalkulator saldo/anggaran, dan interaksi localStorage).</li>
            <li><strong>Tangkapan Layar (Screenshot):</strong> Minimal 3 screenshot aplikasi (tampilan form input utama, tampilan saat validasi error muncul, serta tampilan hasil perhitungan kalkulator dan tabel riwayat data).</li>
            <li><strong>Penjelasan Teknis Singkat:</strong> Penjelasan alur logika JavaScript utama (penanganan validasi input, algoritma kalkulator keuangan, dan mekanisme serialisasi <code>localStorage</code>).</li>
          </ul>
        </li>
        <li>
          <strong>Batas Waktu Pengumpulan (Deadline):</strong>
          <ul>
            <li>
              Setiap kelas memiliki deadline pengumpulan yang berbeda sesuai jadwal praktikum masing-masing:
              <ul>
                <li><strong>Kelas RB:</strong> <strong>Rabu, 07 Oktober 2026, pukul 23:59 WIB</strong></li>
                <li><strong>Kelas RA:</strong> <strong>Sabtu, 10 Oktober 2026, pukul 23:59 WIB</strong></li>
              </ul>
            </li>
            <li>Keterlambatan pengumpulan dikenakan pengurangan nilai sebesar <strong>10% per hari keterlambatan</strong>.</li>
          </ul>
        </li>
      </ul>
      <SubmissionBox pertemuan={1} />
    </>
  );
}
