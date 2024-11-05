import React, { useRef, useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';

const TradingChart = ({ data = [], height = 400 }) => {
  const chartContainerRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chartInstance = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: height,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#333',
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    setChart(chartInstance);

    const handleResize = () => {
      chartInstance.applyOptions({
        width: chartContainerRef.current.clientWidth
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.remove();
    };
  }, []);

  useEffect(() => {
    if (!chart || !data.length) return;

    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(data);
    
    chart.timeScale().fitContent();
  }, [chart, data]);

  return (
    <div className="w-full border rounded-lg bg-white p-4 shadow-sm">
      <div ref={chartContainerRef} />
    </div>
  );
};

export default TradingChart;