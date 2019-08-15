<template>
  <div class="columns">
    <div class="column">
      <article class="message is-dark">
        <div class="message-body">
          {{ message }}
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Msg extends Vue {
  @Prop({ type: String, default: '' }) readonly message!: string
}
</script>
