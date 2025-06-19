<div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center text-sm">
            <div class="flex items-center gap-6">
                <div class="flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.2 11.2a11.045 11.045 0 005.6 5.6l1.813-4.024a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V6a2 2 0 012-2z"></path>
                    </svg>
                    <span>[[*header_phone:default=`+375 (29) 123-45-67`]]</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.94a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>[[*header_email:default=`info@medtravel.by`]]</span>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <button onclick="openModal('callbackModal')" class="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-2 rounded text-sm font-medium transition-colors">
                    [[*header_callback_text:default=`Заказать звонок`]]
                </button>
                <div class="flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <span>Telegram: [[*header_telegram:default=`@medtravel`]]</span>
                </div>
            </div>
        </div>
    </div>
</div>

<header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
            <a href="/" class="flex items-center gap-3">
                <?php if ([[*logo_image]]): ?>
                    <img src="[[*logo_image]]" alt="[[*site_name]]" class="w-12 h-12 rounded-xl">
                <?php else: ?>
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <span class="text-white font-bold text-xl">M</span>
                    </div>
                <?php endif; ?>
                <div class="font-display">
                    <div class="text-2xl font-bold text-gray-900">[[*site_name:default=`MedTravel`]]</div>
                    <div class="text-sm text-blue-600 font-medium">[[*site_tagline:default=`Belarus`]]</div>
                </div>
            </a>

            <nav class="hidden lg:flex items-center space-x-8">
                <a href="/services" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    [[*nav_services:default=`Услуги`]]
                </a>
                <a href="/clinics" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    [[*nav_clinics:default=`Клиники`]]
                </a>
                <a href="/doctors" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    [[*nav_doctors:default=`Врачи`]]
                </a>
                <a href="/about" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    [[*nav_about:default=`О нас`]]
                </a>
                <a href="/reviews" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    [[*nav_reviews:default=`Отзывы`]]
                </a>
                <a href="/contacts" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    [[*nav_contacts:default=`Контакты`]]
                </a>
            </nav>

            <button onclick="openModal('consultationModal')" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors">
                [[*header_consultation_btn:default=`Консультация`]]
            </button>
        </div>
    </div>
</header>
