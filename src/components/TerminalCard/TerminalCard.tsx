import React from 'react';
import { motion } from 'framer-motion';
import styles from './TerminalCard.module.css';

interface TerminalCardProps {
  title?: string;
  children: React.ReactNode;
}

export const TerminalCard: React.FC<TerminalCardProps> = ({ title, children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.terminal}
    >
      <div className={styles.header}>
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </motion.div>
  );
};
