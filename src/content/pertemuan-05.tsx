import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 5: Python OOP
const Info = ({ text }: { text: string }) => (
  <div className="callout callout-info"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink:0,marginTop:"2px",color:"var(--color-accent)" }}><circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg><div className="callout-body"><p>{text}</p></div></div>
);
const Exercise = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="callout callout-warning"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink:0,marginTop:"2px",color:"var(--color-amber-500)" }}><path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg><div className="callout-body"><p><strong>Latihan Mandiri: {title}</strong><br />{children}</p></div></div>
);

export default function Pertemuan5() {
  return (
    <>
      <h2 id="dasar-teori">Pilar Utama OOP Python</h2>
      <p>Object-Oriented Programming (OOP) adalah paradigma pemrograman yang menggunakan konsep "objek" dengan atribut dan metode. Python sepenuhnya mendukung OOP: class, object, inheritance, encapsulation, polymorphism.</p>
      <div style={{ overflowX:"auto", marginBottom:"1.25rem" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.875rem" }}>
          <thead><tr style={{ background:"var(--color-surface)", borderBottom:"2px solid var(--color-border)" }}>
            <th style={{ padding:"0.625rem 1rem", textAlign:"left", fontWeight:600 }}>Konsep</th>
            <th style={{ padding:"0.625rem 1rem", textAlign:"left", fontWeight:600 }}>Deskripsi</th>
          </tr></thead>
          <tbody>{[["Class","Blueprint untuk membuat objek"],["Object","Instance dari sebuah class (state & behavior)"],["Inheritance","Kemampuan class mewarisi atribut/metode dari class lain"],["Encapsulation","Menyembunyikan detail implementasi & membatasi akses"],["Polymorphism","Objek berbeda merespons metode dengan nama sama"],["Abstraction","Menyederhanakan kompleksitas dengan menyembunyikan detail"]].map(([k,v],i)=>(
            <tr key={i} style={{ borderBottom:"1px solid var(--color-border-subtle)" }}>
              <td style={{ padding:"0.5rem 1rem", fontWeight:500, color:"var(--color-navy-800)" }}>{k}</td>
              <td style={{ padding:"0.5rem 1rem", color:"var(--color-text-secondary)" }}>{v}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <Info text="Bayangkan class seperti cetakan kue dan objek adalah kue yang dihasilkan. Setiap kue memiliki bentuk sama (metode) tapi isian berbeda (atribut). Inheritance seperti membuat cetakan kue baru berdasarkan cetakan yang sudah ada." />

      <h2 id="panduan-praktik">Langkah Praktikum</h2>

      <h3 id="class-object">1. Class, Object & Constructor</h3>
      <CodeBlock language="python">{`# mahasiswa.py
class Mahasiswa:
    # Atribut Class (shared by all instances)
    jurusan = "Teknik Informatika"

    def __init__(self, nama, nim):
        # Atribut Instance (unik per objek)
        self.nama = nama
        self.nim  = nim

    def display_info(self):
        print(f"Nama: {self.nama}")
        print(f"NIM:  {self.nim}")
        print(f"Jurusan: {self.jurusan}")

    def update_nama(self, nama_baru):
        self.nama = nama_baru
        print(f"Nama berhasil diubah menjadi {nama_baru}")

# Membuat object (instance)
mhs1 = Mahasiswa("Budi Santoso", "TI12345")
mhs2 = Mahasiswa("Ani Wijaya",   "TI67890")

mhs1.display_info()
mhs1.update_nama("Budi Prakoso")

# Mengubah class attribute mempengaruhi semua instance
Mahasiswa.jurusan = "Informatika"
mhs1.display_info()   # Informatika
mhs2.display_info()   # Informatika`}</CodeBlock>
      <Info text="class mendefinisikan blueprint; __init__ adalah constructor/initializer; self referensi ke instance; jurusan adalah class attribute (shared semua instance); nama, nim adalah instance attributes (unik tiap objek)." />
      <Exercise title="Status Kelulusan Mahasiswa">Tambahkan method baru <code>is_lulus(self, nilai_rata_rata)</code> pada class <code>Mahasiswa</code> yang mengembalikan <code>True</code> jika nilai rata-rata &ge;60, <code>False</code> jika kurang. Expected: <code>mhs1.is_lulus(75)</code> → <code>True</code>, <code>mhs1.is_lulus(50)</code> → <code>False</code>.</Exercise>

      <h3 id="inheritance">2. Pewarisan Karakteristik (Inheritance)</h3>
      <CodeBlock language="python">{`# inheritance.py
class Kendaraan:
    def __init__(self, merek, tahun):
        self.merek    = merek
        self.tahun    = tahun
        self.odometer = 0

    def deskripsi(self):
        return f"{self.merek} ({self.tahun})"

    def update_odometer(self, km):
        if km >= self.odometer: self.odometer = km
        else: print("Tidak bisa mengubah odometer ke nilai lebih kecil!")

class Mobil(Kendaraan):
    def __init__(self, merek, tahun, tipe):
        super().__init__(merek, tahun)    # Panggil constructor parent
        self.tipe   = tipe
        self.bensin = 100

    def isi_bensin(self, liter):
        self.bensin += liter
        return f"Bensin diisi {liter} liter. Total: {self.bensin}"

    def deskripsi(self):                  # Method Overriding
        return f"{super().deskripsi()} - {self.tipe}"

class Motor(Kendaraan):
    def __init__(self, merek, tahun, cc):
        super().__init__(merek, tahun)
        self.cc = cc

    def deskripsi(self):
        return f"{self.merek} ({self.tahun}) - {self.cc}cc"

mobil1 = Mobil("Toyota", 2022, "SUV")
motor1 = Motor("Honda", 2021, 150)

print(mobil1.deskripsi())    # Toyota (2022) - SUV
print(motor1.deskripsi())    # Honda (2021) - 150cc
mobil1.update_odometer(1500)
print(mobil1.isi_bensin(20))`}</CodeBlock>
      <Info text="class Mobil(Kendaraan): Mobil subclass dari Kendaraan; super().__init__(...) memanggil constructor parent; deskripsi() di Mobil/Motor adalah Method Overriding." />
      <Exercise title="Class Truk">Buat class baru <code>Truk</code> yang mewarisi dari <code>Kendaraan</code>, dengan atribut tambahan <code>kapasitas_muatan</code> (kg) dan method <code>muat_barang(berat)</code> yang mengembalikan pesan berhasil/gagal tergantung apakah berat melebihi kapasitas.</Exercise>

      <h3 id="encapsulation">3. Enkapsulasi & Access Modifiers</h3>
      <CodeBlock language="python">{`# encapsulation.py
class Student:
    def __init__(self, name, nim):
        self.name      = name           # Public
        self._program  = "Teknik"       # Protected (konvensi, satu underscore)
        self.__id      = "2023-" + nim  # Private (dua underscore = name mangling)

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

s1 = Student("Budi", "12345")

print(s1.name)          # Public: bisa diakses
print(s1._program)      # Protected: bisa diakses tapi sebaiknya jangan

try:
    print(s1.__id)      # Private: AttributeError!
except AttributeError as e:
    print(f"Error: {e}")

# Akses private via name mangling (tidak disarankan)
print(s1._Student__id)  # 2023-12345

# Property getter/setter
print(s1.program)       # Teknik
s1.program = "Sains"    # Valid
s1.program = "Hukum"    # "Program tidak valid"`}</CodeBlock>
      <Exercise title="NIM Read-Only">Modifikasi class <code>Student</code> supaya atribut <code>nim</code> tidak bisa diubah setelah objek dibuat, menggunakan <code>@property</code> tanpa setter (atau setter yang selalu menolak). Expected: mencoba <code>student1.nim = "123"</code> menghasilkan error atau pesan bahwa NIM tidak bisa diubah.</Exercise>

      <h3 id="polymorphism">4. Polymorphism & Method Overriding</h3>
      <CodeBlock language="python">{`# polymorphism.py
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass  # Didefinisikan di subclass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Cow(Animal):
    def speak(self):
        return f"{self.name} says Moo!"

# Polymorphism: fungsi yang sama bekerja untuk objek berbeda
def animal_sound(animal):
    return animal.speak()

animals = [Dog("Buddy"), Cat("Whiskers"), Cow("Milly")]
for animal in animals:
    print(animal_sound(animal))`}</CodeBlock>
      <Info text={"Python tidak peduli tipe objek, selama objek punya method yang dipanggil. Konsep ini disebut \"Duck typing\": if it walks like a duck and quacks like a duck, it's a duck."} />

      <Exercise title="Tambah Hewan Baru">Tambahkan 2 class baru <code>Bird</code> dan <code>Elephant</code> yang mewarisi dari <code>Animal</code>, masing-masing dengan implementasi <code>speak()</code> sendiri. Masukkan ke list <code>animals</code>, buktikan <code>animal_sound()</code> tetap bekerja tanpa modifikasi.</Exercise>

      <h3 id="abstract-class">5. Abstract Classes & Interface</h3>
      <CodeBlock language="python">{`# abstract_class.py
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        """Method ini harus diimplementasikan oleh subclass"""
        pass

    @abstractmethod
    def perimeter(self):
        pass

    def describe(self):  # Method biasa (tidak wajib di-override)
        return "Ini adalah bentuk geometris"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width  = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        import math
        return math.pi * self.radius ** 2

    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

# Tidak bisa membuat instance Shape langsung
try:
    shape = Shape()   # TypeError!
except TypeError as e:
    print(f"Error: {e}")

rect   = Rectangle(5, 4)
circle = Circle(3)
print(f"Luas persegi panjang: {rect.area()}")
print(f"Luas lingkaran: {circle.area():.2f}")`}</CodeBlock>
      <Info text="Implementasi Interface di Python: tidak ada keyword 'interface' seperti Java, tapi bisa diimplementasikan dengan abstract base class di mana semua method abstract, memaksa subclass mengimplementasikan semua method yang ditentukan." />
      <Exercise title="Shape: Triangle">Buat class <code>Triangle(Shape)</code> yang mengimplementasikan <code>area()</code> (rumus <code>0.5 * alas * tinggi</code>) dan <code>perimeter()</code> (jumlah 3 sisi). Expected: menampilkan luas dan keliling segitiga sesuai input.</Exercise>

      <h2 id="tugas-praktikum">Tugas: Sistem Perpustakaan</h2>
      <p>Persyaratan:</p>
      <ul>
        <li>Abstract class <code>LibraryItem</code> sebagai dasar semua item perpustakaan</li>
        <li>Minimal 2 subclass (contoh: <code>Book</code> dan <code>Magazine</code>) yang mewarisi <code>LibraryItem</code></li>
        <li>Setiap subclass mengimplementasikan minimal satu method abstract dari parent</li>
        <li>Class <code>Library</code> untuk menyimpan &amp; mengelola koleksi item perpustakaan</li>
        <li>Encapsulation dengan access modifiers (protected/private) untuk data penting</li>
        <li>Property decorator untuk minimal satu atribut</li>
        <li>Sistem bisa: menambahkan item, menampilkan daftar item, mencari item berdasarkan judul atau id</li>
      </ul>
      <div style={{ overflowX:"auto", marginBottom:"1.25rem" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.875rem" }}>
          <thead><tr style={{ background:"var(--color-surface)", borderBottom:"2px solid var(--color-border)" }}>
            <th style={{ padding:"0.625rem 1rem", textAlign:"left", fontWeight:600 }}>Aspek</th>
            <th style={{ padding:"0.625rem 1rem", textAlign:"left", fontWeight:600 }}>Bobot</th>
          </tr></thead>
          <tbody>{[["Penggunaan Abstract Class dan Inheritance","30%"],["Implementasi Encapsulation","25%"],["Penerapan Polymorphism","20%"],["Fungsionalitas Program","15%"],["Dokumentasi Kode","10%"]].map(([a,b],i)=>(
            <tr key={i} style={{ borderBottom:"1px solid var(--color-border-subtle)" }}>
              <td style={{ padding:"0.5rem 1rem", color:"var(--color-text-secondary)" }}>{a}</td>
              <td style={{ padding:"0.5rem 1rem", fontWeight:600, color:"var(--color-accent)" }}>{b}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>

      <h2 id="format-pengumpulan">Format Pengumpulan</h2>
      <ul>
        <li>Repository: <code>pemrograman_python_itera_[NIM]</code></li>
        <li>Folder: <code>[NAMA]_[NIM]_pertemuan5</code></li>
        <li><strong>Deadline:</strong> Rabu, 7 Mei 2025, pukul 23:59 WIB. Keterlambatan: pengurangan 10% per hari.</li>
      </ul>

      <SubmissionBox pertemuan={5} />
    </>
  );
}
