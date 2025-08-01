

import React, { useState, useMemo } from 'react';
import { diffWords, diffChars } from 'diff';

function App() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [diffMode, setDiffMode] = useState('word'); // 'word' or 'char'

  // Compute diff using useMemo for performance
  const diffResult = useMemo(() => {
    if (!textA && !textB) return [];
    if (diffMode === 'word') {
      return diffWords(textA, textB);
    } else {
      return diffChars(textA, textB);
    }
  }, [textA, textB, diffMode]);

  // Render diff with highlights
  const renderDiff = () => {
    if (!diffResult.length) {
      return <span className="text-gray-400">No difference to show.</span>;
    }
    return diffResult.map((part, idx) => {
      let className = '';
      if (part.added) className = 'bg-green-200 text-green-800';
      else if (part.removed) className = 'bg-red-200 text-red-800 line-through';
      return (
        <span key={idx} className={className}>
          {part.value}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Compare Texts (ChatGPT 4.1 Beast Mode)</h1>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-5xl">
        <div className="flex-1 flex flex-col">
          <label htmlFor="textA" className="mb-2 font-semibold">Text A</label>
          <textarea
            id="textA"
            className="resize-y min-h-[200px] max-h-[500px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:ring-4 focus-visible:ring-blue-300 bg-white text-base"
            placeholder="Paste or type text here..."
            value={textA}
            onChange={e => setTextA(e.target.value)}
            aria-label="Text A"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label htmlFor="textB" className="mb-2 font-semibold">Text B</label>
          <textarea
            id="textB"
            className="resize-y min-h-[200px] max-h-[500px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:ring-4 focus-visible:ring-blue-300 bg-white text-base"
            placeholder="Paste or type text here..."
            value={textB}
            onChange={e => setTextB(e.target.value)}
            aria-label="Text B"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <span className="font-medium">Diff mode:</span>
        <button
          className={`px-3 py-1 rounded ${diffMode === 'word' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setDiffMode('word')}
        >
          Word
        </button>
        <button
          className={`px-3 py-1 rounded ${diffMode === 'char' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setDiffMode('char')}
        >
          Character
        </button>
      </div>
      <div className="w-full max-w-5xl mt-8">
        <h2 className="font-semibold mb-2">Diff Result</h2>
        <div
          className="min-h-[80px] max-h-[320px] overflow-auto bg-white border border-gray-300 rounded p-4 text-base whitespace-pre-wrap shadow-inner"
          id="diff-output"
          tabIndex={0}
          aria-label="Diff Result"
        >
          {renderDiff()}
        </div>
      </div>
    </div>
  );
}

export default App;
