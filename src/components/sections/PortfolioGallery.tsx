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
      className="border-b border-border/60 bg-muted/30 py-16 sm:py-20"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-medium text-primary">Localized Projects</p>
          <h2
            id="portfolio-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Real jobs across Ampang &amp; Selangor
          </h2>
          <p className="mt-3 text-muted-foreground">
            Documented project scopes from our active service areas — torch-on
            membrane, polytank, concrete tops, and concealed pipe repairs.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {localizedProjectsList.map((project) => {
            const Icon = PROJECT_ICONS[project.icon]
            return (
              <li
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-sm transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-4 border-b border-border/60 bg-gradient-to-r from-primary/8 to-transparent p-5">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                      {project.category}
                    </p>
                    <h3 className="font-bold text-foreground">{project.title}</h3>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3 shrink-0" aria-hidden="true" />
                      {project.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                      Scope
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {project.scope}
                    </p>
                  </div>
                  <div className="mt-auto rounded-lg border border-primary/15 bg-primary/5 p-3">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Outcome
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground">
                      {project.outcome}
                    </p>
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
