export { COMPANY, MAJOR_SERVICES, EMERGENCY_SERVICES, DISPATCH_CATEGORY_LABELS, PROPERTY_TYPE_LABELS } from "@/lib/company"
export {
  heroCopyVariantA,
  localizedProjectsList,
  authenticTestimonials,
  trustSignalsCopy,
  technicalFaqs,
} from "@/lib/copy"
export type {
  LocalizedProject,
  AuthenticTestimonial,
  TrustSignal,
  TechnicalFaq,
} from "@/lib/copy"

/** @deprecated Use authenticTestimonials from copy module */
export { authenticTestimonials as TESTIMONIALS } from "@/lib/copy"

/** @deprecated Use technicalFaqs from copy module */
export { technicalFaqs as FAQ_ITEMS } from "@/lib/copy"

/** @deprecated Use localizedProjectsList from copy module */
export { localizedProjectsList as PORTFOLIO_ITEMS } from "@/lib/copy"

/** @deprecated Use trustSignalsCopy.signals via GuaranteesSection */
export const TRUST_ITEMS = [
  {
    title: "Kerja Kemas",
    subtitle: "100% Post-Job Clean Up",
    description:
      "We leave zero residual debris, stains, or mess — your space is spotless when we finish.",
  },
  {
    title: "Kerja Cepat",
    subtitle: "Rapid 24/7 Mobilization",
    description:
      "High-speed dispatch for plumbing emergencies — burst pipes, clogged lines, and hidden leaks.",
  },
  {
    title: "Harga Boleh Bincang",
    subtitle: "Budget-Friendly Quotes",
    description:
      "Flexible pricing tailored for middle-income residential areas — transparent, no hidden charges.",
  },
] as const
