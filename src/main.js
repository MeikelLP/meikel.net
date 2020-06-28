import Vue from 'vue'
import App from './App.vue'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import freeSolid from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import store from './store'

import './styles/main.sass'

Vue.config.productionTip = false

fontawesome.library.add(brands, freeSolid)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.filter('t', function (value) {
  if (value.includes('.')) {
    let obj
    value.split('.').forEach(key => {
      obj = (obj || store.getters.i18n)[key]
    })
    return obj
  }
  return store.getters.i18n[value]
})

export const VueInstance = new Vue({
  render: h => h(App),
  async beforeCreate () {
    store.commit('setLang', store.getters.lang)
  },
  store
}).$mount('#app')
