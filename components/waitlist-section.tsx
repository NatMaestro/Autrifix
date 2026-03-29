"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Bell,
  Sparkles,
  Car,
  Wrench,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Role = "driver" | "mechanic"

export function WaitlistSection() {
  const [role, setRole] = useState<Role | null>(null)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [services, setServices] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!role) {
      setError("Choose how you’re joining: driver or service provider.")
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          role,
          phone: phone.trim() || undefined,
          services: role === "mechanic" ? services.trim() || undefined : undefined,
        }),
      })

      const data = (await res.json().catch(() => ({}))) as { error?: string }

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.")
        return
      }

      setIsSubmitted(true)
    } catch {
      setError("Network error. Check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="waitlist" className="py-24 md:py-32 relative min-w-0 overflow-x-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto min-w-0 text-center">
          {isSubmitted ? (
            <div className="glass rounded-3xl p-5 sm:p-8 md:p-12 min-w-0">
              <div className="flex justify-center mb-6">
                <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="size-10 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {"You're"} on the List!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thanks for joining! {"We'll"} notify you as soon as AutriFix launches in your
                area.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Bell className="size-4 text-primary" />
                  Early access
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  Exclusive perks
                </span>
              </div>
            </div>
          ) : (
            <div className="glass rounded-3xl p-5 sm:p-8 md:p-12 min-w-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm mb-6">
                <Sparkles className="size-4" />
                <span>Limited Early Access</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Be First to Experience <span className="text-primary">AutriFix</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join as a driver or service provider and get early access when we launch.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                <button
                  type="button"
                  onClick={() => {
                    setRole("driver")
                    setError("")
                  }}
                  className={cn(
                    "glass-light rounded-2xl p-6 transition-all duration-300 text-left border-2 border-transparent cursor-pointer",
                    "hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    role === "driver" && "border-primary bg-secondary/30 ring-1 ring-primary/40",
                  )}
                >
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Car className="size-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">I need roadside help</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Drivers who want instant assistance when something goes wrong.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setRole("mechanic")
                    setError("")
                  }}
                  className={cn(
                    "glass-light rounded-2xl p-6 transition-all duration-300 text-left border-2 border-transparent cursor-pointer",
                    "hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    role === "mechanic" && "border-primary bg-secondary/30 ring-1 ring-primary/40",
                  )}
                >
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Wrench className="size-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">
                    {"I'm"} a mechanic / service provider
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Pros who want to receive job requests through AutriFix.
                  </p>
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto w-full min-w-0 space-y-4 text-left px-0"
              >
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-full bg-secondary/50 border-border/50 px-5 text-base placeholder:text-muted-foreground/70"
                    aria-label="Email address"
                    autoComplete="email"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 rounded-full bg-secondary/50 border-border/50 px-5 text-base placeholder:text-muted-foreground/70"
                    aria-label="Phone number (optional)"
                    autoComplete="tel"
                    disabled={isLoading}
                  />
                </div>
                {role === "mechanic" && (
                  <div>
                    <Textarea
                      placeholder="What services do you offer? (optional)"
                      value={services}
                      onChange={(e) => setServices(e.target.value)}
                      className="min-h-24 rounded-2xl bg-secondary/50 border-border/50 px-4 py-3 text-base placeholder:text-muted-foreground/70 resize-y"
                      aria-label="Services you offer"
                      disabled={isLoading}
                    />
                  </div>
                )}
                {error && (
                  <p className="text-sm text-destructive text-center" role="alert">
                    {error}
                  </p>
                )}
                <div className="flex justify-center pt-2 w-full min-w-0">
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 rounded-full px-5 sm:px-8 glow-green w-full max-w-full min-w-0 shrink sm:w-auto sm:max-w-none"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="size-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Joining...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 justify-center">
                        Join Waitlist
                        <ArrowRight className="size-5" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>

              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <Shield className="size-4 shrink-0" />
                <span>No spam. Early access only.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
