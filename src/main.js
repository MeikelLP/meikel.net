import Vue from 'vue'
import App from './App.vue'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import freeSolid from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import 'bootstrap/less/bootstrap.less'
import './styles/main.sass'

Vue.config.productionTip = false

fontawesome.library.add(brands, freeSolid)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
