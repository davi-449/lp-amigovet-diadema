import { useEffect, useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const LocationSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // Brasilia TZ
      const spTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}));
      const day = spTime.getDay(); // 0 is Sunday, 1 is Monday...
      const hour = spTime.getHours();
      const mins = spTime.getMinutes();
      
      const timeF = hour + (mins/100);
      
      // Mon-Sat: 08:00 - 17:30
      if (day >= 1 && day <= 6 && timeF >= 8 && timeF < 17.30) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[700px] flex items-center bg-surface-base" id="contato">
      {/* Light Clinic Map Background */}
      <div className="absolute inset-0 z-0 bg-surface-base">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.9657494589333!2d-46.6006451!3d-23.6749071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44bd7f0e9dd1%3A0x6bd7fcbe5b7a0f79!2sAmigovet%20Cl%C3%ADnica%20Veterin%C3%A1ria%20II!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0, mixBlendMode: 'luminosity', opacity: 0.85 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none mix-blend-multiply opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-surface-base via-surface-base/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl flex justify-start">
        <div className="clinical-glass p-8 md:p-12 max-w-xl w-full rounded-[2.5rem]">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-3xl font-display font-light text-text-primary tracking-tight">Status de <span className="font-serif italic text-primary">Atendimento</span></h2>
            <div className={`px-3 py-1.5 flex items-center gap-2 rounded-full border ${isOpen ? 'border-primary text-emerald-800 bg-emerald-100' : 'border-slate-300 text-slate-600 bg-slate-100'}`}>
              <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-400'}`} />
              <span className="font-sans text-xs font-semibold tracking-wide">{isOpen ? 'Aberto Agora' : 'Fechado'}</span>
            </div>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-text-primary font-display font-bold mb-1">Localização</h4>
                <p className="text-text-secondary font-sans text-sm">R. Condé da Cunha, 27<br/>Vila Nogueira, Diadema - SP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-text-primary font-display font-bold mb-1">Horário de Funcionamento</h4>
                <p className="text-text-secondary font-sans text-sm">Segunda a Sábado — Até 17:30</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-text-primary font-display font-bold mb-1">Contato Rápido</h4>
                <p className="text-text-secondary font-sans text-sm">(11) 97070-6009</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://maps.app.goo.gl/YourGoogleMapsLink" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="glass" className="w-full">
                Como Chegar
              </Button>
            </a>
            <a href="https://wa.me/5511970706009" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="primary" className="w-full">
                Falar Agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
