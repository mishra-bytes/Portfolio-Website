import React from 'react';
import { motion } from 'framer-motion';

export function SectionWrapper({ children, ...props }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
