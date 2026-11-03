import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 5: Python OOP
export default function Pertemuan5({ subId }: { subId?: string }) {
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
      {/* 0. PILAR UTAMA OOP PYTHON (DASAR TEORI)                                    */}
      {/* ========================================================================= */}
      {(!subId || subId === "dasar-teori") && (
        <section id="dasar-teori">
          <h2>Pilar Utama OOP Python</h2>
          <p>
            <strong>Object-Oriented Programming (OOP)</strong> adalah paradigma pemrograman fundamental dalam rekayasa perangkat lunak modern yang mengorganisir desain program di sekitar <em>objek</em>, bukan semata-mata fungsi atau logika sekuensial. Objek memadukan <strong>state</strong> (data yang disimpan dalam bentuk field/atribut) dan <strong>behavior</strong> (kode/fungsi yang beroperasi pada data tersebut, disebut metode).
          </p>
          <p>
            Python mengadopsi prinsip <em>multi-paradigm</em> dengan dukungan OOP tingkat pertama (<em>first-class OOP support</em>). Dalam ekosistem pengembangan web sisi server (<em>backend</em>), konsep OOP menjadi pilar utama arsitektur framework modern seperti model ORM pada <strong>SQLAlchemy</strong> di Pyramid, <strong>Django ORM</strong>, hingga validasi schema pada <strong>Pydantic</strong> di FastAPI.
          </p>

          <h3>Analogi Dunia Nyata: Memahami Esensi OOP</h3>
          <p>
            Untuk memahami OOP secara intuitif, bayangkan <strong>Class</strong> sebagai sebuah <em>cetakan kue (blueprint)</em> arsitektur, sedangkan <strong>Object</strong> adalah <em>kue nyata</em> yang dihasilkan dari cetakan tersebut:
          </p>
          <ul>
            <li><strong>Class (Cetakan Kue)</strong>: Menentukan bentuk, ukuran, ornamen dasar, dan fitur yang harus dimiliki setiap kue.</li>
            <li><strong>Object (Kue Nyata)</strong>: Masing-masing kue memiliki wujud fisik yang mandiri. Satu kue bisa memiliki isian selai stroberi (state/atribut), kue lain memiliki isian cokelat, namun keduanya sama-sama memiliki metode untuk dipotong atau disajikan.</li>
            <li><strong>Smartphone</strong>: Tombol volume dan layar sentuh adalah antarmuka publik yang Anda gunakan (Abstraction), sementara sirkuit rumit di dalam casing terlindung rapat dari sentuhan sembarangan (Encapsulation).</li>
          </ul>

          <h3>Empat Pilar Utama Pemrograman Berorientasi Objek</h3>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem" }}>Pilar OOP</th>
                  <th style={{ padding: "0.75rem" }}>Prinsip Kerja</th>
                  <th style={{ padding: "0.75rem" }}>Manfaat Nyata dalam Rekayasa Software</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>1. Encapsulation (Enkapsulasi)</td>
                  <td style={{ padding: "0.75rem" }}>Membungkus data dan metode ke dalam satu unit class serta membatasi akses langsung ke komponen internal objek (<em>data hiding</em>).</td>
                  <td style={{ padding: "0.75rem" }}>Mencegah modifikasi data yang tidak valid secara sengaja maupun tidak sengaja, menjaga integritas status sistem.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>2. Inheritance (Pewarisan)</td>
                  <td style={{ padding: "0.75rem" }}>Mekanisme di mana sebuah class anak (<em>subclass</em>) mewarisi atribut dan metode dari class induk (<em>superclass</em>).</td>
                  <td style={{ padding: "0.75rem" }}>Mendukung prinsip DRY (<em>Don&#39;t Repeat Yourself</em>) dan reusability kode; mempercepat penambahan modul baru.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>3. Polymorphism (Polimorfisme)</td>
                  <td style={{ padding: "0.75rem" }}>Kemampuan berbagai objek dari class berbeda untuk merespons pemanggilan metode dengan nama yang sama sesuai perilakunya masing-masing.</td>
                  <td style={{ padding: "0.75rem" }}>Fleksibilitas kode; memungkinkan pemrosesan kumpulan objek heterogen melalui satu antarmuka yang seragam.</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>4. Abstraction (Abstraksi)</td>
                  <td style={{ padding: "0.75rem" }}>Menyembunyikan detail implementasi teknis yang rumit dan hanya menyajikan antarmuka esensial/kontrak yang dibutuhkan pengguna.</td>
                  <td style={{ padding: "0.75rem" }}>Mengurangi beban kognitif pengembang dan memudahkan pemisahan kontrak desain (<em>interface</em>) dari implementasi nyata.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Matriks Perbandingan: Konsep Kunci dalam Ekosistem OOP</h3>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem" }}>Konsep</th>
                  <th style={{ padding: "0.75rem" }}>Definisi &amp; Peran Teknis</th>
                  <th style={{ padding: "0.75rem" }}>Sintaks / Elemen Khas Python</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Class</td>
                  <td style={{ padding: "0.75rem" }}>Cetak biru (template) pendefinisi struktur atribut dan fungsionalitas metode.</td>
                  <td style={{ padding: "0.75rem" }}><code>class NamaClass:</code> (PascalCase)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Object (Instance)</td>
                  <td style={{ padding: "0.75rem" }}>Entitas nyata di memori yang dibuat berdasarkan cetak biru class.</td>
                  <td style={{ padding: "0.75rem" }}><code>obj = NamaClass(argumen)</code></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Constructor</td>
                  <td style={{ padding: "0.75rem" }}>Metode inisialisasi bawaan yang dieksekusi otomatis saat objek baru dibuat.</td>
                  <td style={{ padding: "0.75rem" }}><code>def __init__(self, ...):</code></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Self Parameter</td>
                  <td style={{ padding: "0.75rem" }}>Referensi eksplisit yang merujuk pada objek instance yang sedang memanggil metode.</td>
                  <td style={{ padding: "0.75rem" }}>Wajib sebagai parameter pertama di setiap method instance.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Access Modifiers</td>
                  <td style={{ padding: "0.75rem" }}>Tingkat proteksi variabel (Public, Protected, Private melalui name mangling).</td>
                  <td style={{ padding: "0.75rem" }}><code>variabel</code>, <code>_protected</code>, <code>__private</code></td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Abstract Class</td>
                  <td style={{ padding: "0.75rem" }}>Class acuan kontrak yang tidak dapat diinstansiasi secara langsung.</td>
                  <td style={{ padding: "0.75rem" }}><code>from abc import ABC, abstractmethod</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          {calloutInfo(
            "Mindset Pemrograman Berorientasi Objek: Jangan hanya memandang kode sebagai kumpulan instruksi baris per baris. Pandanglah sistem Anda sebagai miniatur dunia nyata tempat objek-objek mandiri saling berkomunikasi dan bertukar pesan untuk menyelesaikan tugas komputasi."
          )}

          <h3 id="alat-bahan">Alat dan Bahan Praktikum</h3>
          <ul>
            <li><strong>Python 3.10+</strong>: Runtime environment resmi Python (<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org</a>).</li>
            <li><strong>Visual Studio Code</strong>: Editor kode utama yang dipasangi ekstensi resmi <em>Python</em> dan <em>Pylance</em>.</li>
            <li><strong>Terminal Terintegrasi</strong>: Terminal bawaan VS Code untuk mengeksekusi skrip Python.</li>
            <li><strong>Git &amp; GitHub</strong>: Untuk pengelolaan repositori dan riwayat commit praktikum.</li>
          </ul>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 1. PENGENALAN KONSEP OOP                                                  */}
      {/* ========================================================================= */}
      {(!subId || subId === "pengenalan-oop") && (
        <section id="pengenalan-oop">
          <h2>1. Pengenalan Konsep OOP</h2>
          <p>
            Sebelum mulai menulis arsitektur class yang rumit, kita perlu membiasakan diri dengan filosofi mendasar Python: <strong>&quot;Everything in Python is an Object&quot;</strong>. Setiap tipe data yang pernah Anda gunakan—mulai dari integer, string, list, dictionary, hingga sebuah fungsi—pada hakikatnya adalah objek yang diciptakan dari sebuah class bawaan Python.
          </p>

          <h3>Langkah 1: Mempersiapkan Workspace di VS Code</h3>
          <p>
            Buka VS Code, buat folder baru bernama <code>latihan_oop</code>, lalu buka folder tersebut (<em>File &rarr; Open Folder...</em>). Buka terminal terintegrasi dengan menekan <kbd>Ctrl</kbd> + <kbd>`</kbd> (atau <kbd>Cmd</kbd> + <kbd>`</kbd> di macOS).
          </p>

          <h3>Hands-on 1: Membuktikan Filosofi &#39;Everything is an Object&#39;</h3>
          <p>
            Buat file baru <code>01_everything_is_object.py</code>, lalu ketikkan kode berikut untuk membuktikan identitas objek internal pada tipe-tipe data dasar:
          </p>

          <CodeBlock language="python">{`# ==============================================================================
# Berkas: 01_everything_is_object.py
# Deskripsi: Eksplorasi objek bawaan Python menggunakan type(), id(), dan dunder class
# ==============================================================================

# 1. Nilai primitif sesungguhnya adalah instance dari class bawaan
angka = 42
pesan = "Praktikum Pemrograman Web ITERA"
daftar_nilai = [85, 90, 78]

print("Tipe objek 'angka'        :", type(angka), "| Class:", angka.__class__)
print("Tipe objek 'pesan'        :", type(pesan), "| Class:", pesan.__class__)
print("Tipe objek 'daftar_nilai' :", type(daftar_nilai), "| Class:", daftar_nilai.__class__)

# 2. Objek memiliki metode bawaan yang melekat pada dirinya
print("\nManipulasi string via method class str:")
print("Versi Huruf Besar :", pesan.upper())
print("Pecah Kata        :", pesan.split(" "))

# 3. Bahkan fungsi juga merupakan objek tingkat pertama (first-class object)!
def salam():
    return "Halo dari fungsi!"

print("\nTipe objek fungsi 'salam' :", type(salam))
print("Identitas memori (id)     :", hex(id(salam)))`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 7-9:</strong> Mendefinisikan variabel biasa. Di balik layar, Python menginstansiasi objek dari class <code>int</code>, <code>str</code>, dan <code>list</code>.</li>
                <li><strong>Baris 11-13:</strong> Fungsi <code>type()</code> dan atribut internal <code>__class__</code> memperlihatkan cetak biru class asal tempat objek tersebut diciptakan.</li>
                <li><strong>Baris 16-18:</strong> Fungsi seperti <code>.upper()</code> dan <code>.split()</code> bukan fungsi global terpisah, melainkan <em>metode</em> yang didefinisikan di dalam class <code>str</code>.</li>
                <li><strong>Baris 21-26:</strong> Mendefinisikan fungsi <code>salam</code>. Di Python, fungsi adalah <em>first-class citizen</em> yang juga berupa objek dari class <code>function</code> dan memiliki alamat memori unik (<code>id()</code>).</li>
              </ul>
            </div>
          )}

          {codeOutput(
            <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`Tipe objek 'angka'        : <class 'int'> | Class: <class 'int'>
Tipe objek 'pesan'        : <class 'str'> | Class: <class 'str'>
Tipe objek 'daftar_nilai' : <class 'list'> | Class: <class 'list'>

Manipulasi string via method class str:
Versi Huruf Besar : PRAKTIKUM PEMROGRAMAN WEB ITERA
Pecah Kata        : ['Praktikum', 'Pemrograman', 'Web', 'ITERA']

Tipe objek fungsi 'salam' : <class 'function'>
Identitas memori (id)     : 0x104b2a8c0`}
            </pre>
          )}

          <h3>Hands-on 2: Studi Komparasi Procedural vs Object-Oriented</h3>
          <p>
            Untuk memahami mengapa OOP sangat dibutuhkan dalam aplikasi berskala besar, perhatikan perbandingan antara pendekatan prosedural (data terpisah dari fungsi) dengan pendekatan OOP (data dan fungsi menyatu di dalam class) pada berkas <code>01_procedural_vs_oop.py</code>:
          </p>

          <CodeBlock language="python">{`# ==============================================================================
# Berkas: 01_procedural_vs_oop.py
# Deskripsi: Perbandingan praktis penanganan data mahasiswa via Prosedural vs OOP
# ==============================================================================

# ------------------------------------------------------------------------------
# PENDEKATAN 1: PROSEDURAL (Data dan Fungsi Terpisah)
# Masalah: Jika struktur dictionary berubah, semua fungsi yang bergantung bisa rusak.
# ------------------------------------------------------------------------------
mahasiswa_proc = {
    "nama": "Budi Santoso",
    "nim": "121140001",
    "jurusan": "Teknik Informatika",
    "ipk": 3.45
}

def cetak_profil_prosedural(mhs):
    print(f"[Prosedural] {mhs['nama']} ({mhs['nim']}) - {mhs['jurusan']} | IPK: {mhs['ipk']}")

def perbarui_ipk_prosedural(mhs, ipk_baru):
    if 0.0 <= ipk_baru <= 4.0:
        mhs['ipk'] = ipk_baru
    else:
        print("Nilai IPK tidak valid!")

cetak_profil_prosedural(mahasiswa_proc)
perbarui_ipk_prosedural(mahasiswa_proc, 3.75)
cetak_profil_prosedural(mahasiswa_proc)

# ------------------------------------------------------------------------------
# PENDEKATAN 2: OBJECT-ORIENTED (Data dan Perilaku Terbungkus Rapi dalam Class)
# Keunggulan: Validasi state dan fungsionalitas terlindungi di dalam satu entitas.
# ------------------------------------------------------------------------------
class Mahasiswa:
    def __init__(self, nama: str, nim: str, jurusan: str, ipk: float):
        self.nama = nama
        self.nim = nim
        self.jurusan = jurusan
        self.ipk = ipk

    def cetak_profil(self):
        print(f"[OOP] {self.nama} ({self.nim}) - {self.jurusan} | IPK: {self.ipk}")

    def update_ipk(self, ipk_baru: float):
        if 0.0 <= ipk_baru <= 4.0:
            self.ipk = ipk_baru
            print(f"IPK {self.nama} berhasil diperbarui menjadi {self.ipk}")
        else:
            print("Peringatan: Nilai IPK harus berada pada rentang 0.0 s.d 4.0!")

print("\n--- Eksekusi Paradigma OOP ---")
mhs_oop = Mahasiswa("Siti Rahma", "121140002", "Teknik Informatika", 3.80)
mhs_oop.cetak_profil()
mhs_oop.update_ipk(3.92)
mhs_oop.cetak_profil()`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 10-23 (Pendekatan Prosedural):</strong> Data disimpan dalam variabel dictionary bebas. Fungsi <code>cetak_profil_prosedural</code> dan <code>perbarui_ipk_prosedural</code> berada di luar data. Siapa pun dapat mengubah <code>mahasiswa_proc['ipk'] = 99</code> secara langsung tanpa melewati validasi.</li>
                <li><strong>Baris 33-38 (Pendekatan OOP):</strong> Class <code>Mahasiswa</code> membungkus 4 atribut (<code>nama</code>, <code>nim</code>, <code>jurusan</code>, <code>ipk</code>) melalui constructor <code>__init__</code>.</li>
                <li><strong>Baris 40-49:</strong> Logika validasi dan presentasi disatukan langsung menjadi method objek. Akses dan modifikasi state menjadi terkontrol, aman, dan reusable di berbagai modul aplikasi web.</li>
              </ul>
            </div>
          )}

          {codeOutput(
            <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`[Prosedural] Budi Santoso (121140001) - Teknik Informatika | IPK: 3.45
[Prosedural] Budi Santoso (121140001) - Teknik Informatika | IPK: 3.75

--- Eksekusi Paradigma OOP ---
[OOP] Siti Rahma (121140002) - Teknik Informatika | IPK: 3.8
IPK Siti Rahma berhasil diperbarui menjadi 3.92
[OOP] Siti Rahma (121140002) - Teknik Informatika | IPK: 3.92`}
            </pre>
          )}

          {calloutExercise(
            "Pemodelan Entitas Sistem Kasir Toko",
            "Identifikasi entitas nyata untuk sebuah toko online (misalnya: Produk, Keranjang, dan Pengguna). Tuliskan daftar minimal 3 atribut data dan 2 metode perilaku yang tepat untuk masing-masing entitas tersebut dalam selembar catatan/komentar kode!"
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 2. CLASS & OBJECT                                                         */}
      {/* ========================================================================= */}
      {(!subId || subId === "class-dan-object") && (
        <section id="class-dan-object">
          <h2>2. Class &amp; Object</h2>
          <p>
            Setelah memahami esensi OOP, kini kita akan mendalami mekanisme pembuatan class, perbedaan penting antara <strong>Atribut Class</strong> dan <strong>Atribut Instance</strong>, peran parameter <code>self</code>, serta implementasi <strong>Dunder Methods</strong> (<em>double underscore / magic methods</em>) seperti <code>__str__</code> dan <code>__repr__</code>.
          </p>

          <h3>Konsep Anatomi Class di Python</h3>
          <ul>
            <li><strong>Atribut Class (Class Attribute)</strong>: Variabel yang dideklarasikan langsung di dalam tubuh class di luar method apa pun. Nilai ini dibagi bersama (<em>shared</em>) oleh seluruh objek yang diciptakan dari class tersebut.</li>
            <li><strong>Atribut Instance (Instance Attribute)</strong>: Variabel yang diinisialisasi melalui <code>self.nama_variabel</code> di dalam constructor <code>__init__</code>. Setiap objek memiliki salinan nilai mandiri yang terisolasi dari objek lain.</li>
            <li><strong>Parameter <code>self</code></strong>: Penunjuk eksplisit ke objek spesifik yang sedang dieksekusi. Tanpa <code>self</code>, Python tidak akan tahu atribut milik objek mana yang sedang dibaca atau diubah.</li>
            <li><strong>Dunder <code>__str__</code> vs <code>__repr__</code></strong>: <code>__str__</code> menghasilkan representasi teks ramah pembaca ketika objek dicetak via <code>print()</code>, sedangkan <code>__repr__</code> menghasilkan representasi teknis dan detail yang berguna saat debugging.</li>
          </ul>

          <h3>Hands-on 3: Membangun Class Mahasiswa Lengkap (02_class_object.py)</h3>
          <p>
            Buat file baru bernama <code>02_class_object.py</code>, lalu tuliskan kode berikut:
          </p>

          <CodeBlock language="python">{`# ==============================================================================
# Berkas: 02_class_object.py
# Deskripsi: Implementasi Class Mahasiswa dengan Atribut Class, Instance & Dunder
# ==============================================================================

class Mahasiswa:
    # 1. ATRIBUT CLASS (Milik bersama seluruh instance)
    universitas = "Institut Teknologi Sumatera"
    prodi = "Teknik Informatika"
    total_mahasiswa_terdaftar = 0

    # 2. CONSTRUCTOR / INITIALIZER
    def __init__(self, nama: str, nim: str, ipk: float = 0.0):
        # ATRIBUT INSTANCE (Unik milik setiap objek masing-masing)
        self.nama = nama
        self.nim = nim
        self.ipk = ipk
        self.daftar_matkul = []
        
        # Setiap kali objek baru diciptakan, hitung total mahasiswa
        Mahasiswa.total_mahasiswa_terdaftar += 1

    # 3. INSTANCE METHODS
    def tambah_matkul(self, mata_kuliah: str):
        self.daftar_matkul.append(mata_kuliah)
        print(f"[{self.nama}] Berhasil mengambil mata kuliah: {mata_kuliah}")

    def update_ipk(self, ipk_baru: float):
        if 0.0 <= ipk_baru <= 4.0:
            self.ipk = ipk_baru
        else:
            print(f"Nilai IPK {ipk_baru} tidak valid!")

    def evaluasi_status(self) -> str:
        if self.ipk >= 3.50:
            return "Cumlaude / Sangat Memuaskan"
        elif self.ipk >= 3.00:
            return "Memuaskan"
        elif self.ipk >= 2.00:
            return "Cukup"
        else:
            return "Perlu Bimbingan Khusus"

    # 4. SPECIAL (DUNDER) METHODS
    def __str__(self) -> str:
        """Representasi string yang dibaca pengguna akhir saat print(objek)"""
        return f"Mahasiswa: {self.nama} (NIM: {self.nim}) | IPK: {self.ipk:.2f} | Kampus: {self.universitas}"

    def __repr__(self) -> str:
        """Representasi teknis untuk keperluan logging dan debugging developer"""
        return f"Mahasiswa(nama='{self.nama}', nim='{self.nim}', ipk={self.ipk})"


# --- PROGRAM UTAMA (INSTANSIASI & UJI COBA) ---
if __name__ == "__main__":
    print("Total mahasiswa awal:", Mahasiswa.total_mahasiswa_terdaftar)

    # Instansiasi 2 objek mahasiswa berbeda
    mhs1 = Mahasiswa("Ahmad Fadhil", "121140001", 3.72)
    mhs2 = Mahasiswa("Nabila Putri", "121140002", 3.40)

    print("Total mahasiswa sekarang:", Mahasiswa.total_mahasiswa_terdaftar)

    # Uji coba penambahan mata kuliah (instance attribute terisolasi)
    mhs1.tambah_matkul("Pemrograman Web")
    mhs1.tambah_matkul("Basis Data")
    mhs2.tambah_matkul("Kecerdasan Buatan")

    print(f"\nMatkul {mhs1.nama}: {mhs1.daftar_matkul}")
    print(f"Matkul {mhs2.nama}: {mhs2.daftar_matkul}")

    # Uji evaluasi status akademik
    print(f"Predikat {mhs1.nama}: {mhs1.evaluasi_status()}")
    print(f"Predikat {mhs2.nama}: {mhs2.evaluasi_status()}")

    # Uji representasi dunder method __str__ dan __repr__
    print("\nCetak objek mhs1 langsung (memanggil __str__):")
    print(mhs1)

    print("Representasi teknis mhs2 (memanggil __repr__):")
    print(repr(mhs2))

    # Bukti perubahan atribut class berdampak ke seluruh instance
    print("\n--- Modifikasi Atribut Class ---")
    Mahasiswa.universitas = "ITERA Kampus Mandiri"
    print("Kampus mhs1 setelah modifikasi:", mhs1.universitas)
    print("Kampus mhs2 setelah modifikasi:", mhs2.universitas)`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 8-10:</strong> Variabel <code>universitas</code>, <code>prodi</code>, dan <code>total_mahasiswa_terdaftar</code> berada di tingkat class. Seluruh objek memiliki referensi yang sama ke variabel ini.</li>
                <li><strong>Baris 13-20:</strong> Constructor <code>__init__</code> menerima argumen dan menyimpannya ke <code>self.nama</code>, <code>self.nim</code>, <code>self.ipk</code>, serta <code>self.daftar_matkul</code>. Di baris 20, kita menaikkan counter class <code>Mahasiswa.total_mahasiswa_terdaftar += 1</code>.</li>
                <li><strong>Baris 23-40:</strong> Method instance <code>tambah_matkul</code>, <code>update_ipk</code>, dan <code>evaluasi_status</code> memanipulasi data objek spesifik yang ditunjuk oleh <code>self</code>.</li>
                <li><strong>Baris 43-49:</strong> Implementasi method ajaib <code>__str__</code> dan <code>__repr__</code> mengubah cara objek ditampilkan di konsol terminal menjadi format teks yang rapi dan elegan.</li>
                <li><strong>Baris 78-81:</strong> Ketika <code>Mahasiswa.universitas</code> diubah, seluruh objek (<code>mhs1</code> dan <code>mhs2</code>) otomatis merefleksikan nilai baru tersebut.</li>
              </ul>
            </div>
          )}

          {codeOutput(
            <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`Total mahasiswa awal: 0
Total mahasiswa sekarang: 2
[Ahmad Fadhil] Berhasil mengambil mata kuliah: Pemrograman Web
[Ahmad Fadhil] Berhasil mengambil mata kuliah: Basis Data
[Nabila Putri] Berhasil mengambil mata kuliah: Kecerdasan Buatan

Matkul Ahmad Fadhil: ['Pemrograman Web', 'Basis Data']
Matkul Nabila Putri: ['Kecerdasan Buatan']
Predikat Ahmad Fadhil: Cumlaude / Sangat Memuaskan
Predikat Nabila Putri: Memuaskan

Cetak objek mhs1 langsung (memanggil __str__):
Mahasiswa: Ahmad Fadhil (NIM: 121140001) | IPK: 3.72 | Kampus: Institut Teknologi Sumatera
Representasi teknis mhs2 (memanggil __repr__):
Mahasiswa(nama='Nabila Putri', nim='121140002', ipk=3.4)

--- Modifikasi Atribut Class ---
Kampus mhs1 setelah modifikasi: ITERA Kampus Mandiri
Kampus mhs2 setelah modifikasi: ITERA Kampus Mandiri`}
            </pre>
          )}

          {calloutExercise(
            "Class Buku dengan Diskon & Dunder Length",
            "Buat file latihan_buku.py. Buat class Buku dengan atribut judul, penulis, harga_asli, dan jumlah_halaman. Tambahkan method hitung_harga_diskon(persen) yang mengembalikan harga setelah potongan, method __str__ untuk mencetak kartu buku, serta dunder method __len__(self) yang mengembalikan jumlah_halaman ketika fungsi len(buku) dipanggil!"
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. INHERITANCE (PEWARISAN)                                                */}
      {/* ========================================================================= */}
      {(!subId || subId === "inheritance-pewarisan") && (
        <section id="inheritance-pewarisan">
          <h2>3. Inheritance (Pewarisan)</h2>
          <p>
            <strong>Inheritance (Pewarisan)</strong> adalah mekanisme di mana sebuah class baru (disebut <em>child class</em>, <em>subclass</em>, atau <em>derived class</em>) mewarisi seluruh atribut dan metode dari class yang sudah ada (disebut <em>parent class</em>, <em>superclass</em>, atau <em>base class</em>).
          </p>
          <p>
            Inheritance memodelkan relasi <strong>&quot;is-a&quot;</strong> (merupakan sebuah). Contoh: <em>Mobil adalah sebuah Kendaraan</em>, <em>Dosen adalah seorang Pegawai</em>.
          </p>

          <h3>Konsep Kunci Inheritance di Python</h3>
          <ul>
            <li><strong>Sintaks Pewarisan</strong>: <code>class SubClass(SuperClass):</code></li>
            <li><strong>Fungsi <code>super()</code></strong>: Mengakses dan memanggil constructor atau metode milik parent class secara dinamis tanpa perlu menuliskan nama parent class secara manual.</li>
            <li><strong>Method Overriding</strong>: Kemampuan subclass untuk mendefinisikan ulang implementasi metode yang sudah diwarisi dari parent class agar perilakunya lebih spesifik sesuai kebutuhan subclass.</li>
            <li><strong>Multiple Inheritance &amp; MRO</strong>: Python mendukung pewarisan dari lebih dari satu class induk sekaligus (<code>class Hybrid(ClassA, ClassB):</code>). Urutan eksekusi method dipandu oleh algoritma <strong>C3 Linearization / MRO (Method Resolution Order)</strong>.</li>
            <li><strong>Fungsi <code>isinstance()</code> &amp; <code>issubclass()</code></strong>: Fungsi inspeksi runtime untuk memastikan tipe objek dan relasi silsilah antar class.</li>
          </ul>

          <h3>Hands-on 4: Hirarki Kendaraan &amp; Method Overriding (03_inheritance.py)</h3>
          <p>
            Buat file baru <code>03_inheritance.py</code>, lalu salin dan jalankan kode hierarki kendaraan berikut:
          </p>

          <CodeBlock language="python">{`# ==============================================================================
# Berkas: 03_inheritance.py
# Deskripsi: Implementasi Superclass, Subclass, super(), Overriding & MRO
# ==============================================================================

# ------------------------------------------------------------------------------
# 1. SUPERCLASS (BASE CLASS)
# ------------------------------------------------------------------------------
class Kendaraan:
    def __init__(self, merek: str, model: str, tahun: int):
        self.merek = merek
        self.model = model
        self.tahun = tahun
        self.odometer = 0  # Kilometer tempuh awal

    def deskripsi(self) -> str:
        return f"{self.merek} {self.model} ({self.tahun})"

    def tambah_jarak(self, km: float):
        if km > 0:
            self.odometer += km
            print(f"[{self.merek}] Menempuh perjalanan +{km} km. Total Odo: {self.odometer} km")
        else:
            print("Nilai kilometer tambahan tidak valid!")

    def klakson(self) -> str:
        return "Tin tin!"


# ------------------------------------------------------------------------------
# 2. SUBCLASS MOBIL (Single Inheritance dari Kendaraan)
# ------------------------------------------------------------------------------
class Mobil(Kendaraan):
    def __init__(self, merek: str, model: str, tahun: int, jumlah_pintu: int, kapasitas_tangki: float):
        # Memanggil constructor parent class Kendaraan via super()
        super().__init__(merek, model, tahun)
        # Atribut spesifik Mobil
        self.jumlah_pintu = jumlah_pintu
        self.kapasitas_tangki = kapasitas_tangki
        self.sisa_bensin = kapasitas_tangki

    # METHOD OVERRIDING: Memperluas deskripsi milik Kendaraan
    def deskripsi(self) -> str:
        deskripsi_dasar = super().deskripsi()
        return f"{deskripsi_dasar} [Mobil {self.jumlah_pintu} Pintu, Tangki: {self.kapasitas_tangki}L]"

    # OVERRIDING KLAKSON
    def klakson(self) -> str:
        return "Telolet! Telolet! (Klakson Mobil)"

    def isi_bensin(self, liter: float):
        if self.sisa_bensin + liter <= self.kapasitas_tangki:
            self.sisa_bensin += liter
            print(f"[{self.merek} {self.model}] Diisi bensin {liter}L. Sisa bahan bakar: {self.sisa_bensin}L")
        else:
            print("Kapasitas tangki bensin akan meluap!")


# ------------------------------------------------------------------------------
# 3. SUBCLASS MOTOR (Mewarisi Kendaraan)
# ------------------------------------------------------------------------------
class Motor(Kendaraan):
    def __init__(self, merek: str, model: str, tahun: int, kapasitas_cc: int):
        super().__init__(merek, model, tahun)
        self.kapasitas_cc = kapasitas_cc

    def deskripsi(self) -> str:
        return f"{super().deskripsi()} [Motor Sport {self.kapasitas_cc}cc]"

    def klakson(self) -> str:
        return "Bip bip! (Klakson Motor)"

    def wheelie(self):
        print(f"[{self.merek} {self.model}] Melakukan atraksi wheelie satu roda!")


# ------------------------------------------------------------------------------
# 4. MULTIPLE INHERITANCE: KENDARAAN LISTRIK & MOBIL LISTRIK
# ------------------------------------------------------------------------------
class KomponenBaterai:
    def __init__(self, kapasitas_kwh: float):
        self.kapasitas_kwh = kapasitas_kwh
        self.daya_tersisa = 100.0  # Persen baterai

    def isi_daya(self, persen: float):
        self.daya_tersisa = min(100.0, self.daya_tersisa + persen)
        print(f"Baterai diisi ulang. Kapasitas daya: {self.daya_tersisa}%")


class MobilListrik(Mobil, KomponenBaterai):
    """Mewarisi Mobil (yang mewarisi Kendaraan) dan KomponenBaterai"""
    def __init__(self, merek: str, model: str, tahun: int, kapasitas_kwh: float):
        Mobil.__init__(self, merek, model, tahun, jumlah_pintu=4, kapasitas_tangki=0.0)
        KomponenBaterai.__init__(self, kapasitas_kwh)

    def deskripsi(self) -> str:
        return f"{self.merek} {self.model} ({self.tahun}) [EV Baterai {self.kapasitas_kwh} kWh, Daya: {self.daya_tersisa}%]"


# --- PROGRAM UTAMA ---
if __name__ == "__main__":
    avanza = Mobil("Toyota", "Avanza Veloz", 2023, jumlah_pintu=5, kapasitas_tangki=45.0)
    cbr = Motor("Honda", "CBR250RR", 2022, kapasitas_cc=250)
    ioniq = MobilListrik("Hyundai", "Ioniq 5", 2024, kapasitas_kwh=72.6)

    print("--- Deskripsi Kendaraan ---")
    print(avanza.deskripsi())
    print(cbr.deskripsi())
    print(ioniq.deskripsi())

    print("\n--- Uji Coba Suara Klakson (Polymorphic Overriding) ---")
    print(f"{avanza.model} : {avanza.klakson()}")
    print(f"{cbr.model}    : {cbr.klakson()}")

    print("\n--- Perjalanan & Konsumsi Energi ---")
    avanza.tambah_jarak(120.5)
    avanza.isi_bensin(15)
    cbr.wheelie()
    ioniq.isi_daya(30)

    print("\n--- Pemeriksaan Relasi Pewarisan (isinstance & issubclass) ---")
    print("Apakah avanza adalah instance dari Mobil?    :", isinstance(avanza, Mobil))
    print("Apakah avanza adalah instance dari Kendaraan?:", isinstance(avanza, Kendaraan))
    print("Apakah cbr adalah instance dari Mobil?       :", isinstance(cbr, Mobil))
    print("Apakah Mobil subclass dari Kendaraan?        :", issubclass(Mobil, Kendaraan))
    print("\nMRO MobilListrik:", [c.__name__ for c in MobilListrik.__mro__])`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 7-23 (Superclass Kendaraan):</strong> Mendefinisikan fondasi dasar yang dimiliki seluruh jenis kendaraan (merek, model, tahun, odometer, method <code>tambah_jarak</code>).</li>
                <li><strong>Baris 29-37 (Subclass Mobil):</strong> Deklarasi <code>class Mobil(Kendaraan)</code> mewarisi seluruh kemampuan <code>Kendaraan</code>. Pemanggilan <code>super().__init__(merek, model, tahun)</code> menyalurkan parameter inisialisasi ke constructor parent secara elegan.</li>
                <li><strong>Baris 40-47 (Method Overriding):</strong> Method <code>deskripsi()</code> dan <code>klakson()</code> di-override dengan menambahkan logika khusus mobil (jumlah pintu dan bunyi klakson khas).</li>
                <li><strong>Baris 71-87 (Multiple Inheritance):</strong> <code>MobilListrik</code> mewarisi dua silsilah sekaligus: class <code>Mobil</code> dan class <code>KomponenBaterai</code>.</li>
                <li><strong>Baris 118-124 (Pemeriksaan Tipe &amp; MRO):</strong> <code>isinstance(avanza, Kendaraan)</code> bernilai <code>True</code> karena <code>Mobil</code> adalah turunan sah dari <code>Kendaraan</code>. <code>MobilListrik.__mro__</code> memperlihatkan urutan resolusi pencarian method (MobilListrik &rarr; Mobil &rarr; Kendaraan &rarr; KomponenBaterai &rarr; object).</li>
              </ul>
            </div>
          )}

          {codeOutput(
            <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`--- Deskripsi Kendaraan ---
Toyota Avanza Veloz (2023) [Mobil 5 Pintu, Tangki: 45.0L]
Honda CBR250RR (2022) [Motor Sport 250cc]
Hyundai Ioniq 5 (2024) [EV Baterai 72.6 kWh, Daya: 100.0%]

--- Uji Coba Suara Klakson (Polymorphic Overriding) ---
Avanza Veloz : Telolet! Telolet! (Klakson Mobil)
CBR250RR     : Bip bip! (Klakson Motor)

--- Perjalanan & Konsumsi Energi ---
[Toyota] Menempuh perjalanan +120.5 km. Total Odo: 120.5 km
[Toyota Avanza Veloz] Diisi bensin 15L. Sisa bahan bakar: 60.0L
[Honda CBR250RR] Melakukan atraksi wheelie satu roda!
Baterai diisi ulang. Kapasitas daya: 100.0%

--- Pemeriksaan Relasi Pewarisan (isinstance & issubclass) ---
Apakah avanza adalah instance dari Mobil?    : True
Apakah avanza adalah instance dari Kendaraan?: True
Apakah cbr adalah instance dari Mobil?       : False
Apakah Mobil subclass dari Kendaraan?        : True

MRO MobilListrik: ['MobilListrik', 'Mobil', 'Kendaraan', 'KomponenBaterai', 'object']`}
            </pre>
          )}

          {calloutExercise(
            "Armada Truk Ekspedisi Kargo",
            "Buatlah subclass Truk(Kendaraan) di dalam file latihan_truk.py. Tambahkan atribut kapasitas_maksimal_ton dan muatan_saat_ini. Buat method muat_barang(berat_ton) yang memvalidasi agar muatan tidak melampaui kapasitas maksimal truk, serta override method deskripsi() untuk menampilkan beban muatan saat ini!"
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. ENCAPSULATION & PROPERTIES                                             */}
      {/* ========================================================================= */}
      {(!subId || subId === "encapsulation") && (
        <section id="encapsulation">
          <h2>4. Encapsulation &amp; Properties</h2>
          <p>
            <strong>Encapsulation (Enkapsulasi)</strong> adalah prinsip menyembunyikan detail implementasi internal dan melindungi keadaan internal objek (<em>state</em>) dari manipulasi luar secara langsung yang berpotensi merusak integritas sistem.
          </p>

          <h3>Konvensi Tingkat Akses (Access Modifiers) di Python</h3>
          <p>
            Berbeda dengan Java atau C++ yang memiliki keyword ketat <code>private</code> atau <code>protected</code>, Python menerapkan konvensi penamaan karakter garis bawah (<em>underscore</em>):
          </p>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem" }}>Tingkat Akses</th>
                  <th style={{ padding: "0.75rem" }}>Format Penulisan</th>
                  <th style={{ padding: "0.75rem" }}>Aturan Akses &amp; Mekanisme Python</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Public</td>
                  <td style={{ padding: "0.75rem" }}><code>self.nama</code></td>
                  <td style={{ padding: "0.75rem" }}>Dapat dibaca dan diubah secara bebas langsung dari luar maupun dalam class.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Protected</td>
                  <td style={{ padding: "0.75rem" }}><code>self._nama</code> (1 underscore)</td>
                  <td style={{ padding: "0.75rem" }}>Konvensi kesepakatan pengembang: hanya boleh diakses dari dalam class dan subclass turunannya. Secara teknis masih bisa diakses dari luar, namun sangat tidak disarankan.</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Private</td>
                  <td style={{ padding: "0.75rem" }}><code>self.__nama</code> (2 underscore)</td>
                  <td style={{ padding: "0.75rem" }}>Memicu mekanisme <strong>Name Mangling</strong>: interpreter mengubah nama variabel internal menjadi <code>_NamaClass__nama</code> sehingga akses langsung dari luar akan memicu <code>AttributeError</code>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Getter dan Setter Modern via Dekorator @property</h3>
          <p>
            Di masa lalu, pengembang sering membuat fungsi manual seperti <code>get_saldo()</code> dan <code>set_saldo(nilai)</code>. Gaya tersebut dianggap <em>non-pythonic</em>. Python menyediakan dekorator elegan:
          </p>
          <ul>
            <li><code>@property</code>: Mengubah sebuah method fungsi menjadi seolah-olah atribut biasa yang dapat dibaca (<em>getter</em>).</li>
            <li><code>@&#123;properti&#125;.setter</code>: Menyediakan jalur pengisian nilai baru dengan penyisipan validasi bisnis secara ketat sebelum data disimpan ke atribut private.</li>
            <li><code>@&#123;properti&#125;.deleter</code>: Mengontrol aksi pembersihan saat atribut dihapus menggunakan perintah <code>del objek.properti</code>.</li>
          </ul>

          <h3>Hands-on 5: Sistem Keamanan Rekening Bank (04_encapsulation.py)</h3>
          <p>
            Buat file baru <code>04_encapsulation.py</code>, lalu tuliskan kode sistem perbankan berikut:
          </p>

          <CodeBlock language="python">{`# ==============================================================================
# Berkas: 04_encapsulation.py
# Deskripsi: Penerapan Public, Protected, Private, Name Mangling & @property
# ==============================================================================

class RekeningBank:
    def __init__(self, nomor_rekening: str, nama_pemilik: str, saldo_awal: float, pin: str):
        # 1. Public Attribute: Siapa pun boleh melihat nomor rekening
        self.nomor_rekening = nomor_rekening
        
        # 2. Protected Attribute: Hanya untuk class ini dan subclass internal perbankan
        self._pemilik = nama_pemilik
        
        # 3. Private Attributes: Terlindungi Name Mangling, tidak boleh disentuh langsung
        self.__saldo = max(0.0, float(saldo_awal))
        self.__pin = str(pin)
        self._riwayat_transaksi = []

    # --------------------------------------------------------------------------
    # PROPERTY GETTER (Membaca saldo secara aman)
    # --------------------------------------------------------------------------
    @property
    def saldo(self) -> float:
        """Mengembalikan nilai saldo sebagai atribut read-accessible"""
        return self.__saldo

    # --------------------------------------------------------------------------
    # PROPERTY SETTER (Mengontrol pengubahan saldo dengan validasi ketat)
    # --------------------------------------------------------------------------
    @saldo.setter
    def saldo(self, jumlah_baru: float):
        if not isinstance(jumlah_baru, (int, float)):
            raise TypeError("Nilai saldo harus berupa angka numerik!")
        if jumlah_baru < 0:
            raise ValueError("Saldo rekening tidak boleh bernilai negatif!")
        self.__saldo = float(jumlah_baru)
        print(f"[AUDIT] Saldo {self.nomor_rekening} disesuaikan langsung menjadi: Rp {self.__saldo:,.2f}")

    # --------------------------------------------------------------------------
    # METODE BISNIS (Transaksi Keuangan)
    # --------------------------------------------------------------------------
    def setor(self, nominal: float):
        if nominal <= 0:
            print("Gagal: Nominal setor harus lebih besar dari Rp 0!")
            return
        self.__saldo += nominal
        self._riwayat_transaksi.append(f"Setor Tunai: +Rp {nominal:,.2f}")
        print(f"Setor tunai Rp {nominal:,.2f} sukses. Saldo saat ini: Rp {self.__saldo:,.2f}")

    def tarik(self, nominal: float, pin_input: str) -> bool:
        # Validasi keamanan PIN
        if pin_input != self.__pin:
            print("Gagal: PIN Transaksi yang Anda masukkan salah!")
            return False

        if nominal <= 0:
            print("Gagal: Nominal penarikan harus lebih dari Rp 0!")
            return False

        if nominal > self.__saldo:
            print(f"Gagal: Saldo tidak mencukupi! (Saldo: Rp {self.__saldo:,.2f}, Tarik: Rp {nominal:,.2f})")
            return False

        self.__saldo -= nominal
        self._riwayat_transaksi.append(f"Tarik Tunai: -Rp {nominal:,.2f}")
        print(f"Tarik tunai Rp {nominal:,.2f} berhasil. Sisa saldo: Rp {self.__saldo:,.2f}")
        return True

    def cetak_mutasi(self):
        print(f"\n=== MUTASI REKENING {self.nomor_rekening} ({self._pemilik}) ===")
        for log in self._riwayat_transaksi:
            print(f" - {log}")
        print(f"Saldo Akhir Terverifikasi: Rp {self.__saldo:,.2f}\n")


# --- PROGRAM UTAMA ---
if __name__ == "__main__":
    rek = RekeningBank("121-009-8871", "Ahmad Fadhilah", 500000, "123456")

    # 1. Mengakses atribut public dan property getter
    print("Nomor Rekening (Public) :", rek.nomor_rekening)
    print("Pemilik Rekening (Prot) :", rek._pemilik)
    print("Saldo Rekening (@prop)  : Rp", rek.saldo)

    # 2. Menguji transaksi bisnis
    rek.setor(250000)
    rek.tarik(100000, "999999")  # PIN salah
    rek.tarik(100000, "123456")  # PIN benar
    rek.tarik(1000000, "123456") # Saldo kurang

    # 3. Menguji setter validation
    try:
        rek.saldo = -50000  # Memancing ValueError
    except ValueError as err:
        print(f"\nValidasi Tertangkap: {err}")

    # 4. Membuktikan perlindungan atribut Private (Name Mangling)
    print("\n--- Uji Proteksi Private Attribute ---")
    try:
        # Akses langsung akan gagal
        print(rek.__saldo)
    except AttributeError:
        print("Akses langsung rek.__saldo GAGAL karena terlindungi (AttributeError)!")

    # Pembuktian Name Mangling Python di balik layar:
    print("Nilai via Name Mangling (rek._RekeningBank__saldo): Rp", rek._RekeningBank__saldo)

    rek.cetak_mutasi()`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 13-15:</strong> Variabel <code>__saldo</code> dan <code>__pin</code> diberi prefiks dua garis bawah (<em>double underscore</em>). Python secara internal mengubah namanya menjadi <code>_RekeningBank__saldo</code>.</li>
                <li><strong>Baris 21-25 (@property saldo):</strong> Berfungsi sebagai <em>getter</em>. Mahasiswa dapat memanggil <code>rek.saldo</code> tanpa tanda kurung seolah-olah membaca atribut biasa.</li>
                <li><strong>Baris 30-38 (@saldo.setter):</strong> Berfungsi sebagai <em>setter</em>. Setiap kali ada perintah pengisian nilai seperti <code>rek.saldo = 500000</code>, fungsi ini memvalidasi tipe data dan memastikan saldo tidak boleh bernilai negatif.</li>
                <li><strong>Baris 48-67:</strong> Method <code>tarik()</code> mewajibkan verifikasi PIN dan memastikan nominal tidak melebihi sisa saldo sebelum operasi pengurangan terjadi.</li>
                <li><strong>Baris 102-108:</strong> Membuktikan bahwa pemanggilan <code>rek.__saldo</code> memicu <code>AttributeError</code>, namun data tetap ada di memori melalui name mangling <code>rek._RekeningBank__saldo</code>.</li>
              </ul>
            </div>
          )}

          {codeOutput(
            <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`Nomor Rekening (Public) : 121-009-8871
Pemilik Rekening (Prot) : Ahmad Fadhilah
Saldo Rekening (@prop)  : Rp 500000.0
Setor tunai Rp 250,000.00 sukses. Saldo saat ini: Rp 750,000.00
Gagal: PIN Transaksi yang Anda masukkan salah!
Tarik tunai Rp 100,000.00 berhasil. Sisa saldo: Rp 650,000.00
Gagal: Saldo tidak mencukupi! (Saldo: Rp 650,000.00, Tarik: Rp 1,000,000.00)

Validasi Tertangkap: Saldo rekening tidak boleh bernilai negatif!

--- Uji Proteksi Private Attribute ---
Akses langsung rek.__saldo GAGAL karena terlindungi (AttributeError)!
Nilai via Name Mangling (rek._RekeningBank__saldo): Rp 650000.0

=== MUTASI REKENING 121-009-8871 (Ahmad Fadhilah) ===
 - Setor Tunai: +Rp 250,000.00
 - Tarik Tunai: -Rp 100,000.00
Saldo Akhir Terverifikasi: Rp 650,000.00`}
            </pre>
          )}

          {calloutExercise(
            "Enkapsulasi Penggajian Karyawan",
            "Buat file latihan_karyawan.py. Buat class Karyawan dengan atribut publik nama, jabatan, serta atribut private __gaji_pokok. Gunakan decorator @property dan setter untuk memastikan gaji pokok tidak boleh diatur di bawah Upah Minimum Regional (misal minimal Rp 3.200.000). Tambahkan method hitung_gaji_bersih(pajak_persen)!"
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. POLYMORPHISM & OVERRIDING                                              */}
      {/* ========================================================================= */}
      {(!subId || subId === "polymorphism") && (
        <section id="polymorphism">
          <h2>5. Polymorphism &amp; Overriding</h2>
          <p>
            Kata <strong>Polymorphism</strong> berasal dari bahasa Yunani yang berarti <em>&quot;mempunyai banyak bentuk&quot;</em>. Dalam pemrograman, polimorfisme adalah kemampuan objek-objek dari berbagai class yang berbeda untuk merespons pemanggilan antarmuka/metode yang sama dengan cara spesifik mereka masing-masing.
          </p>

          <h3>Bentuk-Bentuk Polimorfisme di Python</h3>
          <ul>
            <li><strong>Polymorphism via Method Overriding</strong>: Subclass mengimplementasikan kembali metode milik superclass dengan perilaku yang berbeda.</li>
            <li><strong>Duck Typing (Dynamic Typing)</strong>: Filosofi khas Python yang dipopulerkan oleh ungkapan <em>&quot;If it walks like a duck and quacks like a duck, it&#39;s a duck&quot;</em>. Python tidak peduli apakah objek diturunkan dari class tertentu atau tidak; selama objek memiliki method <code>bayar()</code>, Python akan memanggilnya tanpa komplain.</li>
            <li><strong>Polymorphism dalam Collection</strong>: Menyimpan berbagai objek berbeda ke dalam satu <code>list</code>, lalu mengiterasinya dengan loop sederhana tanpa percabangan <code>if-elif-else</code> manual.</li>
            <li><strong>Operator Overloading</strong>: Menentukan bagaimana operator standar Python seperti <code>+</code>, <code>==</code>, <code>&gt;</code> merespons objek buatan kita melalui dunder method <code>__add__</code>, <code>__eq__</code>, dan <code>__gt__</code>.</li>
          </ul>

          <h3>Hands-on 6: Gateway Pembayaran E-Commerce Multi-Metode (05_polymorphism.py)</h3>
          <p>
            Buat file baru bernama <code>05_polymorphism.py</code>, lalu tuliskan kode sistem checkout e-commerce berikut:
          </p>

          <CodeBlock language="python">{`# ==============================================================================
# Berkas: 05_polymorphism.py
# Deskripsi: Penerapan Polymorphism, Duck Typing, Dispatch Loop & Operator Overloading
# ==============================================================================

# ------------------------------------------------------------------------------
# 1. HIERARKI CLASS PEMBAYARAN (Polymorphism via Inheritance)
# ------------------------------------------------------------------------------
class MetodePembayaran:
    def __init__(self, nama_metode: str):
        self.nama_metode = nama_metode

    def bayar(self, tagihan: float) -> bool:
        """Metode dasar yang akan dioverride oleh seluruh subclass"""
        raise NotImplementedError("Subclass wajib mengimplementasikan method bayar()!")


class TransferBank(MetodePembayaran):
    def __init__(self, nama_bank: str, nomor_va: str):
        super().__init__(f"Transfer Bank {nama_bank}")
        self.nomor_va = nomor_va

    def bayar(self, tagihan: float) -> bool:
        biaya_admin = 4000
        total = tagihan + biaya_admin
        print(f"[{self.nama_metode}] Tagihan: Rp {tagihan:,.2f} + Admin: Rp {biaya_admin:,} = Total: Rp {total:,.2f}")
        print(f" -> Silakan transfer tepat ke Virtual Account: {self.nomor_va}")
        return True


class EWallet(MetodePembayaran):
    def __init__(self, nama_provider: str, nomor_hp: str, saldo_wallet: float):
        super().__init__(f"E-Wallet {nama_provider}")
        self.nomor_hp = nomor_hp
        self.saldo_wallet = saldo_wallet

    def bayar(self, tagihan: float) -> bool:
        cashback = tagihan * 0.05  # Promo cashback 5%
        if self.saldo_wallet >= tagihan:
            self.saldo_wallet -= tagihan
            print(f"[{self.nama_metode}] Pembayaran Rp {tagihan:,.2f} BERHASIL via akun {self.nomor_hp}.")
            print(f" -> Selamat! Anda mendapatkan cashback Rp {cashback:,.2f}. Sisa saldo: Rp {self.saldo_wallet:,.2f}")
            return True
        else:
            print(f"[{self.nama_metode}] Gagal: Saldo e-wallet tidak cukup! (Saldo: Rp {self.saldo_wallet:,.2f})")
            return False


# ------------------------------------------------------------------------------
# 2. DUCK TYPING: Class Bebas Tanpa Inheritance dari MetodePembayaran
# Tetap valid secara polimorfik karena memiliki method bayar(tagihan)
# ------------------------------------------------------------------------------
class CryptoPayment:
    def __init__(self, wallet_address: str, crypto_symbol: str = "USDT"):
        self.wallet_address = wallet_address
        self.crypto_symbol = crypto_symbol

    def bayar(self, tagihan: float) -> bool:
        # Konversi kurs asumsi 1 USDT = Rp 16.000
        total_crypto = tagihan / 16000
        print(f"[Crypto Gateway] Mengonversi Rp {tagihan:,.2f} -> {total_crypto:.2f} {self.crypto_symbol}")
        print(f" -> Transaksi tercatat di blockchain untuk wallet {self.wallet_address[:10]}... Success!")
        return True


# ------------------------------------------------------------------------------
# 3. FUNGSI POLIMORFIK (Menerima Koleksi Objek Heterogen)
# ------------------------------------------------------------------------------
def proses_checkout_pesanan(daftar_opsi_bayar: list, total_belanja: float):
    print(f"\n================ PROSES CHECKOUT TAGIHAN Rp {total_belanja:,.2f} ================")
    for opsi in daftar_opsi_bayar:
        print(f"\nMemproses opsi: {getattr(opsi, 'nama_metode', type(opsi).__name__)}...")
        opsi.bayar(total_belanja)


# ------------------------------------------------------------------------------
# 4. OPERATOR OVERLOADING: Class Nilai Uang
# ------------------------------------------------------------------------------
class Dompet:
    def __init__(self, pemilik: str, saldo: float):
        self.pemilik = pemilik
        self.saldo = saldo

    # Operator Overloading '+': Menggabungkan dua objek Dompet
    def __add__(self, other):
        if isinstance(other, Dompet):
            return Dompet(f"{self.pemilik} & {other.pemilik}", self.saldo + other.saldo)
        elif isinstance(other, (int, float)):
            return Dompet(self.pemilik, self.saldo + other)
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Dompet):
            return self.saldo == other.saldo
        return False

    def __str__(self):
        return f"Dompet({self.pemilik}): Rp {self.saldo:,.2f}"


# --- PROGRAM UTAMA ---
if __name__ == "__main__":
    # Inisialisasi berbagai objek metode pembayaran
    va_bca = TransferBank("BCA", "880121140001")
    gopay = EWallet("GoPay", "081234567890", saldo_wallet=500000)
    crypto = CryptoPayment("0x71C...b89A", "USDT")

    # Seluruh objek dimasukkan ke satu list heterogen
    channel_pembayaran = [va_bca, gopay, crypto]

    # Eksekusi fungsi polymorphic seragam
    proses_checkout_pesanan(channel_pembayaran, 320000)

    # Uji Operator Overloading
    print("\n--- Uji Operator Overloading Dompet ---")
    d1 = Dompet("Andi", 150000)
    d2 = Dompet("Budi", 250000)
    d_gabungan = d1 + d2  # Memanggil __add__
    print("Dompet 1 :", d1)
    print("Dompet 2 :", d2)
    print("Hasil d1 + d2 :", d_gabungan)
    print("Apakah saldo d1 == d2? :", d1 == d2)`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 8-15:</strong> <code>MetodePembayaran</code> menetapkan antarmuka umum melalui method <code>bayar()</code>. Jika dipanggil tanpa implementasi, method melempar <code>NotImplementedError</code>.</li>
                <li><strong>Baris 18-44:</strong> Subclass <code>TransferBank</code> dan <code>EWallet</code> memberikan implementasi unik masing-masing (biaya admin vs cashback).</li>
                <li><strong>Baris 50-60 (Duck Typing):</strong> <code>CryptoPayment</code> sama sekali tidak mewarisi <code>MetodePembayaran</code>. Namun karena ia memiliki fungsi <code>bayar(self, tagihan)</code> dengan nama dan tanda tangan yang cocok, sistem tetap dapat menjalankannya dengan mulus.</li>
                <li><strong>Baris 66-70:</strong> Fungsi <code>proses_checkout_pesanan</code> tidak memerlukan rantai <code>if-elif-else</code> untuk memeriksa apakah objek bertipe bank, e-wallet, atau crypto. Cukup panggil <code>opsi.bayar(total_belanja)</code>.</li>
                <li><strong>Baris 76-96 (Operator Overloading):</strong> Dunder method <code>__add__</code> memungkinkan operasi penjumlahan ekspresif antar dua objek <code>d1 + d2</code>.</li>
              </ul>
            </div>
          )}

          {codeOutput(
            <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`================ PROSES CHECKOUT TAGIHAN Rp 320,000.00 ================

Memproses opsi: Transfer Bank BCA...
[Transfer Bank BCA] Tagihan: Rp 320,000.00 + Admin: Rp 4,000 = Total: Rp 324,000.00
 -> Silakan transfer tepat ke Virtual Account: 880121140001

Memproses opsi: E-Wallet GoPay...
[E-Wallet GoPay] Pembayaran Rp 320,000.00 BERHASIL via akun 081234567890.
 -> Selamat! Anda mendapatkan cashback Rp 16,000.00. Sisa saldo: Rp 180,000.00

Memproses opsi: CryptoPayment...
[Crypto Gateway] Mengonversi Rp 320,000.00 -> 20.00 USDT
 -> Transaksi tercatat di blockchain untuk wallet 0x71C...b8... Success!

--- Uji Operator Overloading Dompet ---
Dompet 1 : Dompet(Andi): Rp 150,000.00
Dompet 2 : Dompet(Budi): Rp 250,000.00
Hasil d1 + d2 : Dompet(Andi & Budi): Rp 400,000.00
Apakah saldo d1 == d2? : False`}
            </pre>
          )}

          {calloutExercise(
            "Engine Dispatcher Multi-Saluran Notifikasi",
            "Buat file latihan_notifikasi.py. Buat 3 class berbeda: NotifikasiEmail, NotifikasiSMS, dan NotifikasiWhatsApp yang masing-masing memiliki method kirim(pesan, penerima). Terapkan fungsi broadcast_pengumuman(daftar_channel, pesan) untuk mengirim pesan siaran darurat ke seluruh kanal sekaligus!"
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. ABSTRACT CLASS & INTERFACE                                             */}
      {/* ========================================================================= */}
      {(!subId || subId === "abstract-class") && (
        <section id="abstract-class">
          <h2>6. Abstract Class &amp; Interface</h2>
          <p>
            Dalam pengembangan perangkat lunak berskala besar yang dikerjakan oleh tim, kita sering kali membutuhkan sebuah <strong>kontrak desain arsitektur</strong> yang kaku. Kontrak ini menjamin bahwa seluruh komponen turunan wajib mengimplementasikan fungsi-fungsi tertentu dengan nama dan spesifikasi yang seragam.
          </p>
          <p>
            Di Python, kontrak ini diwujudkan melalui <strong>Abstract Base Class (ABC)</strong> yang disediakan oleh modul bawaan <code>abc</code>.
          </p>

          <h3>Karakteristik Utama Abstract Class di Python</h3>
          <ul>
            <li><strong>Tidak Dapat Diinstansiasi Langsung</strong>: Jika Anda mencoba membuat objek langsung dari class abstract yang memiliki method abstract, Python akan melempar <code>TypeError: Can&#39;t instantiate abstract class with abstract method...</code>.</li>
            <li><strong>Dekorator <code>@abstractmethod</code></strong>: Menandai metode yang <strong>wajib</strong> dioverride oleh semua subclass konkrit. Jika ada subclass yang lupa mengimplementasikannya, subclass tersebut juga akan otomatis dianggap abstract dan tidak dapat digunakan.</li>
            <li><strong>Boleh Memiliki Concrete Method</strong>: Berbeda dengan pure interface di beberapa bahasa lain, Abstract Class di Python dapat menyediakan metode reguler dengan logika bawaan yang siap dibagikan ke seluruh subclass.</li>
            <li><strong>Abstract Property</strong>: Menggabungkan <code>@property</code> dan <code>@abstractmethod</code> untuk mewajibkan subclass menyediakan getter properti tertentu.</li>
            <li><strong>Interface Pattern di Python</strong>: Sebuah class murni abstract di mana 100% metodenya adalah <code>@abstractmethod</code> tanpa body implementasi (hanya <code>pass</code>).</li>
          </ul>

          <h3>Hands-on 7: Arsitektur Konektor Database &amp; Shape Geometri (06_abstract_class.py)</h3>
          <p>
            Buat file baru <code>06_abstract_class.py</code>, lalu salin dan jalankan kode berikut:
          </p>

          <CodeBlock language="python">{`# ==============================================================================
# Berkas: 06_abstract_class.py
# Deskripsi: Penerapan modul abc, ABC, @abstractmethod, Interface & Enforcement
# ==============================================================================

from abc import ABC, abstractmethod
import math

# ------------------------------------------------------------------------------
# 1. ABSTRACT BASE CLASS: SHAPE GEOMETRI
# ------------------------------------------------------------------------------
class Shape(ABC):
    def __init__(self, nama: str):
        self.nama = nama

    # ABSTRACT METHOD 1: Wajib diimplementasikan subclass
    @abstractmethod
    def luas(self) -> float:
        """Menghitung luas area bangun datar"""
        pass

    # ABSTRACT METHOD 2: Wajib diimplementasikan subclass
    @abstractmethod
    def keliling(self) -> float:
        """Menghitung keliling bangun datar"""
        pass

    # CONCRETE METHOD: Berbagi logika umum ke seluruh subclass
    def cetak_laporan(self):
        print(f"[{self.nama}] Luas: {self.luas():.2f} unit persegi | Keliling: {self.keliling():.2f} unit")


class PersegiPanjang(Shape):
    def __init__(self, panjang: float, lebar: float):
        super().__init__("Persegi Panjang")
        self.panjang = panjang
        self.lebar = lebar

    # Mengimplementasikan seluruh abstract method
    def luas(self) -> float:
        return self.panjang * self.lebar

    def keliling(self) -> float:
        return 2 * (self.panjang + self.lebar)


class Lingkaran(Shape):
    def __init__(self, radius: float):
        super().__init__("Lingkaran")
        self.radius = radius

    def luas(self) -> float:
        return math.pi * (self.radius ** 2)

    def keliling(self) -> float:
        return 2 * math.pi * self.radius


# ------------------------------------------------------------------------------
# 2. INTERFACE PATTERN: KONEKTOR DATABASE UNTUK WEB BACKEND
# ------------------------------------------------------------------------------
class DatabaseConnector(ABC):
    @property
    @abstractmethod
    def driver_name(self) -> str:
        """Abstract property: nama mesin database"""
        pass

    @abstractmethod
    def connect(self, host: str, port: int, database: str) -> bool:
        pass

    @abstractmethod
    def execute_query(self, sql: str) -> list:
        pass

    @abstractmethod
    def disconnect(self):
        pass


class PostgreSQLConnector(DatabaseConnector):
    @property
    def driver_name(self) -> str:
        return "PostgreSQL (psycopg2)"

    def connect(self, host: str, port: int, database: str) -> bool:
        print(f"[{self.driver_name}] Terhubung ke postgresql://{host}:{port}/{database} [OK]")
        return True

    def execute_query(self, sql: str) -> list:
        print(f"[{self.driver_name}] Menjalankan SQL: '{sql}'")
        return [{"id": 1, "nama": "Ahmad"}, {"id": 2, "nama": "Nabila"}]

    def disconnect(self):
        print(f"[{self.driver_name}] Koneksi database ditutup dengan aman.")


# --- PROGRAM UTAMA ---
if __name__ == "__main__":
    print("--- 1. Uji Coba Kepatuhan Implementasi Shape ---")
    pp = PersegiPanjang(10, 5)
    ling = Lingkaran(7)

    pp.cetak_laporan()
    ling.cetak_laporan()

    print("\n--- 2. Pembuktian Enforcement Abstract Class ---")
    try:
        # Coba instansiasi langsung dari abstract class Shape
        bentuk_gaib = Shape("Bentuk Abstrak")
    except TypeError as err:
        print(f"Penolakan Python Terbukti: {err}")

    # Kelas yang 'lupa' mengimplementasikan salah satu abstract method
    class SegitigaCacat(Shape):
        def __init__(self, alas, tinggi):
            super().__init__("Segitiga Cacat")
            self.alas = alas
            self.tinggi = tinggi
        
        def luas(self):
            return 0.5 * self.alas * self.tinggi
        # Lupa mengimplementasikan keliling()!

    try:
        s = SegitigaCacat(6, 8)
    except TypeError as err:
        print(f"Penolakan Subclass Cacat: {err}")

    print("\n--- 3. Uji Coba Interface Database Backend ---")
    db = PostgreSQLConnector()
    db.connect("localhost", 5432, "paw_praktikum_db")
    hasil = db.execute_query("SELECT id, nama FROM mahasiswa;")
    print("Hasil Query Data:", hasil)
    db.disconnect()`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Penjelasan Logika Kode (Per Baris):</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><strong>Baris 6:</strong> Mengimpor class <code>ABC</code> (Abstract Base Class) dan dekorator <code>@abstractmethod</code> dari modul standar <code>abc</code>.</li>
                <li><strong>Baris 11-26 (Class Shape):</strong> Mewarisi <code>ABC</code>. Method <code>luas()</code> dan <code>keliling()</code> didekorasi dengan <code>@abstractmethod</code> sehingga tidak boleh memiliki instansiasi nyata tanpa dioverride. Method <code>cetak_laporan()</code> adalah concrete method yang memanggil fungsi abstract tersebut secara polimorfik.</li>
                <li><strong>Baris 29-53:</strong> <code>PersegiPanjang</code> dan <code>Lingkaran</code> mengoverride kedua method abstract dengan rumus matematika masing-masing.</li>
                <li><strong>Baris 58-74 (DatabaseConnector):</strong> Pola interface murni untuk backend database, lengkap dengan <em>abstract property</em> <code>driver_name</code>.</li>
                <li><strong>Baris 97-120:</strong> Membuktikan bahwa instansiasi langsung <code>Shape()</code> atau instansiasi subclass yang tidak lengkap seperti <code>SegitigaCacat</code> (lupa override <code>keliling</code>) secara tegas digagalkan oleh Python runtime dengan melempar <code>TypeError</code>.</li>
              </ul>
            </div>
          )}

          {codeOutput(
            <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`--- 1. Uji Coba Kepatuhan Implementasi Shape ---
[Persegi Panjang] Luas: 50.00 unit persegi | Keliling: 30.00 unit
[Lingkaran] Luas: 153.94 unit persegi | Keliling: 43.98 unit

--- 2. Pembuktian Enforcement Abstract Class ---
Penolakan Python Terbukti: Can't instantiate abstract class Shape with abstract methods keliling, luas
Penolakan Subclass Cacat: Can't instantiate abstract class SegitigaCacat with abstract method keliling

--- 3. Uji Coba Interface Database Backend ---
[PostgreSQL (psycopg2)] Terhubung ke postgresql://localhost:5432/paw_praktikum_db [OK]
[PostgreSQL (psycopg2)] Menjalankan SQL: 'SELECT id, nama FROM mahasiswa;'
Hasil Query Data: [{'id': 1, 'nama': 'Ahmad'}, {'id': 2, 'nama': 'Nabila'}]
[PostgreSQL (psycopg2)] Koneksi database ditutup dengan aman.`}
            </pre>
          )}

          {calloutExercise(
            "Interface File Storage Service",
            "Buat file latihan_storage.py. Buat abstract class FileStorage(ABC) dengan abstract method upload_file(nama_file, data_bytes) dan download_file(nama_file). Implementasikan dua class konkrit: LocalDiskStorage (simulasi simpan di folder lokal) dan CloudStorage (simulasi simpan ke server cloud)!"
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 7. TUGAS PRAKTIKUM                                                        */}
      {/* ========================================================================= */}
      {(!subId || subId === "tugas-praktikum") && (
        <section id="tugas-praktikum">
          <h2>Tugas: Sistem Perpustakaan</h2>
          <p>
            Pada tugas praktikum Pertemuan 5 ini, Anda diminta untuk merancang dan mengimplementasikan sebuah sistem nyata terpadu: <strong>Sistem Manajemen Perpustakaan Terpadu Berbasis OOP (Library Management System)</strong>.
          </p>
          <p>
            Tugas ini menguji pemahaman komprehensif Anda dalam menyatukan seluruh pilar OOP: <strong>Abstract Class &amp; Interface</strong>, <strong>Inheritance</strong>, <strong>Encapsulation (Access Modifiers &amp; Property)</strong>, serta <strong>Polymorphism (Overriding &amp; Loop Koleksi)</strong>.
          </p>

          <h3>Spesifikasi Arsitektur Class yang Wajib Dibuat</h3>
          <ol style={{ lineHeight: 1.8 }}>
            <li>
              <strong>Abstract Class <code>LibraryItem(ABC)</code> (Berkas: <code>library_item.py</code>)</strong>:
              <ul>
                <li>Atribut: <code>item_id</code> (str), <code>judul</code> (str), <code>tahun_terbit</code> (int), protected <code>_kategori</code> (str), dan private <code>__is_dipinjam</code> (bool, default <code>False</code>).</li>
                <li>Constructor <code>__init__(self, item_id, judul, tahun_terbit, kategori)</code>.</li>
                <li>Property Decorator: <code>@property def is_dipinjam(self) -&gt; bool</code> (getter) dan method <code>pinjam()</code> serta <code>kembalikan()</code> untuk mengubah status peminjaman secara aman.</li>
                <li>Abstract Method 1: <code>@abstractmethod def hitung_denda(self, hari_terlambat: int) -&gt; float</code></li>
                <li>Abstract Method 2: <code>@abstractmethod def get_detail(self) -&gt; str</code></li>
              </ul>
            </li>
            <li>
              <strong>Subclass <code>Book</code> (Mewarisi <code>LibraryItem</code>)</strong>:
              <ul>
                <li>Atribut tambahan: <code>penulis</code> (str), <code>jumlah_halaman</code> (int), <code>genre</code> (str).</li>
                <li>Implementasi <code>hitung_denda</code>: Tarif denda buku adalah <strong>Rp 2.000,- per hari</strong> keterlambatan.</li>
                <li>Override <code>get_detail()</code> dan dunder method <code>__str__()</code> untuk menampilkan informasi buku secara lengkap.</li>
              </ul>
            </li>
            <li>
              <strong>Subclass <code>Magazine</code> (Mewarisi <code>LibraryItem</code>)</strong>:
              <ul>
                <li>Atribut tambahan: <code>edisi</code> (int), <code>bulan_terbit</code> (str).</li>
                <li>Implementasi <code>hitung_denda</code>: Tarif denda majalah adalah <strong>Rp 1.000,- per hari</strong> keterlambatan.</li>
                <li>Override <code>get_detail()</code> dan dunder method <code>__str__()</code>.</li>
              </ul>
            </li>
            <li>
              <strong>Class <code>Member</code> (Anggota Perpustakaan)</strong>:
              <ul>
                <li>Atribut: <code>member_id</code> (str), <code>nama</code> (str), private <code>__daftar_pinjaman</code> (list item yang sedang dipinjam).</li>
                <li>Method <code>pinjam_item(item: LibraryItem)</code>: Menambahkan item ke daftar pinjaman dan menandai status item menjadi dipinjam.</li>
                <li>Method <code>kembalikan_item(item: LibraryItem, hari_terlambat: int = 0)</code>: Menghapus item dari daftar pinjaman, mengembalikan status item, dan mencetak denda jika ada keterlambatan.</li>
                <li>Method <code>tampilkan_pinjaman()</code>: Menampilkan daftar seluruh buku/majalah yang sedang dipinjam anggota.</li>
              </ul>
            </li>
            <li>
              <strong>Class <code>Library</code> (Pusat Pengelolaan Perpustakaan)</strong>:
              <ul>
                <li>Atribut: <code>nama_perpustakaan</code> (str), private <code>__koleksi_item</code> (list), dan private <code>__daftar_member</code> (list).</li>
                <li>Method <code>tambah_item(item: LibraryItem)</code>: Menambahkan buku atau majalah ke katalog perpustakaan.</li>
                <li>Method <code>registrasi_member(member: Member)</code>: Mendaftarkan anggota baru.</li>
                <li>Method <code>cari_item(keyword: str) -&gt; list</code>: Mencari item berdasarkan kecocokan judul atau ID item.</li>
                <li>Method <code>tampilkan_katalog(hanya_tersedia: bool = False)</code>: Menampilkan daftar seluruh koleksi atau hanya item yang siap dipinjam.</li>
              </ul>
            </li>
            <li>
              <strong>Berkas Driver Pengujian (<code>main.py</code>)</strong>:
              <ul>
                <li>Mengimpor seluruh class yang telah dibuat.</li>
                <li>Membuat minimal 2 objek <code>Book</code> dan 2 objek <code>Magazine</code>.</li>
                <li>Membuat minimal 2 objek <code>Member</code>.</li>
                <li>Mendemonstrasikan skenario operasional: registrasi, peminjaman sukses, percobaan meminjam item yang sudah dipinjam, pencarian item, pengembalian tepat waktu, dan pengembalian terlambat (pembuktian kalkulasi denda polimorfik).</li>
              </ul>
            </li>
          </ol>

          <h3>Rubrik &amp; Kriteria Penilaian Tugas (Total 100%)</h3>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem 1rem" }}>Komponen Penilaian</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "right" }}>Bobot</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                    <strong>1. Penerapan Abstract Class &amp; Pewarisan (Inheritance)</strong>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                      Pembuatan <code>LibraryItem(ABC)</code> dengan <code>@abstractmethod</code>, subclass <code>Book</code> dan <code>Magazine</code> yang mewarisi parent menggunakan <code>super().__init__()</code> secara benar.
                    </div>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>30%</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                    <strong>2. Implementasi Encapsulation &amp; Properties</strong>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                      Penerapan access modifier (private <code>__is_dipinjam</code>, <code>__daftar_pinjaman</code>, <code>__koleksi_item</code>), proteksi state, dan dekorator <code>@property</code>.
                    </div>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>25%</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                    <strong>3. Penerapan Polymorphism &amp; Method Overriding</strong>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                      Override method <code>hitung_denda()</code>, <code>get_detail()</code>, serta pemrosesan koleksi heterogen item dalam katalog perpustakaan tanpa percabangan tipe manual.
                    </div>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>20%</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                    <strong>4. Fungsionalitas &amp; Logika Bisnis Perpustakaan</strong>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                      Seluruh alur peminjaman, pengembalian, pencarian, dan penanganan kondisi error berjalan tanpa crash saat dieksekusi di <code>main.py</code>.
                    </div>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>15%</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                    <strong>5. Standar Kode PEP 8 &amp; Dokumentasi README.md</strong>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                      Docstrings pada setiap class dan method, penamaan <em>snake_case</em> konsisten, serta kelengkapan file <code>README.md</code> beserta diagram kelas dan bukti tangkapan layar.
                    </div>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>10%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Kelengkapan Berkas README.md:</h3>
          <ul>
            <li><strong>Identitas Mahasiswa</strong>: Nama Lengkap, NIM, Kelas Praktikum, dan Dosen Pengampu / Asisten Praktikum.</li>
            <li><strong>Deskripsi Arsitektur OOP</strong>: Penjelasan singkat fungsi masing-masing class dan bagaimana 4 pilar OOP diimplementasikan.</li>
            <li><strong>Diagram Kelas (Class Diagram)</strong>: Bagan relasi inheritance dan komposisi class (dapat berupa teks ASCII, mermaid diagram, atau gambar sketsa).</li>
            <li><strong>Petunjuk Eksekusi</strong>: Langkah menjalankan program dari terminal (contoh: <code>python main.py</code>).</li>
            <li><strong>Screenshot Output</strong>: Bukti tangkapan layar terminal saat program <code>main.py</code> berhasil dijalankan secara lengkap.</li>
          </ul>

          <div style={{ marginTop: "2rem" }}>
            <SubmissionBox pertemuan={5} />
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 8. FORMAT PENGUMPULAN                                                     */}
      {/* ========================================================================= */}
      {(!subId || subId === "format-pengumpulan") && (
        <section id="format-pengumpulan">
          <h2>Format Pengumpulan</h2>
          <p>Ketentuan pengumpulan tugas dan laporan praktikum:</p>
          <ul>
            <li>
              <strong>Format Repositori GitHub</strong>: Gunakan repositori yang sudah dibuat sebelumnya dengan nama:
              <br />
              <code>pemrograman_web_itera_[NIM]</code> (Contoh: <code>pemrograman_web_itera_121140001</code>).
            </li>
            <li>
              <strong>Format Folder Pertemuan</strong>: Buat folder khusus di dalam repositori dengan struktur nama:
              <br />
              <code>[NAMA]_[NIM]_pertemuan5</code> (Contoh: <code>ahmadfadhil_121140001_pertemuan5</code>).
            </li>
            <li>
              <strong>Struktur Berkas yang Diharapkan:</strong>
              <CodeBlock language="bash">{`ahmadfadhil_121140001_pertemuan5/
├── latihan/
│   ├── 01_everything_is_object.py
│   ├── 01_procedural_vs_oop.py
│   ├── 02_class_object.py
│   ├── 03_inheritance.py
│   ├── 04_encapsulation.py
│   ├── 05_polymorphism.py
│   └── 06_abstract_class.py
├── tugas_perpustakaan/
│   ├── library_item.py
│   ├── member.py
│   ├── library.py
│   └── main.py
├── README.md
└── .gitignore`}</CodeBlock>
            </li>
            <li>Pastikan direktori cache Python (<code>__pycache__/</code>) dan virtual environment (<code>venv/</code>) <strong>tidak diunggah</strong> ke Git (tambahkan ke dalam berkas <code>.gitignore</code>).</li>
          </ul>

          <SubmissionBox pertemuan={5} />
        </section>
      )}
    </>
  );
}
