import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

export default function Pertemuan3({ subId }: { subId?: string }) {
  const calloutInfo = (text: React.ReactNode) => (
    <div className="callout callout-info">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div className="callout-body">{typeof text === "string" ? <p>{text}</p> : text}</div>
    </div>
  );

  const calloutExercise = (title: string, text: React.ReactNode) => (
    <div className="callout callout-warning">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
        <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div className="callout-body">
        <p><strong>Latihan Mandiri: {title}</strong></p>
        {typeof text === "string" ? <p>{text}</p> : text}
      </div>
    </div>
  );

  const codeHint = (text: React.ReactNode) => (
    <div className="callout callout-info" style={{ marginTop: "0.5rem", marginBottom: "1.25rem" }}>
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
        <path d="M10 2a6 6 0 00-6 6c0 2.2 1.2 4.1 3 5.1V15a1 1 0 001 1h4a1 1 0 001-1v-1.9c1.8-1 3-2.9 3-5.1a6 6 0 00-6-6z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="callout-body">
        <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "var(--color-accent)" }}>Penjelasan Kode:</p>
        <div style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          {text}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {(!subId || subId === "dasar-teori") && (
        <section id="dasar-teori">
          <h2>Konsep Dasar React</h2>
          <p>
            React adalah library JavaScript yang dikembangkan oleh Facebook (Meta) untuk membangun antarmuka pengguna (UI) yang interaktif dan efisien.
            Berbeda dengan framework monolitik, React berfokus pada satu hal: membangun UI dengan pendekatan <em>component-based</em>.
          </p>

          <h3>Konsep Kunci React</h3>
          <div className="table-wrapper" style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem" }}>Konsep</th>
                  <th style={{ padding: "0.75rem" }}>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Component-Based</td>
                  <td style={{ padding: "0.75rem" }}>Memecah UI menjadi komponen independen dan dapat digunakan kembali (reusable).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Declarative</td>
                  <td style={{ padding: "0.75rem" }}>Menentukan bentuk UI berdasarkan state saat ini; React otomatis mengurus pembaruan DOM.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Virtual DOM</td>
                  <td style={{ padding: "0.75rem" }}>Representasi DOM ringan di memori untuk menghitung perubahan minimal sebelum menyentuh browser DOM.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Unidirectional Data Flow</td>
                  <td style={{ padding: "0.75rem" }}>Data mengalir satu arah dari parent ke child via props, mempermudah pelacakan alur data dan debugging.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>JSX</td>
                  <td style={{ padding: "0.75rem" }}>Ekstensi sintaksis mirip HTML di dalam JavaScript untuk mendeskripsikan tampilan antarmuka.</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Hooks</td>
                  <td style={{ padding: "0.75rem" }}>Fungsi khusus yang memungkinkan functional components menggunakan state dan fitur lifecycle React.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {calloutInfo(
            "React vs Framework Lain: React hanya menangani layer view dalam arsitektur aplikasi. Berbeda dengan framework monolitik seperti Angular, React memberikan fleksibilitas penuh untuk memilih pustaka perutean (React Router), state management global (Context API, Zustand, Redux), dan pengujian."
          )}

          <h3 id="alat-bahan">Alat dan Bahan</h3>
          <p>Kebutuhan perangkat untuk menjalankan praktikum:</p>
          <ul>
            <li><strong>Node.js dan npm</strong>: Versi LTS (v18.x atau v20.x ke atas) untuk runtime dan manajemen dependensi.</li>
            <li><strong>Code Editor</strong>: Visual Studio Code dengan ekstensi penunjang.</li>
            <li><strong>Browser Modern</strong>: Google Chrome atau Mozilla Firefox dengan ekstensi React Developer Tools.</li>
            <li><strong>Git</strong>: Untuk kontrol versi dan repositori tugas praktikum.</li>
          </ul>

          {calloutInfo(
            <div>
              <p><strong>Rekomendasi Ekstensi VS Code:</strong></p>
              <ul style={{ margin: "0.5rem 0 0 1.25rem" }}>
                <li><strong>ES7+ React/Redux/React-Native snippets</strong> - Snippet kode cepat untuk deklarasi komponen dan hooks.</li>
                <li><strong>ESLint</strong> - Memeriksa kepatuhan aturan sintaks dan potensi bug JavaScript.</li>
                <li><strong>Prettier - Code formatter</strong> - Merapikan format kode secara otomatis saat menyimpan file.</li>
                <li><strong>Auto Import</strong> - Mengimpor komponen dan dependensi otomatis saat diketik.</li>
                <li><strong>Live Server</strong> - Menjalankan file HTML statis secara instan langsung dari VS Code.</li>
              </ul>
            </div>
          )}

          <h3>Praktik Instan di VS Code (Metode HTML + CDN)</h3>
          <p>
            Bagi Anda yang ingin menguji konsep React dan JSX secara langsung di VS Code tanpa harus menunggu proses instalasi paket npm,
            Anda dapat membuat satu file <code>index.html</code> mandiri dan membukanya via ekstensi <strong>Live Server</strong> di VS Code:
          </p>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Uji Coba React Instan</title>
  <!-- React 18 & Babel Standalone via CDN -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body { font-family: sans-serif; background: #f8fafc; margin: 0; padding: 2rem; color: #1e293b; }
    .card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); max-width: 500px; margin: 0 auto; }
    button { background: #0284c7; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
    button:hover { background: #0369a1; }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    function CounterApp() {
      const [count, setCount] = React.useState(0);
      return (
        <div className="card">
          <h2>React Berjalan di VS Code!</h2>
          <p>Klik tombol di bawah untuk menguji reaktivitas:</p>
          <p>Jumlah klik: <strong>{count}</strong></p>
          <button onClick={() => setCount(count + 1)}>Tambah Nilai (+1)</button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<CounterApp />);
  </script>
</body>
</html>`}</CodeBlock>
          {codeHint("Babel Standalone membaca tag <script type=\"text/babel\"> dan mentranspilasi JSX langsung di browser tanpa build step tambahan.")}
        </section>
      )}

      {(!subId || subId === "setup-react") && (
        <section id="setup-react">
          <h2>1. Setup Project React</h2>
          <p>Sebelum memulai, pastikan versi Node.js dan npm di terminal komputer Anda telah terpasang dengan benar:</p>
          <CodeBlock language="bash">{`node --version
npm --version`}</CodeBlock>
          {calloutInfo("Gunakan Node.js versi LTS (Long Term Support). Disarankan v18.x atau v20.x ke atas.")}

          <h3>Membuat Project React</h3>
          <p>
            Terdapat dua opsi populer untuk membuat workspace aplikasi React di VS Code:
          </p>

          <p><strong>Opsi A: Create React App (Standar Modul)</strong></p>
          <CodeBlock language="bash">{`# Membuat project React baru
npx create-react-app my-react-app

# Masuk ke direktori project
cd my-react-app

# Menjalankan development server
npm start`}</CodeBlock>
          <p>Setelah perintah <code>npm start</code> dijalankan, browser akan otomatis membuka <code>http://localhost:3000</code>.</p>

          <p><strong>Opsi B: Vite (Alternatif Modern Tercepat di VS Code)</strong></p>
          <CodeBlock language="bash">{`# Membuat project React dengan Vite
npm create vite@latest my-react-app -- --template react

# Masuk dan install dependensi
cd my-react-app
npm install

# Jalankan server lokal
npm run dev`}</CodeBlock>
          {calloutInfo("npx adalah package runner bawaan npm 5.2+. Dengan npx, perintah create-react-app dieksekusi tanpa perlu di-install secara global pada sistem.")}

          <h3>Memahami Struktur Project</h3>
          <p>Struktur folder umum pada project React:</p>
          <CodeBlock language="bash">{`my-react-app/
├── node_modules/       # Dependensi paket yang terpasang
├── public/
│   ├── favicon.ico
│   ├── index.html      # Titik mount HTML utama (#root)
│   └── manifest.json
├── src/
│   ├── App.css
│   ├── App.jsx         # Komponen induk utama
│   ├── App.test.jsx
│   ├── index.css       # Style global
│   └── index.jsx       # Entry point JavaScript
├── package.json        # Manifest dependensi & scripts
└── .gitignore`}</CodeBlock>

          <h3>Membuat Struktur Folder Modular</h3>
          <p>Untuk menjaga kebersihan arsitektur, buat folder modular di dalam <code>src/</code>:</p>
          <CodeBlock language="bash">{`cd src
mkdir components pages hooks context
mkdir components/Header components/TaskItem components/TaskForm components/Navbar
mkdir pages/Home pages/About pages/NotFound`}</CodeBlock>

          <p>Prinsip pengelompokan folder:</p>
          <ul>
            <li><code>components/</code>: Komponen UI modular yang dapat digunakan kembali (Header, TaskItem, TaskForm, Navbar).</li>
            <li><code>pages/</code>: Komponen tampilan yang mewakili halaman atau view (Home, About, NotFound).</li>
            <li><code>hooks/</code>: Custom hooks untuk abstraksi logika stateful.</li>
            <li><code>context/</code>: Context Provider untuk state management global.</li>
          </ul>

          <h3>Membersihkan File Default</h3>
          <p>Ganti isi <code>src/App.jsx</code> dengan struktur dasar yang bersih:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Task Manager</h1>
        <p>Selamat datang di aplikasi Task Manager!</p>
      </header>
    </div>
  );
}

export default App;`}</CodeBlock>

          <p>Sesuaikan <code>src/App.css</code>:</p>
          <CodeBlock language="css">{`* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f7f9;
}

.App {
  min-height: 100vh;
}

.App-header {
  background-color: #3498db;
  color: white;
  padding: 2rem;
  text-align: center;
}

.App-header h1 {
  margin-bottom: 0.5rem;
}`}</CodeBlock>

          <h3>Perintah Scripts npm</h3>
          <CodeBlock language="bash">{`# Menjalankan development server
npm start

# Membuat bundle teroptimasi untuk production
npm run build

# Menjalankan test suite
npm test`}</CodeBlock>
          {calloutInfo("Catatan: Jangan menjalankan npm run eject kecuali Anda membutuhkan konfigurasi manual Webpack dan Babel tingkat lanjut. Operasi eject bersifat searah dan tidak dapat dibatalkan.")}

          <h3>Instalasi Dependensi Tambahan Praktikum</h3>
          <p>Jalankan perintah ini di terminal VS Code untuk memasang React Router dan PropTypes yang akan digunakan:</p>
          <CodeBlock language="bash">{`npm install react-router-dom prop-types`}</CodeBlock>

          <h3>Troubleshooting di VS Code</h3>
          <ul>
            <li>
              <strong>Port 3000 sudah digunakan:</strong> Tambahkan variabel port saat menjalankan perintah (misal di macOS/Linux: <code>PORT=3001 npm start</code> atau di Windows: <code>set PORT=3001 && npm start</code>).
            </li>
            <li>
              <strong>Error dependensi / modul korup:</strong> Hapus folder <code>node_modules</code> dan file <code>package-lock.json</code>, lalu jalankan kembali <code>npm install</code>.
            </li>
            <li>
              <strong>Module not found:</strong> Periksa ketepatan path import relatif dan perhatikan huruf kapital (case-sensitive) pada nama file.
            </li>
          </ul>

          {calloutExercise(
            "Ubah Warna Tema",
            "Buka file src/App.css di VS Code, lalu ubah nilai background-color pada .App-header menjadi kode warna lain (contoh: #0f766e). Simpan file dan amati browser melakukan hot reload seketika tanpa refresh manual."
          )}
        </section>
      )}

      {(!subId || subId === "komponen-pertama") && (
        <section id="komponen-pertama">
          <h2>2. Components &amp; Props</h2>
          <p>
            Komponen adalah blok pembangun antarmuka di React. Komponen memisahkan UI menjadi elemen independen, terisolasi, dan dapat dipakai berulang kali.
            Pada standar modern, kita menggunakan <strong>Functional Components</strong> yang diperkaya dengan Hooks.
          </p>

          <h3>Membuat Komponen Header</h3>
          <p>Buat file <code>src/components/Header/Header.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import './Header.css';

function Header({ title, description }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}

export default Header;`}</CodeBlock>

          <p>Tambahkan styling pada <code>src/components/Header/Header.css</code>:</p>
          <CodeBlock language="css">{`.header {
  background-color: #3498db;
  color: white;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.header h1 {
  margin: 0;
  font-size: 1.8rem;
}

.header p {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  opacity: 0.9;
}`}</CodeBlock>

          <p>Gunakan komponen <code>Header</code> di dalam <code>src/App.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title="React Task Manager"
        description="Kelola tugas Anda dengan mudah"
      />
    </div>
  );
}

export default App;`}</CodeBlock>

          <h3>Jenis-Jenis Nilai Props</h3>
          <p>Props bersifat <em>read-only</em> dan dapat membawa berbagai jenis tipe data dari parent component:</p>

          <p><strong>1. String Props:</strong></p>
          <CodeBlock language="jsx">{`<Header title="Task Manager" description="Aplikasi Catatan Harian" />`}</CodeBlock>

          <p><strong>2. Number Props:</strong></p>
          <CodeBlock language="jsx">{`<Counter initialCount={0} step={1} />

function Counter({ initialCount, step }) {
  return <div>Mulai dari: {initialCount} (Kelipatan: {step})</div>;
}`}</CodeBlock>

          <p><strong>3. Boolean Props:</strong></p>
          <CodeBlock language="jsx">{`<Button disabled={true} loading={false} />

function Button({ disabled, loading }) {
  return (
    <button disabled={disabled}>
      {loading ? 'Memuat...' : 'Kirim'}
    </button>
  );
}`}</CodeBlock>

          <p><strong>4. Function / Callback Props:</strong></p>
          <CodeBlock language="jsx">{`<Button onClick={() => alert('Tombol ditekan!')} />

function Button({ onClick }) {
  return <button onClick={onClick}>Klik Saya</button>;
}`}</CodeBlock>

          <p><strong>5. Object Props:</strong></p>
          <CodeBlock language="jsx">{`<UserCard user={{ name: 'Ahmad', role: 'Praktikan' }} />

function UserCard({ user }) {
  return <div>{user.name} - {user.role}</div>;
}`}</CodeBlock>

          <h3>Komponen TaskItem</h3>
          <p>Komponen untuk merender satu baris tugas, checkbox penanda selesai, dan tombol hapus.</p>
          <p>Buat <code>src/components/TaskItem/TaskItem.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <div className={\`task-item \${task.completed ? 'completed' : ''}\`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className="task-title">{task.title}</span>
      </div>
      <div className="task-actions">
        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;`}</CodeBlock>

          <p>File styling <code>src/components/TaskItem/TaskItem.css</code>:</p>
          <CodeBlock language="css">{`.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.task-item.completed {
  background-color: #e9ecef;
  opacity: 0.7;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.task-title {
  font-size: 1rem;
}

.completed .task-title {
  text-decoration: line-through;
  color: #6c757d;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.delete-btn:hover {
  background-color: #c82333;
}`}</CodeBlock>

          <h3>Komponen TaskForm</h3>
          <p>Komponen input form terkontrol (controlled input) untuk menambahkan entri tugas baru.</p>
          <p>Buat <code>src/components/TaskForm/TaskForm.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };

    onAddTask(newTask);
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tambahkan tugas baru..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TaskForm;`}</CodeBlock>

          <p>File styling <code>src/components/TaskForm/TaskForm.css</code>:</p>
          <CodeBlock language="css">{`.task-form {
  display: flex;
  margin-bottom: 1.5rem;
}

.task-form input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.task-form button {
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.task-form button:hover {
  background-color: #218838;
}`}</CodeBlock>

          <h3>Destructuring &amp; Default Props</h3>
          <p>Props dapat di-destructure langsung di parameter fungsi atau di dalam body fungsi:</p>
          <CodeBlock language="jsx">{`// Destructuring parameter dengan default props
function Header({ title = "Task Manager", description }) {
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}`}</CodeBlock>
          {codeHint("Ekspresi {description && <p>{description}</p>} memanfaatkan short-circuit evaluation JavaScript. Elemen paragraf hanya akan dirender jika props description bernilai truthy.")}

          <h3>Children Props</h3>
          <p>Props khusus <code>children</code> menampung elemen yang disisipkan di antara tag pembuka dan penutup komponen:</p>
          <CodeBlock language="jsx">{`function Card({ children }) {
  return (
    <div style={{ padding: '1rem', background: '#fff', borderRadius: '6px', border: '1px solid #ddd' }}>
      {children}
    </div>
  );
}

// Cara penggunaan:
<Card>
  <h2>Judul Kartu</h2>
  <p>Isi konten yang otomatis diteruskan via props.children.</p>
</Card>`}</CodeBlock>

          <h3>Type Checking dengan PropTypes</h3>
          <p>PropTypes memvalidasi kecocokan tipe data props saat proses development:</p>
          <CodeBlock language="jsx">{`import PropTypes from 'prop-types';

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired
};`}</CodeBlock>

          {calloutExercise(
            "Komponen Footer Mandiri",
            "Buat komponen baru src/components/Footer/Footer.jsx dan Footer.css yang menerima props author. Tampilkan teks copyright dinamis: \"© [tahun berjalan] Task Manager - Dibuat oleh [author]\". Gunakan komponen tersebut di file App.jsx."
          )}
        </section>
      )}

      {(!subId || subId === "state-hooks") && (
        <section id="state-hooks">
          <h2>3. State Management &amp; Hooks</h2>
          <p>
            <strong>State</strong> adalah data internal yang dikelola di dalam komponen dan dapat berubah seiring waktu atau interaksi pengguna.
            Ketika state diperbarui melalui setter function, React secara otomatis memicu re-render pada komponen terkait.
          </p>

          <h3>Sintaks Dasar useState</h3>
          <CodeBlock language="jsx">{`const [state, setState] = useState(initialValue);`}</CodeBlock>

          <h3>Contoh State Berdasarkan Tipe Data</h3>
          <p><strong>1. String State (Input Form):</strong></p>
          <CodeBlock language="jsx">{`import React, { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Masukkan nama"
    />
  );
}`}</CodeBlock>

          <p><strong>2. Number State (Counter):</strong></p>
          <CodeBlock language="jsx">{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}`}</CodeBlock>

          <p><strong>3. Boolean State (Toggle Saklar):</strong></p>
          <CodeBlock language="jsx">{`import React, { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}`}</CodeBlock>

          <p><strong>4. Array State (Daftar Item):</strong></p>
          <CodeBlock language="jsx">{`import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}`}</CodeBlock>

          <p><strong>5. Object State:</strong></p>
          <CodeBlock language="jsx">{`import React, { useState } from 'react';

function UserForm() {
  const [user, setUser] = useState({ name: '', email: '', age: 0 });

  const updateField = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <div>
      <input value={user.name} onChange={(e) => updateField('name', e.target.value)} />
      <input value={user.email} onChange={(e) => updateField('email', e.target.value)} />
    </div>
  );
}`}</CodeBlock>

          <h3>Membuat Halaman Home dengan State</h3>
          <p>Buat file <code>src/pages/Home/Home.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header
        title="React Task Manager"
        description="Kelola tugas Anda dengan mudah"
      />

      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>

        <TaskForm onAddTask={handleAddTask} />

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;`}</CodeBlock>

          <p>File styling <code>src/pages/Home/Home.css</code>:</p>
          <CodeBlock language="css">{`.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.stats {
  display: flex;
  justify-content: space-between;
  background-color: #f1f8ff;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.task-list {
  margin-top: 1rem;
}

