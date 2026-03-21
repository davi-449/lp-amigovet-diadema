import { motion } from 'framer-motion';
import { Stethoscope, Activity, Flower2, Search, Dna } from 'lucide-react';
import { BentoCard } from '../ui/BentoCard';

export const ExpertiseGrid = () => {
  return (
    <section className="py-32 bg-surface-base relative z-10" id="especialidades">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-text-primary tracking-tight mb-6">
            Ecosistema de <span className="font-serif italic text-emerald-600">Diagnóstico e Cura</span>
          </h2>
          <p className="text-text-secondary font-sans max-w-2xl mx-auto text-lg">
            Nossa estrutura foi desenhada para cobrir desde a prevenção até casos da mais alta complexidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,_auto)]">
          
          {/* Especialidades Clínicas */}
          <motion.div className="md:col-span-8 flex flex-col">
            <BentoCard className="flex-1 flex flex-col justify-between group/card hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-white transition-colors duration-500">
                  <Dna size={32} strokeWidth={1.5} />
                </div>
                <span className="clinical-glass px-4 py-1 rounded-full text-xs text-primary font-display border-emerald-200 bg-white/80">Complex Care</span>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-text-primary mb-4">Especialidades Clínicas</h3>
                <p className="text-text-secondary font-sans max-w-lg mb-8 leading-relaxed">
                  Veterinários especialistas focados em patologias específicas para um direcionamento exato e tratamento efetivo.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Oncologia', 'Nefrologia', 'Cardiologia', 'Endocrinologia', 'Oftalmologia', 'Odontologia', 'Gastrologia'].map(spec => (
                    <span key={spec} className="px-3 py-1.5 rounded-full border border-emerald-100 bg-emerald-50/50 text-sm font-sans text-emerald-800">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Exames */}
          <motion.div className="md:col-span-4 flex flex-col">
            <BentoCard className="flex-1 flex flex-col justify-between bg-gradient-to-br from-white to-emerald-50">
              <Search className="w-12 h-12 text-emerald-500 mb-8 opacity-80" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Imagens & Lab</h3>
                <p className="text-text-secondary font-sans leading-relaxed">
                  Diagnóstico por imagem de alta definição. Raio-X digital, Ultrassonografia e Endoscopia in loco.
                </p>
              </div>
            </BentoCard>
          </motion.div>

          {/* Terapias Alternativas */}
          <motion.div className="md:col-span-5 flex flex-col">
            <BentoCard className="flex-1 flex flex-col justify-between">
              <Flower2 className="w-12 h-12 text-teal-500 mb-8 opacity-80" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Terapias Integrativas</h3>
                <p className="text-text-secondary font-sans leading-relaxed">
                  Cuidado holístico para controle de dor e ansiedade. Sessões guiadas de Acupuntura, Fisioterapia e Reiki.
                </p>
              </div>
            </BentoCard>
          </motion.div>

          {/* Atendimento Geral */}
          <motion.div className="md:col-span-7 flex flex-col">
            <BentoCard className="flex-1 flex flex-col justify-between md:flex-row items-center gap-8">
              <div className="flex-1">
                <Stethoscope className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-display font-bold text-text-primary mb-4">Clínica Geral & Cirurgia</h3>
                <p className="text-text-secondary font-sans leading-relaxed max-w-md">
                  A base de todo o cuidado. Check-ups, bloco cirúrgico equipado, vacinação e suporte contínuo para o dia a dia.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-full border-2 border-dashed border-emerald-200 flex items-center justify-center relative bg-emerald-50/50">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl animate-pulse" />
                <Activity className="w-16 h-16 text-primary/70" strokeWidth={1} />
              </div>
            </BentoCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
