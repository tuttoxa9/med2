<section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">[[*help_title:default=`Как мы помогаем`]]</h2>

            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">[[*help_subtitle:default=`Комплексное сопровождение`]]</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        [[*help_description:default=`Мы не просто организуем лечение - мы обеспечиваем полную поддержку на всех этапах. От первичной консультации до полного восстановления.`]]
                    </p>

                    <div class="space-y-4">
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">[[*help_point_1_title:default=`Предварительная диагностика`]]</h4>
                                <p class="text-gray-600 text-sm">[[*help_point_1_desc:default=`Анализ медицинских документов и подбор оптимального лечения`]]</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">[[*help_point_2_title:default=`Организация приезда`]]</h4>
                                <p class="text-gray-600 text-sm">[[*help_point_2_desc:default=`Помощь с документами, встреча в аэропорту, размещение`]]</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">[[*help_point_3_title:default=`Медицинское сопровождение`]]</h4>
                                <p class="text-gray-600 text-sm">[[*help_point_3_desc:default=`Координация с врачами, перевод, контроль качества`]]</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative">
                    <?php if ([[*help_image]]): ?>
                        <img src="[[*help_image]]" alt="[[*help_title]]" class="rounded-xl shadow-lg">
                    <?php else: ?>
                        <div class="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                            <svg class="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>
