"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import PriceInquiryModal from "./price-inquiry-modal"
import { useState } from "react"

const services = [
  {
    title: "Стоматология",
    description: "Имплантация, протезирование, лечение зубов современными методами",
    price: "от 150 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/stomatology",
    popular: true,
  },
  {
    title: "Кардиология",
    description: "Диагностика и лечение заболеваний сердечно-сосудистой системы",
    price: "от 200 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/cardiology",
  },
  {
    title: "Офтальмология",
    description: "Лазерная коррекция зрения, лечение катаракты и глаукомы",
    price: "от 300 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/ophthalmology",
  },
  {
    title: "Онкология",
    description: "Современные методы диагностики и лечения онкологических заболеваний",
    price: "от 500 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/oncology",
    popular: true,
  },
  {
    title: "Ортопедия",
    description: "Эндопротезирование суставов, лечение травм опорно-двигательного аппарата",
    price: "от 400 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/orthopedics",
  },
  {
    title: "Гинекология",
    description: "Женское здоровье, планирование семьи, малоинвазивные операции",
    price: "от 180 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/gynecology",
  },
  {
    title: "Неврология",
    description: "Лечение заболеваний нервной системы, реабилитация после инсульта",
    price: "от 250 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/neurology",
  },
  {
    title: "Пластическая хирургия",
    description: "Эстетическая и реконструктивная хирургия высокого уровня",
    price: "от 800 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/plastic-surgery",
  },
  {
    title: "Урология",
    description: "Современные методы лечения урологических заболеваний",
    price: "от 220 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/urology",
  },
]

export default function ServicesGrid() {
  const [showPriceModal, setShowPriceModal] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)

  const handlePriceInquiry = (service: any) => {
    setSelectedService(service)
    setShowPriceModal(true)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* CSS анимированный фон */}
      <div className="absolute inset-0">
        <div className="animated-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Наши медицинские услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий спектр медицинских услуг от ведущих специалистов Беларуси
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white/90 backdrop-blur-sm hover:bg-white/95"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{service.title.charAt(0)}</span>
                  </div>
                </div>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">Популярно</Badge>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-lg font-bold text-blue-600">{service.price}</div>
                </div>

                <div className="flex gap-2">
                  <Link href={service.href} className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700 transition-colors">
                      Подробнее
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePriceInquiry(service)}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Узнать цены
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Посмотреть все услуги
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
      <PriceInquiryModal isOpen={showPriceModal} onClose={() => setShowPriceModal(false)} service={selectedService} />
    </section>
  )
}
