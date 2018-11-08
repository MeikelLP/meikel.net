<template>
  <section id="skills-section" class="section">

    <h4 class="title is-4">Professionelle Fertigkeiten</h4>
    <skill :skill="skill" v-for="skill in skills.professional" :key="skill.name"></skill>

    <h4 class="title is-4">Hobby Fertigkeiten</h4>
    <skill :skill="skill" v-for="skill in skills.hobby" :key="skill.name"></skill>

  </section>
</template>

<script>
import { skills } from '../../configs/data.json'
import Skill from '../Common/Skill'

export default {
  components: {
    Skill
  },
  data () {
    return {
      skills: skills
    }
  }
}
</script>
