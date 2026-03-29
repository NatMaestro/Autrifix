import Image from "next/image"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  /** Use on first-paint brand marks (e.g. navbar) for LCP */
  priority?: boolean
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/images/AutriFix-logo-n.png"
      alt="AutriFix"
      width={200}
      height={56}
      priority={priority}
      className={cn(
        "h-26 w-auto max-w-44 md:max-w-52 object-contain object-left",
        className,
      )}
    />
  )
}
