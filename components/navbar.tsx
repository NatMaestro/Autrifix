"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/brand-logo"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it Works" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-hidden transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto w-full max-w-full min-w-0 px-4 md:container md:px-6">
        <div className="flex w-full max-w-full min-w-0 items-center gap-3">
          {/* Logo — flex-1 + min-w-0 keeps row within viewport (avoids 100vw scrollbar bugs) */}
          <a
            href="#"
            className="flex min-w-0 flex-1 overflow-hidden py-1"
            aria-label="AutriFix home"
          >
            <BrandLogo priority className="max-w-full" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden min-w-0 shrink-0 md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="rounded-full px-6">
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden shrink-0 text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="min-w-0 max-w-full md:hidden space-y-4 pt-4 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block break-words py-2 text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full max-w-full min-w-0 rounded-full">
              <a
                href="#waitlist"
                className="min-w-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
