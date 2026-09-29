import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 6: Pyramid Framework
const Info = ({ text }: { text: string }) => (
  <div className="callout callout-info"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink:0,marginTop:"2px",color:"var(--color-accent)" }}><circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg><div className="callout-body"><p>{text}</p></div></div>
);
const Exercise = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="callout callout-warning"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink:0,marginTop:"2px",color:"var(--color-amber-500)" }}><path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg><div className="callout-body"><p><strong>Latihan Mandiri: {title}</strong><br />{children}</p></div></div>
);

export default function Pertemuan6() {
  return (
    <>
      <h2 id="dasar-teori">Arsitektur Pyramid Framework</h2>
      <p>Pyramid adalah framework Python yang bersifat minimalis namun sangat fleksibel. Berbeda dengan Django ("batteries included"), Pyramid mengutamakan fleksibilitas dengan pendekatan <em>"pay only for what you eat"</em>.</p>
      <p><strong>Kelebihan Pyramid:</strong> Fleksibilitas (proyek kecil-besar), Modular, Konfigurasi Deklaratif, Database Agnostic, Skalabilitas, dukungan Template Engine (Jinja2, Mako, Chameleon).</p>
      <Info text="Pyramid vs Framework Lainnya: Pyramid berada di tengah antara micro-framework seperti Flask dan full-stack framework seperti Django; fleksibel seperti Flask, tapi lebih terstruktur, dan bisa berkembang dari sederhana ke kompleks tanpa ganti framework." />

      <h2 id="alat-bahan">Alat dan Dependensi</h2>
      <ul>
        <li>Python 3.7+</li>
        <li>PostgreSQL: database untuk menyimpan data</li>
        <li>Text Editor/IDE: VSCode, PyCharm, dll.</li>
        <li>Command Line/Terminal</li>
        <li>Rekomendasi: PostgreSQL App (macOS), pgAdmin, DBeaver, atau Docker</li>
      </ul>

      <h2 id="panduan-praktik">Langkah Praktikum</h2>

      <h3 id="persiapan-lingkungan">1. Persiapan Lingkungan Pengembangan</h3>
      <CodeBlock language="bash">{`# Buat folder untuk proyek
mkdir pyramid_mahasiswa
cd pyramid_mahasiswa

# Buat virtual environment
python -m venv venv

# Aktifkan virtual environment (macOS/Linux)
source venv/bin/activate
# Windows: venv\\Scripts\\activate

# Upgrade pip dan install dependencies
pip install --upgrade pip setuptools
pip install cookiecutter
pip install pyramid pyramid_debugtoolbar waitress pyramid_jinja2`}</CodeBlock>
      <Info text="Terminal dengan virtual environment aktif akan menampilkan prefix (venv) $. Troubleshooting: Windows: pastikan execution policy PowerShell mengizinkan aktivasi. macOS/Linux: jika python tidak ditemukan, coba python3." />

      <h3 id="scaffold-cookiecutter">2. Scaffolding Proyek Cookiecutter</h3>
      <CodeBlock language="bash">{`cookiecutter gh:Pylons/pyramid-cookiecutter-alchemy`}</CodeBlock>
      <p>Input untuk cookiecutter:</p>
      <CodeBlock language="bash">{`project_name [Pyramid Scaffold]: pyramid_mahasiswa
repo_name [pyramid_mahasiswa]:
Select template_language:
1 - jinja2   ← pilih ini
2 - chameleon
3 - mako`}</CodeBlock>
      <CodeBlock language="bash">{`cd pyramid_mahasiswa
pip install -e ".[testing]"`}</CodeBlock>
      <p>Struktur direktori yang dihasilkan:</p>
      <CodeBlock language="bash">{`pyramid_mahasiswa/
├── development.ini
├── production.ini
└── pyramid_mahasiswa/
    ├── __init__.py
    ├── alembic/
    │   └── versions/
    ├── models/
    │   ├── meta.py
    │   └── mymodel.py
    ├── routes.py
    ├── scripts/
    ├── static/
    ├── templates/
    └── views/`}</CodeBlock>

      <h3 id="koneksi-db">3. Konfigurasi Database PostgreSQL</h3>
      <CodeBlock language="sql">{`-- Membuat database
psql -U postgres
CREATE DATABASE pyramid_mahasiswa;
CREATE USER pyramid_user WITH ENCRYPTED PASSWORD 'pyramid_pass';
GRANT ALL PRIVILEGES ON DATABASE pyramid_mahasiswa TO pyramid_user;
\\q`}</CodeBlock>
      <CodeBlock language="bash">{`pip install psycopg2-binary`}</CodeBlock>
      <CodeBlock language="ini">{`# development.ini (ganti baris sqlalchemy.url)
# Dari:
sqlalchemy.url = sqlite:///%(here)s/pyramid_mahasiswa.sqlite
# Menjadi:
sqlalchemy.url = postgresql://pyramid_user:pyramid_pass@localhost:5432/pyramid_mahasiswa`}</CodeBlock>

      <h3 id="model-mahasiswa">4. Pemodelan Data SQLAlchemy</h3>
      <CodeBlock language="python">{`# pyramid_mahasiswa/models/mahasiswa.py
from sqlalchemy import Column, Integer, Text, Date
from .meta import Base

class Mahasiswa(Base):
    """ Model untuk tabel mahasiswa """
    __tablename__ = 'mahasiswa'
    id            = Column(Integer, primary_key=True)
    nim           = Column(Text, unique=True, nullable=False)
    nama          = Column(Text, nullable=False)
    jurusan       = Column(Text, nullable=False)
    tanggal_lahir = Column(Date)
    alamat        = Column(Text)

    def to_dict(self):
        return {
            'id':            self.id,
            'nim':           self.nim,
            'nama':          self.nama,
            'jurusan':       self.jurusan,
            'tanggal_lahir': self.tanggal_lahir.isoformat() if self.tanggal_lahir else None,
            'alamat':        self.alamat,
        }`}</CodeBlock>
      <Info text="SQLAlchemy ORM menerjemahkan class Python menjadi tabel database. __tablename__ menentukan nama tabel. Method to_dict() memudahkan konversi model ke JSON untuk API." />
      <Exercise title="Tambah Kolom Email">Tambahkan kolom baru <code>email</code> (unique, nullable) pada model <code>Mahasiswa</code>. Buat migrasi baru dengan <code>alembic revision --autogenerate</code> lalu jalankan <code>alembic upgrade head</code>. Expected: tabel <code>mahasiswa</code> di database punya kolom <code>email</code> baru.</Exercise>

      <h3 id="migrasi-alembic">5. Migrasi Database dengan Alembic</h3>
      <CodeBlock language="bash">{`# Buat file migrasi
alembic -c development.ini revision --autogenerate -m "create mahasiswa table"

# Jalankan migrasi
alembic -c development.ini upgrade head

# Inisialisasi database dengan data awal
python -m pyramid_mahasiswa.scripts.initialize_db development.ini`}</CodeBlock>
      <Info text="Alembic memungkinkan migrasi bertahap. Bisa mundur ke versi sebelumnya (alembic downgrade -1) atau maju ke versi tertentu (alembic upgrade +1)." />

      <h3 id="views-crud">6. Implementasi CRUD Views Handlers</h3>
      <CodeBlock language="python">{`# pyramid_mahasiswa/views/mahasiswa.py
import datetime
from pyramid.view import view_config
from pyramid.httpexceptions import HTTPFound, HTTPNotFound, HTTPBadRequest
from ..models import Mahasiswa

@view_config(route_name='mahasiswa_list', renderer='json')
def mahasiswa_list(request):
    """Menampilkan daftar mahasiswa"""
    mahasiswas = request.dbsession.query(Mahasiswa).all()
    return {'mahasiswas': [m.to_dict() for m in mahasiswas]}

@view_config(route_name='mahasiswa_detail', renderer='json')
def mahasiswa_detail(request):
    """Melihat detail satu mahasiswa"""
    mahasiswa_id = request.matchdict['id']
    mahasiswa = request.dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})
    return {'mahasiswa': mahasiswa.to_dict()}

@view_config(route_name='mahasiswa_add', request_method='POST', renderer='json')
def mahasiswa_add(request):
    """Menambahkan mahasiswa baru"""
    try:
        json_data = request.json_body
        for field in ['nim', 'nama', 'jurusan']:
            if field not in json_data:
                return HTTPBadRequest(json_body={'error': f'Field {field} wajib diisi'})

        mahasiswa = Mahasiswa(
            nim=json_data['nim'], nama=json_data['nama'],
            jurusan=json_data['jurusan'], alamat=json_data.get('alamat')
        )
        request.dbsession.add(mahasiswa)
        request.dbsession.flush()
        return {'success': True, 'mahasiswa': mahasiswa.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='mahasiswa_update', request_method='PUT', renderer='json')
def mahasiswa_update(request):
    """Mengupdate data mahasiswa"""
    mahasiswa_id = request.matchdict['id']
    mahasiswa = request.dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})
    json_data = request.json_body
    if 'nama' in json_data:    mahasiswa.nama    = json_data['nama']
    if 'jurusan' in json_data: mahasiswa.jurusan = json_data['jurusan']
    if 'alamat' in json_data:  mahasiswa.alamat  = json_data['alamat']
    return {'success': True, 'mahasiswa': mahasiswa.to_dict()}

@view_config(route_name='mahasiswa_delete', request_method='DELETE', renderer='json')
def mahasiswa_delete(request):
    """Menghapus data mahasiswa"""
    mahasiswa_id = request.matchdict['id']
    mahasiswa = request.dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})
    request.dbsession.delete(mahasiswa)
    return {'success': True, 'message': f'Mahasiswa {mahasiswa_id} berhasil dihapus'}`}</CodeBlock>
      <Exercise title="Filter Berdasarkan Jurusan">Tambahkan view function dan route baru <code>GET /api/mahasiswa/jurusan/{"{jurusan}"}</code> yang mengembalikan daftar mahasiswa dari jurusan tertentu saja. Hint: gunakan <code>.filter_by(jurusan=...)</code>.</Exercise>

      <h3 id="pemetaan-routes">7. Konfigurasi Rute & URL Dispatch</h3>
      <CodeBlock language="python">{`# pyramid_mahasiswa/routes.py
def includeme(config):
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home',              '/')
    config.add_route('mahasiswa_list',    '/api/mahasiswa',     request_method='GET')
    config.add_route('mahasiswa_detail',  '/api/mahasiswa/{id}',request_method='GET')
    config.add_route('mahasiswa_add',     '/api/mahasiswa',     request_method='POST')
    config.add_route('mahasiswa_update',  '/api/mahasiswa/{id}',request_method='PUT')
    config.add_route('mahasiswa_delete',  '/api/mahasiswa/{id}',request_method='DELETE')`}</CodeBlock>
      <Info text="Parameter request_method sangat penting untuk membedakan endpoint dengan URL sama tapi method berbeda. GET /api/mahasiswa → list; POST /api/mahasiswa → add; GET /api/mahasiswa/1 → detail; PUT /api/mahasiswa/1 → update; DELETE /api/mahasiswa/1 → delete." />
      <Exercise title="Validasi NIM Minimal">Pada view <code>mahasiswa_add</code>, tambahkan validasi: jika panjang <code>nim</code> kurang dari 5 karakter, kembalikan <code>HTTPBadRequest</code> dengan pesan error yang jelas. Expected: POST dengan <code>nim</code> pendek (misal "123") menghasilkan response error 400.</Exercise>

      <h3 id="pengujian-api">8. Eksekusi & Pengujian REST API</h3>
      <CodeBlock language="bash">{`# Jalankan server development
pserve development.ini --reload`}</CodeBlock>
      <p>Server berjalan default di <code>http://localhost:6543</code>.</p>
      <CodeBlock language="bash">{`# Mendapatkan daftar mahasiswa
curl -X GET http://localhost:6543/api/mahasiswa

# Menambahkan mahasiswa baru
curl -X POST http://localhost:6543/api/mahasiswa \\
  -H "Content-Type: application/json" \\
  -d '{"nim":"67890","nama":"Ahmad Fadli","jurusan":"Teknik Elektro"}'

# Mengupdate data mahasiswa
curl -X PUT http://localhost:6543/api/mahasiswa/1 \\
  -H "Content-Type: application/json" \\
  -d '{"jurusan":"Informatika"}'

# Menghapus data mahasiswa
curl -X DELETE http://localhost:6543/api/mahasiswa/3`}</CodeBlock>

      <h2 id="tugas-praktikum">Tugas: Manajemen Matakuliah</h2>
      <p>Buat aplikasi API sederhana untuk manajemen matakuliah.</p>
      <p><strong>Persyaratan:</strong> Satu model <code>Matakuliah</code> dengan atribut: <code>id</code>, <code>kode_mk</code>, <code>nama_mk</code>, <code>sks</code>, <code>semester</code>. API endpoint untuk operasi dasar (GET, POST, PUT, DELETE). API berfungsi dan bisa diuji dengan curl/Postman.</p>
      <div style={{ overflowX:"auto", marginBottom:"1.25rem" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.875rem" }}>
          <thead><tr style={{ background:"var(--color-surface)", borderBottom:"2px solid var(--color-border)" }}>
            <th style={{ padding:"0.625rem 1rem", textAlign:"left", fontWeight:600 }}>Aspek</th>
            <th style={{ padding:"0.625rem 1rem", textAlign:"left", fontWeight:600 }}>Bobot</th>
          </tr></thead>
          <tbody>{[["Model Data","30%"],["API Endpoints","40%"],["Dokumentasi & Kerapian Kode","30%"]].map(([a,b],i)=>(
            <tr key={i} style={{ borderBottom:"1px solid var(--color-border-subtle)" }}>
              <td style={{ padding:"0.5rem 1rem", color:"var(--color-text-secondary)" }}>{a}</td>
              <td style={{ padding:"0.5rem 1rem", fontWeight:600, color:"var(--color-accent)" }}>{b}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>

      <h2 id="format-pengumpulan">Format Pengumpulan</h2>
      <ul>
        <li>Folder: <code>[NAMA]_[NIM]_pertemuan6</code>, sertakan README.md berisi instruksi instalasi dan cara menjalankan aplikasi</li>
        <li><strong>Deadline:</strong> 15 Mei 2025, 23:59 WIB</li>
      </ul>

      <SubmissionBox pertemuan={6} />
    </>
  );
}
