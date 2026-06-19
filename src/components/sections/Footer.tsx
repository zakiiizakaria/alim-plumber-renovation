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
      className="bg-foreground text-background"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-left">
            <BrandMark variant="footer" className="mb-1" />
            <h2 id="footer-heading" className="sr-only">
              {COMPANY.name}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-background/70">
              Local plumber &amp; renovation contractor serving Ampang, Cheras,
              Kajang, Semenyih, Putrajaya, and Cyberjaya — kerja cepat, kerja
              kemas, harga boleh bincang.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-background/80">
              <a
                href={buildQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-background"
              >
                <Phone className="size-4" aria-hidden="true" />
                {COMPANY.phoneDisplay} (Primary)
              </a>
              <a
                href={`https://wa.me/${COMPANY.phoneSecondary}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-background"
              >
                <Phone className="size-4" aria-hidden="true" />
                {COMPANY.phoneSecondaryDisplay} (Secondary)
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-background"
              >
                <Mail className="size-4" aria-hidden="true" />
                {COMPANY.email}
              </a>
              <p className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{COMPANY.address}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 rounded-2xl border border-background/10 bg-background/5 p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Need a plumber now?</h3>
            <p className="text-sm text-background/70">
              24/7 emergency dispatch or free renovation inspection — reach us
              on WhatsApp instantly.
            </p>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={buildEmergencyWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-whatsapp px-4 text-sm font-medium text-whatsapp-foreground transition-colors hover:bg-whatsapp/90 sm:w-auto"
              >
                {heroCopyVariantA.primaryCta}
              </a>
              <LeadFormDialog
                defaultDispatchCategory="renovation_inspection"
                title={heroCopyVariantA.secondaryCta}
                trigger={
                  <Button
                    size="lg"
                    className="w-full bg-renovation text-renovation-foreground hover:bg-renovation/90 sm:w-auto"
                  >
                    {heroCopyVariantA.secondaryCta}
                  </Button>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/50 sm:flex-row">
          <p>
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4">
              <li>
                <a href="#services" className="hover:text-background/80">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-background/80">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-background/80">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
