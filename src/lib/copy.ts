/** ALIM Plumber & Renovation — canonical copy & content datasets */

export const heroCopyVariantA = {
  overline:
    "Ampang-Based Contractor · 24/7 Emergency Dispatch · Selangor & Putrajaya Coverage",
  headline:
    "Paip Bocor, Renovation Rumah — ALIM Selesaikan Cepat, Kemas & Boleh Bincang",
  subheadline:
    "ALIM Plumber & Renovation is your trusted local team for emergency plumbing dispatch and full wet-works renovation — from torch-on membrane waterproofing and tangki air polytank overhauls to custom concrete kitchen counter table tops across Ampang, Cheras, Kajang, Semenyih, Putrajaya & Cyberjaya.",
  primaryCta: "WhatsApp Emergency Dispatch",
  secondaryCta: "Get Renovation Quote",
} as const

export const localizedProjectsList = [
  {
    id: "torch-on-ampang",
    title: "Torch-on Membrane Waterproofing",
    location: "Taman Putra Sulaiman, Ampang",
    category: "Major Wet Works",
    scope:
      "Flat roof & bathroom slab torch-on membrane application with full surface preparation and seam sealing.",
    outcome:
      "Zero recurring seepage after monsoon season — kerja kemas with full debris removal on completion.",
    icon: "droplets" as const,
  },
  {
    id: "polytank-cheras",
    title: "Tangki Air Polytank Overhaul",
    location: "Bandar Mahkota Cheras, Cheras",
    category: "Emergency & Maintenance",
    scope:
      "Polytank replacement, float valve upgrade, inlet/outlet piping connection and pressure testing.",
    outcome:
      "Stable water pressure restored same day — backed by Official Work Performance Warranty.",
    icon: "cylinder" as const,
  },
  {
    id: "kitchen-kajang",
    title: "Custom Concrete Kitchen Counter Table Top",
    location: "Taman Kajang Perdana, Kajang",
    category: "Major Renovation",
    scope:
      "On-site cast custom concrete kitchen counter table top with tile edge finish and plumbing cut-outs.",
    outcome:
      "Durable countertop delivered on schedule — harga boleh bincang honoured, site left spotless.",
    icon: "utensils" as const,
  },
  {
    id: "pipe-semenyih",
    title: "Internal Wall Pipe Leak Repair",
    location: "Taman Semenyih Mewah, Semenyih",
    category: "Emergency Repair",
    scope:
      "Concealed pipe leak detection, targeted wall hacking, pipe section replacement and patch reinstatement.",
    outcome:
      "Leak sealed with post-fix warranty — no stain, dust, or debris left behind post job.",
    icon: "pipette" as const,
  },
] as const

export const authenticTestimonials = [
  {
    name: "Encik Hafiz",
    location: "Ampang, Selangor",
    rating: 5,
    quote:
      "Paip dalam dinding bocor tengah malam — ALIM dispatch cepat, siap kerja kemas. Warranty badge memang buat saya tenang.",
  },
  {
    name: "Puan Sharifah",
    location: "Kajang, Selangor",
    rating: 5,
    quote:
      "Custom concrete kitchen counter table top cantik dan kukuh. Harga boleh bincang, tiada caj surprise. Highly recommended.",
  },
  {
    name: "Mr. Chong Wei",
    location: "Cheras, Selangor",
    rating: 5,
    quote:
      "Tangki air polytank tukar dalam sehari. Team professional, area bersih selepas siap — exactly as promised.",
  },
  {
    name: "Encik Amiruddin",
    location: "Semenyih, Selangor",
    rating: 5,
    quote:
      "Torch-on membrane waterproofing untuk bumbung — lepas hujan heavy tak bocor lagi. Kerja cepat, kerja kemas, puas hati.",
  },
] as const

export const trustSignalsCopy = {
  overline: "Our Guarantees",
  headline: "Built-in trust — before we even start the job",
  subheadline:
    "Every ALIM dispatch is backed by two non-negotiable policies that protect your home and your peace of mind.",
  signals: [
    {
      id: "warranty",
      title: "Official Work Performance Warranty",
      description:
        "Every plumbing repair and wet-work job is covered by our Official Work Performance Warranty. If the same issue returns within the warranty period, we return and rectify at no extra charge — no excuses, no runaround.",
      icon: "shield" as const,
    },
    {
      id: "cleanup",
      title: "100% Post-Job Clean Up Policy",
      description:
        "Our 100% Post-Job Clean Up Policy means zero residual debris, stains, or dust when we leave. We bag all waste, wipe down surfaces, and restore your space to a move-in-ready condition — kerja kemas, guaranteed.",
      icon: "sparkles" as const,
    },
  ],
} as const

export const technicalFaqs = [
  {
    question:
      "How does the Official Work Performance Warranty cover returning leaks?",
    answer:
      "If a leak we repaired reoccurs at the same point within the warranty window, ALIM returns to inspect and rectify at no additional labour charge. This applies to internal pipe repairs, slab waterproofing, and tangki air connection works — giving you documented protection against recurring failures.",
  },
  {
    question: "What exactly is included in the 100% Post-Job Clean Up Policy?",
    answer:
      "We remove all construction debris, wipe down affected surfaces, vacuum dust from hacking works, and ensure no stains or residue remain. Whether it is a torch-on membrane job or a concealed pipe repair, your home is left clean and habitable before our team departs.",
  },
  {
    question:
      "How fast can ALIM dispatch for emergency plumbing in Ampang & Cheras?",
    answer:
      "Our Kerja Cepat team mobilizes 24/7 for burst pipes, clogged sinks, and hidden wall leaks. Most emergency calls in Ampang, Cheras, Kajang, and Semenyih receive on-site response within 1–2 hours depending on traffic and job severity.",
  },
] as const

export type LocalizedProject = (typeof localizedProjectsList)[number]
export type AuthenticTestimonial = (typeof authenticTestimonials)[number]
export type TrustSignal = (typeof trustSignalsCopy.signals)[number]
export type TechnicalFaq = (typeof technicalFaqs)[number]
