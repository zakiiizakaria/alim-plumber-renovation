import {
  COMPANY,
  DISPATCH_CATEGORY_LABELS,
  PROPERTY_TYPE_LABELS,
} from "@/lib/constants"
import type { DispatchCategory, LeadFormData } from "@/types/lead"

export function formatLeadMessage(data: LeadFormData): string {
  return [
    `Hi ${COMPANY.shortName},`,
    "",
    "📋 *SERVICE REQUEST CHECKLIST*",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "☑️ *Client Name:*",
    data.name.trim(),
    "",
    "☑️ *Service Dispatch Category:*",
    DISPATCH_CATEGORY_LABELS[data.dispatchCategory],
    "",
    "☑️ *Specific Area:*",
    data.area.trim(),
    "",
    "☑️ *Property Architecture:*",
    PROPERTY_TYPE_LABELS[data.propertyType],
    "",
    "☑️ *Job Description:*",
    data.description.trim(),
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    `📍 *Base:* ${COMPANY.address}`,
    "",
    "Sent via ALIM Plumber & Renovation website.",
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
    `Hi ${COMPANY.shortName}, I need assistance with a plumbing / renovation job in ${COMPANY.serviceAreas[0]}.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function buildEmergencyWhatsAppUrl(): string {
  return buildQuickWhatsAppUrl(
    [
      `Hi ${COMPANY.shortName},`,
      "",
      "🚨 *EMERGENCY PLUMBING REQUEST*",
      "",
      "☑️ *Dispatch Category:* Emergency Plumbing (Paip Sumbat / Bocor)",
      "☑️ *Urgency:* Immediate assistance required",
      "",
      "Please advise your earliest available slot.",
      "",
      "Sent via ALIM Plumber & Renovation website.",
    ].join("\n")
  )
}

export function getDefaultFormForCategory(
  category: DispatchCategory
): Partial<LeadFormData> {
  return { dispatchCategory: category }
}
