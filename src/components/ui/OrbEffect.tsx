import { motion } from 'framer-motion';

export const OrbEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-teal-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10"
      />
    </div>
  );
};
