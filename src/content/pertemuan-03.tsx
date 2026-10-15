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
    <div className="callout callout-info" style={{ marginTop: "0.5rem", marginBottom: "0.75rem" }}>
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
        <path d="M10 2a6 6 0 00-6 6c0 2.2 1.2 4.1 3 5.1V15a1 1 0 001 1h4a1 1 0 001-1v-1.9c1.8-1 3-2.9 3-5.1a6 6 0 00-6-6z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="callout-body">
        <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "var(--color-accent)" }}>Penjelasan Logika Kode:</p>
        <div style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
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
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "#10b981" }}>
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8l3 2-3 2M11 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ fontSize: "0.875rem", color: "var(--color-text-primary)", lineHeight: 1.6 }}>
        <strong style={{ color: "#10b981", display: "block", marginBottom: "0.25rem" }}>
          Hasil Eksekusi &amp; Output Program:
        </strong>
        {text}
      </div>
    </div>
  );

  return (
    <>
      {(!subId || subId === "dasar-teori") && (
        <section id="dasar-teori">
          <h2>Konsep Dasar React</h2>
          <p>
            React adalah library JavaScript open-source yang dikembangkan oleh Meta untuk membangun antarmuka pengguna (UI) modern yang interaktif, cepat, dan terstruktur.
            Berbeda dengan pendekatan klasik manipulasi DOM langsung, React berfokus pada pendekatan <em>Component-Based Architecture</em> di mana seluruh UI dipecah menjadi potongan-potongan mandiri yang dapat disusun ulang.
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
                  <td style={{ padding: "0.75rem" }}>Membagi UI menjadi komponen terisolasi dan reusable, memudahkan pemeliharaan kode pada aplikasi skala besar.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Declarative</td>
                  <td style={{ padding: "0.75rem" }}>Developer cukup mendeskripsikan kondisi tampilan berdasarkan data (state); React otomatis mengatur sinkronisasi DOM.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Virtual DOM</td>
                  <td style={{ padding: "0.75rem" }}>Representasi DOM di memori untuk menghitung perbedaan perubahan (reconciliation) sebelum menyentuh browser DOM asli.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Unidirectional Data Flow</td>
                  <td style={{ padding: "0.75rem" }}>Alur data mengalir satu arah dari parent ke child melalui props, mempermudah pelacakan alur data dan proses debugging.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>JSX (JavaScript XML)</td>
                  <td style={{ padding: "0.75rem" }}>Ekstensi sintaksis deklaratif mirip HTML di dalam file JavaScript untuk mendeskripsikan struktur tampilan antarmuka.</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 600 }}>Hooks</td>
                  <td style={{ padding: "0.75rem" }}>Fungsi khusus (useState, useEffect, dll) yang memberikan kemampuan state dan lifecycle pada functional components.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {calloutInfo(
            "Perbandingan Arsitektur: React berfokus secara spesifik pada lapisan View. Fleksibilitas ini memungkinkan kita memilih sendiri pustaka pendukung routing (React Router) dan state management global (Context API atau Redux) sesuai skala project."
          )}

          <h3 id="alat-bahan">Alat dan Bahan</h3>
          <ul>
            <li><strong>Node.js &amp; npm</strong>: Gunakan versi LTS (v18.x atau v20.x ke atas) sebagai runtime JavaScript.</li>
            <li><strong>Code Editor</strong>: Visual Studio Code dengan ekstensi penunjang (ES7+ snippets, ESLint, Prettier, Live Server).</li>
            <li><strong>Browser &amp; React DevTools</strong>: Chrome atau Firefox yang telah dipasangi ekstensi browser React Developer Tools untuk inspeksi komponen.</li>
            <li><strong>Git</strong>: Untuk kontrol versi dan pengumpulan repositori tugas praktikum.</li>
          </ul>

          <h3>Praktik Cepat di VS Code (Metode HTML + CDN)</h3>
          <p>
            Bagi Anda yang ingin menguji keajaiban reaktivitas React secara instan di VS Code sebelum mengatur workspace proyek lengkap:
            buat satu file <code>index.html</code>, lalu klik kanan dan pilih <strong>Open with Live Server</strong> di VS Code.
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
    body { font-family: system-ui, sans-serif; background: #f8fafc; margin: 0; padding: 2rem; color: #1e293b; }
    .card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); max-width: 480px; margin: 0 auto; }
    button { background: #0284c7; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; cursor: pointer; font-size: 1rem; }
    button:hover { background: #0369a1; }
  </style>
</head>
<body>
  <!-- Wadah mount aplikasi React -->
  <div id="root"></div>

  <script type="text/babel">
    function CounterApp() {
      const [count, setCount] = React.useState(0);

      return (
        <div className="card">
          <h2>React Berjalan di VS Code!</h2>
          <p>Uji coba komponen reaktif tanpa konfigurasi build rumit:</p>
          <p>Jumlah Klik: <strong style={{ color: '#0284c7' }}>{count}</strong> kali</p>
          <button onClick={() => setCount(count + 1)}>Tambah Nilai (+1)</button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<CounterApp />);
  </script>
</body>
</html>`}</CodeBlock>

          {codeHint(
            "Babel Standalone membaca tag <script type=\"text/babel\"> dan mengonversi sintaks JSX menjadi panggilan fungsi React.createElement() murni di memori browser."
          )}

          {codeOutput(
            <div>
              <p><strong>Langkah Eksekusi:</strong> Simpan file sebagai <code>index.html</code> di folder kerja VS Code &rarr; Klik kanan &rarr; Pilih <em>Open with Live Server</em>.</p>
              <p><strong>Output Tampilan:</strong> Browser membuka halaman lokal dengan kartu putih berbayang halus di tengah layar. Setiap kali tombol biru <em>\"Tambah Nilai (+1)\"</em> diklik, angka pada teks berubah seketika (0 &rarr; 1 &rarr; 2) tanpa memuat ulang (refresh) halaman.</p>
            </div>
          )}
        </section>
      )}

      {(!subId || subId === "setup-react") && (
        <section id="setup-react">
          <h2>1. Setup Project React</h2>
          <p>
            Sebelum memulai pembuatan komponen, pastikan Node.js dan npm telah terpasang di komputer Anda.
            Periksa versi melalui terminal terintegrasi di VS Code (tekan <kbd>Ctrl</kbd> + <kbd>`</kbd> atau <kbd>Cmd</kbd> + <kbd>`</kbd>):
          </p>
          <CodeBlock language="bash">{`node --version
npm --version`}</CodeBlock>

          {codeOutput("Terminal akan mencetak nomor versi, misalnya v18.20.0 atau v20.15.0 serta versi npm di atas 9.x.x.")}

          <h3>Langkah Pembuatan Workspace React</h3>
          <p><strong>Opsi 1: Create React App (Standar Resmi Modul)</strong></p>
          <CodeBlock language="bash">{`# Buat project React baru
npx create-react-app my-react-app

# Masuk ke direktori project
cd my-react-app

# Jalankan development server
npm start`}</CodeBlock>

          <p><strong>Opsi 2: Vite (Alternatif Modern Tercepat di VS Code)</strong></p>
          <CodeBlock language="bash">{`npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`}</CodeBlock>

          {calloutInfo("Perbedaan npx vs npm: npx menjalankan package executable langsung dari registry tanpa mengotori instalasi global sistem Anda.")}

          <h3>Menyiapkan Struktur Folder Modular</h3>
          <p>Di dalam folder <code>src/</code> pada workspace VS Code Anda, buat struktur direktori berikut:</p>
          <CodeBlock language="bash">{`cd src
mkdir components pages hooks context
mkdir components/Header components/TaskItem components/TaskForm components/Navbar
mkdir pages/Home pages/About pages/NotFound`}</CodeBlock>

          <p>Visualisasi struktur folder akhir:</p>
          <CodeBlock language="bash">{`my-react-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/ (Header.jsx & Header.css)
│   │   ├── TaskItem/ (TaskItem.jsx & TaskItem.css)
│   │   ├── TaskForm/ (TaskForm.jsx & TaskForm.css)
│   │   └── Navbar/ (Navbar.jsx & Navbar.css)
│   ├── pages/
│   │   ├── Home/ (Home.jsx & Home.css)
│   │   ├── About/ (About.jsx & About.css)
│   │   └── NotFound/ (NotFound.jsx)
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── context/
│   │   └── TaskContext.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
└── package.json`}</CodeBlock>

          <h3>Kode Awal App.jsx &amp; App.css</h3>
          <p>Buka file <code>src/App.jsx</code> dan ganti isinya dengan template bersih berikut:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Task Manager</h1>
        <p>Selamat datang di aplikasi Task Manager praktikum!</p>
      </header>
    </div>
  );
}

export default App;`}</CodeBlock>

          <p>Sesuaikan styling di <code>src/App.css</code>:</p>
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
  padding: 2.5rem 1rem;
  text-align: center;
}

.App-header h1 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
}`}</CodeBlock>

          {codeHint("File App.jsx bertindak sebagai root component. Semua styling global di-reset agar tata letak konsisten lintas browser.")}

          {codeOutput(
            <div>
              <p><strong>Langkah Eksekusi:</strong> Di terminal VS Code jalankan <code>npm start</code>.</p>
              <p><strong>Output Tampilan:</strong> Browser terbuka di <code>http://localhost:3000</code> memperlihatkan header berwarna biru dengan judul putih <em>\"My React Task Manager\"</em>.</p>
            </div>
          )}

          <h3>Instalasi Paket Dependensi Praktikum</h3>
          <p>Jalankan perintah ini di terminal VS Code untuk memasang React Router dan PropTypes:</p>
          <CodeBlock language="bash">{`npm install react-router-dom prop-types`}</CodeBlock>

          {calloutExercise(
            "Eksplorasi HMR (Hot Module Replacement)",
            "Ganti nilai background-color pada .App-header di App.css menjadi #0d9488. Simpan file dan lihat perubahan warna di browser yang terjadi seketika tanpa perlu me-reload halaman."
          )}
        </section>
      )}

      {(!subId || subId === "komponen-pertama") && (
        <section id="komponen-pertama">
          <h2>2. Components &amp; Props</h2>
          <p>
            Komponen adalah fungsi JavaScript yang mengembalikan markup JSX.
            Props (singkatan dari <em>properties</em>) adalah argumen masukan yang dikirim dari komponen induk (parent) ke komponen anak (child).
            Aturan utama: <strong>Props bersifat read-only (immutable)</strong>.
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

          <p>Styling di <code>src/components/Header/Header.css</code>:</p>
          <CodeBlock language="css">{`.header {
  background-color: #3498db;
  color: white;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
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

          <p>Pasang dan kirimkan props ke komponen <code>Header</code> di <code>src/App.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title="React Task Manager"
        description="Kelola daftar tugas Anda secara efisien"
      />
    </div>
  );
}

