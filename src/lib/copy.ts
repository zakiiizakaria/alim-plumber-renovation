/** ALIM Plumber & Renovation — canonical copy & content datasets */

export const heroCopyVariantA = {
  overline: "",
  headline:
    "Paip Bocor? Ingin Renovate? Kami Selesaikan Cepat.",
  subheadline:
    "ALIM — tukang paip & kontraktor renovation yang anda boleh harapkan. Kecemasan 24/7, kerja kemas, harga boleh dirunding.",
  primaryCta: "WhatsApp Sekarang",
  secondaryCta: "Minta Sebut Harga",
} as const

export const localizedProjectsList = [
  {
    id: "torch-on-ampang",
    title: "Waterproofing Torch-on Membrane",
    location: "Taman Putra Sulaiman, Ampang",
    category: "Projek Besar",
    scope:
      "Pemasangan torch-on membrane di bumbung rata & slab bilik air — persediaan permukaan sepenuhnya dan kemasan rapi semua sambungan.",
    outcome:
      "Selepas musim hujan, terbukti tiada kebocoran. Kawasan dibersihkan sepenuhnya, tiada sisa sampah tinggal.",
    icon: "droplets" as const,
  },
  {
    id: "polytank-cheras",
    title: "Tukar Tangki Air Polytank",
    location: "Bandar Mahkota Cheras, Cheras",
    category: "Penyelenggaraan & Kecemasan",
    scope:
      "Penukaran polytank baharu, menaik taraf float valve, menyambung paip inlet/outlet dan menguji tekanan air.",
    outcome:
      "Tekanan air stabil — selesai pada hari yang sama. Kerja disertakan waranti.",
    icon: "cylinder" as const,
  },
  {
    id: "kitchen-kajang",
    title: "Table Top Concrete Dapur Custom",
    location: "Taman Kajang Perdana, Kajang",
    category: "Projek Ubah Suai",
    scope:
      "Pemasangan concrete table top dapur secara on-site, lengkap dengan kemasan tepi jubin serta pemotongan lubang sinki & paip.",
    outcome:
      "Table top kukuh, siap tepat pada masanya. Harga mengikut bajet anda dan tapak kerja dibersihkan.",
    icon: "utensils" as const,
  },
  {
    id: "pipe-semenyih",
    title: "Baiki Paip Bocor Dalam Dinding",
    location: "Taman Semenyih Mewah, Semenyih",
    category: "Pembaikan Kecemasan",
    scope:
      "Mengesan paip bocor tersembunyi, memotong dinding secara bersasar, menukar bahagian paip dan menampal semula.",
    outcome:
      "Kebocoran diselesaikan dengan waranti. Tiada kesan kotoran atau habuk selepas kerja siap.",
    icon: "pipette" as const,
  },
] as const

export const authenticTestimonials = [
  {
    name: "Encik Hafiz",
    location: "Ampang, Selangor",
    rating: 5,
    quote:
      "Paip dalam dinding bocor tengah malam — ALIM datang cepat, kerja sangat kemas. Waranti kerja membuatkan saya tenang.",
  },
  {
    name: "Puan Sharifah",
    location: "Kajang, Selangor",
    rating: 5,
    quote:
      "Table top concrete dapur cantik dan kukuh. Harga boleh dirunding, tiada caj tersembunyi. Amat disyorkan.",
  },
  {
    name: "Mr. Chong Wei",
    location: "Cheras, Selangor",
    rating: 5,
    quote:
      "Tangki air polytank ditukar dalam sehari. Team profesional, kawasan bersih selepas kerja siap — seperti yang dijanjikan.",
  },
  {
    name: "Encik Amiruddin",
    location: "Semenyih, Selangor",
    rating: 5,
    quote:
      "Torch-on membrane waterproofing untuk bumbung — tiada lagi kebocoran walaupun hujan lebat. Kerja cepat dan memuaskan.",
  },
] as const

export const trustSignalsCopy = {
  overline: "Jaminan Kami",
  headline: "Kerja kami dijamin — malah sebelum kami bermula lagi",
  subheadline:
    "Setiap tugasan ALIM dilindungi dua polisi tetap — demi ketenangan fikiran anda.",
  signals: [
    {
      id: "warranty",
      title: "Waranti Kerja Rasmi",
      description:
        "Setiap pembaikan paip dan kerja wet-work disertakan Waranti Kerja Rasmi. Jika masalah sama berulang dalam tempoh waranti, kami datang baiki secara percuma — tanpa sebarang alasan.",
      icon: "shield" as const,
    },
    {
      id: "cleanup",
      title: "Polisi Bersih 100% Selepas Siap",
      description:
        "Polisi Bersih 100% bermaksud tiada sisa sampah, kesan kotoran, atau habuk selepas kami selesai kerja. Kami mengemas semua bahan buangan, mengelap permukaan, dan memulihkan ruang anda — kerja dijamin kemas.",
      icon: "sparkles" as const,
    },
  ],
} as const

export const technicalFaqs = [
  {
    question:
      "Bagaimanakah Waranti Kerja Rasmi melindungi saya jika kebocoran berulang?",
    answer:
      "Jika kebocoran yang kami telah baiki berulang di tempat yang sama dalam tempoh waranti, ALIM akan datang memeriksa dan membaiki semula — tanpa caj tambahan. Ini meliputi pembaikan paip dalaman, waterproofing slab, dan kerja sambungan tangki air.",
  },
  {
    question: "Apakah yang termasuk di bawah Polisi Bersih 100%?",
    answer:
      "Kami membersihkan semua sisa binaan, mengelap permukaan, membersihkan habuk kerja hacking, dan memastikan tiada kesan kotoran tertinggal. Sama ada kerja torch-on membrane atau pembaikan paip tersembunyi — rumah anda bersih sebelum team kami selesai kerja.",
  },
  {
    question:
      "Berapa pantas respons ALIM untuk tugasan kecemasan?",
    answer:
      "Team Kerja Cepat kami sedia membantu 24/7 untuk masalah paip pecah, sinki sumbat, dan kebocoran tersembunyi. Kebanyakan panggilan kecemasan di Ampang, Cheras, Kajang, dan Semenyih menerima respons di lokasi dalam tempoh 1–2 jam.",
  },
] as const

export type LocalizedProject = (typeof localizedProjectsList)[number]
export type AuthenticTestimonial = (typeof authenticTestimonials)[number]
export type TrustSignal = (typeof trustSignalsCopy.signals)[number]
export type TechnicalFaq = (typeof technicalFaqs)[number]

