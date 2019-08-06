<template>
  <div>
    <div v-for="(user, index) in users" v-bind:key="index">
      name: {{ user.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { userModule, User } from '@/store/modules/user'

@Component({
  components: {
    Monitor: () => import('@/components/Monitor.vue'),
    Menu: () => import('@/components/Menu.vue'),
    Msg: () => import('@/components/Msg.vue')
  }
})
export default class Last extends Vue {
  get users(): Array<User> {
    return userModule.all
  }
}

</script>

<style scoped>
</style>
