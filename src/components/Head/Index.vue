
<template>
  <section class="hero is-primary is-fullheight">
    <head-info></head-info>
    <head-body></head-body>
    <head-foot></head-foot>
  </section>
</template>

<script>
import HeadInfo from './Head'
import HeadBody from './Body'
import HeadFoot from './Foot'

export default {
  components: { HeadInfo, HeadBody, HeadFoot }
}
</script>
