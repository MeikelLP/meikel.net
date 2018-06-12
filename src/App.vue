<template>
  <div id="app">
    <header class="header">
      <hello-world/>
      <intro/>
      <contact-info/>
    </header>
    <body-nav></body-nav>
    <body-comp></body-comp>
  </div>
</template>

<script>
import HelloWorld from './components/Navbar'
import Intro from './components/Intro'
import ContactInfo from './components/ContactInfo'
import BodyNav from './components/BodyNav'
import BodyComp from './components/Body'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Intro,
    ContactInfo,
    BodyNav,
    BodyComp
  }
}
</script>
