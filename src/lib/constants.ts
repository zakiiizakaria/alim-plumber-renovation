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
    subtitle: "Bersih 100% Selepas Siap",
    description:
      "Tiada sisa sampah, kesan kotoran atau habuk — tapak kerja bersih selepas kami selesai.",
  },
  {
    title: "Kerja Cepat",
    subtitle: "Dispatch 24/7",
    description:
      "Tindakan pantas untuk kecemasan paip — pecah, sumbat, atau kebocoran tersembunyi.",
  },
  {
    title: "Harga Boleh Dirunding",
    subtitle: "Mengikut Bajet Anda",
    description:
      "Kadar harga yang fleksibel untuk kawasan kediaman — telus, tanpa kos tersembunyi.",
  },
] as const
