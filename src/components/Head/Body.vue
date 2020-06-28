<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <img class="profile-image" src="../../../public/profile-image.jpg" alt="">
      <p class="title">
        {{ 'person.fullName' | t}}
      </p>
      <p class="subtitle">
        {{ 'person.title' | t }}
      </p>
      <p>
        {{ 'person.description' | t }}
      </p>
    </div>
  </div>
</template>

<script>
import Config from '../../configs/data.json'

export default {
  data () {
    return Config
  }
}
</script>
