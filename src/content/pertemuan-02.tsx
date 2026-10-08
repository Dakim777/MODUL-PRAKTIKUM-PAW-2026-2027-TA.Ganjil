import CodeBlock from "@/components/CodeBlock";
import SubmissionBox from "@/components/SubmissionBox";

// Pertemuan 2: JavaScript Next Gen
export default function Pertemuan2() {
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
      <h2 id="dasar-teori">JavaScript Next Gen</h2>

<h3 id="setup-project">Setup Project</h3>
<p>Membuat struktur project dan file dasar untuk JavaScript Next Gen</p>


<h3 id="membuat-project-dan-struktur-file">1. Membuat Project dan Struktur File</h3>
<p>Pertama, buat direktori project baru dengan struktur file berikut:</p>

<CodeBlock language="text" filename="Struktur Direktori">{`project-js-nextgen/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── modules/
│   │   ├── utils.js
│   │   └── data.js
│   └── app.js`}</CodeBlock>

<h3 id="langkah-langkah-setup">Langkah-Langkah Setup</h3>

<h3 id="membuat-file-html-dasar">Membuat File HTML Dasar</h3>
<p>Buat file index.html sebagai halaman utama aplikasi:</p>

<CodeBlock language="">{`<!DOCTYPE html>
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
      <h1 class="text-3xl font-bold text-blue-600 mb-2">
        JavaScript Next Gen Praktikum
      </h1>
      <p class="text-gray-600">
        Belajar fitur modern JavaScript (ES6+)
      </p>
    </header>

    <main class="bg-white p-6 rounded-lg shadow-md">
      <div id="output" class="space-y-4">
        <!-- Output akan ditampilkan di sini -->
      </div>

      <div class="flex space-x-4 mt-8">
        <button id="runBtn" 
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Run Demo
        </button>
        <button id="clearBtn" 
          class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
          Clear Output
        </button>
      </div>
    </main>
  </div>

  <!-- Type module penting untuk mendukung ES modules -->
  <script type="module" src="js/main.js"></script>
</body>
</html>`}</CodeBlock>

<p>Module Script</p>

<p>Perhatikan atribut type="module" pada tag script. Ini penting untuk menggunakan fitur ES6 modules (import/export).</p>


<h3 id="langkah-selanjutnya">Langkah Selanjutnya</h3>
<p>Setelah setup selesai, kita akan mulai mengimplementasikan fitur-fitur ES6+ pada bagian selanjutnya.</p>

<p>Praktikum JavaScript Next Gen</p>

<p>Mengenal fitur modern JavaScript (ES6+) dan penerapannya dalam pengembangan web</p>

<p>Let, Const, dan Arrow Functions</p>

<p>Memahami deklarasi variabel modern dan arrow functions di JavaScript ES6+</p>


<h3 id="let-const-dan-arrow-functions">Let, Const, dan Arrow Functions</h3>
<p>Memahami deklarasi variabel modern dan arrow functions di JavaScript ES6+</p>


<h3 id="let-dan-const">Let dan Const</h3>
<p>ES6 memperkenalkan dua cara baru untuk mendeklarasikan variabel: let dan const, yang mengatasi masalah dengan var.</p>


<h3 id="perbedaan-var-let-dan-const">Perbedaan var, let, dan const</h3>
<p>Temporal Dead Zone (TDZ)</p>

<p>TDZ adalah periode antara masuknya scope dan deklarasi variabel, di mana variabel tidak dapat diakses. Ini membantu menangkap error lebih awal.</p>


<h3 id="implementasi-di-appjs">Implementasi di app.js</h3>
<p>Buat file baru js/app.js dan tambahkan kode berikut:</p>

<CodeBlock language="">{`// JavaScript Next Gen Demo Code

// ----------------------------
// Let dan Const
// ----------------------------
export function demoVariables() {
  // Menggunakan var (cara lama)
  var oldVar = "Old variable";
  {
    var oldVar = "Changed inside block";
  }

  // Menggunakan let (ES6)
  let newLet = "New let variable";
  {
    let newLet = "Different variable inside block";
    console.log("newLet inside block:", newLet);
  }

  // Menggunakan const (ES6)
  const PI = 3.14159;
  const user = { name: "John", age: 30 };
  // PI = 3.15; // Error! Tidak bisa mengubah nilai const
  user.age = 31; // Ini valid! Konten objek const dapat diubah

  return {
    oldVar,
    newLet,
    PI,
    user
  };
}`}</CodeBlock>

<p>Const untuk Objek</p>

<p>const membuat referensi immutable, bukan nilai. Untuk objek dan array,Kaliantidak bisa me-reassign variabel, tetapiKalianbisa memodifikasi isinya.</p>


<h3 id="best-practices">Best Practices</h3>
<ul>
  <li>Gunakan const secara default - Gunakan const kecualiKaliantahu nilai akan berubah</li>
  <li>Gunakan let untuk nilai yang berubah - Hanya gunakan let jika re-assignment diperlukan</li>
  <li>Hindari var - Tidak ada alasan baik menggunakan var di kode modern</li>
</ul>


<h3 id="arrow-functions">Arrow Functions</h3>
<p>Arrow functions menyediakan sintaks yang lebih ringkas untuk menulis fungsi dan menangani this dengan cara yang berbeda.</p>


<h3 id="sintaks-arrow-functions">Sintaks Arrow Functions</h3>
<CodeBlock language="">{`// Regular function
function sum(a, b) {
  return a + b;
}

// Arrow function
const sum = (a, b) => {
  return a + b;
};`}</CodeBlock>

<CodeBlock language="">{`// Tanpa kurung kurawal, return otomatis
const sum = (a, b) => a + b;

// Dengan objek literal, butuh parentheses
const createUser = (name, age) => ({ name, age });`}</CodeBlock>

<CodeBlock language="">{`// Satu parameter, kurung opsional
const square = x => x * x;
const double = x => x * 2;`}</CodeBlock>

<CodeBlock language="">{`// Tanpa parameter, kurung wajib
const sayHello = () => "Hello World!";
const getRandom = () => Math.random();`}</CodeBlock>


<h3 id="implementasi-arrow-functions">Implementasi Arrow Functions</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Arrow Functions
// ----------------------------
export function demoArrowFunctions() {
  // Fungsi reguler
  function regularSum(a, b) {
    return a + b;
  }

  // Arrow function dasar
  const arrowSum = (a, b) => {
    return a + b;
  };

  // Arrow function dengan implicit return
  const shortArrowSum = (a, b) => a + b;

  // Arrow function tanpa parameter
  const sayHello = () => "Hello World!";

  // Arrow function dengan satu parameter (kurung opsional)
  const square = x => x * x;

  return {
    regularSum: regularSum(5, 3),
    arrowSum: arrowSum(5, 3),
    shortArrowSum: shortArrowSum(5, 3),
    sayHello: sayHello(),
    square: square(4)
  };
}`}</CodeBlock>


<h3 id="perbedaan-dengan-regular-functions">Perbedaan dengan Regular Functions</h3>
<p>Lexical this</p>

<p>Arrow functions tidak memiliki this sendiri. Mereka mewarisi this dari scope di mana mereka didefinisikan. Ini sangat berguna dalam callback dan method chaining.</p>


<h3 id="template-literals">Template Literals</h3>
<p>Template literals menyediakan cara yang lebih baik untuk membuat string dengan interpolasi variabel dan multi-line.</p>


<h3 id="sintaks-dasar">Sintaks Dasar</h3>
<CodeBlock language="">{`// Old way
const name = "John";
const greeting = "Hello, " + name + "!";

// Template literals
const greeting = \`Hello, \${name}!\`;`}</CodeBlock>


<h3 id="implementasi-template-literals">Implementasi Template Literals</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Template Literals
// ----------------------------
export function demoTemplateLiterals() {
  const name = "John";
  const age = 30;

  // String concatenation cara lama
  const oldWay = "Nama saya " + name + " dan umur saya " + age + " tahun.";

  // Template literals (ES6)
  const newWay = \`Nama saya \${name} dan umur saya \${age} tahun.\`;

  // Template literals multi-baris
  const multiLine = \`
    Ini adalah string multi-baris.
    Sangat berguna untuk HTML template.
    Nama: \${name}
    Umur: \${age}
  \`;

  // Template literals dengan ekspresi
  const expression = \`Tahun lahir: \${new Date().getFullYear() - age}\`;

  return {
    oldWay,
    newWay,
    multiLine,
    expression
  };
}`}</CodeBlock>


