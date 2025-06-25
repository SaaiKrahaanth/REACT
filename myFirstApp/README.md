# React Core Concepts Cheat Sheet

A beginner-friendly React walkthrough with clear examples for core concepts like functional components, class components, and JSX.

---

## 📁 Folder: `src/CORE_CONCEPTS`

### 01-HelloWorld

#### 🔹 [`HelloWorld.jsx`](./CORE_CONCEPTS/01-HelloWorld/HelloWorld.jsx)
- ✅ Basic **functional component** example
- ✅ Uses `export default` syntax
- ✅ Returns a simple `<h1>Hello world</h1>`

---

### 02-Components

#### 🔹 [`Functional-Component.jsx`](./CORE_CONCEPTS/02-Components/Functional-Component.jsx)
- ✅ Functional component using **PascalCase**
- ✅ React best practices in naming
- ✅ Exports the component for reuse

#### 🔹 [`Class-Component.jsx`](./CORE_CONCEPTS/02-Components/Class-Component.jsx)
- ✅ **Class-based component** extending `React.Component`
- ✅ `render()` method with `return` statement
- ✅ Demonstrates component structure in ES6 class style

---

### 03-JSX

#### 🔹 [`JSX_Example.jsx`](./CORE_CONCEPTS/03-JSX/JSX_Example.jsx)
- ✅ Class component rendering JSX
- ✅ Demonstrates:
  - Variables inside JSX (`const name = "saai"`)
  - `className` usage for CSS
  - Inline styles using `style={{ key: value }}`
  - Fragment `<>...</>` usage

---

## 🔁 Notes

- **`export default`**: Used for default export; import without `{}`.
- **JSX Syntax**:
  - Use `className` instead of `class`
  - Style with `style={{ key: value }}` (double curly braces)
- **PascalCase** naming is recommended for React components.

---

## 🚀 Run the App

```bash
npm start
