import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

export function VaccineScroll() {
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          const pct = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0
          setProgress(pct)
          setIsDone(pct >= 98)
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed right-[-4px] md:right-4 top-1/2 -translate-y-1/2 z-40 hidden min-[480px]:flex flex-col items-center gap-2 select-none pointer-events-none md:pointer-events-auto opacity-40 md:opacity-100 mix-blend-multiply md:mix-blend-normal transition-opacity duration-300"
      style={{ touchAction: 'none' }}
      onClick={() => setShowTooltip((v) => !v)}
      aria-label={`Progresso da página: ${progress}%`}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="absolute right-12 bg-white rounded-xl shadow-xl border border-emerald-100 px-4 py-3 w-44 text-left"
          >
            <p className="text-xs font-bold text-emerald-800 mb-1">
              {isDone ? '✔ Protegido!' : `${progress}% explorado`}
            </p>
            <p className="text-[10px] text-text-secondary leading-tight">
              {isDone
                ? 'Agende a próxima vacina do seu pet. 🐾'
                : 'Continue explorando para conhecer todos os nossos serviços.'}
            </p>
            {isDone && (
              <a
                href="https://wa.me/5511970706009"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-center text-[10px] font-bold text-white bg-emerald-600 rounded-lg py-1.5 hover:bg-emerald-500 transition-colors"
              >
                Agendar agora
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Syringe SVG */}
      <div className="relative flex flex-col items-center" style={{ height: '120px', width: '24px' }}>
        <svg
          viewBox="0 0 24 140"
          className="w-6 h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Syringe barrel outline */}
          <rect x="8" y="20" width="8" height="80" rx="2" stroke="#059669" strokeWidth="1.5" />
          
          {/* Plunger lines (scale marks) */}
          {[20, 40, 60].map((y) => (
            <line key={y} x1="8" y1={y + 30} x2="16" y2={y + 30} stroke="#059669" strokeWidth="0.8" opacity="0.5" />
          ))}

          {/* Liquid fill — clips from bottom up as progress increases */}
          <clipPath id="vaccine-fill-clip">
            {/* Fill from bottom: top = 20 + (80 * (1 - progress/100)), height = 80 * progress/100 */}
            <rect
              x="8"
              y={20 + 80 * (1 - progress / 100)}
              width="8"
              height={80 * (progress / 100)}
              rx="1"
            />
          </clipPath>
          <rect x="8" y="20" width="8" height="80" rx="2" fill="#10b981" opacity="0.85" clipPath="url(#vaccine-fill-clip)" />

          {/* Needle */}
          <line x1="12" y1="100" x2="12" y2="120" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Plunger handle (hidden on mobile) */}
          <g className="hidden md:block">
            <rect x="6" y="14" width="12" height="6" rx="1.5" fill="#059669" opacity="0.8" />
            <line x1="12" y1="8" x2="12" y2="14" stroke="#059669" strokeWidth="1.5" />
            <rect x="7" y="4" width="10" height="4" rx="1" fill="#059669" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* Progress % or check */}
      <AnimatePresence mode="wait">
        {isDone ? (
          <motion.div
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="hidden md:flex w-6 h-6 rounded-full bg-emerald-500 items-center justify-center shadow-md shadow-emerald-300/50"
          >
            <Check size={12} className="text-white" strokeWidth={3} />
          </motion.div>
        ) : (
          <motion.span
            key="pct"
            className="hidden md:block text-[9px] font-bold text-emerald-700 font-sans tabular-nums"
          >
            {progress}%
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
