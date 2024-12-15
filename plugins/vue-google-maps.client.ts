import { defineNuxtPlugin } from '#app';
import VueGoogleMaps from '@fawmi/vue-google-maps';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBoDYDbJtkPm25HdXQ0mq-Xd7ngso0nobg', // Replace with your Google Maps API key
      libraries: 'places', // Optional libraries (e.g., places, geometry)
    },
  });
});