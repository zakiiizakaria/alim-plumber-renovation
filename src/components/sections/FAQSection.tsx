import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { technicalFaqs } from "@/lib/copy"

export function FAQSection() {
  return (
    <section
      id="faq"
      className="section-py border-b border-border/40 bg-section-surface-alt bg-section-shapes-alt"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="section-header text-center">
          <p className="mb-2 text-xs font-bold text-brand-accent uppercase tracking-widest">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
          >
            Soalan Yang Selalu Ditanya
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Info pasal warranty, kebersihan tapak, dan servis emergency — semua kami terangkan kat sini.
          </p>
        </div>

        <Accordion className="rounded-2xl border border-slate-100 bg-white/80 px-4 sm:px-6 py-1 shadow-sm">
          {technicalFaqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="border-b border-slate-100/60 last:border-b-0"
            >
              <AccordionTrigger className="text-left text-brand-primary font-bold text-sm sm:text-base tracking-tight py-4 hover:no-underline hover:text-brand-accent group-aria-expanded/accordion-trigger:text-brand-accent transition-colors duration-200">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

