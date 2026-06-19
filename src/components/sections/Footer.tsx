import { Mail, MapPin, Phone } from "lucide-react"

import { BrandMark } from "@/components/BrandMark"
import { LeadFormDialog } from "@/components/LeadFormDialog"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/constants"
import { heroCopyVariantA } from "@/lib/copy"
import {
  buildEmergencyWhatsAppUrl,
  buildQuickWhatsAppUrl,
} from "@/lib/whatsapp"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-foreground to-[oklch(0.28_0.16_240)] text-background"
      aria-labelledby="footer-heading"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-brand-accent/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 size-72 rounded-full bg-brand-orange/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Brand + Contacts */}
          <div className="text-left">
            <BrandMark variant="footer" className="mb-1" />
            <h2 id="footer-heading" className="sr-only">{COMPANY.name}</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              24/7 emergency plumber &amp; renovation contractor — kerja cepat, kerja kemas, harga boleh bincang.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-sm text-background/75">
              <a
                href={buildQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-background transition-colors"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${COMPANY.phoneSecondary}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-background transition-colors"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {COMPANY.phoneSecondaryDisplay}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 hover:text-background transition-colors"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {COMPANY.email}
              </a>
              <p className="flex items-start gap-2 text-background/60">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{COMPANY.address}</span>
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="flex flex-col items-start justify-center gap-4 rounded-2xl border border-background/10 bg-background/5 p-6 sm:p-8">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">Ada emergency paip / bumbung?</h3>
              <p className="mt-1 text-sm text-background/65">
                Sama ada baiki emergency 24/7 atau inspection renovation free — chat kami kat WhatsApp sekarang.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <a
                href={buildEmergencyWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-brand-accent px-5 text-sm font-extrabold text-brand-primary shadow-md hover:scale-[1.02] hover:-translate-y-0.5 active:scale-98 transition-all duration-300 ease-out sm:w-auto"
              >
                {heroCopyVariantA.primaryCta}
              </a>
              <LeadFormDialog
                defaultDispatchCategory="renovation_inspection"
                title={heroCopyVariantA.secondaryCta}
                trigger={
                  <Button
                    size="lg"
                    className="w-full bg-renovation text-renovation-foreground shadow-md hover:scale-[1.02] hover:-translate-y-0.5 active:scale-98 transition-all duration-300 ease-out h-11 px-5 font-bold rounded-xl sm:w-auto"
                  >
                    {heroCopyVariantA.secondaryCta}
                  </Button>
                }
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-5 text-xs text-background/45 sm:flex-row">
          <p>&copy; {currentYear} {COMPANY.name}. Hak cipta terpelihara.</p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4">
              <li><a href="#services" className="hover:text-background/75 transition-colors">Servis</a></li>
              <li><a href="#guarantees" className="hover:text-background/75 transition-colors">Jaminan</a></li>
              <li><a href="#portfolio" className="hover:text-background/75 transition-colors">Hasil Kerja</a></li>
              <li><a href="#reviews" className="hover:text-background/75 transition-colors">Testimoni</a></li>
              <li><a href="#faq" className="hover:text-background/75 transition-colors">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
