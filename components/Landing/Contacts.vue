<template>
  <section
    id="contacts"
    class="max-w-screen h-full overflow-hidden z-10 bg-secondary"
  >
    <div class="container mx-auto px-2 py-16 md:px-28">
      <h2 class="text-4xl font-bold text-center text-light capitalize">Get in touch</h2>
      <p class="text-justify text-light mt-4 px-2">
        We’re here to assist with any questions or concerns you may have. Feel free to contact us by phone, email, or by filling out the form. We will respond as soon as possible.
      </p>
      <div class="container mx-auto">
        <div
          class="grid grid-cols-1 gap-12 px-4 mt-10 md:grid-cols-2 lg:grid-cols-3"
        >
          <div class="flex flex-col items-start justify-start text-left">
            <span class="p-3 text-primary rounded-full bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-lg font-medium text-light">Email</h2>
            <p class="mt-2 text-light/90">Our friendly team is here to help.</p>
            <a href="mailto:care@easyfixappliance.com" class="mt-2 text-light/80 text-lg"> care@easyfixappliance.com </a>
          </div>

          <div class="flex flex-col items-start justify-center text-left">
            <span class="p-3 text-primary rounded-full bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-lg font-medium text-light">Phone</h2>
            <p class="mt-2 text-light/90 text-lg">Mon-Fri from 8am to 8pm.</p>
            <p class="mt-2 text-light/90 text-lg">Weekend <strong>Emergency Services only</strong> </p>
            <a
              class="mt-2 text-light/80 flex items-center text-lg"
              href="tel:+16505139163 "
              >(650) 513-9163
              <span class="mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </span>
            </a>
            <a
              class="mt-2 text-light/80 flex items-center text-lg"
              href="sms:+16505139163 "
              >(650) 513-9163
              <span class="mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chat-left-text"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                  />
                  <path
                    d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div class="flex flex-col items-start justify-start text-left">
            <span class="p-3 text-primary rounded-full bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-credit-card-2-back"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"
                />
                <path
                  d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-lg font-medium text-light">Payment Methods</h2>

            <p class="mt-2 text-light/90">We accept the following methods</p>
            <div class="mt-2 text-light/90 flex space-x-3 max-h-12 flex-wrap">
              <img src="/assets/icons/visa.svg" 
                alt="visa payment" 
                class="h-full"/>
              <img
                src="/assets/icons/mastercard.svg"
                alt="mastercard payment"
                class="h-full"
              />
              <img
                src="/assets/icons/amex.svg"
                alt="american experess payment"
                class="h-full"
              />
              <img src="/assets/icons/applepay.svg" 
                    alt="apple pay " 
                    class="h-full"
                    />
              <img src="/assets/icons/googlepay.svg" 
                    alt="google pay" 
                    class="h-full"
                    />
              <img src="/assets/icons/discover.svg" 
                    alt="discover payment" 
                    class="h-full"
                    />
              <img src="/assets/icons/venmo.svg" 
                    alt="venmo payment"
                    class="h-full"
                    />
              <img src="/assets/icons/zelle.svg" 
                    alt="venmo payment"
                    class="h-full py-2"
                    />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
