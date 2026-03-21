import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center cursor-pointer group"
    >
      <a 
        href="https://wa.me/5511970706009?text=Olá%20AmigoVet!%20Gostaria%20de%20agendar%20uma%20consulta." 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-whatsapp text-white rounded-[2rem] shadow-[0_0_30px_rgba(37,211,102,0.3)] border border-white/20 hover:scale-105 transition-transform"
      >
        <MessageCircle size={32} />
        {/* Radar ping effect */}
        <div className="absolute inset-0 bg-whatsapp rounded-[2rem] animate-ping opacity-20" />
      </a>
    </motion.div>
  );
};
