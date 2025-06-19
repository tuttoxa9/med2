"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"
import PriceInquiryModal from "./price-inquiry-modal"

export default function HeroSection() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [showPriceModal, setShowPriceModal] = useState(false)

  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 overflow-hidden">
        {/* Фоновое изображение через MODX - [[*hero_background_image]] */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(/placeholder.svg?height=800&width=1200)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/90 to-blue-50/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              {/* [[*hero_badge_text]] */}
              Лицензированная медицинская помощь
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {/* [[*hero_title]] */}
              Качественное лечение в{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Беларуси</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {/* [[*hero_subtitle]] */}
              Современная медицина европейского уровня по доступным ценам. Полное сопровождение от консультации до
              восстановления.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={() => setShowConsultationModal(true)}
              >
                {/* [[*hero_button_consultation]] */}
                Получить консультацию
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => setShowPriceModal(true)}
              >
                {/* [[*hero_button_prices]] */}
                Узнать цены
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {/* [[*hero_feature_1_title]] */}
                  Быстрая диагностика
                </h3>
                <p className="text-gray-600 text-sm">
                  {/* [[*hero_feature_1_description]] */}
                  Результаты за 2-3 дня
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {/* [[*hero_feature_2_title]] */}
                  Опытные врачи
                </h3>
                <p className="text-gray-600 text-sm">
                  {/* [[*hero_feature_2_description]] */}
                  Высшая категория
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {/* [[*hero_feature_3_title]] */}
                  Гарантия качества
                </h3>
                <p className="text-gray-600 text-sm">
                  {/* [[*hero_feature_3_description]] */}
                  Европейские стандарты
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PriceInquiryModal
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
        isConsultation={true}
      />
      <PriceInquiryModal isOpen={showPriceModal} onClose={() => setShowPriceModal(false)} isConsultation={false} />
    </>
  )
}
