"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-muted-foreground">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                Now accepting early access signups
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
                Instant Roadside Assistance.{" "}
                <span className="text-primary glow-text">Anywhere.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Your car breaks down. AutriFix connects you instantly to nearby mechanics, 
                tow trucks, and vehicle support—when you need it most.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full min-w-0 max-w-full">
              <Button
                asChild
                size="lg"
                className="rounded-full text-base px-6 sm:px-8 glow-green w-full min-w-0 max-w-full shrink sm:w-auto sm:max-w-none"
              >
                <a href="#waitlist" className="min-w-0">
                  Join Waitlist
                  <ArrowRight className="ml-2 size-5 shrink-0" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-base px-6 sm:px-8 border-border/50 hover:bg-secondary/50 w-full min-w-0 max-w-full shrink sm:w-auto sm:max-w-none"
              >
                <a href="#how-it-works" className="min-w-0">
                  Learn More
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary" />
                <span>{"< 5 min response"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="size-4 text-primary" />
                <span>Verified professionals</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                <span>Real-time tracking</span>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto w-72 md:w-80 animate-float">
                <div className="glass rounded-[3rem] p-3 glow-green">
                  <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* App UI Mock */}
                    <div className="h-full flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-3 text-xs text-muted-foreground">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 rounded-sm bg-muted-foreground/50" />
                          <div className="w-4 h-2 rounded-sm bg-primary" />
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="px-6 py-4">
                        <h3 className="text-lg font-semibold">Need Help?</h3>
                        <p className="text-sm text-muted-foreground">We&apos;ll find help nearby</p>
                      </div>

                      {/* Map Area */}
                      <div className="flex-1 mx-4 rounded-2xl relative overflow-hidden">
                        {/* Real Map Background */}
                        <img 
                          src="/images/map-dark.jpg" 
                          alt="Map view" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Dark overlay for better contrast */}
                        <div className="absolute inset-0 bg-background/30" />
                        
                        {/* Location pin with pulse effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                          <div className="relative flex items-center justify-center">
                            {/* Outer pulse ring */}
                            <div className="absolute w-16 h-16 bg-primary/20 rounded-full animate-ping" />
                            {/* Middle pulse ring */}
                            <div className="absolute w-10 h-10 bg-primary/30 rounded-full animate-pulse" />
                            {/* Pin marker */}
                            <div className="relative">
                              <div className="w-6 h-6 bg-primary rounded-full shadow-lg shadow-primary/50 flex items-center justify-center">
                                <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                              </div>
                              {/* Pin tail */}
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Nearby service providers */}
                        <div className="absolute top-[30%] right-[25%] z-10">
                          <div className="w-4 h-4 bg-primary/80 rounded-full shadow-md shadow-primary/30 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                          </div>
                        </div>
                        <div className="absolute bottom-[35%] left-[28%] z-10">
                          <div className="w-4 h-4 bg-primary/80 rounded-full shadow-md shadow-primary/30 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                          </div>
                        </div>
                        <div className="absolute top-[45%] right-[35%] z-10">
                          <div className="w-3 h-3 bg-primary/60 rounded-full shadow-sm shadow-primary/20" />
                        </div>
                      </div>

                      {/* Service Options */}
                      <div className="p-4 space-y-2">
                        <div className="glass-light rounded-xl p-3 flex items-center gap-3">
                          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-lg">🔧</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Mechanic</p>
                            <p className="text-xs text-muted-foreground">3 nearby</p>
                          </div>
                          <ArrowRight className="size-4 text-muted-foreground" />
                        </div>
                        <div className="glass-light rounded-xl p-3 flex items-center gap-3">
                          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-lg">🚗</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Tow Truck</p>
                            <p className="text-xs text-muted-foreground">5 min away</p>
                          </div>
                          <ArrowRight className="size-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 glass-light rounded-2xl p-4 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Help arriving</p>
                    <p className="text-xs text-muted-foreground">ETA: 4 minutes</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 glass-light rounded-2xl p-4 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Verified Pro</p>
                    <p className="text-xs text-primary">★★★★★</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
