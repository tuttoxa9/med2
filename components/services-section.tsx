import Link from "next/link"
import {
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Activity,
  Bone,
  Microscope,
  Flower,
  Shield,
  Scissors,
  Users,
  Target,
} from "lucide-react"

const services = [
  { name: "Стоматология", icon: Heart, href: "/services/stomatology" },
  { name: "Пластическая хирургия", icon: Scissors, href: "/services/plastic-surgery" },
  { name: "Диагностика", icon: Microscope, href: "/services/diagnostics" },
  { name: "Реабилитация после инсульта", icon: Brain, href: "/services/rehabilitation" },
  { name: "Офтальмология", icon: Eye, href: "/services/ophthalmology" },
  { name: "Гинекология", icon: Flower, href: "/services/gynecology" },
  { name: "Кардиология", icon: Heart, href: "/services/cardiology" },
  { name: "Лечение в Израиле", icon: Target, href: "/services/israel-treatment" },
  { name: "Лечение ожирения", icon: Activity, href: "/services/obesity-treatment" },
  { name: "Неврология", icon: Brain, href: "/services/neurology" },
  { name: "Онкология", icon: Shield, href: "/services/oncology" },
  { name: "Ортопедия", icon: Bone, href: "/services/orthopedics" },
  { name: "Спелеолечение", icon: Stethoscope, href: "/services/speleotherapy" },
  { name: "Урология", icon: Users, href: "/services/urology" },
  { name: "Нейрохирургия", icon: Brain, href: "/services/neurosurgery" },
  { name: "Хирургия", icon: Scissors, href: "/services/surgery" },
  { name: "Эстетическая гинекология", icon: Flower, href: "/services/aesthetic-gynecology" },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.slice(0, 18).map((service, index) => {
            const IconComponent = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col items-center text-center group hover:scale-105 transition-transform"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
