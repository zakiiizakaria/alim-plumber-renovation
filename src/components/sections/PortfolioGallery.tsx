import {
  Cylinder,
  Droplets,
  MapPin,
  Pipette,
  Utensils,
  type LucideIcon,
} from "lucide-react"

import { localizedProjectsList, type LocalizedProject } from "@/lib/copy"

const PROJECT_ICONS: Record<LocalizedProject["icon"], LucideIcon> = {
  droplets: Droplets,
  cylinder: Cylinder,
  utensils: Utensils,
  pipette: Pipette,
}

export function PortfolioGallery() {
  return (
    <section
      id="portfolio"
      className="section-py border-b border-border/40 bg-section-surface-alt bg-section-shapes-alt"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-header mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold text-brand-accent uppercase tracking-widest">Hasil Kerja Kami</p>
          <h2
            id="portfolio-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
          >
            Kerja Sebenar, Hasil Puas Hati
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Pemasangan waterproofing bumbung, penukaran tangki air polytank, pembaikan slab konkrit, dan pembaikan paip bocor dalam dinding — semuanya diselesaikan sepenuhnya.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {localizedProjectsList.map((project) => {
            const Icon = PROJECT_ICONS[project.icon]
            return (
              <li
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-sm text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/5 hover:border-brand-accent/25"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 border-b border-slate-100/80 bg-gradient-to-r from-brand-accent/5 to-transparent p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary text-white shadow-md shadow-brand-accent/20 ring-2 ring-brand-accent/10 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-extrabold tracking-widest text-brand-orange uppercase">
                      {project.category}
                    </p>
                    <h3 className="font-extrabold text-brand-primary text-sm tracking-tight leading-snug">{project.title}</h3>
                    <p className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground mt-0.5">
                      <MapPin className="size-3 shrink-0 text-brand-accent" aria-hidden="true" />
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <p className="text-sm leading-relaxed text-slate-500">
                    {project.scope}
                  </p>
                  <div className="mt-auto flex items-start gap-2 rounded-lg border border-brand-accent/15 bg-brand-accent/5 px-3 py-2.5 transition-all duration-300 group-hover:bg-brand-accent/8">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white text-[9px] font-black">✓</span>
                    <p className="text-sm text-brand-primary font-semibold leading-snug">{project.outcome}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
