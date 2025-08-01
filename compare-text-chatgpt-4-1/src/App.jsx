
import { useState } from 'react';
import { diffWords, diffChars } from 'diff';

function DiffViewer({ oldText, newText, mode }) {
  const diff = mode === 'word' ? diffWords(oldText, newText) : diffChars(oldText, newText);
  return (
    <div className="whitespace-pre-wrap text-base bg-white dark:bg-gray-900 rounded p-4 border min-h-[120px]">
      {diff.map((part, idx) => (
        <span
          key={idx}
          className={
            part.added
              ? 'bg-green-200 text-green-800'
              : part.removed
              ? 'bg-red-200 text-red-800 line-through'
              : ''
          }
        >
          {part.value}
        </span>
      ))}
    </div>
  );
}

function App() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [mode, setMode] = useState('word');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Compare Texts</h1>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1 flex flex-col">
          <label htmlFor="textA" className="mb-2 font-medium text-gray-700 dark:text-gray-200">Text A</label>
          <textarea
            id="textA"
            className="resize-y min-h-[180px] p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Paste or type text here..."
            value={textA}
            onChange={e => setTextA(e.target.value)}
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label htmlFor="textB" className="mb-2 font-medium text-gray-700 dark:text-gray-200">Text B</label>
          <textarea
            id="textB"
            className="resize-y min-h-[180px] p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Paste or type text here..."
            value={textB}
            onChange={e => setTextB(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-gray-700 dark:text-gray-200">Diff mode:</span>
        <button
          className={`px-3 py-1 rounded ${mode === 'word' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
          onClick={() => setMode('word')}
        >
          Word
        </button>
        <button
          className={`px-3 py-1 rounded ${mode === 'char' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
          onClick={() => setMode('char')}
        >
          Character
        </button>
      </div>
      <div className="w-full max-w-5xl">
        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Diff Result</h2>
        <DiffViewer oldText={textA} newText={textB} mode={mode} />
      </div>
    </div>
  );
}

export default App;
