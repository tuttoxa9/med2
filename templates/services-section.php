<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">[[*services_title:default=`Наши специализации`]]</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                [[*services_subtitle:default=`Оказываем медицинские услуги высочайшего качества по всем направлениям`]]
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">[[*service_1_title:default=`Кардиология`]]</h3>
                <p class="text-gray-600 mb-4">[[*service_1_description:default=`Диагностика и лечение заболеваний сердечно-сосудистой системы`]]</p>
                <div class="flex justify-between items-center">
                    <span class="font-mono text-lg font-bold text-blue-600">[[*service_1_price:default=`от 150 BYN`]]</span>
                    <button onclick="openModal('priceModal')" class="text-blue-600 hover:text-blue-700 font-medium">Подробнее</button>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">[[*service_2_title:default=`Неврология`]]</h3>
                <p class="text-gray-600 mb-4">[[*service_2_description:default=`Лечение заболеваний нервной системы и головного мозга`]]</p>
                <div class="flex justify-between items-center">
                    <span class="font-mono text-lg font-bold text-blue-600">[[*service_2_price:default=`от 200 BYN`]]</span>
                    <button onclick="openModal('priceModal')" class="text-blue-600 hover:text-blue-700 font-medium">Подробнее</button>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">[[*service_3_title:default=`Ортопедия`]]</h3>
                <p class="text-gray-600 mb-4">[[*service_3_description:default=`Восстановление функций опорно-двигательного аппарата`]]</p>
                <div class="flex justify-between items-center">
                    <span class="font-mono text-lg font-bold text-blue-600">[[*service_3_price:default=`от 300 BYN`]]</span>
                    <button onclick="openModal('priceModal')" class="text-blue-600 hover:text-blue-700 font-medium">Подробнее</button>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">[[*service_4_title:default=`Педиатрия`]]</h3>
                <p class="text-gray-600 mb-4">[[*service_4_description:default=`Комплексная медицинская помощь детям`]]</p>
                <div class="flex justify-between items-center">
                    <span class="font-mono text-lg font-bold text-blue-600">[[*service_4_price:default=`от 500 BYN`]]</span>
                    <button onclick="openModal('priceModal')" class="text-blue-600 hover:text-blue-700 font-medium">Подробнее</button>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">[[*service_5_title:default=`Дерматология`]]</h3>
                <p class="text-gray-600 mb-4">[[*service_5_description:default=`Диагностика и лечение заболеваний кожи`]]</p>
                <div class="flex justify-between items-center">
                    <span class="font-mono text-lg font-bold text-blue-600">[[*service_5_price:default=`от 400 BYN`]]</span>
                    <button onclick="openModal('priceModal')" class="text-blue-600 hover:text-blue-700 font-medium">Подробнее</button>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">[[*service_6_title:default=`Радиология`]]</h3>
                <p class="text-gray-600 mb-4">[[*service_6_description:default=`Современная диагностика с помощью лучевых методов`]]</p>
                <div class="flex justify-between items-center">
                    <span class="font-mono text-lg font-bold text-blue-600">[[*service_6_price:default=`от 180 BYN`]]</span>
                    <button onclick="openModal('priceModal')" class="text-blue-600 hover:text-blue-700 font-medium">Подробнее</button>
                </div>
            </div>
        </div>

        <div class="text-center mt-12">
            <a href="/services" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center gap-2">
                [[*services_all_button:default=`Все услуги`]]
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            </a>
        </div>
    </div>
</section>