export default App;`}</CodeBlock>

          {codeHint("Dengan destrukturisasi { title, description } pada parameter fungsi Header, kita dapat langsung mengakses nilai string yang dikirim dari App.jsx.")}

          {codeOutput(
            <div>
              <p><strong>Output Tampilan:</strong> Header berwarna biru dengan teks H1 <em>\"React Task Manager\"</em> dan paragraf deskripsi <em>\"Kelola daftar tugas Anda secara efisien\"</em> yang terpusat rapi di bagian atas layar.</p>
            </div>
          )}

          <h3>Membuat Komponen TaskItem</h3>
          <p>Komponen untuk merender baris tugas dengan kotak centang dan tombol hapus.</p>
          <p>Buat file <code>src/components/TaskItem/TaskItem.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import PropTypes from 'prop-types';
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
          Hapus
        </button>
      </div>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default TaskItem;`}</CodeBlock>

          <p>File styling <code>src/components/TaskItem/TaskItem.css</code>:</p>
          <CodeBlock language="css">{`.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.task-item.completed {
  background-color: #f1f5f9;
  opacity: 0.75;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.completed .task-title {
  text-decoration: line-through;
  color: #94a3b8;
}

.delete-btn {
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.35rem 0.75rem;
  cursor: pointer;
  font-size: 0.85rem;
}

.delete-btn:hover {
  background-color: #dc2626;
}`}</CodeBlock>

          <h3>Membuat Komponen TaskForm</h3>
          <p>Komponen input form terkontrol (controlled component) untuk menambah tugas baru.</p>
          <p>Buat file <code>src/components/TaskForm/TaskForm.jsx</code>:</p>
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
      completed: false,
    };

    onAddTask(newTask);
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ketik tugas baru lalu tekan Enter..."
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
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px 0 0 6px;
  font-size: 1rem;
}

