import { CheckCircle, Shield, Clock, Users, Award, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Европейские стандарты",
    description: "Все клиники сертифицированы по международным стандартам качества",
  },
  {
    icon: Clock,
    title: "Быстрое обслуживание",
    description: "Минимальные сроки ожидания, быстрая диагностика и лечение",
  },
  {
    icon: Users,
    title: "Персональный подход",
    description: "Индивидуальный план лечения для каждого пациента",
  },
  {
    icon: Award,
    title: "Опытные специалисты",
    description: "Врачи высшей категории с многолетним опытом работы",
  },
  {
    icon: HeartHandshake,
    title: "Полное сопровождение",
    description: "Помощь на всех этапах: от консультации до реабилитации",
  },
  {
    icon: CheckCircle,
    title: "Доступные цены",
    description: "Качественное лечение по ценам в 2-3 раза ниже европейских",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предоставляем медицинские услуги высочайшего качества с заботой о каждом пациенте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
