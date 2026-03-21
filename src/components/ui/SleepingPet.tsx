import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Phase = 'sleeping' | 'waking' | 'stretching' | 'running' | 'done'

export function SleepingPet() {
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>('sleeping')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === 'sleeping') {
          // Animate through phases
          setTimeout(() => setPhase('waking'), 500)
          setTimeout(() => setPhase('stretching'), 1500)
          setTimeout(() => setPhase('running'), 2800)
          setTimeout(() => setPhase('done'), 4200)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [phase])

  return (
    <div ref={ref} className="relative w-full h-24 overflow-hidden mb-8">
      {/* ZZZs floating above */}
      <AnimatePresence>
        {phase === 'sleeping' && (
          <>
            {['z', 'Z', 'Z'].map((z, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 0, x: 56 + i * 12 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [-10 - i * 12, -30 - i * 12],
                  x: 56 + i * 12 + i * 4,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.6,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="absolute top-0 text-emerald-500 font-bold"
                style={{ fontSize: `${10 + i * 4}px` }}
              >
                {z}
              </motion.span>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* The dog itself */}
      <AnimatePresence mode="wait">
        {phase !== 'done' && (
          <motion.div
            key={phase}
            className="absolute bottom-2 left-0"
            animate={
              phase === 'running'
                ? { x: ['0%', '110vw'] }
                : { x: 0 }
            }
            transition={
              phase === 'running'
                ? { duration: 1.4, ease: 'easeIn' }
                : { duration: 0.5 }
            }
          >
            <svg
              viewBox="0 0 80 50"
              width="80"
              height="50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Body */}
              <ellipse
                cx="38"
                cy={phase === 'sleeping' ? 38 : phase === 'waking' ? 34 : 30}
                rx="20"
                ry={phase === 'sleeping' ? 10 : 12}
                fill="#c8a26b"
                style={{ transition: 'all 0.5s ease' }}
              />
              {/* Head */}
              <circle
                cx={phase === 'sleeping' ? 18 : 16}
                cy={phase === 'sleeping' ? 34 : phase === 'waking' ? 26 : 22}
                r="13"
                fill="#d4aa7a"
                style={{ transition: 'all 0.5s ease' }}
              />
              {/* Ears */}
              <ellipse cx="10" cy={phase === 'sleeping' ? 28 : 16} rx="5" ry="7" fill="#b08a55" style={{ transition: 'all 0.5s ease' }} />
              <ellipse cx="22" cy={phase === 'sleeping' ? 28 : 15} rx="4" ry="6" fill="#b08a55" style={{ transition: 'all 0.5s ease' }} />
              {/* Eyes */}
              {phase === 'sleeping' ? (
                <>
                  {/* Closed eyes (arcs) */}
                  <path d="M11 34 Q14 31 17 34" stroke="#7a5c3a" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M18 34 Q21 31 24 34" stroke="#7a5c3a" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : phase === 'waking' ? (
                <>
                  {/* Half-open eyes */}
                  <ellipse cx="13" cy="25" rx="2.5" ry="1.5" fill="#7a5c3a" />
                  <ellipse cx="21" cy="25" rx="2.5" ry="1.5" fill="#7a5c3a" />
                </>
              ) : (
                <>
                  {/* Open eyes */}
                  <circle cx="13" cy="22" r="2.5" fill="#7a5c3a" />
                  <circle cx="21" cy="22" r="2.5" fill="#7a5c3a" />
                  <circle cx="14" cy="21" r="0.7" fill="white" />
                  <circle cx="22" cy="21" r="0.7" fill="white" />
                </>
              )}
              {/* Nose */}
              <ellipse cx="16" cy={phase === 'sleeping' ? 36 : 27} rx="2" ry="1.2" fill="#7a5c3a" style={{ transition: 'all 0.5s ease' }} />
              {/* Tail */}
              <path
                d={phase === 'running' ? 'M58 28 Q72 10 75 20' : 'M58 35 Q68 25 65 18'}
                stroke="#b08a55"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ transition: 'all 0.5s ease' }}
              />
              {/* Legs */}
              {phase !== 'sleeping' && (
                <>
                  <rect x="28" y="42" width="6" height={phase === 'running' ? 5 : 10} rx="3" fill="#b08a55" style={{ transition: 'all 0.5s' }} />
                  <rect x="40" y="42" width="6" height={phase === 'running' ? 5 : 10} rx="3" fill="#b08a55" style={{ transition: 'all 0.5s' }} />
                  <rect x="50" y="42" width="6" height={phase === 'running' ? 5 : 10} rx="3" fill="#b08a55" style={{ transition: 'all 0.5s' }} />
                </>
              )}
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shadow */}
      {phase !== 'done' && phase !== 'running' && (
        <div
          className="absolute bottom-0 left-0 w-20 h-3 bg-black/10 rounded-full blur-sm"
          style={{ transform: 'scaleX(1.2)' }}
        />
      )}
    </div>
  )
}