<h3 id="keuntungan-template-literals">Keuntungan Template Literals</h3>
<ul>
  <li>Interpolasi variabel dengan $&#123;&#125;</li>
  <li>Multi-line strings tanpa escape character</li>
  <li>Expression evaluation di dalam string</li>
  <li>Tagged templates untuk pemrosesan string lanjutan</li>
</ul>


<h3 id="update-mainjs">Update main.js</h3>
<p>Update js/main.js untuk mengimpor dan menjalankan demo:</p>

<CodeBlock language="">{`// Import demo functions
import { demoVariables, demoArrowFunctions, demoTemplateLiterals } from './app.js';

// Fungsi utama untuk menjalankan semua demo
function runAllDemos() {
  // Demo Let dan Const
  const varResults = demoVariables();
  addOutput(
    "1. Let dan Const",
    "var vs let/const dan block scope",
    \`var (function scope): \${varResults.oldVar}
let (block scope): \${varResults.newLet}
const (immutable): \${varResults.PI}
const object (mutable content): \${JSON.stringify(varResults.user)}\`
  );

  // Demo Arrow Functions
  const arrowResults = demoArrowFunctions();
  addOutput(
    "2. Arrow Functions",
    "Perbandingan fungsi reguler dan arrow functions",
    \`Regular function: \${arrowResults.regularSum}
Arrow function: \${arrowResults.arrowSum}
Short arrow: \${arrowResults.shortArrowSum}
No params: \${arrowResults.sayHello}
Single param: \${arrowResults.square}\`
  );

  // Demo Template Literals
  const templateResults = demoTemplateLiterals();
  addOutput(
    "3. Template Literals",
    "String concatenation vs template literals",
    \`Old way: \${templateResults.oldWay}
New way: \${templateResults.newWay}
With expression: \${templateResults.expression}
Multi-line: \${templateResults.multiLine}\`
  );
}`}</CodeBlock>

<p>Testing</p>

<p>Buka index.html di browser dan klik tombol "Run Demo".Kalianseharusnya melihat output dari ketiga demo yang menunjukkan perbedaan antara cara lama dan cara baru menulis JavaScript.</p>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Coba ubah nilai const dan lihat error yang muncul</li>
  <li>Bandingkan behavior var di dalam dan luar block</li>
  <li>Buat arrow function dengan berbagai sintaks</li>
  <li>Gunakan template literals untuk membuat HTML string</li>
</ul>

<p>Setup Project</p>

<p>Membuat struktur project dan file dasar untuk JavaScript Next Gen</p>

<p>Destructuring dan Operators</p>

<p>Memahami destructuring, spread operator, dan rest parameter di JavaScript ES6+</p>


<h3 id="destructuring-dan-operators">Destructuring dan Operators</h3>
<p>Memahami destructuring, spread operator, dan rest parameter di JavaScript ES6+</p>


<h3 id="destructuring">Destructuring</h3>
<p>Destructuring adalah cara untuk mengekstrak nilai dari array atau properti dari objek ke dalam variabel yang terpisah dengan sintaks yang ringkas.</p>


<h3 id="object-destructuring">Object Destructuring</h3>
<CodeBlock language="">{`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Old way
const firstName = person.firstName;
const lastName = person.lastName;

// Destructuring
const { firstName, lastName } = person;`}</CodeBlock>

<CodeBlock language="">{`const person = {
  firstName: "John",
  lastName: "Doe"
};

// Destructuring dengan nama variabel baru
const { firstName: fName, lastName: lName } = person;
console.log(fName); // "John"`}</CodeBlock>

<CodeBlock language="">{`const person = {
  firstName: "John",
  lastName: "Doe"
};

// Dengan nilai default
const { firstName, hobby = "coding" } = person;
console.log(hobby); // "coding"`}</CodeBlock>

<CodeBlock language="">{`const person = {
  name: "John",
  address: {
    city: "Jakarta",
    postalCode: "12345"
  }
};

// Nested destructuring
const { address: { city, postalCode } } = person;`}</CodeBlock>


<h3 id="array-destructuring">Array Destructuring</h3>
<CodeBlock language="">{`const colors = ["red", "green", "blue"];

// Old way
const first = colors[0];
const second = colors[1];

// Destructuring
const [first, second] = colors;`}</CodeBlock>

<CodeBlock language="">{`const colors = ["red", "green", "blue", "yellow"];

// Skip elements dengan koma
const [, , thirdColor] = colors;
console.log(thirdColor); // "blue"`}</CodeBlock>

<CodeBlock language="">{`const numbers = [1, 2, 3, 4, 5];

// Rest pattern
const [first, second, ...rest] = numbers;
console.log(rest); // [3, 4, 5]`}</CodeBlock>

<CodeBlock language="">{`let a = 1;
let b = 2;

// Swap variables
[a, b] = [b, a];
console.log(a, b); // 2, 1`}</CodeBlock>


<h3 id="implementasi-destructuring">Implementasi Destructuring</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Destructuring
// ----------------------------
export function demoDestructuring() {
  // Object destructuring
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    address: {
      city: "Jakarta",
      postalCode: "12345"
    }
  };

  // Basic destructuring
  const { firstName, lastName } = person;

  // Destructuring dengan nama variabel baru
  const { firstName: fName, lastName: lName } = person;

  // Destructuring dengan nilai default
  const { hobby = "coding" } = person;

  // Nested destructuring
  const { address: { city, postalCode } } = person;

  // Array destructuring
  const colors = ["red", "green", "blue", "yellow", "purple"];

  // Basic array destructuring
  const [firstColor, secondColor] = colors;

  // Skip elements
  const [, , thirdColor] = colors;

  // Rest pattern dalam array destructuring
  const [primary, secondary, ...restColors] = colors;

  // Swap variables menggunakan destructuring
  let a = 1;
  let b = 2;
  [a, b] = [b, a];

  return {
    objectBasic: { firstName, lastName },
    objectRenamed: { fName, lName },
    objectDefault: hobby,
    objectNested: { city, postalCode },
    arrayBasic: { firstColor, secondColor },
    arraySkipped: thirdColor,
    arrayRest: { primary, secondary, restColors },
    swapped: { a, b }
  };
}`}</CodeBlock>

<p>Use Cases</p>

<p>Destructuring sangat berguna untuk:</p>

<ul>
  <li>Mengekstrak parameter dari objek function</li>
  <li>Mengambil data dari API response</li>
  <li>Swap variabel tanpa variabel temporary</li>
  <li>Import hanya bagian tertentu dari module</li>
</ul>


<h3 id="spread-dan-rest-operators">Spread dan Rest Operators</h3>
<p>Operator ... (tiga titik) dapat berfungsi sebagai spread operator atau rest parameter tergantung konteksnya.</p>


<h3 id="spread-operator">Spread Operator</h3>
<p>Spread operator digunakan untuk "membuka" atau "menyebar" elemen array atau objek.</p>

<CodeBlock language="">{`const numbers = [1, 2, 3];

// Copy array
const numbersCopy = [...numbers];

// Merge arrays
const moreNumbers = [...numbers, 4, 5];
const combined = [...numbers, ...moreNumbers];

// Spread sebagai argument
Math.max(...numbers); // 3`}</CodeBlock>

<CodeBlock language="">{`const person = { name: "John", age: 30 };

// Copy object
const personCopy = { ...person };

// Merge objects
const employee = {
  ...person,
  company: "Tech Co",
  age: 31  // Override property
};`}</CodeBlock>


<h3 id="rest-parameter">Rest Parameter</h3>
<p>Rest parameter mengumpulkan argumen yang tersisa ke dalam array.</p>

<CodeBlock language="">{`// Rest parameter dalam function
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4, 5); // 15

// Rest dengan parameter reguler
function process(first, second, ...rest) {
  console.log(first);  // "a"
  console.log(second); // "b"
  console.log(rest);   // ["c", "d", "e"]
}

process("a", "b", "c", "d", "e");`}</CodeBlock>


