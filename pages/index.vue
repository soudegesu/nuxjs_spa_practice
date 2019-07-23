<template>
  <div class="container">
    <div class="columns">
      <div class="column is-four-fifths">
        main monitor
      </div>
      <div class="column is-one-fifths">
        <aside class="menu">
          <p class="menu-label">Menu</p>
          <ul class="menu-list">
            <li><a>move to</a></li>
          </ul>
        </aside>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <article class="message is-dark">
          <div class="message-body">Message is here</div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {}
</script>
