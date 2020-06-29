<template>
  <section id="skills-section" class="section">

    <h2 class="title is-2">
      {{ 'labels.skills' | t }}
      <small class="tags">
        <span class="tag is-hoverable" :class="{'is-primary': showProfessional}" @click="showProfessional=!showProfessional">{{ 'labels.professionalSkills' | t }}</span>
        <span class="tag is-hoverable" :class="{'is-secondary': showHobby}" @click="showHobby=!showHobby">{{ 'labels.hobbySkills' | t }}</span>
      </small>
    </h2>
    <h3 class="title is-3">{{ 'labels.unitySkills' | t }}</h3>
    <skill :skill="skill" v-for="skill in unitySkills" :key="skill.name"/>
    <h3 class="title is-3">{{ 'labels.generalSkills' | t }}</h3>
    <skill :skill="skill" v-for="skill in skills" :key="skill.name"/>

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
      showProfessional: true,
      showHobby: true
    }
  },
  computed: {
    skills () {
      return keySort(skills.filter(x => !x.category).filter(x => x.professional ? this.showProfessional : this.showHobby), 'name', false)
    },
    unitySkills () {
      return keySort(skills.filter(x => x.category === 'unity').filter(x => x.professional ? this.showProfessional : this.showHobby), 'name', false)
    }
  }
}

function keySort (arr, key, desc) {
  arr.sort((a, b) => {
    var result = desc ? (a[key] < b[key]) : (a[key] > b[key])
    return result ? 1 : -1
  })
  return arr
}
</script>
