"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useOverlay } from "@/context/LayloProvider";
import { motion } from "framer-motion";
import Socials from "./Socials";
import { useMediaQuery } from "usehooks-ts";

export default function LayloOverlay() {
  const { isOverlayVisible, toggleOverlay } = useOverlay();
  const matches = useMediaQuery("(min-width: 426px)");

  if (isOverlayVisible) {
    return (
      <div className="absolute flex h-screen w-screen items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-20">
        <XMarkIcon
          onClick={toggleOverlay}
          className="absolute right-0 top-0 h-16 cursor-pointer bg-white stroke-black hover:bg-black hover:stroke-white z-30"
        />
        
        <div className="relative w-full flex flex-col justify-center items-center mt-24">
          <motion.svg
            initial={{ rotate: matches ? 45 : 69 }}
            animate={{ x: [0, 12, 0], y: [0, 6, 0] }}
            transition={{
              duration: 1.7,
              ease: "easeInOut",
              times: [0],
              repeat: Infinity,
            }}
            className="absolute top-[-50%] sm:top-[-10%] left-[8%] sm:left-[25%]" 
            width="106" 
            height="134" 
            viewBox="0 0 106 134" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 130C4 109.394 9.69747 91.1182 20.7012 73.6379C37.0194 47.7151 69.9285 23 102 23" stroke="white" stroke-width="8" stroke-linecap="round"/>
            <path d="M102 23C92.4021 25.0865 90 45.7782 90 53" stroke="white" stroke-width="8" stroke-linecap="round"/>
            <path d="M101 23C97.3335 23 91.7557 20.18 89.5062 17.3864C87.3298 14.6836 85.1783 13.1376 83.9235 9.63763C83.2536 7.76924 82.6073 5.86327 82 4" stroke="white" stroke-width="8" stroke-linecap="round"/>
          </motion.svg>
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
