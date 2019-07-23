<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths">
          main monitor
        </div>
        <div class="column is-one-fifths">
          <aside class="menu">
            <p class="menu-label">Menu</p>
            <ul class="menu-list">
              <li><nuxt-link to="/next">to next</nuxt-link></li>
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
    <nuxt />
  </div>
</template>