<h3 id="implementasi-spread-dan-rest">Implementasi Spread dan Rest</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Spread dan Rest Operators
// ----------------------------
export function demoSpreadRest() {
  // Spread operator dengan array
  const numbers = [1, 2, 3];
  const moreNumbers = [...numbers, 4, 5];

  // Copy array dengan spread
  const numbersCopy = [...numbers];

  // Merge arrays
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = [...array1, ...array2];

  // Spread operator dengan objek
  const person = {
    name: "John",
    age: 30
  };

  // Copy objek
  const personCopy = { ...person };

  // Extend objek
  const extendedPerson = {
    ...person,
    email: "john@example.com",
    age: 31 // Override properti yang ada
  };

  // Rest parameter dalam fungsi
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  // Rest parameter dengan parameter reguler
  function process(first, second, ...rest) {
    return {
      first,
      second,
      rest
    };
  }

  return {
    spreadArray: moreNumbers,
    copyArray: numbersCopy,
    mergedArrays: mergedArray,
    spreadObject: extendedPerson,
    restSum: sum(1, 2, 3, 4, 5),
    restProcess: process("a", "b", "c", "d", "e")
  };
}`}</CodeBlock>


<h3 id="perbedaan-spread-vs-rest">Perbedaan Spread vs Rest</h3>
<p>Shallow Copy</p>

<p>Spread operator melakukan shallow copy. Nested objects/arrays masih berbagi referensi. Untuk deep copy, gunakan methods seperti structuredClone() atau library seperti Lodash.</p>


<h3 id="update-mainjs">Update main.js</h3>
<p>Update js/main.js untuk menjalankan demo baru:</p>

<CodeBlock language="">{`// Update import
import { 
  demoVariables, 
  demoArrowFunctions, 
  demoTemplateLiterals, 
  demoDestructuring, 
  demoSpreadRest 
} from './app.js';

