import { MessageCircle, Monitor, Home, Plane, Pill, Shield } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: MessageCircle,
    title: "Бесплатная онлайн консультация по вопросам связанным с организацией Вашего тура",
  },
  {
    icon: Monitor,
    title: "Организация быстрой консультации с врачами касательно Вашего лечения (через Интернет)",
  },
  {
    icon: Home,
    title: "Размещение сопровождающего лица",
  },
  {
    icon: Plane,
    title: "Организация экскурсий по Минску и Беларуси и разработка индивидуального тура",
  },
  {
    icon: Pill,
    title: "Покупка рекомендованных медикаментов и диетических продуктов при необходимости",
  },
  {
    icon: Shield,
    title: "Гарантия абсолютной конфиденциальности медицинской, финансовой и личной информации",
  },
]

export default function OurServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Наши услуги</h2>
            <div className="space-y-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{service.title}</p>
                  </div>
                )
              })}
            </div>
            <Link href="/services" className="inline-block mt-8 text-blue-600 hover:underline">
              Стоимость пакетов сопровождения
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Актуальные статьи</h2>
            <div className="space-y-6">
              <article className="flex gap-4">
                <div className="w-20 h-20 bg-pink-100 rounded-lg flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    <Link href="/articles/charity-auction" className="hover:text-blue-600">
                      Украсить елку и сделать шаг к добру: благотворительный аукцион "Крылья добра" состоится в пятый
                      раз
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    20 декабря 2020 года на онлайн-платформе help-kd.by состоится аукцион "Крылья добра". Цель аукциона
                  </p>
                </div>
              </article>

              <article className="flex gap-4">
                <div className="w-20 h-20 bg-purple-100 rounded-lg flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    <Link href="/articles/mega-gen-seminar" className="hover:text-blue-600">
                      Med Travel на семинаре Mega Gen
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    Компания Med Travel Belarus посетила семинар от доктора Irfan Abas (Ирфана Абаса, Нидерланды) на тем
                  </p>
                </div>
              </article>

              <article className="flex gap-4">
                <div className="w-20 h-20 bg-blue-100 rounded-lg flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    <Link href="/articles/medical-worker-day" className="hover:text-blue-600">
                      ДЕНЬ МЕДИЦИНСКОГО РАБОТНИКА 2020
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    В третье воскресенье июня свой профессиональный праздник отмечают медицинские работники. В канун Дн
                  </p>
                </div>
              </article>
            </div>
            <Link href="/articles" className="inline-block mt-6 text-blue-600 hover:underline">
              Все статьи
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
