"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  src: string;
  href: string;
};

export default function MusicCard({ title, src, href }: Props) {
  return (
    <a
      href={href}
      className="flex flex-col items-stretch gap-6 px-2 pt-2 hover:cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ ease: "linear", duration: 0.3 }}
      >
        <Image src={src} width={360} height={360} alt="cover" />
      </motion.div>
      <p className="text-lg">CHYL - {title}</p>
    </a>
  );
}
