<template>
  <div class="column is-one-fifths">
    <aside class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <li>
          <nuxt-link to="/">to home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/next">to next</nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Menu extends Vue {}
</script>
