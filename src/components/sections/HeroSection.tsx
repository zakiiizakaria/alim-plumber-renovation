import { ArrowRight, MapPin, ShieldCheck, Sparkles, Wrench } from "lucide-react"

import { BrandMark } from "@/components/BrandMark"
import { LeadFormDialog } from "@/components/LeadFormDialog"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/constants"
import { heroCopyVariantA } from "@/lib/copy"
import { buildEmergencyWhatsAppUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

const HERO_STATS = [
  { label: "24/7", sub: "Kerja Cepat" },
  { label: "100%", sub: "Kerja Kemas" },
  { label: "RM", sub: "Boleh Bincang" },
] as const

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/60"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.6_0.25_280/0.14),transparent)]" />
      <div className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-56 rounded-full bg-renovation/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20">
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {heroCopyVariantA.overline}
          </div>

          <BrandMark variant="header" className="lg:hidden" />

          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
          >
            {heroCopyVariantA.headline}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroCopyVariantA.subheadline}
          </p>

          <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            {COMPANY.serviceAreas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-card px-2.5 py-1 shadow-sm"
              >
                <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={buildEmergencyWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-10 items-center justify-center gap-2 rounded-lg px-6 text-sm font-medium shadow-md transition-all",
                "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 active:translate-y-px"
              )}
            >
              <Wrench className="size-4" aria-hidden="true" />
              {heroCopyVariantA.primaryCta}
            </a>

            <LeadFormDialog
              defaultDispatchCategory="renovation_inspection"
              title={heroCopyVariantA.secondaryCta}
              description="Book a free on-site inspection for wet works, roofing, tiles, or painting projects."
              trigger={
                <Button
                  size="lg"
                  className="gap-2 bg-renovation px-6 text-renovation-foreground shadow-md hover:bg-renovation/90"
                >
                  {heroCopyVariantA.secondaryCta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              }
            />
          </div>

          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            Official Work Performance Warranty · 100% Post-Job Clean Up ·{" "}
            {COMPANY.address}
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-primary/25 via-renovation/15 to-transparent opacity-80 blur-sm" />
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl shadow-primary/10">
            <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/10 via-card to-renovation/10 p-8 text-center">
              <span className="flex size-20 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Wrench className="size-10" aria-hidden="true" />
              </span>
              <div>
                <p className="text-lg font-bold text-foreground">
                  {COMPANY.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Emergency plumbing &amp; wet-works renovation specialist
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-border bg-muted/50">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="px-3 py-4 text-center">
                  <p className="text-lg font-bold text-primary">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
