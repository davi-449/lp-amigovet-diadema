import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

interface CollarTagSpinProps {
  clinicName?: string
  address?: string
  phone?: string
  hours?: string
  className?: string
}

export function CollarTagSpin({
  clinicName = 'AmigoVet Clínica Veterinária',
  address = 'R. Crato, 39 — Diadema, SP',
  phone = '(11) 9 7070-6009',
  hours = 'Seg–Sex: 8h–19h | Sáb: 8h–14h',
  className = ''
}: CollarTagSpinProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`inline-flex flex-col items-center gap-2 cursor-pointer select-none ${className}`}
      onClick={() => setIsFlipped((f) => !f)}
      onTouchStart={() => setIsFlipped((f) => !f)}
      aria-label={isFlipped ? 'Ver nome da clínica' : 'Ver dados de contato'}
    >
      {/* Chain loop */}
      <div className="w-4 h-3 border-2 border-amber-400/60 rounded-full" />
      
      {/* Tag container — preserves 3D */}
      <div style={{ perspective: '600px' }}>
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-44 h-20"
        >
          {/* Front face */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-amber-400/80 bg-gradient-to-br from-amber-200 via-amber-100 to-yellow-50 shadow-lg shadow-amber-200/40 px-4 text-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div>
              <div className="w-2 h-2 bg-amber-400 rounded-full mx-auto mb-2 shadow-sm" />
              <p className="text-xs font-bold text-amber-900 leading-tight tracking-wide uppercase">
                {clinicName}
              </p>
            </div>
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 flex flex-col items-start justify-center gap-1 rounded-2xl border-2 border-amber-400/80 bg-gradient-to-br from-amber-200 via-amber-100 to-yellow-50 shadow-lg shadow-amber-200/40 px-3"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="flex items-center gap-1.5 text-amber-900">
              <MapPin size={10} className="flex-shrink-0" />
              <p className="text-[9px] font-medium leading-tight truncate">{address}</p>
            </div>
            <div className="flex items-center gap-1.5 text-amber-900">
              <Phone size={10} className="flex-shrink-0" />
              <p className="text-[9px] font-medium">{phone}</p>
            </div>
            <div className="flex items-center gap-1.5 text-amber-900">
              <Clock size={10} className="flex-shrink-0" />
              <p className="text-[9px] font-medium leading-tight">{hours}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tap hint */}
      <p className="text-[9px] text-text-secondary/50 font-sans uppercase tracking-widest animate-pulse">
        {isFlipped ? 'toque para voltar' : 'toque para detalhes'}
      </p>
    </div>
  )
}
