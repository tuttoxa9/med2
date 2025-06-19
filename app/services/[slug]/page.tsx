import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceDetailPage slug={params.slug} />
      <Footer />
    </div>
  )
}
