"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Search, Filter, Star } from "lucide-react"
import PriceInquiryModal from "./price-inquiry-modal"

const services = [
  {
    id: 1,
    title: "Стоматология",
    description:
      "Имплантация, протезирование, лечение зубов современными методами с использованием качественных материалов",
    price: "от 150 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/stomatology",
    popular: true,
    category: "Общая медицина",
    rating: 4.9,
    reviewsCount: 234,
    features: ["Безболезненное лечение", "Современное оборудование", "Гарантия качества"],
  },
  {
    id: 2,
    title: "Кардиология",
    description: "Диагностика и лечение заболеваний сердечно-сосудистой системы с применением новейших технологий",
    price: "от 200 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/cardiology",
    popular: false,
    category: "Специализированная медицина",
    rating: 4.8,
    reviewsCount: 156,
    features: ["ЭКГ диагностика", "УЗИ сердца", "Консультация кардиолога"],
  },
  {
    id: 3,
    title: "Офтальмология",
    description: "Лазерная коррекция зрения, лечение катаракты и глаукомы, полная диагностика зрения",
    price: "от 300 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/ophthalmology",
    popular: true,
    category: "Специализированная медицина",
    rating: 4.9,
    reviewsCount: 189,
    features: ["Лазерная коррекция", "Современная диагностика", "Опытные хирурги"],
  },
  {
    id: 4,
    title: "Онкология",
    description: "Современные методы диагностики и лечения онкологических заболеваний, химиотерапия, радиотерапия",
    price: "от 500 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/oncology",
    popular: true,
    category: "Специализированная медицина",
    rating: 4.7,
    reviewsCount: 98,
    features: ["Ранняя диагностика", "Современное лечение", "Реабилитация"],
  },
  {
    id: 5,
    title: "Ортопедия",
    description: "Эндопротезирование суставов, лечение травм опорно-двигательного аппарата, реабилитация",
    price: "от 400 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/orthopedics",
    popular: false,
    category: "Хирургия",
    rating: 4.8,
    reviewsCount: 145,
    features: ["Эндопротезирование", "Артроскопия", "Реабилитация"],
  },
  {
    id: 6,
    title: "Гинекология",
    description: "Женское здоровье, планирование семьи, малоинвазивные операции, ведение беременности",
    price: "от 180 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/gynecology",
    popular: false,
    category: "Общая медицина",
    rating: 4.9,
    reviewsCount: 267,
    features: ["Планирование семьи", "Малоинвазивные операции", "Ведение беременности"],
  },
  {
    id: 7,
    title: "Неврология",
    description: "Лечение заболеваний нервной системы, реабилитация после инсульта, лечение мигрени",
    price: "от 250 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/neurology",
    popular: false,
    category: "Специализированная медицина",
    rating: 4.6,
    reviewsCount: 123,
    features: ["Реабилитация после инсульта", "Лечение мигрени", "Диагностика"],
  },
  {
    id: 8,
    title: "Пластическая хирургия",
    description: "Эстетическая и реконструктивная хирургия высокого уровня, современные методики",
    price: "от 800 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/plastic-surgery",
    popular: true,
    category: "Хирургия",
    rating: 4.8,
    reviewsCount: 87,
    features: ["Эстетическая хирургия", "Реконструкция", "Безопасные методики"],
  },
  {
    id: 9,
    title: "Урология",
    description: "Современные методы лечения урологических заболеваний, малоинвазивная хирургия",
    price: "от 220 BYN",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/urology",
    popular: false,
    category: "Специализированная медицина",
    rating: 4.7,
    reviewsCount: 134,
    features: ["Малоинвазивная хирургия", "Современная диагностика", "Лечение простатита"],
  },
]

const categories = ["Все категории", "Общая медицина", "Специализированная медицина", "Хирургия"]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Все категории")
  const [showPriceModal, setShowPriceModal] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Все категории" || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handlePriceInquiry = (service: any) => {
    setSelectedService(service)
    setShowPriceModal(true)
  }

  return (
    <div>
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Главная
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Услуги</span>
          </div>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl font-bold text-gray-900 mb-6">Медицинские услуги</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Полный спектр медицинских услуг от ведущих специалистов Беларуси. Современное оборудование, европейские
              стандарты качества, доступные цены.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Поиск услуг..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-64">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{service.title.charAt(0)}</span>
                    </div>
                  </div>
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">Популярно</Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({service.reviewsCount} отзывов)</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="font-mono text-lg font-bold text-emerald-600">{service.price}</div>
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Link href={service.href} className="flex-1">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                        Подробнее
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePriceInquiry(service)}
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      Узнать цены
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Услуги не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Нужна консультация?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут выбрать подходящую программу лечения и ответят на все вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <PriceInquiryModal isOpen={showPriceModal} onClose={() => setShowPriceModal(false)} service={selectedService} />
    </div>
  )
}
