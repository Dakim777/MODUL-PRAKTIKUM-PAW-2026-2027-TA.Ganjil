// Data definisi semua pertemuan praktikum
// Judul, deskripsi, tujuan, dan subtopik terstruktur tanpa label artificial "Langkah X"

export interface SubTopik {
  id: string;
  judul: string;
  level?: 2 | 3;
}

export interface Pertemuan {
  nomor: number;
  judul: string;
  subjudul: string;
  deskripsi: string;
  durasi: string;
  tujuan: string[];
  tersedia: boolean;
  subTopik: SubTopik[];
}

export const daftarPertemuan: Pertemuan[] = [
  {
    nomor: 1,
    judul: "JavaScript Dasar",
    subjudul: "Mengenal dasar-dasar JavaScript dan konsep pemrograman web",
    deskripsi:
      "Variabel, tipe data, struktur kondisional, loop, fungsi, event handler, array, objek, DOM manipulation, dan Fetch API.",
    durasi: "2 × 50 menit",
    tujuan: [
      "Memahami konsep dasar JavaScript sebagai bahasa pemrograman web",
      "Menguasai penggunaan variabel, tipe data, dan operator dalam JavaScript",
      "Mengimplementasikan struktur kendali (conditionals dan loops)",
      "Membuat dan menggunakan fungsi dalam JavaScript",
      "Mengerti cara menangani event dan memanipulasi DOM",
    ],
    tersedia: true,
    subTopik: [
      { id: "tujuan-pembelajaran", judul: "Tujuan Pembelajaran", level: 2 },
      { id: "dasar-teori", judul: "Dasar Teori JavaScript", level: 2 },
      { id: "prasyarat-alat", judul: "Prasyarat, Alat & Bahan", level: 2 },
      { id: "setup-file", judul: "1. Setup File HTML & Script JS", level: 3 },
      { id: "variabel-output", judul: "2. Variabel & Output Konsol", level: 3 },
      { id: "kondisional", judul: "3. Struktur Logika & Kondisional", level: 3 },
      { id: "perulangan", judul: "4. Perulangan (Looping) & Iterasi Data", level: 3 },
      { id: "fungsi-event", judul: "5. Deklarasi Fungsi & Event Handler", level: 3 },
      { id: "array-objek", judul: "6. Struktur Data Array & Objek", level: 3 },
      { id: "manipulasi-dom", judul: "7. Manipulasi DOM Dinamis", level: 3 },
      { id: "fetch-api", judul: "8. Integrasi Fetch API & Async/Await", level: 3 },
      { id: "hasil-praktikum", judul: "Hasil Praktikum", level: 2 },
      { id: "tugas-praktikum", judul: "Tugas: Kasir Mini POS", level: 2 },
      { id: "format-pengumpulan", judul: "Format Pengumpulan", level: 2 },
      { id: "link-submission", judul: "Pengumpulan Tugas", level: 2 },
    ],
  },
  {
    nomor: 2,
    judul: "JavaScript Next Gen (ES6+)",
    subjudul:
      "Mengenal fitur modern JavaScript (ES6+) dan penerapannya dalam pengembangan web",
    deskripsi:
      "Let/const, arrow functions, template literals, destructuring, spread/rest, default parameters, class, modules, array methods modern, Promise, dan async/await.",
    durasi: "2 × 50 menit",
    tujuan: [
      "Memahami fitur-fitur modern JavaScript (ES6+)",
      "Menguasai penggunaan let dan const untuk deklarasi variabel",
      "Mengimplementasikan arrow functions dalam kode JavaScript",
      "Menerapkan destructuring, rest dan spread operators",
      "Menggunakan template literals dengan efektif",
      "Mengenal dan mengimplementasikan modules dan import/export",
      "Menguasai metode array modern dan higher-order functions",
      "Menggunakan Promise dan async/await untuk operasi asinkron",
    ],
    tersedia: true,
    subTopik: [
      { id: "tujuan-pembelajaran", judul: "Tujuan Pembelajaran", level: 2 },
      { id: "dasar-teori", judul: "Dasar Teori Modern JS", level: 2 },
      { id: "alat-bahan", judul: "Alat dan Bahan", level: 2 },
      { id: "struktur-proyek", judul: "1. Struktur Direktori Proyek", level: 3 },
      { id: "let-const-arrow", judul: "2. Variabel Scoping & Arrow Functions", level: 3 },
      { id: "destructuring-spread", judul: "3. Destructuring, Spread & Rest", level: 3 },
      { id: "classes-objects", judul: "4. Default Parameters & Class ES6", level: 3 },
      { id: "array-methods", judul: "5. Modern Array Methods", level: 3 },
      { id: "async-await", judul: "6. Asynchronous: Promise & Async/Await", level: 3 },
      { id: "hasil-praktikum", judul: "Hasil Praktikum", level: 2 },
      { id: "tugas-praktikum", judul: "Tugas: Personal Dashboard", level: 2 },
      { id: "format-pengumpulan", judul: "Format Pengumpulan", level: 2 },
      { id: "link-submission", judul: "Pengumpulan Tugas", level: 2 },
    ],
  },
  {
    nomor: 3,
    judul: "React Basics",
    subjudul:
      "Memahami konsep dasar React dan membangun aplikasi interaktif dengan Component-Based Architecture",
    deskripsi:
      "Functional components, hooks (useState/useEffect), props, event handling, conditional rendering, React Router, custom hooks, Context API, dan testing dengan Jest.",
    durasi: "2 × 50 menit",
    tujuan: [
      "Memahami filosofi dan konsep dasar React (Component-Based Architecture)",
      "Membuat dan menggunakan functional components dengan hooks",
      "Mengelola state dan props dalam aplikasi React",
      "Menerapkan event handling dan conditional rendering",
      "Membuat form interaktif dengan controlled components",
      "Mengelola daftar data dengan keys dan rendering lists",
      "Memahami lifecycle components melalui useEffect",
      "Mengimplementasikan routing dasar dengan React Router",
    ],
    tersedia: true,
    subTopik: [
      { id: "tujuan-pembelajaran", judul: "Tujuan Pembelajaran", level: 2 },
      { id: "dasar-teori", judul: "Konsep Dasar React", level: 2 },
      { id: "alat-bahan", judul: "Alat dan Bahan", level: 2 },
      { id: "setup-react", judul: "1. Setup Project React", level: 3 },
      { id: "komponen-pertama", judul: "2. Struktur Functional Component", level: 3 },
      { id: "state-hooks", judul: "3. Manajemen State dengan Hooks", level: 3 },
      { id: "react-routing", judul: "4. Routing dengan React Router", level: 3 },
      { id: "custom-hook", judul: "5. Pembuatan Custom Hook", level: 3 },
      { id: "context-api", judul: "6. Global State dengan Context API", level: 3 },
      { id: "testing-jest", judul: "7. Testing dengan Jest & RTL", level: 3 },
      { id: "tugas-praktikum", judul: "Tugas: Manajemen Buku Pribadi", level: 2 },
      { id: "format-pengumpulan", judul: "Format Pengumpulan", level: 2 },
      { id: "link-submission", judul: "Pengumpulan Tugas", level: 2 },
    ],
  },
  {
    nomor: 4,
    judul: "Python Dasar",
    subjudul: "Mengenal dasar-dasar Python dan pemrograman berbasis objek",
    deskripsi:
      "Variabel dan tipe data Python, operator, struktur kendali, loop, fungsi, list, dictionary, set, dan penggunaan modul Python.",
    durasi: "2 × 50 menit",
    tujuan: [
      "Memahami konsep dasar Python sebagai bahasa pemrograman",
      "Menguasai penggunaan variabel, tipe data, dan operator dalam Python",
      "Mengimplementasikan struktur kendali (conditionals dan loops)",
      "Membuat dan menggunakan fungsi dalam Python",
      "Bekerja dengan koleksi data seperti list, dictionary, dan set",
    ],
    tersedia: true,
    subTopik: [
      { id: "tujuan-pembelajaran", judul: "Tujuan Pembelajaran", level: 2 },
      { id: "dasar-teori", judul: "Dasar Teori Python", level: 2 },
      { id: "prasyarat-alat", judul: "Prasyarat & Lingkungan Kerja", level: 2 },
      { id: "eksekusi-python", judul: "1. Pengenalan & Eksekusi Python", level: 3 },
      { id: "variabel-tipe", judul: "2. Variabel & Tipe Data", level: 3 },
      { id: "operator-ekspresi", judul: "3. Operator & Evaluasi Ekspresi", level: 3 },
      { id: "percabangan", judul: "4. Struktur Kendali: Percabangan", level: 3 },
      { id: "perulangan", judul: "5. Struktur Kendali: Perulangan", level: 3 },
      { id: "definisi-fungsi", judul: "6. Modularitas Fungsi & Parameter", level: 3 },
      { id: "struktur-data", judul: "7. Struktur Data: List & Dictionary", level: 3 },
      { id: "modul-python", judul: "8. Penggunaan Modul & Package", level: 3 },
      { id: "tugas-praktikum", judul: "Tugas Praktikum", level: 2 },
      { id: "format-pengumpulan", judul: "Format Pengumpulan", level: 2 },
      { id: "link-submission", judul: "Pengumpulan Tugas", level: 2 },
    ],
  },
  {
    nomor: 5,
    judul: "Python OOP",
    subjudul: "Pemrograman Berorientasi Objek dengan Python",
    deskripsi:
      "Class, object, inheritance, encapsulation, polymorphism, abstract class, dan implementasi sistem berbasis OOP di Python.",
    durasi: "2 × 50 menit",
    tujuan: [
      "Memahami konsep dasar Object-Oriented Programming (OOP)",
      "Mengimplementasikan Class dan Object dalam Python",
      "Menerapkan Atribut dan Metode dalam Class",
      "Menggunakan Constructor dan Self dalam Python",
      "Implementasi Inheritance (Pewarisan) antar Class",
      "Menerapkan Encapsulation dan Access Modifiers",
      "Memahami Polymorphism dan Method Overriding",
      "Implementasi Abstract Class dan Interface",
    ],
    tersedia: true,
    subTopik: [
      { id: "tujuan-pembelajaran", judul: "Tujuan Pembelajaran", level: 2 },
      { id: "dasar-teori", judul: "Pilar Utama OOP Python", level: 2 },
      { id: "class-object", judul: "1. Class, Object & Constructor", level: 3 },
      { id: "inheritance", judul: "2. Pewarisan Karakteristik (Inheritance)", level: 3 },
      { id: "encapsulation", judul: "3. Enkapsulasi & Access Modifiers", level: 3 },
      { id: "polymorphism", judul: "4. Polymorphism & Method Overriding", level: 3 },
      { id: "abstract-class", judul: "5. Abstract Classes & Interface", level: 3 },
      { id: "tugas-praktikum", judul: "Tugas: Sistem Perpustakaan", level: 2 },
      { id: "format-pengumpulan", judul: "Format Pengumpulan", level: 2 },
      { id: "link-submission", judul: "Pengumpulan Tugas", level: 2 },
    ],
  },
  {
    nomor: 6,
    judul: "Pyramid Framework",
    subjudul: "Membuat Aplikasi CRUD Sederhana dengan Pyramid dan PostgreSQL",
    deskripsi:
      "Setup proyek Pyramid dengan cookiecutter, konfigurasi PostgreSQL, SQLAlchemy ORM, migrasi Alembic, CRUD views, dan pengujian REST API.",
    durasi: "2 × 50 menit",
    tujuan: [
      "Memahami konsep dasar Pyramid Framework dalam pengembangan web",
      "Menggunakan cookiecutter untuk membuat struktur proyek Pyramid",
      "Mengonfigurasi koneksi database PostgreSQL dengan SQLAlchemy",
      "Membuat model data menggunakan SQLAlchemy ORM",
      "Mengimplementasikan migrasi database dengan Alembic",
      "Membuat view dan route untuk operasi CRUD sederhana",
      "Mengembangkan aplikasi web CRUD pengelolaan data Mahasiswa",
    ],
    tersedia: true,
    subTopik: [
      { id: "tujuan-pembelajaran", judul: "Tujuan Pembelajaran", level: 2 },
      { id: "dasar-teori", judul: "Arsitektur Pyramid Framework", level: 2 },
      { id: "alat-bahan", judul: "Alat dan Dependensi", level: 2 },
      { id: "persiapan-lingkungan", judul: "1. Persiapan Lingkungan Pengembangan", level: 3 },
      { id: "scaffold-cookiecutter", judul: "2. Scaffolding Proyek Cookiecutter", level: 3 },
      { id: "koneksi-db", judul: "3. Konfigurasi Database PostgreSQL", level: 3 },
      { id: "model-mahasiswa", judul: "4. Pemodelan Data SQLAlchemy", level: 3 },
      { id: "migrasi-alembic", judul: "5. Migrasi Database dengan Alembic", level: 3 },
      { id: "views-crud", judul: "6. Implementasi CRUD Views Handlers", level: 3 },
      { id: "pemetaan-routes", judul: "7. Konfigurasi Rute & URL Dispatch", level: 3 },
      { id: "pengujian-api", judul: "8. Eksekusi & Pengujian REST API", level: 3 },
      { id: "tugas-praktikum", judul: "Tugas: Manajemen Matakuliah", level: 2 },
      { id: "format-pengumpulan", judul: "Format Pengumpulan", level: 2 },
      { id: "link-submission", judul: "Pengumpulan Tugas", level: 2 },
    ],
  },
  {
    nomor: 7,
    judul: "Basis Data + React Frontend",
    subjudul:
      "SQLAlchemy, Alembic, PostgreSQL, Pyramid + Bonus React Frontend",
    deskripsi:
      "Arsitektur MVC dengan service layer, schema validasi Marshmallow, REST API Products, dan bonus implementasi frontend React yang terhubung ke API Pyramid.",
    durasi: "2 × 50 menit",
    tujuan: [
      "Mempersiapkan lingkungan pengembangan dengan Python dan PostgreSQL",
      "Mengkonfigurasi koneksi basis data menggunakan SQLAlchemy",
      "Membuat dan mengelola model data menggunakan SQLAlchemy ORM",
      "Menerapkan migrasi basis data dengan Alembic",
      "Membuat layanan REST API dengan kerangka kerja Pyramid",
      "Mengintegrasikan model data dalam endpoint API",
      "Mengimplementasikan validasi data menggunakan Schema (Marshmallow)",
      "Membangun service layer untuk logika bisnis aplikasi",
    ],
    tersedia: true,
    subTopik: [
      { id: "tujuan-pembelajaran", judul: "Tujuan Pembelajaran", level: 2 },
      { id: "dasar-teori", judul: "Arsitektur Backend & Database", level: 2 },
      { id: "paket-dibutuhkan", judul: "Paket & Dependensi Proyek", level: 2 },
      { id: "persiapan-backend", judul: "1. Inisialisasi Backend & Dependency", level: 3 },
      { id: "koneksi-database", judul: "2. Konfigurasi Database PostgreSQL", level: 3 },
      { id: "pemodelan-data", judul: "3. Pemodelan Entitas SQLAlchemy", level: 3 },
      { id: "migrasi-alembic", judul: "4. Migrasi Database dengan Alembic", level: 3 },
      { id: "validasi-schema", judul: "5. Validasi Schema Marshmallow", level: 3 },
      { id: "service-layer", judul: "6. Implementasi Service Layer", level: 3 },
      { id: "endpoint-produk", judul: "7. Pembuatan API Endpoints", level: 3 },
      { id: "pengujian-api", judul: "8. Pengujian & Validasi API", level: 3 },
      { id: "frontend-react", judul: "Bonus: Integrasi Frontend React", level: 2 },
      { id: "hasil-praktikum", judul: "Hasil Praktikum", level: 2 },
      { id: "format-pengumpulan", judul: "Format Pengumpulan", level: 2 },
      { id: "link-submission", judul: "Pengumpulan Tugas", level: 2 },
    ],
  },
];

export function getPertemuan(nomor: number): Pertemuan | undefined {
  return daftarPertemuan.find((p) => p.nomor === nomor);
}

export function getPrevNext(nomor: number): {
  prev: Pertemuan | null;
  next: Pertemuan | null;
} {
  const idx = daftarPertemuan.findIndex((p) => p.nomor === nomor);
  return {
    prev: idx > 0 ? daftarPertemuan[idx - 1] : null,
    next:
      idx < daftarPertemuan.length - 1 ? daftarPertemuan[idx + 1] : null,
  };
}
