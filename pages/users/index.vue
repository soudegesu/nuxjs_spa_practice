<template>
  <div>
    <div v-for="user in users" :key="user">
      name: {{ user }}
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Users } from '@/store/users/index'
@Component({
  components: {
    Monitor: () => import('@/components/Monitor.vue'),
    Menu: () => import('@/components/Menu.vue'),
    Msg: () => import('@/components/Msg.vue')
  }
})
export default class Last extends Vue {

  @Users.Getter('all')
  private users!: string[];
}

</script>

<style scoped>
</style>
