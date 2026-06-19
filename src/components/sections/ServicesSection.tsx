import {
  Hammer,
  Layers,
  Grid,
  Paintbrush,
  Wrench,
  Search,
  Gauge,
  DoorOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react"

import { EMERGENCY_SERVICES, MAJOR_SERVICES } from "@/lib/constants"
import { LeadFormDialog } from "@/components/LeadFormDialog"
import { Button } from "@/components/ui/button"

// Map icons dynamically based on index for Major Services
const MAJOR_ICONS = [Hammer, Layers, Grid, Paintbrush]

// Map icons dynamically based on index for Emergency Services
const EMERGENCY_ICONS = [Wrench, Search, Gauge, DoorOpen]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-py relative overflow-hidden border-b border-border/40 bg-section-surface-alt bg-section-shapes-alt"
      aria-labelledby="services-heading"
    >
      {/* Visual glowing meshes in background */}
      <div className="pointer-events-none absolute top-1/4 -left-48 size-96 rounded-full bg-brand-orange/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-48 size-96 rounded-full bg-brand-accent/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header mx-auto max-w-3xl text-center">
          <p className="mb-2 text-xs font-bold text-brand-accent uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="size-3.5 text-brand-accent animate-pulse" />
            Servis Kami
          </p>
          <h2
            id="services-heading"
            className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl leading-tight"
          >
            Selesaikan Masalah Rumah Anda Cepat &amp; Kemas
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Kami bahagikan servis kepada 2 kategori khusus supaya anda mudah memilih mengikut kesesuaian bajet dan keperluan semasa.
          </p>
        </div>

        {/* Dynamic Side-by-Side Modern Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-start">
          
          {/* Column 1: Major Renovation & Wet Works (Safety Orange Theme) */}
          <article className="group/column relative rounded-3xl border border-brand-orange/15 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-brand-orange/[0.02] transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/[0.04] hover:border-brand-orange/30">
            {/* Header Badge */}
            <div className="absolute -top-3.5 left-6 rounded-full bg-brand-orange px-4 py-1 text-[10px] font-black text-white uppercase tracking-wider shadow-md shadow-brand-orange/20">
              Ubah Suai &amp; Wet Works
            </div>
            
            <div className="mb-6 mt-2 text-left">
              <h3 className="text-2xl font-extrabold text-brand-primary tracking-tight">
                Renovation Besar &amp; Wet Works
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Untuk kerja binaan kekal, struktur bumbung, tiles, table top concrete, waterproofing slab, dan renovation penuh yang perlukan perancangan bajet.
              </p>
            </div>

            {/* List of cards */}
            <ul className="flex flex-col gap-4">
              {MAJOR_SERVICES.map((service, index) => {
                const Icon = MAJOR_ICONS[index] || Hammer
                return (
                  <li
                    key={service.title}
                    className="group/card flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-100 bg-white/90 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-orange/25"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-amber-500 text-white shadow-lg shadow-brand-orange/15 ring-4 ring-brand-orange/5 transition-transform duration-300 group-hover/card:scale-105">
                      <Icon className="size-5.5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-extrabold text-brand-primary text-base tracking-tight leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-[10px] font-bold text-brand-orange uppercase tracking-wider mt-0.5">
                        {service.subtitle}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {service.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </article>

          {/* Column 2: Emergency Repairs & Handyman (Water Teal Theme) */}
          <article className="group/column relative rounded-3xl border border-brand-accent/20 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-brand-accent/[0.02] transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/[0.04] hover:border-brand-accent/40">
            {/* Header Badge */}
            <div className="absolute -top-3.5 left-6 rounded-full bg-brand-accent px-4 py-1 text-[10px] font-black text-white uppercase tracking-wider shadow-md shadow-brand-accent/20">
              Emergency Dispatch 24/7
            </div>
            
            <div className="mb-6 mt-2 text-left">
              <h3 className="text-2xl font-extrabold text-brand-primary tracking-tight">
                Baiki Emergency &amp; Handyman
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Servis pantas untuk paip sumbat, paip pecah dalam dinding, ganti tangki air polytank, servis meter paip, dan baiki fitting rumah.
              </p>
            </div>

            {/* List of cards */}
            <ul className="flex flex-col gap-4">
              {EMERGENCY_SERVICES.map((service, index) => {
                const Icon = EMERGENCY_ICONS[index] || Wrench
                return (
                  <li
                    key={service.title}
                    className="group/card flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-100 bg-white/90 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-accent/25"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent to-cyan-500 text-white shadow-lg shadow-brand-accent/15 ring-4 ring-brand-accent/5 transition-transform duration-300 group-hover/card:scale-105">
                      <Icon className="size-5.5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-extrabold text-brand-primary text-base tracking-tight leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-[10px] font-bold text-brand-accent uppercase tracking-wider mt-0.5">
                        {service.subtitle}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {service.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </article>
          
        </div>

        {/* Bottom micro-conversion banner */}
        <div className="mt-10 text-center max-w-2xl mx-auto rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-extrabold text-brand-primary text-sm tracking-tight">Nak tanya sebut harga projek?</h4>
            <p className="text-xs text-muted-foreground">Hubungi kami untuk dapatkan nasihat &amp; sebut harga percuma.</p>
          </div>
          <LeadFormDialog
            defaultDispatchCategory="renovation_inspection"
            title="Dapatkan Bajet &amp; Inspection Free"
            trigger={
              <Button
                size="sm"
                className="w-full sm:w-auto h-9 px-4 text-xs font-bold rounded-lg bg-brand-primary text-white hover:bg-brand-primary/95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Mula Tanya Sekarang
                <ArrowRight className="size-3.5" />
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}
