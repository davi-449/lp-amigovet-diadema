import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost' | 'glass';
  size?: 'default' | 'large';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    // Bio-Tech styling: huge border radius, soft breathing animations
    const base = "relative inline-flex items-center justify-center font-display font-semibold transition-colors w-full sm:w-auto cursor-pointer rounded-full overflow-hidden";
    
    const sizes = {
      default: "px-8 py-4 text-sm tracking-wide",
      large: "px-10 py-5 text-base tracking-wide"
    }

    const variants = {
      primary: "bg-primary text-white hover:bg-emerald-400 shadow-[0_8px_20px_rgba(16,185,129,0.3)]",
      outline: "border border-primary/30 text-emerald-700 hover:bg-emerald-50",
      ghost: "text-text-secondary hover:text-emerald-800 hover:bg-emerald-50",
      glass: "clinical-glass text-emerald-900 hover:bg-white/80"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        // Breathing spring: very loose and organic
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children as React.ReactNode}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
