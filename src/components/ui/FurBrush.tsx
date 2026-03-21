import { useEffect, useRef, useState } from 'react'

interface Strand {
  x: number
  y: number
  baseAngle: number
  currentAngle: number
  length: number
  width: number
  color: string
}

interface FurBrushProps {
  className?: string
  strandCount?: number
}

export function FurBrush({ className = '', strandCount = 180 }: FurBrushProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const strandsRef = useRef<Strand[]>([])
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  const animFrameRef = useRef<number | undefined>(undefined)
  const [isActive, setIsActive] = useState(false)

  const FUR_COLORS = [
    'rgba(161,112,71,0.85)',   // golden brown
    'rgba(140,95,55,0.80)',    // dark brown
    'rgba(190,140,90,0.80)',   // light golden
    'rgba(210,170,120,0.75)',  // cream
    'rgba(100,68,40,0.85)',    // deep brown
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      // Recreate strands on resize
      strandsRef.current = Array.from({ length: strandCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseAngle: -Math.PI / 2 + (Math.random() - 0.5) * 0.6,
        currentAngle: -Math.PI / 2 + (Math.random() - 0.5) * 0.6,
        length: 12 + Math.random() * 18,
        width: 1.2 + Math.random() * 1.5,
        color: FUR_COLORS[Math.floor(Math.random() * FUR_COLORS.length)],
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current

      strandsRef.current.forEach((strand) => {
        if (mouse) {
          const dx = mouse.x - strand.x
          const dy = mouse.y - strand.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const influenceRadius = 80

          if (dist < influenceRadius) {
            const influence = 1 - dist / influenceRadius
            const targetAngle = Math.atan2(dy, dx)
            // Blend towards mouse direction
            strand.currentAngle += (targetAngle - strand.currentAngle) * influence * 0.3
          } else {
            // Spring back
            strand.currentAngle += (strand.baseAngle - strand.currentAngle) * 0.08
          }
        } else {
          // Idle gentle sway
          strand.currentAngle = strand.baseAngle + Math.sin(Date.now() * 0.001 + strand.x * 0.05) * 0.08
        }

        // Draw strand
        ctx.beginPath()
        ctx.moveTo(strand.x, strand.y)
        const endX = strand.x + Math.cos(strand.currentAngle) * strand.length
        const endY = strand.y + Math.sin(strand.currentAngle) * strand.length
        // Slight curve using quadratic bezier
        const cpX = strand.x + Math.cos(strand.currentAngle - 0.15) * strand.length * 0.5
        const cpY = strand.y + Math.sin(strand.currentAngle - 0.15) * strand.length * 0.5
        ctx.quadraticCurveTo(cpX, cpY, endX, endY)
        ctx.lineWidth = strand.width
        ctx.strokeStyle = strand.color
        ctx.lineCap = 'round'
        ctx.stroke()
      })

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [strandCount])

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    setIsActive(true)
  }

  const handlePointerLeave = () => {
    mouseRef.current = null
    setIsActive(false)
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ cursor: isActive ? 'none' : 'default', touchAction: 'none' }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    />
  )
}