.task-form button {
  padding: 0.75rem 1.5rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}

.task-form button:hover {
  background-color: #059669;
}`}</CodeBlock>

          {codeHint("Event e.preventDefault() membatalkan perilaku bawaan browser agar form tidak memicu reload halaman saat tombol submit ditekan.")}

          {calloutExercise(
            "Children Props",
            "Buat komponen src/components/Card/Card.jsx yang merender wadah berbingkai dengan props.children. Gunakan komponen Card untuk membungkus form TaskForm."
          )}
        </section>
      )}

      {(!subId || subId === "state-hooks") && (
        <section id="state-hooks">
          <h2>3. State Management &amp; Hooks</h2>
          <p>
            <strong>State</strong> adalah data internal yang reaktif dan dapat berubah sepanjang siklus hidup komponen.
            Perbedaan fundamental: <em>Props</em> dikirim dari luar oleh parent, sedangkan <em>State</em> dideklarasikan dan dikelola mandiri di dalam komponen menggunakan hook <code>useState</code>.
          </p>

          <h3>Sintaks Dasar useState</h3>
          <CodeBlock language="jsx">{`const [state, setState] = useState(initialValue);`}</CodeBlock>

          <h3>Contoh State Berdasarkan Ragam Tipe Data</h3>
          <p><strong>1. Number State (Counter Sederhana):</strong></p>
          <CodeBlock language="jsx">{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Total Hitungan: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah (+1)</button>
      <button onClick={() => setCount(count - 1)}>Kurang (-1)</button>
    </div>
  );
}`}</CodeBlock>

          <p><strong>2. Array State (Penambahan &amp; Penghapusan Item):</strong></p>
          <CodeBlock language="jsx">{`import React, { useState } from 'react';

function SimpleList() {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    // Immutability: Buat array baru dengan spread operator
    setItems([...items, { id: Date.now(), name }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <button onClick={() => addItem("Tugas Baru")}>Tambah Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => removeItem(item.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}</CodeBlock>

          <h3>Membuat Halaman Home Lengkap</h3>
          <p>Gabungkan komponen Header, TaskForm, dan TaskItem pada file <code>src/pages/Home/Home.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useState([]);

  // 1. Ambil data dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const saved = localStorage.getItem('tasks_data');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // 2. Simpan setiap pembaruan tasks ke localStorage
  useEffect(() => {
    localStorage.setItem('tasks_data', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(t =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    ));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const remainingCount = tasks.length - completedCount;

  return (
    <div className="home">
      <Header
        title="React Task Manager"
        description="Kelola tugas harian Anda secara terstruktur"
      />

      <main className="container">
        <div className="stats">
          <p>Total: <strong>{tasks.length}</strong> tugas</p>
          <p>Selesai: <strong style={{ color: '#10b981' }}>{completedCount}</strong></p>
          <p>Belum Selesai: <strong style={{ color: '#ef4444' }}>{remainingCount}</strong></p>
        </div>

        <TaskForm onAddTask={handleAddTask} />

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru di atas!</p>
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
  max-width: 720px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.stats {
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.empty-message {
  text-align: center;
  padding: 2.5rem;
  background-color: white;
  border-radius: 8px;
  border: 1px dashed #cbd5e1;
  color: #64748b;
}`}</CodeBlock>

          {codeHint("Array dependensi [tasks] pada useEffect menjamin penyimpanan ke localStorage hanya dieksekusi saat isi array tasks mengalami penambahan, perubahan status, atau penghapusan.")}

          {codeOutput(
            <div>
              <p><strong>Langkah Uji Coba:</strong> Buka halaman beranda aplikasi &rarr; Masukkan judul tugas (contoh: <em>\"Mengerjakan Modul 3\"</em>) &rarr; Klik Tambah.</p>
              <p><strong>Output Tampilan:</strong> Tugas langsung muncul dalam daftar di bawah form, total tugas menjadi 1, dan statistik diperbarui. Saat checkbox dicentang, judul tugas tercoret dan angka selesai berubah menjadi 1. Refresh browser Anda: data tugas tidak akan hilang karena tersimpan otomatis di localStorage!</p>
            </div>
          )}

          {calloutExercise(
            "Tombol Bersihkan Semua",
            "Tambahkan tombol \"Hapus Semua Tugas\" di samping panel statistik. Ketika diklik, panggil setTasks([]) setelah memunculkan konfirmasi window.confirm()."
          )}
        </section>
      )}

      {(!subId || subId === "react-routing") && (
        <section id="react-routing">
          <h2>4. Routing dengan React Router</h2>
          <p>
            Pada Single Page Application (SPA), routing memungkinkan pergantian halaman secara instan tanpa perlu meminta file HTML baru ke server.
            URL browser akan berubah secara dinamis melalui HTML5 History API.
          </p>

          <h3>Membuat Halaman About</h3>
          <p>Buat file <code>src/pages/About/About.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import Header from '../../components/Header/Header';
import './About.css';

function About() {
  return (
    <div className="about">
      <Header
        title="Tentang Task Manager"
        description="Aplikasi Manajemen Tugas Praktikum Pemrograman Web"
      />

      <main className="container">
        <div className="about-content">
          <h2>Tentang Aplikasi</h2>
          <p>
            Aplikasi Task Manager ini dibangun menggunakan React modern dengan functional components,
            React Hooks (useState, useEffect), dan React Router untuk navigasi multi-halaman.
          </p>

          <h3>Fitur Unggulan:</h3>
          <ul>
            <li>Manajemen tugas real-time (tambah, tandai selesai, hapus)</li>
            <li>Penyimpanan lokal persisten melalui localStorage</li>
            <li>Navigasi kilat tanpa refresh halaman</li>
            <li>Ringkasan statistik capaian harian</li>
          </ul>
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
  padding: 2rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.about-content h2 {
  color: #0284c7;
  margin-bottom: 0.75rem;
}

.about-content h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.about-content ul {
  padding-left: 1.25rem;
  line-height: 1.8;
}`}</CodeBlock>

          <h3>Membuat Komponen Navbar</h3>
          <p>Buat file <code>src/components/Navbar/Navbar.jsx</code> menggunakan komponen <code>Link</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">Task Manager</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/about">Tentang</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;`}</CodeBlock>

          <p>File styling <code>src/components/Navbar/Navbar.css</code>:</p>
          <CodeBlock language="css">{`.navbar {
  background-color: #1e293b;
  padding: 1rem 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo a {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
}

.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  color: #38bdf8;
}`}</CodeBlock>

          <h3>Setup Router di App.jsx</h3>
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

          {codeHint("Penggunaan komponen <Link to=\"...\"> mencegah browser melakukan full-page refresh, mempertahankan state memori yang sedang berjalan.")}

          {codeOutput(
            <div>
              <p><strong>Langkah Uji Coba:</strong> Klik tombol navigasi <em>\"Tentang\"</em> di navbar kanan atas.</p>
              <p><strong>Output Tampilan:</strong> Alamat URL di browser berganti menjadi <code>http://localhost:3000/about</code> dan konten halaman About langsung tampil secara instan tanpa kedipan reload.</p>
            </div>
          )}

          {calloutExercise(
            "Halaman 404 (Not Found)",
            "Buat komponen src/pages/NotFound/NotFound.jsx. Tambahkan rute penangkap fallback <Route path=\"*\" element={<NotFound />} /> di App.jsx sehingga saat pengguna mengetik URL acak (misal /halaman-salah), muncul pesan 404 yang rapi."
          )}
        </section>
      )}

      {(!subId || subId === "custom-hook") && (
        <section id="custom-hook">
          <h2>5. Pembuatan Custom Hook</h2>
          <p>
            <strong>Custom Hook</strong> adalah fungsi JavaScript yang namanya diawali dengan kata <code>use</code> dan dapat memanggil Hooks bawaan React.
            Custom Hook memisahkan logika stateful dari komponen UI sehingga kode lebih ringkas dan dapat digunakan di berbagai komponen lain.
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

          <p>Gunakan <code>useLocalStorage</code> di dalam <code>src/pages/Home/Home.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Home.css';

function Home() {
  // Hanya 1 baris kode menggantikan seluruh boilerplate useEffect localStorage!
  const [tasks, setTasks] = useLocalStorage('tasks_data', []);

  const handleAddTask = (newTask) => setTasks([...tasks, newTask]);
  const handleDeleteTask = (taskId) => setTasks(tasks.filter(t => t.id !== taskId));
  const handleToggleComplete = (taskId) =>
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));

  return (
    <div className="home">
      <Header title="React Task Manager" description="Kelola tugas dengan Custom Hook" />
      <main className="container">
        <TaskForm onAddTask={handleAddTask} />
        <div className="task-list">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;`}</CodeBlock>

          {codeHint("Custom hook useLocalStorage mengembalikan pasangan [storedValue, setStoredValue] persis seperti pola sintaksis standar useState.")}

          {codeOutput(
            <div>
              <p><strong>Langkah Uji Coba:</strong> Buka Inspect Element di browser &rarr; Tab <em>Application</em> &rarr; <em>Local Storage</em>.</p>
              <p><strong>Output Tampilan:</strong> Anda dapat melihat key <code>tasks_data</code> secara otomatis menyimpan JSON string dari array tugas setiap kali aksi tambah atau centang dilakukan.</p>
            </div>
          )}

          <h3>Custom Hook useWindowSize (Mendeteksi Ukuran Layar)</h3>
          <p>Buat file <code>src/hooks/useWindowSize.js</code>:</p>
          <CodeBlock language="javascript">{`import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;`}</CodeBlock>

          {calloutExercise(
            "Terapkan useWindowSize",
            "Gunakan hook useWindowSize() pada komponen Home untuk menampilkan label status: jika width < 768px tampilkan badge \"Mode Layar Mobile\", jika tidak tampilkan \"Mode Layar Desktop\"."
          )}
        </section>
      )}

      {(!subId || subId === "context-api") && (
        <section id="context-api">
          <h2>6. Global State dengan Context API</h2>
          <p>
            Ketika aplikasi bertambah besar, meneruskan props melewati banyak komponen perantara (disebut <em>prop drilling</em>) menjadi melelahkan dan rentan kesalahan.
            <strong>Context API</strong> menyediakan jalur komunikasi global agar data dapat diakses langsung oleh komponen manapun yang berada di dalam lingkup Provider.
          </p>

          <h3>Membuat TaskContext dan Provider</h3>
          <p>Buat file <code>src/context/TaskContext.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks harus digunakan di dalam TaskProvider');
  }
  return context;
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks_data', []);

  const addTask = (newTask) => setTasks([...tasks, newTask]);
  const deleteTask = (taskId) => setTasks(tasks.filter(t => t.id !== taskId));
  const toggleComplete = (taskId) =>
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));

  const completedCount = tasks.filter(t => t.completed).length;

  const value = {
    tasks,
    addTask,
    deleteTask,
    toggleComplete,
    stats: {
      total: tasks.length,
      completed: completedCount,
      remaining: tasks.length - completedCount,
      completionRate: tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0
    }
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}`}</CodeBlock>

          <h3>Membungkus Pohon Komponen di App.jsx</h3>
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

          <h3>Mengakses State Global di Halaman Home</h3>
          <CodeBlock language="jsx">{`import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import { useTasks } from '../../context/TaskContext';
import './Home.css';

function Home() {
  // Panggil context langsung tanpa menerima props dari App!
  const { tasks, addTask, deleteTask, toggleComplete, stats } = useTasks();

  return (
    <div className="home">
      <Header title="React Task Manager" description="State Global dengan Context API" />
      <main className="container">
        <div className="stats">
          <p>Total: {stats.total}</p>
          <p>Selesai: {stats.completed}</p>
          <p>Progress: {stats.completionRate.toFixed(0)}%</p>
        </div>
        <TaskForm onAddTask={addTask} />
        <div className="task-list">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggleComplete={toggleComplete}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;`}</CodeBlock>

          {codeHint("Fungsi custom hook useTasks() membungkus useContext(TaskContext) dan melempar error deskriptif jika komponen digunakan di luar TaskProvider.")}

          {codeOutput(
            <div>
              <p><strong>Output Tampilan:</strong> Seluruh fitur penambahan dan penghapusan tugas berfungsi identik seperti sebelumnya, namun kini komponen <code>About</code> atau komponen manapun di masa depan dapat mengakses jumlah tugas yang sama cukup dengan memanggil <code>useTasks()</code> tanpa mengoper props berjenjang.</p>
            </div>
          )}

          {calloutExercise(
            "Tampilkan Statistik di Halaman About",
            "Buka file src/pages/About/About.jsx, impor useTasks(), dan tampilkan kalimat: \"Saat ini Anda memiliki total [stats.total] tugas yang tersimpan di sistem.\"."
          )}
        </section>
      )}

      {(!subId || subId === "testing-jest") && (
        <section id="testing-jest">
          <h2>7. Testing dengan Jest &amp; RTL</h2>
          <p>
            Pengujian unit memastikan komponen berperilaku sesuai harapan pengguna dan mencegah kemunculan bug regresi saat refactoring.
            <strong>React Testing Library (RTL)</strong> mengutamakan pengujian berbasis interaksi nyata pengguna.
          </p>

          <h3>Unit Test Komponen TaskItem</h3>
          <p>Buat file pengujian <code>src/components/TaskItem/TaskItem.test.jsx</code>:</p>
          <CodeBlock language="jsx">{`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('Komponen TaskItem', () => {
  const dummyTask = {
    id: 1,
    title: 'Belajar React Testing',
    completed: false
  };

  const mockDelete = jest.fn();
  const mockToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('merender judul tugas dengan benar', () => {
    render(<TaskItem task={dummyTask} onDelete={mockDelete} onToggleComplete={mockToggle} />);
    expect(screen.getByText('Belajar React Testing')).toBeInTheDocument();
  });

  test('memanggil fungsi onToggleComplete saat checkbox diklik', () => {
    render(<TaskItem task={dummyTask} onDelete={mockDelete} onToggleComplete={mockToggle} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  test('memanggil fungsi onDelete saat tombol hapus diklik', () => {
    render(<TaskItem task={dummyTask} onDelete={mockDelete} onToggleComplete={mockToggle} />);
    const deleteBtn = screen.getByText('Hapus');
    fireEvent.click(deleteBtn);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});`}</CodeBlock>

          {codeHint("Fungsi jest.fn() membuat mock function untuk merekam apakah callback onDelete dan onToggleComplete dipanggil dengan ID tugas yang benar.")}

          <h3>Menjalankan Unit Test</h3>
          <p>Jalankan perintah berikut pada terminal VS Code:</p>
          <CodeBlock language="bash">{`npm test TaskItem.test.jsx -- --watchAll=false`}</CodeBlock>

          {codeOutput(
            <div>
              <p><strong>Output Terminal:</strong></p>
              <pre style={{ background: '#1e293b', color: '#10b981', padding: '0.75rem', borderRadius: '6px', fontSize: '0.8rem' }}>
{`PASS src/components/TaskItem/TaskItem.test.jsx
  Komponen TaskItem
    ✓ merender judul tugas dengan benar (24 ms)
    ✓ memanggil fungsi onToggleComplete saat checkbox diklik (12 ms)
    ✓ memanggil fungsi onDelete saat tombol hapus diklik (8 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.245 s`}
              </pre>
            </div>
          )}
        </section>
      )}

      {(!subId || subId === "tugas-praktikum") && (
        <section id="tugas-praktikum">
          <h2>Tugas: Aplikasi Manajemen Buku Pribadi</h2>
          <p>
            Bangun sebuah aplikasi web interaktif berbasis React untuk membantu pengguna mengelola katalog buku pribadi mereka (koleksi buku, status baca, dan target buku yang ingin dibeli).
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
            <li>Sertakan file <code>README.md</code> yang menjelaskan langkah menjalankan project di VS Code (<code>npm install</code> dan <code>npm start</code>).</li>
            <li>Pastikan folder <code>node_modules/</code> tidak diunggah ke repositori Git (terdaftar di file <code>.gitignore</code>).</li>
          </ul>

          <SubmissionBox pertemuan={3} />
        </section>
      )}
    </>
  );
}
