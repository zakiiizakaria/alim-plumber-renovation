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
    <>
      <Header />
      <main>
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
    </>
  )
}

export default App
