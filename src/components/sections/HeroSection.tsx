import { ArrowRight, MapPin, Wrench } from "lucide-react"

import { LeadFormDialog } from "@/components/LeadFormDialog"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/constants"
import { heroCopyVariantA } from "@/lib/copy"
import { buildEmergencyWhatsAppUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/40 bg-hero-surface"
      aria-labelledby="hero-heading"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-brand-accent/20 blur-3xl animate-bg-shift" style={{ backgroundSize: '200% 200%' }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full bg-brand-orange/16 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/8 blur-[100px]" />

      <div className="section-py-hero relative mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        {/* Left — Copy */}
        <div className="space-y-6 text-left">
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
          >
            {heroCopyVariantA.headline}
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroCopyVariantA.subheadline}
          </p>

          <ul className="flex flex-wrap gap-2 text-xs font-bold text-muted-foreground">
            {COMPANY.serviceAreas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-brand-accent/30 hover:bg-white"
              >
                <MapPin className="size-3 text-brand-accent" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={buildEmergencyWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "animate-pulse-subtle inline-flex h-12 items-center justify-center gap-2.5 rounded-xl px-7 text-sm font-extrabold shadow-lg transition-all duration-300 ease-out",
                "bg-brand-accent text-white hover:scale-[1.02] active:scale-98"
              )}
            >
              <Wrench className="size-4" aria-hidden="true" />
              {heroCopyVariantA.primaryCta}
            </a>

            <LeadFormDialog
              defaultDispatchCategory="renovation_inspection"
              title={heroCopyVariantA.secondaryCta}
              description="Isi borang ringkas di bawah dan kami akan balas di WhatsApp dengan sebut harga."
              trigger={
                <Button
                  size="lg"
                  className="animate-pulse-subtle-orange gap-2 bg-renovation px-7 text-renovation-foreground shadow-lg shadow-brand-orange/15 hover:shadow-xl hover:shadow-brand-orange/25 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-98 font-extrabold h-12 rounded-xl"
                >
                  {heroCopyVariantA.secondaryCta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              }
            />
          </div>
        </div>

        {/* Right — SVG Illustration */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-accent/10 via-brand-orange/5 to-brand-primary/10 opacity-80 blur-xl" />
          <div className="relative w-full max-w-md lg:max-w-lg">
            <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl" aria-hidden="true">
              {/* Background shape */}
              <rect x="80" y="60" width="440" height="380" rx="40" fill="oklch(0.35 0.18 240 / 0.06)" />
              <rect x="100" y="80" width="400" height="340" rx="30" fill="white" fillOpacity="0.8" stroke="oklch(0.62 0.24 195 / 0.2)" strokeWidth="2" />
              
              {/* House roof */}
              <path d="M300 120 L180 220 L420 220 Z" fill="oklch(0.35 0.18 240)" fillOpacity="0.9" />
              <path d="M300 130 L195 218 L405 218 Z" fill="oklch(0.35 0.18 240 / 0.7)" />
              
              {/* House body */}
              <rect x="200" y="218" width="200" height="150" rx="4" fill="oklch(0.93 0.02 240)" stroke="oklch(0.35 0.18 240 / 0.3)" strokeWidth="2" />
              
              {/* Door */}
              <rect x="275" y="290" width="50" height="78" rx="4" fill="oklch(0.65 0.20 40)" fillOpacity="0.85" />
              <circle cx="318" cy="330" r="3" fill="oklch(0.35 0.18 240)" />
              
              {/* Windows */}
              <rect x="215" y="240" width="45" height="35" rx="4" fill="oklch(0.62 0.24 195 / 0.3)" stroke="oklch(0.62 0.24 195 / 0.5)" strokeWidth="1.5" />
              <line x1="237.5" y1="240" x2="237.5" y2="275" stroke="oklch(0.62 0.24 195 / 0.4)" strokeWidth="1" />
              <line x1="215" y1="257.5" x2="260" y2="257.5" stroke="oklch(0.62 0.24 195 / 0.4)" strokeWidth="1" />
              
              <rect x="340" y="240" width="45" height="35" rx="4" fill="oklch(0.62 0.24 195 / 0.3)" stroke="oklch(0.62 0.24 195 / 0.5)" strokeWidth="1.5" />
              <line x1="362.5" y1="240" x2="362.5" y2="275" stroke="oklch(0.62 0.24 195 / 0.4)" strokeWidth="1" />
              <line x1="340" y1="257.5" x2="385" y2="257.5" stroke="oklch(0.62 0.24 195 / 0.4)" strokeWidth="1" />
              
              {/* Wrench icon */}
              <g transform="translate(430, 100)">
                <circle cx="40" cy="40" r="38" fill="oklch(0.62 0.24 195)" fillOpacity="0.15" />
                <circle cx="40" cy="40" r="28" fill="oklch(0.62 0.24 195)" />
                <path d="M30 35 L38 43 L50 31" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
              
              {/* Water drop */}
              <g transform="translate(100, 130)">
                <circle cx="30" cy="35" r="25" fill="oklch(0.62 0.24 195 / 0.12)" />
                <path d="M30 18 C30 18 18 32 18 38 C18 44.6 23.4 50 30 50 C36.6 50 42 44.6 42 38 C42 32 30 18 30 18Z" fill="oklch(0.62 0.24 195)" fillOpacity="0.7" />
              </g>
              
              {/* Pipe lines */}
              <g stroke="oklch(0.62 0.24 195 / 0.5)" strokeWidth="4" strokeLinecap="round" fill="none">
                <path d="M160 370 L200 370" />
                <path d="M400 370 L440 370" />
                <path d="M440 370 L440 330" />
                <path d="M160 370 L160 340" />
              </g>
              
              {/* Pipe joints */}
              <circle cx="160" cy="340" r="6" fill="oklch(0.62 0.24 195 / 0.3)" stroke="oklch(0.62 0.24 195 / 0.5)" strokeWidth="2" />
              <circle cx="440" cy="330" r="6" fill="oklch(0.62 0.24 195 / 0.3)" stroke="oklch(0.62 0.24 195 / 0.5)" strokeWidth="2" />
              
              {/* Decorative dots */}
              <circle cx="500" cy="400" r="4" fill="oklch(0.65 0.20 40 / 0.4)" />
              <circle cx="520" cy="380" r="3" fill="oklch(0.62 0.24 195 / 0.3)" />
              <circle cx="490" cy="420" r="2.5" fill="oklch(0.35 0.18 240 / 0.3)" />
              <circle cx="110" cy="400" r="3" fill="oklch(0.65 0.20 40 / 0.3)" />
              <circle cx="90" cy="380" r="4" fill="oklch(0.62 0.24 195 / 0.4)" />
              
              {/* 24/7 badge */}
              <g transform="translate(430, 250)">
                <rect width="90" height="36" rx="18" fill="oklch(0.65 0.20 40)" />
                <text x="45" y="23" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Inter, sans-serif">24/7</text>
              </g>
              
              {/* Warranty badge */}
              <g transform="translate(100, 260)">
                <rect width="70" height="30" rx="15" fill="oklch(0.35 0.18 240)" />
                <text x="35" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">JAMINAN</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
