# React Core Concepts Cheat Sheet

This repository documents core React concepts with working examples.

---

## 📁 Folder: `src/CORE_CONCEPTS`

### 01 - HelloWorld

- 🔹 [HelloWorld.jsx](src/CORE_CONCEPTS/01-HelloWorld/HelloWorld.jsx)  
  ➤ Functional component that returns `<h1>Hello world</h1>`

---

### 02 - Components

- 🔹 [Functional-Component.jsx](src/CORE_CONCEPTS/02-Components/Functional-Component.jsx)  
  ➤ React best practices using PascalCase + export default

- 🔹 [Class-Component.jsx](src/CORE_CONCEPTS/02-Components/Class-Component.jsx)  
  ➤ Class-based component using `render()` method

---

### 03 - JSX

- 🔹 [JSX_Example.jsx](src/CORE_CONCEPTS/03-JSX/JSX_Example.jsx)  
  ➤ Demonstrates:
  - JSX expressions with variables
  - `className` instead of `class`
  - Inline style: `style={{ key: "value" }}`
  - Fragment usage (`<>...</>`)

---

## 🧠 Notes

- **`export default`** allows importing like:
  ```js
  import HelloWorld from './HelloWorld';
