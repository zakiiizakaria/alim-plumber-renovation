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
  { href: "#services", label: "Services" },
  { href: "#guarantees", label: "Guarantees" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [inspectionOpen, setInspectionOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <a
          href="#"
          className="shrink-0 transition-opacity hover:opacity-90"
          aria-label={`${COMPANY.name} — Home`}
        >
          <BrandMark variant="header" />
        </a>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={buildEmergencyWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-whatsapp px-4 text-sm font-medium text-whatsapp-foreground shadow-sm transition-colors hover:bg-whatsapp/90"
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
                size="lg"
                className="bg-renovation text-renovation-foreground hover:bg-renovation/90"
              >
                {heroCopyVariantA.secondaryCta}
              </Button>
            }
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "border-t border-border/60 bg-background md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildEmergencyWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg bg-whatsapp text-sm font-medium text-whatsapp-foreground hover:bg-whatsapp/90"
          >
            {heroCopyVariantA.primaryCta}
          </a>
          <LeadFormDialog
            defaultDispatchCategory="renovation_inspection"
            title={heroCopyVariantA.secondaryCta}
            trigger={
              <Button
                className="w-full bg-renovation text-renovation-foreground hover:bg-renovation/90"
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
