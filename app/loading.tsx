"use client"

import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsedTime = performance.now() - startTime;
      const pageLoadTime = 3000; // Assuming a 3-second page load time
      const progress = (elapsedTime / pageLoadTime) * 100;

      setProgress(Math.min(progress, 100));

      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-8xl font-bold text-blue-600">
        {progress.toFixed(0)}%
      </div>
    </div>
  );
}