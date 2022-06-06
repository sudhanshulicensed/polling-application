<template>
  <div id="app">
    <b-navbar class="spc-btw" d-flex justify-content-between type="dark" variant="info">
      <b-navbar-brand href="#">Poll</b-navbar-brand>
      <div class="2">
        <router-link v-if="currentRoute === 'signup'" to="/login">
          <b-button  variant="dark">Login</b-button>
        </router-link>
        <router-link v-if="currentRoute === 'login'" to="/signup">
          <b-button  variant="dark">SignUp</b-button>
        </router-link>
      </div>
        <router-link to="/createPoll">
          <b-button variant="light">Create</b-button>
        </router-link>
        <router-link to="/editPoll">
          <b-button variant="light">Edit</b-button>
        </router-link>
        <router-link to="/viewPoll">
          <b-button variant="light">View</b-button>
        </router-link>
    </b-navbar>
    <router-view/>
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

.spc-btw{
  justify-content: space-between !important;
}


</style>
