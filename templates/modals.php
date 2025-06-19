<div id="consultationModal" class="fixed inset-0 z-50 hidden modal-overlay bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-semibold text-gray-900">[[*modal_consultation_title:default=`Получить консультацию`]]</h3>
            <button onclick="closeModal('consultationModal')" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <form action="[[*form_action:default=`/send-consultation`]]" method="POST" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">[[*form_name_label:default=`Имя`]]</label>
                <input type="text" name="name" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">[[*form_phone_label:default=`Телефон`]]</label>
                <input type="tel" name="phone" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">[[*form_message_label:default=`Сообщение`]]</label>
                <textarea name="message" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                [[*form_submit_consultation:default=`Отправить заявку`]]
            </button>
        </form>
    </div>
</div>

<div id="priceModal" class="fixed inset-0 z-50 hidden modal-overlay bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-semibold text-gray-900">[[*modal_price_title:default=`Узнать стоимость`]]</h3>
            <button onclick="closeModal('priceModal')" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <form action="[[*form_action:default=`/send-price-inquiry`]]" method="POST" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">[[*form_name_label:default=`Имя`]]</label>
                <input type="text" name="name" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">[[*form_phone_label:default=`Телефон`]]</label>
                <input type="tel" name="phone" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">[[*form_service_label:default=`Интересующая услуга`]]</label>
                <select name="service" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">[[*form_service_placeholder:default=`Выберите услугу`]]</option>
                    <option value="cardiology">[[*service_1_title:default=`Кардиология`]]</option>
                    <option value="neurology">[[*service_2_title:default=`Неврология`]]</option>
                    <option value="orthopedics">[[*service_3_title:default=`Ортопедия`]]</option>
                    <option value="pediatrics">[[*service_4_title:default=`Педиатрия`]]</option>
                    <option value="dermatology">[[*service_5_title:default=`Дерматология`]]</option>
                    <option value="radiology">[[*service_6_title:default=`Радиология`]]</option>
                </select>
            </div>
            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                [[*form_submit_price:default=`Узнать стоимость`]]
            </button>
        </form>
    </div>
</div>

<div id="callbackModal" class="fixed inset-0 z-50 hidden modal-overlay bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-semibold text-gray-900">[[*modal_callback_title:default=`Заказать звонок`]]</h3>
            <button onclick="closeModal('callbackModal')" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <form action="[[*form_action:default=`/send-callback`]]" method="POST" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">[[*form_name_label:default=`Имя`]]</label>
                <input type="text" name="name" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">[[*form_phone_label:default=`Телефон`]]</label>
                <input type="tel" name="phone" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">[[*form_time_label:default=`Удобное время для звонка`]]</label>
                <select name="time" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="morning">[[*form_time_morning:default=`Утром (9:00-12:00)`]]</option>
                    <option value="afternoon">[[*form_time_afternoon:default=`Днем (12:00-17:00)`]]</option>
                    <option value="evening">[[*form_time_evening:default=`Вечером (17:00-20:00)`]]</option>
                </select>
            </div>
            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                [[*form_submit_callback:default=`Заказать звонок`]]
            </button>
        </form>
    </div>
</div>
