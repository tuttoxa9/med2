import { CheckCircle, Clock, Shield } from "lucide-react"

export default function HowWeHelpSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Как мы помогаем нашим клиентам?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Медицинские услуги клиент оплачивает в кассу клиники, по факту их оказания и в соответствии с тарифами
              клиники. Соответственно, стоимость лечения не увеличивается.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Мы берем на себя все вопросы, связанные с бронированием времени приема в клинике; осуществляем быструю
              координацию между клиентом и медицинским центром, врачами; информируем клиента об особенностях лечения.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              За счет партнерских отношений с медицинскими центрами, мы заблаговременно забронируем первый
              консультационный прием, и в тоже время несколько сеансов для лечения.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
