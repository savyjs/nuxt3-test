import {defineNuxtConfig} from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        // Using package name
        // '@nuxtjs/content',
        // Relative to your project srcDir
        // '~/modules/vsd',
        //'~/modules/vsp',
         'vuetify-strapi-page',
        // Providing options
    ]
})
