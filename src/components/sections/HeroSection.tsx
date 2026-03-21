import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { FurBrush } from '../ui/FurBrush';
import { CollarTagSpin } from '../ui/CollarTagSpin';
import { PawPressure } from '../ui/PawPressure';
import heroBg from '@/assets/amigovet_hero_bg.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-dvh flex items-center pt-24 overflow-hidden bg-surface-base">
      {/* FurBrush — interactive fur layer, pointer-events on top */}
      <FurBrush className="z-[5]" />

      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply">
        <div className="absolute inset-0 bg-linear-to-b from-surface-base/50 via-surface-base/90 to-surface-base z-10" />
        <img src={heroBg} alt="AmigoVet Clínica Veterinária Médica" className="w-full h-full object-cover object-center filter contrast-125 brightness-110" />
      </div>

      <div className="container relative z-20 px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* CollarTag Badge — tap to spin and reveal contact info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20 }}
            className="mb-12 flex justify-center"
          >
            <CollarTagSpin />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-text-primary mb-8 tracking-tight leading-[1.1]"
          >
            Alta tecnologia em medicina veterinária para <span className="font-serif italic text-emerald-600 block mt-2 font-medium">quem você mais ama.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="text-lg md:text-xl text-text-secondary mb-12 font-sans max-w-2xl leading-relaxed"
          >
            Um ecossistema completo de saúde: Oncologia, Nefrologia, Exames de Imagem de alta resolução e Terapias Alternativas em um ambiente focado no bem-estar animal.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="https://wa.me/5511970706009" target="_blank" rel="noopener noreferrer">
              <PawPressure>
                <Button size="large">
                  Agendar Consulta
                </Button>
              </PawPressure>
            </a>
            <div className="flex items-center gap-4 text-left border-l border-emerald-200 pl-6 h-12">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-emerald-${i*200} flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-emerald-900" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-text-primary font-display font-bold text-sm leading-tight">4.9/5.0 Google</div>
                <div className="text-text-secondary text-xs font-sans">154 Avaliações</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
