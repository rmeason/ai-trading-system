import React from 'react';
import TradingChart from './components/TradingChart';

function App() {
  const sampleData = [
    { time: '2024-01-01', open: 100, high: 105, low: 98, close: 102 },
    { time: '2024-01-02', open: 102, high: 107, low: 100, close: 105 },
    { time: '2024-01-03', open: 105, high: 110, low: 103, close: 107 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            AI Trading System
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <TradingChart data={sampleData} />
        </div>
      </main>
    </div>
  );
}

export default App;