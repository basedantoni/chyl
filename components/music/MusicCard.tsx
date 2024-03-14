"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  src: string;
};

export default function MusicCard({ title, src }: Props) {
  return (
    <div className="flex flex-col items-stretch gap-6 px-2 pt-2">
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ ease: "linear", duration: 0.3 }}
      >
        <Image src={`/img/${src}`} width={360} height={360} alt="cover" />
      </motion.div>
      <p className="text-lg">CHYL - {title}</p>
    </div>
  );
}
