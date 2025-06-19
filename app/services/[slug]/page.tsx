import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'cardiology' },
    { slug: 'neurology' },
    { slug: 'orthopedics' },
    { slug: 'pediatrics' },
    { slug: 'dermatology' },
    { slug: 'radiology' }
  ]
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
