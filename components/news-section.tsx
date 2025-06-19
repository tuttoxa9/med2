import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Новые технологии в кардиохирургии",
    excerpt: "Белорусские кардиохирурги освоили новые малоинвазивные методы лечения сердечно-сосудистых заболеваний",
    date: "15 марта 2024",
    category: "Кардиология",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/new-cardio-technologies",
  },
  {
    title: "Успехи в лечении онкологии",
    excerpt: "Статистика показывает значительное улучшение результатов лечения онкологических заболеваний в Беларуси",
    date: "10 марта 2024",
    category: "Онкология",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/oncology-success",
  },
  {
    title: "Современная офтальмология",
    excerpt: "Новое оборудование для лазерной коррекции зрения установлено в ведущих клиниках Минска",
    date: "5 марта 2024",
    category: "Офтальмология",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/modern-ophthalmology",
  },
]

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Новости и статьи</h2>
            <p className="text-xl text-gray-600">Последние новости из мира медицины</p>
          </div>
          <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            Все новости
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100"></div>

              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  <Link href={article.href}>{article.title}</Link>
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">{article.excerpt}</p>

                <Link
                  href={article.href}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Читать далее
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
