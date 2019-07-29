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
import { userModule } from '@/store/modules/user'

@Component({
  components: {
    Monitor: () => import('../components/Monitor.vue'),
    Menu: () => import('../components/Menu.vue'),
    Msg: () => import('../components/Msg.vue')
  }
})
export default class Next extends Vue {
  initMsg: string = 'Welcome to netx page!!'

  public async regist(value) {
    window.console.log(value)
    await userModule.save()
    this.$router.push('/users/')
  }
}
</script>
