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
        <li>Code Editor: VS Code dengan ekstensi ES7+ React/Redux snippets, ESLint, Prettier</li>
        <li>Browser modern dengan React DevTools</li>
        <li>Git untuk version control</li>
      </ul>
      <CodeBlock language="bash">{`node --version
npm --version`}</CodeBlock>
      {calloutInfo("Gunakan Node.js versi LTS (Long Term Support) terbaru. Saat ini versi yang direkomendasikan adalah v18.x atau v20.x ke atas.")}

      <h2 id="panduan-praktik">Langkah Praktikum</h2>

      <h3 id="setup-react">1. Setup Project React</h3>
      <p>
        Create React App (CRA) adalah tool resmi dari tim React yang membantu setup project tanpa konfigurasi build yang rumit.
        Jalankan perintah berikut untuk membuat project baru:
      </p>
      <CodeBlock language="bash">{`# Buat project React baru
npx create-react-app my-react-app

# Masuk ke direktori project
cd my-react-app

# Jalankan development server
npm start`}</CodeBlock>
      <p>Setelah menjalankan <code>npm start</code>, browser akan otomatis membuka <code>http://localhost:3000</code> dan menampilkan halaman welcome React.</p>
      {calloutInfo("npx adalah package runner yang sudah termasuk dalam npm 5.2+. Dengan npx, Anda tidak perlu menginstall create-react-app secara global.")}
      <p>Buat struktur folder yang lebih terorganisir untuk project praktikum:</p>
      <CodeBlock language="bash">{`cd src
mkdir components pages hooks context
mkdir components/Header components/TaskItem components/TaskForm components/Navbar
mkdir pages/Home pages/About`}</CodeBlock>
      <p>Struktur direktori akhir yang diharapkan:</p>
      <CodeBlock language="bash">{`my-react-app/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │     ├── Header.jsx
│   │   │     └── Header.css
│   │   ├── TaskItem/
│   │   │     ├── TaskItem.jsx
│   │   │     └── TaskItem.css
│   │   ├── TaskForm/
│   │   │     ├── TaskForm.jsx
│   │   │     └── TaskForm.css
│   │   └── Navbar/
│   │         ├── Navbar.jsx
│   │         └── Navbar.css
│   ├── pages/
│   │   ├── Home/
│   │   │     └── Home.jsx
│   │   └── About/
│   │         └── About.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── context/
│   │   └── TaskContext.jsx
│   ├── App.jsx
│   └── index.css`}</CodeBlock>
      <p>Modifikasi <code>App.jsx</code> dan <code>App.css</code> awal:</p>
      <CodeBlock language="jsx">{`// src/App.jsx
import React from 'react';
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
      <CodeBlock language="css">{`/* src/App.css */
* {
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
      <p>Perintah npm yang perlu diketahui:</p>
      <CodeBlock language="bash">{`# Menjalankan development server
npm start

# Membuild aplikasi untuk production
npm run build

# Menjalankan test
npm test`}</CodeBlock>
      {calloutExercise("Ubah Warna Header", "Coba ubah warna background-color pada .App-header di App.css menjadi warna favorit Anda (misalnya #e74c3c). Amati perubahan di browser secara langsung — ini disebut Hot Module Replacement (HMR).")}

      <h3 id="komponen-pertama">2. Membuat Komponen React (Components & Props)</h3>
      <p>
        Komponen React adalah fungsi JavaScript yang mengembalikan JSX. Props (properties) adalah cara meneruskan data dari komponen induk ke komponen anak.
        Buat komponen <code>Header</code> yang menerima props <code>title</code> dan <code>description</code>:
      </p>
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
      <CodeBlock language="css">{`/* src/components/Header/Header.css */
.header {
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
      <p>Gunakan komponen <code>Header</code> di <code>App.jsx</code> dengan meneruskan props:</p>
      <CodeBlock language="jsx">{`// src/App.jsx (versi dengan Header)
import React from 'react';
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
      <p>Props bisa berupa berbagai tipe data:</p>
      <CodeBlock language="jsx">{`// String props
<Header title="My App" description="Welcome!" />

// Number props
<Counter initialCount={0} step={1} />

// Boolean props
<Button disabled={true} loading={false} />

// Function props
<Button onClick={() => alert('Clicked!')} />

// Object props
<UserCard user={{ name: 'John', age: 30 }} />

// Children props
<Card>
  <h2>Title</h2>
  <p>Content here</p>
</Card>`}</CodeBlock>
      <p>Buat komponen <code>TaskItem</code> untuk menampilkan satu item tugas:</p>
      <CodeBlock language="jsx">{`// src/components/TaskItem/TaskItem.jsx
import React from 'react';
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
      <CodeBlock language="css">{`/* src/components/TaskItem/TaskItem.css */
.task-item {
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
      <p>Buat komponen <code>TaskForm</code> untuk menambah tugas baru:</p>
      <CodeBlock language="jsx">{`// src/components/TaskForm/TaskForm.jsx
import React, { useState } from 'react';
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
      <CodeBlock language="css">{`/* src/components/TaskForm/TaskForm.css */
.task-form {
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
      {calloutInfo("Dalam React, ada dua cara menerima props: destructure langsung di parameter fungsi (cara yang direkomendasikan) atau mengakses lewat objek props. Gunakan default props untuk nilai fallback jika props tidak diberikan.")}
      {calloutExercise("Komponen Footer", "Buat komponen baru Footer.jsx yang menampilkan \"© [tahun berjalan] Task Manager\" (tahun dinamis dari new Date().getFullYear()). Tampilkan di App.jsx di bawah konten utama.")}

      <h3 id="state-hooks">3. Manajemen State dengan Hooks</h3>
      <p>
        <code>useState</code> adalah hook React untuk menambahkan state ke functional component. Setiap kali state berubah, React akan me-render ulang komponen tersebut secara otomatis.
        Pola dasar penggunaan useState:
      </p>
      <CodeBlock language="jsx">{`const [state, setState] = useState(initialValue);`}</CodeBlock>
      <p>Contoh penggunaan useState dengan berbagai tipe data:</p>
      <CodeBlock language="jsx">{`// String state - Input terkontrol
import React, { useState } from 'react';

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
      <CodeBlock language="jsx">{`// Number state - Counter
import React, { useState } from 'react';

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
      <CodeBlock language="jsx">{`// Array state - Todo List
import React, { useState } from 'react';

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
      <p>Buat halaman <code>Home</code> yang menggabungkan semua komponen dengan state management:</p>
      <CodeBlock language="jsx">{`// src/pages/Home/Home.jsx
import React, { useState } from 'react';
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
      <CodeBlock language="css">{`/* src/pages/Home/Home.css */
.container {
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
      <p>Tambahkan <code>useEffect</code> untuk menyimpan dan memuat tasks dari localStorage:</p>
      <CodeBlock language="jsx">{`// src/pages/Home/Home.jsx (versi dengan useEffect & localStorage)
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useState([]);

  // Load tasks dari localStorage saat component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []); // [] = hanya dijalankan sekali saat mount

  // Simpan tasks ke localStorage setiap kali tasks berubah
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // [tasks] = dijalankan setiap kali tasks berubah

  const handleAddTask = (newTask) => setTasks([...tasks, newTask]);
  const handleDeleteTask = (taskId) => setTasks(tasks.filter(task => task.id !== taskId));
  const handleToggleComplete = (taskId) =>
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));

  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header title="React Task Manager" description="Kelola tugas Anda dengan mudah" />
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
      <p>Pola useEffect berdasarkan dependency array:</p>
      <CodeBlock language="jsx">{`// Hanya run sekali saat component mount
useEffect(() => {
  console.log('Component mounted');
}, []); // Empty dependency array

// Run setiap kali count berubah
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);

// Dengan cleanup function (penting untuk subscriptions/timers)
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => {
    clearInterval(timer); // Cleanup saat unmount
  };
}, []);`}</CodeBlock>
      {calloutInfo("Jangan pernah mutate state secara langsung (misal tasks.push(newTask)). Selalu buat salinan baru menggunakan spread operator (...tasks) atau metode array seperti .map(), .filter(). Untuk update yang bergantung pada nilai sebelumnya, gunakan functional update: setCount(prev => prev + 1).")}
      {calloutExercise("Edit Judul Task", "Tambahkan kemampuan mengedit judul task: klik pada teks judul memunculkan input untuk mengubah teks, simpan ke state tasks saat Enter ditekan. Hint: tambahkan state lokal editingId di Home.jsx untuk menandai task yang sedang diedit.")}

      <h3 id="react-routing">4. Routing dengan React Router</h3>
      <p>
        React Router adalah library standar untuk menangani navigasi multi-halaman di aplikasi React.
        Install terlebih dahulu:
      </p>
      <CodeBlock language="bash">{`npm install react-router-dom`}</CodeBlock>
      <p>Buat halaman <code>About</code>:</p>
      <CodeBlock language="jsx">{`// src/pages/About/About.jsx
import React from 'react';
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
            Dibangun menggunakan React dengan functional components dan Hooks.
            Menggunakan localStorage untuk menyimpan data secara lokal.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;`}</CodeBlock>
      <CodeBlock language="css">{`/* src/pages/About/About.css */
.about-content {
  background-color: white;
  border-radius: 8px;
  margin-top: 2rem;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.about-content h2 { color: #3498db; margin-top: 0; }
.about-content h3 { margin-top: 1.5rem; margin-bottom: 0.5rem; color: #2c3e50; }
.about-content ul { padding-left: 1.5rem; }
.about-content li { margin-bottom: 0.5rem; }`}</CodeBlock>
      <p>Buat komponen <code>Navbar</code> dengan Link dari React Router:</p>
      <CodeBlock language="jsx">{`// src/components/Navbar/Navbar.jsx
import React from 'react';
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;`}</CodeBlock>
      <CodeBlock language="css">{`/* src/components/Navbar/Navbar.css */
.navbar {
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
      <p>Update <code>App.jsx</code> dengan setup BrowserRouter, Routes, dan Route:</p>
      <CodeBlock language="jsx">{`// src/App.jsx (dengan React Router)
import React from 'react';
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
      <p>Fitur tambahan React Router yang berguna:</p>
      <CodeBlock language="jsx">{`// Routes dengan berbagai pattern
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/users/:id" element={<UserDetail />} />
  <Route path="*" element={<NotFound />} />
</Routes>

// NavLink dengan active state
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  About
</NavLink>

// useParams untuk URL parameter
import { useParams } from 'react-router-dom';
function UserDetail() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}

// useNavigate untuk navigasi programatik
import { useNavigate } from 'react-router-dom';
function MyComponent() {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/success')}>Submit</button>;
}`}</CodeBlock>
      <p>Buat halaman 404 Not Found:</p>
      <CodeBlock language="jsx">{`// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;`}</CodeBlock>
      {calloutInfo("BrowserRouter menggunakan HTML5 History API untuk URL yang bersih (/about bukan /#/about). Link dan NavLink mencegah full page reload, sedangkan useNavigate digunakan untuk navigasi programatik setelah event (misalnya setelah submit form).")}
      {calloutExercise("Halaman Contact", "Tambahkan halaman baru Contact.jsx dengan route /contact, berisi form sederhana (nama + pesan). Saat submit, console.log datanya (tidak perlu backend). Tambahkan link ke halaman ini di Navbar.")}

      <h3 id="custom-hook">5. Pembuatan Custom Hook</h3>
      <p>
        Custom Hook adalah fungsi JavaScript yang namanya diawali dengan <code>use</code> dan bisa memanggil hook lain.
        Buat custom hook <code>useLocalStorage</code> untuk mengelola state yang disinkronkan dengan localStorage:
      </p>
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
      <p>Buat custom hook <code>useWindowSize</code> untuk mendapatkan ukuran window secara reaktif:</p>
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
      <p>Contoh penggunaan <code>useWindowSize</code> di komponen:</p>
      <CodeBlock language="jsx">{`import useWindowSize from './hooks/useWindowSize';

function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
      {width < 768 && <p>Mode Mobile aktif</p>}
    </div>
  );
}`}</CodeBlock>
      <p>Buat custom hook <code>useTaskStats</code> untuk kalkulasi statistik tasks:</p>
      <CodeBlock language="javascript">{`// src/hooks/useTaskStats.js
import { useMemo } from 'react';

function useTaskStats(tasks) {
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, remaining, completionRate };
  }, [tasks]);

  return stats;
}

export default useTaskStats;`}</CodeBlock>
      <p>Gunakan custom hooks di <code>Home.jsx</code> untuk menyederhanakan kode:</p>
      <CodeBlock language="jsx">{`// src/pages/Home/Home.jsx (versi dengan custom hooks)
import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import useLocalStorage from '../../hooks/useLocalStorage';
import useTaskStats from '../../hooks/useTaskStats';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const stats = useTaskStats(tasks);

  const handleAddTask = (newTask) => setTasks([...tasks, newTask]);
  const handleDeleteTask = (taskId) => setTasks(tasks.filter(t => t.id !== taskId));
  const handleToggleComplete = (taskId) =>
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));

  return (
    <div className="home">
      <Header title="React Task Manager" description="Kelola tugas Anda dengan mudah" />
      <main className="container">
        <div className="stats">
          <p>Total: {stats.total} tugas</p>
          <p>Selesai: {stats.completed}</p>
          <p>Belum: {stats.remaining}</p>
          <p>Progress: {stats.completionRate}%</p>
        </div>
        <TaskForm onAddTask={handleAddTask} />
        <div className="task-list">
          {tasks.length === 0
            ? <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
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
      {calloutInfo("Custom Hooks: mekanisme mengekstrak logika stateful dari komponen agar bisa dipakai ulang dan mengurangi duplikasi kode. Nama custom hook HARUS dimulai dengan 'use' agar React bisa menerapkan Rules of Hooks. Hooks hanya boleh dipanggil di top-level function, bukan di dalam kondisi atau loop.")}
      {calloutExercise("Custom Hook useDocumentTitle", "Buat custom hook useDocumentTitle(title) yang otomatis mengubah document.title browser sesuai parameter menggunakan useEffect. Gunakan di halaman Home dan About dengan judul berbeda.")}

      <h3 id="context-api">6. Global State dengan Context API</h3>
      <p>
        Context API adalah solusi bawaan React untuk menghindari <em>prop drilling</em> — meneruskan props melewati banyak level komponen yang tidak membutuhkannya.
        Buat <code>TaskContext</code> yang menggabungkan Context API dengan custom hook:
      </p>
      <CodeBlock language="jsx">{`// src/context/TaskContext.jsx
import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a TaskProvider');
  return context;
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (newTask) => setTasks([...tasks, newTask]);
  const deleteTask = (taskId) => setTasks(tasks.filter(t => t.id !== taskId));
  const toggleComplete = (taskId) =>
    setTasks(tasks.map(t =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    ));

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    remaining: tasks.filter(t => !t.completed).length,
    completionRate: tasks.length > 0
      ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)
      : 0
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete, stats }}>
      {children}
    </TaskContext.Provider>
  );
}`}</CodeBlock>
      <p>Update <code>App.jsx</code> untuk membungkus aplikasi dengan TaskProvider:</p>
      <CodeBlock language="jsx">{`// src/App.jsx (dengan Context Provider)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;`}</CodeBlock>
      <p>Sekarang <code>Home.jsx</code> menggunakan context langsung tanpa prop drilling:</p>
      <CodeBlock language="jsx">{`// src/pages/Home/Home.jsx (versi final dengan Context API)
import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import { useTasks } from '../../context/TaskContext';
import './Home.css';

function Home() {
  const { tasks, addTask, deleteTask, toggleComplete, stats } = useTasks();

  return (
    <div className="home">
      <Header title="React Task Manager" description="Kelola tugas Anda dengan mudah" />
      <main className="container">
        <div className="stats">
          <p>Total: {stats.total} tugas</p>
          <p>Selesai: {stats.completed}</p>
          <p>Belum: {stats.remaining}</p>
          <p>Progress: {stats.completionRate}%</p>
        </div>
        <TaskForm onAddTask={addTask} />
        <div className="task-list">
          {tasks.length === 0
            ? <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
            : tasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onToggleComplete={toggleComplete}
                />
              ))
          }
        </div>
      </main>
    </div>
  );
}

export default Home;`}</CodeBlock>
      {calloutInfo("Context API berguna untuk state yang diakses banyak komponen di berbagai level dan menghindari prop drilling. Pisahkan context per concern (TaskContext, AuthContext, ThemeContext) agar komponen tidak re-render saat state yang tidak relevan berubah.")}
      {calloutExercise("Dark Mode via Context", "Tambahkan ThemeContext terpisah dari TaskContext untuk mengelola dark mode toggle (state boolean isDark dan fungsi toggleTheme). Terapkan class dark pada elemen root saat aktif. Tambahkan tombol toggle di Navbar.")}

      <h3 id="testing-jest">7. Testing dengan Jest &amp; RTL</h3>
      <p>
        Testing memastikan komponen bekerja sesuai ekspektasi dan mencegah regresi saat kode diubah.
        React Testing Library (RTL) menganjurkan pengujian dari perspektif pengguna.
        Install dependencies testing:
      </p>
      <CodeBlock language="bash">{`npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event`}</CodeBlock>
      <p>Tulis test lengkap untuk komponen <code>TaskItem</code>:</p>
      <CodeBlock language="jsx">{`// src/components/TaskItem/TaskItem.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('TaskItem Component', () => {
  const mockTask = { id: 1, title: 'Test Task', completed: false };
  const mockOnDelete = jest.fn();
  const mockOnToggleComplete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders task title', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  test('renders unchecked checkbox for incomplete task', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('renders checked checkbox for completed task', () => {
    const completedTask = { ...mockTask, completed: true };
    render(<TaskItem task={completedTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('calls onToggleComplete when checkbox is clicked', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockOnToggleComplete).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} onToggleComplete={mockOnToggleComplete} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});`}</CodeBlock>
      <p>Test untuk komponen <code>TaskForm</code>:</p>
      <CodeBlock language="jsx">{`// src/components/TaskForm/TaskForm.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
  const mockOnAddTask = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders form with input and button', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    expect(screen.getByPlaceholderText('Tambahkan tugas baru...')).toBeInTheDocument();
    expect(screen.getByText('Tambah')).toBeInTheDocument();
  });

  test('does not submit empty task', async () => {
    const user = userEvent.setup();
    render(<TaskForm onAddTask={mockOnAddTask} />);
    await user.click(screen.getByText('Tambah'));
    expect(mockOnAddTask).not.toHaveBeenCalled();
  });

  test('submits task with title and clears input', async () => {
    const user = userEvent.setup();
    render(<TaskForm onAddTask={mockOnAddTask} />);
    const input = screen.getByPlaceholderText('Tambahkan tugas baru...');
    await user.type(input, 'New Task Title');
    await user.click(screen.getByText('Tambah'));
    expect(mockOnAddTask).toHaveBeenCalledWith(
      expect.objectContaining({ title: 'New Task Title', completed: false })
    );
    expect(input).toHaveValue('');
  });
});`}</CodeBlock>
      <p>Berbagai cara query element di RTL:</p>
      <CodeBlock language="jsx">{`// getBy* - Throw error jika tidak ditemukan
const button = screen.getByRole('button');
const input = screen.getByPlaceholderText('Enter name');
const text = screen.getByText('Hello');

// queryBy* - Return null jika tidak ditemukan (untuk assert tidak ada)
const button = screen.queryByRole('button');
expect(button).not.toBeInTheDocument();

// findBy* - Return Promise (async, untuk loading state)
const button = await screen.findByRole('button');`}</CodeBlock>
      <p>Perintah untuk menjalankan test:</p>
      <CodeBlock language="bash">{`# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test TaskItem.test.jsx

# Run with coverage report
npm test -- --coverage --watchAll=false`}</CodeBlock>

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
