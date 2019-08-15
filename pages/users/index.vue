<template>
  <div>
    <div v-for="user in users" :key="user">name: {{ user }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { userModule } from '@/store/modules/user'

@Component({
  components: {
    Monitor: () => import('@/components/Monitor.vue'),
    Menu: () => import('@/components/Menu.vue'),
    Msg: () => import('@/components/Msg.vue')
  }
})
export default class Last extends Vue {
  get users(): string[] {
    return userModule.all
  }
}
</script>

<style scoped></style>
