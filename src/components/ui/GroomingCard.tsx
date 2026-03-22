import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

// Placeholder for a premium fluffy pet image
const PET_IMG = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop"

export function GroomingCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const isDrawing = useRef(false)
  
  // Track how much of the canvas is cleared
  const pixelsRef = useRef<Uint8ClampedArray | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    const resize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
      fillCanvas()
    }

    const fillCanvas = () => {
      // Create frosted glass look
      ctx.fillStyle = '#ecfdf5' // emerald-50
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Add some "bubbles" or texture
      ctx.fillStyle = 'rgba(255,255,255,0.4)'
      for(let i=0; i<30; i++) {
        ctx.beginPath()
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 20 + 5, 0, Math.PI * 2)
        ctx.fill()
      }
      
      pixelsRef.current = null
      setIsRevealed(false)
    }

    resize()
    window.addEventListener('resize', resize)

    const scratch = (x: number, y: number) => {
      if (!ctx || isRevealed) return
      
      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.arc(x, y, 40, 0, Math.PI * 2) // Brush size
      ctx.fill()
      
      // Glow/sparkle effect around the brush (optional, requires additional canvas or DOM elements, sticking to simple scratch for performance)
      
      checkReveal()
    }

    const checkReveal = () => {
      if (!ctx || isRevealed) return
      
      // Check every N frames or randomly to save performance
      if (Math.random() > 0.1) return

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imgData.data
      let cleared = 0
      const total = data.length / 4

      // Sample pixels
      for (let i = 3; i < data.length; i += 16) {
        if (data[i] === 0) cleared++
      }

      const ratio = cleared / (total / 4)
      
      if (ratio > 0.4) { // 40% cleared -> reveal all
        setIsRevealed(true)
        // Fade out canvas
        canvas.style.transition = 'opacity 0.6s ease'
        canvas.style.opacity = '0'
        setTimeout(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
        }, 600)
      }
    }

    const getXY = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      let clientX, clientY
      if ('touches' in e) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else {
        clientX = e.clientX
        clientY = e.clientY
      }
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      }
    }

    const startDraw = (e: MouseEvent | TouchEvent) => {
      isDrawing.current = true
      const { x, y } = getXY(e)
      scratch(x, y)
    }

    const moveDraw = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing.current) return
      e.preventDefault() // prevent scroll on mobile
      const { x, y } = getXY(e)
      scratch(x, y)
    }

    const endDraw = () => {
      isDrawing.current = false
    }

    canvas.addEventListener('mousedown', startDraw)
    canvas.addEventListener('mousemove', moveDraw)
    window.addEventListener('mouseup', endDraw)

    canvas.addEventListener('touchstart', startDraw, { passive: false })
    canvas.addEventListener('touchmove', moveDraw, { passive: false })
    window.addEventListener('touchend', endDraw)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousedown', startDraw)
      canvas.removeEventListener('mousemove', moveDraw)
      window.removeEventListener('mouseup', endDraw)
      canvas.removeEventListener('touchstart', startDraw)
      canvas.removeEventListener('touchmove', moveDraw)
      window.removeEventListener('touchend', endDraw)
    }
  }, [isRevealed])

  return (
    <div className="relative w-full h-full flex flex-col group/grooming" ref={containerRef}>
      
      <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-emerald-100">
        <img 
          src={PET_IMG} 
          alt="Premium Pet Grooming" 
          className="w-full h-full object-cover filter contrast-110"
        />
        {/* Dark gradient overlay for text readability at the bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-900/40 to-transparent" />
      </div>

      {/* The frost layer */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-10 rounded-[2rem]"
        style={{ cursor: 'crosshair', touchAction: 'none' }}
      />

      {/* Content over both layers */}
      <div className="relative z-20 flex flex-col justify-end h-full p-8 pointer-events-none">
        
        <div className="mb-4">
          <motion.div 
            animate={{ rotate: isRevealed ? [0, 15, -15, 0] : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors ${
              isRevealed ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-white/80 text-emerald-600 backdrop-blur-sm'
            }`}
          >
            <Sparkles size={24} />
          </motion.div>
          <h3 className="text-3xl font-display font-bold text-white mb-2 leading-tight">
            Estética Animal <br/>Premium
          </h3>
          <p className="text-emerald-50 font-sans text-sm max-w-[200px] opacity-90">
            {isRevealed 
              ? "Seu pet impecável e cheirosinho. Agende um horário!" 
              : "Passe o dedo para limpar e revelar a fofura."}
          </p>
        </div>

      </div>

    </div>
  )
}
