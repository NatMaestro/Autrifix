"use client"

import { Globe } from "lucide-react"
import { useMemo } from "react"

/** Deterministic 0..1 from seed (integer ops only — matches Node SSR and browser). */
function hash01(seed: number) {
  let h = Math.imul(seed ^ 0x9e3779b9, 0x85ebca6b) >>> 0
  h ^= h >>> 16
  h = Math.imul(h, 0xc2b2ae35) >>> 0
  h ^= h >>> 16
  return h / 0xffffffff
}

export function GlobalSection() {
  // Generate dot pattern with stable values using useMemo
  const dots = useMemo(() => {
    return Array.from({ length: 30 }).flatMap((_, row) =>
      Array.from({ length: 60 }).map((_, col) => {
        const seed = row * 60 + col
        const u1 = hash01(seed)
        const u2 = hash01(seed + 0x6eed)
        const opacity = Math.round((u2 * 0.5 + 0.2) * 10000) / 10000
        return {
          key: `${row}-${col}`,
          cx: col * 20 + 10,
          cy: row * 20 + 10,
          r: u1 > 0.7 ? 2 : 1,
          opacity,
        }
      })
    )
  }, [])

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background World Map Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1200 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Simplified world dots pattern */}
          <g fill="currentColor" className="text-foreground">
            {/* Create a grid of dots */}
            {dots.map((dot) => (
              <circle
                key={dot.key}
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r}
                opacity={dot.opacity}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-primary/10 mb-8">
            <Globe className="size-10 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Built for Drivers{" "}
            <span className="text-primary">Everywhere</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            Starting soon, expanding globally. AutriFix is designed to help drivers 
            in every city, on every road, no matter where they are.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-light rounded-2xl p-6">
              <p className="text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-muted-foreground">Cities at Launch</p>
            </div>
            <div className="glass-light rounded-2xl p-6">
              <p className="text-4xl font-bold text-primary mb-2">5K+</p>
              <p className="text-muted-foreground">Partner Mechanics</p>
            </div>
            <div className="glass-light rounded-2xl p-6">
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
