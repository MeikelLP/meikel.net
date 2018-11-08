<template>
  <section id="experiences-section" class="section">
    <div class="columns">
      <div class="column">
        <h4 class="title is-4">Professionelle Arbeitserfahrung</h4>
        <div class="timeline">
          <div class="timeline-header">
            <span class="tag is-medium is-primary">Heute</span>
          </div>
          <event :event="event" v-for="event in events.professional" :key="event.date"/>
        </div>
      </div>
      <div class="column">
        <h4 class="title is-4">Hobby Erfahrung</h4>
        <div class="timeline">
          <div class="timeline-header">
            <span class="tag is-medium is-primary">Heute</span>
          </div>
          <event :event="event" v-for="event in events.hobby" :key="event.date"/>
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
  }
}
</script>
