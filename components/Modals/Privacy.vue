<template>
    <!-- Main modal -->
    <div id="privacy-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Privacy Policy
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="privacy-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        At Easy Fix Appliance, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains what personal information we collect, how we use it, and the rights you have regarding your personal information.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>1. Information We Collect</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        We collect the following types of personal information when you interact with our services:
                    </p>
                    <ul class="text-base leading-relaxed text-gray-500 dark:text-gray-400 list-disc pl-5">
                        <li>Personal Details: Name, address, phone number, email address, and other contact details provided by you.</li>
                        <li>Booking Information: Details about the services you book, including dates, times, and locations.</li>
                        <li>Payment Information: Information required for processing payments, such as credit card details, may be collected via third-party payment processors.</li>
                        <li>Communication Preferences: Any preferences you share regarding how we communicate with you.</li>
                    </ul>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>2. How We Use Your Information</strong>
                    </p>
                    <ul class="text-base leading-relaxed text-gray-500 dark:text-gray-400 list-disc pl-5">
                        <li>Provide and manage the services you request, including booking and confirming appointments.</li>
                        <li>Communicate with you via email, text message, or phone regarding your booking details, service updates, and confirmations.</li>
                        <li>Process payments and send receipts or invoices for services rendered.</li>
                        <li>Send you promotional offers and updates, only if you have opted in to receive such communications.</li>
                    </ul>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>3. Text Messages and Emails</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        When you make a booking with us, we may send you confirmation messages via:
                    </p>
                    <ul class="text-base leading-relaxed text-gray-500 dark:text-gray-400 list-disc pl-5">
                        <li><strong>Text Messages:</strong> These will be used to confirm your bookings, provide reminders, or update you on any changes related to your services.</li>
                        <li><strong>Emails:</strong> We may also send you email confirmations for your bookings, service reminders, and any necessary follow-up communications.</li>
                    </ul>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        You can opt out of receiving these communications by following the unsubscribe instructions included in any marketing communications or by contacting us directly. However, please note that important service-related messages, such as booking confirmations and updates, cannot be opted out of.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>4. Data Sharing and Security</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or necessary to provide the services you have requested. We implement various security measures to ensure the safety of your personal information.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>5. Your Rights</strong>
                    </p>
                    <ul class="text-base leading-relaxed text-gray-500 dark:text-gray-400 list-disc pl-5">
                        <li>Access, update, or delete your personal information.</li>
                        <li>Withdraw consent for communications at any time.</li>
                        <li>Request that we stop processing your personal data for marketing purposes.</li>
                    </ul>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        To exercise any of these rights, please contact us at [Your Contact Information].
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>6. Changes to this Privacy Policy</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and we encourage you to review it periodically.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>7. Contact Us</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Easy Fix Appliance<br>
                        303 Twin Dolphin Drive<br>
                        Suite 600, #6175<br>
                        Redwood City, CA 94065<br>
                        care@easyfixappliance.com<br>
                        +1 (415) 941-4144
                    </p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="privacy-modal" type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ok</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  