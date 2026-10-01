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

      
      <h3 id="perintah-dasar">Perintah Dasar JavaScript (Keywords)</h3>
      <p>Sebelum memulai, mari pahami beberapa kata kunci (<i>keywords</i>) dasar yang akan sering kita gunakan:</p>
      <ul>
        <li><code>var</code>, <code>let</code>, <code>const</code> digunakan untuk membuat tempat menyimpan data (variabel). Bedanya, <code>const</code> itu nilainya tetap dan tidak bisa diubah lagi, sedangkan <code>let</code> bisa diubah. <code>var</code> adalah cara lama yang sekarang sudah jarang dipakai.</li>
        <li><code>function</code> adalah cara kita membuat sebuah blok kode yang punya tugas spesifik, mirip seperti resep. Kita bisa memanggil fungsi ini berkali-kali tanpa harus menulis ulang kodenya.</li>
        <li><code>return</code> digunakan di dalam fungsi untuk mengembalikan atau menghasilkan nilai akhir dari fungsi tersebut setelah selesai bekerja.</li>
        <li><code>if</code>, <code>else</code>, <code>switch</code> adalah logika untuk membuat keputusan. Ibaratnya, "kalau nilainya A maka lakukan ini, kalau B lakukan itu".</li>
        <li><code>for</code>, <code>while</code> digunakan untuk melakukan perulangan. Kalau kita mau mencetak angka 1 sampai 100, kita tidak perlu menulisnya manual 100 kali, cukup pakai perulangan.</li>
        <li><code>async</code> dan <code>await</code> adalah perintah untuk menyuruh JavaScript bersabar menunggu suatu proses yang butuh waktu (misalnya mendownload data dari internet) sebelum lanjut ke baris kode berikutnya.</li>
      </ul>

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

      {/* ── Penjelasan Langkah 1 ── */}
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "0.5rem", padding: "1rem 1.25rem", marginBottom: "1rem", fontSize: "0.875rem" }}>
        <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>🔍 Penjelasan Kode Langkah 1</p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          <li>Deklarasi <code>{"<!DOCTYPE html>"}</code> ini fungsinya buat ngasih tau browser bahwa ini adalah dokumen HTML versi 5 (paling modern). Wajib ada di baris pertama setiap file HTML.</li>
          <li>Sedangkan <code>{"<html lang=\"en\">"}</code> adalah tag utama yang membungkus semua isi web kita. Atribut <code>lang="en"</code> memberitahu browser bahwa bahasa halaman ini adalah Inggris.</li>
          <li>Bagian <code>{"<meta charset=\"UTF-8\">"}</code> penting banget supaya tulisan atau karakter khusus di web kita nggak berantakan pas dibuka. karakter agar teks (termasuk huruf khusus seperti é, ñ, atau karakter Asia) tampil dengan benar di browser.</li>
          <li>Lalu <code>{"<meta name=\"viewport\" ...>"}</code> itu rahasianya biar web kita bisa otomatis menyesuaikan ukuran layar, baik dibuka di HP maupun laptop. ukuran layar perangkat secara otomatis (responsif), sehingga tampil bagus baik di laptop maupun ponsel.</li>
          <li>Kode <code>{"<script src=\"https://cdn...\">..."}</code> cuma buat manggil library Tailwind dari internet (biar tampilannya rapi tanpa banyak CSS manual). CSS dari internet (CDN). Baris ini <em>opsional</em> karena fokus pertemuan ini adalah JavaScript, bukan styling.</li>
          <li>Nah, <code>{"<div id=\"result\">"}</code> ini ibarat kotak kosong yang sengaja kita siapin buat diisi macem-macem nanti sama JavaScript. di halaman yang nantinya akan <em>diisi konten secara dinamis</em> oleh JavaScript. Atribut <code>id</code> digunakan agar JavaScript bisa menemukan elemen ini dengan mudah.</li>
          <li>Terakhir, <code>{"<script src=\"script.js\">"}</code> dipake buat nyambungin file HTML ini sama kode JavaScript kita. eksternal ke halaman HTML. Diletakkan <em>sebelum penutup {"</body>"}</em> supaya semua elemen HTML sudah terbaca oleh browser sebelum JavaScript dieksekusi.</li>
        </ul>
      </div>

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

      {/* ── Penjelasan Langkah 2 ── */}
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "0.5rem", padding: "1rem 1.25rem", marginBottom: "1rem", fontSize: "0.875rem" }}>
        <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>🔍 Penjelasan Kode Langkah 2</p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          <li><code>var nama = "Budi"</code> — Membuat variabel bernama <code>nama</code> dan mengisinya dengan nilai teks (string) <code>"Budi"</code>. <code>var</code> adalah cara lama; sebaiknya gunakan <code>let</code> atau <code>const</code> untuk kode modern.</li>
          <li><code>let usia = 20</code> — Membuat variabel <code>usia</code> berisi angka <code>20</code>. Gunakan <code>let</code> untuk variabel yang nilainya <em>bisa berubah</em> di kemudian hari.</li>
          <li><code>const TAHUN_LAHIR = 2004</code> — Membuat konstanta (nilai tetap). Nilai konstanta <em>tidak bisa diubah</em> setelah ditetapkan. Konvensi: huruf kapital semua untuk konstanta.</li>
          <li><code>console.log(...)</code> — Menampilkan informasi ke <em>Console</em> di DevTools browser (buka dengan <kbd>F12</kbd> → tab <em>Console</em>). Ini adalah alat paling dasar untuk mengecek nilai variabel saat belajar.</li>
          <li><code>document.getElementById("result")</code> — Perintah untuk mencari elemen HTML yang memiliki <code>id="result"</code>. Hasilnya adalah objek elemen yang bisa kita manipulasi.</li>
          <li><code>.innerHTML = ...</code> — Mengisi (atau mengganti) konten di dalam elemen tersebut dengan kode HTML baru.</li>
          <li>Backtick <code>{"`...`"}</code> dan <code>{"${variabel}"}</code> — Disebut <em>Template Literal</em>. Cara modern menulis string yang bisa menyisipkan nilai variabel langsung di dalam teks tanpa repot sambung-menyambung dengan <code>+</code>.</li>
        </ul>
      </div>

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

      {/* ── Penjelasan Langkah 3 ── */}
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "0.5rem", padding: "1rem 1.25rem", marginBottom: "1rem", fontSize: "0.875rem" }}>
        <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>🔍 Penjelasan Kode Langkah 3</p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          <li><strong>If-else if-else</strong> — Struktur pengambilan keputusan. Program memeriksa kondisi dari atas ke bawah; blok yang kondisinya terpenuhi (<code>true</code>) yang dijalankan, sisanya dilewati. Bayangkan seperti: <em>"Kalau nilai ≥ 90 → A, kalau tidak tapi ≥ 80 → B..."</em></li>
          <li><code>{"nilai >= 90"}</code> — Operator perbandingan. <code>{">"}</code> berarti lebih besar, <code>=</code> berarti sama dengan, jadi <code>{">="}</code> berarti <em>lebih besar atau sama dengan</em>. Hasilnya selalu <code>true</code> atau <code>false</code>.</li>
          <li><strong>Ternary operator</strong> <code>{"kondisi ? nilaiJikaTrue : nilaiJikaFalse"}</code> — Cara singkat menulis if-else dalam satu baris. Contoh: <code>{"nilai >= 60 ? \"Lulus\" : \"Tidak Lulus\""}</code> artinya <em>"jika nilai ≥ 60 hasilnya 'Lulus', jika tidak hasilnya 'Tidak Lulus'"</em>.</li>
          <li>Fungsi <code>new Date().getDay()</code> ini kita panggil buat ngedapetin angka hari ini (0 buat Minggu, 1 buat Senin, dan seterusnya). hari saat ini dari jam komputer sebagai angka: <code>0</code> = Minggu, <code>1</code> = Senin, ..., <code>6</code> = Sabtu. <code>new Date()</code> membuat objek tanggal/waktu saat ini.</li>
          <li><strong>Switch-case</strong> — Alternatif if-else ketika kita ingin mencocokkan satu variabel dengan banyak kemungkinan nilai. Lebih rapi dibanding if-else bertingkat yang panjang.</li>
          <li><code>break</code> — Wajib ada di akhir setiap <code>case</code>. Tanpa <code>break</code>, program akan terus mengeksekusi case berikutnya secara berurutan (<em>fall-through</em>), yang biasanya tidak diinginkan.</li>
          <li><code>default</code> — Blok yang dijalankan jika tidak ada satu pun <code>case</code> yang cocok. Mirip dengan blok <code>else</code> pada if-else.</li>
        </ul>
      </div>

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

      {/* ── Penjelasan Langkah 4 ── */}
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "0.5rem", padding: "1rem 1.25rem", marginBottom: "1rem", fontSize: "0.875rem" }}>
        <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>🔍 Penjelasan Kode Langkah 4</p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          <li><code>[85, 92, 78, 90, 88]</code> — Ini adalah <em>Array</em>, yaitu daftar/kumpulan nilai yang disimpan dalam satu variabel. Setiap item punya posisi (indeks) mulai dari <code>0</code>. Jadi <code>nilaiSiswa[0]</code> bernilai <code>85</code>.</li>
          <li><strong>For loop</strong> <code>{"for (let i = 0; i < nilaiSiswa.length; i++)"}</code> — Tiga bagian dipisah titik koma: (1) <code>i = 0</code> mulai dari indeks 0, (2) <code>{"i < nilaiSiswa.length"}</code> terus berjalan selama belum melewati panjang array, (3) <code>i++</code> naikkan <code>i</code> setiap putaran. Loop ini berjalan 5 kali untuk 5 nilai.</li>
          <li><code>total += nilaiSiswa[i]</code> — Singkatan dari <code>{"total = total + nilaiSiswa[i]"}</code>. Mengambil nilai pada indeks ke-<code>i</code> lalu menambahkannya ke <code>total</code>.</li>
          <li><code>.toFixed(2)</code> — Memformat angka desimal agar hanya tampil 2 angka di belakang koma. Misal <code>86.6</code> menjadi <code>"86.60"</code>.</li>
          <li><strong>While loop</strong> — Terus berulang <em>selama kondisinya masih true</em>. Perhatikan <code>hitungMundur--</code> yang menurunkan nilai setiap putaran agar kondisi akhirnya menjadi <code>false</code> dan loop berhenti. Tanpa ini loop akan jalan selamanya (<em>infinite loop</em>).</li>
          <li>Ada juga <strong>For...of loop</strong>, ini cara modern (ES6) yang lebih gampang buat ngulang isi array satu per satu tanpa pusing mikirin nomor urutannya. dalam array satu per satu, tanpa perlu mengurus nomor indeks secara manual. Lebih ringkas dan mudah dibaca.</li>
        </ul>
      </div>

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

      {/* ── Pembaruan HTML untuk Fase 2 ── */}
      <div className="callout callout-info" style={{ marginTop: "2rem" }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body">
          <p><strong>Penting: Persiapan HTML untuk Langkah Selanjutnya</strong><br />
          Mulai dari <strong>Langkah 5 hingga 8</strong>, kita akan membangun fitur yang lebih interaktif (studi kasus sesungguhnya). Oleh karena itu, kita butuh elemen antarmuka (UI) baru. Silakan tambahkan kode HTML berikut ke dalam <code>index.html</code> Anda, letakkan di bawah <code>{"<div id=\"result\"></div>"}</code>.</p>
        </div>
      </div>

      <CodeBlock language="html">{`<!-- Tambahkan ini di dalam <body> index.html -->
<hr style="margin: 20px 0;">
<h2>Bagian Interaktif (Langkah 5 - 8)</h2>

<!-- Elemen untuk Langkah 5: Fungsi & Event -->
<div>
  <input type="text" id="nama-input" placeholder="Masukkan nama Anda" />
  <button id="sapa-button">Sapa Saya!</button>
  <div id="sapa-output"></div>
</div>

<hr style="margin: 20px 0;">

<!-- Elemen untuk Langkah 7: DOM Dinamis -->
<div>
  <button id="btn-tambah-item">Tambah Item To-Do</button>
  <button id="btn-hapus-item">Hapus Item Terakhir</button>
  <div id="dom-output" style="margin-top: 10px;"></div>
</div>

<hr style="margin: 20px 0;">

<!-- Elemen untuk Langkah 8: Fetch API -->
<div>
  <button id="btn-fetch">Ambil Data dari Internet (API)</button>
  <div id="api-output" style="margin-top: 10px;"></div>
</div>`}</CodeBlock>

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


      {/* ── Penjelasan Langkah 5 ── */}
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "0.5rem", padding: "1rem 1.25rem", marginBottom: "1rem", fontSize: "0.875rem" }}>
        <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>🔍 Penjelasan Kode Langkah 5</p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          <li>Kode <code>{"function sapaNama(nama) { ... }"}</code> itu cara kita ngebuat fungsi. Fungsi ini nerima data (parameter) yang bisa kita olah di dalamnya. bernama <code>sapaNama</code> yang menerima satu <em>parameter</em> (<code>nama</code>). Fungsi adalah blok kode yang bisa dipanggil berulang kali tanpa menulis ulang logikanya.</li>
          <li>Penggunaan <code>return</code> berfungsi buat ngelempar hasil akhir operasi dari dalam fungsi keluar supaya bisa dipakai lagi. ke pemanggil. Nilai ini bisa disimpan ke variabel atau langsung digunakan di tempat pemanggilan.</li>
          <li>Perintah <code>{"addEventListener(\"click\", ...)"}</code> kita pasang di tombol biar JavaScript tau harus ngapain pas pengguna nge-klik tombol tersebut. pada tombol. Artinya: <em>"setiap kali tombol ini diklik, jalankan fungsi di dalamnya"</em>. Inilah cara JavaScript merespons interaksi pengguna.</li>
          <li>Setiap kali butuh nilai dari input text, kita cukup panggil <code>.value</code> dari elemen tersebut. di dalam elemen <code>{"<input>"}</code>.</li>
          <li>Fungsi <code>.trim()</code> kita panggil buat bersihin spasi kosong di awal sama di akhir teks, biar user gak asal isi spasi doang. Berguna agar input yang hanya berisi spasi tidak dianggap sebagai teks valid.</li>
          <li>Gunakan <code>=== ""</code> buat ngecek persis apakah isinya bener-bener kosong atau nggak (ini lebih ketat dan aman dibanding cuma pakai dua sama dengan <code>==</code>). (<em>strict equality</em>). Mengecek apakah nilai sama persis termasuk tipe datanya. Berbeda dengan <code>==</code> yang lebih longgar.</li>
          <li>Kita buat fungsi <code>hitungKalkulator</code> yang nerima 3 nilai sekaligus buat ngitung matematika dasar sesuai operasinya., menggunakan <code>switch</code> untuk menentukan operasi yang dijalankan sesuai nilai <code>operasi</code> yang dikirim saat pemanggilan.</li>
          <li>Pengecekan <code>angka2 === 0</code> ini penting buat ngehindarin <em>error</em> pembagian dengan nol yang bisa bikin aplikasi kita ngasih hasil aneh seperti Infinity. Dalam JavaScript, pembagian dengan nol menghasilkan <code>Infinity</code>, sehingga kita perlu menanganinya secara manual.</li>
        </ul>
      </div>

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

      {/* ── Penjelasan Langkah 6 ── */}
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "0.5rem", padding: "1rem 1.25rem", marginBottom: "1rem", fontSize: "0.875rem" }}>
        <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>🔍 Penjelasan Kode Langkah 6</p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          <li>Fungsi <code>buah.push()</code> dipakai kalau kita mau nambahin data baru di urutan paling belakang array. ke <em>akhir</em> array. Array <code>buah</code> kini berisi 6 item.</li>
          <li>Sebaliknya, <code>buah.pop()</code> bakal ngebuang data urutan terakhir dari array. dari array. Hasil penghapusan disimpan ke variabel <code>itemDihapus</code>.</li>
          <li>Perintah <code>buah.sort()</code> sangat praktis buat ngurutin isi array sesuai alfabet atau abjad (A–Z). (A–Z) secara langsung (<em>in-place</em>) pada array yang sama.</li>
          <li><code>.map((item, i) ={">"} ...)</code> — Membuat array <em>baru</em> dengan mentransformasi setiap elemen. Hasilnya selalu sama panjang dengan array asli. Di sini setiap nama buah digabung dengan harganya.</li>
          <li><code>.filter((_, i) ={">"} ...)</code> — Menyaring array, menghasilkan array <em>baru</em> yang hanya berisi elemen yang lolos kondisi. Tanda <code>_</code> adalah konvensi untuk parameter yang tidak dipakai.</li>
          <li><strong>Objek</strong> itu ibarat rapot atau kartu identitas, kita bisa nyimpen data berpasangan seperti nama siapa, umur berapa, semuanya ngumpul dalam satu variabel. yang berkaitan dalam satu variabel. Bayangkan seperti formulir: satu objek bisa berisi nama, NIM, jurusan, nilai, dll.</li>
          <li>Kata kunci <code>this</code> ini merujuk ke objek itu sendiri, jadi misal kita mau panggil properti nama dari dalam objeknya, cukup tulis <code>this.nama</code>. Jadi <code>this.nama</code> artinya mengambil properti <code>nama</code> dari objek <code>mahasiswa</code>.</li>
          <li>Buat ngambil angka-angkanya aja dari sebuah objek tanpa ngambil nama key-nya, kita pakai <code>Object.values()</code>. dari objek <code>nilai</code> menjadi sebuah array: <code>[85, 90, 88]</code>.</li>
          <li><code>.reduce((s, n) ={">"} s + n, 0)</code> — Menjumlahkan semua elemen array menjadi satu angka. <code>s</code> adalah akumulator (nilai terkumpul), <code>n</code> adalah elemen saat ini, <code>0</code> adalah nilai awal akumulator.</li>
        </ul>
      </div>
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

      {/* ── Penjelasan Langkah 7 ── */}
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "0.5rem", padding: "1rem 1.25rem", marginBottom: "1rem", fontSize: "0.875rem" }}>
        <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>🔍 Penjelasan Kode Langkah 7</p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          <li>Pahami bahwa <strong>DOM</strong> adalah cara JavaScript ngeliat halaman HTML sebagai susunan pohon. Dari sinilah kita bisa memanipulasi HTML sesuka hati. sebagai pohon objek di memori browser. JavaScript dapat membaca dan mengubah pohon ini secara langsung, sehingga halaman bisa berubah tanpa perlu di-refresh.</li>
          <li>Kita pakai <code>document.createElement()</code> kalau pengen ngebuat elemen HTML (misalnya nambahin div) langsung dari kode JavaScript. <code>{"<div>"}</code> baru <em>di memori</em>. Elemen ini belum terlihat di halaman sampai kita menempelkannya.</li>
          <li>Atribut <code>.className</code> dipake buat ngasih class CSS ke elemen yang baru aja kita buat tadi biar langsung ada styling-nya. ke elemen yang baru dibuat, sama seperti menulis atribut <code>class="..."</code> langsung di HTML.</li>
          <li>Pake <code>.innerText</code> buat nyuntikin tulisan ke dalem elemen HTML dengan aman, tanpa takut tulisannya malah ngerender tag HTML beneran. di dalam elemen. Berbeda dengan <code>innerHTML</code>, <code>innerText</code> memperlakukan konten sebagai teks biasa (bukan HTML), sehingga lebih aman dari serangan injeksi.</li>
          <li>Setelah elemen berhasil dibuat dan diset isinya, <code>.appendChild()</code> inilah yang akhirnya nempelin elemen tersebut ke halaman web biar kelihatan. sebagai anak (child) terakhir dari <code>domOutput</code>. Setelah baris ini, elemen langsung tampil di halaman.</li>
          <li>Perintah <code>.lastChild</code> cukup sering dipakai buat ngakses elemen paling buncit atau terakhir dari suatu bagian. dari <code>domOutput</code>. Digunakan untuk memastikan ada elemen yang bisa dihapus sebelum memanggil <code>removeChild</code>.</li>
          <li>Kalau <code>.appendChild</code> buat nambah, <code>.removeChild()</code> adalah cara kita buat menghapus elemen tersebut dari halaman web. dari <code>domOutput</code>, sehingga item yang terakhir ditambahkan itulah yang pertama dihapus.</li>
          <li>Penulisan <code>++</code> dan <code>--</code> ini cara kilat programmer buat nambah atau ngurangin nilai sebanyak 1 angka buat fitur penomoran. <code>itemCount</code> sebesar 1. Digunakan sebagai penomoran item otomatis yang selalu sinkron dengan isi daftar.</li>
        </ul>
      </div>
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

      {/* ── Penjelasan Langkah 8 ── */}
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "0.5rem", padding: "1rem 1.25rem", marginBottom: "1rem", fontSize: "0.875rem" }}>
        <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>🔍 Penjelasan Kode Langkah 8</p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          <li>Dengan nulis <code>async function</code>, kita ngasih tau JavaScript kalau fungsi ini butuh waktu buat selesai, contohnya kayak nungguin data ke-download dari internet. Fungsi ini bisa menggunakan kata kunci <code>await</code> di dalamnya untuk menunggu operasi lambat (seperti mengambil data dari internet) tanpa membekukan halaman.</li>
          <li>Kode <code>await fetch()</code> fungsinya buat nge-request data dari server (API), dan berkat tulisan await, prosesnya bakal nunggu sampai datanya bener-bener nyampe tanpa bikin web-nya hang. tersebut dan <em>menunggu</em> jawabannya. <code>fetch</code> adalah cara bawaan browser untuk berkomunikasi dengan server/API. Kata <code>await</code> membuat kode di bawahnya baru berjalan setelah respons tiba.</li>
          <li>Data dari internet itu awalnya teks mentah, makanya kita butuh nge-konversi dengan <code>.json()</code> biar datanya bisa dibaca sama JavaScript. mentah (JSON string). Baris ini mengubahnya menjadi objek/array JavaScript yang siap digunakan.</li>
          <li>Fungsi <code>.slice(0, 5)</code> kita panggil biar datanya cuma diambil 5 biji doang dari atas, supaya web kita nggak kepenuhan konten. dari array <code>data</code>. Karena API mengembalikan 100 post, kita batasi agar halaman tidak terlalu panjang.</li>
          <li><code>.forEach(post ={">"} {"{ ... }"})</code> — Mengulang setiap item dalam array dan menjalankan fungsi untuk tiap item. Di sini setiap post dikonversi menjadi HTML dan ditambahkan ke halaman.</li>
          <li>Blok <strong>try-catch</strong> adalah jaring pengaman kita. Kalau server error atau internet mati saat ngambil API, kodenya gak bakal bikin aplikasi kita hancur berantakan. Kode di dalam <code>try</code> dieksekusi lebih dulu. Jika terjadi kesalahan (misal internet mati atau URL salah), JavaScript langsung melompat ke blok <code>catch</code> untuk menjalankan penanganan error — sehingga halaman tidak <em>crash</em>.</li>
          <li>Terakhir, <code>error.message</code> bakal nangkep pesan aslinya pas error terjadi dan bisa kita sampaikan langsung ke layar pengunjung web biar mereka paham apa yang salah. yang berisi pesan kesalahan dalam bentuk teks, sehingga bisa ditampilkan kepada pengguna secara informatif.</li>
        </ul>
      </div>
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
