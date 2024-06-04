"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useOverlay } from "@/context/LayloProvider";
import Socials from "./Socials";

export default function LayloOverlay() {
  const { isOverlayVisible, toggleOverlay } = useOverlay();

  if (isOverlayVisible) {
    return (
      <div className="absolute flex h-screen w-screen items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-20">
        <XMarkIcon
          onClick={toggleOverlay}
          className="absolute right-0 top-0 h-16 cursor-pointer bg-white stroke-black hover:bg-black hover:stroke-white z-30"
        />
        <div className="w-full flex flex-col justify-center items-center mt-24">
          <iframe
            className="w-3/4 md:w-1/4"
            src="https://laylo.com/chyl/profile/embed"
            width="100%"
            height="300"
            allowTransparency={true}
          ></iframe>
          <Socials />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
