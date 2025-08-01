# Text Comparison Tool

A simple and elegant React web application for comparing two texts side by side with visual diff highlighting.

## Features

- **Side-by-side text comparison**: Two large, resizable text areas for easy input
- **Real-time diff computation**: Instantly see differences as you type or paste
- **Visual highlighting**: 
  - Green background for added text
  - Red background with strikethrough for removed text
- **Multiple diff modes**: Toggle between word-based and character-based comparison
- **Responsive design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Built with Tailwind CSS for a modern, accessible interface

## Tech Stack

- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for responsive styling
- **diff package** for text comparison algorithms

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd compare-text
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Enter text**: Type or paste text into the "Text A (Original)" and "Text B (Modified)" areas
2. **Choose comparison mode**: Select between "Word-based" or "Character-based" diff
3. **View results**: The diff will appear below showing:
   - Unchanged text in normal formatting
   - Added text highlighted in green
   - Removed text highlighted in red with strikethrough

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
