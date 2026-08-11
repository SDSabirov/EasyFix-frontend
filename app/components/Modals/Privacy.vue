<template>
    <!-- Main modal -->
    <div id="privacy-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-[2rem] border border-primary/10 shadow-2xl shadow-ink/10">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-5 md:p-6 border-b border-primary/10 rounded-t-[2rem]">
                    <h3 class="font-montserrat font-bold tracking-[-0.01em] text-xl text-primary">
                        Privacy
                        <em class="font-display font-semibold italic text-brass-dark">Policy</em>
                    </h3>
                    <button type="button" class="text-gray-500 bg-white border border-primary/15 hover:border-brass hover:text-brass-dark rounded-full text-sm w-9 h-9 ms-auto inline-flex justify-center items-center transition-colors" data-modal-hide="privacy-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-5 md:p-6 space-y-4">
                    <p class="text-base leading-relaxed text-gray-600">
                        At Easy Fix Appliance, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains what personal information we collect, how we use it, and the rights you have regarding your personal information.
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">1. Information We Collect</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        We collect the following types of personal information when you interact with our services:
                    </p>
                    <ul class="text-base leading-relaxed text-gray-600 list-disc pl-5 marker:text-brass">
                        <li>Personal Details: Name, address, phone number, email address, and other contact details provided by you.</li>
                        <li>Booking Information: Details about the services you book, including dates, times, and locations.</li>
                        <li>Payment Information: Information required for processing payments, such as credit card details, may be collected via third-party payment processors.</li>
                        <li>Communication Preferences: Any preferences you share regarding how we communicate with you.</li>
                    </ul>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">2. How We Use Your Information</strong>
                    </p>
                    <ul class="text-base leading-relaxed text-gray-600 list-disc pl-5 marker:text-brass">
                        <li>Provide and manage the services you request, including booking and confirming appointments.</li>
                        <li>Communicate with you via email, text message, or phone regarding your booking details, service updates, and confirmations.</li>
                        <li>Process payments and send receipts or invoices for services rendered.</li>
                        <li>Send you promotional offers and updates, only if you have opted in to receive such communications.</li>
                    </ul>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">3. Text Messages and Emails</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        When you make a booking with us, we may send you confirmation messages via:
                    </p>
                    <ul class="text-base leading-relaxed text-gray-600 list-disc pl-5 marker:text-brass">
                        <li><strong class="font-montserrat font-semibold text-primary">Text Messages:</strong> These will be used to confirm your bookings, provide reminders, or update you on any changes related to your services.</li>
                        <li><strong class="font-montserrat font-semibold text-primary">SMS Consent:</strong> SMS Consent or phone numbers are not shared for the purpose of SMS with third parties or affiliates.</li>
                        <li><strong class="font-montserrat font-semibold text-primary">Emails:</strong> We may also send you email confirmations for your bookings, service reminders, and any necessary follow-up communications.</li>
                    </ul>
                    <p class="text-base leading-relaxed text-gray-600">
                        You can opt out of receiving these communications by following the unsubscribe instructions included in any marketing communications or by contacting us directly. However, please note that important service-related emails, such as booking confirmations and updates, cannot be opted out of.
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">4. Consent Through Contact Form Modal</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        Consent is also obtained through our contact form modal, which is accessible on all pages of our website. By submitting the form, you agree to be contacted via phone or email for updates related to your inquiries and services. For more information, please see our Privacy Policy.
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">5. Additional Consent During Booking</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        During the booking process, additional consent is obtained at step 3 of the form available at <a href="https://easyfixappliance.com/booking" class="text-brass-dark font-semibold hover:text-brass hover:underline transition-colors">https://easyfixappliance.com/booking</a>. This consent allows us to provide you with updates regarding your booking and related service information.
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">6. Data Sharing and Security</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or necessary to provide the services you have requested. We implement various security measures to ensure the safety of your personal information.
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">7. Your Rights</strong>
                    </p>
                    <ul class="text-base leading-relaxed text-gray-600 list-disc pl-5 marker:text-brass">
                        <li>Access, update, or delete your personal information.</li>
                        <li>Withdraw consent for communications at any time.</li>
                        <li>Request that we stop processing your personal data for marketing purposes.</li>
                    </ul>
                    <p class="text-base leading-relaxed text-gray-600">
                        To exercise any of these rights, please contact us at [Your Contact Information].
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">8. California Residents' Rights</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):
                    </p>
                    <ul class="text-base leading-relaxed text-gray-600 list-disc pl-5 marker:text-brass">
                        <li><strong class="font-montserrat font-semibold text-primary">Right to Know:</strong> You have the right to request details about the personal information we collect, use, and disclose, including the categories of information collected and the purposes for which it is used.</li>
                        <li><strong class="font-montserrat font-semibold text-primary">Right to Access:</strong> You may request access to the specific pieces of information we have collected about you.</li>
                        <li><strong class="font-montserrat font-semibold text-primary">Right to Delete:</strong> You may request that we delete any personal information we have collected, subject to certain exceptions as required by law.</li>
                        <li><strong class="font-montserrat font-semibold text-primary">Right to Opt-Out of Sale:</strong> We do not sell your personal information. However, if our policy changes, we will update this Privacy Policy and provide a mechanism for you to opt out of such sale.</li>
                        <li><strong class="font-montserrat font-semibold text-primary">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your privacy rights, meaning we will not deny you services or provide different quality based on your privacy choices.</li>
                    </ul>
                    <p class="text-base leading-relaxed text-gray-600">
                        To exercise any of these rights, please contact us using the details provided in the "Contact Us" section of this Privacy Policy. We may ask you to verify your identity before responding to your request.
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">9. Changes to this Privacy Policy</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and we encourage you to review it periodically.
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        <strong class="font-montserrat font-semibold text-primary">10. Contact Us</strong>
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </p>
                    <p class="text-base leading-relaxed text-gray-600">
                        Easy Fix Appliance<br>
                        303 Twin Dolphin Drive<br>
                        Suite 600, #6175<br>
                        Redwood City, CA 94065<br>
                        care@easyfixappliance.com<br>
                        +1 (415) 941-4144
                    </p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-5 md:p-6 border-t border-primary/10 rounded-b-[2rem]">
                    <button data-modal-hide="privacy-modal" type="button" class="text-white bg-ink hover:bg-brass rounded-full font-montserrat text-xs font-semibold uppercase tracking-[0.12em] px-8 py-3 text-center transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2">Ok</button>
                </div>
            </div>
        </div>
    </div>
  </template>


  