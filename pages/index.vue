<template>
  <div class="container">
    <div class="notification">
      This container is <strong>centered</strong> on desktop.
    </div>
    <footer class="footer">
      <div class="has-text-centered">
        <p>soudegesu</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
