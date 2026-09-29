import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 3: React Basics
export default function Pertemuan3() {
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
      <h2 id="dasar-teori">Konsep Dasar React</h2>
      <p>React adalah library JavaScript yang dikembangkan oleh Facebook (Meta) untuk membangun UI interaktif dan efisien. React berfokus pada satu hal: membangun UI dengan pendekatan <em>component-based</em>.</p>
      <p>Konsep kunci: <strong>Component-Based</strong>, <strong>Declarative</strong>, <strong>Virtual DOM</strong>, <strong>Unidirectional Data Flow</strong>, <strong>JSX</strong>, <strong>Hooks</strong>.</p>
      {calloutInfo("React vs Framework Lain: React hanya menangani layer view. Berbeda dari Angular/Vue yang lebih comprehensive, dengan React bebas memilih library tambahan (Redux/Zustand untuk state, React Router untuk routing, dsb).")}

      <h2 id="alat-bahan">Alat dan Bahan</h2>
      <ul>
        <li>Node.js dan npm (versi LTS terbaru)</li>
        <li>Code Editor: VS Code dengan ekstensi React/JSX</li>
        <li>Browser modern dengan React DevTools</li>
        <li>Git untuk version control</li>
      </ul>

      <h2 id="panduan-praktik">Langkah Praktikum</h2>

      <h3 id="setup-react">1. Setup Project React</h3>
      <CodeBlock language="bash">{`# Buat project React baru
npx create-react-app my-react-app
cd my-react-app
npm start`}</CodeBlock>
      <p>Struktur folder yang lebih baik untuk praktikum:</p>
      <CodeBlock language="bash">{`my-react-app/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │     ├── Header.jsx
│   │   │     └── Header.css
│   │   ├── TaskItem/
│   │   │     ├── TaskItem.jsx
│   │   │     └── TaskItem.css
│   │   └── TaskForm/
│   │         ├── TaskForm.jsx
│   │         └── TaskForm.css
│   ├── pages/
│   │   ├── Home/
│   │   │     └── Home.jsx
│   │   └── About/
│   │         └── About.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   └── index.css`}</CodeBlock>
      {calloutInfo("Dalam pengembangan modern React, kita menggunakan functional components dengan Hooks daripada class components.")}

      <h3 id="komponen-pertama">2. Struktur Functional Component</h3>
      <CodeBlock language="jsx">{`// src/components/Header/Header.jsx
import React from 'react';
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
      <CodeBlock language="jsx">{`// src/components/TaskItem/TaskItem.jsx
import React from 'react';

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
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;`}</CodeBlock>
      <CodeBlock language="jsx">{`// src/components/TaskForm/TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = { id: Date.now(), title, completed: false };
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
      {calloutExercise("Komponen Footer", "Buat komponen baru Footer.jsx yang menampilkan \"© [tahun berjalan] Task Manager\" (tahun dinamis dari new Date().getFullYear()). Tampilkan di Home.jsx.")}

      <h3 id="state-hooks">3. Manajemen State dengan Hooks</h3>
      <CodeBlock language="jsx">{`// src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';

function Home() {
  const [tasks, setTasks] = useState([]);

  // Load dari localStorage saat pertama kali
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  // Simpan ke localStorage setiap kali tasks berubah
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => setTasks([...tasks, newTask]);
  const handleDeleteTask = (taskId) => setTasks(tasks.filter(t => t.id !== taskId));
  const handleToggleComplete = (taskId) =>
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));

  const completedTasks = tasks.filter(t => t.completed).length;

  return (
    <div className="home">
      <Header title="React Task Manager" description="Kelola tugas Anda dengan mudah" />
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum: {tasks.length - completedTasks}</p>
        </div>
        <TaskForm onAddTask={handleAddTask} />
        <div className="task-list">
          {tasks.length === 0
            ? <p>Belum ada tugas. Tambahkan tugas baru!</p>
            : tasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onToggleComplete={handleToggleComplete}
                />
              ))
          }
        </div>
      </main>
    </div>
  );
}

export default Home;`}</CodeBlock>
      {calloutInfo("React Hooks: useState menambahkan state ke functional component; useEffect melakukan side effects (data fetching, interaksi DOM). Perhatikan array dependensi pada useEffect yang mengontrol kapan effect dijalankan.")}
      {calloutExercise("Edit Judul Task", "Tambahkan kemampuan mengedit judul task (klik pada teks judul memunculkan input untuk mengubah teks, simpan ke state tasks saat Enter ditekan). Hint: tambahkan state lokal editingId di Home.jsx untuk menandai task yang sedang diedit.")}

      <h3 id="react-routing">4. Routing dengan React Router</h3>
      <CodeBlock language="bash">{`npm install react-router-dom`}</CodeBlock>
      <CodeBlock language="jsx">{`// src/App.jsx (dengan Routing)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';

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
      {calloutExercise("Halaman Contact", "Tambahkan halaman baru Contact.jsx dengan route /contact, berisi form sederhana (nama + pesan). Saat submit, console.log datanya (tidak perlu backend). Tambahkan link ke halaman ini di Navbar.")}

      <h3 id="custom-hook">5. Pembuatan Custom Hook</h3>
      <CodeBlock language="javascript">{`// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
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
      {calloutInfo("Custom Hooks: mekanisme mengekstrak logika stateful dari komponen agar bisa dipakai ulang untuk mengurangi duplikasi kode. Nama custom hook harus dimulai dengan \"use\".")}
      {calloutExercise("Custom Hook Document Title", "Buat custom hook useDocumentTitle(title) yang otomatis mengubah document.title browser sesuai parameter. Gunakan di halaman Home dan About dengan judul berbeda.")}

      <h3 id="context-api">6. Global State dengan Context API</h3>
      <CodeBlock language="jsx">{`// src/context/TaskContext.jsx
import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':    return [...state, action.payload];
    case 'DELETE_TASK': return state.filter(t => t.id !== action.payload);
    case 'TOGGLE_COMPLETE':
      return state.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t);
    default: return state;
  }
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const dispatch = (action) => setTasks(taskReducer(tasks, action));

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a TaskProvider');
  return context;
}`}</CodeBlock>
      {calloutInfo("Context API berguna untuk state yang diakses banyak komponen di berbagai level dan menghindari \"prop drilling\", sehingga state management lebih terpusat.")}
      {calloutExercise("Dark Mode via Context", "Tambahkan ThemeContext terpisah dari TaskContext untuk mengelola dark mode toggle (state boolean isDark + fungsi toggleTheme). Terapkan class dark pada elemen root saat aktif.")}

      <h3 id="testing-jest">7. Testing dengan Jest & RTL</h3>
      <CodeBlock language="bash">{`npm install --save-dev @testing-library/react @testing-library/jest-dom`}</CodeBlock>
      <CodeBlock language="jsx">{`// src/components/TaskItem/TaskItem.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('TaskItem Component', () => {
  const mockTask = { id: 1, title: 'Test Task', completed: false };
  const mockOnDelete = jest.fn();
  const mockOnToggleComplete = jest.fn();

  it('renders task title', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('calls onToggleComplete when checkbox is clicked', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockOnToggleComplete).toHaveBeenCalledWith(1);
  });

  it('calls onDelete when delete button is clicked', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});`}</CodeBlock>

      <h2 id="tugas-praktikum">Tugas: Manajemen Buku Pribadi</h2>
      <p>Buat aplikasi manajemen buku pribadi (mencatat buku milik/sedang dibaca/ingin dibeli).</p>
      <p><strong>Fitur Dasar:</strong> tambah buku (judul, penulis, status), edit &amp; hapus buku, filter berdasarkan status, pencarian buku.</p>
      <p><strong>Teknologi React:</strong> useState &amp; useEffect, minimal 3 komponen reusable, Context API, React Router, localStorage.</p>
      <p><strong>Persyaratan Teknis:</strong> functional components dengan Hooks, minimal 2 custom hooks, minimal 5 test unit dengan React Testing Library.</p>

      <h2 id="format-pengumpulan">Format Pengumpulan</h2>
      <ul>
        <li>Folder: <code>[NAMA]_[NIM]_pertemuan3</code></li>
        <li><strong>Deadline:</strong> Belum ditentukan (mengikuti instruksi asisten praktikum).</li>
      </ul>

      <SubmissionBox pertemuan={3} />
    </>
  );
}
