"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useOverlay } from "@/context/LayloProvider";

export default function LayloOverlay() {
  const { isOverlayVisible, toggleOverlay } = useOverlay();

  if (isOverlayVisible) {
    return (
      <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
        <XMarkIcon
          onClick={toggleOverlay}
          className="absolute right-0 top-0 h-16 cursor-pointer bg-white stroke-black hover:bg-black hover:stroke-white"
        />
        <iframe
          className="w-3/4 md:w-1/4"
          src="https://laylo.com/chyl/profile/embed"
          width="100%"
          height="580"
          allowTransparency={true}
        ></iframe>
      </div>
    );
  } else {
    return <></>;
  }
}
