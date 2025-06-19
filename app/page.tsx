import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesGrid from "@/components/services-grid"
import StatsSection from "@/components/stats-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import NewsSection from "@/components/news-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
    </div>
  )
}
