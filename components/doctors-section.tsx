import { Button } from "@/components/ui/button"

export default function DoctorsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-gray-700 leading-relaxed text-sm">
                "Доктор высшей квалификационной категории, онколог, обладатель ученой степени кандидата медицинских
                наук. Образование: В 1974 году окончил Государственный Медицинский Институт в Витебске. В 2007 и 2008
                проходил курсы повышения квалификации Бел МАПО по специальностям: • Диагностика и лечение
                злокачественных..."
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-gray-700 leading-relaxed text-sm">
                "Хирург-имплантолог 1 квалификационной категории. В 1995 году окончила Минский мед. университет по
                специальности стоматолог-хирург. Имеет степень по челюстно- лицевой хирургии, проходила клиническую
                ординатуру. Прошла курсы повышения квалификации на базе БелМАПО по специальности "Общая эндокринология".
                Является ассистентом на кафедре стоматологии..."
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Бутра Юрий Викторович</h4>
              <p className="text-sm text-gray-600 mb-3">
                Заведующий хирургическим отделением № 2, врач хирург высшей категории
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                "Заведующий хирургического отделения № 2, врач хирург высшей категории Образование: в 1995 году окончил
                Витебский государственный медицинский институт по специальности «лечебное дело». Стаж работы: 22 года В
                отделении проводятся малотравматичные, высокотехнологичные операции с использованием самых..."
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Тесаков Дмитрий Кимович</h4>
              <p className="text-sm text-gray-600 mb-3">
                Врач травматолог-ортопед, нейрохирург, вертебролог, кандидат медицинских наук, высшей категории
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                "Действительный член Ассоциации вертебрологов России. Всемирной организации ортопедов-протезистов,
                кандидат медицинских наук, врач высшей квалификационной категории, стипендиат специального фонда
                Президента Республики Беларусь, награжден знаком «Отличник здравоохранения». Ответственный
                исполнитель-разработчик..."
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">ВСЕ ВРАЧИ МЕД ТРЕВЕЛ БЕЛАРУСЬ</Button>
        </div>
      </div>
    </section>
  )
}
