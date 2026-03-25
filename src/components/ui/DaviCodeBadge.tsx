import { motion } from 'framer-motion';

export const DaviCodeBadge = () => {
  return (
    <div className="text-center text-xs text-text-muted/60 mt-4 pt-4 border-t border-primary/5 w-full flex justify-center pb-2">
      <motion.a 
        href="https://davicode.me" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
        whileTap={{ scale: 0.95 }}
      >
        <span>Feito com <span className="text-red-500 animate-pulse">♥</span> por </span >
        <span className="font-medium text-text-main group-hover:text-primary transition-colors">DaviCode</span>
        <motion.span 
          className="inline-block"
          transition={{ duration: 0.2 }}
        >
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.span>
      </motion.a>
    </div>
  );
};
