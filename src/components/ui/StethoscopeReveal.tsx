import { motion } from 'framer-motion'
import { useState } from 'react'

export function StethoscopeReveal() {
  const [isHovered, setIsHovered] = useState(false)
  
  const specialties = ['Oncologia', 'Nefrologia', 'Cardiologia', 'Endocrinologia', 'Oftalmologia', 'Odontologia']

  return (
    <div
      className="w-full flex-1 flex flex-col justify-between cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-wrap gap-2 mb-16">
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

      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden bg-emerald-50/30 rounded-b-[2.5rem] opacity-70 group-hover/card:opacity-100 transition-opacity">
        <motion.svg
          viewBox="0 0 400 64"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Base EKG Line (Dimmed) */}
          <polyline
            points="0,32 40,32 55,32 65,12 75,52 85,32 100,32 140,32 155,32 165,12 175,52 185,32 200,32 240,32 255,32 265,12 275,52 285,32 300,32 340,32 355,32 365,12 375,52 385,32 400,32"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
          />
          {/* Animated EKG Line (Active) */}
          <motion.polyline
            points="0,32 40,32 55,32 65,12 75,52 85,32 100,32 140,32 155,32 165,12 175,52 185,32 200,32 240,32 255,32 265,12 275,52 285,32 300,32 340,32 355,32 365,12 375,52 385,32 400,32"
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
            width="12"
            height="64"
            fill="url(#ekg-glow)"
            initial={{ x: -12 }}
            animate={isHovered ? { x: [-12, 412] } : { x: -12 }}
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
    </div>
  )
}
