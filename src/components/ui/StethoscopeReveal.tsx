import { motion } from 'framer-motion'
import { useState } from 'react'

export function StethoscopeReveal() {
  const [isHovered, setIsHovered] = useState(false)
  
  const specialties = ['Oncologia', 'Nefrologia', 'Cardiologia', 'Endocrinologia', 'Oftalmologia', 'Odontologia']

  return (
    <div
      className="w-full flex flex-col mt-auto pt-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="relative w-full h-12 overflow-hidden mb-4 rounded-xl bg-emerald-50/30">
        <motion.svg
          viewBox="0 0 400 48"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Base EKG Line (Dimmed) */}
          <polyline
            points="0,24 40,24 55,24 65,4 75,44 85,24 100,24 140,24 155,24 165,4 175,44 185,24 200,24 240,24 255,24 265,4 275,44 285,24 300,24 340,24 355,24 365,4 375,44 385,24 400,24"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
          />
          {/* Animated EKG Line (Active) */}
          <motion.polyline
            points="0,24 40,24 55,24 65,4 75,44 85,24 100,24 140,24 155,24 165,4 175,44 185,24 200,24 240,24 255,24 265,4 275,44 285,24 300,24 340,24 355,24 365,4 375,44 385,24 400,24"
            fill="none"
            stroke="#059669"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isHovered ? { pathLength: [0, 1], opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', repeat: isHovered ? Infinity : 0 }}
          />
          {/* Scanning glow line */}
          <motion.rect
            x={0}
            y={0}
            width="8"
            height="48"
            fill="url(#ekg-glow)"
            initial={{ x: -8 }}
            animate={isHovered ? { x: [-8, 408] } : { x: -8 }}
            transition={{ duration: 1.5, ease: 'linear', repeat: isHovered ? Infinity : 0 }}
            opacity={isHovered ? 1 : 0}
          />
          <defs>
            <linearGradient id="ekg-glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(16,185,129,0)" />
              <stop offset="50%" stopColor="rgba(16,185,129,0.8)" />
              <stop offset="100%" stopColor="rgba(16,185,129,0)" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="flex flex-wrap gap-2 min-h-8">
        {specialties.map((spec, i) => (
          <motion.span
            key={spec}
            animate={{ 
              y: isHovered ? -2 : 0,
              backgroundColor: isHovered ? 'rgba(209, 250, 229, 0.8)' : 'rgba(236, 253, 245, 0.5)',
              borderColor: isHovered ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.1)',
              boxShadow: isHovered ? '0 4px 6px -1px rgba(16, 185, 129, 0.1)' : 'none'
            }}
            transition={{ delay: isHovered ? i * 0.05 : 0, type: 'spring', stiffness: 300 }}
            className="px-3 py-1.5 rounded-full border text-sm font-sans text-emerald-800 transition-colors"
          >
            {spec}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
