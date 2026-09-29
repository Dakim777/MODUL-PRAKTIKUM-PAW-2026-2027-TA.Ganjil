import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 1: JavaScript Dasar
// Konten praktikum resmi

export default function Pertemuan1() {
  return (
    <>
      <h2 id="dasar-teori">Dasar Teori</h2>

      <h3>Apa itu JavaScript?</h3>
      <p>
        JavaScript adalah bahasa pemrograman tingkat tinggi, dinamis, dan serbaguna yang
        memungkinkan Anda untuk menambahkan interaktivitas ke halaman web. Sejak diciptakan
        oleh Brendan Eich pada tahun 1995, JavaScript telah menjadi salah satu bahasa
        pemrograman paling populer di dunia.
      </p>
      <p>
        Menurut survey Stack Overflow Developer Survey 2024, JavaScript tetap menjadi bahasa
        pemrograman yang paling banyak digunakan untuk tahun kesepuluh berturut-turut, dengan
        lebih dari 67% developer menggunakannya secara reguler.
      </p>

      <h3>Karakteristik Utama JavaScript</h3>
      <div style={{ overflowX: "auto", marginBottom: "1.25rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ background: "var(--color-surface)", borderBottom: "2px solid var(--color-border)" }}>
              <th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600, color: "var(--color-text-primary)" }}>Karakteristik</th>
              <th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600, color: "var(--color-text-primary)" }}>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Client-side scripting", "Berjalan di browser pengguna, tidak memerlukan kompilasi"],
              ["Dinamis", "Tipe data ditentukan saat runtime"],
              ["Berorientasi objek", "Berbasis prototipe alih-alih kelas"],
              ["Event-driven", "Dapat merespons tindakan pengguna"],
              ["First-class functions", "Fungsi dapat diperlakukan sebagai variabel"],
            ].map(([k, v], i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "0.5rem 1rem", fontWeight: 500, color: "var(--color-navy-800)" }}>{k}</td>
                <td style={{ padding: "0.5rem 1rem", color: "var(--color-text-secondary)" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Engine JavaScript</h3>
      <ul>
        <li><strong>V8:</strong> Dikembangkan oleh Google, digunakan di Chrome dan Node.js</li>
        <li><strong>SpiderMonkey:</strong> Engine pertama, dikembangkan oleh Netscape, sekarang digunakan di Firefox</li>
        <li><strong>JavaScriptCore:</strong> Dikembangkan oleh Apple untuk Safari</li>
        <li><strong>Chakra:</strong> Dikembangkan oleh Microsoft untuk Edge (versi lama)</li>
      </ul>

      <h3>Deklarasi Variabel</h3>
      <p>JavaScript memiliki 3 cara untuk mendeklarasikan variabel:</p>
      <ul>
        <li><code>var</code>: Cara lama, memiliki cakupan fungsi atau global</li>
        <li><code>let</code>: Diperkenalkan di ES6, memiliki cakupan blok</li>
        <li><code>const</code>: Diperkenalkan di ES6, untuk nilai yang tidak berubah</li>
      </ul>
      <p><strong>Tipe Data Primitif:</strong> Number, String, Boolean, Undefined, Null, Symbol, dan BigInt.</p>

      <h3>Fitur JavaScript Modern</h3>
      <div style={{ overflowX: "auto", marginBottom: "1.25rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ background: "var(--color-surface)", borderBottom: "2px solid var(--color-border)" }}>
              <th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600, color: "var(--color-text-primary)" }}>Fitur</th>
              <th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600, color: "var(--color-text-primary)" }}>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Arrow Functions", "Sintaks ringkas untuk fungsi"],
              ["Template Literals", "String yang mendukung interpolasi"],
              ["Destructuring", "Ekstraksi nilai dari objek/array"],
              ["Promises", "Penanganan operasi asinkron"],
              ["Async/Await", "Sintaks untuk kode asinkron"],
            ].map(([k, v], i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "0.5rem 1rem", fontWeight: 500, color: "var(--color-navy-800)" }}>{k}</td>
                <td style={{ padding: "0.5rem 1rem", color: "var(--color-text-secondary)" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="prasyarat-alat">Prasyarat, Alat & Bahan</h2>
      <p><strong>Prasyarat:</strong> HTML dan CSS dasar, konsep logika pemrograman, penggunaan browser modern.</p>
      <ul>
        <li>Browser Web: Chrome, Firefox, atau Edge</li>
        <li>Code Editor: Visual Studio Code, Sublime Text, atau editor teks lainnya</li>
        <li>Rekomendasi ekstensi VS Code: JavaScript (ES6) code snippets dan Live Server</li>
      </ul>

      <h2 id="panduan-praktik">Langkah Praktikum</h2>

      <h3 id="setup-file">1. Setup File HTML & Script JS</h3>
      <p>
        Buat sebuah file HTML baru dengan nama <code>index.html</code> dan file JavaScript dengan nama{" "}
        <code>script.js</code>. Hubungkan file JavaScript dengan file HTML menggunakan tag script.
      </p>
      <CodeBlock language="html">{`<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Dasar</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <!-- Tailwind opsional karena kali ini kita tidak fokus ke styling -->
</head>
<body>
  <h1>Belajar JavaScript Dasar</h1>
  <div id="result"></div>

  <!-- Menghubungkan dengan file JavaScript -->
  <script src="script.js"></script>
</body>
</html>`}</CodeBlock>
      <div className="callout callout-info">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p>Tag script dapat diletakkan di dalam head atau sebelum penutup body. Menempatkannya sebelum penutup body memastikan bahwa semua elemen HTML telah dimuat sebelum JavaScript dijalankan.</p></div>
      </div>

      <h3 id="variabel-output">2. Variabel & Output Konsol</h3>
      <p>Buka file <code>script.js</code> dan tulis kode berikut untuk mendeklarasikan variabel dan menampilkan output:</p>
      <CodeBlock language="javascript">{`// script.js
// Mendeklarasikan variabel dengan var, let, dan const
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
      <div className="callout callout-info">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p>Buka file HTML di browser dan buka konsol pengembang (F12 → Console) untuk melihat output log. Template literals (backtick) memungkinkan interpolasi variabel langsung dengan <code>{"${variabel}"}</code>.</p></div>
      </div>

      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body">
          <p><strong>Latihan Mandiri: Biodata Sendiri</strong><br />
          Buat 3 variabel baru (<code>namaKalian</code>, <code>prodi</code>, <code>angkatan</code>) berisi data kalian sendiri, lalu tampilkan ke halaman menggunakan template literal seperti contoh di atas. Expected output: paragraf baru muncul di halaman berisi biodata kalian.</p>
        </div>
      </div>

      <h3 id="kondisional">3. Struktur Logika & Kondisional</h3>
      <CodeBlock language="javascript">{`// Struktur kondisional (tambahkan di bawah kode sebelumnya)
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

// Ternary operator
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log("Status: " + status);

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
console.log("Hari ini adalah: " + namaHari);`}</CodeBlock>
      <div className="callout callout-info">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p>JavaScript menyediakan beberapa cara untuk membuat keputusan berdasarkan kondisi: if-else, ternary operator (<code>?:</code>), dan switch-case.</p></div>
      </div>
      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body">
          <p><strong>Latihan Mandiri: Cek Tahun Kabisat</strong><br />
          Buat fungsi <code>cekKabisat(tahun)</code> yang mengembalikan <code>true</code>/<code>false</code>. Aturan: tahun kabisat jika habis dibagi 4, kecuali kalau habis dibagi 100 tapi tidak habis dibagi 400. Hint: gunakan operator modulus (<code>%</code>) dan operator logika (<code>&&</code>, <code>||</code>). Expected output: <code>cekKabisat(2024)</code> → <code>true</code>, <code>cekKabisat(1900)</code> → <code>false</code>, <code>cekKabisat(2000)</code> → <code>true</code>.</p>
        </div>
      </div>

      <h3 id="perulangan">4. Perulangan (Looping) & Iterasi Data</h3>
      <CodeBlock language="javascript">{`// For loop
let nilaiSiswa = [85, 92, 78, 90, 88];
let total = 0;

for (let i = 0; i < nilaiSiswa.length; i++) {
  total += nilaiSiswa[i];
}

let rataRata = total / nilaiSiswa.length;
console.log("Rata-rata: " + rataRata.toFixed(2));

// While loop
let hitungMundur = 5;
while (hitungMundur > 0) {
  console.log(hitungMundur);
  hitungMundur--;
}

// For...of loop (ES6)
for (let nilai of nilaiSiswa) {
  let statusNilai = nilai >= 80 ? "Lulus" : "Tidak Lulus";
  console.log(\`Nilai: \${nilai} (\${statusNilai})\`);
}`}</CodeBlock>
      <div className="callout callout-info">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p>JavaScript menyediakan beberapa jenis loop: for, while, do-while, for...in, dan for...of. <code>for...of</code> (ES6) sangat berguna untuk mengiterasi array dan objek iterable lainnya.</p></div>
      </div>
      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body">
          <p><strong>Latihan Mandiri: Tabel Perkalian</strong><br />
          Gunakan nested for loop untuk mencetak tabel perkalian 1–5 ke dalam elemen <code>&lt;div&gt;</code> baru di halaman. Expected output: tampil 5×5 hasil perkalian, misalnya "3 x 4 = 12".</p>
        </div>
      </div>

      <h3 id="fungsi-event">5. Deklarasi Fungsi & Event Handler</h3>
      <CodeBlock language="javascript">{`// script.js
function sapaNama(nama) {
  return \`Halo, \${nama}! Selamat belajar JavaScript!\`;
}

document.getElementById("sapa-button").addEventListener("click", function() {
  const nama = document.getElementById("nama-input").value;
  if (nama.trim() === "") {
    document.getElementById("sapa-output").innerHTML =
      '<p style="color:red">Silakan masukkan nama Anda terlebih dahulu.</p>';
  } else {
    const pesan = sapaNama(nama);
    document.getElementById("sapa-output").innerHTML =
      \`<p style="color:green">\${pesan}</p>\`;
  }
});

function hitungKalkulator(angka1, angka2, operasi) {
  switch (operasi) {
    case "tambah": return angka1 + angka2;
    case "kurang": return angka1 - angka2;
    case "kali":   return angka1 * angka2;
    case "bagi":
      if (angka2 === 0) return "Error: Pembagian dengan nol tidak diperbolehkan";
      return angka1 / angka2;
    default: return "Operasi tidak valid";
  }
}`}</CodeBlock>

      <h3 id="array-objek">6. Struktur Data Array & Objek</h3>
      <CodeBlock language="javascript">{`// Array dan metode array
const buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];

buah.push("Durian");        // Tambah di akhir
const itemDihapus = buah.pop();  // Hapus dari akhir
buah.sort();                // Urutkan

// map, filter, reduce
const hargaBuah = [10000, 8000, 15000, 5000, 20000];
const daftarBuah = buah.map((item, i) => \`\${item} (Rp\${hargaBuah[i]})\`);
const buahMahal = buah.filter((_, i) => hargaBuah[i] > 10000);

// Objek
const mahasiswa = {
  nama: "Budi Santoso",
  nim: "20210001",
  jurusan: "Teknik Informatika",
  nilai: { algoritma: 85, basis_data: 90, web: 88 },
  hobi: ["Coding", "Membaca", "Futsal"],
  tampilkanInfo() { return \`\${this.nama} (\${this.nim})\`; },
  hitungRataRata() {
    const arr = Object.values(this.nilai);
    return (arr.reduce((s, n) => s + n, 0) / arr.length).toFixed(2);
  }
};`}</CodeBlock>
      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body">
          <p><strong>Latihan Mandiri: Nilai Tertinggi dan Terendah</strong><br />
          Dari array <code>nilaiSiswa</code> (nomor 4), cari nilai tertinggi/terendah pakai <code>Math.max(...nilaiSiswa)</code> dan <code>Math.min(...nilaiSiswa)</code>. Expected output: "Nilai tertinggi: 92, Nilai terendah: 78".</p>
        </div>
      </div>

      <h3 id="manipulasi-dom">7. Manipulasi DOM Dinamis</h3>
      <CodeBlock language="javascript">{`const domOutput = document.getElementById("dom-output");
let itemCount = 0;

document.getElementById("btn-tambah-item").addEventListener("click", function() {
  itemCount++;
  const newItem = document.createElement("div");
  newItem.className = "p-2 mb-2 bg-gray-100 rounded";
  newItem.innerText = \`Item \${itemCount}\`;
  domOutput.appendChild(newItem);
});

document.getElementById("btn-hapus-item").addEventListener("click", function() {
  if (domOutput.lastChild) {
    domOutput.removeChild(domOutput.lastChild);
    itemCount--;
  }
});`}</CodeBlock>
      <div className="callout callout-info">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p>DOM adalah representasi struktur HTML dalam bentuk pohon objek. JavaScript dapat memanipulasi DOM untuk mengubah konten, struktur, dan gaya halaman web secara dinamis.</p></div>
      </div>

      <h3 id="fetch-api">8. Integrasi Fetch API & Async/Await</h3>
      <CodeBlock language="javascript">{`document.getElementById("btn-fetch").addEventListener("click", async function() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const apiOutput = document.getElementById("api-output");
    apiOutput.innerHTML = "<h3>Daftar Post:</h3>";
    data.slice(0, 5).forEach(post => {
      apiOutput.innerHTML += \`
        <div style="margin-bottom:1rem;padding:0.75rem;background:#f3f4f6;border-radius:4px">
          <h4>\${post.title}</h4>
          <p>\${post.body}</p>
        </div>
      \`;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("api-output").innerHTML =
      \`<p style="color:red">Gagal mengambil data: \${error.message}</p>\`;
  }
});`}</CodeBlock>
      <div className="callout callout-info">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p>Fetch API adalah cara modern untuk melakukan HTTP request di JavaScript. Dengan async/await, kode menjadi lebih mudah dibaca dibandingkan callback atau promise chaining.</p></div>
      </div>
      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body">
          <p><strong>Latihan Mandiri: Ambil Data User</strong><br />
          Buat tombol baru "Ambil Data User" yang saat diklik memanggil <code>https://jsonplaceholder.typicode.com/users</code>, tampilkan nama dan email dari 3 user pertama saja. Expected output: muncul 3 baris berisi nama dan email user dari API tersebut.</p>
        </div>
      </div>

      <h2 id="hasil-praktikum">Hasil Praktikum</h2>
      <p>Setelah menyelesaikan seluruh materi praktikum, mahasiswa diharapkan memiliki penguasaan terhadap:</p>
      <ul>
        <li>Konfigurasi dan integrasi file HTML dan JavaScript modern</li>
        <li>Deklarasi variabel, tipe data primitif, dan operator aritmatika/logika</li>
        <li>Implementasi alur logika menggunakan struktur kondisional dan perulangan</li>
        <li>Penyusunan kode modular menggunakan fungsi dan event handler terstruktur</li>
        <li>Manipulasi Document Object Model (DOM) untuk antarmuka yang reaktif</li>
        <li>Pengelolaan struktur data Array dan Objek serta metode transformasinya</li>
        <li>Penerapan Fetch API untuk komunikasi data asinkron</li>
      </ul>

      <h2 id="tugas-praktikum">Tugas Praktikum: Aplikasi Kasir &amp; Keranjang Belanja Sederhana (Mini POS)</h2>
      <p>
        Buatlah sebuah aplikasi web <strong>Kasir &amp; Keranjang Belanja Sederhana (Mini POS)</strong> untuk kasir kantin atau toko kampus. Studi kasus ini dirancang dengan alur yang sangat jelas dan mudah dipahami untuk menyatukan ketiga kompetensi dasar praktikum (validasi input form, perhitungan kalkulator otomatis, dan manajemen keranjang belanja berbasis <code>localStorage</code>).
      </p>

      <h3>Skenario &amp; Persyaratan Fitur</h3>

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

      <h3>Kriteria Penilaian</h3>
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
                <td style={{ padding: "0.625rem 1rem", fontWeight: 600, color: "var(--color-navy-800)" }}>{aspek}</td>
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
            <li>Batas akhir pengumpulan: <strong>Minggu, 23 Maret 2025, pukul 23:59 WIB</strong>.</li>
            <li>Keterlambatan pengumpulan dikenakan pengurangan nilai sebesar <strong>10% per hari keterlambatan</strong>.</li>
          </ul>
        </li>
      </ul>

      <SubmissionBox pertemuan={1} />
    </>
  );
}
