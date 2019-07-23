<template>
  <div class="columns">
    <div class="column">
      <article class="message is-dark">
        <div class="message-body">Message is here</div>
      </article>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Msg extends Vue {}
</script>
