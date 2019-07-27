<template>
  <div class="container">
    <div class="columns">
      <Monitor />
      <Menu />
    </div>
    <Msg :message="initMsg" />
    <div class="buttons are-medium">
      <a class="button is-primary is-outlined" @click="regist('A')" >A</a>
      <a class="button is-link is-outlined" @click="regist('B')">B</a>
      <a class="button is-info is-outlined" @click="regist('C')">C</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Monitor: () => import('../components/Monitor.vue'),
    Menu: () => import('../components/Menu.vue'),
    Msg: () => import('../components/Msg.vue')
  },
  methods: {
    async regist() {
      await this.$store.dispatch('save')
      this.$router.push('/users/')
    }
  }
})
export default class Next extends Vue {
  initMsg: string = 'Welcome to netx page!!'
}
</script>
