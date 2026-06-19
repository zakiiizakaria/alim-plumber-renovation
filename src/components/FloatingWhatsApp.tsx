import { MessageCircle } from "lucide-react"

import { COMPANY } from "@/lib/constants"
import { buildEmergencyWhatsAppUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

interface FloatingWhatsAppProps {
  className?: string
}

export function FloatingWhatsApp({ className }: FloatingWhatsAppProps) {
  return (
    <a
      href={buildEmergencyWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp emergency plumber — ${COMPANY.name}`}
      className={cn(
        "fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition-transform hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6 sm:size-16",
        "focus-visible:ring-4 focus-visible:ring-whatsapp/40 focus-visible:outline-none",
        className
      )}
    >
      <MessageCircle className="size-7 sm:size-8" aria-hidden="true" />
    </a>
  )
}
