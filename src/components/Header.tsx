import { useState } from "react"
import { Menu, X } from "lucide-react"

import { BrandMark } from "@/components/BrandMark"
import { LeadFormDialog } from "@/components/LeadFormDialog"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/constants"
import { heroCopyVariantA } from "@/lib/copy"
import { buildEmergencyWhatsAppUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#services", label: "Servis" },
  { href: "#guarantees", label: "Jaminan" },
  { href: "#portfolio", label: "Projek" },
  { href: "#reviews", label: "Review" },
  { href: "#faq", label: "FAQ" },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [inspectionOpen, setInspectionOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/30 bg-white/50 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#"
          className="shrink-0 transition-all duration-300 hover:scale-103 hover:opacity-95"
          aria-label={`${COMPANY.name} — Utama`}
        >
          <BrandMark variant="header" />
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Navigasi utama"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition-all duration-300 hover:text-brand-primary hover:-translate-y-[1px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={buildEmergencyWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-subtle inline-flex h-9 items-center justify-center rounded-lg bg-brand-accent px-4 text-sm font-extrabold text-white shadow-md shadow-brand-accent/20 hover:shadow-lg hover:shadow-brand-accent/35 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
          >
            {heroCopyVariantA.primaryCta}
          </a>
          <LeadFormDialog
            open={inspectionOpen}
            onOpenChange={setInspectionOpen}
            defaultDispatchCategory="renovation_inspection"
            title={heroCopyVariantA.secondaryCta}
            trigger={
              <Button
                size="sm"
                className="bg-renovation text-renovation-foreground shadow-md shadow-brand-orange/15 hover:shadow-lg hover:shadow-brand-orange/30 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-98 font-bold h-9 px-4"
              >
                {heroCopyVariantA.secondaryCta}
              </Button>
            }
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden transition-transform duration-200 active:scale-90"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "border-t border-white/30 bg-white/55 backdrop-blur-xl lg:hidden transition-all duration-300",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-4"
          aria-label="Navigasi mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground hover:translate-x-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildEmergencyWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-lg bg-brand-accent text-sm font-extrabold text-white shadow-md hover:bg-brand-accent/95 active:scale-98"
          >
            {heroCopyVariantA.primaryCta}
          </a>
          <LeadFormDialog
            defaultDispatchCategory="renovation_inspection"
            title={heroCopyVariantA.secondaryCta}
            trigger={
              <Button
                className="w-full bg-renovation text-renovation-foreground shadow-md hover:bg-renovation/95 active:scale-98 mt-2 h-11 text-sm font-bold"
                size="lg"
              >
                {heroCopyVariantA.secondaryCta}
              </Button>
            }
          />
        </nav>
      </div>
    </header>
  )
}
