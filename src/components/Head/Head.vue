<template>
  <div class="hero-head">
    <nav class="navbar has-background-light-primary">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger burger" :class="{'is-active': menuActive}" @click="menuActive = !menuActive">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu" :class="{'is-active': menuActive}">
          <div class="navbar-end">
            <a class="navbar-item" target="_blank" v-for="social in socials" :key="social.name" :href="social.url" :title="social.name">
              <span class="icon">
                <font-awesome-icon :icon="social.icon"/>
              </span>
              <span class="is-hidden-desktop">{{ social.name }}</span>
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <span class="icon">
                  <font-awesome-icon icon="language"/>
                </span>
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item" v-for="lang in Object.keys(languages)" :key="lang" @click="setLang(lang)">
                  {{ languages[lang] }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { socials, languages } from '../../configs/data.json'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      menuActive: false,
      socials,
      languages
    }
  },
  methods: {
    ...mapMutations(['setLang'])
  }
}
</script>
