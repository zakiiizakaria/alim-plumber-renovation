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
      className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20"
      aria-labelledby="guarantees-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-medium text-primary">
            {trustSignalsCopy.overline}
          </p>
          <h2
            id="guarantees-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
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
                className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-lg shadow-primary/5 sm:p-8"
              >
                <div
                  className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-primary/8 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative flex items-start gap-4">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-foreground sm:text-xl">
                      {signal.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
