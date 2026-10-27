import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 4: Python Dasar
export default function Pertemuan4({ subId }: { subId?: string }) {
  const calloutInfo = (text: React.ReactNode) => (
    <div className="callout callout-info">
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}
      >
        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div className="callout-body">{typeof text === "string" ? <p>{text}</p> : text}</div>
    </div>
  );

  const calloutExercise = (title: string, text: React.ReactNode) => (
    <div className="callout callout-warning">
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}
      >
        <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div className="callout-body">
        <p><strong>Latihan Mandiri: {title}</strong></p>
        {typeof text === "string" ? <p>{text}</p> : text}
      </div>
    </div>
  );

  const codeHint = (text: React.ReactNode) => (
    <div className="callout callout-info" style={{ marginTop: "0.5rem", marginBottom: "0.75rem" }}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}
      >
        <path
          d="M10 2a6 6 0 00-6 6c0 2.2 1.2 4.1 3 5.1V15a1 1 0 001 1h4a1 1 0 001-1v-1.9c1.8-1 3-2.9 3-5.1a6 6 0 00-6-6z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M8 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="callout-body">
        <p style={{ fontWeight: 600, marginBottom: "0.35rem", color: "var(--color-accent)" }}>
          Penjelasan Logika Kode (Per Baris):
        </p>
        <div style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
          {text}
        </div>
      </div>
    </div>
  );

  const codeOutput = (text: React.ReactNode) => (
    <div
      style={{
        marginTop: "0.5rem",
        marginBottom: "1.5rem",
        padding: "0.85rem 1rem",
        borderRadius: "8px",
        border: "1px solid rgba(16, 185, 129, 0.25)",
        backgroundColor: "rgba(16, 185, 129, 0.05)",
        display: "flex",
        gap: "0.75rem",
        alignItems: "flex-start",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        style={{ flexShrink: 0, marginTop: "2px", color: "#10b981" }}
      >
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8l3 2-3 2M11 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ fontSize: "0.875rem", color: "var(--color-text-primary)", lineHeight: 1.6 }}>
        <strong style={{ color: "#10b981", display: "block", marginBottom: "0.25rem" }}>
          Hasil Eksekusi &amp; Output Program:
        </strong>
        {text}
      </div>
    </div>
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* 0. DASAR TEORI                                                            */}
      {/* ========================================================================= */}
      {(!subId || subId === "dasar-teori") && (
        <section id="dasar-teori">
          <h2>Dasar Teori Python</h2>
          <p>
            Python adalah bahasa pemrograman tingkat tinggi (<em>high-level</em>), interpretatif, dan berorientasi objek dengan filosofi desain yang sangat menekankan pada keterbacaan kode (<em>readability</em>). 
            Diciptakan oleh <strong>Guido van Rossum</strong> dan pertama kali dirilis ke publik pada tahun 1991, Python didesain agar kode yang ditulis terlihat bersih, elegan, dan sedekat mungkin dengan bahasa Inggris sehari-hari.
          </p>

          <h3>Mengapa Python untuk Backend &amp; Web Development?</h3>
          <p>
            Di industri modern dan kurikulum pemrograman web, Python memegang peranan krusial sebagai fondasi arsitektur sisi server (<em>backend</em>). 
            Kombinasi sintaksis yang ringkas dan ekosistem pustaka yang masif menjadikan Python pilihan utama dalam berbagai domain:
          </p>
          <ul>
            <li><strong>Web Backend Frameworks</strong>: Framework tangguh seperti Pyramid, FastAPI, Django, dan Flask memungkinkan pembangunan REST API dan microservices dalam waktu singkat.</li>
            <li><strong>Data Science &amp; Big Data</strong>: NumPy, Pandas, Polars, dan SciPy untuk manipulasi dataset tabular skala besar.</li>
            <li><strong>Artificial Intelligence &amp; Machine Learning</strong>: PyTorch, TensorFlow, Scikit-learn, dan Transformers (HuggingFace) yang menjadi standar industri AI global.</li>
            <li><strong>Automation &amp; DevOps Scripting</strong>: Otomasi konfigurasi server, web scraping dengan BeautifulSoup / Selenium, serta orkestrasi pipeline data.</li>
          </ul>

          <h3>Karakteristik Kunci Python</h3>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem" }}>Karakteristik</th>
                  <th style={{ padding: "0.75rem" }}>Deskripsi</th>
                  <th style={{ padding: "0.75rem" }}>Contoh Implikasi</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Interpreted</td>
                  <td style={{ padding: "0.75rem" }}>Kode dieksekusi baris demi baris oleh interpreter tanpa perlu fase kompilasi manual ke biner seperti C++ atau Java.</td>
                  <td style={{ padding: "0.75rem" }}><code>python script.py</code> langsung menjalankan instruksi.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Dynamically Typed</td>
                  <td style={{ padding: "0.75rem" }}>Tipe data variabel ditentukan secara otomatis saat runtime; tidak perlu mendeklarasikan keyword tipe data.</td>
                  <td style={{ padding: "0.75rem" }}><code>x = 10</code> lalu kemudian <code>x = &quot;teks&quot;</code> valid secara sintaksis.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Indentation-Based Syntax</td>
                  <td style={{ padding: "0.75rem" }}>Tidak menggunakan kurung kurawal <code>&#123;&#125;</code> untuk menandai blok kode; menggunakan spasi indentasi (standar 4 spasi).</td>
                  <td style={{ padding: "0.75rem" }}>Struktur kode rapi secara alami dan konsisten di seluruh tim pengembang.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Multi-Paradigm</td>
                  <td style={{ padding: "0.75rem" }}>Mendukung pemrograman prosedural, fungsional (lambda, map, filter), serta Object-Oriented Programming (OOP).</td>
                  <td style={{ padding: "0.75rem" }}>Dapat menulis skrip sederhana maupun arsitektur class berskala enterprise.</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Batteries Included</td>
                  <td style={{ padding: "0.75rem" }}>Hadir dengan ratusan pustaka bawaan (standard library) yang siap pakai tanpa perlu instalasi pihak ketiga.</td>
                  <td style={{ padding: "0.75rem" }}>Modul <code>math</code>, <code>json</code>, <code>datetime</code>, <code>os</code>, <code>sys</code> langsung tersedia.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {calloutInfo(
            "Filosofi Python: Python menempatkan kemudahan membaca dan memelihara kode di atas trik sintaksis yang rumit. Kode Python ditulis bukan hanya untuk mesin, melainkan untuk dibaca dan dipahami manusia dengan cepat."
          )}

          <h3 id="alat-bahan">Alat dan Bahan Praktikum</h3>
          <ul>
            <li><strong>Python 3.10+ (atau Python 3.8 ke atas)</strong>: Runtime engine Python resmi yang dapat diunduh gratis melalui <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org</a>.</li>
            <li><strong>Visual Studio Code</strong>: Editor teks utama yang telah dipasangi ekstensi <strong>Python (Microsoft)</strong> dan <strong>Pylance</strong> untuk IntelliSense dan linting.</li>
            <li><strong>Terminal / Command Prompt</strong>: Terminal bawaan sistem operasi atau terminal terintegrasi di VS Code untuk mengeksekusi instruksi Python.</li>
            <li><strong>Git</strong>: Untuk kontrol versi dan pelacakan commit repositori praktikum.</li>
          </ul>

          <h3>Uji Coba Cepat: Mode Interaktif (REPL) vs Script File</h3>
          <p>
            Python menawarkan dua cara utama untuk mengeksekusi kode: melalui <strong>Interactive REPL (Read-Eval-Print Loop)</strong> langsung di terminal untuk eksperimen cepat satu baris, atau melalui <strong>Script File (berkas <code>.py</code>)</strong> untuk logika program terstruktur.
          </p>

          <p><strong>Uji Coba 1: Menggunakan Python REPL di Terminal</strong></p>
          <CodeBlock language="bash">{`# Buka terminal Anda, lalu ketik perintah:
python3
# atau untuk pengguna Windows:
python`}</CodeBlock>

          {codeOutput(
            <div>
              <p>Terminal akan menampilkan prompt interaktif tiga panah <code>&gt;&gt;&gt;</code>:</p>
              <pre style={{ margin: "0.5rem 0", color: "#10b981", fontFamily: "monospace" }}>
{`Python 3.11.8 (main, Feb 12 2024, 14:50:00) 
[Clang 15.0.0] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Halo dari Python REPL!")
Halo dari Python REPL!
>>> 15 * 4 + 10
70
>>> exit()   # Ketik exit() untuk keluar dari REPL`}
              </pre>
            </div>
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 1. PENGENALAN & EKSEKUSI PYTHON                                           */}
      {/* ========================================================================= */}
      {(!subId || subId === "pengenalan-python") && (
        <section id="pengenalan-python">
          <h2>1. Pengenalan &amp; Eksekusi Python</h2>
          <p>
            Pada bagian ini, kita akan membuat lingkungan kerja (<em>workspace</em>) teratur di VS Code, menulis berkas skrip Python pertama, memahami mekanisme eksekusi, serta mendalami aturan indentasi dan fungsi <code>print()</code>.
          </p>

          <h3>Langkah 1: Mempersiapkan Folder Kerja di VS Code</h3>
          <p>
            Buka VS Code, buat sebuah folder kerja baru dengan nama <code>latihan_python</code>, lalu buka folder tersebut di VS Code (<em>File &rarr; Open Folder...</em>).
            Buka integrated terminal di VS Code dengan menekan tombol pintas <kbd>Ctrl</kbd> + <kbd>`</kbd> (atau <kbd>Cmd</kbd> + <kbd>`</kbd> di macOS).
          </p>

          <h3>Langkah 2: Verifikasi Instalasi Python</h3>
          <p>Ketikkan perintah berikut di terminal untuk memastikan interpreter Python telah terpasang dan dikenali dalam sistem:</p>
          <CodeBlock language="bash">{`python --version
# Jika perintah di atas tidak ditemukan, coba:
python3 --version`}</CodeBlock>

          {codeOutput(
            <p>Terminal akan mengembalikan versi terpasang, contoh: <code>Python 3.11.8</code> atau <code>Python 3.12.x</code>.</p>
          )}

          <h3>Langkah 3: Menulis Program Pertama (01_pengenalan.py)</h3>
          <p>
            Buat file baru di dalam folder kerja dengan nama <code>01_pengenalan.py</code>, lalu tuliskan kode berikut:
          </p>

          <CodeBlock language="python">{`# ===================================================
# Berkas: 01_pengenalan.py
# Deskripsi: Mengenal sintaks dasar dan fungsi print()
# ===================================================

# 1. Output string sederhana
print("Hello, World!")
print("Selamat datang di Praktikum Pemrograman Web ITERA!")

# 2. Mencetak beberapa argumen sekaligus (dipisahkan spasi secara default)
nama_praktikan = "Ahmad Fadhilah"
nim_praktikan = 121140001
print("Nama:", nama_praktikan, "| NIM:", nim_praktikan)

# 3. Kustomisasi pemisah (separator) dengan parameter sep
print("Teknik", "Informatika", "ITERA", sep=" -> ")

# 4. Kustomisasi karakter akhir baris dengan parameter end
print("Memuat data", end="... ")
print("Selesai!")

# 5. Menggunakan karakter escape (\\n untuk baris baru, \\t untuk tabulasi)
print("\\nDaftar Mata Kuliah:\\n\\t1. Pemrograman Web\\n\\t2. Basis Data")`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 1-4:</strong> Komentar satu baris yang diawali tanda pagar (<code>#</code>). Teks ini diabaikan oleh interpreter dan berfungsi sebagai dokumentasi kode.</li>
                <li><strong>Baris 7-8:</strong> Fungsi bawaan <code>print()</code> mencetak teks literal bertipe string ke konsol dan secara otomatis menambahkan karakter baris baru (<em>newline</em>) di akhir.</li>
                <li><strong>Baris 11-13:</strong> Kita menginisialisasi variabel <code>nama_praktikan</code> dan <code>nim_praktikan</code>, kemudian mengoper beberapa parameter yang dipisahkan tanda koma ke dalam <code>print()</code>. Python otomatis menggabungkan nilai-nilai tersebut dengan spasi tunggal.</li>
                <li><strong>Baris 16:</strong> Parameter bawaan <code>sep=&quot; -&gt; &quot;</code> mengganti karakter pemisah bawaan (spasi) menjadi tanda panah di antara teks yang dicetak.</li>
                <li><strong>Baris 19-20:</strong> Secara bawaan, <code>print()</code> mengakhiri baris dengan <code>\n</code>. Parameter <code>end=&quot;... &quot;</code> mencegah pergantian baris sehingga pemanggilan <code>print()</code> berikutnya langsung tersambung di baris yang sama.</li>
                <li><strong>Baris 23:</strong> Karakter khusus <code>\n</code> menyisipkan baris baru, sedangkan <code>\t</code> menyisipkan indentasi tab horizontal.</li>
              </ul>
            </div>
          )}

          <h3>Langkah 4: Menjalankan Program dari Terminal</h3>
          <p>Jalankan berkas skrip tersebut melalui integrated terminal VS Code:</p>
          <CodeBlock language="bash">{`python 01_pengenalan.py
# atau
python3 01_pengenalan.py`}</CodeBlock>

          {codeOutput(
            <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`Hello, World!
Selamat datang di Praktikum Pemrograman Web ITERA!
Nama: Ahmad Fadhilah | NIM: 121140001
Teknik -> Informatika -> ITERA
Memuat data... Selesai!

Daftar Mata Kuliah:
\t1. Pemrograman Web
\t2. Basis Data`}
            </pre>
          )}

          <h3>Aturan Ketat Indentasi Python (Indentation Rules)</h3>
          <p>
            Berbeda dengan C, C++, Java, atau JavaScript yang membungkus blok percabangan dan perulangan menggunakan kurung kurawal <code>&#123;&#125;</code>, 
            Python menggunakan <strong>spasi indentasi</strong> untuk mendefinisikan ruang lingkup blok logika. Standar resmi komunitas Python (<strong>PEP 8</strong>) merekomendasikan <strong>4 spasi</strong> untuk setiap level blok.
          </p>

          <CodeBlock language="python">{`# Contoh penulisan blok indentasi yang BENAR:
angka = 10
if angka > 5:
    print("Angka bernilai lebih dari 5")  # 4 spasi (Level 1)
    if angka == 10:
        print("Nilai tepat sama dengan 10")  # 8 spasi (Level 2)
print("Baris ini berada di luar blok percabangan")

#  CONTOH SALAH (Memicu IndentationError):
# if angka > 5:
#   print("Pakai 2 spasi")
#     print("Tiba-tiba ganti 4 spasi!")  # Error: unindent does not match any outer indentation level`}</CodeBlock>

          {calloutInfo(
            "Tips VS Code: Jangan pernah mencampur tombol Tab dengan Spasi dalam satu berkas skrip Python! Di VS Code, pastikan opsi 'Editor: Insert Spaces' aktif dengan ukuran tab 4 spasi agar indentasi konsisten."
          )}

          <h3>Mengenal Filosofi 'The Zen of Python'</h3>
          <p>
            Python memiliki panduan filosofi desain perangkat lunak yang ditulis oleh Tim Peters. Anda dapat melihatnya langsung dari terminal interaktif dengan perintah:
          </p>
          <CodeBlock language="python">{`import this`}</CodeBlock>

          <p>Beberapa prinsip emas yang paling terkenal antara lain:</p>
          <ul>
            <li><em>Beautiful is better than ugly.</em> (Kode yang indah dan tertata lebih unggul daripada kode yang rumit).</li>
            <li><em>Explicit is better than implicit.</em> (Tulis maksud kode secara jelas, jangan biarkan ada asumsi tersembunyi).</li>
            <li><em>Simple is better than complex.</em> (Pilihlah solusi yang sederhana sebelum terburu-buru merancang sistem kompleks).</li>
            <li><em>Readability counts.</em> (Keterbacaan kode adalah prioritas utama).</li>
          </ul>

          {calloutExercise(
            "Identitas Diri & Eksperimen Print",
            "Buatlah file baru latihan1.py. Cetak data profil diri Anda (Nama, NIM, Angkatan, Minat Penelitian) menggunakan fungsi print(). Eksperimenkan penggunaan parameter sep=' | ' dan buat cetakan kartu identitas berbingkai karakter pagar (#) menggunakan escape character."
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 2. VARIABEL & TIPE DATA                                                   */}
      {/* ========================================================================= */}
      {(!subId || subId === "variabel-tipe-data") && (
        <section id="variabel-tipe-data">
          <h2>2. Variabel &amp; Tipe Data</h2>
          <p>
            Variabel dalam Python adalah label atau referensi di memori komputer yang merujuk pada suatu objek nilai. 
            Karena Python bersifat <em>dynamically typed</em>, Anda tidak perlu mendeklarasikan tipe data secara eksplisit saat membuat variabel; interpreter Python akan menentukan tipenya secara otomatis saat program dijalankan.
          </p>

          <h3>Aturan Penamaan Variabel (PEP 8 Style Guide)</h3>
          <ul>
            <li>Nama variabel hanya boleh tersusun dari huruf alfabet (a-z, A-Z), angka (0-9), dan garis bawah (<code>_</code>).</li>
            <li>Nama variabel <strong>tidak boleh diawali dengan angka</strong> (contoh salah: <code>1nilai</code>, contoh benar: <code>nilai_1</code>).</li>
            <li>Python bersifat <strong>case-sensitive</strong>: variabel <code>totalGaji</code>, <code>totalgaji</code>, dan <code>TotalGaji</code> diperlakukan sebagai tiga variabel yang sepenuhnya berbeda.</li>
            <li>Gunakan gaya penulisan <strong>snake_case</strong> (huruf kecil dengan pemisah garis bawah) untuk variabel dan fungsi, contoh: <code>nama_lengkap</code>, <code>total_belanja</code>.</li>
            <li>Hindari menggunakan kata kunci reservasi Python (<em>keywords</em>) seperti <code>for</code>, <code>while</code>, <code>def</code>, <code>class</code>, <code>if</code>, <code>return</code>, <code>import</code>.</li>
          </ul>

          <h3>Tipe Data Fundamental di Python</h3>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem" }}>Tipe Data</th>
                  <th style={{ padding: "0.75rem" }}>Keyword Class</th>
                  <th style={{ padding: "0.75rem" }}>Penjelasan Singkat</th>
                  <th style={{ padding: "0.75rem" }}>Contoh Nilai</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Integer</td>
                  <td style={{ padding: "0.75rem" }}><code>int</code></td>
                  <td style={{ padding: "0.75rem" }}>Bilangan bulat positif, negatif, atau nol tanpa pecahan presisi tak hingga.</td>
                  <td style={{ padding: "0.75rem" }}><code>42</code>, <code>-17</code>, <code>1_000_000</code></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Float</td>
                  <td style={{ padding: "0.75rem" }}><code>float</code></td>
                  <td style={{ padding: "0.75rem" }}>Bilangan desimal riil dengan titik desimal atau notasi eksponensial ilmiah.</td>
                  <td style={{ padding: "0.75rem" }}><code>3.14159</code>, <code>-0.005</code>, <code>2.5e-3</code></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Complex</td>
                  <td style={{ padding: "0.75rem" }}><code>complex</code></td>
                  <td style={{ padding: "0.75rem" }}>Bilangan kompleks terdiri atas bagian riil dan imajiner (dinyatakan dengan <code>j</code>).</td>
                  <td style={{ padding: "0.75rem" }}><code>3 + 4j</code></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>String</td>
                  <td style={{ padding: "0.75rem" }}><code>str</code></td>
                  <td style={{ padding: "0.75rem" }}>Sekuens karakter teks yang diapit tanda petik tunggal (<code>'...'</code>) atau ganda (<code>&quot;...&quot;</code>).</td>
                  <td style={{ padding: "0.75rem" }}><code>&quot;Informatika ITERA&quot;</code></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Boolean</td>
                  <td style={{ padding: "0.75rem" }}><code>bool</code></td>
                  <td style={{ padding: "0.75rem" }}>Nilai kebenaran biner: bernilai benar (<code>True</code>) atau salah (<code>False</code>).</td>
                  <td style={{ padding: "0.75rem" }}><code>True</code>, <code>False</code></td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>NoneType</td>
                  <td style={{ padding: "0.75rem" }}><code>NoneType</code></td>
                  <td style={{ padding: "0.75rem" }}>Tipe khusus bernilai tunggal <code>None</code> yang menandakan ketiadaan nilai (mirip <em>null</em>).</td>
                  <td style={{ padding: "0.75rem" }}><code>None</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Hands-on Practice: Manipulasi Variabel &amp; Input/Output (02_variabel.py)</h3>
          <p>
            Buat file baru bernama <code>02_variabel.py</code> dan ketikkan program terpadu berikut:
          </p>

          <CodeBlock language="python">{`# ===================================================
# Berkas: 02_variabel.py
# Deskripsi: Eksplorasi tipe data, f-string, casting, dan operator
# ===================================================

# 1. Deklarasi variabel berbagai tipe data
nama_produk = "Mechanical Keyboard RGB"  # str
stok = 25                                # int
harga_satuan = 450000.75                 # float
sedang_diskon = True                     # bool
catatan_khusus = None                    # NoneType

# 2. Memeriksa tipe data dengan fungsi type()
print("Tipe data stok:", type(stok))
print("Tipe data harga:", type(harga_satuan))

# 3. Operasi aritmatika & f-string modern dengan format specifier
diskon_persen = 0.10
harga_setelah_diskon = harga_satuan * (1 - diskon_persen)

print(f"\\n--- INFORMASI PRODUK ---")
print(f"Nama Barang   : {nama_produk}")
print(f"Stok Tersedia : {stok} unit")
print(f"Harga Asli    : Rp {harga_satuan:,.2f}")
print(f"Harga Diskon  : Rp {harga_setelah_diskon:,.2f}")

# 4. Operasi String: Indexing, Slicing, dan Methods
kata = "Teknik Informatika"
print(f"\\nPanjang string : {len(kata)} karakter")
print(f"Huruf pertama  : {kata[0]}")
print(f"Slicing [0:6]  : {kata[0:6]}")     # Mengambil indeks 0 sampai 5 ("Teknik")
print(f"Huruf kapital  : {kata.upper()}")
print(f"Replace string : {kata.replace('Informatika', 'Komputer')}")

# 5. Type Casting (Konversi Tipe Data)
angka_str = "150"
angka_int = int(angka_str)     # Konversi str ke int
print(f"Hasil konversi string ke angka: {angka_int + 50}")  # 200

# 6. Menerima Input dari Pengguna
print("\\n--- SIMULASI TRANSAKSI ---")
nama_pembeli = input("Masukkan nama pembeli: ")
jumlah_beli_str = input("Masukkan jumlah item yang ingin dibeli: ")
jumlah_beli = int(jumlah_beli_str)  # Wajib di-casting karena input() selalu menghasilkan str!

total_bayar = jumlah_beli * harga_setelah_diskon
print(f"Terima kasih {nama_pembeli}, total tagihan Anda: Rp {total_bayar:,.2f}")`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 7-11:</strong> Deklarasi variabel secara dinamis tanpa kata kunci khusus. Python langsung mengenali <code>stok</code> sebagai integer, <code>harga_satuan</code> sebagai float, dan <code>sedang_diskon</code> sebagai boolean.</li>
                <li><strong>Baris 14-15:</strong> Fungsi bawaan <code>type(objek)</code> mengembalikan kelas tipe data dari variabel yang diuji.</li>
                <li><strong>Baris 18-19:</strong> Operasi aritmatika pengali (<code>*</code>) dan pengurangan (<code>-</code>) untuk menghitung nominal potongan harga 10%.</li>
                <li><strong>Baris 24-25:</strong> <strong>f-string (Formatted String Literals)</strong> memungkinkan penyisipan ekspresi variabel langsung di dalam kurung kurawal <code>&#123;&#125;</code>. Format <code>:,.2f</code> memformat angka desimal dengan koma pemisah ribuan serta tepat dua angka di belakang koma.</li>
                <li><strong>Baris 28-33:</strong> String di Python adalah urutan karakter terindeks mulai dari 0. <code>kata[0:6]</code> melakukan <em>slicing</em> dari indeks ke-0 hingga sebelum indeks ke-6. Method <code>.upper()</code> dan <code>.replace()</code> mengembalikan salinan string baru yang telah dimodifikasi.</li>
                <li><strong>Baris 36-38:</strong> <code>int(&quot;150&quot;)</code> melakukan <em>type casting</em> mengubah teks menjadi angka biner integer agar dapat dijumlahkan secara matematis.</li>
                <li><strong>Baris 42-44:</strong> Fungsi <code>input(prompt)</code> menghentikan jalannya program sementara dan menunggu ketikan teks dari keyboard pengguna hingga tombol Enter ditekan. <strong>Perhatian:</strong> Nilai kembalian <code>input()</code> selalu berjenis <code>str</code>, sehingga wajib diubah dengan <code>int()</code> atau <code>float()</code> sebelum dihitung.</li>
              </ul>
            </div>
          )}

          <h3>Langkah Menjalankan Program 02_variabel.py</h3>
          <CodeBlock language="bash">{`python 02_variabel.py`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`Tipe data stok: <class 'int'>
Tipe data harga: <class 'float'>

--- INFORMASI PRODUK ---
Nama Barang   : Mechanical Keyboard RGB
Stok Tersedia : 25 unit
Harga Asli    : Rp 450,000.75
Harga Diskon  : Rp 405,000.68

Panjang string : 19 karakter
Huruf pertama  : T
Slicing [0:6]  : Teknik
Huruf kapital  : TEKNIK INFORMATIKA
Replace string : Teknik Komputer
Hasil konversi string ke angka: 200

--- SIMULASI TRANSAKSI ---
Masukkan nama pembeli: Budi Santoso
Masukkan jumlah item yang ingin dibeli: 2
Terima kasih Budi Santoso, total tagihan Anda: Rp 810,001.35`}
              </pre>
            </div>
          )}

          <h3>Rangkuman Operator di Python</h3>
          <p>Python menyediakan kumpulan operator lengkap untuk mengolah ekspresi logika dan matematika:</p>
          <ul>
            <li><strong>Aritmatika</strong>: <code>+</code> (tambah), <code>-</code> (kurang), <code>*</code> (kali), <code>/</code> (bagi pecahan desimal), <code>//</code> (floor division / pembagian pembulatan ke bawah), <code>%</code> (modulo / sisa bagi), <code>**</code> (pangkat / eksponen).</li>
            <li><strong>Perbandingan</strong>: <code>==</code> (sama dengan), <code>!=</code> (tidak sama dengan), <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code> (menghasilkan <code>True</code> atau <code>False</code>).</li>
            <li><strong>Logika (Logical)</strong>: <code>and</code> (kedua kondisi harus True), <code>or</code> (salah satu kondisi True), <code>not</code> (membalikkan nilai kebenaran).</li>
            <li><strong>Keanggotaan (Membership)</strong>: <code>in</code> dan <code>not in</code> (memeriksa apakah suatu elemen ada di dalam koleksi string/list/tuple).</li>
            <li><strong>Identitas (Identity)</strong>: <code>is</code> dan <code>is not</code> (memeriksa apakah dua variabel menunjuk ke objek memori yang identik, lazim dipakai untuk <code>x is None</code>).</li>
          </ul>

          {calloutExercise(
            "Kalkulator Konversi Suhu Interaktif",
            "Buat berkas latihan2_suhu.py. Mintalah input nilai temperatur dalam derajat Celcius dari pengguna menggunakan float(input()). Hitung dan tampilkan hasil konversinya ke Fahrenheit (F = C * 9/5 + 32) dan Kelvin (K = C + 273.15) dengan f-string yang rapi dan 2 angka di belakang koma."
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. STRUKTUR KENDALI (IF & LOOP)                                           */}
      {/* ========================================================================= */}
      {(!subId || subId === "struktur-kendali") && (
        <section id="struktur-kendali">
          <h2>3. Struktur Kendali (If &amp; Loop)</h2>
          <p>
            Struktur kendali mengatur alur eksekusi logika aplikasi. Komputer secara default mengeksekusi kode dari baris atas ke baris bawah secara sekuensial. 
            Dengan struktur kendali percabangan (<em>conditionals</em>) dan perulangan (<em>loops</em>), kita dapat menginstruksikan program untuk mengambil keputusan serta mengulang tugas berkali-kali secara efisien.
          </p>

          <h3>1. Percabangan: if, elif, else</h3>
          <p>
            Python menggunakan kata kunci <code>if</code>, <code>elif</code> (kependekan dari <em>else if</em>), dan <code>else</code>. Setiap kondisi diakhiri dengan tanda titik dua (<code>:</code>) dan blok aksi di dalamnya wajib berindentasi.
          </p>

          <h3>2. Perulangan for dengan range() dan Koleksi</h3>
          <p>
            Perulangan <code>for</code> di Python bekerja dengan cara mengiterasi elemen-elemen dari suatu sekuens (seperti rentang angka, karakter string, atau elemen list):
          </p>
          <ul>
            <li><code>range(stop)</code>: Menghasilkan deret angka mulai dari <code>0</code> hingga <code>stop - 1</code>.</li>
            <li><code>range(start, stop)</code>: Menghasilkan deret angka dari <code>start</code> hingga <code>stop - 1</code>.</li>
            <li><code>range(start, stop, step)</code>: Menghasilkan deret angka dengan interval lompatan <code>step</code> tertentu.</li>
            <li><code>enumerate(iterable, start=0)</code>: Menghasilkan pasangan indeks dan nilai elemen sekaligus dalam satu iterasi.</li>
          </ul>

          <h3>3. Perulangan while dan Perintah Kontrol (break, continue, pass)</h3>
          <ul>
            <li><code>while kondisi:</code>: Mengeksekusi blok kode selama kondisi pengujian bernilai <code>True</code>. Waspadai kondisi yang tidak pernah berubah menjadi False agar terhindar dari <em>infinite loop</em>.</li>
            <li><code>break</code>: Menghentikan paksa dan keluar seketika dari perulangan saat ini.</li>
            <li><code>continue</code>: Melewati sisa baris kode pada iterasi saat ini dan langsung melompat ke evaluasi iterasi berikutnya.</li>
            <li><code>pass</code>: Pernyataan kosong (<em>no-operation placeholder</em>) yang digunakan saat sintaksis Python memerlukan blok kode tetapi kita belum ingin menulis logika apa pun di sana.</li>
            <li><strong>Klausa else pada Loop</strong>: Fitur unik Python di mana blok <code>else:</code> dieksekusi setelah loop selesai secara alami, namun <strong>tidak</strong> dieksekusi jika loop dihentikan oleh <code>break</code>.</li>
          </ul>

          <h3>Hands-on Practice: Membangun Skrip Pengendali Alur (03_kendali.py)</h3>
          <p>
            Buat file baru <code>03_kendali.py</code> di VS Code, lalu ketikkan kode lengkap berikut:
          </p>

          <CodeBlock language="python">{`# ===================================================
# Berkas: 03_kendali.py
# Deskripsi: Percabangan bertingkat, ternary operator, for-loop, dan while-loop
# ===================================================

# 1. Percabangan Nilai Akademik (if - elif - else)
nilai_ujian = 82
kehadiran_persen = 85

print("--- EVALUASI AKADEMIK ---")
if nilai_ujian >= 80 and kehadiran_persen >= 75:
    grade = "A"
    keterangan = "Lulus dengan Pujian (Sangat Memuaskan)"
elif nilai_ujian >= 70 and kehadiran_persen >= 70:
    grade = "B"
    keterangan = "Lulus Memuaskan"
elif nilai_ujian >= 60 and kehadiran_persen >= 65:
    grade = "C"
    keterangan = "Lulus Cukup"
else:
    grade = "E / D"
    keterangan = "Tidak Memenuhi Syarat Kelulusan"

print(f"Skor: {nilai_ujian} | Presensi: {kehadiran_persen}%")
print(f"Hasil Akhir: Grade {grade} ({keterangan})")

# 2. Ternary Operator (Conditional Expression Ringkas)
status_registrasi = "Aktif" if kehadiran_persen >= 75 else "Nonaktif"
print(f"Status Mahasiswa: {status_registrasi}")

# 3. For Loop: Iterasi Rentang Angka dan Bilangan Ganjil/Genap
print("\\n--- DERET BILANGAN GANJIL (1 - 15) DENGAN CONTINUE ---")
for angka in range(1, 16):
    if angka % 2 == 0:
        continue  # Lewati bilangan genap
    print(angka, end=" ")
print()  # Ganti baris

# 4. For Loop dengan Enumerate pada Daftar Framework
frameworks = ["Pyramid", "FastAPI", "Django", "Flask"]
print("\\n--- DAFTAR FRAMEWORK PYTHON POPULER ---")
for urutan, item in enumerate(frameworks, start=1):
    print(f"{urutan}. {item}")

# 5. While Loop Interaktif dengan Break dan Pencarian Data
print("\\n--- PENCARIAN TARGET ANGKA (WHILE + BREAK + ELSE) ---")
target = 7
hitung = 1
while hitung <= 10:
    print(f"Memeriksa nilai: {hitung}...")
    if hitung == target:
        print(f"--> Target {target} BERHASIL DITEMUKAN pada langkah ke-{hitung}!")
        break
    hitung += 1
else:
    print("Pencarian selesai: Target tidak ditemukan.")

# 6. Nested Loop: Membuat Pola Segitiga Bintang
print("\\n--- GENERATOR POLA SEGITIGA SIKU-SIKU ---")
tinggi_segitiga = 5
for baris in range(1, tinggi_segitiga + 1):
    for bintang in range(baris):
        print("* ", end="")
    print()  # Newline untuk baris berikutnya`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 10-22:</strong> Struktur <code>if-elif-else</code> mengevaluasi dua syarat logika secara simultan menggunakan operator <code>and</code>. Karena nilai 82 (&ge; 80) dan presensi 85% (&ge; 75%), blok <code>if</code> pertama bernilai <code>True</code> dan blok <code>elif</code> berikutnya dilewati.</li>
                <li><strong>Baris 28:</strong> <strong>Ternary Operator</strong> Python berformat <code>nilai_true if kondisi else nilai_false</code>. Sintaks ini sangat elegan untuk pengisian nilai variabel berbasis satu kondisi ringkas.</li>
                <li><strong>Baris 32-36:</strong> <code>range(1, 16)</code> menghasilkan urutan bilangan dari 1 hingga 15. Baris <code>if angka % 2 == 0: continue</code> mendeteksi bilangan genap (sisa bagi 0) dan langsung melompati instruksi <code>print()</code> di bawahnya.</li>
                <li><strong>Baris 41-43:</strong> Fungsi <code>enumerate(frameworks, start=1)</code> memecah setiap elemen list menjadi pasangan nomor urut (dimulai dari 1) dan nama framework secara bersih tanpa perlu membuat variabel counter manual.</li>
                <li><strong>Baris 48-57:</strong> <code>while hitung &lt;= 10:</code> berulang selama nilai counter tidak melebihi 10. Begitu <code>hitung == target</code> (7), perintah <code>break</code> seketika memutus perulangan dan mengabaikan blok <code>else:</code> di baris 56.</li>
                <li><strong>Baris 62-66:</strong> <strong>Nested Loop</strong> (perulangan bersarang). Loop luar (<code>baris</code>) menentukan nomor baris vertikal, sedangkan loop dalam (<code>bintang</code>) mencetak karakter bintang horizontal sebanyak nomor baris saat itu.</li>
              </ul>
            </div>
          )}

          <h3>Langkah Menjalankan Program 03_kendali.py</h3>
          <CodeBlock language="bash">{`python 03_kendali.py`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`--- EVALUASI AKADEMIK ---
Skor: 82 | Presensi: 85%
Hasil Akhir: Grade A (Lulus dengan Pujian (Sangat Memuaskan))
Status Mahasiswa: Aktif

--- DERET BILANGAN GANJIL (1 - 15) DENGAN CONTINUE ---
1 3 5 7 9 11 13 15 

--- DAFTAR FRAMEWORK PYTHON POPULER ---
1. Pyramid
2. FastAPI
3. Django
4. Flask

--- PENCARIAN TARGET ANGKA (WHILE + BREAK + ELSE) ---
Memeriksa nilai: 1...
Memeriksa nilai: 2...
Memeriksa nilai: 3...
Memeriksa nilai: 4...
Memeriksa nilai: 5...
Memeriksa nilai: 6...
Memeriksa nilai: 7...
--> Target 7 BERHASIL DITEMUKAN pada langkah ke-7!

--- GENERATOR POLA SEGITIGA SIKU-SIKU ---
* 
* * 
* * * 
* * * * 
* * * * * `}
              </pre>
            </div>
          )}

          {calloutExercise(
            "Game Tebak Angka Rahasia Sederhana",
            "Buat berkas latihan3_tebak.py. Tentukan sebuah angka rahasia (misal angka 7). Buat while loop yang meminta input tebakan angka dari pengguna berulang kali. Jika tebakan terlalu kecil, cetak 'Terlalu kecil!'. Jika terlalu besar, cetak 'Terlalu besar!'. Jika tepat, cetak 'Selamat, tebakan benar!' lalu hentikan loop dengan break."
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. MODULARITAS FUNGSI                                                     */}
      {/* ========================================================================= */}
      {(!subId || subId === "fungsi") && (
        <section id="fungsi">
          <h2>4. Modularitas Fungsi</h2>
          <p>
            Fungsi adalah blok kode terorganisasi dan dapat digunakan kembali (<em>reusable</em>) yang dirancang untuk melakukan tugas tunggal tertentu. 
            Menerapkan fungsi mendukung prinsip arsitektur perangkat lunak <strong>DRY (Don&apos;t Repeat Yourself)</strong> sehingga program tidak berulang-ulang menyalin baris kode yang sama, serta memudahkan proses pelacakan bug (<em>debugging</em>) dan pengujian unit (<em>unit testing</em>).
          </p>

          <h3>Konsep-Konsep Inti Fungsi di Python</h3>
          <ul>
            <li><strong>Deklarasi Fungsi</strong>: Menggunakan kata kunci <code>def nama_fungsi(parameter):</code>.</li>
            <li><strong>Docstring</strong>: Baris dokumentasi formal di awal tubuh fungsi yang diapit tanda petik tiga (<code>&quot;&quot;&quot;...&quot;&quot;&quot;</code>), dapat dibaca melalui perintah <code>help(nama_fungsi)</code>.</li>
            <li><strong>Default Parameter</strong>: Menetapkan nilai bawaan pada parameter jika pemanggil fungsi tidak menyertakan argumen tersebut.</li>
            <li><strong>Arbitrary Arguments (*args &amp; **kwargs)</strong>:
              <ul>
                <li><code>*args</code>: Menerima sembarang jumlah argumen posisi tambahan dalam bentuk <em>tuple</em>.</li>
                <li><code>**kwargs</code>: Menerima sembarang jumlah argumen berbasis kata kunci (<em>keyword arguments</em>) dalam bentuk <em>dictionary</em>.</li>
              </ul>
            </li>
            <li><strong>Multiple Return Values</strong>: Fungsi Python dapat mengembalikan lebih dari satu nilai sekaligus; nilai-nilai tersebut secara otomatis dibungkus sebagai <em>tuple</em> dan dapat di-<em>unpack</em> langsung oleh pemanggil.</li>
            <li><strong>Scope Variabel (Local vs Global)</strong>: Variabel yang dibuat di dalam fungsi bersifat privat (lokal) bagi fungsi tersebut. Gunakan kata kunci <code>global</code> jika memang terpaksa memodifikasi variabel di lingkup luar.</li>
            <li><strong>Lambda Functions</strong>: Fungsi anonim satu baris tanpa nama untuk operasi komputasi ringkas, lazim digunakan bersama fungsi built-in seperti <code>map()</code>, <code>filter()</code>, dan <code>sorted()</code>.</li>
          </ul>

          <h3>Hands-on Practice: Pembuatan Fungsi Modular &amp; Lambda (04_fungsi.py)</h3>
          <p>
            Buat file baru <code>04_fungsi.py</code> dan tuliskan kode lengkap di bawah ini:
          </p>

          <CodeBlock language="python">{`# ===================================================
# Berkas: 04_fungsi.py
# Deskripsi: Penerapan def, default arguments, *args, **kwargs, return ganda, dan lambda
# ===================================================

# 1. Fungsi dengan Default Arguments dan Docstring
def hitung_luas_persegi_panjang(panjang: float, lebar: float = 1.0) -> float:
    """
    Menghitung luas persegi panjang berdasarkan panjang dan lebar.
    Parameter lebar memiliki nilai default 1.0 jika tidak diisi.
    """
    luas = panjang * lebar
    return luas

# Pemanggilan fungsi dengan positional dan keyword arguments
hasil1 = hitung_luas_persegi_panjang(10.0, 5.0)  # panjang=10, lebar=5
hasil2 = hitung_luas_persegi_panjang(8.0)        # panjang=8, lebar default 1.0
print(f"Luas 1 (10 x 5) : {hasil1} satuan")
print(f"Luas 2 (8 x def): {hasil2} satuan")

# 2. Fungsi Mengembalikan Lebih dari Satu Nilai (Multiple Returns)
def hitung_statistik_dasar(daftar_angka: list):
    """Mengembalikan nilai minimum, maksimum, dan rata-rata dari list angka."""
    if not daftar_angka:
        return 0, 0, 0
    nilai_min = min(daftar_angka)
    nilai_max = max(daftar_angka)
    rata_rata = sum(daftar_angka) / len(daftar_angka)
    return nilai_min, nilai_max, rata_rata

nilai_mhs = [75, 88, 92, 60, 85, 90]
# Unpacking hasil kembalian tuple ke tiga variabel mandiri
minimum, maksimum, rerata = hitung_statistik_dasar(nilai_mhs)
print(f"\\nStatistik Nilai Mahasiswa:")
print(f"- Nilai Terendah : {minimum}")
print(f"- Nilai Tertinggi: {maksimum}")
print(f"- Nilai Rata-rata: {rerata:.2f}")

# 3. Fungsi dengan Arbitrary Arguments (*args dan **kwargs)
def cetak_rekap_pesanan(meja: int, *menu_makanan, **detail_tambahan):
    """
    Menerima nomor meja, daftar menu tidak terbatas (*args), 
    serta opsi metadata tambahan (**kwargs).
    """
    print(f"\\n--- NOTA PESANAN MEJA {meja} ---")
    print("Daftar Menu yang Dipesan:")
    for nomor, makanan in enumerate(menu_makanan, start=1):
        print(f"  {nomor}. {makanan}")
    
    if detail_tambahan:
        print("Informasi Tambahan:")
        for kunci, nilai in detail_tambahan.items():
            print(f"  * {kunci.capitalize()}: {nilai}")

# Memanggil fungsi fleksibel di atas
cetak_rekap_pesanan(
    4,
    "Nasi Goreng Spesial", "Es Teh Manis", "Ayam Bakar",
    pelanggan="Budi Santoso",
    metode_bayar="QRIS",
    catatan="Tanpa cabai (tidak pedas)"
)

# 4. Fungsi Anonim (Lambda Expression)
# Format: lambda argumen : ekspresi
kuadrat = lambda x: x ** 2
print(f"\\nUji coba lambda kuadrat (7^2): {kuadrat(7)}")

# Menggunakan lambda dengan sorted() untuk mengurutkan data mahasiswa berdasarkan umur
data_mahasiswa = [
    {"nama": "Siti", "umur": 21},
    {"nama": "Andi", "umur": 19},
    {"nama": "Budi", "umur": 22},
    {"nama": "Dewi", "umur": 20}
]

# Mengurutkan list dictionary berdasarkan kunci 'umur'
mahasiswa_terurut = sorted(data_mahasiswa, key=lambda m: m["umur"])
print("\\nMahasiswa terurut berdasarkan umur (termuda ke tertua):")
for mhs in mahasiswa_terurut:
    print(f"- {mhs['nama']} ({mhs['umur']} tahun)")`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 7-13:</strong> Kita mendefinisikan fungsi dengan type hint <code>panjang: float</code> serta default parameter <code>lebar: float = 1.0</code>. Teks diapit <code>&quot;&quot;&quot;...&quot;&quot;&quot;</code> adalah docstring yang mendokumentasikan kegunaan fungsi.</li>
                <li><strong>Baris 16-17:</strong> Pada <code>hasil1</code>, kita memberikan kedua nilai. Pada <code>hasil2</code>, argumen kedua dihilangkan sehingga nilai default <code>1.0</code> otomatis dipakai tanpa memicu error.</li>
                <li><strong>Baris 22-29:</strong> Baris <code>return nilai_min, nilai_max, rata_rata</code> membungkus ketiga variabel menjadi sebuah <em>tuple</em>.</li>
                <li><strong>Baris 33:</strong> Baris <code>minimum, maksimum, rerata = hitung_statistik_dasar(...)</code> melakukan <strong>tuple unpacking</strong> langsung ke tiga variabel baru secara bersih.</li>
                <li><strong>Baris 41-52:</strong> <code>*menu_makanan</code> mengumpulkan semua argumen posisi berlebih ke dalam tuple, sedangkan <code>**detail_tambahan</code> menangkap seluruh argumen berbasis kata kunci (seperti <code>pelanggan=&quot;Budi&quot;</code>) ke dalam struktur dictionary.</li>
                <li><strong>Baris 67-68:</strong> Sintaks <code>lambda x: x ** 2</code> membuat fungsi satu baris instan tanpa memerlukan deklarasi <code>def</code> terpisah.</li>
                <li><strong>Baris 78:</strong> <code>sorted(data_mahasiswa, key=lambda m: m[&quot;umur&quot;])</code> menggunakan fungsi lambda sebagai ekstraktor nilai kunci pembanding, sehingga data mahasiswa diurutkan naik berdasarkan umur.</li>
              </ul>
            </div>
          )}

          <h3>Langkah Menjalankan Program 04_fungsi.py</h3>
          <CodeBlock language="bash">{`python 04_fungsi.py`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`Luas 1 (10 x 5) : 50.0 satuan
Luas 2 (8 x def): 8.0 satuan

Statistik Nilai Mahasiswa:
- Nilai Terendah : 60
- Nilai Tertinggi: 92
- Nilai Rata-rata: 80.00

--- NOTA PESANAN MEJA 4 ---
Daftar Menu yang Dipesan:
  1. Nasi Goreng Spesial
  2. Es Teh Manis
  3. Ayam Bakar
Informasi Tambahan:
  * Pelanggan: Budi Santoso
  * Metode_bayar: QRIS
  * Catatan: Tanpa cabai (tidak pedas)

Uji coba lambda kuadrat (7^2): 49

Mahasiswa terurut berdasarkan umur (termuda ke tertua):
- Andi (19 tahun)
- Dewi (20 tahun)
- Siti (21 tahun)
- Budi (22 tahun)`}
              </pre>
            </div>
          )}

          {calloutExercise(
            "Fungsi Validator Password",
            "Buat berkas latihan4_validasi.py. Definisikan fungsi validasi_password(password) yang mengembalikan True jika panjang password minimal 8 karakter dan mengandung setidaknya satu angka. Uji fungsi tersebut dengan beberapa contoh password valid dan tidak valid."
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. STRUKTUR DATA (LIST, DICT, SET, TUPLE)                                 */}
      {/* ========================================================================= */}
      {(!subId || subId === "struktur-data") && (
        <section id="struktur-data">
          <h2>5. Struktur Data (List, Dict, Set, Tuple)</h2>
          <p>
            Struktur data menyediakan cara bagi program untuk mengorganisasi, menyimpan, dan memanipulasi sekumpulan data dalam memori secara terstruktur. 
            Python memiliki 4 tipe koleksi bawaan utama: <strong>List</strong>, <strong>Tuple</strong>, <strong>Dictionary</strong>, dan <strong>Set</strong>.
          </p>

          <h3>Komparasi 4 Struktur Data Koleksi Python</h3>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem" }}>Struktur Data</th>
                  <th style={{ padding: "0.75rem" }}>Sintaksis</th>
                  <th style={{ padding: "0.75rem" }}>Urutan (Ordered)</th>
                  <th style={{ padding: "0.75rem" }}>Perubahan (Mutable)</th>
                  <th style={{ padding: "0.75rem" }}>Duplikasi Elemen</th>
                  <th style={{ padding: "0.75rem" }}>Kasus Penggunaan Khas</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>List</td>
                  <td style={{ padding: "0.75rem" }}><code>[elemen1, ...]</code></td>
                  <td style={{ padding: "0.75rem" }}>Ya</td>
                  <td style={{ padding: "0.75rem" }}>Ya (Mutable)</td>
                  <td style={{ padding: "0.75rem" }}>Diizinkan</td>
                  <td style={{ padding: "0.75rem" }}>Daftar item belanja, log histori transaksi yang dapat bertambah.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Tuple</td>
                  <td style={{ padding: "0.75rem" }}><code>(elemen1, ...)</code></td>
                  <td style={{ padding: "0.75rem" }}>Ya</td>
                  <td style={{ padding: "0.75rem" }}>Tidak (Immutable)</td>
                  <td style={{ padding: "0.75rem" }}>Diizinkan</td>
                  <td style={{ padding: "0.75rem" }}>Koordinat GPS (lat, long), nilai konstan yang tidak boleh diubah.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Dictionary</td>
                  <td style={{ padding: "0.75rem" }}><code>&#123;key: value&#125;</code></td>
                  <td style={{ padding: "0.75rem" }}>Ya (Python 3.7+)</td>
                  <td style={{ padding: "0.75rem" }}>Ya (Mutable)</td>
                  <td style={{ padding: "0.75rem" }}>Key Unik</td>
                  <td style={{ padding: "0.75rem" }}>Representasi objek JSON/API (profil user, data produk berlabel).</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Set</td>
                  <td style={{ padding: "0.75rem" }}><code>&#123;item1, ...&#125;</code></td>
                  <td style={{ padding: "0.75rem" }}>Tidak</td>
                  <td style={{ padding: "0.75rem" }}>Ya (Mutable)</td>
                  <td style={{ padding: "0.75rem" }}>Otomatis Dihapus</td>
                  <td style={{ padding: "0.75rem" }}>Eliminasi data duplikat, operasi himpunan (irisan, gabungan).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Hands-on Practice: Operasi Lengkap Struktur Data (05_struktur_data.py)</h3>
          <p>
            Buat file baru bernama <code>05_struktur_data.py</code> di VS Code, lalu ketikkan skrip praktikum terintegrasi berikut:
          </p>

          <CodeBlock language="python">{`# ===================================================
# Berkas: 05_struktur_data.py
# Deskripsi: Operasi lanjutan List, Comprehension, Tuple, Dict, dan Set
# ===================================================

# ---------------------------------------------------
# 1. LIST: Operasi Manipulasi dan List Comprehension
# ---------------------------------------------------
hobi = ["Membaca", "Ngoding", "Bermain Game"]
print("--- 1. EKSPLORASI LIST ---")
hobi.append("Sepak Bola")             # Menambah di akhir
hobi.insert(1, "Berenang")             # Menyisipkan di indeks ke-1
hobi.remove("Membaca")                 # Menghapus berdasarkan nilai
item_dihapus = hobi.pop()              # Menghapus dan mengambil item terakhir
print(f"List setelah operasi : {hobi}")
print(f"Item yang di-pop     : {item_dihapus}")

# List Comprehension: Membuat list baru dengan sintaks satu baris yang elegan
# Format: [ekspresi for item in koleksi if kondisi]
angka_mentah = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
kuadrat_genap = [x ** 2 for x in angka_mentah if x % 2 == 0]
print(f"Kuadrat bilangan genap : {kuadrat_genap}")  # [4, 16, 36, 64, 100]

# ---------------------------------------------------
# 2. TUPLE: Koleksi Immutable yang Aman
# ---------------------------------------------------
print("\\n--- 2. EKSPLORASI TUPLE ---")
titik_koordinat = (-5.3644, 105.3175)  # Koordinat Kampus ITERA (lat, long)
print(f"Latitude ITERA  : {titik_koordinat[0]}")
print(f"Longitude ITERA : {titik_koordinat[1]}")
# titik_koordinat[0] = 0.0  # Ini akan TypeError karena tuple tidak dapat diubah (immutable)!

# ---------------------------------------------------
# 3. DICTIONARY: Pemetaan Pasangan Kunci-Nilai (Key-Value)
# ---------------------------------------------------
print("\\n--- 3. EKSPLORASI DICTIONARY ---")
profil_mahasiswa = {
    "nim": "121140001",
    "nama": "Ahmad Fadhilah",
    "program_studi": "Teknik Informatika",
    "ipk": 3.85,
    "matkul_diambil": ["Pemrograman Web", "Struktur Data", "Jaringan Komputer"]
}

# Mengakses nilai dengan key atau method .get() (lebih aman dari KeyError)
print(f"Nama Mahasiswa : {profil_mahasiswa['nama']}")
print(f"Status Beasiswa: {profil_mahasiswa.get('beasiswa', 'Tidak Menerima')}")

# Menambah key baru dan memperbarui nilai
profil_mahasiswa["semester"] = 5
profil_mahasiswa["ipk"] = 3.90

# Iterasi pasangan key dan value menggunakan .items()
print("\\nRincian Data Profil Mahasiswa:")
for key, value in profil_mahasiswa.items():
    print(f"  * {key.replace('_', ' ').capitalize()}: {value}")

# ---------------------------------------------------
# 4. SET: Himpunan Elemen Unik dan Operasi Matematika
# ---------------------------------------------------
print("\\n--- 4. EKSPLORASI SET ---")
# Eliminasi duplikasi otomatis dari list
daftar_nim_presensi = ["IF01", "IF02", "IF01", "IF03", "IF02", "IF04"]
nim_unik = set(daftar_nim_presensi)
print(f"NIM unik yang hadir : {nim_unik}")

# Operasi Himpunan Matematika
mahasiswa_web = {"Budi", "Siti", "Andi", "Dewi"}
mahasiswa_ai = {"Andi", "Dewi", "Rian", "Eko"}

print(f"\\nMahasiswa Web : {mahasiswa_web}")
print(f"Mahasiswa AI  : {mahasiswa_ai}")
# Union (Gabungan seluruh mahasiswa yang ikut salah satu/kedua kelas)
print(f"Gabungan (Union |)     : {mahasiswa_web | mahasiswa_ai}")
# Intersection (Irisan mahasiswa yang mengambil KEDUA kelas)
print(f"Irisan (Intersection &): {mahasiswa_web & mahasiswa_ai}")
# Difference (Mahasiswa yang HANYA mengambil kelas Web)
print(f"Selisih (Difference -) : {mahasiswa_web - mahasiswa_ai}")`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 8-14:</strong> Method <code>.append()</code> menambahkan elemen ke indeks terakhir, sedangkan <code>.insert(1, ...)</code> menggeser elemen lama ke kanan. Method <code>.pop()</code> menghapus dan mengembalikan elemen paling ujung.</li>
                <li><strong>Baris 19-20:</strong> <strong>List Comprehension</strong> menggabungkan pembuatan list, perulangan <code>for</code>, dan penyaringan <code>if</code> dalam satu baris bersih, jauh lebih cepat dan ringkas dibanding membuat perulangan 4 baris.</li>
                <li><strong>Baris 26-29:</strong> <code>titik_koordinat</code> didefinisikan dengan kurung biasa <code>()</code> sebagai tuple. Sifat <em>immutable</em> menjamin data koordinat tidak sengaja terubah oleh bagian kode lain.</li>
                <li><strong>Baris 35-46:</strong> Dictionary menyimpan struktur data mirip objek JSON. Penggunaan <code>profil_mahasiswa.get(&apos;beasiswa&apos;, default)</code> mencegah program mengalami <em>KeyError</em> jika kunci yang dicari belum ada di dictionary.</li>
                <li><strong>Baris 51-53:</strong> Method <code>.items()</code> mengembalikan pasangan kunci dan nilai dalam bentuk tuple <code>(key, value)</code> di setiap perputaran loop.</li>
                <li><strong>Baris 59-62:</strong> Mengonversi list yang berisi nilai duplikat menjadi <code>set()</code> seketika membuang elemen yang berulang sehingga menyisakan elemen unik saja.</li>
                <li><strong>Baris 67-73:</strong> Operator <code>|</code> menghitung himpunan gabungan (union), <code>&amp;</code> menghitung elemen yang berada di kedua himpunan (intersection), dan <code>-</code> menghitung elemen unik milik himpunan pertama saja (difference).</li>
              </ul>
            </div>
          )}

          <h3>Langkah Menjalankan Program 05_struktur_data.py</h3>
          <CodeBlock language="bash">{`python 05_struktur_data.py`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`--- 1. EKSPLORASI LIST ---
List setelah operasi : ['Berenang', 'Ngoding', 'Bermain Game']
Item yang di-pop     : Sepak Bola
Kuadrat bilangan genap : [4, 16, 36, 64, 100]

--- 2. EKSPLORASI TUPLE ---
Latitude ITERA  : -5.3644
Longitude ITERA : 105.3175

--- 3. EKSPLORASI DICTIONARY ---
Nama Mahasiswa : Ahmad Fadhilah
Status Beasiswa: Tidak Menerima

Rincian Data Profil Mahasiswa:
  * Nim: 121140001
  * Nama: Ahmad Fadhilah
  * Program studi: Teknik Informatika
  * Ipk: 3.9
  * Matkul diambil: ['Pemrograman Web', 'Struktur Data', 'Jaringan Komputer']
  * Semester: 5

--- 4. EKSPLORASI SET ---
NIM unik yang hadir : {'IF01', 'IF02', 'IF03', 'IF04'}

Mahasiswa Web : {'Andi', 'Siti', 'Budi', 'Dewi'}
Mahasiswa AI  : {'Andi', 'Rian', 'Eko', 'Dewi'}
Gabungan (Union |)     : {'Andi', 'Siti', 'Budi', 'Dewi', 'Rian', 'Eko'}
Irisan (Intersection &): {'Andi', 'Dewi'}
Selisih (Difference -) : {'Siti', 'Budi'}`}
              </pre>
            </div>
          )}

          {calloutExercise(
            "Katalog Kontak Sederhana",
            "Buat berkas latihan5_kontak.py. Buat sebuah dictionary yang menyimpan daftar kontak nama dan nomor telepon. Tambahkan fitur untuk: 1) Menambahkan kontak baru, 2) Mencari nomor telepon berdasarkan nama kontak menggunakan .get(), dan 3) Menampilkan seluruh kontak yang tersimpan."
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. MODUL & PACKAGE PYTHON                                                 */}
      {/* ========================================================================= */}
      {(!subId || subId === "modul-python") && (
        <section id="modul-python">
          <h2>6. Modul &amp; Package Python</h2>
          <p>
            Seiring bertambah besarnya kode program, meletakkan seluruh baris instruksi dalam satu berkas skrip akan membuat aplikasi sulit dirawat. 
            <strong>Modul</strong> adalah berkas berekstensi <code>.py</code> yang memuat sekumpulan fungsi, kelas, atau variabel yang dapat diimpor ke berkas lain. 
            Sedangkan <strong>Package</strong> adalah direktori yang memuat beberapa modul dan memiliki file penanda <code>__init__.py</code>.
          </p>

          <h3>Cara Mengimpor Modul di Python</h3>
          <p>Python menyediakan beberapa variasi sintaks impor sesuai kebutuhan:</p>
          <CodeBlock language="python">{`# Cara 1: Mengimpor seluruh modul
import math
print(math.sqrt(64))  # 8.0

# Cara 2: Mengimpor fungsi spesifik langsung ke namespace
from math import pi, pow
print(pow(2, 3))      # 8.0

# Cara 3: Mengimpor dengan nama alias (alias / as)
import datetime as dt
sekarang = dt.datetime.now()
print(sekarang.strftime("%Y-%m-%d %H:%M:%S"))`}</CodeBlock>

          <h3>Modul-Modul Bawaan (Standard Library) yang Wajib Diketahui</h3>
          <ul>
            <li><strong>math</strong>: Menyediakan operasi matematika tingkat lanjut seperti trigonometri, faktorial, akar kuadrat (<code>sqrt</code>), dan logaritma.</li>
            <li><strong>random</strong>: Untuk membangkitkan bilangan acak, memilih elemen acak dari list (<code>choice</code>), atau mengacak urutan (<code>shuffle</code>).</li>
            <li><strong>datetime</strong>: Mengelola informasi tanggal, waktu, kalkulasi selisih hari, dan formatting tanggal.</li>
            <li><strong>os &amp; sys</strong>: Berinteraksi dengan sistem operasi, membaca berkas direktori, dan membaca argumen baris perintah (CLI).</li>
            <li><strong>json</strong>: Melakukan parsing dan serialisasi data format JSON untuk komunikasi Web API.</li>
          </ul>

          <h3>Hands-on Practice: Membuat Modul Kustom Sendiri</h3>
          <p>
            Sekarang kita akan membuat modul kustom matematika sendiri dan mengimpornya ke dalam program utama.
          </p>

          <p><strong>Langkah 1: Buat berkas modul pembantu <code>kalkulator_lib.py</code></strong></p>
          <CodeBlock language="python">{`# ===================================================
# Berkas: kalkulator_lib.py
# Deskripsi: Modul kustom penyedia fungsi-fungsi aritmatika
# ===================================================

def tambah(a: float, b: float) -> float:
    """Mengembalikan hasil penjumlahan a + b"""
    return a + b

def kurang(a: float, b: float) -> float:
    """Mengembalikan hasil pengurangan a - b"""
    return a - b

def kali(a: float, b: float) -> float:
    """Mengembalikan hasil perkalian a * b"""
    return a * b

def bagi(a: float, b: float):
    """Mengembalikan hasil pembagian a / b dengan pencegahan ZeroDivisionError"""
    if b == 0:
        return "Error: Tidak dapat membagi dengan angka nol!"
    return a / b

# Blok idiom sakti untuk testing mandiri modul
if __name__ == "__main__":
    print("[TEST MODUL] Menjalankan uji coba internal kalkulator_lib:")
    print("Test 10 + 5 =", tambah(10, 5))
    print("Test 10 / 0 =", bagi(10, 0))`}</CodeBlock>

          {calloutInfo(
            "Mengapa if __name__ == '__main__': sangat penting? Variabel khusus __name__ bernilai '__main__' hanya jika file tersebut dieksekusi secara langsung. Jika file tersebut di-import oleh file lain, blok kode di dalam if ini tidak akan pernah dieksekusi secara otomatis, sehingga mencegah jalannya kode testing yang tidak diinginkan!"
          )}

          <p><strong>Langkah 2: Buat berkas aplikasi utama <code>06_modul_app.py</code></strong></p>
          <CodeBlock language="python">{`# ===================================================
# Berkas: 06_modul_app.py
# Deskripsi: Menggunakan modul standar (math, random) dan modul kustom kita
# ===================================================

# 1. Mengimpor pustaka standar Python
import math
import random
from datetime import datetime

# 2. Mengimpor modul kustom lokal yang baru kita buat
import kalkulator_lib as calc

print("--- 1. EKSPLORASI STANDARD LIBRARY ---")
# Menghitung hipotenusa segitiga siku-siku (c = akar(a^2 + b^2))
sisi_a, sisi_b = 6, 8
sisi_miring = math.hypot(sisi_a, sisi_b)
print(f"Segitiga {sisi_a} dan {sisi_b} -> Sisi miring (hypotenuse): {sisi_miring}")

# Simulasi undian angka acak
dadu = random.randint(1, 6)
pemenang = random.choice(["Budi", "Siti", "Andi", "Dewi"])
print(f"Hasil lempar dadu acak (1-6): {dadu}")
print(f"Pemenang giveaway terpilih : {pemenang}")

# Menampilkan waktu saat ini
waktu_sekarang = datetime.now()
print(f"Waktu eksekusi program     : {waktu_sekarang.strftime('%d %B %Y, pukul %H:%M:%S')}")

print("\\n--- 2. PENGGUNAAN MODUL KUSTOM (kalkulator_lib) ---")
angka1 = 20
angka2 = 4

print(f"Operasi {angka1} + {angka2} = {calc.tambah(angka1, angka2)}")
print(f"Operasi {angka1} - {angka2} = {calc.kurang(angka1, angka2)}")
print(f"Operasi {angka1} * {angka2} = {calc.kali(angka1, angka2)}")
print(f"Operasi {angka1} / {angka2} = {calc.bagi(angka1, angka2)}")
print(f"Uji coba pembagian nol     : {calc.bagi(angka1, 0)}")`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>kalkulator_lib.py (Baris 5-20):</strong> Kita membungkus operasi aritmatika ke dalam fungsi-fungsi terisolasi yang siap pakai. Pada fungsi <code>bagi()</code>, kita menyisipkan penjagaan kondisi (<em>guard clause</em>) agar sistem tidak mengalami crash saat terjadi pembagian dengan angka 0.</li>
                <li><strong>kalkulator_lib.py (Baris 23-26):</strong> Pemeriksaan <code>if __name__ == &quot;__main__&quot;:</code> memungkinkan pengembang menguji fungsi modul secara mandiri langsung di terminal tanpa mengganggu program utama.</li>
                <li><strong>06_modul_app.py (Baris 7-12):</strong> Kita mengimpor modul bawaan <code>math</code>, <code>random</code>, <code>datetime</code>, serta mengimpor berkas lokal <code>kalkulator_lib</code> dengan alias pendek <code>as calc</code>.</li>
                <li><strong>06_modul_app.py (Baris 16-18):</strong> <code>math.hypot(a, b)</code> menghitung panjang sisi miring segitiga menggunakan rumus pythagoras secara presisi.</li>
                <li><strong>06_modul_app.py (Baris 21-23):</strong> <code>random.randint(1, 6)</code> membangkitkan bilangan bulat acak inklusif, sedangkan <code>random.choice()</code> memilih salah satu elemen list secara acak adil.</li>
                <li><strong>06_modul_app.py (Baris 31-36):</strong> Memanggil fungsi dari modul lokal kita dengan awalan <code>calc.nama_fungsi()</code>. Perhatikan bahwa baris print uji coba pada <code>kalkulator_lib.py</code> tidak ikut tercetak di sini karena terlindungi oleh <code>if __name__ == &apos;__main__&apos;</code>.</li>
              </ul>
            </div>
          )}

          <h3>Langkah Menjalankan Program 06_modul_app.py</h3>
          <CodeBlock language="bash">{`python 06_modul_app.py`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`--- 1. EKSPLORASI STANDARD LIBRARY ---
Segitiga 6 dan 8 -> Sisi miring (hypotenuse): 10.0
Hasil lempar dadu acak (1-6): 4
Pemenang giveaway terpilih : Siti
Waktu eksekusi program     : 27 Oktober 2026, pukul 20:00:15

--- 2. PENGGUNAAN MODUL KUSTOM (kalkulator_lib) ---
Operasi 20 + 4 = 24
Operasi 20 - 4 = 16
Operasi 20 * 4 = 80
Operasi 20 / 4 = 5.0
Uji coba pembagian nol     : Error: Tidak dapat membagi dengan angka nol!`}
              </pre>
            </div>
          )}

          <h3>Pengenalan Virtual Environment (venv) &amp; pip</h3>
          <p>
            Saat mengembangkan proyek web modern dengan Python di masa depan, Anda akan menginstal paket eksternal menggunakan <code>pip</code> (Package Installer for Python). 
            Agar dependensi satu proyek tidak saling bertabrakan dengan proyek lain, selalu gunakan <strong>Virtual Environment</strong>:
          </p>
          <CodeBlock language="bash">{`# 1. Membuat virtual environment baru bernama 'venv' di direktori proyek
python -m venv venv

# 2. Mengaktifkan virtual environment:
# Pada Windows (Command Prompt / PowerShell):
.\\venv\\Scripts\\activate
# Pada macOS / Linux:
source venv/bin/activate

# 3. Menginstal paket eksternal (contoh: requests untuk HTTP Client)
pip install requests

# 4. Menyimpan daftar dependensi ke requirements.txt
pip freeze > requirements.txt`}</CodeBlock>

          {calloutExercise(
            "Modul Generator Password Acak",
            "Buat berkas modul password_gen.py yang berisi fungsi buat_password_acak(panjang=8). Manfaatkan modul bawaan random dan string (string.ascii_letters, string.digits) untuk menghasilkan kombinasi karakter acak. Buat file main.py untuk menguji modul tersebut."
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 7. TUGAS PRAKTIKUM                                                        */}
      {/* ========================================================================= */}
      {(!subId || subId === "tugas-praktikum") && (
        <section id="tugas-praktikum">
          <h2>Tugas: Dasar Pemrograman Python</h2>
          <p>
            Kerjakan tugas praktikum pemrograman Python berikut secara mandiri untuk menguji pemahaman Anda mengenai variabel, struktur kendali (if-else dan loop), modularitas fungsi, struktur data koleksi (list &amp; dictionary), serta pembuatan modul kustom:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.25rem" }}>
            {/* SOAL 1 */}
            <div
              style={{
                padding: "1.25rem",
                borderRadius: "10px",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.15rem" }}>1. Program Penghitung BMI (Body Mass Index) Sederhana</h3>
                <span
                  style={{
                    backgroundColor: "rgba(14, 165, 233, 0.15)",
                    color: "var(--color-accent)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "6px",
                  }}
                >
                  Bobot: 30%
                </span>
              </div>
              <p style={{ margin: "0 0 0.75rem 0", color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>
                Buatlah sebuah program Python (simpan dengan nama berkas <code>tugas1_bmi.py</code>) dengan ketentuan:
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.7, fontSize: "0.925rem" }}>
                <li>Buatlah variabel untuk menyimpan berat badan (dalam kilogram / kg) dan tinggi badan (dalam meter / m). Data dapat diisi secara langsung atau melalui fungsi <code>input()</code>.</li>
                <li>Hitung nilai BMI menggunakan rumus: <br />
                  <code style={{ display: "inline-block", margin: "0.3rem 0", padding: "0.2rem 0.5rem", backgroundColor: "var(--color-background)", borderRadius: "4px" }}>
                    BMI = berat / (tinggi * tinggi)
                  </code>
                </li>
                <li>Gunakan struktur percabangan <code>if-elif-else</code> untuk menentukan dan menampilkan kategori BMI:
                  <ul style={{ margin: "0.25rem 0", paddingLeft: "1.25rem" }}>
                    <li><code>BMI &lt; 18.5</code>: <strong>Berat badan kurang</strong></li>
                    <li><code>18.5 &le; BMI &lt; 25</code>: <strong>Berat badan normal</strong></li>
                    <li><code>25 &le; BMI &lt; 30</code>: <strong>Berat badan berlebih</strong></li>
                    <li><code>BMI &ge; 30</code>: <strong>Obesitas</strong></li>
                  </ul>
                </li>
                <li>Cetak hasil perhitungan nilai BMI (diformat dengan 2 angka desimal menggunakan f-string) beserta kategori status berat badannya ke konsol terminal.</li>
              </ul>
            </div>

            {/* SOAL 2 */}
            <div
              style={{
                padding: "1.25rem",
                borderRadius: "10px",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.15rem" }}>2. Program Pengelolaan Data Nilai Mahasiswa</h3>
                <span
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#10b981",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "6px",
                  }}
                >
                  Bobot: 40%
                </span>
              </div>
              <p style={{ margin: "0 0 0.75rem 0", color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>
                Buatlah sebuah program Python (simpan dengan nama berkas <code>tugas2_nilai_mahasiswa.py</code>) dengan ketentuan:
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.7, fontSize: "0.925rem" }}>
                <li>Buat sebuah <strong>list</strong> yang memuat minimal <strong>5 dictionary data mahasiswa</strong>. Setiap dictionary memiliki kunci: <code>nama</code>, <code>nim</code>, <code>nilai_uts</code>, <code>nilai_uas</code>, dan <code>nilai_tugas</code>.</li>
                <li>Hitung nilai akhir setiap mahasiswa berdasarkan bobot persentase berikut: <br />
                  <code style={{ display: "inline-block", margin: "0.3rem 0", padding: "0.2rem 0.5rem", backgroundColor: "var(--color-background)", borderRadius: "4px" }}>
                    Nilai Akhir = (30% * UTS) + (40% * UAS) + (30% * Tugas)
                  </code>
                </li>
                <li>Tentukan grade nilai setiap mahasiswa berdasarkan kriteria:
                  <ul style={{ margin: "0.25rem 0", paddingLeft: "1.25rem" }}>
                    <li><strong>A</strong>: Nilai akhir 80 atau lebih (&ge; 80)</li>
                    <li><strong>B</strong>: Nilai akhir 70 sampai 79 (70 &le; nilai &lt; 80)</li>
                    <li><strong>C</strong>: Nilai akhir 60 sampai 69 (60 &le; nilai &lt; 70)</li>
                    <li><strong>D</strong>: Nilai akhir 50 sampai 59 (50 &le; nilai &lt; 60)</li>
                    <li><strong>E</strong>: Nilai akhir kurang dari 50 (&lt; 50)</li>
                  </ul>
                </li>
                <li>Tampilkan seluruh data mahasiswa secara lengkap (Nama, NIM, Nilai Akhir, dan Grade) dalam <strong>format tabel</strong> yang rapi di terminal (dapat menggunakan perataan f-string atau library tabulasi).</li>
                <li>Cari dan tampilkan informasi mahasiswa yang memperoleh <strong>nilai akhir tertinggi</strong> dan <strong>nilai akhir terendah</strong>.</li>
              </ul>
            </div>

            {/* SOAL 3 */}
            <div
              style={{
                padding: "1.25rem",
                borderRadius: "10px",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.15rem" }}>3. Modul Matematika Python &amp; Program Penggunaannya</h3>
                <span
                  style={{
                    backgroundColor: "rgba(139, 92, 246, 0.15)",
                    color: "#8b5cf6",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "6px",
                  }}
                >
                  Bobot: 30%
                </span>
              </div>
              <p style={{ margin: "0 0 0.75rem 0", color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>
                Buatlah dua berkas kode Python terpisah: modul matematika dan berkas skrip pemanggilnya:
              </p>
              <div style={{ marginLeft: "0.5rem" }}>
                <p style={{ margin: "0.5rem 0 0.25rem 0", fontWeight: 600 }}>A. Berkas <code>math_operations.py</code> (Modul):</p>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.7, fontSize: "0.925rem" }}>
                  <li>Fungsi untuk menghitung <strong>luas dan keliling</strong> bentuk geometri (minimal 3 bentuk geometri: persegi, persegi panjang, dan lingkaran).</li>
                  <li>Fungsi untuk <strong>konversi temperatur suhu</strong> (minimal 2 fungsi konversi: Celsius ke Fahrenheit, dan Celsius ke Kelvin).</li>
                  <li>Minimal 1 variabel konstanta (misalnya: <code>PI = 3.14159</code>).</li>
                </ul>

                <p style={{ margin: "0.75rem 0 0.25rem 0", fontWeight: 600 }}>B. Berkas <code>main.py</code> (Program Utama):</p>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.7, fontSize: "0.925rem" }}>
                  <li>Mengimpor modul <code>math_operations</code> yang telah dibuat.</li>
                  <li>Menggunakan <strong>seluruh fungsi</strong> dari modul tersebut dengan memberikan berbagai nilai input pengujian.</li>
                  <li>Menampilkan hasil kalkulasi ke konsol dengan format yang rapi dan terstruktur.</li>
                  <li>Menerapkan <strong>minimal 2 cara berbeda</strong> untuk mengimpor modul/fungsi (misalnya menggunakan <code>import math_operations</code> dan <code>from math_operations import ...</code>).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips Implementasi */}
          <div
            style={{
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              padding: "1.25rem",
              borderRadius: "10px",
              border: "1px solid rgba(139, 92, 246, 0.25)",
              backgroundColor: "rgba(139, 92, 246, 0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", color: "#8b5cf6", fontWeight: 700 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>Tips Implementasi &amp; Struktur Folder</span>
            </div>
            <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
              <strong>Struktur folder yang disarankan di dalam repositori Anda:</strong>
            </p>
            <CodeBlock language="bash">{`[NAMA]_[NIM]_pertemuan4/
├── .gitignore
├── README.md
├── tugas1_bmi.py
├── tugas2_nilai_mahasiswa.py
├── math_operations.py
└── main.py`}</CodeBlock>
          </div>

          <h3>Kriteria Penilaian:</h3>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left", backgroundColor: "var(--color-surface)" }}>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--color-text-secondary)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>ASPEK PENILAIAN</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "right", color: "var(--color-text-secondary)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>BOBOT</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                    <strong>Soal 1: Program Penghitung BMI</strong>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                      Ketepatan variabel berat/tinggi, rumus BMI akurat, percabangan if-elif-else 4 kategori, dan luaran rapi.
                    </div>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>30%</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                    <strong>Soal 2: Pengelolaan Data Nilai Mahasiswa</strong>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                      List berisi minimal 5 dictionary, formula bobot nilai (30% UTS + 40% UAS + 30% Tugas), grade A-E, format cetak tabel rapi, serta deteksi nilai tertinggi &amp; terendah.
                    </div>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>40%</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                    <strong>Soal 3: Modul Matematika Python (math_operations.py &amp; main.py)</strong>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                      Fungsi luas &amp; keliling 3 bentuk geometri, 2 fungsi konversi suhu, konstanta PI, pemanggilan seluruh fungsi di main.py, serta penerapan minimal 2 cara impor berbeda.
                    </div>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>30%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Dokumentasi yang Diperlukan:</h3>
          <ul>
            <li>
              <strong>README.md berisi:</strong>
              <ul style={{ marginTop: "0.25rem" }}>
                <li>Identitas mahasiswa (Nama dan NIM)</li>
                <li>Deskripsi singkat alur kerja dan fungsi pada setiap program tugas</li>
                <li>Instruksi cara menjalankan setiap berkas skrip Python di terminal</li>
                <li>Screenshot bukti hasil eksekusi program di terminal untuk Soal 1, Soal 2, dan Soal 3</li>
              </ul>
            </li>
            <li>Komentar dalam kode (<em>docstring</em>) pada setiap fungsi untuk menjelaskan parameter input dan nilai kembaliannya.</li>
            <li>Kode mematuhi konvensi penulisan <strong>PEP 8</strong> (indentasi 4 spasi konsisten dan penamaan <em>snake_case</em>).</li>
          </ul>

          <div style={{ marginTop: "2rem" }}>
            <SubmissionBox pertemuan={4} />
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 8. FORMAT PENGUMPULAN                                                     */}
      {/* ========================================================================= */}
      {(!subId || subId === "format-pengumpulan") && (
        <section id="format-pengumpulan">
          <h2>Format Pengumpulan</h2>
          <p>Aturan pengumpulan repositori tugas praktikum:</p>
          <ul>
            <li>Format Repositori GitHub: <code>pemrograman_web_itera_[NIM]</code></li>
            <li>Format Folder Pertemuan: <code>[NAMA]_[NIM]_pertemuan4</code></li>
            <li>Sertakan file <code>README.md</code> yang menjelaskan langkah menjalankan skrip program di VS Code (<code>python tugas1_bmi.py</code>, <code>python tugas2_nilai_mahasiswa.py</code>, dan <code>python main.py</code>).</li>
            <li>Pastikan folder virtual environment (<code>venv/</code>) dan direktori cache (<code>__pycache__/</code>) tidak diunggah ke repositori Git (terdaftar di file <code>.gitignore</code>).</li>
          </ul>

          <SubmissionBox pertemuan={4} />
        </section>
      )}
    </>
  );
}
