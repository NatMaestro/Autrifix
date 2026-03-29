"use client"

import { Wrench, Truck, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Nearby Mechanics On Demand",
    description: "Connect with verified mechanics in your area within minutes. Get professional help right where you are.",
  },
  {
    icon: Truck,
    title: "Tow Truck Requests",
    description: "Request a tow with one tap. We match you with the nearest available tow service instantly.",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    description: "Track your help in real-time, just like ride-hailing. Know exactly when assistance will arrive.",
  },
  {
    icon: MessageCircle,
    title: "Chat & Call Support",
    description: "Communicate directly with your assigned professional. Get updates and share details seamlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description: "Every mechanic and tow driver is vetted and verified. Your safety is our top priority.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Assistance",
    description: "Our AI helps diagnose issues, estimate costs, and match you with the right professional.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Everything you need when{" "}
            <span className="text-primary">you need it most</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From flat tires to engine troubles, AutriFix has you covered with comprehensive roadside assistance features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-light rounded-2xl p-6 md:p-8 hover:bg-secondary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="size-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