// Tambahkan ke fungsi runAllDemos
function runAllDemos() {
  // ... demo sebelumnya ...

  // Demo Destructuring
  const destructuringResults = demoDestructuring();
  addOutput(
    "4. Destructuring",
    "Ekstraksi nilai dari objek dan array",
    \`Object basic: \${JSON.stringify(destructuringResults.objectBasic)}
Object renamed: \${JSON.stringify(destructuringResults.objectRenamed)}
Object default: \${destructuringResults.objectDefault}
Object nested: \${JSON.stringify(destructuringResults.objectNested)}
Array basic: \${JSON.stringify(destructuringResults.arrayBasic)}
Array skipped: \${destructuringResults.arraySkipped}
Array with rest: \${JSON.stringify(destructuringResults.arrayRest)}
Swapped variables: \${JSON.stringify(destructuringResults.swapped)}\`
  );

  // Demo Spread dan Rest Operators
  const spreadRestResults = demoSpreadRest();
  addOutput(
    "5. Spread dan Rest Operators",
    "Penggunaan ... untuk array dan objek",
    \`Spread in array: \${JSON.stringify(spreadRestResults.spreadArray)}
Copy array: \${JSON.stringify(spreadRestResults.copyArray)}
Merged arrays: \${JSON.stringify(spreadRestResults.mergedArrays)}
Spread in object: \${JSON.stringify(spreadRestResults.spreadObject)}
Rest in function (sum): \${spreadRestResults.restSum}
Rest with regular params: \${JSON.stringify(spreadRestResults.restProcess)}\`
  );
}`}</CodeBlock>


<h3 id="praktik-terbaik">Praktik Terbaik</h3>
<ul>
  <li>Destructuring di Parameter Function</li>
</ul>

<CodeBlock language="">{`// Good
function displayUser({ name, age, email }) {
  console.log(\`\${name}, \${age}, \${email}\`);
}

// Lebih baik dari
function displayUser(user) {
  console.log(\`\${user.name}, \${user.age}, \${user.email}\`);
}`}</CodeBlock>

<ul>
  <li>Spread untuk Immutability</li>
</ul>

<CodeBlock language="">{`// Menghindari mutasi langsung
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, newProp: value };`}</CodeBlock>

<ul>
  <li>Rest untuk Flexible Functions</li>
</ul>

<CodeBlock language="">{`function createMessage(greeting, ...names) {
  return \`\${greeting} \${names.join(', ')}!\`;
}`}</CodeBlock>

<p>Performance</p>

<p>Spread operator sangat efisien untuk array/object kecil hingga menengah. Untuk data yang sangat besar, pertimbangkan methods alternatif seperti Object.assign() atau operasi manual.</p>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Destructure object dengan nested properties minimal 3 level</li>
  <li>Buat function yang menerima rest parameters dan mengembalikan statistik (min, max, average)</li>
  <li>Merge 3 objects dengan spread operator dan override beberapa properties</li>
  <li>Gunakan destructuring dalam loop for...of</li>
</ul>

<p>Let, Const, dan Arrow Functions</p>

<p>Memahami deklarasi variabel modern dan arrow functions di JavaScript ES6+</p>

<p>Classes dan Object Literals</p>

<p>Memahami default parameters, ES6 classes, dan enhanced object literals</p>


<h3 id="classes-dan-object-literals">Classes dan Object Literals</h3>
<p>Memahami default parameters, ES6 classes, dan enhanced object literals</p>


<h3 id="default-parameters">Default Parameters</h3>
<p>Default parameters memungkinkanKalianmenentukan nilai default untuk parameter function yang tidak diberikan atau undefined.</p>


<h3 id="perbandingan-dengan-es5">Perbandingan dengan ES5</h3>
<CodeBlock language="">{`// Cara lama dengan OR operator
function greet(name, greeting) {
  name = name || "Guest";
  greeting = greeting || "Hello";
  return greeting + ", " + name + "!";
}`}</CodeBlock>

<CodeBlock language="">{`// Dengan default parameters
function greet(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}`}</CodeBlock>

<p>Keuntungan Default Parameters</p>

<ul>
  <li>Lebih jelas dan ekspresif</li>
  <li>Dapat menggunakan nilai falsy (0, "", false) tanpa di-override</li>
  <li>Dapat menggunakan ekspresi sebagai default value</li>
  <li>Dapat mereferensi parameter sebelumnya</li>
</ul>


<h3 id="implementasi-default-parameters">Implementasi Default Parameters</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Default Parameters
// ----------------------------
export function demoDefaultParams() {
  // Cara lama (ES5)
  function greetOld(name, greeting) {
    name = name || "Guest";
    greeting = greeting || "Hello";
    return \`\${greeting}, \${name}!\`;
  }

  // Dengan default parameters (ES6)
  function greet(name = "Guest", greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
  }

  // Default parameters dengan ekspresi
  function createUser(name, role = "user", createdAt = new Date().toISOString()) {
    return { name, role, createdAt };
  }

  // Default parameters bisa menggunakan parameter sebelumnya
  function createOrder(product, quantity = 1, price, total = price * quantity) {
    return { product, quantity, price, total };
  }

  return {
    oldWay: greetOld(),
    oldWayParams: greetOld("John", "Hi"),
    newWay: greet(),
    newWayParams: greet("John", "Hi"),
    withExpression: createUser("Alice"),
    usingPrevious: createOrder("Laptop", 2, 1000000)
  };
}`}</CodeBlock>


<h3 id="es6-classes">ES6 Classes</h3>
<p>Classes di ES6 menyediakan sintaks yang lebih bersih untuk membuat objek dan menangani inheritance.</p>


<h3 id="sintaks-dasar-class">Sintaks Dasar Class</h3>
<CodeBlock language="">{`class User {
  // Constructor
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  // Method
  getInfo() {
    return \`\${this.name} (\${this.email})\`;
  }

  // Getter
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Setter
  set birthYear(year) {
    this._birthYear = year;
  }

  // Static method
  static create(name, email) {
    return new User(name, email);
  }
}`}</CodeBlock>


<h3 id="inheritance-dengan-extends">Inheritance dengan extends</h3>
<CodeBlock language="">{`class Admin extends User {
  constructor(name, email, role = "admin") {
    super(name, email); // Panggil constructor parent
    this.role = role;
  }

  // Override method
  getInfo() {
    return \`\${super.getInfo()} - \${this.role}\`;
  }

  // Method baru
  hasAccess(module) {
    return true;
  }
}`}</CodeBlock>


<h3 id="implementasi-classes">Implementasi Classes</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Classes
// ----------------------------
export function demoClasses() {
  // Definisi class
  class User {
    // Constructor
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.createdAt = new Date();
    }
    
    // Methods
    getInfo() {
      return \`\${this.name} (\${this.email})\`;
    }
    
    getCreatedDate() {
      return this.createdAt.toLocaleDateString();
    }
  }

  // Inheritance
  class Admin extends User {
    constructor(name, email, role = "admin") {
      // Memanggil constructor parent class
      super(name, email);
      this.role = role;
    }
    
    // Override method
    getInfo() {
      return \`\${this.name} (\${this.email}) - \${this.role}\`;
    }
    
    // Admin method
    hasAccess(module) {
      return true; // Untuk contoh, admin selalu punya akses
    }
  }

  // Instances
  const user = new User("John Doe", "john@example.com");
  const admin = new Admin("Admin User", "admin@example.com");

  return {
    user: {
      info: user.getInfo(),
      createdDate: user.getCreatedDate()
    },
    admin: {
      info: admin.getInfo(),
      createdDate: admin.getCreatedDate(),
      hasAccess: admin.hasAccess("dashboard")
    },
    isUserInstance: user instanceof User,
    isAdminInstance: admin instanceof User // true karena inheritance
  };
}`}</CodeBlock>

<p>Class vs Prototype</p>

<p>Classes di JavaScript adalah syntactic sugar di atas prototype-based inheritance yang sudah ada. Di bawah hood, mereka tetap menggunakan prototypes, tetapi dengan sintaks yang lebih familiar bagi developer dari bahasa OOP lain.</p>


<h3 id="enhanced-object-literals">Enhanced Object Literals</h3>
<p>ES6 memperkenalkan beberapa peningkatan pada object literals yang membuat kode lebih ringkas.</p>


<h3 id="fitur-fitur-enhanced-object-literals">Fitur-fitur Enhanced Object Literals</h3>
<CodeBlock language="">{`const name = "John";
const age = 30;

// Old way
const person = {
  name: name,
  age: age
};

// Property shorthand
const person = {
  name,
  age
};`}</CodeBlock>

<CodeBlock language="">{`// Old way
const obj = {
  sayHello: function() {
    return "Hello!";
  }
};

// Method shorthand
const obj = {
  sayHello() {
    return "Hello!";
  }
};`}</CodeBlock>

<CodeBlock language="">{`const prefix = "user";
const id = 123;

// Computed property names
const userData = {
  [\`\${prefix}_id\`]: id,
  [\`\${prefix}_name\`]: "john_doe",
  [Date.now()]: "timestamp"
};`}</CodeBlock>


<h3 id="implementasi-enhanced-object-literals">Implementasi Enhanced Object Literals</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Enhanced Object Literals
// ----------------------------
export function demoObjectLiterals() {
  // Property shorthand
  const name = "John";
  const age = 30;

  // Cara lama
  const oldPerson = {
    name: name,
    age: age,
    sayHello: function() {
      return "Hello!";
    }
  };

  // Object literal modern (ES6)
  const newPerson = {
    name,
    age,
    // Method shorthand
    sayHello() {
      return "Hello!";
    },
    // Computed property names
    ["skill_" + 1]: "JavaScript",
    ["skill_" + 2]: "React"
  };

  // Combining with other features
  const prefix = "user";
  const userData = {
    [\`\${prefix}_id\`]: 123,
    [\`\${prefix}_name\`]: "john_doe",
    [Date.now()]: "timestamp"
  };

  return {
    oldWay: oldPerson,
    newWay: newPerson,
    methods: {
      old: oldPerson.sayHello(),
      new: newPerson.sayHello()
    },
    computedProps: {
      skill1: newPerson.skill_1,
      skill2: newPerson.skill_2
    },
    dynamicProps: userData
  };
}`}</CodeBlock>


<h3 id="update-mainjs">Update main.js</h3>
<p>Update js/main.js untuk menjalankan demo baru:</p>

<CodeBlock language="">{`// Update import
import { 
  demoVariables, 
  demoArrowFunctions, 
  demoTemplateLiterals, 
  demoDestructuring, 
  demoSpreadRest,
  demoDefaultParams,
  demoClasses,
  demoObjectLiterals
} from './app.js';

// Tambahkan ke fungsi runAllDemos
function runAllDemos() {
  // ... demo sebelumnya ...

  // Demo Default Parameters
  const defaultParamsResults = demoDefaultParams();
  addOutput(
    "6. Default Parameters",
    "Nilai default untuk parameter fungsi",
    \`Old way: \${defaultParamsResults.oldWay}
Old way with params: \${defaultParamsResults.oldWayParams}
New way: \${defaultParamsResults.newWay}
New way with params: \${defaultParamsResults.newWayParams}
With expression: \${JSON.stringify(defaultParamsResults.withExpression)}
Using previous params: \${JSON.stringify(defaultParamsResults.usingPrevious)}\`
  );

  // Demo Classes
  const classesResults = demoClasses();
  addOutput(
    "7. Classes",
    "Penggunaan class dan inheritance",
    \`User: \${classesResults.user.info}
User created: \${classesResults.user.createdDate}
Admin: \${classesResults.admin.info}
Admin created: \${classesResults.admin.createdDate}
Admin has access: \${classesResults.admin.hasAccess}
user instanceof User: \${classesResults.isUserInstance}
admin instanceof User: \${classesResults.isAdminInstance}\`
  );

  // Demo Enhanced Object Literals
  const objectLiteralsResults = demoObjectLiterals();
  addOutput(
    "8. Enhanced Object Literals",
    "Penulisan objek yang lebih ringkas",
    \`Property shorthand: \${JSON.stringify(objectLiteralsResults.newWay)}
Method shorthand: \${objectLiteralsResults.methods.new}
Computed properties: \${JSON.stringify(objectLiteralsResults.computedProps)}
Dynamic properties: \${JSON.stringify(objectLiteralsResults.dynamicProps)}\`
  );
}`}</CodeBlock>


<h3 id="praktik-terbaik">Praktik Terbaik</h3>

<h3 id="1-gunakan-default-parameters">1. Gunakan Default Parameters</h3>
<CodeBlock language="">{`// Good
function createUser(name, role = "user", active = true) {
  return { name, role, active };
}

// Avoid
function createUser(name, role, active) {
  role = role || "user";
  active = active !== undefined ? active : true;
  return { name, role, active };
}`}</CodeBlock>


<h3 id="2-class-untuk-domain-models">2. Class untuk Domain Models</h3>
<CodeBlock language="">{`class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDiscountedPrice(discount) {
    return this.price * (1 - discount);
  }

  toString() {
    return \`\${this.name}: Rp\${this.price.toLocaleString()}\`;
  }
}`}</CodeBlock>


<h3 id="3-property-shorthand-untuk-clean-code">3. Property Shorthand untuk Clean Code</h3>
<CodeBlock language="">{`// Good - clean and concise
const user = { name, email, age };

// Avoid - redundant
const user = { name: name, email: email, age: age };`}</CodeBlock>

<p>When to Use Classes</p>

<p>Gunakan classes ketika:
-Kalian membutuhkan multiple instances dengan behavior yang sama</p>

<ul>
  <li>Inheritance diperlukan</li>
  <li>Encapsulation penting untuk domain model</li>
</ul>

<p>Hindari over-engineering dengan classes untuk simple data structures yang bisa menggunakan plain objects.</p>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat class Product dengan inheritance ke DigitalProduct dan PhysicalProduct</li>
  <li>Implementasi getter dan setter dalam class</li>
  <li>Gunakan computed property names untuk membuat object dengan dynamic keys</li>
  <li>Combine default parameters dengan destructuring dalam function parameter</li>
</ul>

<p>Destructuring dan Operators</p>

<p>Memahami destructuring, spread operator, dan rest parameter di JavaScript ES6+</p>

<p>Modern Array Methods</p>

<p>Menguasai array methods modern dan higher-order functions di JavaScript ES6+</p>


<h3 id="modern-array-methods">Modern Array Methods</h3>
<p>Menguasai array methods modern dan higher-order functions di JavaScript ES6+</p>


<h3 id="higher-order-functions">Higher-Order Functions</h3>
<p>Higher-order functions adalah fungsi yang menerima fungsi sebagai argument atau mengembalikan fungsi. Array methods modern di JavaScript sebagian besar adalah higher-order functions.</p>


<h3 id="keuntungan-array-methods-modern">Keuntungan Array Methods Modern</h3>
<ul>
  <li>Declarative: Menjelaskan apa yang ingin dilakukan, bukan bagaimana</li>
  <li>Immutable: Tidak mengubah array asli</li>
  <li>Chainable: Dapat digabungkan untuk operasi kompleks</li>
  <li>Readable: Kode lebih mudah dibaca dan dipahami</li>
</ul>


<h3 id="map-filter-dan-find">Map, Filter, dan Find</h3>

<h3 id="map-mengubah-elemen">map() - Mengubah Elemen</h3>
<p>map() membuat array baru dengan hasil transformasi setiap elemen.</p>

<CodeBlock language="">{`const numbers = [1, 2, 3, 4, 5];

// Ubah setiap elemen
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// Dengan objek
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];

const names = users.map(user => user.name);
// ["John", "Jane"]`}</CodeBlock>


<h3 id="filter-memilih-elemen">filter() - Memilih Elemen</h3>
<p>filter() membuat array baru dengan elemen yang memenuhi kondisi.</p>

<CodeBlock language="">{`const numbers = [1, 2, 3, 4, 5, 6];

// Filter bilangan genap
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4, 6]

// Filter user aktif
const activeUsers = users.filter(user => user.active);`}</CodeBlock>


<h3 id="find-mencari-elemen-tunggal">find() - Mencari Elemen Tunggal</h3>
<p>find() mengembalikan elemen pertama yang memenuhi kondisi.</p>

<CodeBlock language="">{`const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

const user = users.find(u => u.id === 2);
// { id: 2, name: "Jane" }`}</CodeBlock>


<h3 id="reduce-pisau-swiss-army">Reduce - Pisau Swiss Army</h3>
<p>reduce() adalah method paling powerful yang dapat digunakan untuk berbagai operasi agregasi.</p>

<CodeBlock language="">{`const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total + num, 0);
// 15

const product = numbers.reduce((prod, num) => prod * num, 1);
// 120`}</CodeBlock>

<CodeBlock language="">{`const numbers = [5, 2, 8, 1, 9];

const max = numbers.reduce((max, num) => 
  num > max ? num : max, numbers[0]);
// 9

const min = numbers.reduce((min, num) => 
  num < min ? num : min, numbers[0]);
// 1`}</CodeBlock>

<CodeBlock language="">{`const users = [
  { name: "John", role: "admin" },
  { name: "Jane", role: "user" },
  { name: "Bob", role: "admin" }
];

const byRole = users.reduce((acc, user) => {
  const role = user.role;
  acc[role] = acc[role] || [];
  acc[role].push(user);
  return acc;
}, {});
// { admin: [...], user: [...] }`}</CodeBlock>

<CodeBlock language="">{`const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, arr) => 
  acc.concat(arr), []);
// [1, 2, 3, 4, 5]`}</CodeBlock>


<h3 id="some-dan-every">Some dan Every</h3>

<h3 id="some-tes-jika-ada-yang-lulus">some() - Tes Jika Ada yang Lulus</h3>
<CodeBlock language="">{`const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(num => num % 2 === 0);
// true

const hasNegative = numbers.some(num => num < 0);
// false`}</CodeBlock>


<h3 id="every-tes-jika-semua-lulus">every() - Tes Jika Semua Lulus</h3>
<CodeBlock language="">{`const numbers = [2, 4, 6, 8];

const allEven = numbers.every(num => num % 2 === 0);
// true

const allPositive = numbers.every(num => num > 0);
// true`}</CodeBlock>


<h3 id="rantai-method-method-chaining">Rantai Method (Method Chaining)</h3>
<p>Gabungkan beberapa array methods untuk operasi kompleks:</p>

<CodeBlock language="">{`const users = [
  { name: "John", age: 25, active: true },
  { name: "Jane", age: 30, active: false },
  { name: "Bob", age: 22, active: true },
  { name: "Alice", age: 28, active: true }
];

// Dapatkan nama user aktif di atas 25 tahun
const result = users
  .filter(user => user.active)
  .filter(user => user.age > 25)
  .map(user => user.name);
// ["John", "Alice"]

// Hitung total umur user aktif
const totalAge = users
  .filter(user => user.active)
  .reduce((sum, user) => sum + user.age, 0);
// 75`}</CodeBlock>

<p>Tips Performa</p>

<p>Method chaining membuat kode readable, tetapi setiap method membuat iterasi baru. Untuk array besar, pertimbangkan menggunakan single reduce() atau loop tradisional untuk performa optimal.</p>


<h3 id="implementasi-array-methods">Implementasi Array Methods</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Modern Array Methods dan Higher-Order Functions
// ----------------------------
export function demoArrayMethods() {
  // Data contoh
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const users = [
    { id: 1, name: "John", age: 25, active: true },
    { id: 2, name: "Jane", age: 30, active: false },
    { id: 3, name: "Bob", age: 22, active: true },
    { id: 4, name: "Alice", age: 28, active: true },
    { id: 5, name: "Charlie", age: 35, active: false }
  ];

  // map
  const doubled = numbers.map(num => num * 2);

  // filter
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const activeUsers = users.filter(user => user.active);

  // find
  const userJane = users.find(user => user.name === "Jane");

  // some dan every
  const hasAdult = users.some(user => user.age >= 18);
  const allAdults = users.every(user => user.age >= 18);

  // reduce
  const sum = numbers.reduce((total, num) => total + num, 0);
  const oldest = users.reduce((oldest, user) => 
    user.age > oldest.age ? user : oldest, users[0]);

  // Menggabungkan methods (chaining)
  const activeUsersNames = users
    .filter(user => user.active)
    .map(user => user.name);

  const totalActiveAge = users
    .filter(user => user.active)
    .reduce((sum, user) => sum + user.age, 0);

  return {
    map: doubled,
    filter: {
      evenNumbers,
      activeUsers: activeUsers.length
    },
    find: userJane,
    some: hasAdult,
    every: allAdults,
    reduce: {
      sum,
      oldest: oldest.name
    },
    chaining: {
      activeUsersNames,
      totalActiveAge
    }
  };
}`}</CodeBlock>


<h3 id="fitur-array-lanjutan">Fitur Array Lanjutan</h3>

<h3 id="arrayfrom">Array.from()</h3>
<p>Membuat array dari iterable atau array-like objects:</p>

<CodeBlock language="">{`// Dari string
Array.from("hello"); // ["h", "e", "l", "l", "o"]

// Dengan fungsi map
Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

// Dari NodeList
const divs = Array.from(document.querySelectorAll('div'));`}</CodeBlock>


<h3 id="arrayof">Array.of()</h3>
<p>Membuat array dari arguments:</p>

<CodeBlock language="">{`Array.of(1, 2, 3); // [1, 2, 3]
Array.of("hello"); // ["hello"]`}</CodeBlock>


<h3 id="flat-dan-flatmap">flat() dan flatMap()</h3>
<CodeBlock language="">{`// Meratakan array bersarang
const nested = [1, [2, 3], [[4, 5], 6]];
nested.flat();    // [1, 2, 3, [4, 5], 6]
nested.flat(2);   // [1, 2, 3, 4, 5, 6]

// Map dan ratakan dalam satu langkah
const numbers = [1, 2, 3];
numbers.flatMap(n => [n, n * 2]); // [1, 2, 2, 4, 3, 6]`}</CodeBlock>


<h3 id="includes">includes()</h3>
<p>Cek apakah array mengandung nilai:</p>

<CodeBlock language="">{`const numbers = [1, 2, 3, 4, 5];
numbers.includes(3);    // true
numbers.includes(10);   // false
numbers.includes(3, 3); // false (mulai dari index 3)`}</CodeBlock>


<h3 id="implementasi-advanced-arrays">Implementasi Advanced Arrays</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Array Destructuring dan Spread Lanjutan
// ----------------------------
export function demoAdvancedArrays() {
  const numbers = [1, 2, 3, 4, 5];

  // Clone dan concat
  const numbersCopy = [...numbers];
  const moreNumbers = [...numbers, 6, 7, 8];
  const combinedArrays = [...numbers, ...[6, 7, 8, 9]];

  // Array.from
  const fromIterable = Array.from("hello");
  const withMapFn = Array.from(numbers, n => n * n);

  // Array.of
  const newArray = Array.of(1, "two", { three: 3 });

  // Flat dan FlatMap
  const nestedArrays = [1, [2, 3], [[4, 5], 6]];
  const flattened = nestedArrays.flat();
  const deepFlattened = nestedArrays.flat(2);

  const flatMapped = numbers.flatMap(n => [n, n * 2]);

  // Includes
  const hasThree = numbers.includes(3);

  return {
    clone: numbersCopy,
    concat: {
      moreNumbers,
      combinedArrays
    },
    arrayFrom: {
      fromIterable,
      withMapFn
    },
    arrayOf: newArray,
    flatAndFlatMap: {
      flattened,
      deepFlattened,
      flatMapped
    },
    includes: hasThree
  };
}`}</CodeBlock>


<h3 id="update-mainjs">Update main.js</h3>
<p>Update js/main.js untuk menjalankan demo baru:</p>

<CodeBlock language="">{`// Update import
import { 
  demoVariables, 
  demoArrowFunctions, 
  demoTemplateLiterals, 
  demoDestructuring, 
  demoSpreadRest,
  demoDefaultParams,
  demoClasses,
  demoObjectLiterals,
  demoArrayMethods,
  demoAdvancedArrays
} from './app.js';

// Tambahkan ke fungsi runAllDemos
function runAllDemos() {
  // ... demo sebelumnya ...

  // Demo Array Methods
  const arrayMethodsResults = demoArrayMethods();
  addOutput(
    "9. Modern Array Methods",
    "Higher-Order Functions pada array",
    \`map: \${JSON.stringify(arrayMethodsResults.map)}
filter (evenNumbers): \${JSON.stringify(arrayMethodsResults.filter.evenNumbers)}
filter (activeUsers): \${arrayMethodsResults.filter.activeUsers}
find: \${JSON.stringify(arrayMethodsResults.find)}
some (hasAdult): \${arrayMethodsResults.some}
every (allAdults): \${arrayMethodsResults.every}
reduce (sum): \${arrayMethodsResults.reduce.sum}
reduce (oldest): \${arrayMethodsResults.reduce.oldest}
chaining (activeUsersNames): \${JSON.stringify(arrayMethodsResults.chaining.activeUsersNames)}
chaining (totalActiveAge): \${arrayMethodsResults.chaining.totalActiveAge}\`
  );

  // Demo Advanced Arrays
  const advArraysResults = demoAdvancedArrays();
  addOutput(
    "10. Advanced Arrays",
    "Fitur array lanjutan",
    \`Clone: \${JSON.stringify(advArraysResults.clone)}
Concat: \${JSON.stringify(advArraysResults.concat.combinedArrays)}
Array.from: \${JSON.stringify(advArraysResults.arrayFrom.withMapFn)}
Array.of: \${JSON.stringify(advArraysResults.arrayOf)}
flat: \${JSON.stringify(advArraysResults.flatAndFlatMap.flattened)}
deepFlat: \${JSON.stringify(advArraysResults.flatAndFlatMap.deepFlattened)}
flatMap: \${JSON.stringify(advArraysResults.flatAndFlatMap.flatMapped)}
includes: \${advArraysResults.includes}\`
  );
}`}</CodeBlock>


<h3 id="tabel-perbandingan">Tabel Perbandingan</h3>

<h3 id="praktik-terbaik">Praktik Terbaik</h3>

<h3 id="1-pilih-method-yang-tepat">1. Pilih Method yang Tepat</h3>
<CodeBlock language="">{`// Baik - maksud jelas
const adults = users.filter(user => user.age >= 18);

// Hindari - tidak jelas
const adults = [];
users.forEach(user => {
  if (user.age >= 18) adults.push(user);
});`}</CodeBlock>


<h3 id="2-gunakan-chaining-dengan-bijak">2. Gunakan Chaining dengan Bijak</h3>
<CodeBlock language="">{`// Baik - rantai yang mudah dibaca
const result = users
  .filter(user => user.active)
  .map(user => user.name)
  .sort();

// Pertimbangkan refactor rantai yang panjang
const activeUsers = users.filter(user => user.active);
const names = activeUsers.map(user => user.name);
const sorted = names.sort();`}</CodeBlock>


<h3 id="3-hindari-efek-samping-dalam-methods">3. Hindari Efek Samping dalam Methods</h3>
<CodeBlock language="">{`// Buruk - efek samping
let total = 0;
numbers.map(n => {
  total += n; // Efek samping!
  return n * 2;
});

// Baik - fungsi murni
const doubled = numbers.map(n => n * 2);
const total = numbers.reduce((sum, n) => sum + n, 0);`}</CodeBlock>

<p>Kapan Menggunakan forEach</p>

<p>Gunakan forEach() hanya ketika Anda perlu efek samping (manipulasi DOM, logging, dll). Untuk transformasi data, gunakan map(), filter(), atau reduce().</p>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Implementasi fungsi groupBy menggunakan reduce()</li>
  <li>Buat fungsi untuk menghitung rata-rata dari array of objects</li>
  <li>Transform struktur array bersarang menjadi struktur flat</li>
  <li>Gabungkan filter, map, dan reduce untuk analisis data kompleks</li>
</ul>

<p>Classes dan Object Literals</p>

<p>Memahami default parameters, ES6 classes, dan enhanced object literals</p>

<p>Async Programming</p>

<p>Memahami Promise dan async/await untuk menangani operasi asinkron di JavaScript</p>


<h3 id="async-programming">Async Programming</h3>
<p>Memahami Promise dan async/await untuk menangani operasi asinkron di JavaScript</p>


<h3 id="pengenalan-asynchronous-programming">Pengenalan Asynchronous Programming</h3>
<p>JavaScript adalah single-threaded, tetapi dapat menangani operasi asinkron menggunakan event loop. Operasi seperti HTTP requests, file operations, dan timers tidak memblokir eksekusi kode lainnya.</p>


<h3 id="mengapa-perlu-async">Mengapa Perlu Async?</h3>
<ul>
  <li>Permintaan jaringan: Fetch data dari API</li>
  <li>Operasi file: Baca/tulis file</li>
  <li>Query database: Query database</li>
  <li>Timers: setTimeout, setInterval</li>
  <li>Interaksi pengguna: Event klik, scroll</li>
</ul>

<p>Callback Hell</p>

<p>Sebelum Promises, operasi async menggunakan callbacks yang bisa menjadi nested dan sulit dibaca (callback hell). ES6 Promises dan ES8 async/await mengatasi masalah ini.</p>


<h3 id="promises">Promises</h3>
<p>Promise adalah objek yang merepresentasikan penyelesaian (atau kegagalan) eventual dari operasi asinkron.</p>


<h3 id="status-promise">Status Promise</h3>

<h3 id="membuat-promise">Membuat Promise</h3>
<CodeBlock language="">{`const promise = new Promise((resolve, reject) => {
  // Operasi async
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Operasi berhasil!");
    } else {
      reject(new Error("Operasi gagal!"));
    }
  }, 1000);
});`}</CodeBlock>


<h3 id="menggunakan-promises">Menggunakan Promises</h3>
<CodeBlock language="">{`promise
  .then(result => {
    console.log(result); // "Operasi berhasil!"
  })
  .catch(error => {
    console.error(error); // Tangani error
  });`}</CodeBlock>

<CodeBlock language="">{`promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => {
    console.log("Pembersihan"); // Selalu dijalankan
  });`}</CodeBlock>

<CodeBlock language="">{`fetchUser(1)
  .then(user => {
    console.log(user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log(posts);
    return fetchComments(posts[0].id);
  })
  .then(comments => {
    console.log(comments);
  })
  .catch(error => {
    console.error(error);
  });`}</CodeBlock>


<h3 id="method-promise">Method Promise</h3>

<h3 id="promiseall">Promise.all()</h3>
<p>Menunggu semua promises selesai. Rejected jika salah satu gagal.</p>

<CodeBlock language="">{`const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then(([users, posts, comments]) => {
    // Semua resolved
    console.log(users, posts, comments);
  })
  .catch(error => {
    // Ada yang rejected
    console.error(error);
  });`}</CodeBlock>


<h3 id="promiserace">Promise.race()</h3>
<p>Resolved/rejected dengan hasil promise pertama yang selesai.</p>

<CodeBlock language="">{`const timeout = new Promise((_, reject) => 
  setTimeout(() => reject(new Error('Timeout')), 5000)
);

const fetchData = fetch('/api/data');

Promise.race([fetchData, timeout])
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</CodeBlock>


<h3 id="promiseallsettled">Promise.allSettled()</h3>
<p>Menunggu semua promises selesai, terlepas dari sukses/gagal.</p>

<CodeBlock language="">{`Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Sukses:', result.value);
      } else {
        console.log('Gagal:', result.reason);
      }
    });
  });`}</CodeBlock>


<h3 id="promiseany">Promise.any()</h3>
<p>Resolved dengan promise pertama yang berhasil.</p>

<CodeBlock language="">{`Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log('Sukses pertama:', result);
  })
  .catch(error => {
    console.log('Semua gagal');
  });`}</CodeBlock>


<h3 id="implementasi-promises">Implementasi Promises</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Promises
// ----------------------------
export function demoPromises() {
  // Simulasi operasi asinkron dengan Promise
  function fetchData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) {
          resolve({ id, name: \`User \${id}\`, success: true });
        } else {
          reject(new Error("ID tidak valid"));
        }
      }, 1000);
    });
  }

  // Penggunaan Promise dasar
  let basicPromiseResult = "Memuat...";
  fetchData(1)
    .then(data => {
      basicPromiseResult = \`Sukses: \${JSON.stringify(data)}\`;
      document.getElementById('promise-basic').textContent = basicPromiseResult;
    })
    .catch(err => {
      basicPromiseResult = \`Error: \${err.message}\`;
      document.getElementById('promise-basic').textContent = basicPromiseResult;
    });

  // Promise chaining
  let chainResult = "Memuat...";
  fetchData(2)
    .then(user => {
      chainResult = \`Dapat user: \${user.name}\`;
      return fetchData(3); // Kembalikan promise lain
    })
    .then(secondUser => {
      chainResult += \` dan \${secondUser.name}\`;
      document.getElementById('promise-chain').textContent = chainResult;
    })
    .catch(err => {
      chainResult = \`Error: \${err.message}\`;
      document.getElementById('promise-chain').textContent = chainResult;
    });

  // Promise.all
  let allResult = "Memuat...";
  Promise.all([fetchData(4), fetchData(5), fetchData(6)])
    .then(results => {
      allResult = \`Semua selesai: \${results.map(r => r.name).join(', ')}\`;
      document.getElementById('promise-all').textContent = allResult;
    })
    .catch(err => {
      allResult = \`Error di salah satu: \${err.message}\`;
      document.getElementById('promise-all').textContent = allResult;
    });

  // Promise.race
  let raceResult = "Memuat...";
  Promise.race([
    fetchData(7),
    fetchData(8),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Timeout")), 1500))
  ])
    .then(winner => {
      raceResult = \`Pemenang race: \${winner.name}\`;
      document.getElementById('promise-race').textContent = raceResult;
    })
    .catch(err => {
      raceResult = \`Error race: \${err.message}\`;
      document.getElementById('promise-race').textContent = raceResult;
    });

  // Buat elemen untuk update promise
  const outputDiv = document.createElement('div');
  outputDiv.className = 'promise-outputs';

  const createPromiseElement = (id, label) => {
    const el = document.createElement('div');
    el.className = 'promise-result';
    el.innerHTML = \`<strong>\${label}:</strong> <span id="\${id}">Memuat...</span>\`;
    outputDiv.appendChild(el);
  };

  createPromiseElement('promise-basic', 'Promise Dasar');
  createPromiseElement('promise-chain', 'Promise Chain');
  createPromiseElement('promise-all', 'Promise.all');
  createPromiseElement('promise-race', 'Promise.race');

  return outputDiv;
}`}</CodeBlock>


