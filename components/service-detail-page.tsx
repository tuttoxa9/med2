import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Award, ArrowLeft, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

interface ServiceDetailPageProps {
  slug: string
}

export default function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  return (
    <div>
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Главная
            </Link>
            <span>›</span>
            <Link href="/services" className="hover:text-emerald-600 transition-colors">
              Услуги
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Стоматология</span>
          </div>
        </div>
      </nav>

      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад к услугам
            </Link>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30">Популярная услуга</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">Европейское качество</Badge>
            </div>

            <h1 className="font-display text-5xl font-bold mb-6">Стоматологические услуги</h1>
            <p className="text-xl opacity-90 max-w-2xl leading-relaxed">
              Современная стоматология европейского уровня: имплантация, протезирование, лечение и профилактика
              заболеваний полости рта
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-2xl">4.9</span>
                </div>
                <div className="text-gray-600">Более 1200 довольных пациентов</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">Что включает наша стоматология?</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">Имплантация зубов</h3>
                  <p className="text-gray-600">Установка качественных имплантов ведущих мировых производителей</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">Протезирование</h3>
                  <p className="text-gray-600">Коронки, мосты, съемные и несъемные протезы</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">Лечение кариеса</h3>
                  <p className="text-gray-600">Современные методы лечения с использованием качественных материалов</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">Отбеливание</h3>
                  <p className="text-gray-600">Профессиональное отбеливание зубов безопасными методами</p>
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Преимущества лечения в Беларуси</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span>Цены в 2-3 раза ниже европейских при том же качестве</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span>Современное оборудование и материалы ведущих производителей</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span>Врачи высшей категории с международными сертификатами</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span>Гарантия на все виды работ</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-xl border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold text-2xl">С</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Стоматология</h3>
                  <p className="text-gray-600">Консультация специалиста</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Консультация: 30-60 мин</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Индивидуальный подход</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Врачи высшей категории</span>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-lg mb-4">Стоимость услуг</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Консультация</span>
                      <span className="font-mono font-bold">от 25 BYN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Лечение кариеса</span>
                      <span className="font-mono font-bold">от 80 BYN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Имплант</span>
                      <span className="font-mono font-bold">от 600 BYN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Коронка</span>
                      <span className="font-mono font-bold">от 200 BYN</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Записаться на прием
                  </Button>
                  <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Задать вопрос
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">Консультация по телефону бесплатная</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
