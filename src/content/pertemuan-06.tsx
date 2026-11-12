import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 6: Python Pyramid Framework
export default function Pertemuan6({ subId }: { subId?: string }) {
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

  const calloutCheckpoint = (tahap: string, title: string, text: React.ReactNode) => (
    <div
      style={{
        marginTop: "1.25rem",
        marginBottom: "1.75rem",
        padding: "1rem 1.25rem",
        borderRadius: "10px",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        backgroundColor: "rgba(59, 130, 246, 0.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <strong style={{ color: "#2563eb", fontSize: "0.95rem" }}>
          Hands-On Practice / Checkpoint Verifikasi: {tahap} &mdash; {title}
        </strong>
      </div>
      <div style={{ fontSize: "0.9rem", color: "var(--color-text-primary)", lineHeight: 1.65 }}>
        {text}
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
          Penjelasan Logika Kode:
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
          Hasil Eksekusi &amp; Output Terminal:
        </strong>
        {text}
      </div>
    </div>
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* 0. ARSITEKTUR PYRAMID FRAMEWORK (DASAR TEORI)                             */}
      {/* ========================================================================= */}
      {(!subId || subId === "dasar-teori") && (
        <section id="dasar-teori">
          <h2>Arsitektur Pyramid Framework</h2>
          <p>
            <strong>Pyramid</strong> adalah web application framework berbasis Python tingkat tinggi yang dirancang dengan prinsip keterbukaan, skalabilitas tinggi, serta fleksibilitas arsitektur. Dikelola oleh <strong>Pylons Project</strong>, Pyramid mengusung filosofi utama: <em>&quot;Pay only for what you eat&quot;</em>.
          </p>
          <p>
            Artinya, Pyramid tidak memaksa pengembang menggunakan ORM tertentu, template engine tertentu, atau skema otentikasi bawaan yang kaku. Anda bebas memulai dari aplikasi mikro 1-file sederhana, lalu bertransisi secara mulus menjadi aplikasi enterprise skala besar tanpa perlu merombak ulang fondasi framework.
          </p>

          <h3>Pyramid di Antara Spektrum Framework Python</h3>
          <p>
            Dalam ekosistem pengembangan web Python, framework terbagi ke dalam spektrum fleksibilitas vs kelengkapan bawaan (<em>batteries-included</em>):
          </p>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem" }}>Kategori Framework</th>
                  <th style={{ padding: "0.75rem" }}>Contoh Framework</th>
                  <th style={{ padding: "0.75rem" }}>Karakteristik &amp; Trade-off</th>
                  <th style={{ padding: "0.75rem" }}>Kesesuaian Penggunaan</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Micro-framework</td>
                  <td style={{ padding: "0.75rem" }}>Flask, Bottle</td>
                  <td style={{ padding: "0.75rem" }}>Minimalis, cepat dimulai. Namun, butuh banyak plugin pihak ketiga saat proyek tumbuh besar, rawan inkonsistensi struktur.</td>
                  <td style={{ padding: "0.75rem" }}>Microservices sederhana, prototipe cepat.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "rgba(59, 130, 246, 0.05)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600, color: "var(--color-accent)" }}>Mid-sized Modular</td>
                  <td style={{ padding: "0.75rem", fontWeight: 600, color: "var(--color-accent)" }}>Pyramid</td>
                  <td style={{ padding: "0.75rem" }}>Sangat fleksibel, konfigurasi eksplisit, router (URL dispatch) sangat bertenaga, transparan, dan modular tanpa membatasi pilihan library.</td>
                  <td style={{ padding: "0.75rem" }}>Aplikasi REST API jangka panjang, arsitektur database kompleks, sistem modular.</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Full-stack Framework</td>
                  <td style={{ padding: "0.75rem" }}>Django</td>
                  <td style={{ padding: "0.75rem" }}>Segala hal disediakan bawaan (ORM, Admin Panel, Auth). Namun, sulit mengganti komponen internal jika ingin memakai tool di luar standar Django.</td>
                  <td style={{ padding: "0.75rem" }}>Monolithic web app standar, CMS, platform berbasis admin instan.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Fitur dan Keunggulan Utama Pyramid</h3>
          <ul>
            <li>
              <strong>Database Agnostic &amp; SQLAlchemy Native</strong>: Pyramid tidak memiliki ORM bawaan yang terkunci, melainkan terintegrasi sempurna dengan <strong>SQLAlchemy</strong>&mdash;standar industri ORM paling matang di ekosistem Python.
            </li>
            <li>
              <strong>URL Dispatch &amp; Predicate Matching</strong>: Mekanisme routing Pyramid memungkinkan pembedaan view tidak hanya berdasarkan URL path, melainkan juga parameter HTTP (misalnya <code>request_method=&#39;POST&#39;</code> atau header tertentu) pada rute yang sama.
            </li>
            <li>
              <strong>Konfigurasi Terpisah via File INI</strong>: Pengaturan environment tersimpan rapi dalam file konfigurasi seperti <code>development.ini</code> dan <code>production.ini</code> menggunakan standar PasteDeploy.
            </li>
            <li>
              <strong>Transaction Management Otomatis</strong>: Melalui <code>zope.sqlalchemy</code> dan <code>pyramid_tm</code>, session database terikat dengan lifecycle HTTP request. Transaksi otomatis di-commit saat response sukses (2xx/3xx) dan di-rollback otomatis jika terjadi error tak tertangani (5xx).
            </li>
            <li>
              <strong>Schema Migration dengan Alembic</strong>: Perubahan struktur tabel basis data terlacak dengan aman melalui versi migrasi otomatis tanpa manipulasi DDL manual.
            </li>
          </ul>

          {calloutInfo(
            "Mengapa Belajar Pyramid? Di industri teknologi, memahami Pyramid melatih pengembang memahami arsitektur web dari fondasi: bagaimana router bekerja, bagaimana session database diikat ke lifecycle request HTTP, serta bagaimana memisahkan view logika dari konfigurasi server."
          )}

          <h3 id="alat-bahan">Alat dan Bahan Praktikum</h3>
          <ul>
            <li><strong>Python 3.7+ (disarankan Python 3.10 atau 3.11)</strong>: Runtime engine bahasa Python.</li>
            <li><strong>PostgreSQL</strong>: Database server relasional (via PostgreSQL lokal, Postgres.app di macOS, Docker, atau DBeaver/pgAdmin).</li>
            <li><strong>Code Editor / IDE</strong>: Visual Studio Code (ekstensi Python &amp; Pylance) atau PyCharm.</li>
            <li><strong>Terminal / CLI</strong>: Command Prompt/PowerShell di Windows, atau Bash/Zsh di macOS &amp; Linux.</li>
            <li><strong>cURL / HTTP Client</strong>: Tool CLI cURL atau tool visual seperti Postman / Insomnia / VS Code REST Client extension untuk pengujian endpoint RESTful API.</li>
          </ul>

          {calloutCheckpoint(
            "Tahap 0",
            "Verifikasi Perangkat Lunak Inti",
            <div>
              <p>Pastikan Python dan PostgreSQL sudah terpasang dan dikenali di sistem Anda:</p>
              <CodeBlock language="bash">{`python3 --version
# atau di Windows:
python --version

# Verifikasi client PostgreSQL:
psql --version`}</CodeBlock>
            </div>
          )}
        </section>
      )}
      {/* ========================================================================= */}
      {/* 1. SETUP ENVIRONMENT & COOKIECUTTER                                       */}
      {/* ========================================================================= */}
      {(!subId || subId === "setup-environment") && (
        <section id="setup-environment">
          <h2>1. Setup Environment &amp; Cookiecutter</h2>
          <p>
            Pada bagian ini, kita akan mengisolasi lingkungan pengembangan menggunakan Python Virtual Environment, memasang generator proyek scaffolding <strong>Cookiecutter</strong>, serta menciptakan proyek Pyramid berbasis template resmi SQLAlchemy.
          </p>

          <h3>Tahap 1: Persiapan Lingkungan Pengembangan</h3>
          <p>
            Virtual environment menjamin paket dan pustaka yang kita pasang tidak bertabrakan dengan sistem operasi atau proyek lain di komputer Anda.
          </p>

          <h4>Langkah 1: Membuat Direktori &amp; Virtual Environment</h4>
          <p>Buka terminal Anda, lalu ketik perintah berikut:</p>
          <CodeBlock language="bash">{`# Buat folder induk untuk workspace praktikum
mkdir pyramid_mahasiswa
cd pyramid_mahasiswa

# Buat virtual environment dengan nama 'venv'
python3 -m venv venv
# Catatan Windows jika python3 tidak dikenali: python -m venv venv`}</CodeBlock>

          <h4>Langkah 2: Mengaktifkan Virtual Environment</h4>
          <p>Aktivasi virtual environment sesuai sistem operasi Anda:</p>
          <CodeBlock language="bash">{`# Untuk pengguna macOS dan Linux:
source venv/bin/activate

# Untuk pengguna Windows (Command Prompt):
venv\\Scripts\\activate.bat

# Untuk pengguna Windows (PowerShell):
venv\\Scripts\\Activate.ps1`}</CodeBlock>

          {codeHint(
            "Troubleshooting PowerShell Windows: Jika muncul error 'Execution of scripts is disabled on this system', buka PowerShell as Administrator dan jalankan: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser lalu coba aktivasi kembali."
          )}

          <h4>Langkah 3: Memperbarui pip &amp; Memasang Paket Dasar</h4>
          <p>Setelah venv aktif, tingkatkan versi pip dan instal dependensi scaffolding:</p>
          <CodeBlock language="bash">{`pip install --upgrade pip setuptools
pip install cookiecutter
pip install pyramid pyramid_debugtoolbar waitress pyramid_jinja2`}</CodeBlock>

          {calloutCheckpoint(
            "Tahap 1",
            "Verifikasi Virtual Environment & Paket",
            <div>
              <p>Periksa prompt terminal Anda. Pastikan terdapat awalan <code>(venv)</code> sebelum nama pengguna atau path folder. Jalankan perintah verifikasi:</p>
              <CodeBlock language="bash">{`pip list`}</CodeBlock>
              <p style={{ marginTop: "0.5rem" }}>
                Pastikan paket <code>pyramid</code>, <code>cookiecutter</code>, dan <code>waitress</code> tercantum dalam output daftar paket.
              </p>
            </div>
          )}

          <h3>Tahap 2: Membuat Proyek Pyramid dengan Cookiecutter</h3>
          <p>
            Membuat struktur proyek web lengkap dari nol rawan kesalahan konfigurasi. Komunitas resmi Pyramid menyediakan template Cookiecutter yang sudah mengonfigurasi SQLAlchemy ORM, Alembic, file konfigurasi INI, runner testing, dan struktur folder modular.
          </p>

          <h4>Langkah 1: Menjalankan Template Cookiecutter</h4>
          <p>Jalankan perintah berikut di dalam folder <code>pyramid_mahasiswa</code> dengan venv aktif:</p>
          <CodeBlock language="bash">{`cookiecutter gh:Pylons/pyramid-cookiecutter-alchemy`}</CodeBlock>

          <p>Cookiecutter akan mengunduh template dan meminta input konfigurasi di terminal. Masukkan nilai berikut secara teliti:</p>
          <CodeBlock language="text">{`project_name [My Project]: pyramid_mahasiswa
repo_name [pyramid_mahasiswa]: pyramid_mahasiswa
Select template_language:
1 - jinja2
2 - mako
3 - chameleon
Choose from 1, 2, 3 [1]: 1`}</CodeBlock>

          <h4>Langkah 2: Memasang Proyek dalam Mode Development (Editable Install)</h4>
          <p>
            Masuk ke subfolder proyek baru dan pasang paket aplikasi dalam mode pengembang (<em>editable mode</em> menggunakan flag <code>-e</code>):
          </p>
          <CodeBlock language="bash">{`cd pyramid_mahasiswa
pip install -e ".[testing]"`}</CodeBlock>

          {codeHint(
            "Mengapa 'pip install -e' penting? Flag -e (editable) mendaftarkan package lokal pyramid_mahasiswa ke dalam virtual environment. Setiap perubahan kode Python di dalam folder proyek akan langsung terbaca tanpa perlu menginstal ulang paket setiap kali mengedit file."
          )}

          <h4>Langkah 3: Memahami Struktur Pohon Direktori Proyek</h4>
          <p>
            Buka folder proyek di VS Code (<code>code .</code>). Anda akan melihat struktur berkas modular berikut:
          </p>
          <CodeBlock language="text">{`pyramid_mahasiswa/               # Root folder proyek
├── .coveragerc
├── .gitignore
├── CHANGES.txt
├── MANIFEST.in
├── README.txt
├── development.ini              # Konfigurasi server lokal & database dev
├── production.ini               # Konfigurasi deployment server production
├── pytest.ini                   # Konfigurasi unit testing
├── setup.py                     # Metadata dependensi package Python
└── pyramid_mahasiswa/           # Python package aplikasi utama
    ├── __init__.py              # Entry point aplikasi WSGI & konfigurasi router
    ├── alembic/                 # Skrip migrasi schema database Alembic
    │   ├── env.py               # Runner environment Alembic
    │   ├── script.py.mako       # Template file migrasi
    │   └── versions/            # Direktori histori berkas revisi migrasi
    ├── models/                  # Lapisan ORM (Object Relational Mapping)
    │   ├── __init__.py          # Engine SQLAlchemy & Session Factory
    │   ├── meta.py              # Declarative Base metadata
    │   └── mymodel.py           # Contoh model bawaan template
    ├── routes.py                # Peta URL Dispatch (routing REST API)
    ├── scripts/                 # CLI utility scripts
    │   ├── __init__.py
    │   └── initialize_db.py     # Script inisialisasi & seeding data awal
    ├── static/                  # File statis (CSS, JS, Gambar)
    ├── templates/               # Berkas HTML template (Jinja2)
    ├── tests/                   # Kumpulan unit test
    └── views/                   # Lapisan View Controller logika bisnis
        ├── __init__.py
        ├── default.py           # Handler view bawaan
        └── notfound.py          # Custom handler untuk HTTP 404`}</CodeBlock>

          {calloutCheckpoint(
            "Tahap 2",
            "Eksplorasi Struktur Proyek di Code Editor",
            <div>
              <p>
                Buka sidebar file explorer di VS Code Anda. Pastikan folder <code>pyramid_mahasiswa/pyramid_mahasiswa/models</code>, <code>views</code>, dan file <code>development.ini</code> terlihat jelas. Periksa terminal: perintah <code>pip list</code> kini harus menampilkan baris:
              </p>
              <pre style={{ margin: "0.25rem 0", color: "#10b981", fontFamily: "monospace" }}>
{`pyramid-mahasiswa 0.0 /path/to/pyramid_mahasiswa/pyramid_mahasiswa (editable)`}
              </pre>
            </div>
          )}
        </section>
      )}
      {/* ========================================================================= */}
      {/* 2. DATABASE POSTGRESQL & SQLALCHEMY                                       */}
      {/* ========================================================================= */}
      {(!subId || subId === "database-models") && (
        <section id="database-models">
          <h2>2. Database PostgreSQL &amp; SQLAlchemy</h2>
          <p>
            Secara default, template Pyramid menggunakan database berbasis file SQLite. Untuk aplikasi web modern yang andal, kita akan beralih ke <strong>PostgreSQL</strong>, mendefinisikan model data dengan <strong>SQLAlchemy ORM</strong>, dan menerapkan migrasi skema menggunakan <strong>Alembic</strong>.
          </p>

          <h3>Tahap 3: Konfigurasi Database PostgreSQL</h3>
          <p>
            Sebelum menghubungkan Pyramid ke database, kita harus membuat basis data dan user khusus di server PostgreSQL lokal.
          </p>

          <h4>Langkah 1: Membuat Database &amp; User di PostgreSQL</h4>
          <p>Buka shell psql di terminal baru:</p>
          <CodeBlock language="bash">{`psql -U postgres`}</CodeBlock>

          <p>Jalankan perintah SQL berikut di dalam prompt psql:</p>
          <CodeBlock language="sql">{`-- 1. Buat database baru khusus praktikum
CREATE DATABASE pyramid_mahasiswa;

-- 2. Buat user database dengan password terenkripsi
CREATE USER pyramid_user WITH ENCRYPTED PASSWORD 'pyramid_pass';

-- 3. Berikan hak akses penuh pada database ke user tersebut
GRANT ALL PRIVILEGES ON DATABASE pyramid_mahasiswa TO pyramid_user;

-- Catatan untuk PostgreSQL 15 ke atas:
-- Hubungkan ke database pyramid_mahasiswa dan beri izin skema public
\\c pyramid_mahasiswa
GRANT ALL ON SCHEMA public TO pyramid_user;

-- Keluar dari prompt psql
\\q`}</CodeBlock>

          <h4>Langkah 2: Memasang Driver PostgreSQL untuk Python</h4>
          <p>Di terminal proyek dengan venv aktif, pasang package <code>psycopg2-binary</code>:</p>
          <CodeBlock language="bash">{`pip install psycopg2-binary`}</CodeBlock>

          <h4>Langkah 3: Memperbarui Koneksi di development.ini</h4>
          <p>
            Buka file <code>development.ini</code> yang terletak di root folder proyek. Temukan baris konfigurasi <code>sqlalchemy.url</code>, lalu ganti baris SQLite menjadi koneksi PostgreSQL:
          </p>
          <CodeBlock language="ini">{`# Matikan baris SQLite bawaan:
# sqlalchemy.url = sqlite:///%(here)s/pyramid_mahasiswa.sqlite

# Ganti dengan URI koneksi PostgreSQL:
sqlalchemy.url = postgresql://pyramid_user:pyramid_pass@localhost:5432/pyramid_mahasiswa`}</CodeBlock>

          {codeHint(
            "Format SQLAlchemy Database URI: postgresql://[username]:[password]@[host]:[port]/[database_name]. Jika Anda menggunakan port non-standar atau kredensial berbeda, sesuaikan parameter pada string koneksi di atas."
          )}

          {calloutCheckpoint(
            "Tahap 3",
            "Uji Koneksi User PostgreSQL",
            <div>
              <p>Pastikan user <code>pyramid_user</code> dapat masuk ke database dari terminal:</p>
              <CodeBlock language="bash">{`psql -h localhost -U pyramid_user -d pyramid_mahasiswa`}</CodeBlock>
              <p style={{ marginTop: "0.5rem" }}>
                Ketik password <code>pyramid_pass</code> saat diminta. Jika prompt berubah menjadi <code>pyramid_mahasiswa=&gt;</code>, koneksi berhasil! Ketik <code>\\q</code> untuk keluar.
              </p>
            </div>
          )}

          <h3>Tahap 4: Membuat Model Mahasiswa (SQLAlchemy ORM)</h3>
          <p>
            <strong>SQLAlchemy ORM (Object-Relational Mapping)</strong> memetakan tabel basis data menjadi class Python. Setiap baris data di tabel akan direpresentasikan sebagai objek instansiasi class.
          </p>

          <h4>Langkah 1: Membuat Berkas Model Mahasiswa</h4>
          <p>
            Buat file baru di path: <code>pyramid_mahasiswa/models/mahasiswa.py</code>, lalu ketikkan kode berikut:
          </p>
          <CodeBlock language="python">{`from sqlalchemy import (
    Column,
    Integer,
    Text,
    Date,
)
from .meta import Base


class Mahasiswa(Base):
    """Model ORM untuk tabel data mahasiswa"""
    __tablename__ = 'mahasiswa'

    id = Column(Integer, primary_key=True)
    nim = Column(Text, unique=True, nullable=False)
    nama = Column(Text, nullable=False)
    jurusan = Column(Text, nullable=False)
    tanggal_lahir = Column(Date)
    alamat = Column(Text)

    def to_dict(self):
        """Serialisasi objek model menjadi dictionary agar siap dirender sebagai JSON"""
        return {
            'id': self.id,
            'nim': self.nim,
            'nama': self.nama,
            'jurusan': self.jurusan,
            'tanggal_lahir': self.tanggal_lahir.isoformat() if self.tanggal_lahir else None,
            'alamat': self.alamat,
        }`}</CodeBlock>

          {codeHint(
            <div>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><code>__tablename__ = &#39;mahasiswa&#39;</code>: Menentukan nama fisik tabel di database PostgreSQL.</li>
                <li><code>Column(Integer, primary_key=True)</code>: Kolom primary key integer otomatis menjadi serial / autoincrement di PostgreSQL.</li>
                <li><code>nim = Column(Text, unique=True, nullable=False)</code>: Memastikan NIM tidak boleh kosong dan tidak boleh duplikat.</li>
                <li><code>to_dict(self)</code>: Mengonversi atribut model menjadi dictionary ramah serialisasi JSON, memformat objek Date menjadi string ISO 8601 (YYYY-MM-DD).</li>
              </ul>
            </div>
          )}

          <h4>Langkah 2: Mendaftarkan Model di models/__init__.py</h4>
          <p>
            Buka file <code>pyramid_mahasiswa/models/__init__.py</code>. Tambahkan impor model <code>Mahasiswa</code> agar metadata tabel dikenali oleh engine SQLAlchemy:
          </p>
          <CodeBlock language="python">{`from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import configure_mappers
import zope.sqlalchemy

# Import model classes untuk memastikan mereka ter-register oleh SQLAlchemy
from .mahasiswa import Mahasiswa  # Daftarkan model Mahasiswa
from .mymodel import MyModel      # Model bawaan template

# Jalankan configure_mappers setelah seluruh model diimpor
configure_mappers()

def get_engine(settings, prefix='sqlalchemy.'):
    return engine_from_config(settings, prefix)

def get_session_factory(engine):
    factory = sessionmaker()
    factory.configure(bind=engine)
    return factory

def get_tm_session(session_factory, transaction_manager):
    """Mendapatkan SQLAlchemy Session yang terikat otomatis dengan zope.sqlalchemy"""
    dbsession = session_factory()
    zope.sqlalchemy.register(
        dbsession, transaction_manager=transaction_manager)
    return dbsession

def includeme(config):
    """Inisialisasi konfigurasi database saat Pyramid startup"""
    settings = config.get_settings()
    settings['tm.manager_hook'] = 'pyramid_tm.explicit_manager'

    engine = get_engine(settings)
    session_factory = get_session_factory(engine)
    config.registry['dbsession_factory'] = session_factory

    # Menyediakan properti request.dbsession di setiap request HTTP
    config.add_request_method(
        lambda r: get_tm_session(session_factory, r.tm),
        'dbsession',
        reify=True
    )`}</CodeBlock>

          {codeHint(
            "Fungsi zope.sqlalchemy & request.dbsession: Baris config.add_request_method memungkinkan kita mengakses session database langsung melalui variabel 'request.dbsession' di setiap fungsi view. zope.sqlalchemy otomatis meng-commit transaksi jika fungsi view selesai tanpa error, atau me-rollback transaksi jika terjadi eksepsi."
          )}

          <h4>Langkah 3: Menyiapkan Data Awal (Seeding) di scripts/initialize_db.py</h4>
          <p>
            Buka file <code>pyramid_mahasiswa/scripts/initialize_db.py</code>. Ubah fungsinya untuk menyisipkan data awal mahasiswa:
          </p>
          <CodeBlock language="python">{`import argparse
import sys
from datetime import date

from pyramid.paster import bootstrap, setup_logging
from sqlalchemy.exc import OperationalError

from .. import models


def setup_models(dbsession):
    """Menambahkan data awal (seeding) mahasiswa ke database"""
    mahasiswa1 = models.Mahasiswa(
        nim='12345',
        nama='Budi Santoso',
        jurusan='Teknik Informatika',
        tanggal_lahir=date(2000, 5, 15),
        alamat='Jl. Merdeka No. 123, Bandung'
    )

    mahasiswa2 = models.Mahasiswa(
        nim='54321',
        nama='Siti Aminah',
        jurusan='Sistem Informasi',
        tanggal_lahir=date(2001, 8, 22),
        alamat='Jl. Mawar No. 45, Jakarta'
    )

    dbsession.add(mahasiswa1)
    dbsession.add(mahasiswa2)


def parse_args(argv):
    parser = argparse.ArgumentParser()
    parser.add_argument(
        'config_uri',
        help='Configuration file, e.g., development.ini',
    )
    return parser.parse_args(argv[1:])


def main(argv=sys.argv):
    args = parse_args(argv)
    setup_logging(args.config_uri)
    env = bootstrap(args.config_uri)

    try:
        with env['request'].tm:
            dbsession = env['request'].dbsession
            setup_models(dbsession)
            print("Berhasil memasukkan data seeding awal mahasiswa!")
    except OperationalError:
        print("Pyramid gagal terhubung ke database SQL.")
        print("Pastikan service PostgreSQL berjalan dan connection string di development.ini benar.")


if __name__ == '__main__':
    main()`}</CodeBlock>

          {calloutCheckpoint(
            "Tahap 4",
            "Uji Validitas Model Python",
            <div>
              <p>Jalankan one-liner Python berikut di terminal dari root folder proyek:</p>
              <CodeBlock language="bash">{`python -c "from pyramid_mahasiswa.models import Mahasiswa; print('Model terdaftar:', Mahasiswa.__tablename__)"`}</CodeBlock>
              <p style={{ marginTop: "0.5rem" }}>
                Jika output menampilkan <code>Model terdaftar: mahasiswa</code> tanpa ImportError, model Anda telah terkonfigurasi dengan sempurna!
              </p>
            </div>
          )}

          <h3>Tahap 5: Menjalankan Migrasi Database dengan Alembic</h3>
          <p>
            <strong>Alembic</strong> adalah alat migrasi database resmi untuk SQLAlchemy. Daripada mengetik perintah <code>CREATE TABLE</code> manual di SQL, Alembic membaca kode model Python kita, membandingkannya dengan database fisik, lalu menghasilkan skrip migrasi revisi yang dapat diterapkan atau dibatalkan kapan saja.
          </p>

          <h4>Langkah 1: Membuat Berkas Revisi Migrasi Otomatis</h4>
          <p>Pastikan terminal berada di root proyek (sejajar dengan <code>development.ini</code>), lalu jalankan:</p>
          <CodeBlock language="bash">{`alembic -c development.ini revision --autogenerate -m "create mahasiswa table"`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
INFO  [alembic.runtime.migration] Will assume transactional DDL.
INFO  [alembic.autogenerate.compare] Detected added table 'mahasiswa'
  Generating /path/to/pyramid_mahasiswa/alembic/versions/20261112_create_mahasiswa_table.py ...  done`}
              </pre>
            </div>
          )}

          {codeHint(
            "Inspeksi File Migrasi: Buka folder pyramid_mahasiswa/alembic/versions/. Anda akan menemukan file baru dengan prefix tanggal. Buka file tersebut dan perhatikan fungsi upgrade() berisi perintah op.create_table(...) dan downgrade() berisi op.drop_table(...)."
          )}

          <h4>Langkah 2: Menerapkan Migrasi ke Database</h4>
          <p>Terapkan skema tabel ke PostgreSQL dengan mengeksekusi:</p>
          <CodeBlock language="bash">{`alembic -c development.ini upgrade head`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
INFO  [alembic.runtime.migration] Will assume transactional DDL.
INFO  [alembic.runtime.migration] Running upgrade  -> 4a9f3b8c2d1e, create mahasiswa table`}
              </pre>
            </div>
          )}

          <h4>Langkah 3: Menjalankan Seeding Data Awal</h4>
          <p>Sekarang tabel <code>mahasiswa</code> sudah ada di PostgreSQL, jalankan skrip seeding:</p>
          <CodeBlock language="bash">{`python -m pyramid_mahasiswa.scripts.initialize_db development.ini`}</CodeBlock>

          <h4>Perintah Navigasi Versi Alembic yang Berguna:</h4>
          <ul>
            <li><code>alembic -c development.ini current</code>: Menampilkan ID revisi migrasi yang sedang aktif saat ini.</li>
            <li><code>alembic -c development.ini downgrade -1</code>: Membatalkan 1 langkah revisi (misal saat ingin merevisi struktur tabel).</li>
            <li><code>alembic -c development.ini upgrade +1</code>: Maju 1 langkah revisi ke depan.</li>
          </ul>

          {calloutCheckpoint(
            "Tahap 5",
            "Verifikasi Data Fisik di PostgreSQL",
            <div>
              <p>Buka psql untuk melihat hasil tabel dan baris data nyata yang telah dibuat oleh Alembic:</p>
              <CodeBlock language="bash">{`psql -h localhost -U pyramid_user -d pyramid_mahasiswa -c "SELECT id, nim, nama, jurusan FROM mahasiswa;"`}</CodeBlock>
              <p style={{ marginTop: "0.5rem" }}>
                Terminal akan menampilkan 2 baris data: <strong>Budi Santoso</strong> dan <strong>Siti Aminah</strong>.
              </p>
            </div>
          )}
        </section>
      )}
      {/* ========================================================================= */}
      {/* 3. CRUD VIEWS & URL DISPATCH                                              */}
      {/* ========================================================================= */}
      {(!subId || subId === "views-routes") && (
        <section id="views-routes">
          <h2>3. CRUD Views &amp; URL Dispatch</h2>
          <p>
            Setelah lapisan model dan basis data siap, kita akan membangun lapisan Controller (<strong>Views</strong>) untuk memproses permintaan HTTP serta mengonfigurasi <strong>Routes (URL Dispatch)</strong> yang menghubungkan endpoint API ke view handler masing-masing.
          </p>

          <h3>Tahap 6: Membuat Views untuk CRUD Mahasiswa</h3>
          <p>
            Pyramid menyediakan dekorator <code>@view_config</code>. Dengan menetapkan <code>renderer=&#39;json&#39;</code>, Pyramid otomatis mengubah nilai kembalian fungsi (dictionary atau list) menjadi JSON lengkap dengan header <code>Content-Type: application/json</code>.
          </p>
          <p>
            Buat file baru di path: <code>pyramid_mahasiswa/views/mahasiswa.py</code>, lalu salin implementasi lengkap berikut:
          </p>

          <CodeBlock language="python">{`import datetime
from pyramid.view import view_config
from pyramid.httpexceptions import (
    HTTPFound,
    HTTPNotFound,
    HTTPBadRequest,
)
from ..models import Mahasiswa


# 1. READ ALL: Menampilkan daftar seluruh mahasiswa
@view_config(route_name='mahasiswa_list', renderer='json')
def mahasiswa_list(request):
    """View untuk mengambil semua data mahasiswa"""
    dbsession = request.dbsession
    mahasiswas = dbsession.query(Mahasiswa).order_by(Mahasiswa.id.asc()).all()
    return {'mahasiswas': [m.to_dict() for m in mahasiswas]}


# 2. READ ONE: Menampilkan detail satu mahasiswa berdasarkan ID
@view_config(route_name='mahasiswa_detail', renderer='json')
def mahasiswa_detail(request):
    """View untuk melihat detail satu mahasiswa berdasarkan ID di URL"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()

    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': f'Mahasiswa dengan ID {mahasiswa_id} tidak ditemukan'})

    return {'mahasiswa': mahasiswa.to_dict()}


# 3. CREATE: Menambahkan data mahasiswa baru
@view_config(route_name='mahasiswa_add', request_method='POST', renderer='json')
def mahasiswa_add(request):
    """View untuk menambahkan mahasiswa baru dari payload JSON"""
    try:
        json_data = request.json_body

        # Validasi field wajib
        required_fields = ['nim', 'nama', 'jurusan']
        for field in required_fields:
            if field not in json_data or not json_data[field]:
                return HTTPBadRequest(json_body={'error': f'Field {field} wajib diisi!'})

        # Validasi dan konversi format tanggal ISO YYYY-MM-DD
        tanggal_lahir = None
        if 'tanggal_lahir' in json_data and json_data['tanggal_lahir']:
            try:
                tanggal_lahir = datetime.datetime.fromisoformat(json_data['tanggal_lahir']).date()
            except ValueError:
                return HTTPBadRequest(json_body={'error': 'Format tanggal lahir tidak valid. Gunakan format YYYY-MM-DD'})

        mahasiswa = Mahasiswa(
            nim=json_data['nim'],
            nama=json_data['nama'],
            jurusan=json_data['jurusan'],
            tanggal_lahir=tanggal_lahir,
            alamat=json_data.get('alamat')
        )

        dbsession = request.dbsession
        dbsession.add(mahasiswa)
        # Flush session untuk mengeksekusi query INSERT dan mendapatkan nilai primary key id yang di-generate PostgreSQL
        dbsession.flush()

        return {'success': True, 'mahasiswa': mahasiswa.to_dict()}

    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})


# 4. UPDATE: Mengubah data mahasiswa yang sudah ada
@view_config(route_name='mahasiswa_update', request_method='PUT', renderer='json')
def mahasiswa_update(request):
    """View untuk mengupdate data mahasiswa berdasarkan ID"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']

    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': f'Mahasiswa dengan ID {mahasiswa_id} tidak ditemukan'})

    try:
        json_data = request.json_body

        if 'nim' in json_data:
            mahasiswa.nim = json_data['nim']
        if 'nama' in json_data:
            mahasiswa.nama = json_data['nama']
        if 'jurusan' in json_data:
            mahasiswa.jurusan = json_data['jurusan']
        if 'alamat' in json_data:
            mahasiswa.alamat = json_data['alamat']

        if 'tanggal_lahir' in json_data:
            if json_data['tanggal_lahir']:
                try:
                    mahasiswa.tanggal_lahir = datetime.datetime.fromisoformat(json_data['tanggal_lahir']).date()
                except ValueError:
                    return HTTPBadRequest(json_body={'error': 'Format tanggal lahir tidak valid. Gunakan format YYYY-MM-DD'})
            else:
                mahasiswa.tanggal_lahir = None

        return {'success': True, 'mahasiswa': mahasiswa.to_dict()}

    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})


# 5. DELETE: Menghapus data mahasiswa
@view_config(route_name='mahasiswa_delete', request_method='DELETE', renderer='json')
def mahasiswa_delete(request):
    """View untuk menghapus mahasiswa berdasarkan ID"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']

    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': f'Mahasiswa dengan ID {mahasiswa_id} tidak ditemukan'})

    dbsession.delete(mahasiswa)

    return {'success': True, 'message': f'Mahasiswa dengan ID {mahasiswa_id} berhasil dihapus'}`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>Poin Kunci Logika Views:</strong></p>
              <ul style={{ margin: "0.25rem 0 0 1rem" }}>
                <li><code>request.matchdict[&#39;id&#39;]</code>: Mengekstrak parameter dinamis <code>&#123;id&#125;</code> dari segmen URL request yang cocok dengan pola route.</li>
                <li><code>request.json_body</code>: Properti bawaan Pyramid yang otomatis mem-parsing payload JSON request menjadi dictionary Python.</li>
                <li><code>dbsession.flush()</code>: Menyinkronkan objek baru ke database seketika sebelum transaction manager me-release response, sehingga nilai <code>mahasiswa.id</code> langsung terisi dari autoincrement sequence PostgreSQL.</li>
                <li><code>HTTPNotFound</code> dan <code>HTTPBadRequest</code>: Class exception resmi Pyramid yang langsung menghasilkan HTTP status code yang tepat (404 dan 400) dengan payload pesan kesalahan berformat JSON.</li>
              </ul>
            </div>
          )}

          {calloutCheckpoint(
            "Tahap 6",
            "Pemeriksaan Sintaks Views",
            <div>
              <p>Pastikan file <code>views/mahasiswa.py</code> tidak memiliki error penulisan:</p>
              <CodeBlock language="bash">{`python -c "from pyramid_mahasiswa.views import mahasiswa; print('Views mahasiswa valid!')"`}</CodeBlock>
            </div>
          )}

          <h3>Tahap 7: Membuat Routes (pyramid_mahasiswa/routes.py)</h3>
          <p>
            File <code>routes.py</code> adalah tabel pengendali lalu lintas URL. Di sinilah nama route dipetakan ke pola URL path.
          </p>
          <p>
            Buka file <code>pyramid_mahasiswa/routes.py</code>, lalu perbarui isinya menjadi:
          </p>

          <CodeBlock language="python">{`def includeme(config):
    """Mendaftarkan seluruh rute routing aplikasi ke konfigurasi Pyramid"""
    config.add_static_view('static', 'static', cache_max_age=3600)

    # Route default web home
    config.add_route('home', '/')

    # RESTful API Mahasiswa Routes
    # Parameter request_method krusial untuk membedakan HTTP Method pada URL path yang sama
    config.add_route('mahasiswa_list', '/api/mahasiswa', request_method='GET')
    config.add_route('mahasiswa_detail', '/api/mahasiswa/{id}', request_method='GET')
    config.add_route('mahasiswa_add', '/api/mahasiswa', request_method='POST')
    config.add_route('mahasiswa_update', '/api/mahasiswa/{id}', request_method='PUT')
    config.add_route('mahasiswa_delete', '/api/mahasiswa/{id}', request_method='DELETE')`}</CodeBlock>

          {codeHint(
            <div>
              <p><strong>MENGAPA PARAMETER request_method SANGAT KRUSIAL?</strong></p>
              <p>
                Perhatikan rute <code>mahasiswa_list</code> dan <code>mahasiswa_add</code> yang sama-sama memiliki path <code>/api/mahasiswa</code>. Begitu pula <code>mahasiswa_detail</code>, <code>mahasiswa_update</code>, dan <code>mahasiswa_delete</code> yang sama-sama beralamat di <code>/api/mahasiswa/&#123;id&#125;</code>.
              </p>
              <p>
                Jika Anda tidak menyertakan <code>request_method=&#39;...&#39;</code>, Pyramid mengevaluasi rute secara sekuensial dari atas ke bawah dan akan <strong>selalu mencocokkan rute pertama yang ditemukan</strong>. Akibatnya, request ber-method <code>POST</code> ke <code>/api/mahasiswa</code> akan keliru diarahkan ke <code>mahasiswa_list</code> (GET) dan menyebabkan request gagal dieksekusi!
              </p>
            </div>
          )}

          {calloutCheckpoint(
            "Tahap 7",
            "Sinkronisasi Antara routes.py dan @view_config",
            <div>
              <p>
                Pastikan nama route pada <code>config.add_route(&#39;nama_route&#39;, ...)</code> di <code>routes.py</code> identik huruf-per-huruf dengan nilai <code>@view_config(route_name=&#39;nama_route&#39;)</code> di <code>views/mahasiswa.py</code>. Ketidakcocokan nama akan menyebabkan error saat startup aplikasi.
              </p>
            </div>
          )}
        </section>
      )}
      {/* ========================================================================= */}
      {/* 4. PENGUJIAN REST API                                                     */}
      {/* ========================================================================= */}
      {(!subId || subId === "testing") && (
        <section id="testing">
          <h2>4. Pengujian REST API</h2>
          <p>
            Aplikasi kita kini telah lengkap: Model, Koneksi Database, Migrasi Alembic, Views Logika Bisnis, dan URL Routes. Sekarang saatnya menjalankan web server lokal dan menguji kelima operasi CRUD melalui permintaan HTTP nyata.
          </p>

          <h3>Tahap 8: Menjalankan Server &amp; Pengujian API Menyeluruh</h3>

          <h4>Langkah 1: Menjalankan Server Development</h4>
          <p>
            Pastikan virtual environment aktif dan Anda berada di root folder proyek (sejajar dengan <code>development.ini</code>). Jalankan server web Waitress bawaan Pyramid dengan flag auto-reload:
          </p>
          <CodeBlock language="bash">{`pserve development.ini --reload`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`Starting subprocess with file monitor
Starting server in PID 65432.
2026-11-12 15:30:00,123 INFO  [waitress:305][MainThread] Serving on http://localhost:6543
2026-11-12 15:30:00,124 INFO  [waitress:305][MainThread] Serving on http://127.0.0.1:6543`}
              </pre>
            </div>
          )}

          {codeHint(
            "Keunggulan Flag --reload: Setiap kali Anda menyimpan (save) perubahan pada file Python atau file .ini, server akan me-restart dirinya sendiri secara instan tanpa perlu Anda matikan dan jalankan ulang secara manual."
          )}

          <h4>Langkah 2: Menjalankan Rangkaian Pengujian dengan cURL</h4>
          <p>
            Buka jendela terminal kedua (biarkan terminal pertama tetap menjalankan server <code>pserve</code>). Jalankan perintah-perintah uji coba berikut:
          </p>

          <p><strong>1. READ ALL &mdash; Mengambil Seluruh Daftar Mahasiswa (GET)</strong></p>
          <CodeBlock language="bash">{`curl -X GET http://localhost:6543/api/mahasiswa`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`{
  "mahasiswas": [
    {
      "id": 1,
      "nim": "12345",
      "nama": "Budi Santoso",
      "jurusan": "Teknik Informatika",
      "tanggal_lahir": "2000-05-15",
      "alamat": "Jl. Merdeka No. 123, Bandung"
    },
    {
      "id": 2,
      "nim": "54321",
      "nama": "Siti Aminah",
      "jurusan": "Sistem Informasi",
      "tanggal_lahir": "2001-08-22",
      "alamat": "Jl. Mawar No. 45, Jakarta"
    }
  ]
}`}
              </pre>
            </div>
          )}

          <p><strong>2. READ ONE &mdash; Mengambil Detail Mahasiswa Berdasarkan ID (GET)</strong></p>
          <CodeBlock language="bash">{`curl -X GET http://localhost:6543/api/mahasiswa/1`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`{
  "mahasiswa": {
    "id": 1,
    "nim": "12345",
    "nama": "Budi Santoso",
    "jurusan": "Teknik Informatika",
    "tanggal_lahir": "2000-05-15",
    "alamat": "Jl. Merdeka No. 123, Bandung"
  }
}`}
              </pre>
            </div>
          )}

          <p><strong>3. CREATE &mdash; Menambahkan Data Mahasiswa Baru (POST)</strong></p>
          <CodeBlock language="bash">{`# Perintah untuk macOS/Linux (Bash/Zsh):
curl -X POST http://localhost:6543/api/mahasiswa \\
  -H "Content-Type: application/json" \\
  -d '{
    "nim": "67890",
    "nama": "Ahmad Fadli",
    "jurusan": "Teknik Elektro",
    "tanggal_lahir": "2001-11-05",
    "alamat": "Jl. Mawar No. 10, Surabaya"
  }'

# Alternatif untuk Windows Command Prompt (cmd.exe dengan escaped quotes):
# curl -X POST http://localhost:6543/api/mahasiswa -H "Content-Type: application/json" -d "{\\"nim\\":\\"67890\\",\\"nama\\":\\"Ahmad Fadli\\",\\"jurusan\\":\\"Teknik Elektro\\",\\"tanggal_lahir\\":\\"2001-11-05\\",\\"alamat\\":\\"Jl. Mawar No. 10, Surabaya\\"}"`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`{
  "success": true,
  "mahasiswa": {
    "id": 3,
    "nim": "67890",
    "nama": "Ahmad Fadli",
    "jurusan": "Teknik Elektro",
    "tanggal_lahir": "2001-11-05",
    "alamat": "Jl. Mawar No. 10, Surabaya"
  }
}`}
              </pre>
            </div>
          )}

          <p><strong>4. TESTING VALIDATION &mdash; Menguji Error 400 Bad Request</strong></p>
          <p>Kirimkan data tidak lengkap (misalnya tanpa atribut <code>nim</code>):</p>
          <CodeBlock language="bash">{`curl -X POST http://localhost:6543/api/mahasiswa \\
  -H "Content-Type: application/json" \\
  -d '{"nama": "Mahasiswa Tanpa NIM", "jurusan": "Informatika"}'`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#ef4444", fontFamily: "monospace" }}>
{`{"error": "Field nim wajib diisi!"}`}
              </pre>
            </div>
          )}

          <p><strong>5. UPDATE &mdash; Memperbarui Data Mahasiswa (PUT)</strong></p>
          <CodeBlock language="bash">{`curl -X PUT http://localhost:6543/api/mahasiswa/1 \\
  -H "Content-Type: application/json" \\
  -d '{
    "jurusan": "Informatika Medis",
    "alamat": "Jl. Dipati Ukur No. 88, Bandung"
  }'`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`{
  "success": true,
  "mahasiswa": {
    "id": 1,
    "nim": "12345",
    "nama": "Budi Santoso",
    "jurusan": "Informatika Medis",
    "tanggal_lahir": "2000-05-15",
    "alamat": "Jl. Dipati Ukur No. 88, Bandung"
  }
}`}
              </pre>
            </div>
          )}

          <p><strong>6. DELETE &mdash; Menghapus Data Mahasiswa (DELETE)</strong></p>
          <CodeBlock language="bash">{`curl -X DELETE http://localhost:6543/api/mahasiswa/3`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#10b981", fontFamily: "monospace" }}>
{`{
  "success": true,
  "message": "Mahasiswa dengan ID 3 berhasil dihapus"
}`}
              </pre>
            </div>
          )}

          <p><strong>7. TESTING NOT FOUND &mdash; Menguji Respon 404</strong></p>
          <p>Coba akses kembali data ID 3 yang telah dihapus:</p>
          <CodeBlock language="bash">{`curl -X GET http://localhost:6543/api/mahasiswa/3`}</CodeBlock>

          {codeOutput(
            <div>
              <pre style={{ margin: 0, color: "#ef4444", fontFamily: "monospace" }}>
{`{"error": "Mahasiswa dengan ID 3 tidak ditemukan"}`}
              </pre>
            </div>
          )}

          <h3>Alternatif Tool Pengujian API Modern</h3>
          <p>
            Selain menggunakan cURL di terminal, Anda dapat menggunakan beberapa tool visual berikut:
          </p>
          <ul>
            <li><strong>Postman / Insomnia</strong>: Aplikasi GUI populer untuk mendokumentasikan dan mengeksekusi request HTTP. Cukup tentukan HTTP Method, masukkan URL (misal <code>http://localhost:6543/api/mahasiswa</code>), dan isi Body bertipe <code>raw JSON</code>.</li>
            <li><strong>VS Code REST Client Extension</strong>: Ekstensi VS Code ringan. Cukup buat file <code>api_test.http</code> di editor, tuliskan sintaks HTTP request, lalu klik tombol <em>Send Request</em> langsung dari editor.</li>
            <li><strong>Web Browser</strong>: Untuk endpoint ber-method <code>GET</code>, Anda dapat langsung mengetikkan <code>http://localhost:6543/api/mahasiswa</code> pada address bar Google Chrome/Firefox untuk melihat data JSON.</li>
          </ul>

          <h3>Ringkasan Arsitektur &amp; Ide Eksplorasi Lanjutan</h3>
          <p>
            Selamat! Anda telah berhasil membangun aplikasi RESTful API lengkap menggunakan arsitektur enterprise:
          </p>
          <ul>
            <li><strong>Lapisan Model (SQLAlchemy)</strong>: Menjaga integritas skema data di PostgreSQL.</li>
            <li><strong>Lapisan Database Versioning (Alembic)</strong>: Memungkinkan pelacakan dan migrasi skema tabel tanpa risiko data loss.</li>
            <li><strong>Lapisan Controller (Views &amp; Routes)</strong>: Menangani routing, ekstraksi payload JSON, validasi input, serta formatting respons status code HTTP secara terstruktur.</li>
          </ul>

          <p>Untuk pengembangan mandiri tingkat lanjut, pertimbangkan eksplorasi topik berikut:</p>
          <ul>
            <li><strong>Autentikasi &amp; Otorisasi JWT</strong>: Mengamankan endpoint POST/PUT/DELETE agar hanya dapat diakses pengguna terotentikasi.</li>
            <li><strong>Validasi Skema dengan Marshmallow</strong>: Menggunakan library schema serialisasi otomatis agar validasi request body lebih rapi dan deklaratif.</li>
            <li><strong>Pagination &amp; Search</strong>: Menerapkan parameter query <code>?page=1&amp;limit=10&amp;search=Budi</code> pada query SQLAlchemy.</li>
          </ul>

          {calloutCheckpoint(
            "Tahap 8",
            "Verifikasi Akhir Siklus CRUD",
            <div>
              <p>
                Pastikan kelima operasi (Read All, Read One, Create, Update, Delete) berhasil dieksekusi dengan baik. Amati log terminal <code>pserve</code> Anda: setiap request akan menampilkan log HTTP response code seperti <code>200 OK</code>, <code>400 Bad Request</code>, atau <code>404 Not Found</code>.
              </p>
            </div>
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. TUGAS PRAKTIKUM                                                        */}
      {/* ========================================================================= */}
      {(!subId || subId === "tugas-praktikum") && (
        <section id="tugas-praktikum">
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-accent, #3b82f6)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h2 style={{ margin: 0 }}>Tugas: Manajemen Matakuliah</h2>
          </div>

          <div
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
              padding: "1.75rem",
              backgroundColor: "var(--color-bg-card, rgba(255, 255, 255, 0.02))",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                color: "var(--color-accent, #2563eb)",
                marginTop: 0,
                marginBottom: "0.85rem",
                fontSize: "1.25rem",
                fontWeight: 600,
              }}
            >
              Tugas Praktikum: Aplikasi RESTful API Manajemen Matakuliah
            </h3>
            <p style={{ lineHeight: 1.7, marginBottom: "1.25rem", color: "var(--color-text-primary)" }}>
              Kembangkan aplikasi web Pyramid yang telah dibuat pada praktikum ini dengan menambahkan modul baru untuk <strong>Manajemen Data Matakuliah</strong> berbasis PostgreSQL. Aplikasi harus mengimplementasikan seluruh prinsip arsitektur yang telah dipelajari: model data ORM, migrasi Alembic, routing URL Dispatch, dan view controller CRUD.
            </p>

            <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>Spesifikasi Teknis yang Wajib Dibuat:</h4>
            <ol style={{ lineHeight: 1.8, marginBottom: "1.5rem", color: "var(--color-text-primary)" }}>
              <li>
                <strong>Model Data Matakuliah (<code>pyramid_mahasiswa/models/matakuliah.py</code>)</strong>:
                <ul>
                  <li>Nama tabel database: <code>matakuliah</code></li>
                  <li><code>id</code>: Integer, Primary Key, Autoincrement</li>
                  <li><code>kode_mk</code>: Text, Unique, Not Null (contoh: <code>IF2110</code>, <code>IF3140</code>)</li>
                  <li><code>nama_mk</code>: Text, Not Null (contoh: <code>Pemrograman Web</code>, <code>Basis Data</code>)</li>
                  <li><code>sks</code>: Integer, Not Null (contoh: <code>3</code>, <code>4</code>)</li>
                  <li><code>semester</code>: Integer, Not Null (contoh: <code>3</code>, <code>5</code>)</li>
                  <li>Method <code>to_dict(self)</code> untuk serialisasi objek menjadi dictionary JSON</li>
                </ul>
              </li>
              <li>
                <strong>Registrasi Model &amp; Migrasi Alembic</strong>:
                <ul>
                  <li>Daftarkan model <code>Matakuliah</code> pada <code>pyramid_mahasiswa/models/__init__.py</code></li>
                  <li>Buat file migrasi baru menggunakan Alembic (<code>alembic revision --autogenerate -m &quot;create matakuliah table&quot;</code>)</li>
                  <li>Terapkan migrasi ke database (<code>alembic upgrade head</code>)</li>
                  <li>Tambahkan seeding minimal 3 data mata kuliah awal pada <code>scripts/initialize_db.py</code></li>
                </ul>
              </li>
              <li>
                <strong>Views CRUD Matakuliah (<code>pyramid_mahasiswa/views/matakuliah.py</code>)</strong>:
                <ul>
                  <li><code>GET /api/matakuliah</code> &rarr; Menampilkan seluruh daftar mata kuliah</li>
                  <li><code>GET /api/matakuliah/&#123;id&#125;</code> &rarr; Menampilkan detail mata kuliah berdasarkan ID (kembalikan 404 jika tidak ditemukan)</li>
                  <li><code>POST /api/matakuliah</code> &rarr; Menambahkan data mata kuliah baru (validasi field wajib: <code>kode_mk</code>, <code>nama_mk</code>, <code>sks</code>, <code>semester</code>; kembalikan 400 jika tidak lengkap)</li>
                  <li><code>PUT /api/matakuliah/&#123;id&#125;</code> &rarr; Memperbarui data mata kuliah yang ada</li>
                  <li><code>DELETE /api/matakuliah/&#123;id&#125;</code> &rarr; Menghapus mata kuliah berdasarkan ID</li>
                </ul>
              </li>
              <li>
                <strong>Konfigurasi Routes (<code>pyramid_mahasiswa/routes.py</code>)</strong>:
                <ul>
                  <li>Daftarkan kelima endpoint di atas dengan menyertakan predikat <code>request_method</code> yang sesuai.</li>
                </ul>
              </li>
            </ol>

            {/* Tips Pengerjaan Callout Box */}
            <div
              style={{
                borderRadius: "10px",
                padding: "1rem 1.25rem",
                backgroundColor: "rgba(168, 85, 247, 0.08)",
                border: "1px solid rgba(168, 85, 247, 0.25)",
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
                marginBottom: "1.75rem",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <strong style={{ color: "#a855f7", display: "block", marginBottom: "0.25rem", fontSize: "0.95rem" }}>
                  Tips Pengerjaan Tugas
                </strong>
                <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.6, color: "var(--color-text-secondary)" }}>
                  Gunakan model dan view <code>mahasiswa</code> yang telah dipelajari sebagai acuan referensi. Pastikan kolom <code>sks</code> dan <code>semester</code> bertipe integer dan tervalidasi agar tidak menerima nilai negatif atau nol. Selalu uji setiap endpoint menggunakan cURL atau Postman sebelum mengumpulkan.
                </p>
              </div>
            </div>

            <h4 style={{ marginBottom: "0.75rem", fontSize: "1rem", fontWeight: 600 }}>Kriteria Penilaian:</h4>
            <div className="table-wrapper" style={{ overflowX: "auto", margin: "0.5rem 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                    <th style={{ padding: "0.75rem 1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-text-secondary)" }}>
                      ASPEK PENILAIAN
                    </th>
                    <th style={{ padding: "0.75rem 1rem", textAlign: "right", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-text-secondary)" }}>
                      BOBOT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                      <strong>Model Data &amp; Migrasi Alembic</strong>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                        Kesesuaian atribut model <code>Matakuliah</code>, method <code>to_dict()</code>, registrasi model, skrip revisi Alembic, dan inisialisasi data seeding.
                      </div>
                    </td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>30%</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                      <strong>Fungsionalitas API Endpoints &amp; Routes</strong>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                        Kelengkapan 5 operasi CRUD (GET, POST, PUT, DELETE), penanganan status code yang tepat (200, 400, 404), dan predikat <code>request_method</code> pada <code>routes.py</code>.
                      </div>
                    </td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>40%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>
                      <strong>Dokumentasi README, Pengujian &amp; Kerapian Kode (PEP 8)</strong>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                        Kelengkapan berkas <code>README.md</code> (identitas, petunjuk instalasi/eksekusi, bukti tangkapan layar pengujian cURL/Postman), struktur repositori rapi, dan konvensi penulisan kode bersih.
                      </div>
                    </td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <SubmissionBox pertemuan={6} />
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. FORMAT PENGUMPULAN                                                     */}
      {/* ========================================================================= */}
      {(!subId || subId === "format-pengumpulan") && (
        <section id="format-pengumpulan">
          <h2>Format Pengumpulan</h2>
          <p>Ketentuan pengumpulan repositori tugas dan laporan praktikum:</p>
          <ul>
            <li>
              <strong>Format Repositori GitHub</strong>: Gunakan repositori praktikum yang sama dengan nama:
              <br />
              <code>pemrograman_web_itera_[NIM]</code> (Contoh: <code>pemrograman_web_itera_121140001</code>).
            </li>
            <li>
              <strong>Format Folder Pertemuan</strong>: Buat folder khusus di dalam repositori dengan format nama:
              <br />
              <code>[NAMA]_[NIM]_pertemuan6</code> (Contoh: <code>ahmadfadhil_121140001_pertemuan6</code>).
            </li>
            <li>
              <strong>Struktur Direktori Repositori yang Diharapkan:</strong>
              <CodeBlock language="text">{`ahmadfadhil_121140001_pertemuan6/
├── development.ini
├── production.ini
├── setup.py
├── README.md
├── .gitignore
└── pyramid_mahasiswa/
    ├── __init__.py
    ├── routes.py
    ├── alembic/
    │   ├── env.py
    │   └── versions/
    │       ├── 20261112_create_mahasiswa_table.py
    │       └── 20261112_create_matakuliah_table.py
    ├── models/
    │   ├── __init__.py
    │   ├── meta.py
    │   ├── mahasiswa.py
    │   └── matakuliah.py
    ├── scripts/
    │   ├── __init__.py
    │   └── initialize_db.py
    └── views/
        ├── __init__.py
        ├── default.py
        ├── mahasiswa.py
        └── matakuliah.py`}</CodeBlock>
            </li>
            <li>
              <strong>Kelengkapan Berkas README.md:</strong>
              <ul style={{ marginTop: "0.35rem" }}>
                <li>Identitas praktikan (Nama Lengkap, NIM, Kelas Praktikum).</li>
                <li>Deskripsi singkat aplikasi RESTful API yang dikembangkan.</li>
                <li>Langkah-langkah instalasi lingkungan, migrasi database, dan cara menjalankan server <code>pserve</code>.</li>
                <li>Tangkapan layar (screenshot) bukti hasil eksekusi pengujian cURL atau Postman untuk seluruh endpoint (Mahasiswa dan Matakuliah).</li>
              </ul>
            </li>
            <li>
              Pastikan direktori virtual environment (<code>venv/</code>), file database SQLite lokal jika ada (<code>*.sqlite</code>), dan cache Python (<code>__pycache__/</code>, <code>*.pyc</code>) <strong>tidak diunggah ke GitHub</strong> (wajib terdaftar di dalam berkas <code>.gitignore</code>).
            </li>
          </ul>

          <SubmissionBox pertemuan={6} />
        </section>
      )}
    </>
  );
}
