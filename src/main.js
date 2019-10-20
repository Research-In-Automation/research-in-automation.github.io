// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '../static/css/normalize.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    herf: 'https://fonts.googleapis.com/css?family=Playfair+Display&display=swap'
  })

  head.style.push({
    type: 'text/css',
    cssText: "body { font-family: 'Playfair Display', serif; }"
  })
}