<h3 id="asyncawait">Async/Await</h3>
<p>Async/await adalah syntactic sugar di atas Promises yang membuat kode async terlihat dan berperilaku seperti kode synchronous.</p>


<h3 id="sintaks-dasar">Sintaks Dasar</h3>
<CodeBlock language="">{`// Fungsi harus ditandai dengan 'async'
async function fetchUser(id) {
  // 'await' menghentikan eksekusi sampai promise resolved
  const response = await fetch(\`/api/users/\${id}\`);
  const user = await response.json();
  return user;
}`}</CodeBlock>


<h3 id="penanganan-error-dengan-trycatch">Penanganan Error dengan try/catch</h3>
<CodeBlock language="">{`async function fetchUserSafe(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    
    if (!response.ok) {
      throw new Error('User tidak ditemukan');
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}`}</CodeBlock>


<h3 id="eksekusi-paralel">Eksekusi Paralel</h3>
<CodeBlock language="">{`// Berurutan - lambat (total 3 detik)
async function fetchSequential() {
  const user = await fetchUser(1);      // 1 detik
  const posts = await fetchPosts(1);    // 1 detik
  const comments = await fetchComments(1); // 1 detik
  
  return { user, posts, comments };
}`}</CodeBlock>

<CodeBlock language="">{`// Paralel - cepat (total 1 detik)
async function fetchParallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchComments(1)
  ]);
  
  return { user, posts, comments };
}`}</CodeBlock>

