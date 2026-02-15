import React from 'react';
import { motion } from 'framer-motion';

export function SectionWrapper({ children, ...props }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