.empty-message {
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  color: #6c757d;
}`}</CodeBlock>

          {codeHint("Prinsip Immutability: Jangan pernah mengubah array state secara langsung menggunakan tasks.push(). Selalu buat referensi array baru dengan spread operator [...tasks, newTask] agar React dapat mendeteksi perubahan state dan memicu re-render.")}

          <h3>useEffect Hook &amp; Variasi Pola</h3>
          <p>
            <code>useEffect</code> digunakan untuk mengeksekusi efek samping (side effects) seperti manipulasi DOM, timer interval, fetch data, atau sinkronisasi penyimpanan lokal.
          </p>
          <CodeBlock language="jsx">{`// 1. Dijalankan hanya sekali saat komponen mount
useEffect(() => {
  console.log('Komponen terpasang (mount)');
}, []);

// 2. Dijalankan setiap kali state 'count' berubah
useEffect(() => {
  document.title = \`Jumlah klik: \${count}\`;
}, [count]);

// 3. Dijalankan dengan fungsi cleanup saat unmount
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Detik berjalan');
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);`}</CodeBlock>

          <h3>Persistensi Data dengan localStorage</h3>
          <p>Tambahkan integrasi localStorage pada <code>Home.jsx</code>:</p>
          <CodeBlock language="jsx">{`// Muat data dari localStorage saat mount
useEffect(() => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);

// Simpan data ke localStorage setiap kali tasks berubah
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);`}</CodeBlock>

          <h3>Aturan Penggunaan Hooks (Rules of Hooks)</h3>
          <ul>
            <li>Hanya panggil Hooks di tingkat atas (top level) fungsi komponen atau custom hooks.</li>
            <li>Jangan panggil Hooks di dalam loop perulangan, percabangan kondisional (if/else), atau nested function.</li>
          </ul>

          <p>Perbarui <code>src/App.jsx</code> untuk menampilkan halaman <code>Home</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;`}</CodeBlock>

          {calloutExercise(
            "Filter Status Tugas",
            "Tambahkan tombol filter di Home.jsx: \"Semua\", \"Aktif\", dan \"Selesai\". Buat state baru const [filter, setFilter] = useState('all') dan render daftar tugas yang sesuai dengan filter yang aktif."
          )}
        </section>
      )}

      {(!subId || subId === "react-routing") && (
        <section id="react-routing">
          <h2>4. Routing dengan React Router</h2>
          <p>
            Dalam arsitektur <em>Single Page Application</em> (SPA), aplikasi hanya memuat satu dokumen HTML.
            Perpindahan tampilan antar alamat URL dilakukan secara dinamis oleh JavaScript di sisi klien tanpa perlu me-reload seluruh halaman browser.
          </p>

          <p>Pastikan paket <code>react-router-dom</code> telah terpasang:</p>
          <CodeBlock language="bash">{`npm install react-router-dom`}</CodeBlock>

          <h3>Membuat Halaman About</h3>
          <p>Buat file <code>src/pages/About/About.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import Header from '../../components/Header/Header';
import './About.css';

function About() {
  return (
    <div className="about">
      <Header
        title="About Task Manager"
        description="Learn more about our app"
      />

      <main className="container">
        <div className="about-content">
          <h2>Welcome to Task Manager</h2>
          <p>
            Task Manager adalah aplikasi sederhana yang dibuat dengan React
            untuk membantu Anda mengelola tugas sehari-hari dengan mudah dan efisien.
          </p>

          <h3>Fitur:</h3>
          <ul>
            <li>Tambah, hapus, dan tandai tugas sebagai selesai</li>
            <li>Penyimpanan lokal di browser Anda</li>
            <li>Antarmuka pengguna yang responsif dan intuitif</li>
            <li>Statistik tugas real-time</li>
          </ul>

          <h3>Teknologi:</h3>
          <p>
            Aplikasi ini dibangun menggunakan React dengan functional components
            dan Hooks. Kami juga menggunakan localStorage untuk menyimpan data Anda secara lokal.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;`}</CodeBlock>

          <p>File styling <code>src/pages/About/About.css</code>:</p>
          <CodeBlock language="css">{`.about-content {
  background-color: white;
  border-radius: 8px;
  margin-top: 2rem;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.about-content h2 {
  color: #3498db;
  margin-top: 0;
}

.about-content h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.about-content ul {
  padding-left: 1.5rem;
}

.about-content li {
  margin-bottom: 0.5rem;
}`}</CodeBlock>

          <h3>Membuat Komponen Navbar</h3>
          <p>Buat file <code>src/components/Navbar/Navbar.jsx</code> menggunakan komponen <code>Link</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">Task Manager</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;`}</CodeBlock>

          <p>File styling <code>src/components/Navbar/Navbar.css</code>:</p>
          <CodeBlock language="css">{`.navbar {
  background-color: #2c3e50;
  padding: 1rem 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo a {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
}

.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #3498db;
}`}</CodeBlock>

          <h3>Konfigurasi Routing di App.jsx</h3>
          <p>Bungkus aplikasi dengan <code>BrowserRouter</code>, <code>Routes</code>, dan <code>Route</code> di <code>src/App.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;`}</CodeBlock>

          <h3>Fitur Utama React Router</h3>
          <p><strong>1. NavLink dengan Indikator Halaman Aktif:</strong></p>
          <CodeBlock language="jsx">{`import { NavLink } from 'react-router-dom';

