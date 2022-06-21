import {defineNuxtConfig} from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    cs:[
        '~/assets/font-css/font-iran.css'
    ],
    modules: [
        // Using package name
        '@nuxt/content',
        // Relative to your project srcDir
        // '~/modules/vsd',
        '~/modules/ntm',
        // 'vuetify-strapi-page',
        // Providing options
    ],
    content: {
        base: '/content'
    }
})