<p>Berurutan vs Paralel</p>

<p>Gunakan berurutan (await berturut-turut) ketika operasi kedua bergantung pada hasil operasi pertama. Gunakan paralel (Promise.all) ketika operasi independen untuk performa lebih baik.</p>


<h3 id="implementasi-asyncawait">Implementasi Async/Await</h3>
<p>Tambahkan ke js/app.js:</p>

<CodeBlock language="">{`// ----------------------------
// Async/Await
// ----------------------------
export function demoAsyncAwait() {
  // Simulasi API call
  function fetchUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) {
          resolve({ 
            id, 
            name: \`User \${id}\`, 
            email: \`user\${id}@example.com\` 
          });
        } else {
          reject(new Error("ID user tidak valid"));
        }
      }, 1000);
    });
  }

  function fetchUserPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Post 1", body: "Konten untuk post 1" },
          { id: 2, title: "Post 2", body: "Konten untuk post 2" },
        ]);
      }, 800);
    });
  }

  // Menggunakan async/await
  async function getUserData(id) {
    try {
      const user = await fetchUser(id);
      const posts = await fetchUserPosts(user.id);
      return {
        user,
        posts,
        success: true
      };
    } catch (error) {
      return {
        error: error.message,
        success: false
      };
    }
  }

  // Eksekusi paralel dengan async/await
  async function getMultipleUsers(ids) {
    try {
      // Jalankan promises secara paralel
      const userPromises = ids.map(id => fetchUser(id));
      const users = await Promise.all(userPromises);
      
      // Dapatkan posts untuk semua user secara paralel
      const postPromises = users.map(user => fetchUserPosts(user.id));
      const allPosts = await Promise.all(postPromises);
      
      // Gabungkan hasil
      return users.map((user, i) => ({
        user,
        posts: allPosts[i]
      }));
    } catch (error) {
      return { error: error.message };
    }
  }

  // Buat elemen untuk menampilkan hasil
  const outputDiv = document.createElement('div');
  outputDiv.className = 'async-outputs';

  // Contoh async/await dasar
  const basicAsyncResult = document.createElement('div');
  basicAsyncResult.innerHTML = '<strong>User Tunggal:</strong> Memuat...';
  basicAsyncResult.className = 'async-result';
  outputDiv.appendChild(basicAsyncResult);

  // Contoh async/await paralel
  const parallelAsyncResult = document.createElement('div');
  parallelAsyncResult.innerHTML = '<strong>Beberapa User:</strong> Memuat...';
  parallelAsyncResult.className = 'async-result';
  outputDiv.appendChild(parallelAsyncResult);

  // Jalankan dan update UI
  getUserData(42).then(result => {
    if (result.success) {
      basicAsyncResult.innerHTML = \`
        <strong>User Tunggal:</strong> \${result.user.name} | 
        Posts: \${result.posts.length}
      \`;
    } else {
      basicAsyncResult.innerHTML = \`<strong>Error:</strong> \${result.error}\`;
    }
  });

  getMultipleUsers([101, 102, 103]).then(results => {
    if (!results.error) {
      parallelAsyncResult.innerHTML = \`
        <strong>Beberapa User:</strong> 
        \${results.map(r => r.user.name).join(', ')} |
        Total posts: \${results.reduce((sum, r) => sum + r.posts.length, 0)}
      \`;
    } else {
      parallelAsyncResult.innerHTML = \`<strong>Error:</strong> \${results.error}\`;
    }
  });

  return outputDiv;
}`}</CodeBlock>