<NavLink
  to="/about"
  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
>
  About
</NavLink>`}</CodeBlock>

          <p><strong>2. Parameter Dinamis (URL Params):</strong></p>
          <CodeBlock language="jsx">{`// Definisi route
<Route path="/tasks/:id" element={<TaskDetail />} />

// Di dalam komponen TaskDetail
import { useParams } from 'react-router-dom';

function TaskDetail() {
  const { id } = useParams();
  return <h2>Detail Tugas ID: {id}</h2>;
}`}</CodeBlock>

          <p><strong>3. Navigasi Programatik (useNavigate):</strong></p>
          <CodeBlock language="jsx">{`import { useNavigate } from 'react-router-dom';

function FormSubmit() {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/about');
  };

  return <button onClick={handleSave}>Simpan & Pindah Halaman</button>;
}`}</CodeBlock>

          <p><strong>4. Halaman 404 (Not Found):</strong></p>
          <CodeBlock language="jsx">{`// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Alamat halaman yang Anda tuju tidak tersedia.</p>
      <Link to="/">Kembali ke Beranda</Link>
    </div>
  );
}

export default NotFound;

// Pasang rute wildcard di App.jsx
<Route path="*" element={<NotFound />} />`}</CodeBlock>

          {calloutExercise(
            "Rute Halaman Kontak",
            "Buat halaman baru src/pages/Contact/Contact.jsx yang berisi form kirim pesan sederhana. Daftarkan rute /contact di App.jsx dan tambahkan tombol link-nya di Navbar."
          )}
        </section>
      )}

      {(!subId || subId === "custom-hook") && (
        <section id="custom-hook">
          <h2>5. Pembuatan Custom Hook</h2>
          <p>
            <strong>Custom Hook</strong> adalah fungsi JavaScript yang namanya diawali dengan kata <code>use</code> dan dapat memanggil Hooks bawaan lainnya.
            Tujuan utamanya adalah mengekstrak logika stateful yang kompleks ke dalam modul mandiri sehingga tidak terjadi duplikasi kode antarkomponen.
          </p>

          <h3>Custom Hook: useLocalStorage</h3>
          <p>Buat file <code>src/hooks/useLocalStorage.js</code>:</p>
          <CodeBlock language="javascript">{`import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;`}</CodeBlock>

          <p>Gunakan <code>useLocalStorage</code> untuk menyederhanakan <code>src/pages/Home/Home.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header
        title="React Task Manager"
        description="Kelola tugas Anda dengan mudah"
      />
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        <TaskForm onAddTask={handleAddTask} />
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;`}</CodeBlock>

          <h3>Contoh Custom Hook Lainnya</h3>

          <p><strong>1. useToggle (Boolean Toggle):</strong></p>
          <CodeBlock language="javascript">{`// src/hooks/useToggle.js
import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(prev => !prev);
  return [value, toggle];
}

export default useToggle;`}</CodeBlock>

          <p><strong>2. useFetch (Data Fetching REST API):</strong></p>
          <CodeBlock language="javascript">{`// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;`}</CodeBlock>

          <p><strong>3. useDebounce (Optimalisasi Input Pencarian):</strong></p>
          <CodeBlock language="javascript">{`// src/hooks/useDebounce.js
import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;`}</CodeBlock>

          <p><strong>4. useWindowSize (Ukuran Layar Reaktif):</strong></p>
          <CodeBlock language="javascript">{`// src/hooks/useWindowSize.js
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;`}</CodeBlock>

          <p><strong>5. Composing Hooks (useTaskStats):</strong></p>
          <CodeBlock language="javascript">{`// src/hooks/useTaskStats.js
import { useMemo } from 'react';

function useTaskStats(tasks) {
  return useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;
    const completionRate = total > 0 ? (completed / total) * 100 : 0;
    return { total, completed, remaining, completionRate };
  }, [tasks]);
}

export default useTaskStats;`}</CodeBlock>

          {calloutExercise(
            "Custom Hook useDocumentTitle",
            "Buat custom hook src/hooks/useDocumentTitle.js yang menerima string judul dan memperbarui document.title browser secara otomatis. Terapkan hook tersebut pada komponen Home dan About."
          )}
        </section>
      )}

      {(!subId || subId === "context-api") && (
        <section id="context-api">
          <h2>6. Global State dengan Context API</h2>
          <p>
            <strong>Context API</strong> adalah fitur bawaan React untuk membagikan data antar komponen tanpa harus mengoper props secara manual melewati setiap tingkatan hierarki (menghindari <em>prop drilling</em>).
          </p>

          <h3>Membuat TaskContext dan Provider</h3>
          <p>Buat file <code>src/context/TaskContext.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  const value = {
    tasks,
    addTask,
    deleteTask,
    toggleComplete,
    stats: {
      total: tasks.length,
      completed: completedTasks,
      remaining: remainingTasks,
      completionRate: tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0
    }
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}`}</CodeBlock>

          <h3>Membungkus Aplikasi dengan TaskProvider</h3>
          <p>Bungkus pohon komponen di <code>src/App.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <TaskProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;`}</CodeBlock>

          <h3>Mengakses State Global di Komponen Home</h3>
          <p>Gunakan hook <code>useTasks()</code> di <code>src/pages/Home/Home.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import { useTasks } from '../../context/TaskContext';
import './Home.css';

function Home() {
  const { tasks, addTask, deleteTask, toggleComplete, stats } = useTasks();

  return (
    <div className="home">
      <Header
        title="React Task Manager"
        description="Kelola tugas Anda dengan mudah"
      />

      <main className="container">
        <div className="stats">
          <p>Total: {stats.total} tugas</p>
          <p>Selesai: {stats.completed}</p>
          <p>Belum selesai: {stats.remaining}</p>
          <p>Progress: {stats.completionRate.toFixed(1)}%</p>
        </div>

        <TaskForm onAddTask={addTask} />

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggleComplete={toggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;`}</CodeBlock>

          <h3>Context dengan useReducer (Alternatif State Kompleks)</h3>
          <p>Untuk alur state yang lebih kompleks, Context dapat dipadukan dengan <code>useReducer</code>:</p>
          <CodeBlock language="jsx">{`const ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  TOGGLE_COMPLETE: 'TOGGLE_COMPLETE'
};

function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...state, action.payload];
    case ACTIONS.DELETE_TASK:
      return state.filter(t => t.id !== action.payload);
    case ACTIONS.TOGGLE_COMPLETE:
      return state.map(t =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    default:
      return state;
  }
}`}</CodeBlock>

          <h3>Optimasi Performa Context</h3>
          <ul>
            <li><strong>Pisahkan Context per Concern:</strong> Jangan menggabungkan Auth, Theme, dan Tasks ke dalam satu Context tunggal. Pisahkan agar pembaruan theme tidak memicu re-render pada daftar task.</li>
            <li><strong>Memoize Nilai Context:</strong> Gunakan <code>useMemo</code> saat membungkus objek <code>value</code> pada provider untuk mencegah pembuatan objek baru di setiap siklus render parent.</li>
          </ul>

          {calloutExercise(
            "ThemeContext untuk Dark Mode",
            "Buat context terpisah src/context/ThemeContext.jsx yang menyediakan nilai theme ('light' | 'dark') dan fungsi toggleTheme(). Terapkan tombol pengubah tema di Navbar dan terapkan styling gelap saat mode aktif."
          )}
        </section>
      )}

      {(!subId || subId === "testing-jest") && (
        <section id="testing-jest">
          <h2>7. Testing dengan Jest &amp; RTL</h2>
          <p>
            Pengujian unit memastikan komponen bekerja stabil dan mencegah kerusakan (regresi) saat kode diperbarui.
            <strong>React Testing Library (RTL)</strong> mengusung filosofi pengujian berbasis perilaku pengguna (user behavior), bukan rincian implementasi internal komponen.
          </p>

          <p>Pasang pustaka penunjang pengujian jika belum terpasang:</p>
          <CodeBlock language="bash">{`npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event`}</CodeBlock>

          <h3>Unit Test Komponen TaskItem</h3>
          <p>Buat file <code>src/components/TaskItem/TaskItem.test.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('TaskItem Component', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    completed: false
  };

  const mockOnDelete = jest.fn();
  const mockOnToggleComplete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('merender judul task dengan benar', () => {
    render(
      <TaskItem
        task={mockTask}
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  test('merender checkbox tidak tercentang saat task belum selesai', () => {
    render(
      <TaskItem
        task={mockTask}
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('memanggil onToggleComplete saat checkbox diklik', () => {
    render(
      <TaskItem
        task={mockTask}
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnToggleComplete).toHaveBeenCalledTimes(1);
    expect(mockOnToggleComplete).toHaveBeenCalledWith(1);
  });

  test('memanggil onDelete saat tombol Delete diklik', () => {
    render(
      <TaskItem
        task={mockTask}
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});`}</CodeBlock>

          <h3>Unit Test Komponen TaskForm</h3>
          <p>Buat file <code>src/components/TaskForm/TaskForm.test.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
  const mockOnAddTask = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('memungkinkan pengguna mengetik judul dan mengirim form', async () => {
    const user = userEvent.setup();
    render(<TaskForm onAddTask={mockOnAddTask} />);

    const input = screen.getByPlaceholderText('Tambahkan tugas baru...');
    const button = screen.getByText('Tambah');

    await user.type(input, 'Belajar React Testing');
    await user.click(button);

    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
    expect(mockOnAddTask).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Belajar React Testing',
        completed: false
      })
    );
    expect(input).toHaveValue('');
  });

  test('tidak mengirim tugas saat input berupa spasi kosong', async () => {
    const user = userEvent.setup();
    render(<TaskForm onAddTask={mockOnAddTask} />);

    const input = screen.getByPlaceholderText('Tambahkan tugas baru...');
    const button = screen.getByText('Tambah');

    await user.type(input, '   ');
    await user.click(button);

    expect(mockOnAddTask).not.toHaveBeenCalled();
  });
});`}</CodeBlock>

          <h3>Metode Query di React Testing Library</h3>
          <ul>
            <li><code>getBy*</code>: Menghasilkan elemen atau melempar error jika elemen tidak ditemukan. Cocok untuk elemen yang dipastikan ada.</li>
            <li><code>queryBy*</code>: Mengembalikan elemen atau <code>null</code> jika tidak ditemukan. Digunakan untuk menegaskan elemen tidak muncul di DOM.</li>
            <li><code>findBy*</code>: Mengembalikan Promise asinkron yang menunggu elemen muncul di DOM (berguna untuk state pemuatan data API).</li>
          </ul>

          <h3>Perintah Menjalankan Test</h3>
          <CodeBlock language="bash">{`# Menjalankan seluruh test
