"use client";

import React, { createContext, useContext, useState } from "react";

const LayloContext = createContext<{
  isOverlayVisible: boolean;
  toggleOverlay: () => void;
}>({
  isOverlayVisible: false,
  toggleOverlay: () => {},
});

export default function LayloProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible((prevVisible) => !prevVisible);
  };

  return (
    <LayloContext.Provider value={{ isOverlayVisible, toggleOverlay }}>
      {children}
    </LayloContext.Provider>
  );
}

export const useOverlay = () => useContext(LayloContext);
