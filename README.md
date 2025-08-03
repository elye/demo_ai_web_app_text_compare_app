# Text Comparison React Apps – Project Overview & Comparison


This repository contains four different implementations of a text comparison tool, each built with React and Vite, and styled with Tailwind CSS. The apps allow users to compare two pieces of text side by side, with visual highlighting of differences. Each project explores different approaches and technologies, providing a useful reference for React developers.


## Projects in This Repository

### 1. compare-text-chatgpt-4-1
A modern React app using JavaScript, Vite, and Tailwind CSS. It features a clean UI, modular code, and ESLint integration for code quality.

- **Tech Stack:** React 19, Vite, Tailwind CSS, ESLint
- **Features:**
  - Two resizable text areas
  - Word/character diff highlighting
  - Responsive design
  - All logic client-side
- **Strengths:** Good code quality, modularity, and documentation
- **Areas to Improve:** No TypeScript, minimal error handling, no automated tests

### 2. compare-text-chatgpt-4-1-beast-mode
A simplified version focused on minimalism and speed. Uses React 18 and basic project structure.

- **Tech Stack:** React 18, Vite, Tailwind CSS
- **Features:**
  - Simple UI for text comparison
  - Word/character diff
- **Strengths:** Minimal dependencies, easy to understand
- **Areas to Improve:** No linting, TypeScript, or documentation; less modular code

### 3. compare-text-claude-4-0
A robust implementation using React with TypeScript, Vite, and comprehensive linting. Emphasizes code quality and scalability.

- **Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, ESLint
- **Features:**
  - Modular code with dedicated components
  - Type safety with TypeScript
  - Word/character diff, responsive UI
- **Strengths:** Best code quality, maintainability, and documentation
- **Areas to Improve:** Add error handling and automated tests

### 4. compare-text-claude-4-0-cline
A modern React app using Vite and Tailwind CSS, inspired by the Claude 4-0 approach but implemented in JavaScript. It features a clean, user-friendly UI and real-time diff visualization.

- **Tech Stack:** React 18, Vite, Tailwind CSS, Diff.js
- **Features:**
  - Side-by-side text comparison
  - Real-time word/character diff highlighting
  - Responsive, modern UI
  - Simple controls and summary
- **Strengths:** Clean UI, easy to use, minimal dependencies
- **Areas to Improve:** No TypeScript, no linting, no automated tests, no project-level README

---

## Project Comparison

| Project                             | Code Quality | Architecture | Dependencies | Security | Performance | Error Handling | Testing | Documentation | Best Practices |
|-------------------------------------|--------------|--------------|--------------|----------|-------------|----------------|---------|---------------|----------------|
| compare-text-chatgpt-4-1            | Good         | Good         | Good         | OK       | Good        | Minimal        | None    | Good          | Good           |
| compare-text-chatgpt-4-1-beast-mode | Basic        | Basic        | Minimal      | OK       | Good        | Minimal        | None    | None          | Basic          |
| compare-text-claude-4-0             | Excellent    | Excellent    | Excellent    | OK       | Excellent   | Minimal        | None    | Excellent     | Excellent      |
| compare-text-claude-4-0-cline       | Good         | Good         | Good         | OK       | Good        | Minimal        | None    | None          | Good           |

---

## Getting Started

Each project contains its own `README.md` with setup instructions. In general:

1. Navigate to the project folder:
   ```sh
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

---

## License
MIT

---

## About
These projects are intended as learning resources and references for building modern React applications with text comparison features.