npm test

# Menjalankan test dalam mode watch interaktif
npm test -- --watch

# Menjalankan pengujian dengan laporan persentase cakupan (coverage)
npm test -- --coverage --watchAll=false`}</CodeBlock>
        </section>
      )}

      {(!subId || subId === "tugas-praktikum") && (
        <section id="tugas-praktikum">
          <h2>Tugas: Aplikasi Manajemen Buku Pribadi</h2>
          <p>
            Buatlah aplikasi web interaktif berbasis React untuk membantu pengguna mengelola katalog buku pribadi mereka (koleksi buku, status baca, dan target buku yang ingin dibeli).
          </p>

          <h3>Fitur Fungsional Wajib:</h3>
          <ul>
            <li><strong>Manajemen Data Buku:</strong> Formulir penambahan buku (judul, penulis, kategori, dan status baca: <em>Belum Dibaca</em>, <em>Sedang Dibaca</em>, <em>Selesai</em>), pengubahan status baca, serta penghapusan buku.</li>
            <li><strong>Pencarian &amp; Filter:</strong> Input pencarian berdasarkan judul/penulis dan tombol filter berdasarkan status baca.</li>
            <li><strong>Statistik Buku:</strong> Panel ringkasan yang menampilkan total buku dan persentase buku yang telah selesai dibaca.</li>
            <li><strong>Multi-Halaman:</strong> Halaman Beranda (Katalog Buku) dan Halaman Tentang / Statistik Pengguna menggunakan React Router.</li>
          </ul>

          <h3>Spesifikasi Teknis:</h3>
          <ul>
            <li>Wajib menggunakan Functional Components dengan Hooks (<code>useState</code>, <code>useEffect</code>).</li>
            <li>Memecah antarmuka menjadi minimal 4 komponen terpisah dan modular.</li>
            <li>Menggunakan <strong>Context API</strong> untuk manajemen state buku secara global.</li>
            <li>Menyimpan seluruh data ke <strong>localStorage</strong> secara otomatis melalui Custom Hook.</li>
            <li>Menulis minimal 3 unit test menggunakan React Testing Library.</li>
          </ul>
        </section>
      )}

      {(!subId || subId === "format-pengumpulan") && (
        <section id="format-pengumpulan">
          <h2>Format Pengumpulan</h2>
          <p>Aturan pengumpulan repositori tugas praktikum:</p>
          <ul>
            <li>Format Repositori GitHub: <code>pemrograman_web_itera_[NIM]</code></li>
            <li>Format Folder Pertemuan: <code>[NAMA]_[NIM]_pertemuan3</code></li>
            <li>Pastikan menyertakan file <code>README.md</code> yang menjelaskan cara menjalankan project di VS Code (langkah <code>npm install</code> dan <code>npm start</code>).</li>
            <li>Jangan mengunggah folder <code>node_modules/</code> ke repositori Git (pastikan terdaftar di <code>.gitignore</code>).</li>
          </ul>

          <SubmissionBox pertemuan={3} />
        </section>
      )}
    </>
  );
}
