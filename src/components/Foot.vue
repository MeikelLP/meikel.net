<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>website</strong> by <a :href="`mailto:${contact}`">Meikel Philipp</a>.
        The <a :href="sourceRepo">source code</a> is licensed under <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>

      <p>All assets of companies belong to them respectively</p>

      <a href="https://bulma.io">
        <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
      </a>
    </div>
  </footer>
</template>

<script>
import { contact, sourceRepo } from '../configs/data'

export default {
  name: 'Foot',
  data () {
    return {
      contact,
      sourceRepo
    }
  }
}
</script>
