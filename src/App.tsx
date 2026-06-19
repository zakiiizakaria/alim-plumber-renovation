import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"
import { Header } from "@/components/Header"
import { FAQSection } from "@/components/sections/FAQSection"
import { Footer } from "@/components/sections/Footer"
import { GuaranteesSection } from "@/components/sections/GuaranteesSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { PortfolioGallery } from "@/components/sections/PortfolioGallery"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { TestimonialSection } from "@/components/sections/TestimonialSection"
import { TrustBar } from "@/components/sections/TrustBar"

function App() {
  return (
    <div className="relative min-h-svh">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[18%] -left-[8%] size-[58vw] max-w-3xl rounded-full bg-brand-accent/25 blur-[110px] animate-gradient-drift" />
        <div className="absolute top-[28%] -right-[12%] size-[48vw] max-w-2xl rounded-full bg-brand-orange/20 blur-[100px] animate-gradient-drift [animation-delay:-6s]" />
        <div className="absolute -bottom-[12%] left-[18%] size-[52vw] max-w-3xl rounded-full bg-brand-primary/18 blur-[120px] animate-gradient-drift [animation-delay:-12s]" />
      </div>

      <Header />
      <main className="relative">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <GuaranteesSection />
        <PortfolioGallery />
        <TestimonialSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
