"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useOverlay } from "@/context/LayloProvider";
import Socials from "./Socials";

export default function LayloOverlay() {
  const { isOverlayVisible, toggleOverlay } = useOverlay();

  if (isOverlayVisible) {
    return (
      <>
        <XMarkIcon
          onClick={toggleOverlay}
          className="absolute right-0 top-0 h-16 cursor-pointer bg-white stroke-black hover:bg-black hover:stroke-white z-20"
        />
        <div className="absolute left-0 top-24 flex h-screen w-screen items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-10">
          <iframe
            className="w-3/4 md:w-1/4"
            src="https://laylo.com/chyl/profile/embed"
            width="100%"
            height="580"
            allowTransparency={true}
          ></iframe>
          <div className="absolute text-white">
            <Socials />
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
