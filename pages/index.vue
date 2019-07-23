<template>
  <div class="container">
    <div class="columns">
      <Monitor />
      <Menu />
    </div>
    <Msg :message="initMsg" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Monitor from '../components/Monitor.vue'
import Menu from '../components/Menu.vue'
import Msg from '../components/Msg.vue'

@Component({
  components: {
    Monitor,
    Menu,
    Msg
  },
  data() {
    return {
      initMsg: 'This message is shown when initialized'
    }
  }
})
export default class Index extends Vue {}
</script>
