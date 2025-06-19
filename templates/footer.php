<footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-16">
        <div class="grid lg:grid-cols-4 gap-8">
            <div class="lg:col-span-1">
                <div class="flex items-center gap-3 mb-6">
                    <?php if ([[*logo_image]]): ?>
                        <img src="[[*logo_image]]" alt="[[*site_name]]" class="w-12 h-12 rounded-xl">
                    <?php else: ?>
                        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                            <span class="text-white font-bold text-xl">M</span>
                        </div>
                    <?php endif; ?>
                    <div class="font-display">
                        <div class="text-2xl font-bold">[[*site_name:default=`MedTravel`]]</div>
                        <div class="text-sm text-blue-400">[[*site_tagline:default=`Belarus`]]</div>
                    </div>
                </div>
                <p class="text-gray-400 mb-6 leading-relaxed">
                    [[*footer_description:default=`Качественная медицинская помощь в Беларуси. Полное сопровождение пациентов от консультации до восстановления.`]]
                </p>
                <div class="flex gap-4">
                    <a href="[[*social_telegram]]" class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                    </a>
                    <a href="tel:[[*footer_phone]]" class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.2 11.2a11.045 11.045 0 005.6 5.6l1.813-4.024a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V6a2 2 0 012-2z"></path>
                        </svg>
                    </a>
                    <a href="mailto:[[*footer_email]]" class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.94a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div>
                <h3 class="font-display text-lg font-semibold mb-6">[[*footer_services_title:default=`Услуги`]]</h3>
                <div class="space-y-3">
                    <a href="/services/stomatology" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_service_1:default=`Стоматология`]]
                    </a>
                    <a href="/services/cardiology" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_service_2:default=`Кардиология`]]
                    </a>
                    <a href="/services/ophthalmology" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_service_3:default=`Офтальмология`]]
                    </a>
                    <a href="/services/oncology" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_service_4:default=`Онкология`]]
                    </a>
                    <a href="/services/orthopedics" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_service_5:default=`Ортопедия`]]
                    </a>
                </div>
            </div>

            <div>
                <h3 class="font-display text-lg font-semibold mb-6">[[*footer_company_title:default=`Компания`]]</h3>
                <div class="space-y-3">
                    <a href="/about" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_about:default=`О нас`]]
                    </a>
                    <a href="/doctors" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_doctors:default=`Врачи`]]
                    </a>
                    <a href="/clinics" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_clinics:default=`Клиники`]]
                    </a>
                    <a href="/reviews" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_reviews:default=`Отзывы`]]
                    </a>
                    <a href="/news" class="block text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_news:default=`Новости`]]
                    </a>
                </div>
            </div>

            <div>
                <h3 class="font-display text-lg font-semibold mb-6">[[*footer_contacts_title:default=`Контакты`]]</h3>
                <div class="space-y-4">
                    <div class="flex items-start gap-3">
                        <svg class="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.2 11.2a11.045 11.045 0 005.6 5.6l1.813-4.024a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V6a2 2 0 012-2z"></path>
                        </svg>
                        <div>
                            <div class="font-medium">[[*footer_phone:default=`+375 (29) 123-45-67`]]</div>
                            <div class="text-sm text-gray-400">[[*footer_phone_note:default=`Круглосуточно`]]</div>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.94a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <div>
                            <div class="font-medium">[[*footer_email:default=`info@medtravel.by`]]</div>
                            <div class="text-sm text-gray-400">[[*footer_email_note:default=`Ответим в течение часа`]]</div>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <div>
                            <div class="font-medium">[[*footer_address:default=`г. Минск`]]</div>
                            <div class="text-sm text-gray-400">[[*footer_country:default=`Беларусь`]]</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="border-t border-gray-800">
        <div class="container mx-auto px-4 py-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="text-sm text-gray-400">© [[++site_year:default=`2024`]] [[*site_name:default=`MedTravel Belarus`]]. [[*footer_rights:default=`Все права защищены.`]]</div>
                <div class="flex gap-6 text-sm">
                    <a href="/privacy" class="text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_privacy:default=`Политика конфиденциальности`]]
                    </a>
                    <a href="/terms" class="text-gray-400 hover:text-blue-400 transition-colors">
                        [[*footer_terms:default=`Условия использования`]]
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
