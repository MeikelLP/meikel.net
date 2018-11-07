<template>
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label">{{ skill.name }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <progress class="progress is-primary" :value="skill.progress" max="1">{{ skill.progress * 100}} %</progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>
