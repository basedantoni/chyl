"use client";

import { Canvas } from "@react-three/fiber";

export default function Scene({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen">
      <Canvas gl={{ alpha: false }}>{children}</Canvas>
    </div>
  );
}
