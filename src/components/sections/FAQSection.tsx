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
      className="border-b border-border/60 bg-muted/30 py-16 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium text-primary">
            Technical FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Warranty, clean-up &amp; dispatch — explained
          </h2>
          <p className="mt-3 text-muted-foreground">
            Straight answers on our Official Work Performance Warranty, Post-Job
            Clean Up Policy, and emergency response times.
          </p>
        </div>

        <Accordion className="rounded-xl border border-border/70 bg-card px-4 shadow-sm">
          {technicalFaqs.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
