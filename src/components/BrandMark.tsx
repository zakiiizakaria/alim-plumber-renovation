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
      <img
        src="/Alim_Logo.jpg"
        alt={`${COMPANY.name} Logo`}
        className={cn(
          "flex shrink-0 object-cover rounded-xl border border-slate-200/50 shadow-sm",
          isFooter ? "size-12" : "size-11"
        )}
      />
      <div className="text-left leading-tight">
        <p
          className={cn(
            isFooter ? "font-bold text-base text-background" : "font-extrabold text-sm sm:text-base tracking-tight text-brand-primary"
          )}
        >
          ALIM Plumber
        </p>
        <p
          className={cn(
            "text-[10px] font-bold tracking-wider",
            isFooter ? "text-background/70" : "text-brand-orange uppercase"
          )}
        >
          &amp; Renovation
        </p>
        <span className="sr-only">{COMPANY.name}</span>
      </div>
    </div>
  )
}
