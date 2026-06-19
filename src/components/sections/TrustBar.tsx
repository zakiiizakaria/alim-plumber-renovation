import { Sparkles } from "lucide-react"

import { TRUST_ITEMS } from "@/lib/constants"

const ICONS = ["🧹", "⚡", "💬"] as const

export function TrustBar() {
  return (
    <section
      className="section-py-compact border-b border-border/40 bg-section-surface bg-section-shapes"
      aria-label="Why customers trust ALIM Plumber & Renovation"
    >
      <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {TRUST_ITEMS.map((item, index) => (
          <article
            key={item.title}
            className="group flex flex-col sm:flex-row items-start gap-5 rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5 hover:border-brand-accent/25"
          >
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/8 text-brand-primary text-xl ring-4 ring-brand-primary/5 shadow-sm group-hover:scale-105 transition-transform duration-300"
              aria-hidden="true"
            >
              {ICONS[index]}
            </span>
            <div className="text-left">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base font-extrabold text-brand-primary tracking-tight">
                  {item.title}
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent/10 px-2.5 py-0.5 text-[9px] font-extrabold text-brand-primary uppercase tracking-wide">
                  <Sparkles className="size-2.5 text-brand-accent animate-pulse" aria-hidden="true" />
                  {item.subtitle}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
