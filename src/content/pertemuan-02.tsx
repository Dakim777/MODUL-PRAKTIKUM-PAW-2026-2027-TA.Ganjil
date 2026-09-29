import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 2: JavaScript Next Gen (ES6+)
export default function Pertemuan2() {
  return (
    <>
      <h2 id="dasar-teori">Dasar Teori Modern JS</h2>
      <p>
        JavaScript Next Gen mengacu pada fitur-fitur modern dari JavaScript yang diperkenalkan
        dalam ECMAScript 2015 (ES6) dan versi-versi berikutnya. Fitur-fitur ini membuat kode
        menjadi lebih bersih, ekspresif, dan mudah dipelihara.
      </p>
      <p>
        Fitur utama yang dipelajari: <strong>Let dan Const</strong>, <strong>Arrow Functions</strong>,{" "}
        <strong>Template Literals</strong>, <strong>Destructuring</strong>, <strong>Spread dan Rest Operators</strong>,{" "}
        <strong>Default Parameters</strong>, <strong>Classes</strong>, <strong>Modules</strong>,{" "}
        <strong>Promise dan Async/Await</strong>.
      </p>
      <div className="callout callout-info">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}>
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" /><path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p><strong>JavaScript Compatibility:</strong> Meskipun sebagian besar browser modern telah mendukung fitur ES6+, beberapa browser lama mungkin tidak mendukungnya. Dalam produksi, sering digunakan transpiler seperti Babel untuk mengkonversi kode ES6+ ke ES5.</p></div>
      </div>

      <h2 id="alat-bahan">Alat dan Bahan</h2>
      <ul>
        <li>Browser Web: Chrome, Firefox, atau Edge (versi terbaru)</li>
        <li>Code Editor: Visual Studio Code, Sublime Text, atau editor kode lainnya</li>
        <li>Node.js (Opsional) untuk menjalankan JavaScript di luar browser</li>
        <li>Rekomendasi ekstensi VS Code: ESLint, Prettier, JavaScript (ES6) code snippets, LiveServer</li>
      </ul>

      <h2 id="panduan-praktik">Langkah Praktikum</h2>

      <h3 id="struktur-proyek">1. Struktur Direktori Proyek</h3>
      <CodeBlock language="bash">{`project-js-nextgen/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── modules/
│   │     ├── utils.js
│   │     └── data.js
│   └── app.js`}</CodeBlock>
      <CodeBlock language="html">{`<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Next Gen</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
  <div class="max-w-4xl mx-auto">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-blue-600 mb-2">JavaScript Next Gen Praktikum</h1>
      <p class="text-gray-600">Belajar fitur modern JavaScript (ES6+)</p>
    </header>
    <main class="bg-white p-6 rounded-lg shadow-md">
      <div id="output" class="space-y-4"></div>
      <div class="flex space-x-4 mt-8">
        <button id="runBtn" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Run Demo</button>
        <button id="clearBtn" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">Clear Output</button>
      </div>
    </main>
  </div>
  <!-- Type module penting untuk mendukung ES modules -->
  <script type="module" src="js/main.js"></script>
</body>
</html>`}</CodeBlock>
      <CodeBlock language="javascript">{`// js/modules/utils.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

export function capitalizeString(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function calculateYears(startDate, endDate = new Date()) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const yearDiff = end.getFullYear() - start.getFullYear();
  if (end.getMonth() < start.getMonth() ||
     (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())) {
    return yearDiff - 1;
  }
  return yearDiff;
}`}</CodeBlock>

      <h3 id="let-const-arrow">2. Variabel Scoping & Arrow Functions</h3>
      <CodeBlock language="javascript">{`// js/app.js
export function demoVariables() {
  var oldVar = "Old variable";
  { var oldVar = "Changed inside block"; } // var: function scope

  let newLet = "New let variable";
  { let newLet = "Different inside block"; } // let: block scope

  const PI = 3.14159;
  const user = { name: "John", age: 30 };
  // PI = 3.15; // Error! Tidak bisa mengubah nilai const
  user.age = 31; // Valid! Konten objek const dapat diubah

  return { oldVar, newLet, PI, user };
}

export function demoArrowFunctions() {
  function regularSum(a, b) { return a + b; }
  const arrowSum = (a, b) => { return a + b; };
  const shortArrow = (a, b) => a + b;
  const sayHello = () => "Hello World!";
  const square = x => x * x;

  return { regularSum: regularSum(5,3), arrowSum: arrowSum(5,3), shortArrow: shortArrow(5,3) };
}

export function demoTemplateLiterals() {
  const name = "John";
  const age = 30;
  const oldWay = "Nama saya " + name + " dan umur saya " + age + " tahun.";
  const newWay = \`Nama saya \${name} dan umur saya \${age} tahun.\`;
  const multiLine = \`
    Ini adalah string multi-baris.
    Nama: \${name}
    Umur: \${age}
  \`;
  return { oldWay, newWay, multiLine };
}`}</CodeBlock>
      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p><strong>Latihan Mandiri: Sapaan Berdasarkan Waktu</strong><br />Buat arrow function <code>sapaWaktu()</code> tanpa parameter yang mengembalikan string sapaan berbeda tergantung jam saat ini (<code>new Date().getHours()</code>): "Selamat pagi" (&lt; 11), "Selamat siang" (11-15), "Selamat sore" (15-18), "Selamat malam" (lainnya). Gunakan template literal.</p></div>
      </div>

      <h3 id="destructuring-spread">3. Destructuring, Spread & Rest</h3>
      <CodeBlock language="javascript">{`export function demoDestructuring() {
  const person = {
    firstName: "John", lastName: "Doe", age: 30, email: "john@example.com",
    address: { city: "Jakarta", postalCode: "12345" }
  };

  const { firstName, lastName } = person;           // Basic destructuring
  const { firstName: fName, lastName: lName } = person; // Rename
  const { hobby = "coding" } = person;              // Default value
  const { address: { city, postalCode } } = person; // Nested

  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [firstColor, secondColor] = colors;
  const [, , thirdColor] = colors;                  // Skip elements
  const [primary, secondary, ...restColors] = colors; // Rest

  let a = 1, b = 2;
  [a, b] = [b, a]; // Swap variables!

  return { firstName, lastName, city, firstColor, thirdColor, restColors, a, b };
}

export function demoSpreadRest() {
  const numbers = [1, 2, 3];
  const moreNumbers = [...numbers, 4, 5];           // Spread array
  const mergedArray = [...[1,2,3], ...[4,5,6]];     // Merge arrays

  const person = { name: "John", age: 30 };
  const extendedPerson = { ...person, email: "john@example.com", age: 31 };

  function sum(...numbers) { return numbers.reduce((t, n) => t + n, 0); }
  function process(first, second, ...rest) { return { first, second, rest }; }

  return { moreNumbers, mergedArray, extendedPerson, sum: sum(1,2,3,4,5) };
}`}</CodeBlock>
      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p><strong>Latihan Mandiri: Produk Pertama &amp; Total Stok</strong><br />Dari <code>sampleData.products</code>, gunakan destructuring untuk mengambil <code>name</code> dan <code>price</code> dari produk pertama. Gunakan <code>reduce()</code> untuk menjumlahkan seluruh <code>stock</code>.</p></div>
      </div>

      <h3 id="classes-objects">4. Default Parameters & Class ES6</h3>
      <CodeBlock language="javascript">{`export function demoClasses() {
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.createdAt = new Date();
    }
    getInfo() { return \`\${this.name} (\${this.email})\`; }
    getCreatedDate() { return this.createdAt.toLocaleDateString(); }
  }

  class Admin extends User {
    constructor(name, email, role = "admin") {
      super(name, email);
      this.role = role;
    }
    getInfo() { return \`\${this.name} (\${this.email}) - \${this.role}\`; }
    hasAccess(module) { return true; }
  }

  const user = new User("John Doe", "john@example.com");
  const admin = new Admin("Admin User", "admin@example.com");

  return {
    user: { info: user.getInfo() },
    admin: { info: admin.getInfo() },
    isUserInstance: user instanceof User,
    isAdminUser: admin instanceof User  // true! Admin extends User
  };
}`}</CodeBlock>
      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p><strong>Latihan Mandiri: Class Produk dengan Diskon</strong><br />Buat <code>class Produk</code> dengan constructor <code>(nama, harga)</code> dan method <code>hargaSetelahDiskon(persen = 10)</code> yang mengembalikan harga setelah dipotong diskon (default 10%). Buat 2 instance dan tampilkan hasilnya.</p></div>
      </div>

      <h3 id="array-methods">5. Modern Array Methods</h3>
      <CodeBlock language="javascript">{`export function demoArrayMethods() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const users = [
    { id: 1, name: "John", age: 25, active: true },
    { id: 2, name: "Jane", age: 30, active: false },
    { id: 3, name: "Bob",  age: 22, active: true },
  ];

  const doubled     = numbers.map(num => num * 2);
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const activeUsers = users.filter(user => user.active);
  const userJane    = users.find(user => user.name === "Jane");
  const hasAdult    = users.some(user => user.age >= 18);
  const allAdults   = users.every(user => user.age >= 18);
  const sum         = numbers.reduce((total, num) => total + num, 0);

  // Method chaining
  const activeNames = users.filter(u => u.active).map(u => u.name);

  return { doubled, evenNumbers, activeUsers: activeUsers.length,
           userJane, hasAdult, allAdults, sum, activeNames };
}`}</CodeBlock>
      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p><strong>Latihan Mandiri: Filter Skill JavaScript</strong><br />Dari <code>sampleData.users</code>, gunakan <code>filter()</code> untuk mendapatkan user yang punya <code>"JavaScript"</code> di <code>skills</code>, lalu <code>map()</code> hasilnya jadi array nama saja.</p></div>
      </div>

      <h3 id="async-await">6. Asynchronous: Promise & Async/Await</h3>
      <CodeBlock language="javascript">{`// Promise dasar
function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: \`User \${id}\`, success: true });
      else reject(new Error("Invalid ID"));
    }, 1000);
  });
}

// Promise chaining
fetchData(1)
  .then(data => { console.log("Success:", data); return fetchData(2); })
  .then(data => { console.log("Second:", data); })
  .catch(err => { console.error("Error:", err.message); });

// Promise.all (paralel)
Promise.all([fetchData(4), fetchData(5), fetchData(6)])
  .then(results => console.log("All:", results.map(r => r.name).join(', ')));

// Async/Await (lebih bersih)
async function getUserData(id) {
  try {
    const user  = await fetchData(id);
    const posts = await fetchData(user.id + 10); // Simulated
    return { user, posts, success: true };
  } catch (error) {
    return { error: error.message, success: false };
  }
}`}</CodeBlock>
      <div className="callout callout-warning">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-amber-500)" }}>
          <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 9v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="callout-body"><p><strong>Latihan Mandiri: Delay Berurutan</strong><br />Buat fungsi <code>delay(ms)</code> yang mengembalikan Promise resolve setelah <code>ms</code> milidetik. Buat fungsi <code>async</code> yang memanggil <code>delay(500)</code> 3 kali berurutan (bukan paralel), catat waktu selesai tiap panggilan ke console. Hint: <code>await delay(500)</code> dipanggil 3 kali di dalam satu fungsi <code>async</code>. Expected output: 3 log muncul di console dengan jeda ±500ms antar log.</p></div>
      </div>

      <h2 id="hasil-praktikum">Hasil Praktikum</h2>
      <p>Mahasiswa seharusnya memahami perbedaan <code>let</code>/<code>const</code>/<code>var</code>, arrow function, template literals, destructuring, spread/rest, default parameter, class + inheritance, enhanced object literals, module system, array modern methods, Promise &amp; async/await, struktur proyek modular.</p>

      <h2 id="tugas-praktikum">Tugas: Personal Dashboard</h2>
      <p>Buat aplikasi personal dashboard sederhana (jadwal kuliah, daftar tugas, catatan, atau info cuaca/waktu; bebas dipilih).</p>
      <p>Persyaratan:</p>
      <ul>
        <li>Interaktif: bisa menambah, mengedit, menghapus informasi</li>
        <li>Penyimpanan lokal: gunakan <code>localStorage</code></li>
        <li>Fitur ES6+ wajib: <code>let</code>/<code>const</code> tepat, minimal 3 arrow functions, template literals, fungsi asinkron (Async/Await atau Promises), implementasi Classes</li>
      </ul>

      <div style={{ overflowX: "auto", marginBottom: "1.25rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ background: "var(--color-surface)", borderBottom: "2px solid var(--color-border)" }}>
              <th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600 }}>Aspek</th>
              <th style={{ padding: "0.625rem 1rem", textAlign: "left", fontWeight: 600 }}>Bobot</th>
            </tr>
          </thead>
          <tbody>
            {[["Fungsionalitas dan interaktivitas aplikasi","30%"],["Implementasi fitur ES6+","25%"],["Penggunaan localStorage dan pengelolaan data","20%"],["Desain UI dan UX","15%"],["Dokumentasi dan kerapian kode","10%"]].map(([a,b],i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "0.5rem 1rem", color: "var(--color-text-secondary)" }}>{a}</td>
                <td style={{ padding: "0.5rem 1rem", fontWeight: 600, color: "var(--color-accent)" }}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="format-pengumpulan">Format Pengumpulan</h2>
      <ul>
        <li>Repository: <code>pemrograman_web_itera_[NIM]</code>, folder: <code>[NAMA]_[NIM]_pertemuan2</code></li>
        <li><strong>Deadline:</strong> Belum ditentukan (mengikuti pengumuman dosen/asisten).</li>
      </ul>

      <SubmissionBox pertemuan={2} />
    </>
  );
}
