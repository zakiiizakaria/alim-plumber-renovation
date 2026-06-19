import { Sparkles } from "lucide-react"

import { TRUST_ITEMS } from "@/lib/constants"

const ICONS = ["🧹", "⚡", "💬"] as const

export function TrustBar() {
  return (
    <section
      className="border-b border-border/60 bg-muted/40"
      aria-label="Why customers trust ALIM Plumber & Renovation"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        {TRUST_ITEMS.map((item, index) => (
          <article
            key={item.title}
            className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5 shadow-sm"
          >
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl"
              aria-hidden="true"
            >
              {ICONS[index]}
            </span>
            <div className="text-left">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base font-semibold text-foreground">
                  {item.title}
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                  <Sparkles className="size-2.5" aria-hidden="true" />
                  {item.subtitle}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
