<section class="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 overflow-hidden">
    <?php if ([[*hero_background_image]]): ?>
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style="background-image: url('[[*hero_background_image]]');"></div>
    <?php else: ?>
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style="background-image: url('/images/hero-bg.png');"></div>
    <?php endif; ?>
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/90 to-blue-50/90"></div>

    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                [[*hero_badge_text:default=`Лицензированная медицинская помощь`]]
            </div>

            <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                [[*hero_title_part1:default=`Качественное лечение в`]]
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">[[*hero_title_part2:default=`Беларуси`]]</span>
            </h1>

            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                [[*hero_subtitle:default=`Современная медицина европейского уровня по доступным ценам. Полное сопровождение от консультации до восстановления.`]]
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button onclick="openModal('consultationModal')" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors flex items-center justify-center gap-2">
                    [[*hero_button_consultation:default=`Получить консультацию`]]
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </button>
                <button onclick="openModal('priceModal')" class="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
                    [[*hero_button_prices:default=`Узнать цены`]]
                </button>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-2">
                        [[*hero_feature_1_title:default=`Быстрая диагностика`]]
                    </h3>
                    <p class="text-gray-600 text-sm">
                        [[*hero_feature_1_description:default=`Результаты за 2-3 дня`]]
                    </p>
                </div>

                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-2">
                        [[*hero_feature_2_title:default=`Опытные врачи`]]
                    </h3>
                    <p class="text-gray-600 text-sm">
                        [[*hero_feature_2_description:default=`Высшая категория`]]
                    </p>
                </div>

                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-2">
                        [[*hero_feature_3_title:default=`Гарантия качества`]]
                    </h3>
                    <p class="text-gray-600 text-sm">
                        [[*hero_feature_3_description:default=`Европейские стандарты`]]
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
