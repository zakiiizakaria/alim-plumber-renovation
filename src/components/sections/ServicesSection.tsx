import { CheckCircle2 } from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { EMERGENCY_SERVICES, MAJOR_SERVICES } from "@/lib/constants"

function ServiceGrid({
  services,
}: {
  services: readonly {
    title: string
    subtitle: string
    description: string
  }[]
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => (
        <li
          key={service.title}
          className="group rounded-xl border border-border/70 bg-card p-5 text-left transition-shadow hover:shadow-md hover:shadow-primary/5"
        >
          <div className="mb-1 flex items-start gap-2">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-semibold text-foreground">{service.title}</h3>
              <p className="text-xs font-medium text-renovation">
                {service.subtitle}
              </p>
            </div>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </li>
      ))}
    </ul>
  )
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-border/60 py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-medium text-primary">Our Services</p>
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Two focused service modules
          </h2>
          <p className="mt-3 text-muted-foreground">
            Major structural wet works and rapid emergency repairs — handled by
            one trusted Ampang-based contractor team.
          </p>
        </div>

        <Tabs defaultValue="major" className="mx-auto max-w-4xl">
          <TabsList className="mx-auto mb-8 grid h-auto w-full max-w-xl grid-cols-1 gap-1 p-1 sm:grid-cols-2">
            <TabsTrigger value="major" className="py-2 text-xs sm:text-sm">
              Major Renovation &amp; Wet Works
            </TabsTrigger>
            <TabsTrigger value="emergency" className="py-2 text-xs sm:text-sm">
              Emergency Repairs &amp; Handyman
            </TabsTrigger>
          </TabsList>

          <TabsContent value="major">
            <ServiceGrid services={MAJOR_SERVICES} />
          </TabsContent>

          <TabsContent value="emergency">
            <ServiceGrid services={EMERGENCY_SERVICES} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
