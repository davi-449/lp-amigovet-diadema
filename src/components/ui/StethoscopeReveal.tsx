import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function StethoscopeReveal() {
  const [isActive, setIsActive] = useState(false)

  const specialties = ['Oncologia', 'Nefrologia', 'Cardiologia', 'Endocrinologia', 'Oftalmologia', 'Odontologia']

  return (
    <div
      className="w-full cursor-pointer"
      onClick={() => setIsActive((v) => !v)}
      onTouchStart={() => setIsActive((v) => !v)}
    >
      {/* EKG Line at the bottom of the card */}
      <div className="relative w-full h-12 mt-4 overflow-hidden">
        <AnimatePresence>
          {isActive ? (
            <motion.svg
              key="ekg"
              viewBox="0 0 400 48"
              preserveAspectRatio="none"
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.polyline
                points="0,24 40,24 55,24 65,4 75,44 85,24 100,24 140,24 155,24 165,4 175,44 185,24 200,24 240,24 255,24 265,4 275,44 285,24 300,24 340,24 355,24 365,4 375,44 385,24 400,24"
                fill="none"
                stroke="#059669"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              {/* Scanning glow line */}
              <motion.rect
                x={0}
                y={0}
                width="8"
                height="48"
                fill="url(#ekg-glow)"
                initial={{ x: -8 }}
                animate={{ x: 408 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.1 }}
              />
              <defs>
                <linearGradient id="ekg-glow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(16,185,129,0)" />
                  <stop offset="50%" stopColor="rgba(16,185,129,0.6)" />
                  <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                </linearGradient>
              </defs>
            </motion.svg>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex items-center"
            >
              <div className="w-full h-[1px] bg-emerald-100" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Specialties revealed in sync with EKG */}
      <div className="flex flex-wrap gap-2 mt-4 min-h-[2rem]">
        {specialties.map((spec, i) => (
          <AnimatePresence key={spec}>
            {isActive && (
              <motion.span
                initial={{ opacity: 0, y: 8, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ delay: i * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                className="px-3 py-1.5 rounded-full border border-emerald-100 bg-emerald-50/50 text-sm font-sans text-emerald-800"
              >
                {spec}
              </motion.span>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Tap hint */}
      <p className="text-xs text-text-secondary/50 font-sans mt-3 text-center animate-pulse">
        {isActive ? 'Toque para pausar' : '🩺 Toque para ver as especialidades'}
      </p>
    </div>
  )
}
