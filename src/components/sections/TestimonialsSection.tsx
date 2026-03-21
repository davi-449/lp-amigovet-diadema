import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Rayanne Ribeiro",
    text: "A melhor clinica veterinária do ABC Paulista!",
  },
  {
    name: "Maria Aparecida",
    text: "Muito boa, atendimento tanto recepção e com os bichos de quatro patas. ótimo.",
  },
  {
    name: "Caio de Oliveira Millan",
    text: "Bom atendimento, bons profissionais, bons preços.",
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 relative z-10 bg-surface-raw" id="depoimentos">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white tracking-tight mb-4">
            A voz da <span className="font-serif italic text-emerald-300">nossa comunidade</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 150, damping: 20 }}
              className="bg-surface-base border border-white/5 rounded-[2rem] p-10 relative group hover:border-primary/20 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />
              
              <p className="text-text-secondary text-xl font-serif italic mb-10 min-h-[100px] leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-display font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-display font-semibold">{review.name}</h4>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
