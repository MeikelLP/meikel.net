<template>
  <div class="timeline-item">
    <div class="timeline-marker is-image is-32x32">
      <img :src="event.iconPath">
    </div>
    <div class="timeline-content content">
      <p class="heading">{{ new Date(event.date).toLocaleString("de", { month: "long" }) }} {{ new Date(event.date).getFullYear() }}</p>
      <p v-if="event.company">
        <b>{{ event.company }}</b> - <i>{{ event.role }}</i>
      </p>
      <p v-else>
        <i>{{ event.role }}</i>
      </p>
      <ul>
        <li v-for="job in event.jobs" :key="job">{{ job }}</li>
      </ul>
      <div class="tags">
        <span class="tag" :class="'is-' + tag.color" v-for="tag in event.tags" :key="tag.label">{{ tag.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      required: true,
      type: Object
    }
  }
}
</script>
