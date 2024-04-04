"use client"

import { useLayoutEffect, useState } from 'react';
import Router from 'next/router';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  let interval: any = null;

  useLayoutEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, []);

  const handleRouteChangeStart = () => {
    setProgress(0);
    const startTime = performance.now();

    interval = setInterval(() => {
      const elapsedTime = performance.now() - startTime;
      const progress = (elapsedTime / 3000) * 100; // Assuming a 3-second page load time

      setProgress(Math.min(progress, 100));
    }, 100);
  };

  const handleRouteChangeComplete = () => {
    clearInterval(interval);
    setProgress(100);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-8xl font-bold text-blue-white">
        {progress.toFixed(0)}%
      </div>
    </div>
  );
}