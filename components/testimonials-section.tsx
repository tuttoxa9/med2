import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Анна Петрова",
    location: "Москва, Россия",
    date: "15 марта 2024",
    rating: 5,
    text: "Прошла лечение зубов в Минске. Качество на высшем уровне, а цены в 3 раза ниже московских. Врачи очень внимательные и профессиональные. Обязательно вернусь для профилактики.",
    service: "Стоматология",
  },
  {
    name: "Дмитрий Козлов",
    location: "Киев, Украина",
    date: "8 февраля 2024",
    rating: 5,
    text: "Делал операцию на сердце. Все прошло отлично, врачи - настоящие профессионалы. Организация на высоте, помогли с размещением и сопровождением. Рекомендую всем!",
    service: "Кардиология",
  },
  {
    name: "Елена Смирнова",
    location: "Санкт-Петербург, Россия",
    date: "22 января 2024",
    rating: 5,
    text: "Проходила лечение глаз. Результат превзошел все ожидания! Теперь вижу без очков. Спасибо команде MedTravel за организацию и поддержку на всех этапах.",
    service: "Офтальмология",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Отзывы наших пациентов</h2>
          <p className="text-xl text-gray-600">Истории успешного лечения от реальных людей</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-200 mb-4" />

                <p className="text-gray-700 leading-relaxed mb-6">{testimonial.text}</p>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-600">{testimonial.service}</div>
                      <div className="text-xs text-gray-500">{testimonial.date}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
