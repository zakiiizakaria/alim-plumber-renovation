import { Shield, Sparkles } from "lucide-react"

import { trustSignalsCopy, type TrustSignal } from "@/lib/copy"

const SIGNAL_ICONS: Record<TrustSignal["icon"], typeof Shield> = {
  shield: Shield,
  sparkles: Sparkles,
}

export function GuaranteesSection() {
  return (
    <section
      id="guarantees"
      className="section-py border-b border-border/40 bg-section-surface bg-section-shapes"
      aria-labelledby="guarantees-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-header mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold text-brand-accent uppercase tracking-widest">
            {trustSignalsCopy.overline}
          </p>
          <h2
            id="guarantees-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
          >
            {trustSignalsCopy.headline}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {trustSignalsCopy.subheadline}
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {trustSignalsCopy.signals.map((signal) => {
            const Icon = SIGNAL_ICONS[signal.icon]
            return (
              <li
                key={signal.id}
                className="relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-6 sm:p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5 hover:border-brand-accent/25"
              >
                <div
                  className="pointer-events-none absolute -top-10 -right-10 size-44 rounded-full bg-brand-accent/6 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent to-brand-primary text-white shadow-lg shadow-brand-accent/25 ring-4 ring-brand-accent/15">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <div className="text-left">
                    <h3 className="text-xl font-extrabold text-brand-primary tracking-tight">
                      {signal.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {signal.description}
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
