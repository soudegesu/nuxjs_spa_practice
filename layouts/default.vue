<template>
  <div>
    <div class="container">
      <div class="columns">
        <Monitor />
        <div class="column is-one-fifths">
          <aside class="menu">
            <p class="menu-label">Menu</p>
            <ul class="menu-list">
              <li><nuxt-link to="/next">to next</nuxt-link></li>
            </ul>
          </aside>
        </div>
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
    Msg: () => import('../components/Msg.vue')
  }
})
export default class Default extends Vue {}
</script>
