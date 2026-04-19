# Ivan De Stefani | Cyber-Industrial Portfolio

<div align="center">
  <img src="src/assets/logo-no-background.png" alt="IDS Logo" width="200"/>
  <h3>Full Stack Embedded Developer</h3>
  <p><i>Firmware (C/C++) • Node.js • Laravel • Vue • React • React Native</i></p>
</div>

---

## 🚀 Overview

This project is a modern, high-performance portfolio application designed with a **"Cyber-Industrial"** aesthetic. It showcases a blend of hardware-inspired technical elements and modern software development practices.

- **URL:** [To be deployed]
- **Theme:** Jet Black (`#0A0A0A`), Sapphire Blue (`#0F52BA`), and Emerald Green (`#50C878`).

## 🛠 Tech Stack

- **Framework:** [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS with **CSS Modules** for scoped, maintainable styles.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid transitions and interactive components.
- **i18n:** [i18next](https://www.i18next.com/) supporting Italian, English, French, and Spanish.
- **Icons:** [Lucide React](https://lucide.dev/) for consistent, crisp iconography.

## ✨ Key Features

- **Terminal-Like Interface:** Custom `TerminalCard` components with OS-inspired headers and monospace typography.
- **Dynamic Content:** CV data is decoupled from components (stored in `src/content/`), allowing for easy updates and multi-language support.
- **Visual-First Experience:** Includes a hero banner and official brand assets with sapphire glow effects.
- **Cyber-Industrial UI:** Subtle background grids and scanline effects for an immersive technical atmosphere.
- **Fully Responsive:** Optimized for all screen sizes, from mobile to desktop.
- **PWA Ready:** Full manifest and favicon support for high-quality device integration.

## 📦 Project Structure

```text
/src
  /assets      # Brand images and banners
  /components  # Reusable UI components (e.g., TerminalCard)
  /content     # Strongly-typed CV data and portfolio registry
  /locales     # JSON translation files
  /styles      # Global CSS variables and base styles
  App.tsx      # Main application logic
  i18n.ts      # Internationalization setup
/public        # Static assets (favicons, manifest)
```

## 🛠 Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IvoDS/curriculum.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📋 Design Decisions

Detailed architectural and design choices are tracked in the [DECISIONS.md](./DECISIONS.md) file. This project strictly adheres to the [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for visual consistency.

## ✉️ Contact

- **Name:** Ivan De Stefani
- **Role:** Full Stack Embedded Developer
- **Email:** ivan.destefani@example.com (Placeholder)
- **LinkedIn:** [linkedin.com/in/ivandestefani](https://linkedin.com/in/ivandestefani)

---

<div align="center">
  <p>© 2026 IVAN DE STEFANI - BUILT_WITH_REACT_VITE</p>
</div>
