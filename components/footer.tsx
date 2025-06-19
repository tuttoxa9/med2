import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="font-display">
                <div className="text-2xl font-bold">MedTravel</div>
                <div className="text-sm text-blue-400">Belarus</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Качественная медицинская помощь в Беларуси. Полное сопровождение пациентов от консультации до
              восстановления.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:bg-blue-600">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-blue-600">
                <Phone className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-blue-600">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Услуги</h3>
            <div className="space-y-3">
              <Link href="/services/stomatology" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Стоматология
              </Link>
              <Link href="/services/cardiology" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Кардиология
              </Link>
              <Link
                href="/services/ophthalmology"
                className="block text-gray-400 hover:text-blue-400 transition-colors"
              >
                Офтальмология
              </Link>
              <Link href="/services/oncology" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Онкология
              </Link>
              <Link href="/services/orthopedics" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Ортопедия
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Компания</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-400 hover:text-blue-400 transition-colors">
                О нас
              </Link>
              <Link href="/doctors" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Врачи
              </Link>
              <Link href="/clinics" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Клиники
              </Link>
              <Link href="/reviews" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Отзывы
              </Link>
              <Link href="/news" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Новости
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">+375 (29) 123-45-67</div>
                  <div className="text-sm text-gray-400">Круглосуточно</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">info@medtravel.by</div>
                  <div className="text-sm text-gray-400">Ответим в течение часа</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">г. Минск</div>
                  <div className="text-sm text-gray-400">Беларусь</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">© 2024 MedTravel Belarus. Все права защищены.</div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
