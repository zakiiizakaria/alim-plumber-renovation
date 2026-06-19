import { COMPANY } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface BrandMarkProps {
  className?: string
  variant?: "header" | "footer"
}

export function BrandMark({ className, variant = "header" }: BrandMarkProps) {
  const isFooter = variant === "footer"

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground",
          isFooter ? "size-11 text-base" : "size-10 text-sm"
        )}
        aria-hidden="true"
      >
        AP
      </span>
      <div className="text-left leading-tight">
        <p
          className={cn(
            "font-semibold",
            isFooter ? "text-base text-background" : "text-sm text-foreground sm:text-base"
          )}
        >
          ALIM Plumber
        </p>
        <p
          className={cn(
            "text-xs",
            isFooter ? "text-background/70" : "text-muted-foreground"
          )}
        >
          &amp; Renovation
        </p>
        <span className="sr-only">{COMPANY.name}</span>
      </div>
    </div>
  )
}
