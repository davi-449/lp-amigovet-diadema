import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

// Placeholder for a premium fluffy pet image
const PET_IMG = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop"

export function GroomingCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [maskPos, setMaskPos] = useState({ x: -1000, y: -1000 })
  const [particles, setParticles] = useState<{id: number, x: number, y: number}[]>([])
  const particleIdCounter = useRef(0)
  const moveCount = useRef(0)

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isRevealed) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMaskPos({ x, y })
    
    // Add particle
    if (Math.random() > 0.8) {
      particleIdCounter.current += 1
      const id = particleIdCounter.current
      setParticles(prev => [...prev.slice(-4), { id, x, y }]) // keep at most 5
    }

    // Reveal logic (after enough scrubbing)
    moveCount.current += 1
    if (moveCount.current > 40) {
      setIsRevealed(true)
    }
  }

  const handlePointerLeave = () => {
    if (!isRevealed) {
       setMaskPos({ x: -1000, y: -1000 })
    }
  }

  return (
    <div 
      className="relative w-full h-full flex flex-col group/grooming select-none overflow-hidden rounded-4xl touch-none bg-emerald-100" 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      
      {/* Base Layer: Clean Pet (revealed underneath) */}
      <div className="absolute inset-0">
        <img 
          src={PET_IMG} 
          alt="Premium Pet Grooming" 
          className="w-full h-full object-cover filter contrast-110"
        />
        {/* Dark gradient overlay for text readability at the bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-900/40 to-transparent" />
      </div>

      {/* Frosted Glass Layer with CSS Mask hole */}
      <div 
        className="absolute inset-0 z-10 bg-emerald-50/70 backdrop-blur-[20px] transition-opacity duration-700 ease-out"
        style={{
          opacity: isRevealed ? 0 : 1,
          maskImage: isRevealed 
            ? 'none' 
            : `radial-gradient(circle 90px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 60%, black 100%)`,
          WebkitMaskImage: isRevealed 
            ? 'none' 
            : `radial-gradient(circle 90px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 60%, black 100%)`
        }}
      />

      {/* Bubbles/Sparkles Particles over the brush */}
      {!isRevealed && particles.map(p => (
        <motion.div
           key={p.id}
           initial={{ opacity: 1, scale: 0, y: 0 }}
           animate={{ opacity: 0, scale: Math.random() * 0.5 + 0.8, y: -50 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="absolute z-20 w-4 h-4 rounded-full bg-white/70 blur-[1px]"
           style={{ left: p.x - 8, top: p.y - 8, pointerEvents: 'none' }}
        />
      ))}

      {/* Content over both layers */}
      <div className="relative z-30 flex flex-col justify-end h-full p-8 pointer-events-none">
        <div className="mb-4">
          <motion.div 
            animate={{ rotate: isRevealed ? [0, 15, -15, 0] : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-500 ${
              isRevealed ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-white/80 text-emerald-600 backdrop-blur-sm'
            }`}
          >
            <Sparkles size={24} />
          </motion.div>
          <h3 className="text-3xl font-display font-bold text-white mb-2 leading-tight drop-shadow-md">
            Estética Animal <br/>Premium
          </h3>
          <p className="text-emerald-50 font-sans text-sm max-w-[200px] opacity-90 drop-shadow-md">
            {isRevealed 
              ? "Seu pet impecável e cheirosinho. Agende um horário!" 
              : "Passe o dedo para limpar e revelar a fofura."}
          </p>
        </div>
      </div>
    </div>
  )
}
