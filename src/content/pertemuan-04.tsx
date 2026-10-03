import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 4: Python Dasar
export default function Pertemuan4() {
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
      <h2 id="dasar-teori">Python Dasar</h2>

<h3 id="pengenalan-python">Pengenalan Python</h3>
<p>Mengenal Python dan cara menjalankan program Python pertama</p>


<h3 id="apa-itu-python">Apa itu Python?</h3>
<p>Python adalah bahasa pemrograman interpretatif multiguna dengan filosofi perancangan yang berfokus pada tingkat keterbacaan kode. Python dikenal dengan sintaksisnya yang bersih dan mudah dibaca, yang membuatnya menjadi bahasa yang ideal untuk pemula maupun profesional.</p>

<p>Sejarah Python</p>

<p>Python diciptakan oleh Guido van Rossum dan pertama kali dirilis pada tahun 1991. Nama "Python" diambil dari acara komedi Inggris "Monty Python's Flying Circus", bukan dari ular python!</p>


<h3 id="implementasi-python">Implementasi Python</h3>
<p>Python menggunakan interpreter untuk mengeksekusi kode. Ada beberapa implementasi interpreter Python:</p>

<ul>
  <li>CPython: Implementasi standar, ditulis dalam C</li>
  <li>PyPy: Implementasi dengan JIT compiler, lebih cepat untuk beberapa aplikasi</li>
  <li>Jython: Implementasi yang berjalan di JVM (Java Virtual Machine)</li>
  <li>IronPython: Implementasi untuk .NET Framework</li>
</ul>


<h3 id="instalasi-python">Instalasi Python</h3>

<h3 id="cek-instalasi-python">Cek Instalasi Python</h3>
<p>Sebelum memulai, cek apakah Python sudah terinstall di sistem Kalian:</p>

<CodeBlock language="">{`python --version
# atau
python3 --version`}</CodeBlock>

<p>Jika Python sudah terinstall, Kalian akan melihat output seperti:</p>

<CodeBlock language="">{`Python 3.11.5`}</CodeBlock>


<h3 id="install-python-jika-belum-ada">Install Python (jika belum ada)</h3>
<p>Jika Python belum terinstall, download dari python.org:</p>

<ul>
  <li>Windows: Download installer .exe dan jalankan</li>
  <li>macOS: Gunakan installer .pkg atau brew install python3</li>
  <li>Linux: Biasanya sudah terinstall, atau gunakan package manager:
sudo apt-get install python3  # Ubuntu/Debian
sudo yum install python3      # CentOS/RHEL
</li>
</ul>

<CodeBlock language="">{`sudo apt-get install python3  # Ubuntu/Debian
sudo yum install python3      # CentOS/RHEL`}</CodeBlock>

<p>PATH Environment</p>

<p>Pastikan Python ditambahkan ke PATH environment variable saat instalasi. Ini memungkinkan Kalian menjalankan Python dari terminal di mana saja.</p>


<h3 id="program-python-pertama">Program Python Pertama</h3>
<p>Mari membuat program Python pertama Kalian!</p>


<h3 id="membuat-file-python">Membuat File Python</h3>
<p>Buat file baru dengan nama hello.py:</p>

<CodeBlock language="">{`# Program Python pertama
print("Hello, World!")
print("Selamat datang di praktikum Python")
print("Saya sedang belajar Python")`}</CodeBlock>

<p>Ekstensi File</p>

<p>File Python menggunakan ekstensi .py. Komentar di Python dimulai dengan tanda #.</p>


<h3 id="menjalankan-program">Menjalankan Program</h3>
<p>Untuk menjalankan program Python, buka terminal/command prompt, navigate ke direktori file, kemudian jalankan:</p>

<CodeBlock language="">{`python hello.py
# atau
python3 hello.py`}</CodeBlock>

<p>Output yang diharapkan:</p>

<CodeBlock language="">{`Hello, World!
Selamat datang di praktikum Python
Saya sedang belajar Python`}</CodeBlock>


<h3 id="python-interactive-mode">Python Interactive Mode</h3>
<p>Python juga bisa dijalankan dalam mode interaktif (REPL - Read-Eval-Print Loop):</p>

<CodeBlock language="">{`python
# atau
python3`}</CodeBlock>

<p>Kalian akan melihat prompt Python:</p>

<CodeBlock language="">{`Python 3.11.5
>>>`}</CodeBlock>

<p>Coba ketik beberapa perintah Python:</p>

<CodeBlock language="">{`>>> print("Hello from interactive mode!")
Hello from interactive mode!
>>> 2 + 2
4
>>> name = "Python"
>>> print(f"I love {name}")
I love Python
>>> exit()  # Untuk keluar`}</CodeBlock>

<p>Interactive Mode</p>

<p>Interactive mode sangat berguna untuk testing cepat, eksperimen, dan belajar Python. Setiap statement langsung di-eksekusi dan hasilnya ditampilkan.</p>


<h3 id="indentasi-di-python">Indentasi di Python</h3>
<p>Salah satu karakteristik unik Python adalah penggunaan indentasi untuk mendefinisikan blok kode:</p>

<CodeBlock language="">{`# Blok kode dengan indentasi
if True:
    print("Ini di dalam blok if")
    print("Masih di dalam blok if")
print("Ini di luar blok if")

# Nested blocks
for i in range(3):
    print(f"Loop ke-{i}")
    if i > 0:
        print("  Lebih dari 0")`}</CodeBlock>

<p>Indentasi Konsisten</p>

<p>Python sangat ketat dengan indentasi! Gunakan 4 spasi (bukan tab) untuk setiap level indentasi. Mixing spasi dan tab akan menyebabkan error.</p>

<CodeBlock language="">{`#  Salah - inconsistent indentation
if True:
  print("Pakai 2 spasi")
    print("Pakai 4 spasi")  # IndentationError!

#  Benar - consistent indentation
if True:
    print("Semua pakai 4 spasi")
    print("Konsisten!")`}</CodeBlock>


<h3 id="print-function">Print Function</h3>
<p>print() adalah fungsi paling dasar di Python untuk menampilkan output:</p>

<CodeBlock language="">{`# Print sederhana
print("Hello, World!")

# Print multiple items
print("Nama:", "Budi", "Usia:", 20)

# Print dengan separator custom
print("A", "B", "C", sep="-")  # Output: A-B-C

# Print tanpa newline di akhir
print("Hello", end=" ")
print("World")  # Output: Hello World

# Print dengan newline character
print("Baris 1\nBaris 2\nBaris 3")

# Print dengan tab
print("Nama:\tBudi")
print("Usia:\t20")`}</CodeBlock>


<h3 id="komentar-di-python">Komentar di Python</h3>
<p>Komentar sangat penting untuk dokumentasi kode:</p>

<CodeBlock language="">{`# Ini adalah single-line comment
# Komentar tidak dieksekusi oleh Python

# Kalian bisa pakai comment untuk explain kode
x = 5  # Assign nilai 5 ke variabel x

"""
Ini adalah multi-line comment
atau biasa disebut docstring.
Gunakan triple quotes (''' atau """)
untuk komentar lebih dari satu baris.
"""

'''
Kalian juga bisa pakai single quotes
untuk multi-line comment
'''

def my_function():
    """
    Ini adalah docstring untuk fungsi.
    Docstring menjelaskan apa yang dilakukan fungsi.
    """
    pass`}</CodeBlock>

<p>Docstring vs Comment</p>

<ul>
  <li>Comment (#): Untuk penjelasan internal kode</li>
  <li>Docstring ("""..."""): Untuk dokumentasi formal fungsi, class, atau module yang bisa diakses dengan help()</li>
</ul>


<h3 id="python-zen">Python Zen</h3>
<p>Python memiliki filosofi desain yang disebut "The Zen of Python". Kalian bisa melihatnya dengan:</p>

<CodeBlock language="">{`>>> import this`}</CodeBlock>

<p>Beberapa prinsip penting:</p>

<ul>
  <li>Beautiful is better than ugly</li>
  <li>Explicit is better than implicit</li>
  <li>Simple is better than complex</li>
  <li>Readability counts</li>
  <li>There should be one-- and preferably only one --obvious way to do it</li>
</ul>

<p>Python Philosophy</p>

<p>Python menekankan pada kode yang readable dan simple. Code should be written for humans first, machines second!</p>


<h3 id="setup-ideeditor">Setup IDE/Editor</h3>
<p>Untuk pengalaman coding yang lebih baik, setup IDE atau editor Kalian:</p>


<h3 id="visual-studio-code">Visual Studio Code</h3>
<ul>
  <li>Install VS Code dari code.visualstudio.com</li>
  <li>Install Python extension dari Microsoft</li>
  <li>Configure Python interpreter (Ctrl+Shift+P → "Python: Select Interpreter")</li>
</ul>


<h3 id="pycharm">PyCharm</h3>
<ul>
  <li>Download dari jetbrains.com/pycharm</li>
  <li>Versi Community gratis dan sudah cukup untuk belajar</li>
  <li>PyCharm memiliki banyak fitur built-in untuk Python</li>
</ul>

<p>Ekstensi VS Code yang Berguna</p>

<ul>
  <li>Python (Microsoft) - Essentials untuk Python development</li>
  <li>Pylance - Language server untuk IntelliSense yang lebih baik</li>
  <li>autoDocstring - Generate docstrings otomatis</li>
  <li>Python Indent - Bantu dengan indentasi</li>
</ul>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Install Python di komputer Kalian (jika belum)</li>
  <li>Buat program yang print nama, NIM, dan jurusan Kalian</li>
  <li>Coba Python interactive mode dan eksperimen dengan operasi matematika</li>
  <li>Buat program dengan multi-line output menggunakan \n</li>
  <li>Praktikkan indentasi dengan nested blocks</li>
</ul>

<p>Apa Selanjutnya?</p>

<p>Setelah memahami dasar Python dan cara menjalankannya, kita akan belajar tentang Variabel dan Tipe Data di bagian selanjutnya!</p>

<p>Praktikum Python Dasar</p>

<p>Mengenal dasar-dasar Python dan pemrograman fundamental untuk backend development</p>

<p>Variabel & Tipe Data</p>

<p>Memahami variabel, tipe data, operator, dan input/output dalam Python</p>


<h3 id="variabel-tipe-data">Variabel & Tipe Data</h3>
<p>Memahami variabel, tipe data, operator, dan input/output dalam Python</p>


<h3 id="variabel-di-python">Variabel di Python</h3>
<p>Variabel adalah container untuk menyimpan nilai data. Di Python, Kalian tidak perlu mendeklarasikan tipe variabel secara eksplisit.</p>

<CodeBlock language="">{`# Python adalah dynamically typed
nama = "Budi Santoso"    # string
usia = 20                # integer
tinggi = 175.5           # float
is_mahasiswa = True      # boolean

# Menampilkan nilai variabel
print("Nama:", nama)
print("Usia:", usia, "tahun")
print("Tinggi:", tinggi, "cm")
print("Status mahasiswa:", is_mahasiswa)`}</CodeBlock>

<p>Dynamic Typing</p>

<p>Python menentukan tipe data secara otomatis berdasarkan nilai yang diberikan. Variabel bisa berganti tipe data:</p>

<CodeBlock language="">{`x = 5          # x adalah integer
x = "Python"   # sekarang x adalah string
x = 3.14       # sekarang x adalah float`}</CodeBlock>


<h3 id="tipe-data-dasar">Tipe Data Dasar</h3>
<p>Python memiliki beberapa tipe data built-in:</p>

<CodeBlock language="">{`# Integer - bilangan bulat
angka_bulat = 100
negatif = -50
besar = 1_000_000  # Underscore untuk readability

# Float - bilangan desimal
desimal = 3.14
ilmiah = 2.5e-3  # 0.0025 dalam notasi ilmiah

# Complex - bilangan kompleks
kompleks = 3 + 4j`}</CodeBlock>

<CodeBlock language="">{`# String dengan single atau double quotes
nama = "Budi"
kota = 'Jakarta'

# Multi-line string
alamat = """
Jl. Pendidikan No. 1
Kota Jakarta
12345
"""

# String operations
pesan = "Hello" + " " + "World"  # Concatenation
ulang = "Ha" * 3  # "HaHaHa"
panjang = len("Python")  # 6`}</CodeBlock>

<CodeBlock language="">{`# Boolean values
benar = True
salah = False

# Boolean operations
hasil1 = True and False  # False
hasil2 = True or False   # True
hasil3 = not True        # False

# Comparison menghasilkan boolean
lebih_besar = 10 > 5     # True
sama_dengan = 5 == 5     # True`}</CodeBlock>

<CodeBlock language="">{`# None menandakan tidak ada nilai
data = None

if data is None:
    print("Data kosong")

# Sering digunakan sebagai default value
def fungsi(param=None):
    if param is None:
        param = "default"`}</CodeBlock>


<h3 id="memeriksa-tipe-data">Memeriksa Tipe Data</h3>
<CodeBlock language="">{`nama = "Budi"
usia = 20
tinggi = 175.5
aktif = True

print("Tipe data nama:", type(nama))          # <class 'str'>
print("Tipe data usia:", type(usia))          # <class 'int'>
print("Tipe data tinggi:", type(tinggi))      # <class 'float'>
print("Tipe data aktif:", type(aktif))        # <class 'bool'>`}</CodeBlock>


<h3 id="konversi-tipe-data-type-casting">Konversi Tipe Data (Type Casting)</h3>
<CodeBlock language="">{`# String ke Number
angka_str = "123"
angka_int = int(angka_str)      # 123
angka_float = float(angka_str)  # 123.0

# Number ke String
usia = 20
usia_str = str(usia)  # "20"

# Float ke Integer (menghilangkan desimal)
nilai = 85.7
nilai_bulat = int(nilai)  # 85

# String ke Boolean (non-empty string = True)
bool("Python")  # True
bool("")        # False
bool("False")   # True (string "False" tetap True!)`}</CodeBlock>

<p>Type Casting Warning</p>

<p>Hati-hati saat convert string ke number. Jika string tidak berisi angka valid, akan terjadi error:</p>

<CodeBlock language="">{`int("abc")      # ValueError!
float("12.5")   # OK: 12.5
int("12.5")     # ValueError! (gunakan float() dulu)`}</CodeBlock>


<h3 id="operator">Operator</h3>

<h3 id="operator-aritmatika">Operator Aritmatika</h3>
<CodeBlock language="">{`a = 10
b = 3

print("a + b =", a + b)    # Penjumlahan: 13
print("a - b =", a - b)    # Pengurangan: 7
print("a * b =", a * b)    # Perkalian: 30
print("a / b =", a / b)    # Pembagian: 3.3333...
print("a // b =", a // b)  # Pembagian bulat: 3
print("a % b =", a % b)    # Modulo (sisa): 1
print("a ** b =", a ** b)  # Pangkat: 1000`}</CodeBlock>


<h3 id="operator-perbandingan">Operator Perbandingan</h3>
<CodeBlock language="">{`x = 10
y = 5

print("x == y:", x == y)  # Sama dengan: False
print("x != y:", x != y)  # Tidak sama: True
print("x > y:", x > y)    # Lebih besar: True
print("x < y:", x < y)    # Lebih kecil: False
print("x >= y:", x >= y)  # Lebih besar/sama: True
print("x <= y:", x <= y)  # Lebih kecil/sama: False`}</CodeBlock>


<h3 id="operator-logika">Operator Logika</h3>
<CodeBlock language="">{`p = True
q = False

print("p and q:", p and q)  # AND: False
print("p or q:", p or q)    # OR: True
print("not p:", not p)      # NOT: False

# Kombinasi
hasil = (5 > 3) and (10 < 20)  # True and True = True`}</CodeBlock>


<h3 id="operator-assignment">Operator Assignment</h3>
<CodeBlock language="">{`x = 10

# Assignment operators
x += 5   # x = x + 5  → 15
x -= 3   # x = x - 3  → 12
x *= 2   # x = x * 2  → 24
x /= 4   # x = x / 4  → 6.0
x //= 2  # x = x // 2 → 3.0
x %= 2   # x = x % 2  → 1.0`}</CodeBlock>


<h3 id="string-formatting">String Formatting</h3>
<p>Python menyediakan beberapa cara untuk format string:</p>

<CodeBlock language="">{`# f-strings - cara paling modern dan recommended
nama = "Budi"
usia = 20

# Basic f-string
pesan = f"Nama saya {nama} dan umur saya {usia} tahun"

# Dengan expression
print(f"Tahun lahir: {2024 - usia}")

# Formatting numbers
harga = 15000.5
print(f"Harga: Rp {harga:,.2f}")  # Rp 15,000.50

# Alignment
print(f"{'Kiri':<10}|")   # Left align
print(f"{'Tengah':^10}|") # Center
print(f"{'Kanan':>10}|")  # Right align`}</CodeBlock>

<CodeBlock language="">{`# format() method
nama = "Budi"
usia = 20

pesan = "Nama: {}, Usia: {}".format(nama, usia)
pesan2 = "Nama: {0}, Usia: {1}".format(nama, usia)
pesan3 = "Nama: {n}, Usia: {u}".format(n=nama, u=usia)

print(pesan)`}</CodeBlock>

<CodeBlock language="">{`# Old style % formatting (deprecated)
nama = "Budi"
usia = 20

pesan = "Nama: %s, Usia: %d" % (nama, usia)
print(pesan)`}</CodeBlock>

<p>f-strings Recommended</p>

<p>f-strings adalah cara paling modern, readable, dan performant untuk string formatting di Python. Gunakan f-strings untuk code baru!</p>


<h3 id="input-dan-output">Input dan Output</h3>
<CodeBlock language="">{`# input() selalu mengembalikan string
nama = input("Masukkan nama Anda: ")
print(f"Halo, {nama}!")

# Convert input ke tipe data lain
usia = int(input("Masukkan usia Anda: "))
tinggi = float(input("Masukkan tinggi (cm): "))

print(f"Nama: {nama}")
print(f"Usia: {usia} tahun")
print(f"Tinggi: {tinggi} cm")

# Multiple inputs in one line
nilai1, nilai2 = input("Masukkan 2 angka (pisah spasi): ").split()
nilai1 = int(nilai1)
nilai2 = int(nilai2)`}</CodeBlock>


<h3 id="naming-conventions">Naming Conventions</h3>
<p>Python memiliki konvensi penamaan yang sebaiknya diikuti:</p>

<CodeBlock language="">{`#  Good - snake_case untuk variables dan functions
nama_lengkap = "Budi Santoso"
nilai_akhir = 85.5
jumlah_mahasiswa = 30

#  Bad - camelCase tidak direkomendasikan untuk Python
namaLengkap = "Budi"

#  Constants - UPPER_CASE
PI = 3.14159
MAX_USERS = 100
DEFAULT_TIMEOUT = 30

# Variable names harus:
# - Dimulai dengan huruf atau underscore
# - Hanya berisi huruf, angka, dan underscore
# - Case sensitive (nama ≠ Nama ≠ NAMA)`}</CodeBlock>

<p>Reserved Keywords</p>

<p>Jangan gunakan Python keywords sebagai nama variabel: if, for, while, def, class, return, True, False, None, dll.</p>

<CodeBlock language="">{`#  Salah
class = "Informatika"  # Error! 'class' adalah keyword

#  Benar
kelas = "Informatika"`}</CodeBlock>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat variabel untuk menyimpan biodata (nama, NIM, jurusan, IPK)</li>
  <li>Print biodata dengan format yang rapi menggunakan f-strings</li>
  <li>Buat program kalkulator sederhana dengan 4 operasi dasar</li>
  <li>Buat program yang input nilai dan convert ke grade (A/B/C/D/E)</li>
  <li>Eksperimen dengan berbagai operator dan type casting</li>
</ul>

<p>Apa Selanjutnya?</p>

<p>Setelah memahami variabel dan tipe data, kita akan belajar tentang Struktur Kendali (if-else dan loops)!</p>

<p>Pengenalan Python</p>

<p>Mengenal Python dan cara menjalankan program Python pertama</p>

<p>Struktur Kendali</p>

<p>Percabangan (if-else) dan perulangan (for, while) dalam Python</p>


<h3 id="struktur-kendali">Struktur Kendali</h3>
<p>Percabangan (if-else) dan perulangan (for, while) dalam Python</p>


<h3 id="percabangan-if-else">Percabangan (If-Else)</h3>
<p>Struktur percabangan digunakan untuk mengeksekusi kode berdasarkan kondisi tertentu.</p>


<h3 id="if-statement">If Statement</h3>
<CodeBlock language="">{`nilai = 85

if nilai >= 60:
    print("LULUS")`}</CodeBlock>


<h3 id="if-else">If-Else</h3>
<CodeBlock language="">{`nilai = 55

if nilai >= 60:
    print("LULUS")
else:
    print("TIDAK LULUS")`}</CodeBlock>


<h3 id="if-elif-else">If-Elif-Else</h3>
<CodeBlock language="">{`nilai = int(input("Masukkan nilai (0-100): "))

if nilai >= 90:
    grade = "A"
elif nilai >= 80:
    grade = "B"
elif nilai >= 70:
    grade = "C"
elif nilai >= 60:
    grade = "D"
else:
    grade = "E"

print(f"Nilai: {nilai}, Grade: {grade}")

# Status kelulusan
status = "LULUS" if nilai >= 60 else "TIDAK LULUS"
print(f"Status: {status}")`}</CodeBlock>

<p>Indentasi Penting!</p>

<p>Python menggunakan indentasi (4 spasi) untuk menentukan blok kode. Tidak seperti bahasa lain yang pakai &#123;&#125;, Python strict dengan indentasi!</p>

<CodeBlock language="">{`#  Benar
if nilai > 60:
    print("Lulus")
    print("Selamat!")

#  Salah - inconsistent indentation
if nilai > 60:
  print("Ini 2 spasi")
    print("Ini 4 spasi")  # IndentationError!`}</CodeBlock>


<h3 id="nested-if">Nested If</h3>
<CodeBlock language="">{`nilai = 85

if nilai >= 60:
    print("LULUS")
    if nilai >= 90:
        print("Excellent!")
    elif nilai >= 80:
        print("Great job!")
    else:
        print("Good, keep improving!")
else:
    print("TIDAK LULUS")
    if nilai >= 40:
        print("Need more practice")
    else:
        print("Need serious attention")`}</CodeBlock>


<h3 id="ternary-operator">Ternary Operator</h3>
<CodeBlock language="">{`# Format: value_if_true if condition else value_if_false
usia = 20
status = "Dewasa" if usia >= 18 else "Anak-anak"

# Multiple ternary
nilai = 75
grade = "A" if nilai >= 80 else "B" if nilai >= 70 else "C"

# Dalam function call
print("Genap" if 10 % 2 == 0 else "Ganjil")`}</CodeBlock>


<h3 id="logical-operators-dalam-kondisi">Logical Operators dalam Kondisi</h3>
<CodeBlock language="">{`nilai = 85
kehadiran = 90

# AND - semua kondisi harus True
if nilai >= 80 and kehadiran >= 80:
    print("Nilai sangat baik")

# OR - salah satu kondisi True
if nilai >= 90 or kehadiran >= 90:
    print("Minimal satu aspek excellent")

# NOT - negasi kondisi
if not (nilai < 60):
    print("Nilai di atas 60")

# Kombinasi
if (nilai >= 80 and kehadiran >= 75) or (nilai >= 90):
    print("Memenuhi syarat")`}</CodeBlock>


<h3 id="perulangan-loops">Perulangan (Loops)</h3>

<h3 id="for-loop">For Loop</h3>
<p>for loop digunakan untuk iterasi melalui sequence (list, tuple, string, dll).</p>

<CodeBlock language="">{`# range(stop) - dari 0 sampai stop-1
print("range(5):")
for i in range(5):  # 0, 1, 2, 3, 4
    print(i, end=" ")
print()

# range(start, stop) - dari start sampai stop-1
print("\nrange(2, 8):")
for i in range(2, 8):  # 2, 3, 4, 5, 6, 7
    print(i, end=" ")
print()

# range(start, stop, step)
print("\nrange(0, 10, 2):")
for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i, end=" ")
print()

# range mundur
print("\nrange(10, 0, -1):")
for i in range(10, 0, -1):  # 10, 9, 8, ..., 1
    print(i, end=" ")`}</CodeBlock>

<CodeBlock language="">{`buah = ["Apel", "Jeruk", "Mangga", "Pisang"]

# Iterate through list
print("Buah-buahan:")
for item in buah:
    print(f"- {item}")

# Dengan enumerate (mendapatkan index)
print("\nDengan index:")
for index, item in enumerate(buah):
    print(f"{index + 1}. {item}")

# Enumerate dengan custom start
for index, item in enumerate(buah, start=1):
    print(f"{index}. {item}")`}</CodeBlock>


<h3 id="while-loop">While Loop</h3>
<p>while loop mengeksekusi blok kode selama kondisi masih True.</p>

<CodeBlock language="">{`# While dasar
print("While loop:")
count = 0
while count < 5:
    print(count, end=" ")
    count += 1
print()

# While dengan kondisi kompleks
print("\nWhile dengan multiple conditions:")
nilai = 0
maksimal = 10
while nilai < maksimal and nilai != 7:
    print(nilai, end=" ")
    nilai += 1`}</CodeBlock>

<p>Infinite Loop Warning</p>

<p>Hati-hati dengan infinite loop! Pastikan kondisi while eventually menjadi False:</p>

<CodeBlock language="">{`#  Infinite loop - jangan lakukan ini!
# while True:
#     print("Loop forever!")

#  While dengan exit condition
while True:
    response = input("Continue? (y/n): ")
    if response.lower() == 'n':
        break`}</CodeBlock>


<h3 id="break-dan-continue">Break dan Continue</h3>
<CodeBlock language="">{`# break - keluar dari loop
print("Mencari angka 5:")
for i in range(10):
    if i == 5:
        print(f"Ketemu! Keluar di {i}")
        break
    print(i, end=" ")

# break dalam while
print("\n\nInput sampai 'quit':")
while True:
    text = input("Masukkan teks: ")
    if text == "quit":
        print("Keluar...")
        break
    print(f"Anda mengetik: {text}")`}</CodeBlock>

<CodeBlock language="">{`# continue - skip iterasi saat ini
print("Bilangan ganjil 1-10:")
for i in range(1, 11):
    if i % 2 == 0:  # Skip bilangan genap
        continue
    print(i, end=" ")

print("\n\nSkip multiple values:")
for i in range(10):
    if i == 3 or i == 7:
        continue
    print(i, end=" ")`}</CodeBlock>

<CodeBlock language="">{`# pass - placeholder (tidak melakukan apa-apa)
print("Loop dengan pass:")
for i in range(5):
    if i == 2:
        pass  # TODO: implementasi nanti
    else:
        print(i, end=" ")

# Berguna untuk code yang belum diimplementasi
def fungsi_nanti():
    pass  # Implementasi nanti`}</CodeBlock>


<h3 id="nested-loops">Nested Loops</h3>
<CodeBlock language="">{`# Multiplication table
print("Tabel Perkalian 1-5:")
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i}x{j}={i*j:2}", end="  ")
    print()  # Newline setelah satu baris

# Pattern dengan nested loops
print("\nPattern bintang:")
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()`}</CodeBlock>


<h3 id="loop-dengan-else">Loop dengan Else</h3>
<p>Python memiliki fitur unik: else clause pada loop!</p>

<CodeBlock language="">{`# else dieksekusi jika loop selesai normal (tanpa break)
print("Mencari angka 15 di range 1-10:")
for i in range(1, 11):
    if i == 15:
        print("Ketemu!")
        break
else:
    print("Tidak ketemu (loop selesai)")

# Contoh praktis
print("\nCek apakah angka prima:")
num = 17
for i in range(2, num):
    if num % i == 0:
        print(f"{num} bukan prima (habis dibagi {i})")
        break
else:
    print(f"{num} adalah prima")`}</CodeBlock>


<h3 id="list-comprehension">List Comprehension</h3>
<p>List comprehension adalah cara singkat dan pythonic untuk membuat list.</p>

<CodeBlock language="">{`# Cara tradisional
squares = []
for x in range(1, 6):
    squares.append(x**2)
print("Tradisional:", squares)

# List comprehension
squares = [x**2 for x in range(1, 6)]
print("Comprehension:", squares)

# Dengan kondisi
genap = [x for x in range(10) if x % 2 == 0]
print("Bilangan genap:", genap)

# Dengan if-else
labels = ["Genap" if x % 2 == 0 else "Ganjil" for x in range(5)]
print("Labels:", labels)

# Nested comprehension
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print("Matrix:", matrix)`}</CodeBlock>

<p>List Comprehension Benefits</p>

<p>List comprehension:</p>

<ul>
  <li>Lebih readable dan concise</li>
  <li>Lebih cepat dari loop biasa</li>
  <li>Pythonic way!</li>
  <li>Format: [expression for item in iterable if condition]</li>
</ul>


<h3 id="contoh-program-lengkap">Contoh Program Lengkap</h3>
<CodeBlock language="">{`# Data mahasiswa
mahasiswa = []

# Input jumlah mahasiswa
jumlah = int(input("Berapa mahasiswa? "))

# Input data setiap mahasiswa
for i in range(jumlah):
    print(f"\nMahasiswa ke-{i+1}:")
    nama = input("Nama: ")
    nilai = float(input("Nilai: "))

    # Tentukan grade
    if nilai >= 80:
        grade = "A"
    elif nilai >= 70:
        grade = "B"
    elif nilai >= 60:
        grade = "C"
    else:
        grade = "D"

    mahasiswa.append({"nama": nama, "nilai": nilai, "grade": grade})

# Tampilkan hasil
print("\n" + "="*50)
print("DAFTAR NILAI MAHASISWA")
print("="*50)

for i, mhs in enumerate(mahasiswa, 1):
    status = "LULUS" if mhs["nilai"] >= 60 else "TIDAK LULUS"
    print(f"{i}. {mhs['nama']:<20} Nilai: {mhs['nilai']:.1f} Grade: {mhs['grade']} ({status})")

# Statistik
total = sum(mhs["nilai"] for mhs in mahasiswa)
rata_rata = total / len(mahasiswa)
lulus = sum(1 for mhs in mahasiswa if mhs["nilai"] >= 60)

print("="*50)
print(f"Rata-rata kelas: {rata_rata:.2f}")
print(f"Jumlah lulus: {lulus}/{len(mahasiswa)}")`}</CodeBlock>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat program FizzBuzz (print 1-100, "Fizz" untuk kelipatan 3, "Buzz" untuk 5, "FizzBuzz" untuk 15)</li>
  <li>Buat program untuk cek bilangan prima</li>
  <li>Buat pattern segitiga bintang dengan nested loops</li>
  <li>Implementasikan guessing game dengan while loop</li>
  <li>Gunakan list comprehension untuk filter dan transform data</li>
</ul>

<p>Apa Selanjutnya?</p>

<p>Selanjutnya kita akan belajar tentang Fungsi untuk membuat kode yang reusable dan modular!</p>

<p>Variabel & Tipe Data</p>

<p>Memahami variabel, tipe data, operator, dan input/output dalam Python</p>

<p>Fungsi</p>

<p>Membuat dan menggunakan fungsi dalam Python untuk kode yang reusable</p>


<h3 id="fungsi">Fungsi</h3>
<p>Membuat dan menggunakan fungsi dalam Python untuk kode yang reusable</p>


<h3 id="apa-itu-fungsi">Apa itu Fungsi?</h3>
<p>Fungsi adalah blok kode yang dapat digunakan kembali dan hanya dijalankan ketika dipanggil. Fungsi membantu membuat kode lebih modular, readable, dan maintainable.</p>


<h3 id="membuat-fungsi-dasar">Membuat Fungsi Dasar</h3>
<CodeBlock language="">{`# Fungsi tanpa parameter
def sapa():
    print("Halo, selamat datang!")

# Memanggil fungsi
sapa()  # Output: Halo, selamat datang!
sapa()  # Bisa dipanggil berkali-kali`}</CodeBlock>

<p>Function Syntax</p>

<p>Format dasar fungsi Python:</p>

<CodeBlock language="">{`def nama_fungsi(parameters):
    """Docstring (opsional)"""
    # Function body
    return value  # opsional`}</CodeBlock>


<h3 id="fungsi-dengan-parameter">Fungsi dengan Parameter</h3>
<CodeBlock language="">{`# Satu parameter
def sapa_nama(nama):
    print(f"Halo, {nama}! Selamat datang!")

sapa_nama("Budi")  # Halo, Budi! Selamat datang!
sapa_nama("Ani")   # Halo, Ani! Selamat datang!

# Multiple parameters
def perkenalan(nama, usia, kota):
    print(f"Nama saya {nama}, usia {usia} tahun, dari {kota}")

perkenalan("Budi", 20, "Jakarta")`}</CodeBlock>


<h3 id="parameter-default">Parameter Default</h3>
<CodeBlock language="">{`def sapa_lengkap(nama, pesan="Selamat datang!"):
    print(f"Halo, {nama}! {pesan}")

# Pakai default
sapa_lengkap("Budi")
# Output: Halo, Budi! Selamat datang!

# Override default
sapa_lengkap("Ani", "Semoga harimu menyenangkan!")
# Output: Halo, Ani! Semoga harimu menyenangkan!`}</CodeBlock>

<p>Default Parameter Order</p>

<p>Parameter dengan default value harus setelah parameter tanpa default:</p>

<CodeBlock language="">{`#  Benar
def fungsi(a, b, c=10, d=20):
    pass

#  Salah - non-default after default
def fungsi(a, b=10, c, d=20):  # SyntaxError!
    pass`}</CodeBlock>


<h3 id="return-statement">Return Statement</h3>
<CodeBlock language="">{`# Return single value
def jumlah(a, b):
    return a + b

hasil = jumlah(5, 3)
print(f"5 + 3 = {hasil}")

# Return multiple values (tuple)
def operasi_aritmatika(a, b):
    tambah = a + b
    kurang = a - b
    kali = a * b
    bagi = a / b if b != 0 else None
    return tambah, kurang, kali, bagi

# Unpack multiple returns
hasil_tambah, hasil_kurang, hasil_kali, hasil_bagi = operasi_aritmatika(10, 2)
print(f"Tambah: {hasil_tambah}")
print(f"Kurang: {hasil_kurang}")
print(f"Kali: {hasil_kali}")
print(f"Bagi: {hasil_bagi}")`}</CodeBlock>


<h3 id="keyword-arguments">Keyword Arguments</h3>
<CodeBlock language="">{`def info_mahasiswa(nama, nim, jurusan):
    print(f"Nama: {nama}")
    print(f"NIM: {nim}")
    print(f"Jurusan: {jurusan}")

# Positional arguments (urutan penting)
info_mahasiswa("Budi", "12345", "Informatika")

# Keyword arguments (urutan tidak penting)
info_mahasiswa(nim="12345", jurusan="Informatika", nama="Budi")

# Mixed (positional first, then keyword)
info_mahasiswa("Budi", nim="12345", jurusan="Informatika")`}</CodeBlock>


<h3 id="variable-length-arguments">Variable-Length Arguments</h3>
<CodeBlock language="">{`# *args untuk variable number of positional arguments
def jumlahkan(*angka):
    total = sum(angka)
    return total

print(jumlahkan(1, 2, 3))           # 6
print(jumlahkan(10, 20, 30, 40))    # 100
print(jumlahkan(5))                 # 5

# Mengakses args
def print_semua(*items):
    for i, item in enumerate(items, 1):
        print(f"{i}. {item}")

print_semua("Apel", "Jeruk", "Mangga")`}</CodeBlock>

<CodeBlock language="">{`# **kwargs untuk variable number of keyword arguments
def info_user(**data):
    for key, value in data.items():
        print(f"{key}: {value}")

info_user(nama="Budi", usia=20, kota="Jakarta")
# Output:
# nama: Budi
# usia: 20
# kota: Jakarta

# Kombinasi dengan fixed parameters
def buat_profil(nama, **info):
    print(f"Nama: {nama}")
    for key, value in info.items():
        print(f"{key}: {value}")

buat_profil("Budi", usia=20, kota="Jakarta", hobby="Coding")`}</CodeBlock>

<CodeBlock language="">{`# Kombinasi semua jenis parameters
def fungsi_lengkap(a, b, c=10, *args, **kwargs):
    print(f"a={a}, b={b}, c={c}")
    print(f"args: {args}")
    print(f"kwargs: {kwargs}")

fungsi_lengkap(1, 2)
fungsi_lengkap(1, 2, 3, 4, 5, x=10, y=20)

# Urutan parameter harus:
# 1. Positional
# 2. Default
# 3. *args
# 4. **kwargs`}</CodeBlock>


<h3 id="lambda-functions">Lambda Functions</h3>
<p>Lambda adalah anonymous function (fungsi tanpa nama) yang singkat.</p>

<CodeBlock language="">{`# Regular function
def kuadrat(x):
    return x ** 2

# Lambda equivalent
kuadrat = lambda x: x ** 2

print(kuadrat(5))  # 25

# Lambda dengan multiple parameters
jumlah = lambda a, b: a + b
print(jumlah(3, 5))  # 8

# Lambda dalam sorted()
mahasiswa = [
    {"nama": "Budi", "nilai": 85},
    {"nama": "Ani", "nilai": 92},
    {"nama": "Citra", "nilai": 78}
]

# Sort by nilai
sorted_mhs = sorted(mahasiswa, key=lambda x: x["nilai"], reverse=True)
for mhs in sorted_mhs:
    print(f"{mhs['nama']}: {mhs['nilai']}")

# Lambda dengan map()
angka = [1, 2, 3, 4, 5]
kuadrat_list = list(map(lambda x: x**2, angka))
print(kuadrat_list)  # [1, 4, 9, 16, 25]

# Lambda dengan filter()
genap = list(filter(lambda x: x % 2 == 0, angka))
print(genap)  # [2, 4]`}</CodeBlock>

<p>When to Use Lambda</p>

<p>Lambda best untuk:</p>

<ul>
  <li>Simple operations dalam one-liner</li>
  <li>Sebagai argument untuk functions seperti map(), filter(), sorted()</li>
</ul>

<p>Gunakan regular function untuk:</p>

<ul>
  <li>Logic yang kompleks</li>
  <li>Multiple statements</li>
  <li>Readability lebih penting</li>
</ul>


<h3 id="scope-variabel">Scope Variabel</h3>
<CodeBlock language="">{`# Global variable
x = 10

def fungsi1():
    # Local variable
    x = 20  # Ini variable lokal, tidak mempengaruhi global x
    print(f"Di dalam fungsi: x = {x}")

fungsi1()  # x = 20
print(f"Di luar fungsi: x = {x}")  # x = 10

# Mengakses global variable
def fungsi2():
    global y
    y = 30  # Modifikasi global variable

fungsi2()
print(f"y = {y}")  # 30

# Nested function dan nonlocal
def outer():
    x = 10

    def inner():
        nonlocal x  # Akses variable dari outer function
        x = 20

    inner()
    print(f"x di outer: {x}")  # 20

outer()`}</CodeBlock>

<p>Global Variables</p>

<p>Hindari menggunakan global jika memungkinkan. Lebih baik gunakan parameter dan return value untuk komunikasi antar fungsi.</p>


<h3 id="docstrings">Docstrings</h3>
<CodeBlock language="">{`def hitung_bmi(berat, tinggi):
    """
    Menghitung Body Mass Index (BMI).

    Parameters:
    berat (float): Berat badan dalam kilogram
    tinggi (float): Tinggi badan dalam meter

    Returns:
    float: Nilai BMI
    str: Kategori BMI

    Example:
    >>> hitung_bmi(70, 1.75)
    (22.86, 'Normal')
    """
    bmi = berat / (tinggi ** 2)

    if bmi < 18.5:
        kategori = "Berat badan kurang"
    elif bmi < 25:
        kategori = "Normal"
    elif bmi < 30:
        kategori = "Berat badan berlebih"
    else:
        kategori = "Obesitas"

    return round(bmi, 2), kategori

# Mengakses docstring
print(hitung_bmi.__doc__)

# Built-in help
help(hitung_bmi)`}</CodeBlock>


<h3 id="higher-order-functions">Higher-Order Functions</h3>
<p>Functions sebagai first-class objects - bisa dijadikan parameter atau return value.</p>

<CodeBlock language="">{`# Function sebagai parameter
def apply_operation(a, b, operation):
    return operation(a, b)

add = lambda x, y: x + y
multiply = lambda x, y: x * y

print(apply_operation(5, 3, add))       # 8
print(apply_operation(5, 3, multiply))  # 15

# Function sebagai return value
def create_multiplier(n):
    def multiplier(x):
        return x * n
    return multiplier

times_two = create_multiplier(2)
times_three = create_multiplier(3)

print(times_two(5))    # 10
print(times_three(5))  # 15`}</CodeBlock>


<h3 id="recursion">Recursion</h3>
<p>Fungsi yang memanggil dirinya sendiri.</p>

<CodeBlock language="">{`# Factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

# Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`}</CodeBlock>

<p>Recursion Limit</p>

<p>Python memiliki recursion limit (default 1000). Untuk data besar, gunakan iterative approach atau sys.setrecursionlimit().</p>


<h3 id="best-practices">Best Practices</h3>
<CodeBlock language="">{`#  Good practices
def calculate_total_price(items, tax_rate=0.1):
    """
    Clear name, descriptive parameters, docstring.
    """
    subtotal = sum(item['price'] for item in items)
    tax = subtotal * tax_rate
    return subtotal + tax

#  Single responsibility
def validate_email(email):
    """One function, one job."""
    return '@' in email and '.' in email.split('@')[1]

#  Return early
def process_data(data):
    if not data:
        return None
    if len(data) < 5:
        return "Too short"
    # Process...
    return result`}</CodeBlock>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat fungsi untuk convert suhu (Celsius ↔ Fahrenheit ↔ Kelvin)</li>
  <li>Buat fungsi untuk cek bilangan prima</li>
  <li>Implementasikan calculator dengan functions untuk setiap operasi</li>
  <li>Buat fungsi rekursif untuk menghitung pangkat</li>
  <li>Gunakan lambda untuk sort list of dictionaries</li>
</ul>

<p>Apa Selanjutnya?</p>

<p>Selanjutnya kita akan belajar tentang Struktur Data (List, Dictionary, Tuple, Set)!</p>

<p>Struktur Kendali</p>

<p>Percabangan (if-else) dan perulangan (for, while) dalam Python</p>

<p>Struktur Data</p>

<p>Bekerja dengan List, Dictionary, Tuple, dan Set di Python</p>


<h3 id="struktur-data">Struktur Data</h3>
<p>Bekerja dengan List, Dictionary, Tuple, dan Set di Python</p>


<h3 id="struktur-data-di-python">Struktur Data di Python</h3>
<p>Python memiliki beberapa struktur data bawaan yang sangat berguna untuk menyimpan dan memanipulasi koleksi data. Mari kita pelajari empat struktur data utama: List, Dictionary, Tuple, dan Set.</p>


<h3 id="list">List</h3>
<p>List adalah koleksi data yang terurut dan bisa diubah (mutable). List dapat berisi berbagai tipe data dan menggunakan index untuk mengakses elemen.</p>


<h3 id="membuat-dan-mengakses-list">Membuat dan Mengakses List</h3>
<CodeBlock language="">{`# Membuat list
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
print("List buah:", buah)

angka = [1, 2, 3, 4, 5]
mixed = [1, "Python", 3.14, True]

# Mengakses elemen dengan index
print("Buah pertama:", buah[0])        # Apel
print("Buah kedua:", buah[1])          # Jeruk
print("Buah terakhir:", buah[-1])      # Pisang
print("Buah kedua dari belakang:", buah[-2])  # Mangga`}</CodeBlock>

<p>List Indexing</p>

<ul>
  <li>Index dimulai dari 0 untuk elemen pertama</li>
  <li>Index negatif menghitung dari belakang: -1 adalah elemen terakhir</li>
  <li>Mengakses index yang tidak ada akan menyebabkan IndexError</li>
</ul>


<h3 id="slicing-list">Slicing List</h3>
<CodeBlock language="">{`buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"]

# Slicing format: list[start:stop:step]
print(buah[0:2])      # ["Apel", "Jeruk"]
print(buah[1:4])      # ["Jeruk", "Mangga", "Pisang"]
print(buah[:3])       # ["Apel", "Jeruk", "Mangga"] - dari awal sampai index 2
print(buah[2:])       # ["Mangga", "Pisang", "Anggur"] - dari index 2 sampai akhir
print(buah[-2:])      # ["Pisang", "Anggur"] - dua terakhir
print(buah[::2])      # ["Apel", "Mangga", "Anggur"] - setiap 2 elemen
print(buah[::-1])     # Reverse list`}</CodeBlock>


<h3 id="memodifikasi-list">Memodifikasi List</h3>
<CodeBlock language="">{`buah = ["Apel", "Jeruk", "Mangga"]

# Mengubah elemen
buah[1] = "Strawberry"
print(buah)  # ["Apel", "Strawberry", "Mangga"]

# Menambah elemen
buah.append("Anggur")           # Tambah di akhir
print(buah)                     # ["Apel", "Strawberry", "Mangga", "Anggur"]

buah.insert(1, "Durian")        # Insert di index tertentu
print(buah)                     # ["Apel", "Durian", "Strawberry", "Mangga", "Anggur"]

# Menggabung list
buah.extend(["Melon", "Semangka"])
print(buah)

# Menghapus elemen
removed = buah.pop()            # Hapus dan return elemen terakhir
print(f"Dihapus: {removed}")

buah.pop(1)                     # Hapus elemen di index 1
buah.remove("Mangga")           # Hapus elemen berdasarkan value
del buah[0]                     # Hapus elemen dengan del

# Clear semua
buah.clear()
print(buah)  # []`}</CodeBlock>


<h3 id="metode-list">Metode List</h3>
<CodeBlock language="">{`buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Apel"]

# Mencari elemen
print("Mangga ada di index:", buah.index("Mangga"))  # 2
print("Jumlah Apel:", buah.count("Apel"))            # 2

# Cek keberadaan
if "Jeruk" in buah:
    print("Jeruk ada di list")

# Length
print("Jumlah buah:", len(buah))  # 5`}</CodeBlock>

<CodeBlock language="">{`angka = [3, 1, 4, 1, 5, 9, 2, 6]

# Sort (modifikasi list asli)
angka.sort()
print("Sorted:", angka)  # [1, 1, 2, 3, 4, 5, 6, 9]

angka.sort(reverse=True)
print("Reversed:", angka)  # [9, 6, 5, 4, 3, 2, 1, 1]

# Sorted (return list baru)
angka = [3, 1, 4, 1, 5]
sorted_angka = sorted(angka)
print("Original:", angka)        # [3, 1, 4, 1, 5]
print("Sorted copy:", sorted_angka)  # [1, 1, 3, 4, 5]

# Reverse
angka.reverse()
print("Reversed:", angka)`}</CodeBlock>

<CodeBlock language="">{`# Concatenation
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2  # [1, 2, 3, 4, 5, 6]

# Repetition
repeat = [0] * 5  # [0, 0, 0, 0, 0]

# Min, Max, Sum
angka = [10, 5, 8, 20, 3]
print("Min:", min(angka))    # 3
print("Max:", max(angka))    # 20
print("Sum:", sum(angka))    # 46

# Copy list
original = [1, 2, 3]
copy = original.copy()
# atau
copy = original[:]`}</CodeBlock>


<h3 id="list-comprehension">List Comprehension</h3>
<p>List comprehension adalah cara singkat dan efisien untuk membuat list baru.</p>

<CodeBlock language="">{`# Basic list comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# Dengan kondisi
genap = [x for x in range(1, 11) if x % 2 == 0]
print(genap)  # [2, 4, 6, 8, 10]

# If-else dalam comprehension
label = ["Genap" if x % 2 == 0 else "Ganjil" for x in range(5)]
print(label)  # ['Genap', 'Ganjil', 'Genap', 'Ganjil', 'Genap']

# Nested comprehension
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# List comprehension dari string
kata = "Python"
huruf = [char.upper() for char in kata]
print(huruf)  # ['P', 'Y', 'T', 'H', 'O', 'N']`}</CodeBlock>

<p>List Comprehension Syntax</p>

<p>Format dasar:</p>

<CodeBlock language="">{`[expression for item in iterable if condition]`}</CodeBlock>

<ul>
  <li>expression: Apa yang akan masuk ke list</li>
  <li>item: Variable untuk setiap iterasi</li>
  <li>iterable: Collection yang di-iterate</li>
  <li>condition: Filter (opsional)</li>
</ul>


<h3 id="nested-lists">Nested Lists</h3>
<CodeBlock language="">{`# Matrix 2D
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Mengakses elemen
print(matrix[0])       # [1, 2, 3] - row pertama
print(matrix[1][2])    # 6 - row 1, column 2

# Iterasi nested list
for row in matrix:
    for item in row:
        print(item, end=" ")
    print()  # Newline setelah setiap row

# List of dictionaries
mahasiswa = [
    {"nama": "Budi", "nilai": 85},
    {"nama": "Ani", "nilai": 92},
    {"nama": "Citra", "nilai": 78}
]

for mhs in mahasiswa:
    print(f"{mhs['nama']}: {mhs['nilai']}")`}</CodeBlock>


<h3 id="dictionary">Dictionary</h3>
<p>Dictionary adalah koleksi data yang tidak berurutan dan menyimpan data dalam pasangan key-value. Dictionary sangat efisien untuk lookup data.</p>


<h3 id="membuat-dan-mengakses-dictionary">Membuat dan Mengakses Dictionary</h3>
<CodeBlock language="">{`# Membuat dictionary
mahasiswa = {
    "nama": "Budi Santoso",
    "nim": "20210001",
    "jurusan": "Teknik Informatika",
    "usia": 20
}

print(mahasiswa)

# Mengakses value dengan key
print("Nama:", mahasiswa["nama"])
print("NIM:", mahasiswa["nim"])

# Mengakses dengan get() (lebih aman)
print("Jurusan:", mahasiswa.get("jurusan"))
print("IPK:", mahasiswa.get("ipk", "Data tidak tersedia"))  # Default jika key tidak ada`}</CodeBlock>

<p>KeyError</p>

<p>Mengakses key yang tidak ada dengan dict[key] akan menyebabkan KeyError. Gunakan dict.get(key) atau cek dengan if key in dict untuk menghindari error.</p>


<h3 id="memodifikasi-dictionary">Memodifikasi Dictionary</h3>
<CodeBlock language="">{`mahasiswa = {
    "nama": "Budi",
    "nim": "20210001",
    "usia": 20
}

# Mengubah value
mahasiswa["usia"] = 21
print(mahasiswa)

# Menambah key-value baru
mahasiswa["ipk"] = 3.75
mahasiswa["semester"] = 3
print(mahasiswa)

# Update multiple items
mahasiswa.update({"usia": 22, "kota": "Jakarta"})
print(mahasiswa)

# Menghapus item
del mahasiswa["usia"]           # Hapus key tertentu
removed = mahasiswa.pop("nim")  # Hapus dan return value

# Clear semua
mahasiswa.clear()`}</CodeBlock>


<h3 id="metode-dictionary">Metode Dictionary</h3>
<CodeBlock language="">{`mahasiswa = {
    "nama": "Budi",
    "nim": "20210001",
    "jurusan": "Informatika",
    "ipk": 3.75
}

# Keys, Values, Items
print("Keys:", list(mahasiswa.keys()))
print("Values:", list(mahasiswa.values()))
print("Items:", list(mahasiswa.items()))

# Cek key existence
if "nama" in mahasiswa:
    print("Key 'nama' ada")

# Get with default
semester = mahasiswa.get("semester", 1)
print("Semester:", semester)

# Setdefault - set jika belum ada
mahasiswa.setdefault("kota", "Jakarta")
print(mahasiswa)

# Copy dictionary
copy_mhs = mahasiswa.copy()`}</CodeBlock>


<h3 id="iterasi-dictionary">Iterasi Dictionary</h3>
<CodeBlock language="">{`mahasiswa = {
    "nama": "Budi",
    "nim": "20210001",
    "jurusan": "Informatika"
}

# Loop keys (default)
for key in mahasiswa:
    print(key, ":", mahasiswa[key])

# Loop keys explicitly
for key in mahasiswa.keys():
    print(key)

# Loop values
for value in mahasiswa.values():
    print(value)

# Loop items (key-value pairs)
for key, value in mahasiswa.items():
    print(f"{key}: {value}")`}</CodeBlock>


<h3 id="dictionary-comprehension">Dictionary Comprehension</h3>
<CodeBlock language="">{`# Basic dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Dengan kondisi
genap_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(genap_squares)  # {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}

# Dari dua list
keys = ["nama", "usia", "kota"]
values = ["Budi", 20, "Jakarta"]
person = {k: v for k, v in zip(keys, values)}
print(person)

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}`}</CodeBlock>


<h3 id="nested-dictionaries">Nested Dictionaries</h3>
<CodeBlock language="">{`# Nested dictionary
kampus = {
    "nama": "ITERA",
    "fakultas": {
        "FTIK": {
            "prodi": ["Informatika", "Sistem Informasi"],
            "dekan": "Dr. Budi"
        },
        "FTI": {
            "prodi": ["Teknik Elektro", "Teknik Mesin"],
            "dekan": "Dr. Ani"
        }
    },
    "alamat": "Lampung"
}

# Mengakses nested value
print("Nama kampus:", kampus["nama"])
print("Prodi FTIK:", kampus["fakultas"]["FTIK"]["prodi"])
print("Dekan FTI:", kampus["fakultas"]["FTI"]["dekan"])

# Iterasi nested dictionary
for fak, info in kampus["fakultas"].items():
    print(f"\n{fak}:")
    print(f"  Prodi: {', '.join(info['prodi'])}")
    print(f"  Dekan: {info['dekan']}")`}</CodeBlock>


<h3 id="tuple">Tuple</h3>
<p>Tuple adalah koleksi data yang terurut dan tidak bisa diubah (immutable). Tuple lebih cepat daripada list dan digunakan untuk data yang tidak boleh berubah.</p>

<CodeBlock language="">{`# Membuat tuple
koordinat = (10, 20)
buah = ("Apel", "Jeruk", "Mangga")
mixed = (1, "Python", 3.14, True)

# Single item tuple (perlu koma!)
single = (5,)  # Tuple dengan satu elemen
not_tuple = (5)  # Ini integer, bukan tuple!

# Mengakses elemen
print(buah[0])    # Apel
print(buah[-1])   # Mangga
print(buah[1:3])  # ("Jeruk", "Mangga")

# Tuple unpacking
x, y = koordinat
print(f"x={x}, y={y}")

nama, nim, jurusan = ("Budi", "12345", "Informatika")
print(f"Nama: {nama}")

# Operasi tuple
t1 = (1, 2, 3)
t2 = (4, 5, 6)
combined = t1 + t2  # (1, 2, 3, 4, 5, 6)
repeated = t1 * 3   # (1, 2, 3, 1, 2, 3, 1, 2, 3)

# Methods
angka = (1, 2, 2, 3, 2, 4)
print("Count 2:", angka.count(2))  # 3
print("Index of 3:", angka.index(3))  # 3`}</CodeBlock>

<p>Why Use Tuples?</p>

<p>Keuntungan tuple dibanding list:</p>

<ul>
  <li>Immutable - Data tidak bisa diubah, lebih aman</li>
  <li>Faster - Lebih cepat untuk iteration</li>
  <li>Can be dictionary keys - List tidak bisa jadi key</li>
  <li>Less memory - Lebih efisien memory</li>
</ul>

<p>Gunakan tuple untuk:</p>

<ul>
  <li>Koordinat (x, y), RGB colors (r, g, b)</li>
  <li>Function return multiple values</li>
  <li>Dictionary keys</li>
  <li>Data yang tidak boleh dimodifikasi</li>
</ul>


<h3 id="set">Set</h3>
<p>Set adalah koleksi data yang tidak berurutan, tidak memiliki duplikat, dan bisa diubah. Set sangat efisien untuk membership testing dan operasi matematika set.</p>

<CodeBlock language="">{`# Membuat set
buah = {"Apel", "Jeruk", "Mangga"}
angka = {1, 2, 3, 4, 5}

# Set dari list (menghapus duplikat)
angka_list = [1, 2, 2, 3, 3, 3, 4]
angka_set = set(angka_list)
print(angka_set)  # {1, 2, 3, 4}

# Empty set (harus pakai set(), bukan {})
empty = set()  # Benar
# not_set = {}  # Ini dictionary, bukan set!

# Menambah elemen
buah.add("Pisang")
buah.add("Apel")  # Tidak ditambah karena sudah ada
print(buah)

# Update dengan multiple items
buah.update(["Anggur", "Melon"])

# Menghapus elemen
buah.remove("Jeruk")    # Error jika tidak ada
buah.discard("Durian")  # Tidak error jika tidak ada
removed = buah.pop()    # Hapus random element
buah.clear()            # Hapus semua`}</CodeBlock>


<h3 id="set-operations-matematika">Set Operations (Matematika)</h3>
<CodeBlock language="">{`a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

# Union (gabungan)
print("Union:", a | b)
print("Union:", a.union(b))
# {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection (irisan)
print("Intersection:", a & b)
print("Intersection:", a.intersection(b))
# {4, 5}

# Difference (selisih)
print("Difference a-b:", a - b)
print("Difference a-b:", a.difference(b))
# {1, 2, 3}

print("Difference b-a:", b - a)
# {6, 7, 8}

# Symmetric Difference (XOR)
print("Symmetric Diff:", a ^ b)
print("Symmetric Diff:", a.symmetric_difference(b))
# {1, 2, 3, 6, 7, 8}

# Subset dan Superset
x = {1, 2, 3}
y = {1, 2, 3, 4, 5}

print("x subset of y:", x.issubset(y))      # True
print("y superset of x:", y.issuperset(x))  # True
print("Disjoint:", x.isdisjoint({6, 7}))    # True`}</CodeBlock>


<h3 id="konversi-antar-struktur-data">Konversi Antar Struktur Data</h3>
<CodeBlock language="">{`# List ke Set (hapus duplikat)
numbers = [1, 2, 2, 3, 3, 3]
unique = set(numbers)  # {1, 2, 3}

# Set ke List (add order)
unique_list = list(unique)  # [1, 2, 3]

# List ke Tuple (make immutable)
tuple_nums = tuple(numbers)

# String ke List
kata = "Python"
huruf_list = list(kata)  # ['P', 'y', 't', 'h', 'o', 'n']

# Dict keys/values ke List
person = {"name": "Budi", "age": 20}
keys = list(person.keys())
values = list(person.values())

# Zip lists ke dict
keys = ["a", "b", "c"]
values = [1, 2, 3]
d = dict(zip(keys, values))  # {'a': 1, 'b': 2, 'c': 3}`}</CodeBlock>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat program untuk menghitung rata-rata nilai dari list menggunakan berbagai metode</li>
  <li>Buat dictionary untuk menyimpan data mahasiswa dan implementasikan CRUD operations</li>
  <li>Gunakan set untuk mencari common elements antara dua list</li>
  <li>Buat program untuk menghitung frekuensi kata dalam sebuah teks menggunakan dictionary</li>
  <li>Implementasikan matrix operations menggunakan nested lists</li>
</ul>

<p>Apa Selanjutnya?</p>

<p>Selanjutnya kita akan belajar tentang Modul Python untuk mengorganisir kode dan menggunakan library!</p>

<p>Fungsi</p>

<p>Membuat dan menggunakan fungsi dalam Python untuk kode yang reusable</p>

<p>Modul Python</p>

<p>Mengorganisir kode dengan modul dan menggunakan library Python</p>


<h3 id="modul-python">Modul Python</h3>
<p>Mengorganisir kode dengan modul dan menggunakan library Python</p>


<h3 id="apa-itu-modul">Apa itu Modul?</h3>
<p>Modul Python adalah file yang berisi definisi dan pernyataan Python. Modul memungkinkan Kalian untuk mengorganisir kode dalam file terpisah yang dapat digunakan kembali di berbagai program.</p>

<p>Why Use Modules?</p>

<p>Keuntungan menggunakan modul:</p>

<ul>
  <li>Reusability - Code dapat digunakan di banyak program</li>
  <li>Organization - Memecah program besar jadi file-file kecil</li>
  <li>Maintainability - Lebih mudah maintain dan debug</li>
  <li>Namespace - Menghindari konflik nama variable/function</li>
</ul>


<h3 id="membuat-modul-sendiri">Membuat Modul Sendiri</h3>
<p>Mari membuat modul Python sederhana untuk operasi matematika.</p>


<h3 id="buat-file-modul">Buat File Modul</h3>
<p>Buat file baru dengan nama my_module.py:</p>

<CodeBlock language="">{`"""
Modul matematika sederhana untuk praktikum Python.
"""

# Variabel/konstanta dalam modul
PI = 3.14159
E = 2.71828

# Fungsi untuk menghitung luas lingkaran
def hitung_luas_lingkaran(radius):
    """Menghitung luas lingkaran."""
    return PI * radius * radius

# Fungsi untuk menghitung keliling lingkaran
def hitung_keliling_lingkaran(radius):
    """Menghitung keliling lingkaran."""
    return 2 * PI * radius

# Fungsi untuk konversi suhu
def celsius_ke_fahrenheit(celsius):
    """Konversi Celsius ke Fahrenheit."""
    return (celsius * 9/5) + 32

def fahrenheit_ke_celsius(fahrenheit):
    """Konversi Fahrenheit ke Celsius."""
    return (fahrenheit - 32) * 5/9

def celsius_ke_kelvin(celsius):
    """Konversi Celsius ke Kelvin."""
    return celsius + 273.15

# Fungsi luas persegi
def luas_persegi(sisi):
    """Menghitung luas persegi."""
    return sisi * sisi

# Fungsi luas persegi panjang
def luas_persegi_panjang(panjang, lebar):
    """Menghitung luas persegi panjang."""
    return panjang * lebar`}</CodeBlock>

<p>Module File</p>

<p>File modul harus berekstensi .py dan nama file akan menjadi nama modul. Hindari spasi dan karakter khusus dalam nama file.</p>


<h3 id="gunakan-modul">Gunakan Modul</h3>
<p>Buat file baru main.py di direktori yang sama:</p>

<CodeBlock language="">{`# Import seluruh modul
import my_module

# Menggunakan variabel dari modul
print(f"Nilai Pi: {my_module.PI}")
print(f"Nilai E: {my_module.E}")

# Menggunakan fungsi dari modul
radius = 5
luas = my_module.hitung_luas_lingkaran(radius)
keliling = my_module.hitung_keliling_lingkaran(radius)

print(f"\nLingkaran dengan radius {radius}:")
print(f"Luas: {luas:.2f}")
print(f"Keliling: {keliling:.2f}")

# Konversi suhu
celsius = 25
fahrenheit = my_module.celsius_ke_fahrenheit(celsius)
kelvin = my_module.celsius_ke_kelvin(celsius)

print(f"\n{celsius}°C = {fahrenheit:.2f}°F")
print(f"{celsius}°C = {kelvin:.2f}K")`}</CodeBlock>


<h3 id="jalankan-program">Jalankan Program</h3>
<CodeBlock language="">{`python main.py`}</CodeBlock>

<p>Output:</p>

<CodeBlock language="">{`Nilai Pi: 3.14159
Nilai E: 2.71828

Lingkaran dengan radius 5:
Luas: 78.54
Keliling: 31.42

25°C = 77.00°F
25°C = 298.15K`}</CodeBlock>


<h3 id="cara-import-modul">Cara Import Modul</h3>
<p>Python menyediakan beberapa cara untuk mengimport modul:</p>

<CodeBlock language="">{`# Import seluruh modul
import my_module

# Akses dengan module_name.item
print(my_module.PI)
luas = my_module.luas_persegi(5)

# Keuntungan: Jelas dari mana function berasal
# Kekurangan: Harus ketik nama modul setiap kali`}</CodeBlock>

<CodeBlock language="">{`# Import item tertentu saja
from my_module import PI, hitung_luas_lingkaran

# Akses langsung tanpa nama modul
print(PI)
luas = hitung_luas_lingkaran(5)

# Import multiple items
from my_module import (
    celsius_ke_fahrenheit,
    fahrenheit_ke_celsius,
    celsius_ke_kelvin
)

# Keuntungan: Lebih singkat
# Kekurangan: Kurang jelas asal item`}</CodeBlock>

<CodeBlock language="">{`# Import dengan alias
import my_module as mm

print(mm.PI)
luas = mm.luas_persegi(5)

# Import function dengan alias
from my_module import hitung_luas_lingkaran as hitung_luas

luas = hitung_luas(5)

# Berguna untuk:
# - Nama modul panjang
# - Menghindari konflik nama
# - Convenience`}</CodeBlock>

<CodeBlock language="">{`# Import semua (TIDAK DISARANKAN!)
from my_module import *

# Akses langsung semua item
print(PI)
luas = luas_persegi(5)

# Masalah:
# - Tidak jelas mana yang dari modul
# - Bisa overwrite variable existing
# - Code kurang readable
# - Hindari penggunaan ini!`}</CodeBlock>

<p>Best Practice Import</p>

<p>Recommended:</p>

<CodeBlock language="">{`import my_module  #  Jelas dan eksplisit
from my_module import specific_function  #  OK untuk beberapa items
import my_module as mm  #  OK dengan alias yang jelas`}</CodeBlock>

<p>Not Recommended:</p>

<CodeBlock language="">{`from my_module import *  #  Hindari ini!`}</CodeBlock>


<h3 id="module-search-path">Module Search Path</h3>
<p>Python mencari modul di beberapa lokasi:</p>

<CodeBlock language="">{`import sys

# Lihat semua path yang dicari Python
for path in sys.path:
    print(path)

# Urutan pencarian:
# 1. Direktori current script
# 2. PYTHONPATH environment variable
# 3. Installation-dependent default paths`}</CodeBlock>


<h3 id="modul-built-in-python">Modul Built-in Python</h3>
<p>Python memiliki banyak modul bawaan yang sangat berguna:</p>


<h3 id="module-math">Module math</h3>
<CodeBlock language="">{`import math

# Konstanta
print(f"Pi: {math.pi}")
print(f"E: {math.e}")

# Fungsi matematika
print(f"sqrt(16): {math.sqrt(16)}")
print(f"ceil(4.3): {math.ceil(4.3)}")
print(f"floor(4.7): {math.floor(4.7)}")
print(f"pow(2, 3): {math.pow(2, 3)}")
print(f"factorial(5): {math.factorial(5)}")

# Trigonometri
print(f"sin(π/2): {math.sin(math.pi/2)}")
print(f"cos(0): {math.cos(0)}")
print(f"tan(π/4): {math.tan(math.pi/4)}")

# Logaritma
print(f"log(100, 10): {math.log(100, 10)}")
print(f"log10(1000): {math.log10(1000)}")
print(f"log2(8): {math.log2(8)}")`}</CodeBlock>


<h3 id="module-random">Module random</h3>
<CodeBlock language="">{`import random

# Random integer
print(f"Random int 1-10: {random.randint(1, 10)}")
print(f"Random int 1-100: {random.randrange(1, 101, 2)}")  # Ganjil

# Random float
print(f"Random float 0-1: {random.random()}")
print(f"Random float 1-10: {random.uniform(1, 10)}")

# Random choice
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
print(f"Random buah: {random.choice(buah)}")

# Random sample (multiple items tanpa repeat)
sample = random.sample(buah, 2)
print(f"Sample 2 buah: {sample}")

# Shuffle list (in-place)
angka = [1, 2, 3, 4, 5]
random.shuffle(angka)
print(f"Shuffled: {angka}")

# Set seed untuk reproducible results
random.seed(42)
print(random.random())  # Selalu sama dengan seed 42`}</CodeBlock>


<h3 id="module-datetime">Module datetime</h3>
<CodeBlock language="">{`import datetime

# Current date and time
now = datetime.datetime.now()
print(f"Now: {now}")
print(f"Date: {now.date()}")
print(f"Time: {now.time()}")

# Components
print(f"Year: {now.year}")
print(f"Month: {now.month}")
print(f"Day: {now.day}")
print(f"Hour: {now.hour}")
print(f"Minute: {now.minute}")

# Create specific date
lahir = datetime.date(2000, 5, 15)
print(f"Tanggal lahir: {lahir}")

# Date arithmetic
today = datetime.date.today()
umur_hari = (today - lahir).days
umur_tahun = umur_hari // 365
print(f"Umur: {umur_tahun} tahun")

# Format date
formatted = now.strftime("%d/%m/%Y %H:%M:%S")
print(f"Formatted: {formatted}")

# Parse string to date
date_str = "2025-12-31"
date_obj = datetime.datetime.strptime(date_str, "%Y-%m-%d")
print(f"Parsed: {date_obj}")`}</CodeBlock>


<h3 id="module-os">Module os</h3>
<CodeBlock language="">{`import os

# Current working directory
print(f"CWD: {os.getcwd()}")

# List files/folders
print(f"Files: {os.listdir('.')[:5]}")  # First 5

# Check existence
print(f"File exists: {os.path.exists('my_module.py')}")
print(f"Is file: {os.path.isfile('my_module.py')}")
print(f"Is directory: {os.path.isdir('.')}")

# Path operations
filepath = "/home/user/documents/file.txt"
print(f"Dirname: {os.path.dirname(filepath)}")
print(f"Basename: {os.path.basename(filepath)}")
print(f"Split: {os.path.split(filepath)}")
print(f"Splitext: {os.path.splitext(filepath)}")

# Join paths (OS-independent)
path = os.path.join("folder", "subfolder", "file.txt")
print(f"Joined path: {path}")

# Environment variables
print(f"PATH: {os.environ.get('PATH', 'Not found')[:50]}...")`}</CodeBlock>


<h3 id="module-sys">Module sys</h3>
<CodeBlock language="">{`import sys

# Python version
print(f"Python version: {sys.version}")

# Platform
print(f"Platform: {sys.platform}")

# Command line arguments
print(f"Script name: {sys.argv[0]}")
print(f"Arguments: {sys.argv[1:]}")

# Exit program
# sys.exit("Program terminated")

# Module search path
print(f"Module paths: {sys.path[:3]}")`}</CodeBlock>


<h3 id="package-kumpulan-modul">Package (Kumpulan Modul)</h3>
<p>Package adalah cara untuk mengorganisir banyak modul dalam direktori.</p>


<h3 id="struktur-package">Struktur Package</h3>
<CodeBlock language="">{`my_package/
    __init__.py
    geometry.py
    temperature.py
    utils.py`}</CodeBlock>


<h3 id="buat-file-file-package">Buat File-file Package</h3>
<CodeBlock language="">{`"""Modul untuk operasi geometri."""

PI = 3.14159

def luas_lingkaran(radius):
    return PI * radius ** 2

def luas_persegi(sisi):
    return sisi ** 2

def luas_segitiga(alas, tinggi):
    return 0.5 * alas * tinggi`}</CodeBlock>

<CodeBlock language="">{`"""Modul untuk konversi suhu."""

def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

def celsius_to_kelvin(c):
    return c + 273.15`}</CodeBlock>

<CodeBlock language="">{`"""
My Package - Collection of utility modules.
"""

from .geometry import luas_lingkaran, luas_persegi
from .temperature import celsius_to_fahrenheit

__version__ = "1.0.0"
__all__ = ["luas_lingkaran", "luas_persegi", "celsius_to_fahrenheit"]`}</CodeBlock>

<p>__init__.py</p>

<p>File __init__.py membuat direktori menjadi package. File ini bisa kosong atau berisi initialization code untuk package.</p>


<h3 id="gunakan-package">Gunakan Package</h3>
<CodeBlock language="">{`# Import dari package
from my_package import luas_lingkaran, celsius_to_fahrenheit

# Atau import module dalam package
from my_package.geometry import luas_segitiga
from my_package.temperature import celsius_to_kelvin

# Gunakan functions
print(luas_lingkaran(5))
print(celsius_to_fahrenheit(25))
print(luas_segitiga(10, 5))
print(celsius_to_kelvin(0))`}</CodeBlock>


<h3 id="module-attributes">Module Attributes</h3>
<p>Setiap modul memiliki beberapa attribute built-in:</p>

<CodeBlock language="">{`import my_module

# Nama modul
print(my_module.__name__)

# Docstring modul
print(my_module.__doc__)

# File path modul
print(my_module.__file__)

# List semua attributes dalam modul
print(dir(my_module))

# Check if module is main program
if __name__ == "__main__":
    print("This is the main program")`}</CodeBlock>


<h3 id="if-name-main">if __name__ == "__main__"</h3>
<p>Pattern penting untuk membuat modul yang bisa diimport atau dijalankan langsung:</p>

<CodeBlock language="">{`"""Modul contoh dengan main block."""

def greet(name):
    return f"Hello, {name}!"

def main():
    """Function yang dijalankan jika module dirun langsung."""
    print("Running as main program")
    print(greet("Python"))
    print(greet("World"))

# Hanya dijalankan jika module dirun langsung,
# tidak saat di-import
if __name__ == "__main__":
    main()`}</CodeBlock>

<p>__name__ Explained</p>

<ul>
  <li>Saat module dirun langsung: __name__ == "__main__"</li>
  <li>Saat module di-import: __name__ == "module_name"</li>
</ul>

<p>Ini memungkinkan Kalian menulis test code atau demo di dalam module yang tidak akan dijalankan saat module di-import.</p>


<h3 id="installing-external-packages">Installing External Packages</h3>
<p>Python memiliki ribuan external packages yang bisa diinstall dengan pip:</p>

<CodeBlock language="">{`# Install package
pip install requests
pip install pandas
pip install numpy

# Install specific version
pip install requests==2.28.0

# Upgrade package
pip install --upgrade requests

# Uninstall
pip uninstall requests

# List installed packages
pip list

# Show package info
pip show requests

# Requirements file
pip freeze > requirements.txt
pip install -r requirements.txt`}</CodeBlock>


<h3 id="contoh-penggunaan-external-package">Contoh Penggunaan External Package</h3>
<CodeBlock language="">{`# Install first: pip install requests
import requests

# HTTP GET request
response = requests.get("https://api.github.com")

if response.status_code == 200:
    data = response.json()
    print(f"Response: {data}")
else:
    print(f"Error: {response.status_code}")

# POST request
payload = {"key": "value"}
response = requests.post("https://httpbin.org/post", json=payload)
print(response.json())`}</CodeBlock>


<h3 id="best-practices">Best Practices</h3>
<p>Module Best Practices</p>

<ul>
  <li>One Module, One Purpose - Setiap modul fokus pada satu hal</li>
  <li>Clear Names - Gunakan nama yang deskriptif</li>
  <li>Documentation - Tambahkan docstring di awal module</li>
  <li>Avoid import * - Import specific items atau seluruh module</li>
  <li>if __name__ == "__main__" - Untuk test/demo code</li>
  <li>Organize Imports - Standard library → Third-party → Local</li>
  <li>Virtual Environments - Gunakan venv untuk isolasi dependencies</li>
</ul>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>
Buat modul math_operations.py dengan fungsi untuk:

Luas dan keliling berbagai bentuk geometri
Konversi satuan (panjang, berat, volume)
Operasi statistik sederhana (mean, median, mode)

</li>
  <li>Luas dan keliling berbagai bentuk geometri</li>
  <li>Konversi satuan (panjang, berat, volume)</li>
  <li>Operasi statistik sederhana (mean, median, mode)</li>
  <li>
Buat modul string_utils.py dengan fungsi untuk:

Capitalize first letter of each word
Count word frequency
Reverse string
Check palindrome

</li>
  <li>Capitalize first letter of each word</li>
  <li>Count word frequency</li>
  <li>Reverse string</li>
  <li>Check palindrome</li>
  <li>
Buat package sederhana dengan multiple modules
</li>
  <li>
Explore modul datetime dan buat program untuk:

Menghitung umur dalam tahun, bulan, hari
Countdown ke tanggal tertentu
Schedule reminder

</li>
  <li>Menghitung umur dalam tahun, bulan, hari</li>
  <li>Countdown ke tanggal tertentu</li>
  <li>Schedule reminder</li>
  <li>
Practice dengan modul random:

Random password generator
Dice simulator
Card deck shuffler

</li>
  <li>Random password generator</li>
  <li>Dice simulator</li>
  <li>Card deck shuffler</li>
</ul>

<p>Buat modul math_operations.py dengan fungsi untuk:</p>

<ul>
  <li>Luas dan keliling berbagai bentuk geometri</li>
  <li>Konversi satuan (panjang, berat, volume)</li>
  <li>Operasi statistik sederhana (mean, median, mode)</li>
</ul>

<p>Buat modul string_utils.py dengan fungsi untuk:</p>

<ul>
  <li>Capitalize first letter of each word</li>
  <li>Count word frequency</li>
  <li>Reverse string</li>
  <li>Check palindrome</li>
</ul>

<p>Buat package sederhana dengan multiple modules</p>

<p>Explore modul datetime dan buat program untuk:</p>

<ul>
  <li>Menghitung umur dalam tahun, bulan, hari</li>
  <li>Countdown ke tanggal tertentu</li>
  <li>Schedule reminder</li>
</ul>

<p>Practice dengan modul random:</p>

<ul>
  <li>Random password generator</li>
  <li>Dice simulator</li>
  <li>Card deck shuffler</li>
</ul>

      <h2 id="tugas-praktikum">Tugas: Dasar Pemrograman Python</h2>
      <p>Buat program kalkulator interaktif atau pengolah data sederhana yang mengimplementasikan variabel, struktur kendali (if-else dan loop), fungsi modular, dan struktur data (list &amp; dictionary).</p>

      <h2 id="format-pengumpulan">Format Pengumpulan</h2>
      <ul>
        <li>Folder: <code>[NAMA]_[NIM]_pertemuan4</code></li>
        <li><strong>Deadline:</strong> Mengikuti instruksi asisten praktikum.</li>
      </ul>

      <SubmissionBox pertemuan={4} />
    </>
  );
}
