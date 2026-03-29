"use client"

import { Smartphone, FileText, Zap, Navigation } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Open the App",
    description: "Launch AutriFix and let us detect your location automatically.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Describe Your Issue",
    description: "Tell us what went wrong. Our AI helps identify the problem quickly.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Get Matched Instantly",
    description: "We connect you with the nearest verified professional in seconds.",
  },
  {
    icon: Navigation,
    number: "04",
    title: "Track Help in Real Time",
    description: "Watch your help arrive on the map. Stay informed every step of the way.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="text-primary">AutriFix</span> Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Getting roadside assistance has never been easier. Four simple steps to get you back on the road.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center group">
                {/* Step Card */}
                <div className="glass-light rounded-2xl p-6 transition-all duration-300 hover:bg-secondary/30">
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="mt-4 mb-5 flex justify-center">
                    <div className="size-16 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <step.icon className="size-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
