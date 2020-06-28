<template>
  <div class="timeline-item">
    <div class="timeline-marker is-image is-32x32">
      <img :src="(companies[event.company] || {}).icon">
    </div>
    <div class="timeline-content content">
      <p class="heading">{{ fancyDate(event.from) }}
        <span v-if="event.to === 'today'"> - {{ 'labels.today' | t}}</span>
        <span v-else>{{ event.to === event.from ? '' : ` - ${fancyDate(event.to)}` }}</span>
      </p>
      <p v-if="event.company">
        <a :href="event.ref"><b>{{ event.company }}</b></a> - <i>{{ event.role | t }}</i>
      </p>
      <p v-else>
        <i>{{ event.role |t }}</i>
      </p>
      <ul>
        <li v-for="job in event.jobs" :key="job">{{ job | t }}</li>
      </ul>
      <div class="tags">
        <span class="tag" :class="'is-' + (tags[key] || '')" v-for="key in event.tags" :key="key">{{ key }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { tags, companies } from '../../configs/data'

export default {
  props: {
    event: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      tags,
      companies
    }
  },
  methods: {
    fancyDate (date) {
      return new Date(date).toLocaleString('de', { month: 'long' }) + ' ' + new Date(date).getFullYear()
    }
  }
}
</script>
