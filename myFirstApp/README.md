# React Core Concepts Cheat Sheet

A beginner-friendly React walkthrough with clear examples for core concepts like functional components, class components, and JSX.

---

## 📁 Folder: `src/CORE_CONCEPTS`

### 01-HelloWorld

#### 🔹 [HelloWorld.jsx](../src/CORE_CONCEPTS/01-HelloWorld/HelloWorld.jsx)
- ✅ Basic **functional component**
- ✅ Uses `export default` syntax
- ✅ Returns a simple `<h1>Hello world</h1>`

---

### 02-Components

#### 🔹 [Functional-Component.jsx](../src/CORE_CONCEPTS/02-Components/Functional-Component.jsx)
- ✅ Functional component using **PascalCase**
- ✅ React best practices in naming
- ✅ Exports the component for reuse

#### 🔹 [Class-Component.jsx](../src/CORE_CONCEPTS/02-Components/Class-Component.jsx)
- ✅ **Class-based component** extending `React.Component`
- ✅ `render()` method with `return`
- ✅ Demonstrates ES6 class component structure

---

### 03-JSX

#### 🔹 [JSX_Example.jsx](../src/CORE_CONCEPTS/03-JSX/JSX_Example.jsx)
- ✅ JSX rendered in a class component
- ✅ Demonstrates:
  - JSX with variables (`const name = "saai"`)
  - `className` usage for styling
  - Inline styles using `style={{ key: value }}`
  - React fragments `<>...</>` for multiple elements

---

## 🔁 Notes

- **`export default`**: Use this for default exports (import without `{}`).
- **JSX Syntax Tips**:
  - Use `className` instead of `class`
  - Inline styles use: `style={{ key: "value" }}`
  - Wrap multiple elements in a single root (use a `div` or `<>...</>`)
- **Component Naming**: Always use **PascalCase** (`MyComponent`, not `myComponent`)

---

## 🚀 Run the App

Inside the project root folder (like `myFirstApp`):

```bash
npm start
