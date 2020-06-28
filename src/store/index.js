import Vuex from 'vuex'
import Vue from 'vue'

import { safeLoad } from 'js-yaml'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    i18n: {}
  },
  mutations: {
    async setLang (state, value) {
      let response
      try {
        response = await fetch(`lang/${value}.yml`)
      } catch (_) {
        value = 'en'
        response = await fetch('lang/en.yml')
      }
      const txt = await response.text()
      const obj = safeLoad(txt)
      state.i18n = obj

      localStorage.setItem('lang', value)
    }
  },
  getters: {
    lang: _ => localStorage.getItem('lang') || 'en',
    i18n: state => state.i18n
  }
})

export default store
