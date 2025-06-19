import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function Header() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+375 (29) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@medtravel.by</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                Заказать звонок
              </Button>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Telegram: @medtravel</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="font-display">
                <div className="text-2xl font-bold text-gray-900">MedTravel</div>
                <div className="text-sm text-blue-600 font-medium">Belarus</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Услуги
              </Link>
              <Link href="/clinics" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Клиники
              </Link>
              <Link href="/doctors" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Врачи
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                О нас
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Отзывы
              </Link>
              <Link href="/contacts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Контакты
              </Link>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Консультация</Button>
          </div>
        </div>
      </header>
    </>
  )
}
