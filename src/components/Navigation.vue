<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link class="spacing" v-for="routes in links"
      v-bind:key="routes.id"
      v-bind:to="routes.page" exact>{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'About',
          page:'/About'
        },
        {
          id: 2,
          text: 'About2',
          page:'/About2'
        },
        {
          id: 3,
          text: 'Contact',
          page:'/Contact'
        },
        {
          id: 4,
          text: 'SuperAwesomePage',
          page:'/SuperAwesomePage'
        }
      ]
    }
  }
}
</script>

<style>
  .spacing {
    Margin-right: 10px;
  }
</style>
