'use client'

import { useEffect, useRef } from 'react'

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const SIZE = 1024
    canvas.width = SIZE
    canvas.height = SIZE

    const imageData = ctx.createImageData(SIZE, SIZE)
    // #F4D74F = R:244, G:215, B:79
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i] = 244
      imageData.data[i + 1] = 215
      imageData.data[i + 2] = 79
      imageData.data[i + 3] = Math.floor(Math.random() * 120)
    }
    ctx.putImageData(imageData, 0, 0)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        pointerEvents: 'none',
        imageRendering: 'auto',
      }}
    />
  )
}
