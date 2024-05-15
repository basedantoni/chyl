'use client'

import { motion } from 'framer-motion'

export default function Template({ children, ...props } : { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}