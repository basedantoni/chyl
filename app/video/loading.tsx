"use client";

import { useLayoutEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  let interval: any = null;

  useLayoutEffect(() => {
    interval = setInterval(() => {
      setProgress((currentProgress) => {
        const newProgress = currentProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 3000); // Adjust the interval as needed to control the speed of the progress bar

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-8xl font-bold text-blue-white">
        {progress.toFixed(0)}%
      </div>
    </div>
  );
}
