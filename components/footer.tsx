import { Twitter, Linkedin, Instagram } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"

const socialLinks = [
  { icon: Twitter, href: "", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nathaniel-conduah-0989a5170/", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <BrandLogo />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="size-10 rounded-full glass-light flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AutriFix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
