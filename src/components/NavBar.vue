<template>
    <div>
        <b-navbar class="spc-btw" d-flex justify-content-between type="dark" variant="info">
            <b-navbar-brand href="#">Poll</b-navbar-brand>
            <div class="main">
                <router-link v-if="currentRoute  === 'signup' && !IsLogin" to="/login">
                <b-button  variant="dark">Login</b-button>
                </router-link>
                <router-link v-if="currentRoute === 'login' && !IsLogin" to="/signup">
                <b-button  variant="dark">SignUp</b-button>
                </router-link>
                <router-link to="/logout" v-if="IsLogin">
                <b-button  variant="dark" @click="handleLogOut">Log Out</b-button>
                </router-link>
                {{ IsLogin }}
            </div>
            <div class="adminOptions" v-if="showAdmin_User">
                <router-link to="/createPoll">
                <b-button variant="light">Create</b-button>
                </router-link>
                <router-link to="/editPoll">
                <b-button variant="light">Edit</b-button>
                </router-link>
                <router-link to="/viewPoll">
                <b-button variant="light" @click="handleEditPoll">View</b-button>
                </router-link>
                <router-link to="/logout" v-if="IsLogin">
                <b-button  variant="dark" @click="handleLogOut">Log Out</b-button>
                </router-link>
            </div>
            <div class="guestOptions" v-if="showAdmin_User">
                <router-link to="/viewPoll">
                <b-button variant="light" @click="handleEditPoll">View</b-button>
                </router-link>
                <router-link to="/takePoll">
                <b-button variant="light" @click="handleTakeVotePoll">Take</b-button>
                </router-link>
                <router-link to="/logout" v-if="IsLogin">
                <b-button  variant="dark" @click="handleLogOut">Log Out</b-button>
                </router-link>
            </div>
        </b-navbar>
        <router-view/>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import router from '../router';

export default {
    name: "NavBar",
    data(){
        return {
            showAdmin_User: false,
        }
    },
    watch: {
    IsLogin(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  mounted() {
        console.log("mounted");
  },
  methods: {
    ...mapActions([
            'callEditpoll',
            'callLogin'
        ]),
    handleEditPoll(){
      this.callEditpoll();
    },
    handleTakeVotePoll(){
      this.callEditpoll();
    },
    handleLogOut(){
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.$router.push('/login');
    },
    show(){
      return this.showAdmin_User;
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name
    },
    IsLogin() {
      const data = localStorage.getItem('token');
      if(data){
        return true;
      }
      return false;
    }
  }
}
</script>

<style scoped>

</style>