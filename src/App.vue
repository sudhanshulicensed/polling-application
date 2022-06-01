<template>
  <div id="app">
    <b-navbar d-flex toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Poll</b-navbar-brand>
      <router-link v-if="currentRoute === 'signup'" to="/login">
        <b-button  variant="dark">Login</b-button>
      </router-link>
      <router-link v-if="currentRoute === 'login'" to="/signup">
        <b-button  variant="dark">SignUp</b-button>
      </router-link>
    </b-navbar>
    <router-view/>
      <!-- v-show="signup == getRouteSignup" -->
  </div>
</template>

<script>



export default {
  data(){
    return {

    }
  },
  methods: {
  },
  computed: {
    currentRoute() {
      let path = null
      if (this.$route.name === 'login') {
        path = 'login'
      } else {
        path = 'signup'
      }
      return path
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


</style>
