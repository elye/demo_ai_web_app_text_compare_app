import React, { useState, useCallback, useMemo } from 'react';
import { diffWords, diffChars } from 'diff';

type DiffMode = 'words' | 'chars';

interface DiffResult {
  value: string;
  added?: boolean;
  removed?: boolean;
}

const TextCompareApp: React.FC = () => {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [diffMode, setDiffMode] = useState<DiffMode>('words');

  // Compute diff based on selected mode
  const diffResult = useMemo((): DiffResult[] => {
    if (!textA && !textB) return [];
    
    const diffFn = diffMode === 'words' ? diffWords : diffChars;
    return diffFn(textA, textB);
  }, [textA, textB, diffMode]);

  const handleTextAChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextA(event.target.value);
  }, []);

  const handleTextBChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextB(event.target.value);
  }, []);

  const handleDiffModeChange = useCallback((mode: DiffMode) => {
    setDiffMode(mode);
  }, []);

  const renderDiff = () => {
    if (diffResult.length === 0) {
      return (
        <div className="text-gray-500 italic">
          Enter text in both areas to see the comparison
        </div>
      );
    }

    return (
      <div className="whitespace-pre-wrap break-words">
        {diffResult.map((part: DiffResult, index: number) => {
          let className = '';
          if (part.added) {
            className = 'bg-green-200 text-green-800';
          } else if (part.removed) {
            className = 'bg-red-200 text-red-800 line-through';
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

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Text Comparison Tool
          </h1>
          <p className="text-gray-600">
            Compare two texts side by side and see the differences highlighted
          </p>
        </header>

        {/* Text Input Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <label htmlFor="textA" className="block text-sm font-medium text-gray-700">
              Text A (Original)
            </label>
            <textarea
              id="textA"
              value={textA}
              onChange={handleTextAChange}
              placeholder="Enter or paste your first text here..."
              className="w-full h-64 p-3 border border-gray-300 rounded-md resize-y focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="textB" className="block text-sm font-medium text-gray-700">
              Text B (Modified)
            </label>
            <textarea
              id="textB"
              value={textB}
              onChange={handleTextBChange}
              placeholder="Enter or paste your second text here..."
              className="w-full h-64 p-3 border border-gray-300 rounded-md resize-y focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Diff Mode Toggle */}
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Comparison Mode:</span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleDiffModeChange('words')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  diffMode === 'words'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Word-based
              </button>
              <button
                onClick={() => handleDiffModeChange('chars')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  diffMode === 'chars'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Character-based
              </button>
            </div>
          </div>
        </div>

        {/* Diff Result */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Comparison Result
          </h2>
          <div className="bg-white border border-gray-300 rounded-md p-4 min-h-32 max-h-96 overflow-y-auto">
            {renderDiff()}
          </div>
          <div className="text-sm text-gray-500">
            <span className="inline-flex items-center mr-4">
              <span className="w-3 h-3 bg-green-200 border border-green-400 rounded mr-1"></span>
              Added text
            </span>
            <span className="inline-flex items-center">
              <span className="w-3 h-3 bg-red-200 border border-red-400 rounded mr-1"></span>
              Removed text
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCompareApp;