<h3 id="update-mainjs">Update main.js</h3>
<p>Update js/main.js untuk menjalankan demo async:</p>

<CodeBlock language="">{`// Update import
import { 
  demoVariables, 
  demoArrowFunctions, 
  demoTemplateLiterals, 
  demoDestructuring, 
  demoSpreadRest,
  demoDefaultParams,
  demoClasses,
  demoObjectLiterals,
  demoArrayMethods,
  demoAdvancedArrays,
  demoPromises,
  demoAsyncAwait
} from './app.js';

// Tambahkan ke fungsi runAllDemos
function runAllDemos() {
  // ... demo sebelumnya ...

  // Demo Promises
  addOutput(
    "11. Promises",
    "Penanganan operasi asinkron dengan Promise",
    ""
  );
  const promiseOutput = demoPromises();
  document.querySelector('.output-item:last-child .result').appendChild(promiseOutput);

  // Demo Async/Await
  addOutput(
    "12. Async/Await",
    "Penanganan operasi asinkron dengan syntax yang lebih bersih",
    ""
  );
  const asyncOutput = demoAsyncAwait();
  document.querySelector('.output-item:last-child .result').appendChild(asyncOutput);
}`}</CodeBlock>


<h3 id="perbandingan-callbacks-vs-promises-vs-asyncawait">Perbandingan: Callbacks vs Promises vs Async/Await</h3>
<CodeBlock language="">{`// Callback hell
fetchUser(1, (error, user) => {
  if (error) return console.error(error);
  
  fetchPosts(user.id, (error, posts) => {
    if (error) return console.error(error);
    
    fetchComments(posts[0].id, (error, comments) => {
      if (error) return console.error(error);
      console.log(comments);
    });
  });
});`}</CodeBlock>

