import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 6: Python Pyramid
export default function Pertemuan6() {
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
      <h2 id="dasar-teori">Python Pyramid</h2>

<h3>Setup Environment</h3>
<p>Persiapan lingkungan pengembangan dan membuat proyek Pyramid dengan Cookiecutter</p>


<h3>Persiapan Lingkungan Pengembangan</h3>
<p>Sebelum mulai membuat aplikasi dengan Pyramid, kita perlu menyiapkan lingkungan pengembangan yang sesuai.</p>


<h3>Membuat Virtual Environment</h3>
<p>Virtual environment membantu mengisolasi dependensi proyek dari instalasi Python global:</p>

<CodeBlock language="">{`# Buat folder untuk proyek
mkdir pyramid_mahasiswa
cd pyramid_mahasiswa

# Buat virtual environment
python -m venv venv

# Aktifkan virtual environment
# Untuk Windows
venv\Scripts\activate
# Untuk macOS/Linux
source venv/bin/activate`}</CodeBlock>

<p>Verifikasi Virtual Environment</p>

<p>Pastikan virtual environment telah aktif. Terminal Kalian seharusnya menampilkan prefix (venv) di awal baris prompt.</p>

<CodeBlock language="">{`(venv) $`}</CodeBlock>


<h3>Instalasi Pyramid dan Dependensi</h3>
<p>Setelah virtual environment aktif, install Pyramid dan dependensi yang diperlukan:</p>

<CodeBlock language="">{`# Upgrade pip
pip install --upgrade pip setuptools

# Install cookiecutter untuk template proyek
pip install cookiecutter

# Install pyramid dan dependensi dasar
pip install pyramid pyramid_debugtoolbar waitress pyramid_jinja2`}</CodeBlock>

<p>Troubleshooting Virtual Environment</p>

<p>Jika Kalian mengalami masalah dengan virtual environment:</p>

<ul>
  <li>Di Windows: Pastikan kebijakan eksekusi script PowerShell mengizinkan aktivasi dengan menjalankan Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</li>
  <li>Di macOS/Linux: Pastikan venv/bin/activate memiliki izin eksekusi dengan chmod +x venv/bin/activate</li>
  <li>Jika perintah python tidak ditemukan, coba gunakan python3 sebagai gantinya</li>
</ul>


<h3>Membuat Proyek Pyramid dengan Cookiecutter</h3>
<p>Cookiecutter adalah tool yang membantu membuat struktur proyek berdasarkan template. Pyramid menyediakan template resmi untuk memulai proyek dengan cepat.</p>


<h3>Menjalankan Cookiecutter</h3>
<p>Jalankan cookiecutter dengan template Pyramid resmi:</p>

<CodeBlock language="">{`# Pastikan virtual environment aktif
# Jalankan cookiecutter dengan template Pyramid
cookiecutter gh:Pylons/pyramid-cookiecutter-alchemy`}</CodeBlock>

<p>Cookiecutter akan meminta beberapa input, isi seperti berikut:</p>

<CodeBlock language="">{`project_name [Pyramid Scaffold]: pyramid_mahasiswa
repo_name [pyramid_mahasiswa]:
Select template_language:
1 - jinja2
2 - chameleon
3 - mako
Choose from 1, 2, 3 [1]: 1`}</CodeBlock>

<p>Template Language</p>

<p>Kita memilih Jinja2 sebagai template engine karena sintaksnya yang familiar dan banyak digunakan di berbagai framework Python seperti Flask dan Django.</p>


<h3>Instalasi Dependensi Proyek</h3>
<p>Setelah template dibuat, pindah ke direktori proyek dan install dependensi:</p>

<CodeBlock language="">{`# Masuk ke direktori proyek
cd pyramid_mahasiswa

# Install dependensi proyek (development mode)
pip install -e ".[testing]"`}</CodeBlock>

<p>Development Mode</p>

<p>Flag -e menginstall package dalam editable mode, yang berarti perubahan kode langsung tercermin tanpa perlu reinstall package.</p>


<h3>Struktur Direktori Proyek</h3>
<p>Setelah setup selesai, struktur direktori proyek akan terlihat seperti ini:</p>


<h3>Penjelasan Struktur Proyek</h3>

<h3>File Konfigurasi Utama</h3>

<h3>Direktori Penting</h3>
<p>Tentang Struktur Pyramid</p>

<p>Struktur direktori Pyramid mengikuti konvensi Python package. Folder utama pyramid_mahasiswa/pyramid_mahasiswa adalah package Python yang berisi kode aplikasi. File development.ini dan production.ini berisi konfigurasi untuk mode development dan production.</p>


<h3>Verifikasi Setup</h3>
<p>Untuk memverifikasi bahwa setup berhasil, coba jalankan aplikasi:</p>

<CodeBlock language="">{`# Pastikan berada di direktori root proyek
# dan virtual environment aktif
pserve development.ini`}</CodeBlock>

<p>Jika berhasil, Kalian akan melihat output seperti ini:</p>

<CodeBlock language="">{`Starting server in PID 12345.
Serving on http://localhost:6543`}</CodeBlock>

<p>Buka browser dan akses http://localhost:6543. Kalian seharusnya melihat halaman default Pyramid.</p>

<p>Troubleshooting Instalasi</p>

<p>Jika menemui masalah saat instalasi dependensi:</p>

<ul>
  <li>Pastikan Python development headers terinstal (python-dev/python-devel)</li>
  <li>Di Windows, mungkin perlu Visual C++ Build Tools</li>
  <li>Jika ada package yang gagal diinstal, coba install satu persatu</li>
  <li>Periksa versi Python dengan python --version, pastikan minimal 3.7</li>
</ul>


<h3>Langkah Selanjutnya</h3>
<p>Setelah environment setup selesai dan proyek Pyramid berhasil dibuat, kita akan melanjutkan ke konfigurasi database PostgreSQL dan membuat model data pada bagian selanjutnya.</p>

<p>Praktikum Pyramid Framework</p>

<p>Membuat aplikasi CRUD sederhana dengan Pyramid Framework dan PostgreSQL</p>

<p>Database & Models</p>

<p>Konfigurasi PostgreSQL, membuat model Mahasiswa, dan menjalankan migrasi database</p>


<h3>Database & Models</h3>
<p>Konfigurasi PostgreSQL, membuat model Mahasiswa, dan menjalankan migrasi database</p>


<h3>Konfigurasi Database PostgreSQL</h3>
<p>Secara default, template Pyramid menggunakan SQLite. Kita akan mengubahnya untuk menggunakan PostgreSQL, yang lebih cocok untuk aplikasi production.</p>


<h3>Pastikan PostgreSQL Sudah Terpasang</h3>
<p>Sebelum melanjutkan, pastikan PostgreSQL sudah terinstal dan berjalan di komputer Kalian:</p>

<CodeBlock language="">{`# Login ke PostgreSQL
psql -U postgres -c "SELECT version();"

# Jika berhasil, akan menampilkan versi PostgreSQL`}</CodeBlock>

<p>Install PostgreSQL</p>

<p>Jika PostgreSQL belum terinstal:</p>

<ul>
  <li>Windows: Download installer dari postgresql.org</li>
  <li>macOS: Gunakan Homebrew brew install postgresql atau PostgreSQL.app</li>
  <li>Linux: sudo apt-get install postgresql postgresql-contrib (Ubuntu/Debian)</li>
</ul>


<h3>Membuat Database PostgreSQL</h3>
<p>Buat database baru di PostgreSQL untuk aplikasi kita dengan izin yang lengkap:</p>

<CodeBlock language="">{`# Login ke PostgreSQL sebagai superuser
# Ganti username dengan user PostgreSQL Kalian
psql -U postgres`}</CodeBlock>

<CodeBlock language="">{`-- 1. Buat database
CREATE DATABASE pyramid_mahasiswa;

-- 2. Buat user baru
CREATE USER pyramid_user WITH ENCRYPTED PASSWORD 'pyramid_pass';

-- 3. Beri user izin ke database
GRANT ALL PRIVILEGES ON DATABASE pyramid_mahasiswa TO pyramid_user;

-- 4. Pindah ke database pyramid_mahasiswa
\c pyramid_mahasiswa

-- 5. Beri izin schema public ke user
GRANT USAGE, CREATE ON SCHEMA public TO pyramid_user;

-- 6. Ubah owner schema public (opsional tapi paling aman)
ALTER SCHEMA public OWNER TO pyramid_user;

-- 7. Pastikan owner default table/sequence future
ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT ALL ON TABLES TO pyramid_user;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT ALL ON SEQUENCES TO pyramid_user;

-- 8. Keluar dari psql
\q`}</CodeBlock>

<p>Penjelasan Perintah SQL</p>

<ul>
  <li>GRANT USAGE, CREATE: Memberikan izin untuk menggunakan dan membuat objek di schema public</li>
  <li>ALTER SCHEMA OWNER: Menjadikan pyramid_user sebagai pemilik schema, memberikan kontrol penuh</li>
  <li>ALTER DEFAULT PRIVILEGES: Memastikan objek yang dibuat di masa depan otomatis dimiliki pyramid_user</li>
</ul>

<p>Password Database</p>

<p>Untuk production, gunakan password yang lebih kuat dan simpan dalam environment variables atau secret management system.</p>


<h3>Install Dependensi PostgreSQL</h3>
<p>Install psycopg2 untuk menghubungkan Python dengan PostgreSQL:</p>

<CodeBlock language="">{`pip install psycopg2-binary`}</CodeBlock>

<p>Alternatif psycopg2</p>

<p>Jika psycopg2-binary gagal diinstal, coba gunakan psycopg2 atau pastikan PostgreSQL development headers sudah terinstal di sistem Kalian.</p>


<h3>Update Konfigurasi Pyramid</h3>
<p>Ubah file development.ini untuk menggunakan PostgreSQL:</p>

<CodeBlock language="">{`# Cari dan ganti baris sqlalchemy.url
sqlalchemy.url = sqlite:///%(here)s/pyramid_mahasiswa.sqlite

# Menjadi
sqlalchemy.url = postgresql://pyramid_user:pyramid_pass@localhost:5432/pyramid_mahasiswa`}</CodeBlock>

<p>Format connection string PostgreSQL:</p>

<CodeBlock language="">{`postgresql://[user]:[password]@[host]:[port]/[database]`}</CodeBlock>

<p>Troubleshooting Koneksi Database</p>

<p>Jika mengalami masalah koneksi database, periksa:</p>

<ul>
  <li>PostgreSQL service/daemon sudah berjalan</li>
  <li>Username dan password yang digunakan sudah benar</li>
  <li>Database pyramid_mahasiswa sudah dibuat</li>
  <li>Port 5432 tidak diblokir oleh firewall</li>
  <li>PostgreSQL menerima koneksi dari localhost</li>
  <li>User pyramid_user memiliki izin yang cukup pada schema public</li>
</ul>


<h3>Membuat Model Mahasiswa</h3>
<p>Sekarang kita akan membuat model untuk data Mahasiswa menggunakan SQLAlchemy ORM.</p>


<h3>Buat File Model Mahasiswa</h3>
<p>Buat file baru pyramid_mahasiswa/models/mahasiswa.py:</p>

<CodeBlock language="">{`from sqlalchemy import (
    Column,
    Integer,
    Text,
    Date,
)

from .meta import Base


class Mahasiswa(Base):
    """ Model untuk tabel mahasiswa """
    __tablename__ = 'mahasiswa'
    id = Column(Integer, primary_key=True)
    nim = Column(Text, unique=True, nullable=False)
    nama = Column(Text, nullable=False)
    jurusan = Column(Text, nullable=False)
    tanggal_lahir = Column(Date)
    alamat = Column(Text)

    def to_dict(self):
        return {
            'id': self.id,
            'nim': self.nim,
            'nama': self.nama,
            'jurusan': self.jurusan,
            'tanggal_lahir': self.tanggal_lahir.isoformat() if self.tanggal_lahir else None,
            'alamat': self.alamat,
        }`}</CodeBlock>

<p>SQLAlchemy Column Types</p>

<p>Tipe kolom SQLAlchemy yang umum digunakan:</p>

<ul>
  <li>Integer: Bilangan bulat</li>
  <li>Text: String dengan panjang tidak terbatas</li>
  <li>String(length): String dengan panjang maksimal</li>
  <li>Date: Tanggal (tanpa waktu)</li>
  <li>DateTime: Tanggal dan waktu</li>
  <li>Boolean: True/False</li>
  <li>Float: Bilangan desimal</li>
</ul>


<h3>Update models/init.py</h3>
<p>Update file pyramid_mahasiswa/models/__init__.py untuk menambahkan model Mahasiswa:</p>

<CodeBlock language="">{`from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import configure_mappers
import zope.sqlalchemy

from .mahasiswa import Mahasiswa
from .mymodel import MyModel

configure_mappers()

def get_engine(settings, prefix='sqlalchemy.'):
    return engine_from_config(settings, prefix)

def get_session_factory(engine):
    factory = sessionmaker()
    factory.configure(bind=engine)
    return factory

def get_tm_session(session_factory, transaction_manager):
    dbsession = session_factory()
    zope.sqlalchemy.register(dbsession, transaction_manager=transaction_manager)
    return dbsession

def includeme(config):
    settings = config.get_settings()

    engine = get_engine(settings)
    session_factory = get_session_factory(engine)
    config.registry['dbsession_factory'] = session_factory

    # request.tm disediakan oleh pyramid_tm
    config.add_request_method(
        lambda request: get_tm_session(session_factory, request.tm),
        "dbsession",
        reify=True
    )`}</CodeBlock>


<h3>Update Script Initialize DB</h3>
<p>Update pyramid_mahasiswa/scripts/initialize_db.py untuk menambahkan data awal:</p>

<CodeBlock language="">{`import argparse
import sys
from datetime import date

from pyramid.paster import bootstrap, setup_logging
from sqlalchemy.exc import OperationalError

from .. import models

def setup_models(dbsession):
    """
    Add initial model objects.
    """

    existing_mahasiswa1 = dbsession.query(models.Mahasiswa).filter_by(nim='12345').first()
    existing_mahasiswa2 = dbsession.query(models.Mahasiswa).filter_by(nim='54321').first()
    
    if not existing_mahasiswa1:
        mahasiswa1 = models.Mahasiswa(
            nim='12345',
            nama='Budi Santoso',
            jurusan='Teknik Informatika',
            tanggal_lahir=date(2000, 5, 15),
            alamat='Jl. Merdeka No. 123, Bandung'
        )
        dbsession.add(mahasiswa1)
        print("Mahasiswa 12345 added.")
    else:
        print("Mahasiswa 12345 already exists.")
    
    if not existing_mahasiswa2:
        mahasiswa2 = models.Mahasiswa(
            nim='54321',
            nama='Siti Aminah',
            jurusan='Sistem Informasi',
            tanggal_lahir=date(2001, 8, 22),
            alamat='Jl. Mawar No. 45, Jakarta'
        )
        dbsession.add(mahasiswa2)
        print("Mahasiswa 54321 added.")
    else:
        print("Mahasiswa 54321 already exists.")

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

    # bootstrap will return a context with request + closer
    env = bootstrap(args.config_uri)
    request = env['request']

    try:
        # gunakan request.tm (bukan tm_manager)
        with request.tm:
            dbsession = request.dbsession
            setup_models(dbsession)

        print("Database initialized successfully.")

    except OperationalError:
        print('''
Pyramid is having a problem using your SQL database.

Your database should be up and running before you
initialize your project. Make sure your database server
is running and your connection string in development.ini
is correctly configured.
''')

    finally:
        env['closer']()


if __name__ == '__main__':
    main()`}</CodeBlock>

<p>SQLAlchemy ORM</p>

<p>SQLAlchemy Object-Relational Mapping (ORM) memungkinkan kita mendefinisikan dan bekerja dengan data seperti objek Python biasa, tanpa perlu menulis query SQL secara langsung. Setiap kelas model memetakan ke satu tabel di database.</p>


<h3>Menjalankan Migrasi Database dengan Alembic</h3>
<p>Alembic adalah tool migrasi database untuk SQLAlchemy. Dengan Alembic, kita dapat melacak perubahan skema database dan menerapkannya dengan mudah.</p>


<h3>Pastikan Alembic Terpasang</h3>
<p>Alembic sudah termasuk dalam dependensi proyek, tapi pastikan sudah terpasang:</p>

<CodeBlock language="">{`# Verifikasi Alembic sudah terpasang
pip list | grep alembic

# Jika tidak ada, install
pip install alembic`}</CodeBlock>


<h3>Membuat Migrasi Awal</h3>
<p>Template Pyramid sudah menyertakan konfigurasi Alembic. Kita perlu membuat file migrasi:</p>

<CodeBlock language="">{`# Di root proyek pyramid_mahasiswa
# Pastikan virtual environment aktif

# Buat file migrasi
alembic -c development.ini revision --autogenerate -m "create mahasiswa table"`}</CodeBlock>

<p>Perintah ini akan membuat file migrasi baru di folder pyramid_mahasiswa/alembic/versions/. File ini berisi kode untuk membuat tabel mahasiswa.</p>

<p>Autogenerate Migration</p>

<p>Flag --autogenerate membuat Alembic membandingkan model dengan database dan menghasilkan kode migrasi secara otomatis. Namun, selalu review file migrasi yang dihasilkan untuk memastikan kode sesuai dengan yang diharapkan.</p>


<h3>Menjalankan Migrasi</h3>
<p>Setelah file migrasi dibuat, kita dapat menjalankan migrasi untuk membuat tabel di database:</p>

<CodeBlock language="">{`# Jalankan migrasi
alembic -c development.ini upgrade head`}</CodeBlock>

<p>Kalian akan melihat output seperti:</p>

<CodeBlock language="">{`INFO  [alembic.runtime.migration] Running upgrade -> 1234567890ab, create mahasiswa table`}</CodeBlock>


<h3>Inisialisasi Database dengan Data Awal</h3>
<p>Sekarang kita dapat menjalankan script initialize_db.py untuk menambahkan data awal:</p>

<CodeBlock language="">{`# Jalankan dari direktori root proyek
python -m pyramid_mahasiswa.scripts.initialize_db development.ini`}</CodeBlock>

<p>Jika berhasil, data mahasiswa akan ditambahkan ke database.</p>


<h3>Perintah Alembic yang Berguna</h3>
<p>Troubleshooting Migrasi</p>

<p>Jika mengalami error saat menjalankan migrasi, periksa:</p>

<ul>
  <li>Pastikan PostgreSQL berjalan dan dapat diakses</li>
  <li>Pastikan koneksi string di development.ini sudah benar</li>
  <li>Jika error menyebutkan "module not found", pastikan Kalian berada di direktori root proyek</li>
  <li>Jika error terjadi saat generate revision, pastikan model Mahasiswa sudah benar dan ter-import di models/__init__.py</li>
  <li>Jika terjadi error permission denied, pastikan setup database di Step 2 sudah dijalankan dengan lengkap</li>
</ul>


<h3>Verifikasi Data di Database</h3>
<p>Untuk memverifikasi bahwa tabel dan data berhasil dibuat, Kalian bisa menggunakan psql:</p>

<CodeBlock language="">{`# Login ke database
psql -U pyramid_user -d pyramid_mahasiswa

# Lihat tabel yang ada
\dt

# Lihat data mahasiswa
SELECT * FROM mahasiswa;

# Keluar
\q`}</CodeBlock>

<p>Kalian seharusnya melihat 2 data mahasiswa yang telah ditambahkan.</p>


<h3>Langkah Selanjutnya</h3>
<p>Setelah database dikonfigurasi dan model dibuat, kita akan melanjutkan ke pembuatan views dan routes untuk operasi CRUD pada bagian selanjutnya.</p>

<p>Setup Environment</p>

<p>Persiapan lingkungan pengembangan dan membuat proyek Pyramid dengan Cookiecutter</p>

<p>Views & Routes</p>

<p>Implementasi CRUD views dan konfigurasi routing untuk API Mahasiswa</p>


<h3>Views & Routes</h3>
<p>Implementasi CRUD views dan konfigurasi routing untuk API Mahasiswa</p>


<h3>Membuat Views untuk CRUD Mahasiswa</h3>
<p>Views adalah fungsi yang menangani request dan mengembalikan response. Kita akan membuat views untuk operasi CRUD (Create, Read, Update, Delete) pada data Mahasiswa.</p>


<h3>Buat File Views Mahasiswa</h3>
<p>Buat file baru pyramid_mahasiswa/views/mahasiswa.py:</p>

<CodeBlock language="">{`import datetime
from pyramid.view import view_config
from pyramid.httpexceptions import (
    HTTPFound,
    HTTPNotFound,
    HTTPBadRequest,
)
from ..models import Mahasiswa


@view_config(route_name='mahasiswa_list', renderer='json')
def mahasiswa_list(request):
    """View untuk menampilkan daftar mahasiswa"""
    dbsession = request.dbsession
    mahasiswas = dbsession.query(Mahasiswa).all()
    return {'mahasiswas': [m.to_dict() for m in mahasiswas]}


@view_config(route_name='mahasiswa_detail', renderer='json')
def mahasiswa_detail(request):
    """View untuk melihat detail satu mahasiswa"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()

    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})

    return {'mahasiswa': mahasiswa.to_dict()}


@view_config(route_name='mahasiswa_add', request_method='POST', renderer='json')
def mahasiswa_add(request):
    """View untuk menambahkan mahasiswa baru"""
    try:
        # Ambil data dari request JSON
        json_data = request.json_body

        # Validasi data minimal
        required_fields = ['nim', 'nama', 'jurusan']
        for field in required_fields:
            if field not in json_data:
                return HTTPBadRequest(
                    json_body={'error': f'Field {field} wajib diisi'}
                )

        # Parse tanggal lahir jika ada
        tanggal_lahir = None
        if 'tanggal_lahir' in json_data and json_data['tanggal_lahir']:
            try:
                tanggal_lahir = datetime.datetime.fromisoformat(
                    json_data['tanggal_lahir']
                ).date()
            except ValueError:
                return HTTPBadRequest(
                    json_body={
                        'error': 'Format tanggal lahir tidak valid. Gunakan YYYY-MM-DD'
                    }
                )

        # Buat objek Mahasiswa baru
        mahasiswa = Mahasiswa(
            nim=json_data['nim'],
            nama=json_data['nama'],
            jurusan=json_data['jurusan'],
            tanggal_lahir=tanggal_lahir,
            alamat=json_data.get('alamat')
        )

        # Simpan ke database
        dbsession = request.dbsession
        dbsession.add(mahasiswa)
        dbsession.flush()  # Untuk mendapatkan ID yang baru dibuat

        return {'success': True, 'mahasiswa': mahasiswa.to_dict()}

    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})


@view_config(route_name='mahasiswa_update', request_method='PUT', renderer='json')
def mahasiswa_update(request):
    """View untuk mengupdate data mahasiswa"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']

    # Cari mahasiswa yang akan diupdate
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})

    try:
        # Ambil data dari request JSON
        json_data = request.json_body

        # Update atribut yang ada di request
        if 'nim' in json_data:
            mahasiswa.nim = json_data['nim']
        if 'nama' in json_data:
            mahasiswa.nama = json_data['nama']
        if 'jurusan' in json_data:
            mahasiswa.jurusan = json_data['jurusan']
        if 'alamat' in json_data:
            mahasiswa.alamat = json_data['alamat']

        # Parse tanggal lahir jika ada
        if 'tanggal_lahir' in json_data:
            if json_data['tanggal_lahir']:
                try:
                    mahasiswa.tanggal_lahir = datetime.datetime.fromisoformat(
                        json_data['tanggal_lahir']
                    ).date()
                except ValueError:
                    return HTTPBadRequest(
                        json_body={
                            'error': 'Format tanggal lahir tidak valid. Gunakan YYYY-MM-DD'
                        }
                    )
            else:
                mahasiswa.tanggal_lahir = None

        return {'success': True, 'mahasiswa': mahasiswa.to_dict()}

    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})


@view_config(route_name='mahasiswa_delete', request_method='DELETE', renderer='json')
def mahasiswa_delete(request):
    """View untuk menghapus data mahasiswa"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']

    # Cari mahasiswa yang akan dihapus
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})

    # Hapus dari database
    dbsession.delete(mahasiswa)

    return {
        'success': True,
        'message': f'Mahasiswa dengan id {mahasiswa_id} berhasil dihapus'
    }`}</CodeBlock>

<p>Renderer JSON</p>

<p>Kita menggunakan renderer='json' pada decorator @view_config untuk mengonversi return value dari function view menjadi JSON response secara otomatis. Ini berguna untuk membuat API web yang mengembalikan data dalam format JSON.</p>


<h3>Penjelasan View Functions</h3>
<p>Mari kita pahami setiap view function yang telah dibuat:</p>

<CodeBlock language="">{`@view_config(route_name='mahasiswa_list', renderer='json')
def mahasiswa_list(request):
    dbsession = request.dbsession
    mahasiswas = dbsession.query(Mahasiswa).all()
    return {'mahasiswas': [m.to_dict() for m in mahasiswas]}`}</CodeBlock>

<p>View ini:</p>

<ul>
  <li>Mengambil semua data mahasiswa dari database</li>
  <li>Mengkonversi setiap objek Mahasiswa ke dictionary dengan to_dict()</li>
  <li>Mengembalikan list dictionary dalam format JSON</li>
</ul>

<CodeBlock language="">{`@view_config(route_name='mahasiswa_detail', renderer='json')
def mahasiswa_detail(request):
    mahasiswa_id = request.matchdict['id']
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()`}</CodeBlock>

<p>View ini:</p>

<ul>
  <li>Mengambil ID dari URL parameter dengan request.matchdict['id']</li>
  <li>Mencari mahasiswa dengan ID tersebut</li>
  <li>Mengembalikan 404 jika tidak ditemukan</li>
</ul>

<CodeBlock language="">{`@view_config(route_name='mahasiswa_add', request_method='POST', renderer='json')
def mahasiswa_add(request):
    json_data = request.json_body`}</CodeBlock>

<p>View ini:</p>

<ul>
  <li>Menerima data JSON dari request body</li>
  <li>Melakukan validasi field yang wajib diisi</li>
  <li>Membuat objek Mahasiswa baru dan menyimpannya ke database</li>
</ul>

<p>View-view ini mengikuti pola yang sama dengan update dan delete operasi pada database.</p>


<h3>Membuat Routes dan Update routes.py</h3>
<p>Sekarang kita perlu mendefinisikan routes untuk endpoints CRUD Mahasiswa.</p>


<h3>Update File routes.py</h3>
<p>Edit file pyramid_mahasiswa/routes.py:</p>

<CodeBlock language="">{`def includeme(config):
    """Add routes to the config."""
    config.add_static_view('static', 'static', cache_max_age=3600)

    # Default route
    config.add_route('home', '/')

    # Mahasiswa routes
    config.add_route('mahasiswa_list', '/api/mahasiswa', request_method='GET')
    config.add_route('mahasiswa_detail', '/api/mahasiswa/{id}', request_method='GET')
    config.add_route('mahasiswa_add', '/api/mahasiswa', request_method='POST')
    config.add_route('mahasiswa_update', '/api/mahasiswa/{id}', request_method='PUT')
    config.add_route('mahasiswa_delete', '/api/mahasiswa/{id}', request_method='DELETE')`}</CodeBlock>

<p>Request Method Parameter</p>

<p>Perhatikan penambahan parameter request_method pada setiap route. Ini sangat penting untuk membedakan endpoint yang memiliki URL sama tetapi method berbeda. Tanpa parameter ini, Pyramid mungkin akan selalu mengarahkan request ke satu view function saja, yang menyebabkan endpoint POST/PUT/DELETE tidak berfungsi.</p>


<h3>RESTful API Pattern</h3>
<p>API yang kita buat mengikuti pola RESTful dengan mapping sebagai berikut:</p>

<p>RESTful API Best Practices</p>

<p>RESTful API menggunakan HTTP methods untuk menentukan jenis operasi:</p>

<ul>
  <li>GET: Mengambil data (read-only)</li>
  <li>POST: Membuat data baru</li>
  <li>PUT: Mengupdate data yang ada</li>
  <li>DELETE: Menghapus data</li>
</ul>


<h3>Scan Views Module</h3>
<p>Agar views yang telah kita buat dapat digunakan, kita perlu memastikan Pyramid melakukan scan pada module views.</p>

<p>Edit file pyramid_mahasiswa/__init__.py dan pastikan ada kode berikut:</p>

<CodeBlock language="">{`def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    (...)
    # Update Scan views module
    config.scan('.views')

    return config.make_wsgi_app()`}</CodeBlock>

<p>Baris config.scan('.views') membuat Pyramid mencari semua decorator @view_config di dalam module views dan mendaftarkannya.</p>

<p>Config Scan</p>

<p>Pyramid menggunakan config scan untuk menemukan dan mendaftarkan views, routes, dan komponen lainnya secara otomatis. Tanpa config.scan(), decorator @view_config tidak akan berfungsi.</p>


<h3>SQLAlchemy Query Patterns</h3>
<p>Berikut beberapa pattern query SQLAlchemy yang sering digunakan:</p>

<CodeBlock language="">{`# Mendapatkan semua data
mahasiswas = dbsession.query(Mahasiswa).all()

# Dengan ordering
mahasiswas = dbsession.query(Mahasiswa).order_by(Mahasiswa.nama).all()

# Dengan limit
mahasiswas = dbsession.query(Mahasiswa).limit(10).all()`}</CodeBlock>

<CodeBlock language="">{`# Filter by single field
mahasiswa = dbsession.query(Mahasiswa).filter_by(nim='12345').first()

# Filter dengan kondisi
mahasiswas = dbsession.query(Mahasiswa).filter(
    Mahasiswa.jurusan == 'Teknik Informatika'
).all()

# Multiple conditions
mahasiswas = dbsession.query(Mahasiswa).filter(
    Mahasiswa.jurusan == 'Teknik Informatika',
    Mahasiswa.nama.like('%budi%')
).all()`}</CodeBlock>

<CodeBlock language="">{`# Get first result or None
mahasiswa = dbsession.query(Mahasiswa).first()

# Get one result (raises if not found or multiple found)
mahasiswa = dbsession.query(Mahasiswa).filter_by(id=1).one()

# Get one or None
mahasiswa = dbsession.query(Mahasiswa).filter_by(id=1).one_or_none()`}</CodeBlock>

<CodeBlock language="">{`# Add new object
mahasiswa = Mahasiswa(nim='12345', nama='Budi')
dbsession.add(mahasiswa)

# Delete object
mahasiswa = dbsession.query(Mahasiswa).filter_by(id=1).first()
dbsession.delete(mahasiswa)

# Update object (directly modify attributes)
mahasiswa = dbsession.query(Mahasiswa).filter_by(id=1).first()
mahasiswa.nama = 'Budi Updated'
# No need to call update, SQLAlchemy tracks changes`}</CodeBlock>


<h3>Menjalankan Aplikasi</h3>
<p>Setelah semua komponen diimplementasikan, jalankan aplikasi:</p>

<CodeBlock language="">{`# Pastikan virtual environment aktif
# Di root proyek
pserve development.ini --reload`}</CodeBlock>

<p>Flag --reload akan menyebabkan server restart secara otomatis saat ada perubahan kode. Server akan berjalan pada port 6543 (http://localhost:6543).</p>

<p>Server Ready</p>

<p>Jika server berhasil dijalankan, Kalian akan melihat output:</p>

<CodeBlock language="">{`Starting server in PID xxxxx.
Serving on http://localhost:6543`}</CodeBlock>


<h3>Langkah Selanjutnya</h3>
<p>Setelah views dan routes selesai dibuat, kita akan melanjutkan ke pengujian API dan mengerjakan tugas praktikum pada bagian selanjutnya.</p>

<p>Database & Models</p>

<p>Konfigurasi PostgreSQL, membuat model Mahasiswa, dan menjalankan migrasi database</p>

<p>Testing</p>

<p>Pengujian API Pyramid Framework</p>


<h3>Testing</h3>
<p>Pengujian API Pyramid Framework</p>


<h3>Pengujian API dengan curl</h3>
<p>Sekarang kita akan menguji API yang telah dibuat menggunakan curl. Pastikan server Pyramid sedang berjalan sebelum melakukan pengujian.</p>

<p>Menjalankan Server</p>

<p>Jika server belum berjalan, jalankan dengan perintah:</p>

<CodeBlock language="">{`pserve development.ini --reload`}</CodeBlock>


<h3>Pengujian dengan curl di Linux/macOS</h3>

<h3>Mendapatkan Daftar Mahasiswa (GET)</h3>
<CodeBlock language="">{`curl -X GET http://localhost:6543/api/mahasiswa`}</CodeBlock>

<p>Response yang diharapkan:</p>

<CodeBlock language="">{`{
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
}`}</CodeBlock>


<h3>Mendapatkan Detail Mahasiswa (GET)</h3>
<CodeBlock language="">{`curl -X GET http://localhost:6543/api/mahasiswa/1`}</CodeBlock>

<p>Response yang diharapkan:</p>

<CodeBlock language="">{`{
  "mahasiswa": {
    "id": 1,
    "nim": "12345",
    "nama": "Budi Santoso",
    "jurusan": "Teknik Informatika",
    "tanggal_lahir": "2000-05-15",
    "alamat": "Jl. Merdeka No. 123, Bandung"
  }
}`}</CodeBlock>


<h3>Menambahkan Mahasiswa Baru (POST)</h3>
<CodeBlock language="">{`curl -X POST http://localhost:6543/api/mahasiswa \
-H "Content-Type: application/json" \
-d '{
  "nim": "67890",
  "nama": "Ahmad Fadli",
  "jurusan": "Teknik Elektro",
  "tanggal_lahir": "2001-11-05",
  "alamat": "Jl. Mawar No. 10, Surabaya"
}'`}</CodeBlock>

<p>Response yang diharapkan:</p>

<CodeBlock language="">{`{
  "success": true,
  "mahasiswa": {
    "id": 3,
    "nim": "67890",
    "nama": "Ahmad Fadli",
    "jurusan": "Teknik Elektro",
    "tanggal_lahir": "2001-11-05",
    "alamat": "Jl. Mawar No. 10, Surabaya"
  }
}`}</CodeBlock>


<h3>Mengupdate Data Mahasiswa (PUT)</h3>
<CodeBlock language="">{`curl -X PUT http://localhost:6543/api/mahasiswa/1 \
-H "Content-Type: application/json" \
-d '{
  "jurusan": "Informatika",
  "alamat": "Jl. Melati No. 5, Bandung"
}'`}</CodeBlock>

<p>Response yang diharapkan:</p>

<CodeBlock language="">{`{
  "success": true,
  "mahasiswa": {
    "id": 1,
    "nim": "12345",
    "nama": "Budi Santoso",
    "jurusan": "Informatika",
    "tanggal_lahir": "2000-05-15",
    "alamat": "Jl. Melati No. 5, Bandung"
  }
}`}</CodeBlock>


<h3>Menghapus Data Mahasiswa (DELETE)</h3>
<CodeBlock language="">{`curl -X DELETE http://localhost:6543/api/mahasiswa/3`}</CodeBlock>

<p>Response yang diharapkan:</p>

<CodeBlock language="">{`{
  "success": true,
  "message": "Mahasiswa dengan id 3 berhasil dihapus"
}`}</CodeBlock>


<h3>Pengujian dengan curl di Windows</h3>
<p>Untuk pengguna Windows, gunakan syntax curl berikut dengan escape character yang berbeda:</p>

<CodeBlock language="">{`curl -X GET http://localhost:6543/api/mahasiswa`}</CodeBlock>

<CodeBlock language="">{`curl -X POST http://localhost:6543/api/mahasiswa \`
-H "Content-Type: application/json" \`
-d '{\"nim\": \"67890\", \"nama\": \"Ahmad Fadli\", \"jurusan\": \"Teknik Elektro\", \"tanggal_lahir\": \"2001-11-05\", \"alamat\": \"Jl. Mawar No. 10, Surabaya\"}'`}</CodeBlock>

<CodeBlock language="">{`curl -X PUT http://localhost:6543/api/mahasiswa/1 \`
-H "Content-Type: application/json" \`
-d '{\"jurusan\": \"Informatika\", \"alamat\": \"Jl. Melati No. 5, Bandung\"}'`}</CodeBlock>

<CodeBlock language="">{`curl -X DELETE http://localhost:6543/api/mahasiswa/3`}</CodeBlock>

<CodeBlock language="">{`curl -X GET http://localhost:6543/api/mahasiswa`}</CodeBlock>

<CodeBlock language="">{`curl -X POST http://localhost:6543/api/mahasiswa -H "Content-Type: application/json" -d "{\"nim\": \"67890\", \"nama\": \"Ahmad Fadli\", \"jurusan\": \"Teknik Elektro\", \"tanggal_lahir\": \"2001-11-05\", \"alamat\": \"Jl. Mawar No. 10, Surabaya\"}"`}</CodeBlock>

<CodeBlock language="">{`curl -X PUT http://localhost:6543/api/mahasiswa/1 -H "Content-Type: application/json" -d "{\"jurusan\": \"Informatika\", \"alamat\": \"Jl. Melati No. 5, Bandung\"}"`}</CodeBlock>

<CodeBlock language="">{`curl -X DELETE http://localhost:6543/api/mahasiswa/3`}</CodeBlock>


<h3>Alternatif Tools untuk Pengujian API</h3>
<p>Selain curl, Kalian dapat menggunakan tools lain yang lebih mudah untuk pengujian API:</p>


<h3>1. Browser (untuk GET Request)</h3>
<p>Untuk request GET sederhana, Kalian bisa langsung membuka URL di browser:</p>

<ul>
  <li>http://localhost:6543/api/mahasiswa</li>
  <li>http://localhost:6543/api/mahasiswa/1</li>
</ul>


<h3>2. Postman</h3>
<p>Postman adalah aplikasi desktop dengan antarmuka grafis yang memudahkan pengujian API:</p>

<ul>
  <li>Download Postman dari https://www.postman.com/downloads/</li>
  <li>Buat request baru dengan method yang diinginkan (GET, POST, PUT, DELETE)</li>
  <li>Masukkan URL endpoint</li>
  <li>Untuk POST/PUT, pilih tab "Body" → "raw" → "JSON" dan masukkan data JSON</li>
  <li>Klik "Send" untuk mengirim request</li>
</ul>


<h3>3. Insomnia</h3>
<p>Alternatif Postman yang lebih ringan:</p>

<ul>
  <li>Download dari https://insomnia.rest/download</li>
  <li>Interface yang lebih sederhana dan ringan</li>
  <li>Fitur yang cukup lengkap untuk API testing</li>
</ul>


<h3>4. VS Code REST Client Extension</h3>
<p>Jika menggunakan VS Code, install extension "REST Client":</p>

<ul>
  <li>Install extension "REST Client" di VS Code</li>
  <li>Buat file baru dengan ekstensi .http atau .rest</li>
  <li>Tulis request dalam format:</li>
</ul>

<CodeBlock language="">{`### Get all mahasiswa
GET http://localhost:6543/api/mahasiswa

### Get detail mahasiswa
GET http://localhost:6543/api/mahasiswa/1

### Add new mahasiswa
POST http://localhost:6543/api/mahasiswa
Content-Type: application/json

{
  "nim": "67890",
  "nama": "Ahmad Fadli",
  "jurusan": "Teknik Elektro",
  "tanggal_lahir": "2001-11-05",
  "alamat": "Jl. Mawar No. 10, Surabaya"
}

### Update mahasiswa
PUT http://localhost:6543/api/mahasiswa/1
Content-Type: application/json

{
  "jurusan": "Informatika",
  "alamat": "Jl. Melati No. 5, Bandung"
}

### Delete mahasiswa
DELETE http://localhost:6543/api/mahasiswa/3`}</CodeBlock>

<ul>
  <li>Klik "Send Request" di atas setiap request untuk menjalankannya</li>
</ul>

<p>Troubleshooting API Testing</p>

<p>Jika mengalami masalah saat mengakses API:</p>

<ul>
  <li>Pastikan server Pyramid sedang berjalan</li>
  <li>Periksa port yang digunakan (default: 6543)</li>
  <li>Periksa log error di terminal tempat server berjalan</li>
  <li>Gunakan http://127.0.0.1:6543 jika localhost tidak berfungsi</li>
  <li>Pastikan tidak ada aplikasi lain yang menggunakan port 6543</li>
</ul>

<p>Views & Routes</p>

<p>Implementasi CRUD views dan konfigurasi routing untuk API Mahasiswa</p>

<p>Ujian Tengah Semester (UTS)</p>

<p>Informasi lengkap mengenai UTS Pemrograman Web</p>


      <SubmissionBox pertemuan={6} />
    </>
  );
}
