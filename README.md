# 📊 FV Dashboard

**FV Dashboard** is a modern admin dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It features a clean, responsive interface with date pickers, icon sets, and styled components—perfect for building scalable admin panels or web applications.

---

## 🚀 Tech Stack

| Tool              | Description                          |
|-------------------|--------------------------------------|
| Next.js           | React framework with SSR & routing   |
| React             | UI library for building interfaces   |
| TypeScript        | Typed JavaScript for better dev experience |
| Tailwind CSS      | Utility-first CSS framework          |
| Lucide React      | Clean and customizable icon set      |
| React DatePicker  | Date picker component                |
| date-fns          | Date utility functions               |

---


## 🛠️ Getting Started


### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`

---

## 📦 Scripts

| Command          | Description                            |
|------------------|----------------------------------------|
| `npm run dev`    | Start development server               |
| `npm run build`  | Build the project for production       |
| `npm run start`  | Run the production server              |
| `npm run lint`   | Run lint checks using ESLint           |

---

## ✅ Code Quality

This project uses **ESLint** to maintain clean and consistent code.

### Run lint

```bash
npm run lint
```

### Fix automatically

```bash
npm run lint -- --fix
```

---

## 🎨 Styling with Tailwind CSS

Tailwind CSS is configured with PostCSS and is used throughout the project using utility classes.

You can easily extend the theme or add plugins in `tailwind.config.js`.

---

## 📅 Date Handling

- **React DatePicker** is used to select dates visually.
- **date-fns** is used to handle date formatting and manipulation.

---

## 💠 Icons

The project uses [Lucide React](https://lucide.dev) icons.

Example usage:

```tsx
import { User } from 'lucide-react'

<User size={24} />
```

---

## 🌟 Features

- ⚡ Built with the latest Next.js and React versions
- 🎨 Beautiful UI with Tailwind CSS
- 📅 Interactive date selection with React DatePicker
- 📦 Icon system with Lucide
- 🧠 Type-safe with TypeScript

---

