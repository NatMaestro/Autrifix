"use client"

import { Brain, Cpu, TrendingUp, Users } from "lucide-react"

const aiFeatures = [
  {
    icon: Brain,
    title: "Smart Diagnostics",
    description: "Describe your symptoms and our AI suggests possible issues before help arrives.",
  },
  {
    icon: TrendingUp,
    title: "Cost Estimation",
    description: "Get transparent pricing estimates based on the issue and your location.",
  },
  {
    icon: Users,
    title: "Perfect Matching",
    description: "AI matches you with the best professional based on expertise and proximity.",
  },
]

export function AISection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 glow-green">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm">
                <Cpu className="size-4" />
                <span>Powered by AI</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Smart Assistance,{" "}
                <span className="text-primary">Powered by AI</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                AutriFix uses advanced AI to make roadside assistance smarter, faster, and more transparent than ever before.
              </p>

              <div className="space-y-4">
                {aiFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4 items-start">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - AI Visualization */}
            <div className="relative">
              <div className="glass-light rounded-2xl p-6 md:p-8">
                {/* AI Chat Interface Mock */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Brain className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">AutriFix AI</p>
                      <p className="text-xs text-muted-foreground">Analyzing your issue...</p>
                    </div>
                  </div>

                  {/* AI Analysis Cards */}
                  <div className="space-y-3">
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-2">Detected Issue</p>
                      <p className="font-medium">Flat Tire - Rear Left</p>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-2">Estimated Cost</p>
                      <p className="font-medium text-primary">$45 - $75</p>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-2">Recommended Service</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="size-8 rounded-full bg-primary/20" />
                        <div>
                          <p className="font-medium text-sm">Mike&apos;s Auto Service</p>
                          <p className="text-xs text-primary">★★★★★ 4.9 • 3 min away</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full animate-pulse" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Matching you with the best professional...</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
