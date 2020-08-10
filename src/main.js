import Vue from 'vue'
import App from './App.vue'
// import vueAllKeyboard from './lib/index.js'
// Vue.use(vueAllKeyboard)

import vueAllKeyboard from 'vue-all-keyboard'

Vue.use(vueAllKeyboard)

new Vue({
  el: '#app',
  render: h => h(App)
})