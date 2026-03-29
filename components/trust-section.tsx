"use client"

import { Car, Users, Star, Clock } from "lucide-react"

const trustItems = [
  {
    icon: Car,
    stat: "Modern",
    label: "Built for modern drivers",
  },
  {
    icon: Users,
    stat: "10K+",
    label: "Early adopters waiting",
  },
  {
    icon: Star,
    stat: "5-Star",
    label: "Service commitment",
  },
  {
    icon: Clock,
    stat: "< 5 min",
    label: "Average response time",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 border-t border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div key={item.label} className="text-center">
              <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 mb-4">
                <item.icon className="size-6 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{item.stat}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
