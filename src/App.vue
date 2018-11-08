<template>
  <div id="app">
    <head-info></head-info>
    <body-comp></body-comp>
    <foot></foot>
  </div>
</template>

<script>
import HeadInfo from './components/Head/Index'
import BodyComp from './components/Body/Index'
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    HeadInfo,
    BodyComp,
    Foot
  }
}
</script>
