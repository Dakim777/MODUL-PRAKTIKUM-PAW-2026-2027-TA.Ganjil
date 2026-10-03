import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 5: Python OOP
export default function Pertemuan5() {
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
      <h2 id="dasar-teori">Python OOP</h2>

<h3>Pengenalan OOP</h3>
<p>Memahami konsep dasar dan filosofi Object-Oriented Programming</p>


<h3>Apa itu Object-Oriented Programming?</h3>
<p>Object-Oriented Programming (OOP) adalah paradigma pemrograman yang didasarkan pada konsep "objek", yang dapat berisi data dalam bentuk field (disebut juga atribut atau properti) dan kode dalam bentuk prosedur (disebut juga metode).</p>

<p>Definisi OOP</p>

<p>OOP adalah cara mengorganisir program dengan menggunakan objek yang merepresentasikan entitas di dunia nyata. Setiap objek memiliki karakteristik (atribut) dan kemampuan (metode).</p>


<h3>Empat Pilar OOP</h3>

<h3>1. Encapsulation (Enkapsulasi)</h3>
<p>Encapsulation adalah prinsip menyembunyikan detail implementasi internal dari pengguna eksternal. Ini memungkinkan kita untuk:</p>

<ul>
  <li>Melindungi data dari akses yang tidak sah</li>
  <li>Mengontrol bagaimana data diakses dan dimodifikasi</li>
  <li>Mengurangi kompleksitas sistem</li>
</ul>

<p>Contoh Analogi:
Ketika Kalian menggunakan smartphone, Kalian tidak perlu tahu bagaimana prosesor bekerja atau bagaimana data disimpan. Kalian hanya perlu tahu cara menggunakan tombol dan interface yang tersedia.</p>


<h3>2. Inheritance (Pewarisan)</h3>
<p>Inheritance memungkinkan kita membuat class baru berdasarkan class yang sudah ada. Class baru akan mewarisi atribut dan metode dari class induk.</p>

<p>Manfaat:</p>

<ul>
  <li>Reusability: Mengurangi duplikasi kode</li>
  <li>Extensibility: Mudah menambahkan fitur baru</li>
  <li>Maintainability: Perubahan di class induk berlaku untuk semua turunannya</li>
</ul>

<p>Contoh Analogi:
Seperti hubungan orang tua dan anak. Anak mewarisi ciri-ciri dari orang tua (seperti warna mata, tinggi badan), tetapi juga memiliki karakteristik unik mereka sendiri.</p>


<h3>3. Polymorphism (Polimorfisme)</h3>
<p>Polymorphism memungkinkan objek dari berbagai class untuk merespons method yang sama dengan cara yang berbeda.</p>

<p>Jenis-jenis Polymorphism:</p>

<ul>
  <li>Method Overriding: Subclass memberikan implementasi spesifik untuk method yang sudah didefinisikan di superclass</li>
  <li>Method Overloading: Beberapa method dengan nama sama tapi parameter berbeda (Python tidak support overloading secara native)</li>
</ul>

<p>Contoh Analogi:
Tombol "Start" bisa berarti berbeda untuk berbagai perangkat. Di mobil, tombol start menghidupkan mesin. Di komputer, tombol start membuka menu. Namanya sama, tapi perilakunya berbeda.</p>


<h3>4. Abstraction (Abstraksi)</h3>
<p>Abstraction adalah proses menyembunyikan detail kompleks dan hanya menampilkan fitur yang penting. Ini membantu mengurangi kompleksitas program.</p>

<p>Contoh Analogi:
Ketika Kalian menyetir mobil, Kalian hanya perlu tahu cara menggunakan setir, pedal gas, dan rem. Kalian tidak perlu memahami bagaimana mesin pembakaran internal bekerja atau bagaimana transmisi mengubah gigi.</p>


<h3>Keuntungan Menggunakan OOP</h3>

<h3>1. Modular</h3>
<p>Program dibagi menjadi objek-objek yang mandiri. Setiap objek memiliki tanggung jawab spesifik, membuat kode lebih terorganisir.</p>


<h3>2. Reusability</h3>
<p>Class yang sudah dibuat dapat digunakan kembali dalam program yang berbeda atau diwariskan untuk membuat class baru.</p>


<h3>3. Maintainability</h3>
<p>Lebih mudah untuk memelihara dan mengupdate kode. Perubahan pada satu class tidak akan mempengaruhi class lain (jika dirancang dengan baik).</p>


<h3>4. Scalability</h3>
<p>Mudah untuk menambahkan fitur baru tanpa mengubah kode yang sudah ada.</p>


<h3>5. Data Security</h3>
<p>Dengan encapsulation, data dapat dilindungi dari akses eksternal yang tidak diinginkan.</p>


<h3>Kapan Menggunakan OOP?</h3>
<p>OOP sangat cocok untuk:</p>

<ul>
  <li>Aplikasi besar dan kompleks: Ketika program memiliki banyak komponen yang saling berinteraksi</li>
  <li>Proyek tim: Memudahkan kolaborasi karena setiap anggota dapat bekerja pada class yang berbeda</li>
  <li>Program yang memerlukan maintainability: Ketika kode perlu diupdate atau diperbaiki secara berkala</li>
  <li>Sistem yang memodelkan dunia nyata: Ketika program merepresentasikan entitas nyata (misalnya: sistem perpustakaan, e-commerce)</li>
</ul>

<p>OOP vs Procedural</p>

<p>Procedural Programming fokus pada fungsi dan urutan eksekusi. Cocok untuk program kecil dan sederhana.</p>

<p>Object-Oriented Programming fokus pada objek dan interaksi antar objek. Cocok untuk program besar dan kompleks.</p>

<p>Keduanya memiliki tempat masing-masing. Pilih paradigma yang sesuai dengan kebutuhan proyek Kalian.</p>


<h3>Python dan OOP</h3>
<p>Python adalah bahasa yang mendukung multiple paradigm:</p>

<ul>
  <li>Procedural</li>
  <li>Object-Oriented</li>
  <li>Functional</li>
</ul>

<p>Everything is an Object</p>

<p>Di Python, segalanya adalah objek! Integer, string, list, bahkan function adalah objek. Ini membuat Python sangat fleksibel dan powerful untuk OOP.</p>


<h3>Contoh Sederhana</h3>
<p>Bahkan ketika Kalian menulis kode Python sederhana, Kalian sebenarnya sudah menggunakan OOP:</p>

<CodeBlock language="">{`# String adalah objek dari class str
text = "Hello World"
print(text.upper())  # Memanggil method upper() dari class str
print(text.split())  # Memanggil method split() dari class str

# List adalah objek dari class list
numbers = [1, 2, 3]
numbers.append(4)    # Memanggil method append() dari class list
print(numbers.count(2))  # Memanggil method count() dari class list`}</CodeBlock>

<p>Pada contoh di atas, text dan numbers adalah objek, dan upper(), split(), append(), count() adalah metode yang dimiliki oleh objek tersebut.</p>


<h3>Perbandingan: Procedural vs OOP</h3>

<h3>Pendekatan Procedural</h3>
<CodeBlock language="">{`# Data terpisah dari fungsi
mahasiswa_nama = "Budi"
mahasiswa_nim = "TI12345"
mahasiswa_jurusan = "Teknik Informatika"

def display_mahasiswa(nama, nim, jurusan):
    print(f"Nama: {nama}")
    print(f"NIM: {nim}")
    print(f"Jurusan: {jurusan}")

display_mahasiswa(mahasiswa_nama, mahasiswa_nim, mahasiswa_jurusan)`}</CodeBlock>


<h3>Pendekatan OOP</h3>
<CodeBlock language="">{`# Data dan fungsi tergabung dalam class
class Mahasiswa:
    def __init__(self, nama, nim, jurusan):
        self.nama = nama
        self.nim = nim
        self.jurusan = jurusan

    def display_info(self):
        print(f"Nama: {self.nama}")
        print(f"NIM: {self.nim}")
        print(f"Jurusan: {self.jurusan}")

# Membuat objek
mhs = Mahasiswa("Budi", "TI12345", "Teknik Informatika")
mhs.display_info()`}</CodeBlock>

<p>Keuntungan Pendekatan OOP</p>

<p>Pada pendekatan OOP, data dan fungsi yang berkaitan digabungkan dalam satu unit (class). Ini membuat kode lebih terorganisir, mudah dipahami, dan mudah dipelihara, terutama ketika program menjadi lebih kompleks.</p>


<h3>Kesimpulan</h3>
<p>Object-Oriented Programming adalah paradigma yang powerful untuk membangun aplikasi yang kompleks, scalable, dan maintainable. Dengan memahami empat pilar OOP (Encapsulation, Inheritance, Polymorphism, Abstraction), Kalian dapat menulis kode yang lebih terstruktur dan efisien.</p>

<p>Langkah Selanjutnya</p>

<p>Sekarang setelah memahami konsep dasar OOP, mari kita mulai implementasinya dengan mempelajari cara membuat class dan object di Python.</p>

<p>Praktikum Python OOP</p>

<p>Pemrograman Berorientasi Objek dengan Python</p>

<p>Class dan Object</p>

<p>Membuat class, object, atribut, dan method dalam Python</p>


<h3>Class dan Object</h3>
<p>Membuat class, object, atribut, dan method dalam Python</p>


<h3>Apa itu Class?</h3>
<p>Class adalah blueprint atau template untuk membuat objek. Class mendefinisikan atribut (data) dan metode (fungsi) yang akan dimiliki oleh objek.</p>

<p>Analogi</p>

<p>Class seperti blueprint rumah. Blueprint mendefinisikan struktur rumah: berapa kamar, di mana pintu, dll. Dari satu blueprint, Kalian bisa membangun banyak rumah (objek) dengan struktur yang sama tapi mungkin warna atau furnitur berbeda.</p>


<h3>Apa itu Object?</h3>
<p>Object adalah instance dari sebuah class. Ketika Kalian membuat objek dari class, Kalian membuat sebuah entitas konkret berdasarkan blueprint yang didefinisikan oleh class.</p>


<h3>Membuat Class Sederhana</h3>

<h3>Sintaks Dasar Class</h3>
<p>Class didefinisikan menggunakan keyword class diikuti nama class (biasanya menggunakan PascalCase):</p>

<CodeBlock language="">{`class Mahasiswa:
    pass  # Class kosong untuk sementara`}</CodeBlock>

<p>Naming Convention</p>

<p>Nama class menggunakan PascalCase (huruf pertama setiap kata kapital tanpa underscore). Contoh: Mahasiswa, KaryawanTetap, UserProfile.</p>


<h3>Menambahkan Atribut Class</h3>
<p>Atribut class adalah variabel yang dimiliki bersama oleh semua instance dari class:</p>

<CodeBlock language="">{`class Mahasiswa:
    # Atribut class (shared by all instances)
    jurusan = "Teknik Informatika"
    universitas = "Institut Teknologi Sumatera"`}</CodeBlock>

<p>Atribut class dapat diakses tanpa membuat instance:</p>

<CodeBlock language="">{`print(Mahasiswa.jurusan)  # Output: Teknik Informatika
print(Mahasiswa.universitas)  # Output: Institut Teknologi Sumatera`}</CodeBlock>


<h3>Constructor: Method __init__</h3>
<p>Constructor adalah method khusus yang dipanggil otomatis ketika objek dibuat. Di Python, constructor didefinisikan dengan method __init__:</p>

<CodeBlock language="">{`class Mahasiswa:
    # Atribut class
    jurusan = "Teknik Informatika"

    # Constructor
    def __init__(self, nama, nim):
        # Atribut instance
        self.nama = nama
        self.nim = nim
        self.aktif = True  # Nilai default`}</CodeBlock>

<p>Parameter self</p>

<p>self adalah referensi ke instance objek yang sedang dibuat. Ini HARUS menjadi parameter pertama di setiap instance method. Python akan otomatis mengisi parameter ini, jadi Kalian tidak perlu menyediakannya saat memanggil method.</p>


<h3>Membuat Object (Instance)</h3>
<p>Untuk membuat object dari class, panggil class seperti memanggil function:</p>

<CodeBlock language="">{`# Membuat object
mhs1 = Mahasiswa("Budi Santoso", "TI12345")
mhs2 = Mahasiswa("Ani Wijaya", "TI67890")

# Mengakses atribut
print(mhs1.nama)  # Output: Budi Santoso
print(mhs1.nim)   # Output: TI12345
print(mhs1.jurusan)  # Output: Teknik Informatika

print(mhs2.nama)  # Output: Ani Wijaya
print(mhs2.nim)   # Output: TI67890`}</CodeBlock>

<p>Instance vs Class Attribute</p>

<p>Instance attribute (self.nama, self.nim): Unik untuk setiap object.
Class attribute (jurusan): Dibagikan oleh semua object dari class yang sama.</p>


<h3>Menambahkan Method</h3>
<p>Method adalah fungsi yang didefinisikan di dalam class dan dapat dipanggil oleh objek:</p>

<CodeBlock language="">{`class Mahasiswa:
    jurusan = "Teknik Informatika"

    def __init__(self, nama, nim):
        self.nama = nama
        self.nim = nim
        self.ipk = 0.0

    # Method untuk menampilkan informasi
    def display_info(self):
        print(f"Nama: {self.nama}")
        print(f"NIM: {self.nim}")
        print(f"Jurusan: {self.jurusan}")
        print(f"IPK: {self.ipk}")

    # Method untuk mengubah IPK
    def set_ipk(self, ipk_baru):
        if 0.0 <= ipk_baru <= 4.0:
            self.ipk = ipk_baru
            print(f"IPK berhasil diubah menjadi {ipk_baru}")
        else:
            print("IPK harus antara 0.0 dan 4.0")

    # Method untuk cek status kelulusan
    def is_lulus(self):
        return self.ipk >= 2.75

# Menggunakan method
mhs1 = Mahasiswa("Budi Santoso", "TI12345")
mhs1.display_info()
mhs1.set_ipk(3.5)
print(f"Status kelulusan: {'Lulus' if mhs1.is_lulus() else 'Tidak Lulus'}")`}</CodeBlock>


<h3>Contoh Lengkap</h3>
<p>Mari kita lihat contoh lengkap implementasi class dan object:</p>

<CodeBlock language="">{`class Mahasiswa:
    # Atribut Class (shared by all instances)
    jurusan = "Teknik Informatika"

    # Constructor/initializer
    def __init__(self, nama, nim):
        # Atribut Instance (unique for each instance)
        self.nama = nama
        self.nim = nim
        self.ipk = 0.0
        self.mata_kuliah = []

    # Method untuk menampilkan info
    def display_info(self):
        print(f"\n{'='*40}")
        print(f"Nama: {self.nama}")
        print(f"NIM: {self.nim}")
        print(f"Jurusan: {self.jurusan}")
        print(f"IPK: {self.ipk}")
        if self.mata_kuliah:
            print(f"Mata Kuliah: {', '.join(self.mata_kuliah)}")
        print(f"{'='*40}")

    # Method untuk mengubah nama
    def update_nama(self, nama_baru):
        self.nama = nama_baru
        print(f"Nama berhasil diubah menjadi {nama_baru}")

    # Method untuk set IPK dengan validasi
    def set_ipk(self, ipk_baru):
        if 0.0 <= ipk_baru <= 4.0:
            self.ipk = ipk_baru
            print(f"IPK berhasil diset: {ipk_baru}")
        else:
            print("Error: IPK harus antara 0.0 dan 4.0")

    # Method untuk menambah mata kuliah
    def tambah_matkul(self, nama_matkul):
        self.mata_kuliah.append(nama_matkul)
        print(f"Mata kuliah '{nama_matkul}' ditambahkan")

    # Method untuk cek status
    def get_status(self):
        if self.ipk >= 3.5:
            return "Cum Laude"
        elif self.ipk >= 2.75:
            return "Lulus"
        else:
            return "Belum Lulus"

# Membuat beberapa object
print("Membuat mahasiswa...")
mhs1 = Mahasiswa("Budi Santoso", "TI12345")
mhs2 = Mahasiswa("Ani Wijaya", "TI67890")

# Menggunakan method
mhs1.set_ipk(3.8)
mhs1.tambah_matkul("Pemrograman Web")
mhs1.tambah_matkul("Basis Data")
mhs1.display_info()
print(f"Status: {mhs1.get_status()}")

mhs2.set_ipk(3.2)
mhs2.tambah_matkul("Algoritma")
mhs2.display_info()
print(f"Status: {mhs2.get_status()}")

# Mengubah class attribute (berlaku untuk semua instance)
print("\nMengubah jurusan...")
Mahasiswa.jurusan = "Informatika"
mhs1.display_info()
mhs2.display_info()`}</CodeBlock>


<h3>Perbedaan Class Attribute vs Instance Attribute</h3>
<CodeBlock language="">{`class Mahasiswa:
    # Class attribute - shared by all instances
    jurusan = "Teknik Informatika"
    total_mahasiswa = 0

    def __init__(self, nama):
        self.nama = nama
        Mahasiswa.total_mahasiswa += 1

# Semua instance berbagi class attribute yang sama
mhs1 = Mahasiswa("Budi")
mhs2 = Mahasiswa("Ani")

print(mhs1.jurusan)  # Teknik Informatika
print(mhs2.jurusan)  # Teknik Informatika
print(Mahasiswa.total_mahasiswa)  # 2

# Mengubah class attribute mempengaruhi semua instance
Mahasiswa.jurusan = "Informatika"
print(mhs1.jurusan)  # Informatika
print(mhs2.jurusan)  # Informatika`}</CodeBlock>

<CodeBlock language="">{`class Mahasiswa:
    def __init__(self, nama, nim):
        # Instance attributes - unique to each instance
        self.nama = nama
        self.nim = nim

# Setiap instance memiliki nilai yang berbeda
mhs1 = Mahasiswa("Budi", "TI123")
mhs2 = Mahasiswa("Ani", "TI456")

print(mhs1.nama)  # Budi
print(mhs2.nama)  # Ani

# Mengubah instance attribute hanya mempengaruhi instance tersebut
mhs1.nama = "Budi Santoso"
print(mhs1.nama)  # Budi Santoso
print(mhs2.nama)  # Ani (tidak berubah)`}</CodeBlock>


<h3>Special Methods (Dunder Methods)</h3>
<p>Python memiliki special methods yang diawali dan diakhiri dengan double underscore (__). Method ini memiliki perilaku khusus:</p>

<CodeBlock language="">{`class Mahasiswa:
    def __init__(self, nama, nim):
        self.nama = nama
        self.nim = nim

    # Method untuk representasi string (debugging)
    def __repr__(self):
        return f"Mahasiswa(nama='{self.nama}', nim='{self.nim}')"

    # Method untuk string yang user-friendly
    def __str__(self):
        return f"{self.nama} ({self.nim})"

    # Method untuk perbandingan
    def __eq__(self, other):
        if isinstance(other, Mahasiswa):
            return self.nim == other.nim
        return False

# Penggunaan
mhs1 = Mahasiswa("Budi", "TI123")
mhs2 = Mahasiswa("Ani", "TI456")
mhs3 = Mahasiswa("Budi Copy", "TI123")

print(str(mhs1))   # Budi (TI123)
print(repr(mhs1))  # Mahasiswa(nama='Budi', nim='TI123')

print(mhs1 == mhs2)  # False
print(mhs1 == mhs3)  # True (NIM sama)`}</CodeBlock>


<h3>Praktik Terbaik</h3>

<h3>1. Naming Conventions</h3>
<CodeBlock language="">{`# Good - PascalCase for class names
class UserProfile:
    pass

class OrderManager:
    pass

# Avoid - lowercase or snake_case for class names
class user_profile:  # Avoid
    pass`}</CodeBlock>


<h3>2. Single Responsibility Principle</h3>
<p>Setiap class harus memiliki satu tanggung jawab utama:</p>

<CodeBlock language="">{`# Good - Each class has single responsibility
class Mahasiswa:
    def __init__(self, nama, nim):
        self.nama = nama
        self.nim = nim

class NilaiManager:
    def hitung_ipk(self, nilai_list):
        return sum(nilai_list) / len(nilai_list)

# Avoid - Class doing too many things
class Mahasiswa:
    def __init__(self, nama, nim):
        self.nama = nama
        self.nim = nim

    def hitung_ipk(self):
        pass

    def cetak_transkrip(self):
        pass

    def kelola_pembayaran(self):  # Not mahasiswa's responsibility
        pass`}</CodeBlock>


<h3>3. Documentation</h3>
<p>Gunakan docstring untuk mendokumentasikan class dan method:</p>

<CodeBlock language="">{`class Mahasiswa:
    """
    Class untuk merepresentasikan data mahasiswa.

    Attributes:
        nama (str): Nama lengkap mahasiswa
        nim (str): Nomor Induk Mahasiswa
        ipk (float): Indeks Prestasi Kumulatif
    """

    def __init__(self, nama, nim):
        """
        Inisialisasi objek Mahasiswa.

        Args:
            nama (str): Nama lengkap mahasiswa
            nim (str): Nomor Induk Mahasiswa
        """
        self.nama = nama
        self.nim = nim
        self.ipk = 0.0

    def set_ipk(self, ipk_baru):
        """
        Set IPK mahasiswa dengan validasi.

        Args:
            ipk_baru (float): Nilai IPK baru (0.0 - 4.0)

        Raises:
            ValueError: Jika IPK di luar range 0.0 - 4.0
        """
        if 0.0 <= ipk_baru <= 4.0:
            self.ipk = ipk_baru
        else:
            raise ValueError("IPK harus antara 0.0 dan 4.0")`}</CodeBlock>


<h3>Latihan</h3>
<ul>
  <li>Buat class Buku dengan atribut judul, penulis, tahun_terbit, dan harga</li>
  <li>Tambahkan method untuk menampilkan informasi buku</li>
  <li>Tambahkan method untuk memberikan diskon pada harga</li>
  <li>Buat beberapa object dari class Buku dan test method-nya</li>
  <li>Implementasikan __str__ dan __repr__ method</li>
</ul>

<p>Langkah Selanjutnya</p>

<p>Setelah memahami class dan object dasar, kita akan mempelajari Inheritance untuk membuat class yang mewarisi atribut dan method dari class lain.</p>

<p>Pengenalan OOP</p>

<p>Memahami konsep dasar dan filosofi Object-Oriented Programming</p>

<p>Inheritance (Pewarisan)</p>

<p>Memahami konsep pewarisan class dan method overriding</p>


<h3>Inheritance (Pewarisan)</h3>
<p>Memahami konsep pewarisan class dan method overriding</p>


<h3>Apa itu Inheritance?</h3>
<p>Inheritance (pewarisan) adalah mekanisme di mana sebuah class baru dapat mewarisi atribut dan method dari class yang sudah ada. Class yang diwarisi disebut parent class (superclass), dan class yang mewarisi disebut child class (subclass).</p>

<p>Keuntungan Inheritance</p>

<ul>
  <li>Code Reusability: Menghindari duplikasi kode</li>
  <li>Extensibility: Mudah menambahkan fitur baru tanpa mengubah class yang ada</li>
  <li>Maintainability: Perubahan di parent class otomatis berlaku untuk child class</li>
  <li>Logical Hierarchy: Merepresentasikan hubungan "is-a" (adalah)</li>
</ul>


<h3>Konsep Dasar Inheritance</h3>

<h3>Terminologi</h3>
<ul>
  <li>Parent Class / Superclass / Base Class: Class yang diwarisi</li>
  <li>Child Class / Subclass / Derived Class: Class yang mewarisi</li>
  <li>Method Overriding: Mengubah implementasi method dari parent class</li>
</ul>


<h3>Hubungan "is-a"</h3>
<p>Inheritance merepresentasikan hubungan "is-a":</p>

<ul>
  <li>Mobil is-a Kendaraan</li>
  <li>Motor is-a Kendaraan</li>
  <li>Admin is-a User</li>
  <li>Mahasiswa is-a Person</li>
</ul>


<h3>Implementasi Inheritance</h3>

<h3>Membuat Parent Class</h3>
<p>Pertama, buat class dasar yang akan diwarisi:</p>

<CodeBlock language="">{`class Kendaraan:
    """Parent class untuk semua kendaraan"""

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
            print(f"Odometer diupdate ke {km} km")
        else:
            print("Tidak dapat menurunkan odometer!")`}</CodeBlock>


<h3>Membuat Child Class</h3>
<p>Buat child class yang mewarisi dari parent class menggunakan sintaks class ChildClass(ParentClass):</p>

<CodeBlock language="">{`class Mobil(Kendaraan):
    """Child class yang mewarisi dari Kendaraan"""

    def __init__(self, merek, tahun, tipe):
        # Memanggil constructor parent class
        super().__init__(merek, tahun)
        # Atribut tambahan khusus untuk Mobil
        self.tipe = tipe
        self.bensin = 100

    # Method tambahan khusus untuk Mobil
    def isi_bensin(self, liter):
        self.bensin += liter
        return f"Bensin diisi {liter} liter. Total: {self.bensin} liter"`}</CodeBlock>

<p>super() Function</p>

<p>super() digunakan untuk memanggil method dari parent class. Paling sering digunakan untuk memanggil __init__ parent class agar atribut parent dapat diinisialisasi.</p>


<h3>Menggunakan Child Class</h3>
<p>Child class memiliki akses ke semua atribut dan method dari parent class:</p>

<CodeBlock language="">{`# Membuat instance Mobil
mobil1 = Mobil("Toyota", 2022, "SUV")

# Menggunakan method dari parent class
print(mobil1.deskripsi())  # Toyota (2022)
mobil1.update_odometer(1500)
print(mobil1.baca_odometer())  # Kendaraan ini telah berjalan sejauh 1500 kilometer

# Menggunakan method khusus Mobil
print(mobil1.isi_bensin(20))  # Bensin diisi 20 liter. Total: 120 liter`}</CodeBlock>


<h3>Method Overriding</h3>
<p>Child class dapat mengganti (override) method dari parent class:</p>

<CodeBlock language="">{`class Mobil(Kendaraan):
    def __init__(self, merek, tahun, tipe):
        super().__init__(merek, tahun)
        self.tipe = tipe
        self.bensin = 100

    # Override method deskripsi
    def deskripsi(self):
        # Memanggil method parent dengan super()
        base_desc = super().deskripsi()
        # Menambahkan informasi tambahan
        return f"{base_desc} - {self.tipe}"

    def isi_bensin(self, liter):
        self.bensin += liter
        return f"Bensin diisi {liter} liter. Total: {self.bensin} liter"

# Test method overriding
mobil1 = Mobil("Toyota", 2022, "SUV")
print(mobil1.deskripsi())  # Toyota (2022) - SUV`}</CodeBlock>


<h3>Contoh Lengkap</h3>
<p>Mari lihat contoh lengkap dengan multiple child classes:</p>

<CodeBlock language="">{`# Parent Class
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

    def jalan(self, km):
        self.odometer += km
        print(f"Kendaraan berjalan {km} km")

# Child Class 1: Mobil
class Mobil(Kendaraan):
    def __init__(self, merek, tahun, tipe):
        super().__init__(merek, tahun)
        self.tipe = tipe
        self.bensin = 100

    def deskripsi(self):
        base_desc = super().deskripsi()
        return f"{base_desc} - {self.tipe}"

    def isi_bensin(self, liter):
        self.bensin += liter
        return f"Bensin diisi {liter} liter. Total: {self.bensin} liter"

    def jalan(self, km):
        # Override dengan konsumsi bensin
        super().jalan(km)
        konsumsi = km / 10  # 10 km per liter
        self.bensin -= konsumsi
        print(f"Bensin tersisa: {self.bensin:.1f} liter")

# Child Class 2: Motor
class Motor(Kendaraan):
    def __init__(self, merek, tahun, cc):
        super().__init__(merek, tahun)
        self.cc = cc

    def deskripsi(self):
        return f"{self.merek} ({self.tahun}) - {self.cc}cc"

    def wheelie(self):
        return f"{self.merek} melakukan wheelie!"

# Child Class 3: Truk (warisan dari Mobil)
class Truk(Mobil):
    def __init__(self, merek, tahun, kapasitas):
        # Truk adalah SUV dalam konteks ini
        super().__init__(merek, tahun, "Truck")
        self.kapasitas = kapasitas
        self.muatan = 0

    def muat_barang(self, berat):
        if self.muatan + berat <= self.kapasitas:
            self.muatan += berat
            print(f"Barang seberat {berat} kg dimuat")
            print(f"Total muatan: {self.muatan}/{self.kapasitas} kg")
        else:
            print(f"Kapasitas tidak cukup! Maksimal {self.kapasitas} kg")

# Penggunaan
print("=== Membuat Kendaraan ===")
kendaraan1 = Kendaraan("Generic", 2020)
mobil1 = Mobil("Toyota", 2022, "SUV")
motor1 = Motor("Honda", 2021, 150)
truk1 = Truk("Isuzu", 2023, 5000)

print("\n=== Deskripsi ===")
print(kendaraan1.deskripsi())
print(mobil1.deskripsi())
print(motor1.deskripsi())
print(truk1.deskripsi())

print("\n=== Method Parent Class ===")
mobil1.update_odometer(1500)
print(mobil1.baca_odometer())

print("\n=== Method Child Class ===")
print(mobil1.isi_bensin(20))
print(motor1.wheelie())

print("\n=== Method Override ===")
mobil1.jalan(50)
motor1.jalan(30)

print("\n=== Multi-level Inheritance ===")
truk1.muat_barang(3000)
truk1.muat_barang(2500)
print(truk1.isi_bensin(50))`}</CodeBlock>


<h3>Multiple Inheritance</h3>
<p>Python mendukung multiple inheritance, di mana sebuah class dapat mewarisi dari beberapa parent class:</p>

<CodeBlock language="">{`class Elektronik:
    def __init__(self, daya):
        self.daya = daya

    def nyalakan(self):
        return f"Perangkat menyala dengan daya {self.daya}W"

class Portable:
    def __init__(self, berat):
        self.berat = berat

    def bawa(self):
        return f"Membawa perangkat dengan berat {self.berat} kg"

# Multiple inheritance
class Laptop(Elektronik, Portable):
    def __init__(self, merek, daya, berat):
        Elektronik.__init__(self, daya)
        Portable.__init__(self, berat)
        self.merek = merek

    def info(self):
        return f"Laptop {self.merek}"

# Penggunaan
laptop1 = Laptop("Dell", 65, 2.5)
print(laptop1.info())
print(laptop1.nyalakan())
print(laptop1.bawa())`}</CodeBlock>

<p>Method Resolution Order (MRO)</p>

<p>Ketika menggunakan multiple inheritance, Python menggunakan MRO untuk menentukan urutan pencarian method. Gunakan ClassName.__mro__ atau ClassName.mro() untuk melihat urutan.</p>


<h3>Mengecek Inheritance</h3>
<p>Python menyediakan beberapa built-in function untuk mengecek inheritance:</p>

<CodeBlock language="">{`class Kendaraan:
    pass

class Mobil(Kendaraan):
    pass

mobil1 = Mobil()

# isinstance() - cek apakah object adalah instance dari class
print(isinstance(mobil1, Mobil))      # True
print(isinstance(mobil1, Kendaraan))  # True (karena Mobil mewarisi Kendaraan)
print(isinstance(mobil1, str))        # False

# issubclass() - cek apakah class adalah subclass dari class lain
print(issubclass(Mobil, Kendaraan))   # True
print(issubclass(Kendaraan, Mobil))   # False
print(issubclass(Mobil, object))      # True (semua class mewarisi dari object)

# type() - mendapatkan tipe dari object
print(type(mobil1))                   # <class '__main__.Mobil'>
print(type(mobil1) == Mobil)          # True
print(type(mobil1) == Kendaraan)      # False`}</CodeBlock>

<p>isinstance vs type</p>

<p>Gunakan isinstance() daripada type() untuk mengecek tipe object karena isinstance() memperhitungkan inheritance, sedangkan type() hanya mengecek tipe exact.</p>


<h3>Praktik Terbaik</h3>

<h3>1. Gunakan super()</h3>
<CodeBlock language="">{`# Good - menggunakan super()
class Mobil(Kendaraan):
    def __init__(self, merek, tahun, tipe):
        super().__init__(merek, tahun)
        self.tipe = tipe

# Avoid - memanggil parent class secara eksplisit
class Mobil(Kendaraan):
    def __init__(self, merek, tahun, tipe):
        Kendaraan.__init__(self, merek, tahun)
        self.tipe = tipe`}</CodeBlock>


<h3>2. Liskov Substitution Principle</h3>
<p>Child class harus dapat menggantikan parent class tanpa merusak program:</p>

<CodeBlock language="">{`# Good - child class extends parent
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Square(Rectangle):
    def __init__(self, size):
        super().__init__(size, size)

# Avoid - child class breaks parent's contract
class Square(Rectangle):
    def set_width(self, width):
        self.width = width
        self.height = width  # Breaks rectangle behavior`}</CodeBlock>


<h3>3. Favor Composition Over Inheritance</h3>
<p>Kadang composition (has-a) lebih baik daripada inheritance (is-a):</p>

<CodeBlock language="">{`# Inheritance (is-a)
class Engine:
    def start(self):
        return "Engine started"

class Car(Engine):  # Car is-a Engine? Not really!
    pass

# Composition (has-a) - Better!
class Engine:
    def start(self):
        return "Engine started"

class Car:
    def __init__(self):
        self.engine = Engine()  # Car has-a Engine

    def start(self):
        return self.engine.start()`}</CodeBlock>


<h3>Design Patterns dengan Inheritance</h3>

<h3>Template Method Pattern</h3>
<CodeBlock language="">{`from abc import ABC, abstractmethod

class DataProcessor(ABC):
    """Template method pattern"""

    def process(self):
        """Template method"""
        self.read_data()
        self.process_data()
        self.save_data()

    @abstractmethod
    def read_data(self):
        pass

    @abstractmethod
    def process_data(self):
        pass

    @abstractmethod
    def save_data(self):
        pass

class CSVProcessor(DataProcessor):
    def read_data(self):
        print("Reading from CSV...")

    def process_data(self):
        print("Processing CSV data...")

    def save_data(self):
        print("Saving to database...")

class JSONProcessor(DataProcessor):
    def read_data(self):
        print("Reading from JSON...")

    def process_data(self):
        print("Processing JSON data...")

    def save_data(self):
        print("Saving to file...")

# Penggunaan
csv_proc = CSVProcessor()
csv_proc.process()

json_proc = JSONProcessor()
json_proc.process()`}</CodeBlock>


<h3>Latihan</h3>
<ul>
  <li>
Buat class hierarchy untuk sistem e-commerce:

Product (parent)
PhysicalProduct (child dengan atribut weight, dimensions)
DigitalProduct (child dengan atribut file_size, download_link)

</li>
  <li>Product (parent)</li>
  <li>PhysicalProduct (child dengan atribut weight, dimensions)</li>
  <li>DigitalProduct (child dengan atribut file_size, download_link)</li>
  <li>
Implementasikan method overriding untuk calculate_shipping_cost() yang berbeda untuk physical dan digital product
</li>
  <li>
Tambahkan class User dan PremiumUser dengan method untuk menghitung diskon
</li>
  <li>
Gunakan isinstance() untuk memberikan diskon berbeda berdasarkan tipe user
</li>
</ul>

<p>Buat class hierarchy untuk sistem e-commerce:</p>

<ul>
  <li>Product (parent)</li>
  <li>PhysicalProduct (child dengan atribut weight, dimensions)</li>
  <li>DigitalProduct (child dengan atribut file_size, download_link)</li>
</ul>

<p>Implementasikan method overriding untuk calculate_shipping_cost() yang berbeda untuk physical dan digital product</p>

<p>Tambahkan class User dan PremiumUser dengan method untuk menghitung diskon</p>

<p>Gunakan isinstance() untuk memberikan diskon berbeda berdasarkan tipe user</p>

<p>Langkah Selanjutnya</p>

<p>Setelah memahami inheritance, kita akan mempelajari Encapsulation untuk melindungi data dalam class dengan access modifiers.</p>

<p>Class dan Object</p>

<p>Membuat class, object, atribut, dan method dalam Python</p>

<p>Encapsulation</p>

<p>Melindungi data dengan access modifiers dan property decorators</p>


<h3>Encapsulation</h3>
<p>Melindungi data dengan access modifiers dan property decorators</p>


<h3>Apa itu Encapsulation?</h3>
<p>Encapsulation adalah prinsip OOP yang menyembunyikan detail implementasi internal dari pengguna eksternal. Dengan encapsulation, kita dapat:</p>

<ul>
  <li>Melindungi data dari akses atau modifikasi yang tidak sah</li>
  <li>Mengontrol bagaimana data diakses dan dimodifikasi</li>
  <li>Menyediakan interface yang bersih untuk berinteraksi dengan object</li>
  <li>Mengurangi coupling antar komponen</li>
</ul>

<p>Analogi</p>

<p>Encapsulation seperti ATM. Kalian tidak perlu tahu bagaimana ATM bekerja secara internal (koneksi database, mekanisme pengeluaran uang, dll). Kalian hanya berinteraksi melalui interface yang disediakan (tombol dan layar).</p>


<h3>Access Modifiers di Python</h3>
<p>Python tidak memiliki access modifiers strict seperti Java (public, private, protected). Sebaliknya, Python menggunakan naming conventions untuk mengindikasikan tingkat akses:</p>

<p>Python Philosophy</p>

<p>Python mengikuti prinsip "We are all consenting adults here". Access modifiers lebih merupakan konvensi daripada enforcement. Developer dipercaya untuk mengikuti konvensi yang ada.</p>


<h3>Public Attributes</h3>
<p>Atribut public dapat diakses dan dimodifikasi dari mana saja:</p>

<CodeBlock language="">{`class Student:
    def __init__(self, name, nim):
        self.name = name  # Public attribute
        self.nim = nim    # Public attribute

student = Student("Budi", "TI12345")

# Akses public attribute
print(student.name)  # Budi

# Modifikasi public attribute
student.name = "Budi Santoso"
print(student.name)  # Budi Santoso`}</CodeBlock>


<h3>Protected Attributes</h3>
<p>Atribut protected ditandai dengan single underscore _. Ini adalah konvensi yang menandakan atribut untuk internal use, tapi masih bisa diakses:</p>

<CodeBlock language="">{`class Student:
    def __init__(self, name, nim):
        self.name = name
        self._program = "Teknik"  # Protected attribute

    def get_program(self):
        return self._program

student = Student("Budi", "TI12345")

# Bisa diakses tapi tidak disarankan
print(student._program)  # Teknik

# Cara yang disarankan
print(student.get_program())  # Teknik`}</CodeBlock>

<p>Konvensi Protected</p>

<p>Protected attributes dapat diakses, tetapi dengan konvensi single underscore, developer lain tahu bahwa ini untuk internal use dan tidak seharusnya diakses langsung dari luar class.</p>


<h3>Private Attributes</h3>
<p>Atribut private ditandai dengan double underscore __. Python melakukan "name mangling" sehingga atribut ini sulit diakses dari luar class:</p>

<CodeBlock language="">{`class Student:
    def __init__(self, name, nim):
        self.name = name
        self.__id = "2023-" + nim  # Private attribute

    def get_id(self):
        return self.__id

student = Student("Budi", "12345")

# Akses melalui method public
print(student.get_id())  # 2023-12345

# Akses langsung akan error
try:
    print(student.__id)
except AttributeError as e:
    print(f"Error: {e}")

# Name mangling - bisa diakses tapi tidak disarankan
print(student._Student__id)  # 2023-12345`}</CodeBlock>


<h3>Property Decorators</h3>
<p>Property decorators menyediakan cara Pythonic untuk membuat getter dan setter:</p>


<h3>Getter dengan @property</h3>
<p>Property decorator mengubah method menjadi attribute yang dapat dibaca:</p>

<CodeBlock language="">{`class Student:
    def __init__(self, name, birth_year):
        self.name = name
        self._birth_year = birth_year

    @property
    def age(self):
        from datetime import datetime
        current_year = datetime.now().year
        return current_year - self._birth_year

    @property
    def birth_year(self):
        return self._birth_year

student = Student("Budi", 2000)

# Memanggil seperti attribute, bukan method
print(student.age)  # 25 (tergantung tahun saat ini)
print(student.birth_year)  # 2000`}</CodeBlock>


<h3>Setter dengan @property.setter</h3>
<p>Setter memungkinkan kita mengontrol bagaimana attribute dimodifikasi:</p>

<CodeBlock language="">{`class Student:
    def __init__(self, name, nim):
        self.name = name
        self._nim = nim
        self._program = "Teknik"

    @property
    def program(self):
        return self._program

    @program.setter
    def program(self, value):
        valid_programs = ["Teknik", "Sains", "Bisnis"]
        if value in valid_programs:
            self._program = value
        else:
            raise ValueError(f"Program harus salah satu dari {valid_programs}")

student = Student("Budi", "12345")

# Menggunakan setter
student.program = "Sains"  # OK
print(student.program)  # Sains

try:
    student.program = "Hukum"  # Error
except ValueError as e:
    print(f"Error: {e}")`}</CodeBlock>


<h3>Deleter dengan @property.deleter</h3>
<p>Deleter mengontrol perilaku ketika attribute dihapus:</p>

<CodeBlock language="">{`class Student:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if not value:
            raise ValueError("Name cannot be empty")
        self._name = value

    @name.deleter
    def name(self):
        print("Deleting name...")
        self._name = None

student = Student("Budi")
print(student.name)  # Budi

del student.name  # Deleting name...
print(student.name)  # None`}</CodeBlock>


<h3>Contoh Lengkap: Bank Account</h3>
<p>Mari lihat contoh lengkap encapsulation pada class BankAccount:</p>

<CodeBlock language="">{`class BankAccount:
    """Class untuk merepresentasikan akun bank dengan encapsulation"""

    def __init__(self, account_number, owner, initial_balance=0):
        self.account_number = account_number  # Public
        self._owner = owner  # Protected
        self.__balance = initial_balance  # Private
        self.__transaction_history = []  # Private

    # Property untuk balance (read-only)
    @property
    def balance(self):
        """Getter untuk balance - read only"""
        return self.__balance

    # Property untuk owner
    @property
    def owner(self):
        return self._owner

    @owner.setter
    def owner(self, new_owner):
        if not new_owner or len(new_owner) < 3:
            raise ValueError("Owner name must be at least 3 characters")
        self._owner = new_owner

    # Method untuk deposit
    def deposit(self, amount):
        """Public method untuk deposit uang"""
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")

        self.__balance += amount
        self.__add_transaction("Deposit", amount)
        return f"Deposit successful. New balance: Rp{self.__balance:,.0f}"

    # Method untuk withdraw
    def withdraw(self, amount):
        """Public method untuk withdraw uang"""
        if amount <= 0:
            raise ValueError("Withdraw amount must be positive")

        if amount > self.__balance:
            raise ValueError("Insufficient balance")

        self.__balance -= amount
        self.__add_transaction("Withdraw", amount)
        return f"Withdraw successful. New balance: Rp{self.__balance:,.0f}"

    # Method untuk transfer
    def transfer(self, target_account, amount):
        """Public method untuk transfer ke akun lain"""
        if amount <= 0:
            raise ValueError("Transfer amount must be positive")

        if amount > self.__balance:
            raise ValueError("Insufficient balance")

        self.__balance -= amount
        target_account.__balance += amount

        self.__add_transaction(f"Transfer to {target_account.account_number}", amount)
        target_account.__add_transaction(f"Transfer from {self.account_number}", amount)

        return f"Transfer successful. New balance: Rp{self.__balance:,.0f}"

    # Private method untuk menambah transaksi
    def __add_transaction(self, type, amount):
        """Private method - hanya untuk internal use"""
        from datetime import datetime
        transaction = {
            'type': type,
            'amount': amount,
            'timestamp': datetime.now(),
            'balance_after': self.__balance
        }
        self.__transaction_history.append(transaction)

    # Public method untuk melihat history
    def get_transaction_history(self, last_n=5):
        """Public method untuk mendapatkan transaction history"""
        return self.__transaction_history[-last_n:]

    # Method untuk display info
    def display_info(self):
        print(f"\n{'='*50}")
        print(f"Account Number: {self.account_number}")
        print(f"Owner: {self._owner}")
        print(f"Balance: Rp{self.__balance:,.0f}")
        print(f"{'='*50}")

# Penggunaan
print("=== Creating Bank Accounts ===")
acc1 = BankAccount("001", "Budi Santoso", 1000000)
acc2 = BankAccount("002", "Ani Wijaya", 500000)

print("\n=== Account Info ===")
acc1.display_info()

print("\n=== Deposit ===")
print(acc1.deposit(500000))

print("\n=== Withdraw ===")
print(acc1.withdraw(200000))

print("\n=== Transfer ===")
print(acc1.transfer(acc2, 300000))

print("\n=== Check Balance (using property) ===")
print(f"Acc1 Balance: Rp{acc1.balance:,.0f}")
print(f"Acc2 Balance: Rp{acc2.balance:,.0f}")

print("\n=== Transaction History ===")
for trans in acc1.get_transaction_history():
    print(f"{trans['type']}: Rp{trans['amount']:,.0f} "
          f"- Balance: Rp{trans['balance_after']:,.0f}")

print("\n=== Try to access private attribute (will error) ===")
try:
    print(acc1.__balance)
except AttributeError as e:
    print(f"Error: {e}")

print("\n=== Access via name mangling (not recommended) ===")
print(f"Balance via name mangling: Rp{acc1._BankAccount__balance:,.0f}")

print("\n=== Try invalid withdraw ===")
try:
    acc1.withdraw(10000000)
except ValueError as e:
    print(f"Error: {e}")`}</CodeBlock>


<h3>Kapan Menggunakan Access Modifiers</h3>

<h3>Gunakan Public</h3>
<CodeBlock language="">{`class Product:
    def __init__(self, name, price):
        self.name = name  # Public - data yang umum diakses
        self.price = price  # Public`}</CodeBlock>


<h3>Gunakan Protected</h3>
<CodeBlock language="">{`class DatabaseConnection:
    def __init__(self, host):
        self._host = host  # Protected - untuk subclass
        self._connection = None  # Protected

    def _connect(self):  # Protected method
        # Internal implementation
        pass`}</CodeBlock>


<h3>Gunakan Private</h3>
<CodeBlock language="">{`class PasswordManager:
    def __init__(self, password):
        self.__password = password  # Private - data sensitif

    def verify(self, input_password):
        return input_password == self.__password`}</CodeBlock>


<h3>Praktik Terbaik</h3>

<h3>1. Gunakan Properties untuk Validasi</h3>
<CodeBlock language="">{`class Student:
    def __init__(self, name, gpa):
        self.name = name
        self._gpa = None
        self.gpa = gpa  # Using setter for validation

    @property
    def gpa(self):
        return self._gpa

    @gpa.setter
    def gpa(self, value):
        if not 0.0 <= value <= 4.0:
            raise ValueError("GPA must be between 0.0 and 4.0")
        self._gpa = value`}</CodeBlock>


<h3>2. Encapsulate Complex Logic</h3>
<CodeBlock language="">{`class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @property
    def diameter(self):
        return self._radius * 2

    @property
    def area(self):
        import math
        return math.pi * self._radius ** 2

    @property
    def circumference(self):
        import math
        return 2 * math.pi * self._radius`}</CodeBlock>


<h3>3. Don't Expose Mutable Collections</h3>
<CodeBlock language="">{`# Bad - exposes internal list
class Classroom:
    def __init__(self):
        self.students = []

# Good - provides controlled access
class Classroom:
    def __init__(self):
        self.__students = []

    def add_student(self, student):
        self.__students.append(student)

    def get_students(self):
        return self.__students.copy()  # Return copy`}</CodeBlock>


<h3>Latihan</h3>
<ul>
  <li>
Buat class Employee dengan:

Private attribute untuk salary
Property untuk membaca salary
Method untuk menaikkan salary dengan validasi

</li>
  <li>Private attribute untuk salary</li>
  <li>Property untuk membaca salary</li>
  <li>Method untuk menaikkan salary dengan validasi</li>
  <li>
Buat class ShoppingCart dengan:

Private list untuk items
Methods untuk add_item, remove_item, get_total
Property untuk item_count

</li>
  <li>Private list untuk items</li>
  <li>Methods untuk add_item, remove_item, get_total</li>
  <li>Property untuk item_count</li>
  <li>
Implementasikan class User dengan:

Private password
Method untuk verify_password
Property untuk email dengan validasi format

</li>
  <li>Private password</li>
  <li>Method untuk verify_password</li>
  <li>Property untuk email dengan validasi format</li>
</ul>

<p>Buat class Employee dengan:</p>

<ul>
  <li>Private attribute untuk salary</li>
  <li>Property untuk membaca salary</li>
  <li>Method untuk menaikkan salary dengan validasi</li>
</ul>

<p>Buat class ShoppingCart dengan:</p>

<ul>
  <li>Private list untuk items</li>
  <li>Methods untuk add_item, remove_item, get_total</li>
  <li>Property untuk item_count</li>
</ul>

<p>Implementasikan class User dengan:</p>

<ul>
  <li>Private password</li>
  <li>Method untuk verify_password</li>
  <li>Property untuk email dengan validasi format</li>
</ul>

<p>Langkah Selanjutnya</p>

<p>Setelah memahami encapsulation, kita akan mempelajari Polymorphism untuk membuat objek yang berbeda merespons method yang sama dengan cara berbeda.</p>

<p>Inheritance (Pewarisan)</p>

<p>Memahami konsep pewarisan class dan method overriding</p>

<p>Polymorphism</p>

<p>Memahami polymorphism, method overriding, dan duck typing</p>


<h3>Polymorphism</h3>
<p>Memahami polymorphism, method overriding, dan duck typing</p>


<h3>Apa itu Polymorphism?</h3>
<p>Polymorphism (dari bahasa Yunani: "poly" = banyak, "morph" = bentuk) adalah kemampuan objek dari class yang berbeda untuk merespons method dengan nama yang sama dengan cara yang berbeda.</p>

<p>Analogi</p>

<p>Bayangkan tombol "Play" pada remote control. Untuk TV, tombol play menyalakan acara. Untuk AC, play menyalakan pendingin. Untuk stereo, play memutar musik. Tombol yang sama, tapi perilaku berbeda tergantung perangkat.</p>


<h3>Jenis-jenis Polymorphism</h3>

<h3>1. Method Overriding</h3>
<p>Method overriding terjadi ketika subclass memberikan implementasi spesifik untuk method yang sudah didefinisikan di superclass:</p>

<CodeBlock language="">{`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass  # Method yang akan di-override

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Cow(Animal):
    def speak(self):
        return f"{self.name} says Moo!"

# Polymorphism dalam aksi
animals = [
    Dog("Buddy"),
    Cat("Whiskers"),
    Cow("Milly")
]

for animal in animals:
    print(animal.speak())
# Output:
# Buddy says Woof!
# Whiskers says Meow!
# Milly says Moo!`}</CodeBlock>


<h3>2. Duck Typing</h3>
<p>Python menggunakan "duck typing": "If it walks like a duck and quacks like a duck, it must be a duck."</p>

<p>Python tidak peduli tipe object apa yang diberikan, selama object tersebut memiliki method yang dipanggil:</p>

<CodeBlock language="">{`class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Robot:
    def speak(self):
        return "Beep boop!"

# Fungsi yang menerima object apa pun dengan method speak()
def make_sound(entity):
    return entity.speak()

# Semua bisa dipanggil, tidak peduli class-nya
print(make_sound(Dog()))    # Woof!
print(make_sound(Cat()))    # Meow!
print(make_sound(Robot()))  # Beep boop!`}</CodeBlock>

<p>Duck Typing vs Static Typing</p>

<p>Dalam bahasa dengan static typing (Java, C++), Kalian harus mendefinisikan interface atau parent class yang sama. Python lebih fleksibel dengan duck typing - yang penting memiliki method yang dibutuhkan.</p>


<h3>Polymorphism dengan Function</h3>

<h3>Function yang Polymorphic</h3>
<p>Buat function yang dapat bekerja dengan berbagai tipe object:</p>

<CodeBlock language="">{`class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        import math
        return math.pi * self.radius ** 2

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Triangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return 0.5 * self.base * self.height

# Function polymorphic
def print_area(shape):
    """Function ini bekerja dengan object apa pun yang memiliki method area()"""
    print(f"Area: {shape.area():.2f}")

# Penggunaan
shapes = [
    Circle(5),
    Rectangle(4, 6),
    Triangle(3, 8)
]

for shape in shapes:
    print_area(shape)`}</CodeBlock>


<h3>Method Chaining dengan Polymorphism</h3>
<CodeBlock language="">{`class Shape:
    def __init__(self):
        self.color = "black"

    def set_color(self, color):
        self.color = color
        return self  # Return self untuk chaining

    def draw(self):
        pass  # Override di subclass

class Circle(Shape):
    def __init__(self, radius):
        super().__init__()
        self.radius = radius

    def draw(self):
        return f"Drawing {self.color} circle with radius {self.radius}"

class Square(Shape):
    def __init__(self, side):
        super().__init__()
        self.side = side

    def draw(self):
        return f"Drawing {self.color} square with side {self.side}"

# Method chaining
circle = Circle(5).set_color("red")
print(circle.draw())  # Drawing red circle with radius 5

square = Square(10).set_color("blue")
print(square.draw())  # Drawing blue square with side 10`}</CodeBlock>


<h3>Operator Overloading</h3>
<p>Python memungkinkan kita untuk mendefinisikan perilaku operator (+, -, *, ==, dll) untuk class kita sendiri:</p>

<CodeBlock language="">{`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    # Operator + (addition)
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    # Operator - (subtraction)
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    # Operator * (scalar multiplication)
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)

    # Operator == (equality)
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    # Operator < (less than)
    def __lt__(self, other):
        # Compare by magnitude
        return (self.x**2 + self.y**2) < (other.x**2 + other.y**2)

    # len() function
    def __len__(self):
        import math
        return int(math.sqrt(self.x**2 + self.y**2))

# Penggunaan
v1 = Vector(2, 3)
v2 = Vector(4, 5)

print(v1 + v2)      # Vector(6, 8)
print(v1 - v2)      # Vector(-2, -2)
print(v1 * 3)       # Vector(6, 9)
print(v1 == v2)     # False
print(v1 < v2)      # True
print(len(v1))      # 3`}</CodeBlock>


<h3>Common Operator Overloading Methods</h3>

<h3>Contoh Lengkap: Payment System</h3>
<p>Mari lihat contoh lengkap polymorphism pada sistem pembayaran:</p>

<CodeBlock language="">{`from abc import ABC, abstractmethod
from datetime import datetime

# Base class
class Payment(ABC):
    """Abstract base class untuk semua jenis payment"""

    def __init__(self, amount):
        self.amount = amount
        self.timestamp = datetime.now()
        self.status = "pending"

    @abstractmethod
    def process_payment(self):
        """Method yang harus diimplementasikan oleh subclass"""
        pass

    @abstractmethod
    def get_payment_info(self):
        """Method yang harus diimplementasikan oleh subclass"""
        pass

    def __str__(self):
        return f"{self.__class__.__name__}: Rp{self.amount:,.0f}"

# Concrete implementations
class CreditCardPayment(Payment):
    def __init__(self, amount, card_number, cvv):
        super().__init__(amount)
        self.card_number = self._mask_card_number(card_number)
        self._cvv = cvv  # Private

    def _mask_card_number(self, card_number):
        """Private method untuk mask card number"""
        return f"****-****-****-{card_number[-4:]}"

    def process_payment(self):
        # Simulasi proses pembayaran
        print(f"Processing credit card payment...")
        print(f"Card: {self.card_number}")
        self.status = "completed"
        return True

    def get_payment_info(self):
        return {
            'type': 'Credit Card',
            'card': self.card_number,
            'amount': self.amount,
            'status': self.status
        }

class BankTransferPayment(Payment):
    def __init__(self, amount, bank_name, account_number):
        super().__init__(amount)
        self.bank_name = bank_name
        self.account_number = account_number

    def process_payment(self):
        print(f"Processing bank transfer...")
        print(f"Bank: {self.bank_name}")
        print(f"Account: {self.account_number}")
        self.status = "completed"
        return True

    def get_payment_info(self):
        return {
            'type': 'Bank Transfer',
            'bank': self.bank_name,
            'account': self.account_number,
            'amount': self.amount,
            'status': self.status
        }

class EWalletPayment(Payment):
    def __init__(self, amount, wallet_type, phone_number):
        super().__init__(amount)
        self.wallet_type = wallet_type
        self.phone_number = phone_number

    def process_payment(self):
        print(f"Processing e-wallet payment...")
        print(f"Wallet: {self.wallet_type}")
        print(f"Phone: {self.phone_number}")
        self.status = "completed"
        return True

    def get_payment_info(self):
        return {
            'type': 'E-Wallet',
            'wallet': self.wallet_type,
            'phone': self.phone_number,
            'amount': self.amount,
            'status': self.status
        }

# Payment Processor - menggunakan polymorphism
class PaymentProcessor:
    """Class yang memproses berbagai jenis payment"""

    def __init__(self):
        self.payments = []

    def process(self, payment):
        """
        Method polymorphic - bekerja dengan semua jenis Payment
        tanpa perlu tahu tipe spesifiknya
        """
        print(f"\n{'='*50}")
        print(f"Processing payment: {payment}")
        print(f"{'='*50}")

        if payment.process_payment():
            self.payments.append(payment)
            print(f"Payment successful!")
            return True
        else:
            print(f"Payment failed!")
            return False

    def get_total_payments(self):
        return sum(p.amount for p in self.payments)

    def print_summary(self):
        print(f"\n{'='*50}")
        print(f"Payment Summary")
        print(f"{'='*50}")
        for i, payment in enumerate(self.payments, 1):
            info = payment.get_payment_info()
            print(f"\n{i}. {info['type']}")
            for key, value in info.items():
                if key != 'type':
                    print(f"   {key.capitalize()}: {value}")
        print(f"\nTotal: Rp{self.get_total_payments():,.0f}")
        print(f"{'='*50}")

# Penggunaan
processor = PaymentProcessor()

# Berbagai jenis payment
payments = [
    CreditCardPayment(500000, "1234567890123456", "123"),
    BankTransferPayment(750000, "BCA", "1234567890"),
    EWalletPayment(250000, "GoPay", "081234567890"),
    CreditCardPayment(1000000, "9876543210987654", "456")
]

# Process semua payment dengan method yang sama
for payment in payments:
    processor.process(payment)

# Print summary
processor.print_summary()`}</CodeBlock>


<h3>Polymorphism dengan Built-in Functions</h3>
<p>Python built-in functions menggunakan polymorphism:</p>

<CodeBlock language="">{`# len() works with different types
print(len("Hello"))        # 5 (string)
print(len([1, 2, 3]))      # 3 (list)
print(len({'a': 1, 'b': 2}))  # 2 (dict)

# Custom class dengan __len__
class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []

    def add_song(self, song):
        self.songs.append(song)

    def __len__(self):
        return len(self.songs)

playlist = Playlist("My Favorites")
playlist.add_song("Song 1")
playlist.add_song("Song 2")
print(len(playlist))  # 2

# sum() works with different iterables
print(sum([1, 2, 3]))           # 6
print(sum((1, 2, 3)))           # 6
print(sum({1, 2, 3}))           # 6`}</CodeBlock>


<h3>Praktik Terbaik</h3>

<h3>1. Design for Polymorphism</h3>
<CodeBlock language="">{`# Good - design dengan interface yang konsisten
class Shape:
    def area(self):
        pass

    def perimeter(self):
        pass

class Circle(Shape):
    def area(self):
        # Implementation
        pass

    def perimeter(self):
        # Implementation
        pass

# Avoid - interface yang tidak konsisten
class Circle:
    def calculate_area(self):
        pass

class Square:
    def get_area(self):  # Different method name
        pass`}</CodeBlock>


<h3>2. Use Abstract Base Classes</h3>
<CodeBlock language="">{`from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        """All vehicles must implement start"""
        pass

    @abstractmethod
    def stop(self):
        """All vehicles must implement stop"""
        pass`}</CodeBlock>


<h3>3. Follow Liskov Substitution Principle</h3>
<CodeBlock language="">{`# Good - subclass can replace parent without breaking
class Bird:
    def move(self):
        return "Flying"

class Sparrow(Bird):
    def move(self):
        return "Flying fast"

# Avoid - subclass breaks parent's contract
class Bird:
    def fly(self):
        return "Flying"

class Penguin(Bird):
    def fly(self):
        raise Exception("Penguins can't fly!")  # Breaks contract`}</CodeBlock>


<h3>Latihan</h3>
<ul>
  <li>
Buat hierarchy untuk sistem notifikasi:

Base class Notification dengan method send()
Subclass: EmailNotification, SMSNotification, PushNotification
Implementasikan polymorphism untuk mengirim berbagai jenis notifikasi

</li>
  <li>Base class Notification dengan method send()</li>
  <li>Subclass: EmailNotification, SMSNotification, PushNotification</li>
  <li>Implementasikan polymorphism untuk mengirim berbagai jenis notifikasi</li>
  <li>
Buat class Money dengan operator overloading untuk:

Addition (+)
Subtraction (-)
Comparison (==, &lt;, &gt;)
String representation

</li>
  <li>Addition (+)</li>
  <li>Subtraction (-)</li>
  <li>Comparison (==, &lt;, &gt;)</li>
  <li>String representation</li>
  <li>
Implementasikan payment gateway dengan:

Multiple payment methods
Unified processing interface
Transaction logging

</li>
  <li>Multiple payment methods</li>
  <li>Unified processing interface</li>
  <li>Transaction logging</li>
</ul>

<p>Buat hierarchy untuk sistem notifikasi:</p>

<ul>
  <li>Base class Notification dengan method send()</li>
  <li>Subclass: EmailNotification, SMSNotification, PushNotification</li>
  <li>Implementasikan polymorphism untuk mengirim berbagai jenis notifikasi</li>
</ul>

<p>Buat class Money dengan operator overloading untuk:</p>

<ul>
  <li>Addition (+)</li>
  <li>Subtraction (-)</li>
  <li>Comparison (==, &lt;, &gt;)</li>
  <li>String representation</li>
</ul>

<p>Implementasikan payment gateway dengan:</p>

<ul>
  <li>Multiple payment methods</li>
  <li>Unified processing interface</li>
  <li>Transaction logging</li>
</ul>

<p>Langkah Selanjutnya</p>

<p>Setelah memahami polymorphism, kita akan mempelajari Abstract Classes untuk membuat blueprint yang lebih formal untuk inheritance.</p>

<p>Encapsulation</p>

<p>Melindungi data dengan access modifiers dan property decorators</p>

<p>Abstract Class</p>

<p>Memahami abstract classes, abstract methods, dan interface di Python</p>


<h3>Abstract Class</h3>
<p>Memahami abstract classes, abstract methods, dan interface di Python</p>


<h3>Apa itu Abstract Class?</h3>
<p>Abstract class adalah class yang tidak dapat diinstansiasi secara langsung dan berfungsi sebagai blueprint atau template untuk class lain. Abstract class dapat berisi abstract methods (method tanpa implementasi) yang harus diimplementasikan oleh subclass.</p>

<p>Analogi</p>

<p>Bayangkan blueprint rumah. Kalian tidak bisa tinggal di dalam blueprint, tapi Kalian bisa menggunakan blueprint tersebut untuk membangun rumah yang sebenarnya. Abstract class adalah blueprint, dan concrete class adalah rumah yang dibangun dari blueprint tersebut.</p>


<h3>Module ABC (Abstract Base Classes)</h3>
<p>Python menyediakan module abc (Abstract Base Classes) untuk membuat abstract class:</p>

<CodeBlock language="">{`from abc import ABC, abstractmethod`}</CodeBlock>


<h3>Komponen Utama</h3>
<ul>
  <li>ABC: Base class untuk membuat abstract class</li>
  <li>@abstractmethod: Decorator untuk menandai method sebagai abstract</li>
</ul>


<h3>Membuat Abstract Class</h3>

<h3>Basic Abstract Class</h3>
<CodeBlock language="">{`from abc import ABC, abstractmethod

class Shape(ABC):
    """Abstract base class untuk bentuk geometris"""

    @abstractmethod
    def area(self):
        """Method abstract untuk menghitung luas"""
        pass

    @abstractmethod
    def perimeter(self):
        """Method abstract untuk menghitung keliling"""
        pass

    def describe(self):
        """Method concrete (non-abstract)"""
        return "Ini adalah bentuk geometris"

# Error - tidak bisa membuat instance dari abstract class
try:
    shape = Shape()
except TypeError as e:
    print(f"Error: {e}")
    # Output: Can't instantiate abstract class Shape with abstract methods area, perimeter`}</CodeBlock>


<h3>Concrete Implementation</h3>
<p>Subclass harus mengimplementasikan semua abstract methods:</p>

<CodeBlock language="">{`from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def describe(self):
        return f"Rectangle {self.width}x{self.height}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        import math
        return math.pi * self.radius ** 2

    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

# Sekarang bisa membuat instance
rect = Rectangle(5, 4)
circle = Circle(3)

print(f"Rectangle area: {rect.area()}")           # 20
print(f"Rectangle perimeter: {rect.perimeter()}")  # 18
print(f"Circle area: {circle.area():.2f}")         # 28.27
print(f"Circle perimeter: {circle.perimeter():.2f}") # 18.85`}</CodeBlock>


<h3>Partial Implementation</h3>
<p>Jika subclass tidak mengimplementasikan semua abstract methods, subclass tersebut juga harus abstract:</p>

<CodeBlock language="">{`from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

    @abstractmethod
    def move(self):
        pass

# Partial implementation - masih abstract
class Mammal(Animal):
    def speak(self):
        return "Some sound"
    # move() belum diimplementasikan, jadi Mammal masih abstract

# Error - tidak bisa instantiate Mammal
try:
    m = Mammal()
except TypeError as e:
    print(f"Error: {e}")

# Concrete implementation
class Dog(Mammal):
    def move(self):
        return "Walking on four legs"

# Sekarang bisa instantiate
dog = Dog()
print(dog.speak())  # Some sound
print(dog.move())   # Walking on four legs`}</CodeBlock>


<h3>Abstract Properties</h3>
<p>Kalian juga bisa membuat abstract properties menggunakan @property dan @abstractmethod:</p>

<CodeBlock language="">{`from abc import ABC, abstractmethod

class Vehicle(ABC):
    @property
    @abstractmethod
    def max_speed(self):
        """Abstract property untuk kecepatan maksimum"""
        pass

    @property
    @abstractmethod
    def fuel_type(self):
        """Abstract property untuk jenis bahan bakar"""
        pass

    @abstractmethod
    def start_engine(self):
        pass

class Car(Vehicle):
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        self._max_speed = 200
        self._fuel_type = "Gasoline"

    @property
    def max_speed(self):
        return self._max_speed

    @property
    def fuel_type(self):
        return self._fuel_type

    def start_engine(self):
        return f"{self.brand} {self.model} engine started"

class ElectricCar(Vehicle):
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        self._max_speed = 180
        self._fuel_type = "Electric"

    @property
    def max_speed(self):
        return self._max_speed

    @property
    def fuel_type(self):
        return self._fuel_type

    def start_engine(self):
        return f"{self.brand} {self.model} motor started silently"

# Penggunaan
car = Car("Toyota", "Camry")
electric = ElectricCar("Tesla", "Model 3")

print(f"{car.brand}: Max speed {car.max_speed} km/h, Fuel: {car.fuel_type}")
print(f"{electric.brand}: Max speed {electric.max_speed} km/h, Fuel: {electric.fuel_type}")`}</CodeBlock>


<h3>Interface Pattern</h3>
<p>Python tidak memiliki keyword "interface" seperti Java, tetapi kita bisa membuat interface menggunakan abstract class di mana semua method adalah abstract:</p>

<CodeBlock language="">{`from abc import ABC, abstractmethod

class Drawable(ABC):
    """Interface untuk object yang bisa digambar"""

    @abstractmethod
    def draw(self):
        pass

    @abstractmethod
    def resize(self, scale):
        pass

class Clickable(ABC):
    """Interface untuk object yang bisa diklik"""

    @abstractmethod
    def on_click(self):
        pass

# Multiple interface implementation
class Button(Drawable, Clickable):
    def __init__(self, text, x, y):
        self.text = text
        self.x = x
        self.y = y
        self.scale = 1.0

    def draw(self):
        return f"Drawing button '{self.text}' at ({self.x}, {self.y}), scale: {self.scale}"

    def resize(self, scale):
        self.scale = scale
        return f"Button resized to {scale}x"

    def on_click(self):
        return f"Button '{self.text}' clicked!"

class Image(Drawable):
    def __init__(self, src, x, y):
        self.src = src
        self.x = x
        self.y = y
        self.scale = 1.0

    def draw(self):
        return f"Drawing image '{self.src}' at ({self.x}, {self.y})"

    def resize(self, scale):
        self.scale = scale
        return f"Image resized to {scale}x"

# Penggunaan
button = Button("Submit", 100, 200)
image = Image("logo.png", 50, 50)

print(button.draw())
print(button.resize(1.5))
print(button.on_click())

print(image.draw())
print(image.resize(2.0))`}</CodeBlock>

<p>Multiple Inheritance</p>

<p>Python mendukung multiple inheritance, sehingga sebuah class bisa mengimplementasikan multiple interfaces (abstract classes). Ini sangat berguna untuk membuat sistem yang modular dan fleksibel.</p>


<h3>Contoh Lengkap: Database Connection</h3>
<p>Mari lihat contoh lengkap abstract class untuk database connection:</p>

<CodeBlock language="">{`from abc import ABC, abstractmethod
from datetime import datetime

class DatabaseConnection(ABC):
    """Abstract base class untuk database connection"""

    def __init__(self, host, port, database):
        self.host = host
        self.port = port
        self.database = database
        self.connected = False
        self.connection_time = None

    @abstractmethod
    def connect(self):
        """Connect to database"""
        pass

    @abstractmethod
    def disconnect(self):
        """Disconnect from database"""
        pass

    @abstractmethod
    def execute_query(self, query):
        """Execute a query"""
        pass

    @abstractmethod
    def fetch_results(self):
        """Fetch query results"""
        pass

    def get_connection_info(self):
        """Concrete method - available to all subclasses"""
        return {
            'host': self.host,
            'port': self.port,
            'database': self.database,
            'connected': self.connected,
            'connection_time': self.connection_time
        }

    def __str__(self):
        return f"{self.__class__.__name__}({self.host}:{self.port}/{self.database})"

class MySQLConnection(DatabaseConnection):
    """MySQL database connection implementation"""

    def __init__(self, host, port, database, username, password):
        super().__init__(host, port, database)
        self.username = username
        self._password = password  # Private
        self.last_query = None
        self.results = []

    def connect(self):
        """Simulate MySQL connection"""
        print(f"Connecting to MySQL: {self.host}:{self.port}/{self.database}")
        print(f"Username: {self.username}")
        # Simulate connection
        self.connected = True
        self.connection_time = datetime.now()
        print("MySQL connection established!")
        return True

    def disconnect(self):
        """Disconnect from MySQL"""
        if self.connected:
            print("Disconnecting from MySQL...")
            self.connected = False
            self.connection_time = None
            print("Disconnected successfully!")
            return True
        else:
            print("Already disconnected")
            return False

    def execute_query(self, query):
        """Execute MySQL query"""
        if not self.connected:
            raise Exception("Not connected to database")

        print(f"Executing MySQL query: {query}")
        self.last_query = query

        # Simulate query execution
        if "SELECT" in query.upper():
            self.results = [
                {'id': 1, 'name': 'John Doe', 'email': 'john@example.com'},
                {'id': 2, 'name': 'Jane Smith', 'email': 'jane@example.com'}
            ]
        else:
            self.results = []

        return True

    def fetch_results(self):
        """Fetch MySQL results"""
        return self.results

class PostgreSQLConnection(DatabaseConnection):
    """PostgreSQL database connection implementation"""

    def __init__(self, host, port, database, username, password):
        super().__init__(host, port, database)
        self.username = username
        self._password = password
        self.last_query = None
        self.results = []

    def connect(self):
        """Simulate PostgreSQL connection"""
        print(f"Connecting to PostgreSQL: {self.host}:{self.port}/{self.database}")
        print(f"Username: {self.username}")
        # Simulate connection
        self.connected = True
        self.connection_time = datetime.now()
        print("PostgreSQL connection established!")
        return True

    def disconnect(self):
        """Disconnect from PostgreSQL"""
        if self.connected:
            print("Disconnecting from PostgreSQL...")
            self.connected = False
            self.connection_time = None
            print("Disconnected successfully!")
            return True
        else:
            print("Already disconnected")
            return False

    def execute_query(self, query):
        """Execute PostgreSQL query"""
        if not self.connected:
            raise Exception("Not connected to database")

        print(f"Executing PostgreSQL query: {query}")
        self.last_query = query

        # Simulate query execution
        if "SELECT" in query.upper():
            self.results = [
                {'id': 1, 'product': 'Laptop', 'price': 15000000},
                {'id': 2, 'product': 'Mouse', 'price': 150000}
            ]
        else:
            self.results = []

        return True

    def fetch_results(self):
        """Fetch PostgreSQL results"""
        return self.results

class MongoDBConnection(DatabaseConnection):
    """MongoDB connection implementation"""

    def __init__(self, host, port, database):
        super().__init__(host, port, database)
        self.collections = {}

    def connect(self):
        print(f"Connecting to MongoDB: {self.host}:{self.port}/{self.database}")
        self.connected = True
        self.connection_time = datetime.now()
        print("MongoDB connection established!")
        return True

    def disconnect(self):
        if self.connected:
            print("Disconnecting from MongoDB...")
            self.connected = False
            print("Disconnected successfully!")
            return True
        return False

    def execute_query(self, query):
        """Execute MongoDB query (simplified)"""
        if not self.connected:
            raise Exception("Not connected to database")

        print(f"Executing MongoDB query: {query}")
        # Simulate MongoDB query
        return True

    def fetch_results(self):
        """Fetch MongoDB results"""
        return [
            {'_id': '507f1f77bcf86cd799439011', 'name': 'Document 1'},
            {'_id': '507f1f77bcf86cd799439012', 'name': 'Document 2'}
        ]

# Database Manager - polymorphic usage
class DatabaseManager:
    """Manager untuk mengelola berbagai jenis database connections"""

    def __init__(self):
        self.connections = []

    def add_connection(self, connection):
        """Add a database connection (polymorphic parameter)"""
        if isinstance(connection, DatabaseConnection):
            self.connections.append(connection)
            print(f"Added connection: {connection}")
        else:
            raise TypeError("Connection must be a DatabaseConnection instance")

    def connect_all(self):
        """Connect to all databases"""
        print("\n" + "="*60)
        print("Connecting to all databases...")
        print("="*60)
        for conn in self.connections:
            conn.connect()
            print()

    def execute_on_all(self, query):
        """Execute query on all connected databases"""
        print("\n" + "="*60)
        print(f"Executing on all databases: {query}")
        print("="*60)
        for conn in self.connections:
            if conn.connected:
                print(f"\n{conn}:")
                conn.execute_query(query)
                results = conn.fetch_results()
                print(f"Results: {len(results)} rows")
                for row in results:
                    print(f"  {row}")

    def disconnect_all(self):
        """Disconnect from all databases"""
        print("\n" + "="*60)
        print("Disconnecting from all databases...")
        print("="*60)
        for conn in self.connections:
            conn.disconnect()
            print()

# Penggunaan
manager = DatabaseManager()

# Add different types of database connections
mysql_conn = MySQLConnection("localhost", 3306, "users_db", "root", "password123")
postgres_conn = PostgreSQLConnection("localhost", 5432, "products_db", "admin", "pass456")
mongo_conn = MongoDBConnection("localhost", 27017, "documents_db")

manager.add_connection(mysql_conn)
manager.add_connection(postgres_conn)
manager.add_connection(mongo_conn)

# Connect to all
manager.connect_all()

# Execute queries on all
manager.execute_on_all("SELECT * FROM table")

# Disconnect from all
manager.disconnect_all()`}</CodeBlock>


<h3>Abstract Static Methods & Class Methods</h3>
<p>Kalian juga bisa membuat abstract static methods dan class methods:</p>

<CodeBlock language="">{`from abc import ABC, abstractmethod

class DataParser(ABC):
    """Abstract base class untuk data parser"""

    @abstractmethod
    def parse(self, data):
        """Instance method - parse data"""
        pass

    @staticmethod
    @abstractmethod
    def validate_format(data):
        """Static method - validate data format"""
        pass

    @classmethod
    @abstractmethod
    def from_file(cls, filename):
        """Class method - create parser from file"""
        pass

class JSONParser(DataParser):
    def __init__(self):
        self.parsed_data = None

    def parse(self, data):
        """Parse JSON data"""
        import json
        self.parsed_data = json.loads(data)
        return self.parsed_data

    @staticmethod
    def validate_format(data):
        """Validate JSON format"""
        import json
        try:
            json.loads(data)
            return True
        except json.JSONDecodeError:
            return False

    @classmethod
    def from_file(cls, filename):
        """Create JSONParser from file"""
        with open(filename, 'r') as f:
            data = f.read()
        parser = cls()
        parser.parse(data)
        return parser

class XMLParser(DataParser):
    def __init__(self):
        self.parsed_data = None

    def parse(self, data):
        """Parse XML data"""
        # Simplified - in reality would use xml.etree
        self.parsed_data = data
        return self.parsed_data

    @staticmethod
    def validate_format(data):
        """Validate XML format"""
        return data.strip().startswith('<') and data.strip().endswith('>')

    @classmethod
    def from_file(cls, filename):
        """Create XMLParser from file"""
        with open(filename, 'r') as f:
            data = f.read()
        parser = cls()
        parser.parse(data)
        return parser

# Penggunaan
json_data = '{"name": "John", "age": 30}'
xml_data = '<person><name>John</name><age>30</age></person>'

print("JSON valid:", JSONParser.validate_format(json_data))
print("XML valid:", XMLParser.validate_format(xml_data))

json_parser = JSONParser()
print("Parsed JSON:", json_parser.parse(json_data))`}</CodeBlock>


<h3>Praktik Terbaik</h3>

<h3>1. Use Abstract Classes untuk Shared Behavior</h3>
<CodeBlock language="">{`from abc import ABC, abstractmethod

class Report(ABC):
    """Base class untuk semua report"""

    def __init__(self, title):
        self.title = title
        self.data = []

    def add_data(self, item):
        """Concrete method - shared behavior"""
        self.data.append(item)

    @abstractmethod
    def generate(self):
        """Abstract method - must be implemented by subclass"""
        pass

    def export(self, filename):
        """Template method pattern"""
        content = self.generate()
        with open(filename, 'w') as f:
            f.write(content)
        return f"Report exported to {filename}"`}</CodeBlock>


<h3>2. Keep Abstract Classes Focused</h3>
<CodeBlock language="">{`# Good - focused interface
class Sortable(ABC):
    @abstractmethod
    def sort(self):
        pass

class Searchable(ABC):
    @abstractmethod
    def search(self, query):
        pass

# Better than one large abstract class with many methods`}</CodeBlock>


<h3>3. Document Abstract Methods</h3>
<CodeBlock language="">{`from abc import ABC, abstractmethod

class Plugin(ABC):
    @abstractmethod
    def initialize(self):
        """
        Initialize the plugin.

        This method should set up any necessary resources
        and prepare the plugin for use.

        Returns:
            bool: True if initialization successful
        """
        pass`}</CodeBlock>


<h3>Kapan Menggunakan Abstract Class?</h3>

<h3>Latihan</h3>
<ul>
  <li>
Buat abstract class FileHandler dengan methods:

read() - abstract
write() - abstract
close() - concrete
Implementasikan TextFileHandler dan BinaryFileHandler

</li>
  <li>read() - abstract</li>
  <li>write() - abstract</li>
  <li>close() - concrete</li>
  <li>Implementasikan TextFileHandler dan BinaryFileHandler</li>
  <li>
Buat interface Serializable dengan methods:

to_json() - abstract
from_json() - abstract class method
Implementasikan untuk minimal 2 class berbeda

</li>
  <li>to_json() - abstract</li>
  <li>from_json() - abstract class method</li>
  <li>Implementasikan untuk minimal 2 class berbeda</li>
  <li>
Buat abstract class GameCharacter dengan:

Abstract properties: health, attack_power
Abstract methods: attack(), defend()
Concrete method: is_alive()
Implementasikan Warrior, Mage, Archer

</li>
  <li>Abstract properties: health, attack_power</li>
  <li>Abstract methods: attack(), defend()</li>
  <li>Concrete method: is_alive()</li>
  <li>Implementasikan Warrior, Mage, Archer</li>
</ul>

<p>Buat abstract class FileHandler dengan methods:</p>

<ul>
  <li>read() - abstract</li>
  <li>write() - abstract</li>
  <li>close() - concrete</li>
  <li>Implementasikan TextFileHandler dan BinaryFileHandler</li>
</ul>

<p>Buat interface Serializable dengan methods:</p>

<ul>
  <li>to_json() - abstract</li>
  <li>from_json() - abstract class method</li>
  <li>Implementasikan untuk minimal 2 class berbeda</li>
</ul>

<p>Buat abstract class GameCharacter dengan:</p>

<ul>
  <li>Abstract properties: health, attack_power</li>
  <li>Abstract methods: attack(), defend()</li>
  <li>Concrete method: is_alive()</li>
  <li>Implementasikan Warrior, Mage, Archer</li>
</ul>

<p>Polymorphism</p>

<p>Memahami polymorphism, method overriding, dan duck typing</p>

<p>Praktikum Pyramid Framework</p>

<p>Membuat aplikasi CRUD sederhana dengan Pyramid Framework dan PostgreSQL</p>


      <SubmissionBox pertemuan={5} />
    </>
  );
}
