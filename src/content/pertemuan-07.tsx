import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 7: Basis Data + React Frontend
const Info = ({ text }: { text: string }) => (
  <div className="callout callout-info"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink:0,marginTop:"2px",color:"var(--color-accent)" }}><circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg><div className="callout-body"><p>{text}</p></div></div>
);
const Exercise = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="callout callout-warning"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink:0,marginTop:"2px",color:"var(--color-amber-500)" }}><path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg><div className="callout-body"><p><strong>Latihan Mandiri: {title}</strong><br />{children}</p></div></div>
);

export default function Pertemuan7() {
  return (
    <>
      <h2 id="dasar-teori">Arsitektur Backend & Database</h2>
      <p><strong>SQLAlchemy</strong> adalah toolkit SQL Python dan ORM yang memberi fleksibilitas penuh. <strong>Alembic</strong> adalah alat migrasi database untuk SQLAlchemy. <strong>Pyramid</strong> adalah kerangka kerja web Python untuk fleksibilitas dan skalabilitas.</p>
      <div style={{ overflowX:"auto", marginBottom:"1.25rem" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.875rem" }}>
          <thead><tr style={{ background:"var(--color-surface)", borderBottom:"2px solid var(--color-border)" }}>
            <th style={{ padding:"0.625rem 1rem", textAlign:"left", fontWeight:600 }}>Komponen</th>
            <th style={{ padding:"0.625rem 1rem", textAlign:"left", fontWeight:600 }}>Deskripsi</th>
          </tr></thead>
          <tbody>{[
            ["Models","Representasi data via SQLAlchemy ORM, mendefinisikan tabel & relasi"],
            ["Views","Endpoint API yang menangani request HTTP dan merespons data"],
            ["Schemas","Struktur validasi untuk integritas data masukan/keluaran"],
            ["Services","Lapisan logika bisnis yang menghubungkan views dengan models"],
            ["Migration","Perubahan skema database yang dikelola Alembic"],
          ].map(([k,v],i)=>(
            <tr key={i} style={{ borderBottom:"1px solid var(--color-border-subtle)" }}>
              <td style={{ padding:"0.5rem 1rem", fontWeight:500, color:"var(--color-navy-800)" }}>{k}</td>
              <td style={{ padding:"0.5rem 1rem", color:"var(--color-text-secondary)" }}>{v}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <Info text="Kita mengimplementasikan pola arsitektur MVC (Model-View-Controller) dengan sedikit modifikasi untuk RESTful API. Pemisahan concerns antara model data, validasi, logika bisnis, dan presentasi sangat penting untuk aplikasi yang mudah dipelihara." />

      <h2 id="paket-dibutuhkan">Paket & Dependensi Proyek</h2>
      <CodeBlock language="ini">{`# requirements.txt
# Web Framework
pyramid==2.0.1
pyramid-debugtoolbar==4.9
waitress==2.1.2

# Database
sqlalchemy==2.0.4
psycopg2-binary==2.9.5
alembic==1.9.4

# Schema Validation
marshmallow==3.19.0

# Utility
python-dotenv==1.0.0`}</CodeBlock>

      <h2 id="panduan-praktik">Langkah Praktikum</h2>

      <h3 id="persiapan-backend">1. Inisialisasi Backend & Dependency</h3>
      <CodeBlock language="bash">{`mkdir products-api && cd products-api
python -m venv venv
source venv/bin/activate   # macOS/Linux

pip install cookiecutter
cookiecutter gh:Pylons/pyramid-cookiecutter-starter
# project_name: ProductsAPI
# repo_name: products-api
# template_language: 1 - jinja2
# backend: 2 - sqlalchemy

cd products-api
pip install -e ".[testing]"
pip install python-dotenv marshmallow`}</CodeBlock>

      <h3 id="koneksi-database">2. Konfigurasi Database PostgreSQL</h3>
      <CodeBlock language="ini">{`# .env
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=products-api_db`}</CodeBlock>
      <CodeBlock language="sql">{`-- Membuat Database PostgreSQL
psql -U postgres
CREATE DATABASE "products-api_db";
\\q`}</CodeBlock>
      <CodeBlock language="bash">{`# Alternatif dengan Docker
docker run --name pg-products-api \\
  -e POSTGRES_PASSWORD=postgres \\
  -e POSTGRES_DB=products-api_db \\
  -p 5432:5432 -d postgres`}</CodeBlock>
      <Info text="Pemisahan konfigurasi database ke file .env adalah praktik yang baik untuk keamanan dan fleksibilitas lingkungan pengembangan. Jangan commit file .env ke repository!" />

      <h3 id="pemodelan-data">3. Pemodelan Entitas SQLAlchemy</h3>
      <CodeBlock language="python">{`# products-api/models/base.py
from datetime import datetime
from sqlalchemy import Column, DateTime, Integer
from .meta import Base

class BaseModel(Base):
    """Base model class untuk semua models."""
    __abstract__ = True
    id         = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {col.name: getattr(self, col.name) for col in self.__table__.columns}`}</CodeBlock>
      <CodeBlock language="python">{`# products-api/models/product.py
from sqlalchemy import Column, String, Float, Text, Boolean
from .base import BaseModel

class Product(BaseModel):
    """Model untuk produk."""
    __tablename__ = 'products'
    name        = Column(String(100), nullable=False, index=True)
    description = Column(Text, nullable=True)
    price       = Column(Float, nullable=False)
    sku         = Column(String(50), unique=True, nullable=False)
    is_active   = Column(Boolean, default=True)

    def __repr__(self):
        return f"<Product(name='{self.name}', sku='{self.sku}')>"`}</CodeBlock>
      <Exercise title="Tambah Kolom Category">Tambahkan kolom <code>category</code> (String, nullable) pada model <code>Product</code>, buat migrasi baru dengan Alembic. Expected: tabel <code>products</code> memiliki kolom <code>category</code> baru setelah migrasi dijalankan.</Exercise>

      <h3 id="migrasi-alembic">4. Migrasi Database dengan Alembic</h3>
      <CodeBlock language="bash">{`# Inisialisasi skema migrasi
alembic -c development.ini revision --autogenerate -m "Create product model"

# Terapkan migrasi
alembic -c development.ini upgrade head

# Verifikasi tabel
psql -U postgres -d products-api_db -c "\\dt"`}</CodeBlock>

      <h3 id="validasi-schema">5. Validasi Schema Marshmallow</h3>
      <CodeBlock language="python">{`# products-api/schemas/product.py
from marshmallow import Schema, fields, validate

class ProductSchema(Schema):
    """Schema untuk validasi data produk."""
    id          = fields.Integer(dump_only=True)
    name        = fields.String(required=True, validate=validate.Length(min=2, max=100))
    description = fields.String(validate=validate.Length(max=500))
    price       = fields.Float(required=True, validate=validate.Range(min=0.01))
    sku         = fields.String(required=True, validate=validate.Length(min=5, max=50))
    is_active   = fields.Boolean()
    created_at  = fields.DateTime(dump_only=True)
    updated_at  = fields.DateTime(dump_only=True)

class ProductUpdateSchema(Schema):
    """Schema untuk update produk (hanya field yang bisa diupdate)."""
    name        = fields.String(validate=validate.Length(min=2, max=100))
    description = fields.String(validate=validate.Length(max=500))
    price       = fields.Float(validate=validate.Range(min=0.01))
    is_active   = fields.Boolean()`}</CodeBlock>
      <Exercise title="Batas Harga Maksimal">Tambahkan validasi tambahan pada <code>ProductSchema</code>: field <code>price</code> maksimal 100.000.000, gunakan <code>validate.Range(min=0.01, max=100_000_000)</code>. Expected: mengirim <code>price: 999999999</code> melalui POST menghasilkan error validasi.</Exercise>

      <h3 id="service-layer">6. Implementasi Service Layer</h3>
      <CodeBlock language="python">{`# products-api/services/product.py
from typing import List, Optional
from ..models.product import Product

class ProductService:
    """Service untuk operasi produk: memisahkan logika bisnis dari views."""

    @staticmethod
    def get_all_products(dbsession) -> List[Product]:
        return dbsession.query(Product).filter(Product.is_active == True).all()

    @staticmethod
    def get_product_by_id(dbsession, product_id: int) -> Optional[Product]:
        return dbsession.query(Product).get(product_id)

    @staticmethod
    def get_product_by_sku(dbsession, sku: str) -> Optional[Product]:
        return dbsession.query(Product).filter(Product.sku == sku).first()

    @staticmethod
    def create_product(dbsession, product_data: dict) -> Product:
        product = Product(**product_data)
        dbsession.add(product)
        dbsession.flush()
        return product

    @staticmethod
    def update_product(dbsession, product: Product, update_data: dict) -> Product:
        for field, value in update_data.items():
            setattr(product, field, value)
        dbsession.flush()
        return product

    @staticmethod
    def delete_product(dbsession, product: Product) -> None:
        """Soft delete: hanya set is_active = False, data tidak hilang."""
        product.is_active = False
        dbsession.flush()`}</CodeBlock>
      <Info text="Pemisahan Logika Bisnis: views lebih sederhana & fokus pada HTTP; logika bisnis di-reuse dari berbagai endpoint; lebih mudah di-test terpisah; perubahan logika bisnis tidak mempengaruhi struktur API." />
      <Exercise title="Pencarian Produk">Tambahkan method <code>search_by_name(dbsession, keyword)</code> pada <code>ProductService</code> yang mencari produk berdasarkan kecocokan sebagian nama. Hint: <code>.filter(Product.name.ilike(f"%{"{keyword}"}%"))</code>. Expected: <code>ProductService.search_by_name(dbsession, "lap")</code> mengembalikan produk "Laptop Premium".</Exercise>

      <h3 id="endpoint-produk">7. Pembuatan API Endpoints</h3>
      <CodeBlock language="python">{`# products-api/routes.py
def includeme(config):
    config.add_route('home',              '/')
    config.add_route('api_v1.products',   '/api/v1/products')
    config.add_route('api_v1.product',    '/api/v1/products/{id}')`}</CodeBlock>
      <CodeBlock language="python">{`# products-api/views/product.py
from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest, HTTPNoContent
from marshmallow import ValidationError
from ..services.product import ProductService
from ..schemas.product import ProductSchema, ProductUpdateSchema

@view_config(route_name='api_v1.products', request_method='GET', renderer='json')
def get_products(request):
    products = ProductService.get_all_products(request.dbsession)
    return ProductSchema(many=True).dump(products)

@view_config(route_name='api_v1.products', request_method='POST', renderer='json')
def create_product(request):
    try:
        product_data = ProductSchema().load(request.json_body)
    except ValidationError as err:
        raise HTTPBadRequest(json={'errors': err.messages})

    if ProductService.get_product_by_sku(request.dbsession, product_data['sku']):
        raise HTTPBadRequest(json={'errors': {'sku': ['SKU sudah ada']}})

    product = ProductService.create_product(request.dbsession, product_data)
    return ProductSchema().dump(product)

@view_config(route_name='api_v1.product', request_method='GET', renderer='json')
def get_product(request):
    product = ProductService.get_product_by_id(request.dbsession, int(request.matchdict['id']))
    if not product or not product.is_active:
        raise HTTPNotFound()
    return ProductSchema().dump(product)

@view_config(route_name='api_v1.product', request_method='PUT', renderer='json')
def update_product(request):
    product = ProductService.get_product_by_id(request.dbsession, int(request.matchdict['id']))
    if not product or not product.is_active:
        raise HTTPNotFound()
    try:
        update_data = ProductUpdateSchema().load(request.json_body)
    except ValidationError as err:
        raise HTTPBadRequest(json={'errors': err.messages})
    return ProductSchema().dump(
        ProductService.update_product(request.dbsession, product, update_data)
    )

@view_config(route_name='api_v1.product', request_method='DELETE')
def delete_product(request):
    product = ProductService.get_product_by_id(request.dbsession, int(request.matchdict['id']))
    if not product or not product.is_active:
        raise HTTPNotFound()
    ProductService.delete_product(request.dbsession, product)
    return HTTPNoContent()`}</CodeBlock>
      <Exercise title="Endpoint Pencarian">Tambahkan route dan view baru <code>GET /api/v1/products/search?q=keyword</code> yang memanfaatkan method <code>search_by_name</code> dari service layer. Expected: <code>curl "http://localhost:6543/api/v1/products/search?q=laptop"</code> mengembalikan produk yang namanya mengandung "laptop".</Exercise>

      <h3 id="pengujian-api">8. Pengujian & Validasi API</h3>
      <CodeBlock language="bash">{`pserve development.ini`}</CodeBlock>
      <CodeBlock language="bash">{`# Mendapatkan semua produk
curl -X GET http://localhost:6543/api/v1/products

# Membuat produk baru
curl -X POST http://localhost:6543/api/v1/products \\
  -H "Content-Type: application/json" \\
  -d '{"name":"New Product","description":"A great product","price":99.99,"sku":"NP1234"}'

# Update produk
curl -X PUT http://localhost:6543/api/v1/products/1 \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Updated Name","price":109.99}'

# Hapus produk (soft delete)
curl -X DELETE http://localhost:6543/api/v1/products/1`}</CodeBlock>

      <h2 id="frontend-react">Bonus: Integrasi Frontend React</h2>

      <h3>Setup React App</h3>
      <CodeBlock language="bash">{`npx create-react-app products-frontend
cd products-frontend
npm install react-router-dom axios
npm start`}</CodeBlock>

      <h3>API Service</h3>
      <CodeBlock language="javascript">{`// src/api/productApi.js
const API_BASE_URL = 'http://localhost:6543/api/v1';

export const productApi = {
  async getAll() {
    const response = await fetch(\`\${API_BASE_URL}/products\`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  async getById(id) {
    const response = await fetch(\`\${API_BASE_URL}/products/\${id}\`);
    if (!response.ok) throw new Error(\`Failed to fetch product \${id}\`);
    return response.json();
  },

  async create(product) {
    const response = await fetch(\`\${API_BASE_URL}/products\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(JSON.stringify(err.errors));
    }
    return response.json();
  },

  async update(id, data) {
    const response = await fetch(\`\${API_BASE_URL}/products/\${id}\`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update');
    return response.json();
  },

  async delete(id) {
    const response = await fetch(\`\${API_BASE_URL}/products/\${id}\`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete');
  },
};`}</CodeBlock>

      <h3>Halaman Daftar Produk</h3>
      <CodeBlock language="jsx">{`// src/pages/ProductListPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productApi } from '../api/productApi';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    productApi.getAll()
      .then(data => { setProducts(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Hapus produk ini?')) return;
    try {
      await productApi.delete(id);
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error)   return <div style={{color:'red'}}>{error}</div>;

  return (
    <div>
      <h1>Daftar Produk</h1>
      <Link to="/products/new">Tambah Produk Baru</Link>
      <table>
        <thead>
          <tr>
            <th>Nama</th><th>SKU</th><th>Harga</th><th>Status</th><th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>Rp{p.price.toLocaleString()}</td>
              <td>{p.is_active ? 'Aktif' : 'Nonaktif'}</td>
              <td>
                <Link to={\`/products/\${p.id}/edit\`}>Edit</Link>
                <button onClick={() => handleDelete(p.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListPage;`}</CodeBlock>
      <Exercise title="Search Box di Frontend">Tambahkan input pencarian sederhana di <code>ProductListPage.jsx</code> yang memfilter state <code>products</code> secara client-side berdasarkan nama produk (cukup filter array di React dengan <code>.filter()</code>, tidak perlu memanggil endpoint search backend). Expected: mengetik di input pencarian langsung menyaring daftar produk tanpa reload halaman.</Exercise>

      <h2 id="hasil-praktikum">Hasil Praktikum</h2>
      <p>Mahasiswa seharusnya memahami konsep dasar SQLAlchemy ORM, Alembic migrations, Pyramid RESTful API, service layer pattern, schema validation dengan Marshmallow, dan dasar-dasar integrasi frontend React dengan backend Pyramid.</p>

      <h2 id="format-pengumpulan">Format Pengumpulan</h2>
      <ul>
        <li>Folder: <code>[NAMA]_[NIM]_pertemuan7</code></li>
        <li>Sertakan README.md berisi instruksi setup, konfigurasi database, cara menjalankan server, dan cara menjalankan frontend (jika mengerjakan bonus).</li>
      </ul>

      <SubmissionBox pertemuan={7} />
    </>
  );
}
