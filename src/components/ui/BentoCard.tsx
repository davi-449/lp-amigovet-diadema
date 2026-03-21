import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

export const BentoCard = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={cn(
        "relative clinical-glass p-8 md:p-10 overflow-hidden group rounded-[2.5rem]",
        className
      )}
    >
      {/* Soft Hover Glow inside the card */}
      <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
