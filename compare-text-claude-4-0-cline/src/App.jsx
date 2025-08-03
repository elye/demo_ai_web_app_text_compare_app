import React, { useState, useEffect } from 'react';
import * as Diff from 'diff';

function App() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [diffMode, setDiffMode] = useState('words'); // 'words' or 'chars'
  const [diffResult, setDiffResult] = useState([]);

  // Compute diff whenever text or mode changes
  useEffect(() => {
    if (textA || textB) {
      let diff;
      if (diffMode === 'words') {
        diff = Diff.diffWords(textA, textB);
      } else {
        diff = Diff.diffChars(textA, textB);
      }
      setDiffResult(diff);
    } else {
      setDiffResult([]);
    }
  }, [textA, textB, diffMode]);

  const renderDiff = () => {
    if (diffResult.length === 0) {
      return (
        <div className="text-gray-500 italic p-4">
          Enter text in both areas to see the differences
        </div>
      );
    }

    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        {diffResult.map((part, index) => {
          let className = 'diff-unchanged';
          if (part.added) {
            className = 'diff-added';
          } else if (part.removed) {
            className = 'diff-removed';
          }

          return (
            <span key={index} className={className}>
              {part.value}
            </span>
          );
        })}
      </div>
    );
  };

  const clearAll = () => {
    setTextA('');
    setTextB('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Text Compare Tool
          </h1>
          <p className="text-gray-600">
            Compare two texts and see the differences highlighted in real-time
          </p>
        </div>

        {/* Controls */}
        <div className="mb-4 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Diff Mode:
            </label>
            <select
              value={diffMode}
              onChange={(e) => setDiffMode(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="words">Word-based</option>
              <option value="chars">Character-based</option>
            </select>
          </div>
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
          >
            Clear All
          </button>
        </div>

        {/* Text Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Text A */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Text A (Original)
            </label>
            <textarea
              value={textA}
              onChange={(e) => setTextA(e.target.value)}
              placeholder="Enter or paste your first text here..."
              className="w-full h-64 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resizable-textarea font-mono text-sm"
              style={{ resize: 'both' }}
            />
            <div className="mt-2 text-xs text-gray-500">
              Characters: {textA.length} | Words: {textA.trim() ? textA.trim().split(/\s+/).length : 0}
            </div>
          </div>

          {/* Text B */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Text B (Modified)
            </label>
            <textarea
              value={textB}
              onChange={(e) => setTextB(e.target.value)}
              placeholder="Enter or paste your second text here..."
              className="w-full h-64 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resizable-textarea font-mono text-sm"
              style={{ resize: 'both' }}
            />
            <div className="mt-2 text-xs text-gray-500">
              Characters: {textB.length} | Words: {textB.trim() ? textB.trim().split(/\s+/).length : 0}
            </div>
          </div>
        </div>

        {/* Diff Result */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Differences
            </h2>
            <div className="flex gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-green-200 rounded"></span>
                Added text
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-red-200 rounded"></span>
                Removed text
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-gray-200 rounded"></span>
                Unchanged text
              </span>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            <div className="font-mono text-sm whitespace-pre-wrap">
              {renderDiff()}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Built with React and the{' '}
            <a
              href="https://www.npmjs.com/package/diff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              diff
            </a>{' '}
            library
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
