<template>
  <div class="wrapper container">
    <time-line></time-line>
    <skills></skills>
  </div>
</template>

<script>
import TimeLine from './body/TimeLine.vue'
import Skills from './body/Skills.vue'

export default {
  components: {
    TimeLine,
    Skills
  }
}
</script>
