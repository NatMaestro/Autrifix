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
      sizes="(max-width: 768px) 85vw, 220px"
      priority={priority}
      className={cn(
        "h-20 w-auto max-w-[16rem] object-contain object-left sm:h-10 md:h-26 md:max-w-[17rem]",
        className,
      )}
    />
  )
}
