# Compare Text React App

This is a simple React web app (Vite) for comparing two texts side by side and visualizing their differences. It uses Tailwind CSS for styling and the 'diff' NPM package for computing text differences.
## Features
- Two large, resizable text areas side by side
- Diff computation (additions in green, deletions in red)
- Toggle between word-based and character-based diff
- Responsive, simple UI
- All logic is client-side

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Tailwind CSS Setup
Tailwind CSS is already configured. If you see errors about `@tailwind` rules, make sure your editor is not linting CSS before Tailwind is processed. The app will build and style correctly when running `npm run dev`.

## Customization
- Edit `src/App.jsx` to modify the UI or logic.
- Tailwind CSS is used for styling.

## License
MIT
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