<CodeBlock language="">{`// Promise chain
fetchUser(1)
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(error => console.error(error));`}</CodeBlock>

<CodeBlock language="">{`// Async/await - paling mudah dibaca
async function getData() {
  try {
    const user = await fetchUser(1);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    console.log(comments);
  } catch (error) {
    console.error(error);
  }
}`}</CodeBlock>


<h3 id="praktik-terbaik">Praktik Terbaik</h3>

<h3 id="1-selalu-tangani-error">1. Selalu Tangani Error</h3>
<CodeBlock language="">{`// Baik
async function fetchData() {
  try {
    const data = await fetch('/api/data');
    return await data.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// Hindari
async function fetchData() {
  const data = await fetch('/api/data'); // Error tidak tertangani
  return await data.json();
}`}</CodeBlock>


<h3 id="2-gunakan-promiseall-untuk-operasi-independen">2. Gunakan Promise.all untuk Operasi Independen</h3>
<CodeBlock language="">{`// Baik - paralel (cepat)
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
]);

// Hindari - berurutan (lambat)
const users = await fetchUsers();
const posts = await fetchPosts();`}</CodeBlock>


<h3 id="3-hindari-mencampur-promises-dan-asyncawait">3. Hindari Mencampur Promises dan Async/Await</h3>
<CodeBlock language="">{`// Baik - konsisten dengan async/await
async function getData() {
  const user = await fetchUser(1);
  const posts = await fetchPosts(user.id);
  return { user, posts };
}

// Hindari - mencampur gaya
async function getData() {
  const user = await fetchUser(1);
  return fetchPosts(user.id) // Mengembalikan promise, bukan nilai
    .then(posts => ({ user, posts }));
}`}</CodeBlock>


<h3 id="4-kembalikan-promises-dari-fungsi-async">4. Kembalikan Promises dari Fungsi Async</h3>
<CodeBlock language="">{`// Baik - return eksplisit
async function processData() {
  const data = await fetchData();
  return processResult(data);
}

// Berfungsi tapi kurang jelas
async function processData() {
  const data = await fetchData();
  processResult(data); // Return implisit undefined
}`}</CodeBlock>


<h3 id="kapan-menggunakan-apa">Kapan Menggunakan Apa?</h3>
<p>Standar Modern</p>

<p>Async/await adalah standar modern untuk operasi async di JavaScript. Gunakan ini sebagai pilihan default kecuali ada alasan khusus untuk menggunakan Promises langsung.</p>


<h3 id="testing-kode-async">Testing Kode Async</h3>
<CodeBlock language="">{`// Dengan Jest atau framework testing serupa
describe('Fungsi async', () => {
  test('fetchUser mengembalikan data user', async () => {
    const user = await fetchUser(1);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
  });
  
  test('fetchUser menangani error', async () => {
    await expect(fetchUser(-1)).rejects.toThrow('ID user tidak valid');
  });
  
  test('fetching paralel bekerja', async () => {
    const start = Date.now();
    await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
    const duration = Date.now() - start;
    
    // Harus lebih cepat dari berurutan (3+ detik)
    expect(duration).toBeLessThan(2000);
  });
});`}</CodeBlock>


<h3 id="pertimbangan-performa">Pertimbangan Performa</h3>

<h3 id="1-hindari-await-yang-tidak-perlu">1. Hindari await yang Tidak Perlu</h3>
<CodeBlock language="">{`// await tidak perlu
async function getTotal() {
  return await calculateTotal(); // await ekstra
}

// Lebih baik - return implisit
async function getTotal() {
  return calculateTotal();
}`}</CodeBlock>


<h3 id="2-gunakan-promiseall-untuk-operasi-independen">2. Gunakan Promise.all untuk Operasi Independen</h3>
<CodeBlock language="">{`// Lambat - total 3 detik
async function slow() {
  const a = await operation1(); // 1 detik
  const b = await operation2(); // 1 detik
  const c = await operation3(); // 1 detik
  return [a, b, c];
}

// Cepat - total 1 detik
async function fast() {
  const [a, b, c] = await Promise.all([
    operation1(),
    operation2(),
    operation3()
  ]);
  return [a, b, c];
}`}</CodeBlock>


<h3 id="3-pertimbangkan-caching">3. Pertimbangkan Caching</h3>
<CodeBlock language="">{`const cache = new Map();

async function fetchUserCached(id) {
  if (cache.has(id)) {
    return cache.get(id);
  }
  
  const user = await fetchUser(id);
  cache.set(id, user);
  return user;
}`}</CodeBlock>


<h3 id="dukungan-browser">Dukungan Browser</h3>
<p>Transpilasi</p>

<p>Untuk mendukung browser lama, gunakan transpiler seperti Babel dengan polyfills untuk mengkonversi async/await ke promises atau generator functions.</p>


<h3 id="ringkasan">Ringkasan</h3>

<h3 id="poin-penting">Poin Penting</h3>
<ul>
  <li>Promises mengatasi callback hell dengan chaining</li>
  <li>Async/await membuat kode async terlihat synchronous</li>
  <li>Promise.all untuk eksekusi paralel</li>
  <li>try/catch untuk penanganan error dengan async/await</li>
  <li>Selalu tangani error di kode async</li>
  <li>Lebih suka async/await untuk keterbacaan</li>
</ul>


<h3 id="langkah-selanjutnya">Langkah Selanjutnya</h3>
<ul>
  <li>Praktik dengan API nyata (fetch GitHub API, weather API, dll.)</li>
  <li>Implementasi retry logic dan pola timeout</li>
  <li>Pelajari async generators dan for-await-of</li>
  <li>Jelajahi Web Workers untuk task CPU-intensive</li>
  <li>Pelajari service workers untuk kemampuan offline</li>
</ul>


<h3 id="latihan">Latihan</h3>
<ul>
  <li>Buat fungsi yang fetch data dari beberapa endpoint dan gabungkan hasilnya</li>
  <li>Implementasi mekanisme retry dengan exponential backoff</li>
  <li>Buat loading states untuk operasi async di UI</li>
  <li>Bangun error boundary untuk error async</li>
  <li>Implementasi pagination dengan async/await</li>
  <li>Buat debounced search dengan async API calls</li>
</ul>

      <h2 id="tugas-praktikum">Tugas: Personal Dashboard (ES6+)</h2>
      <p>Buat aplikasi Personal Dashboard interaktif yang memanfaatkan fitur-fitur ES6+ yang telah dipelajari seperti module import/export, modern array methods, destructuring, spread/rest, dan Async/Await.</p>

      <h2 id="format-pengumpulan">Format Pengumpulan</h2>
      <ul>
        <li>Folder: <code>[NAMA]_[NIM]_pertemuan2</code></li>
        <li><strong>Deadline:</strong> Mengikuti instruksi asisten praktikum.</li>
      </ul>

      <SubmissionBox pertemuan={2} />
    </>
  );
}
