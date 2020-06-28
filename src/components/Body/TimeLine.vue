<template>
  <section id="projects-section" class="section">
    <div class="columns">
      <div class="column">
        <h4 class="title is-4">{{ 'labels.professionalProjects' | t }}</h4>
        <div class="timeline">
          <div class="timeline-header">
            <span class="tag is-medium is-primary">{{ 'labels.today' | t }}</span>
          </div>
          <event :event="event" v-for="event in professional" :key="event.from"/>
        </div>
      </div>
      <div class="column">
        <h4 class="title is-4">{{ 'labels.hobbyProjects' | t }}</h4>
        <div class="timeline">
          <div class="timeline-header">
            <span class="tag is-medium is-primary">{{ 'labels.today' | t }}</span>
          </div>
          <event :event="event" v-for="event in hobby" :key="event.from"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Event from '../Common/Event'
import { events } from '../../configs/data.json'

export default {
  components: {
    Event
  },
  data () {
    return {
      events: events
    }
  },
  methods: {
    sortDesc (eventArr) {
      return eventArr.sort((a, b) => {
        return new Date(a.from) > new Date(b.from) ? -1 : 1
      })
    }
  },
  computed: {
    professional () {
      return this.sortDesc(this.events.professional)
    },
    hobby () {
      return this.sortDesc(this.events.hobby)
    }
  }
}
</script>
