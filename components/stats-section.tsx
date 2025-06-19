import { Users, Award, Clock, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Довольных пациентов",
    description: "За 10 лет работы",
  },
  {
    icon: Award,
    number: "50+",
    label: "Опытных врачей",
    description: "Высшей категории",
  },
  {
    icon: Clock,
    number: "2-3",
    label: "Дня на диагностику",
    description: "Быстрые результаты",
  },
  {
    icon: Heart,
    number: "98%",
    label: "Успешных операций",
    description: "Высокое качество",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Наши достижения в цифрах</h2>
          <p className="text-xl text-gray-600">Результаты, которыми мы гордимся</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-blue-600" />
                </div>
                <div className="font-mono text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
