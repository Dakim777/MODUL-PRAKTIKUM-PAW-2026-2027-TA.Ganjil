import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 4: Python Dasar
const Info = ({ text }: { text: string }) => (
  <div className="callout callout-info">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" /><path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
    <div className="callout-body"><p>{text}</p></div>
  </div>
);
const Exercise = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="callout callout-warning">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
      <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
    <div className="callout-body"><p><strong>Latihan Mandiri: {title}</strong><br />{children}</p></div>
  </div>
);

export default function Pertemuan4() {
  return (
    <>
      <h2 id="dasar-teori">Dasar Teori Python</h2>
      <p>Python adalah bahasa pemrograman interpretatif multiguna dengan filosofi perancangan yang berfokus pada tingkat keterbacaan kode. Diciptakan oleh Guido van Rossum, pertama kali dirilis 1991. Python menggunakan <strong>indentasi</strong> untuk mendefinisikan blok kode, bukan kurung kurawal.</p>
      <div style={{ overflowX: "auto", marginBottom: "1.25rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead><tr style={{ background: "var(--color-surface)", borderBottom: "2px solid var(--color-border)" }}><th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600 }}>Karakteristik</th><th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600 }}>Deskripsi</th></tr></thead>
          <tbody>
            {[["Interpreted","Kode dieksekusi langsung tanpa perlu dikompilasi"],["Dinamis","Tipe data ditentukan saat runtime"],["Berorientasi Objek","Mendukung class dan inheritance"],["Indentasi","Menggunakan indentasi untuk blok kode"],["Multi-paradigma","Mendukung beberapa paradigma pemrograman"]].map(([k,v],i)=>(
              <tr key={i} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "0.5rem 1rem", fontWeight: 500, color: "var(--color-navy-800)" }}>{k}</td>
                <td style={{ padding: "0.5rem 1rem", color: "var(--color-text-secondary)" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="prasyarat-alat">Prasyarat & Lingkungan Kerja</h2>
      <ul>
        <li>Python 3.8 atau versi lebih baru (cek dengan <code>python --version</code>)</li>
        <li>Code Editor: VSCode, PyCharm, Sublime Text, atau IDLE</li>
        <li>Terminal/Command Prompt</li>
      </ul>

      <h2 id="panduan-praktik">Langkah Praktikum</h2>

      <h3 id="eksekusi-python">1. Pengenalan & Eksekusi Python</h3>
      <CodeBlock language="python">{`# hello.py
print("Hello, World!")
print("Selamat datang di praktikum Python")
print("Saya sedang belajar Python")`}</CodeBlock>
      <CodeBlock language="bash">{`python hello.py`}</CodeBlock>
      <Info text="Python adalah bahasa yang diinterpretasi dan tidak perlu dikompilasi sebelum dijalankan." />

      <h3 id="variabel-tipe">2. Variabel & Tipe Data</h3>
      <CodeBlock language="python">{`# variables.py
nama = "Budi Santoso"   # string
usia = 20               # integer
tinggi = 175.5          # float
is_mahasiswa = True     # boolean

print("Nama:", nama)
print("Usia:", usia, "tahun")
print("Tipe data nama:", type(nama))

# Konversi tipe data
usia_str = str(usia)
print("Usia (string):", usia_str)

# Input dari pengguna
nama_input = input("Masukkan nama Anda: ")
usia_input = int(input("Masukkan usia Anda: "))
print(f"Halo {nama_input}, usia Anda {usia_input} tahun")`}</CodeBlock>
      <Info text="Python tidak perlu deklarasi tipe data eksplisit (dynamic typing). input() selalu mengembalikan string; untuk tipe lain perlu konversi manual seperti int(input())." />
      <Exercise title="Konversi Suhu ke Reamur">Buat program yang meminta input suhu Celsius, konversi ke Reamur dengan rumus <code>Reamur = Celsius * 4/5</code>, tampilkan hasilnya. Expected: input <code>25</code> → output "Suhu dalam Reamur: 20.0".</Exercise>

      <h3 id="operator-ekspresi">3. Operator & Evaluasi Ekspresi</h3>
      <CodeBlock language="python">{`# operators.py
a, b = 10, 3

# Aritmatika
print(a + b, a - b, a * b, a / b)
print(a // b)   # Floor division: 3
print(a % b)    # Modulus: 1
print(a ** b)   # Pangkat: 1000

# Perbandingan
print(a == b, a != b, a > b, a < b)

# Logika
x, y = True, False
print(x and y, x or y, not x)

# Assignment compound
c = 5
c += 3; print(c)   # 8
c -= 1; print(c)   # 7
c *= 2; print(c)   # 14`}</CodeBlock>

      <h3 id="percabangan">4. Struktur Kendali: Percabangan</h3>
      <CodeBlock language="python">{`# conditionals.py
nilai = int(input("Masukkan nilai (0-100): "))

if nilai >= 90:   grade = "A"
elif nilai >= 80: grade = "B"
elif nilai >= 70: grade = "C"
elif nilai >= 60: grade = "D"
else:             grade = "E"

print(f"Nilai: {nilai}, Grade: {grade}")

# Ternary expression
status = "LULUS" if nilai >= 60 else "TIDAK LULUS"
print(f"Status: {status}")`}</CodeBlock>
      <Info text="Python menggunakan indentasi (biasanya 4 spasi) untuk mengelompokkan blok kode, bukan kurung kurawal." />
      <Exercise title="Kategori Usia">Buat program yang meminta input usia, lalu menampilkan kategori: "Anak-anak" (&lt;12), "Remaja" (12-17), "Dewasa" (18-59), "Lansia" (60+). Expected: input <code>20</code> → "Kategori: Dewasa".</Exercise>

      <h3 id="perulangan">5. Struktur Kendali: Perulangan</h3>
      <CodeBlock language="python">{`# loops.py
# For loop dengan range
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4

# Range dengan start, stop, step
for i in range(2, 10, 2):
    print(i, end=" ")  # 2 4 6 8

# For loop dengan list dan enumerate
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
for index, item in enumerate(buah):
    print(f"Index {index}: {item}")

# While loop
count = 0
while count < 5:
    print(count, end=" ")
    count += 1

# break dan continue
for i in range(10):
    if i % 2 == 0: continue   # Lewati bilangan genap
    if i == 7:     break      # Berhenti di 7
    print(i, end=" ")  # 1 3 5

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]`}</CodeBlock>
      <Info text="List comprehension adalah fitur Python yang powerful untuk membuat list secara singkat: [expression for item in iterable if condition]." />
      <Exercise title="Deret Fibonacci">Buat program dengan while loop yang mencetak <code>n</code> suku pertama deret Fibonacci (0, 1, 1, 2, 3, 5, 8, ...). Minta input <code>n</code> dari pengguna. Expected: input <code>n=8</code> → <code>0 1 1 2 3 5 8 13</code>.</Exercise>

      <h3 id="definisi-fungsi">6. Modularitas Fungsi & Parameter</h3>
      <CodeBlock language="python">{`# functions.py
def sapa_lengkap(nama, pesan="Selamat datang!"):
    print(f"Halo, {nama}! {pesan}")

sapa_lengkap("Citra")                          # Default param
sapa_lengkap("Dodi", "Semoga harimu menyenangkan!")

def operasi_aritmatika(a, b):
    return a + b, a - b, a * b, a / b   # Multiple return

tambah, kurang, kali, bagi = operasi_aritmatika(10, 2)
print(f"10 + 2 = {tambah}, 10 / 2 = {bagi}")

# Lambda function
kuadrat = lambda x: x**2
print(f"Kuadrat dari 5: {kuadrat(5)}")

# Fungsi sebagai argumen (higher-order function)
def apply_op(a, b, operation):
    return operation(a, b)

add = lambda x, y: x + y
print(f"5 + 3 = {apply_op(5, 3, add)}")`}</CodeBlock>
      <Exercise title="Cek Bilangan Prima">Buat fungsi <code>is_prime(n)</code> yang mengembalikan <code>True</code>/<code>False</code> apakah <code>n</code> bilangan prima. Hint: cek pembagi dari 2 sampai akar kuadrat n. Expected: <code>is_prime(7)</code> → <code>True</code>, <code>is_prime(10)</code> → <code>False</code>.</Exercise>

      <h3 id="struktur-data">7. Struktur Data: List & Dictionary</h3>
      <CodeBlock language="python">{`# data_structures.py
# LIST
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
print(buah[0])     # Apel (index pertama)
print(buah[-1])    # Pisang (index terakhir)
print(buah[0:2])   # ['Apel', 'Jeruk'] (slice)

buah.append("Anggur")       # Tambah di akhir
buah.insert(2, "Durian")    # Sisipkan di indeks 2
removed = buah.pop()        # Hapus & kembalikan elemen terakhir
buah.remove("Durian")       # Hapus berdasarkan nilai
buah.sort()                 # Urutkan

# DICTIONARY
mahasiswa = {
    "nama": "Budi Santoso",
    "nim": "20210001",
    "jurusan": "Teknik Informatika",
    "usia": 20
}
print(mahasiswa["nama"])
print(mahasiswa.get("ipk", "Data tidak tersedia"))  # Default value

mahasiswa["ipk"] = 3.75   # Tambah key baru
del mahasiswa["usia"]     # Hapus key

# Iterasi dictionary
for key, value in mahasiswa.items():
    print(f"{key}: {value}")`}</CodeBlock>
      <Exercise title="Cari Barang Termurah">Buat list berisi minimal 4 dictionary produk (<code>nama</code>, <code>harga</code>). Cari dan tampilkan produk termurah menggunakan <code>min()</code> dengan parameter <code>key</code>. Hint: <code>min(daftar_produk, key=lambda p: p["harga"])</code>.</Exercise>

      <h3 id="modul-python">8. Penggunaan Modul & Package</h3>
      <CodeBlock language="python">{`# my_module.py
pi = 3.14159

def hitung_luas_lingkaran(radius):
    return pi * radius * radius

def celsius_ke_fahrenheit(celsius):
    return (celsius * 9/5) + 32`}</CodeBlock>
      <CodeBlock language="python">{`# use_module.py
import my_module
from my_module import celsius_ke_fahrenheit
import my_module as mm

print(f"Nilai Pi: {my_module.pi}")
print(f"Luas lingkaran r=5: {my_module.hitung_luas_lingkaran(5):.2f}")
print(f"25°C = {celsius_ke_fahrenheit(25):.2f}°F")
print(f"Pi via alias: {mm.pi}")`}</CodeBlock>
      <CodeBlock language="python">{`# Modul bawaan Python
import math, random, datetime, os

print(f"Pi: {math.pi}")
print(f"Sqrt(16): {math.sqrt(16)}")
print(f"Random 1-10: {random.randint(1, 10)}")
print(f"Sekarang: {datetime.datetime.now()}")`}</CodeBlock>

      <h2 id="tugas-praktikum">Tugas Praktikum</h2>
      <ol>
        <li><strong>Program Penghitung BMI</strong> (30%). Rumus: <code>BMI = berat / (tinggi * tinggi)</code>. Kategori berdasarkan nilai BMI.</li>
        <li><strong>Program Pengelolaan Nilai Mahasiswa</strong> (40%). List minimal 5 dictionary, nilai akhir = 30% UTS + 40% UAS + 30% Tugas, tabel lengkap + mahasiswa nilai tertinggi &amp; terendah.</li>
        <li><strong>Modul Matematika Python</strong> (30%). File <code>math_operations.py</code> (luas/keliling minimal 3 bentuk geometri, konversi suhu minimal 2). File <code>main.py</code> yang mengimpor modul, gunakan semua fungsinya.</li>
      </ol>

      <h2 id="format-pengumpulan">Format Pengumpulan</h2>
      <ul>
        <li>Folder: <code>[NAMA]_[NIM]_pertemuan4</code></li>
        <li><strong>Deadline:</strong> Minggu, 27 April 2025, pukul 23:59 WIB. Keterlambatan: pengurangan 10% per hari.</li>
      </ul>

      <SubmissionBox pertemuan={4} />
    </>
  );
}
