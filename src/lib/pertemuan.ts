// Data definisi semua pertemuan praktikum
// Judul, deskripsi, tujuan, dan subtopik terstruktur berbasis headline utama pembahasan

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
      { id: "dasar-teori", judul: "Dasar Teori JavaScript" },
      { id: "variabel-kondisional", judul: "Variabel & Kondisional" },
      { id: "loop-fungsi", judul: "Loop & Perulangan" },
      { id: "fungsi-dan-event-handler", judul: "Fungsi & Event Handler" },
      { id: "array-objek", judul: "Struktur Data: Array & Objek" },
      { id: "dom-api", judul: "Manipulasi DOM & Fetch API" },
      { id: "tugas-praktikum", judul: "Tugas: Kasir Mini POS" },
      { id: "format-pengumpulan", judul: "Format Pengumpulan" },
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
      { id: "dasar-teori", judul: "Dasar Teori Modern JS" },
      { id: "setup-project", judul: "Setup Project" },
      { id: "let-const-dan-arrow-functions", judul: "Let, Const & Arrow Functions" },
      { id: "template-literals", judul: "Template Literals" },
      { id: "destructuring-dan-operators", judul: "Destructuring & Spread/Rest" },
      { id: "classes-dan-object-literals", judul: "Classes & Object Literals" },
      { id: "modern-array-methods", judul: "Modern Array Methods" },
      { id: "async-programming", judul: "Async Programming (Promise & Async/Await)" },
      { id: "tugas-praktikum", judul: "Tugas: Personal Dashboard" },
      { id: "format-pengumpulan", judul: "Format Pengumpulan" },
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
      { id: "dasar-teori", judul: "Konsep Dasar React" },
      { id: "setup-react", judul: "1. Setup Project React" },
      { id: "komponen-pertama", judul: "2. Components & Props" },
      { id: "state-hooks", judul: "3. State Management & Hooks" },
      { id: "react-routing", judul: "4. Routing dengan React Router" },
      { id: "custom-hook", judul: "5. Pembuatan Custom Hook" },
      { id: "context-api", judul: "6. Global State Context API" },
      { id: "testing-jest", judul: "7. Testing dengan Jest & RTL" },
      { id: "tugas-praktikum", judul: "Tugas: Manajemen Buku" },
      { id: "format-pengumpulan", judul: "Format Pengumpulan" },
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
      { id: "dasar-teori", judul: "Dasar Teori Python" },
      { id: "pengenalan-python", judul: "1. Pengenalan & Eksekusi Python" },
      { id: "variabel-tipe-data", judul: "2. Variabel & Tipe Data" },
      { id: "struktur-kendali", judul: "3. Struktur Kendali (If & Loop)" },
      { id: "fungsi", judul: "4. Modularitas Fungsi" },
      { id: "struktur-data", judul: "5. Struktur Data (List, Dict, Set)" },
      { id: "modul-python", judul: "6. Modul & Package Python" },
      { id: "tugas-praktikum", judul: "Tugas Praktikum" },
      { id: "format-pengumpulan", judul: "Format Pengumpulan" },
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
      { id: "dasar-teori", judul: "Pilar Utama OOP Python" },
      { id: "pengenalan-oop", judul: "1. Pengenalan Konsep OOP" },
      { id: "class-dan-object", judul: "2. Class & Object" },
      { id: "inheritance-pewarisan", judul: "3. Inheritance (Pewarisan)" },
      { id: "encapsulation", judul: "4. Encapsulation & Properties" },
      { id: "polymorphism", judul: "5. Polymorphism & Overriding" },
      { id: "abstract-class", judul: "6. Abstract Class & Interface" },
      { id: "tugas-praktikum", judul: "Tugas: Sistem Perpustakaan" },
      { id: "format-pengumpulan", judul: "Format Pengumpulan" },
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
      { id: "dasar-teori", judul: "Arsitektur Pyramid Framework" },
      { id: "setup-environment", judul: "1. Setup Environment & Cookiecutter" },
      { id: "database-models", judul: "2. Database PostgreSQL & SQLAlchemy" },
      { id: "views-routes", judul: "3. CRUD Views & URL Dispatch" },
      { id: "testing", judul: "4. Pengujian REST API" },
      { id: "tugas-praktikum", judul: "Tugas: Manajemen Matakuliah" },
      { id: "format-pengumpulan", judul: "Format Pengumpulan" },
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
      { id: "dasar-teori", judul: "Arsitektur Backend & Database" },
      { id: "paket-dibutuhkan", judul: "Paket & Dependensi Proyek" },
      { id: "persiapan-backend", judul: "1. Inisialisasi Backend & Dependency" },
      { id: "koneksi-database", judul: "2. Konfigurasi Database PostgreSQL" },
      { id: "pemodelan-data", judul: "3. Pemodelan Data & Migrasi Alembic" },
      { id: "validasi-schema", judul: "4. Validasi Schema & Service Layer" },
      { id: "endpoint-produk", judul: "5. API Endpoints & Pengujian" },
      { id: "frontend-react", judul: "Bonus: Integrasi Frontend React" },
      { id: "hasil-praktikum", judul: "Hasil Praktikum" },
      { id: "format-pengumpulan", judul: "Format Pengumpulan" },
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
