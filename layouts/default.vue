<template>
  <div>
    <div class="container">
      <div class="columns">
        <Monitor />
        <Menu />
      </div>
      <Msg />
    </div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Monitor: () => import('../components/Monitor.vue'),
    Menu: () => import('../components/Menu.vue'),
    Msg: () => import('../components/Msg.vue')
  }
})
export default class Default extends Vue {}
</script>
