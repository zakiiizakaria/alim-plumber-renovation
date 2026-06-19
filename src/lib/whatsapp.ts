import {
  COMPANY,
  DISPATCH_CATEGORY_LABELS,
  PROPERTY_TYPE_LABELS,
} from "@/lib/constants"
import type { DispatchCategory, LeadFormData } from "@/types/lead"

export function formatLeadMessage(data: LeadFormData): string {
  return [
    `Salam ${COMPANY.shortName},`,
    "",
    "📋 *BORANG PERMINTAAN SERVIS*",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "☑️ *Nama:*",
    data.name.trim(),
    "",
    "☑️ *Kategori Servis:*",
    DISPATCH_CATEGORY_LABELS[data.dispatchCategory],
    "",
    "☑️ *Kawasan:*",
    data.area.trim(),
    "",
    "☑️ *Jenis Hartanah:*",
    PROPERTY_TYPE_LABELS[data.propertyType],
    "",
    "☑️ *Penerangan Kerja:*",
    data.description.trim(),
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    `📍 *Lokasi:* ${COMPANY.address}`,
    "",
    "Dihantar melalui website ALIM Plumber & Renovation.",
  ].join("\n")
}

export function buildWhatsAppUrl(
  data: LeadFormData,
  phone = COMPANY.phone
): string {
  const message = formatLeadMessage(data)
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function redirectToWhatsApp(data: LeadFormData): void {
  window.open(buildWhatsAppUrl(data), "_blank", "noopener,noreferrer")
}

export function buildQuickWhatsAppUrl(
  text?: string,
  phone = COMPANY.phone
): string {
  const message =
    text ??
    `Salam ${COMPANY.shortName}, saya perlukan bantuan plumbing / renovation di ${COMPANY.serviceAreas[0]}.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function buildEmergencyWhatsAppUrl(): string {
  return buildQuickWhatsAppUrl(
    [
      `Salam ${COMPANY.shortName},`,
      "",
      "🚨 *PERMINTAAN EMERGENCY PLUMBING*",
      "",
      "☑️ *Kategori:* Emergency Plumbing (Paip Sumbat / Bocor)",
      "☑️ *Urgency:* Perlukan bantuan segera",
      "",
      "Mohon maklumkan slot terawal yang available.",
      "",
      "Dihantar melalui website ALIM Plumber & Renovation.",
    ].join("\n")
  )
}

export function getDefaultFormForCategory(
  category: DispatchCategory
): Partial<LeadFormData> {
  return { dispatchCategory: category }
}
