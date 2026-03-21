import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PawPressureProps {
  children: React.ReactNode
  className?: string
}

export function PawPressure({ children, className = '' }: PawPressureProps) {
  const [paws, setPaws] = useState<{ id: number; x: number; y: number }[]>([])

  const handlePressStart = useCallback((e: React.PointerEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const id = Date.now()
    setPaws((prev) => [...prev, { id, x, y }])

    // Auto-remove after animation completes
    setTimeout(() => {
      setPaws((prev) => prev.filter((p) => p.id !== id))
    }, 1200)
  }, [])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onPointerDown={handlePressStart}
    >
      {children}

      {/* Paw overlays */}
      <AnimatePresence>
        {paws.map((paw) => (
          <motion.div
            key={paw.id}
            initial={{ scale: 0, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 0.85, rotate: 0 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="pointer-events-none absolute z-10"
            style={{
              left: paw.x - 16,
              top: paw.y - 16,
              width: 32,
              height: 32,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="#059669"
              className="w-full h-full drop-shadow-md"
            >
              {/* Toe beans (4 small ovals) */}
              <ellipse cx="7.5" cy="5" rx="2.5" ry="2" fill="#059669" />
              <ellipse cx="12" cy="3.5" rx="2.5" ry="2" fill="#059669" />
              <ellipse cx="16.5" cy="5" rx="2.5" ry="2" fill="#059669" />
              <ellipse cx="19.5" cy="9" rx="1.8" ry="1.5" fill="#059669" />
              {/* Main pad */}
              <ellipse cx="12" cy="15" rx="5.5" ry="4.5" fill="#059669" />
            </svg>

            {/* Glow effect */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0.6 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-full bg-emerald-400"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
