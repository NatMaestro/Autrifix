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
      sizes="(max-width: 768px) 75vw, 200px"
      priority={priority}
      className={cn(
        "h-7 w-auto max-w-[13rem] object-contain object-left sm:h-8 md:max-w-[14rem]",
        className,
      )}
    />
  )
}
