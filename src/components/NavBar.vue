<template>
    <div>
        <b-navbar class="spc-btw" d-flex justify-content-between type="dark" variant="info">
            <b-navbar-brand href="#">Poll</b-navbar-brand>
            <div class="main">
                <router-link v-if="currentRoute  === 'signup' && !handleAdminUser" to="/login">
                <b-button  variant="dark">Login</b-button>
                </router-link>
                <router-link v-if="currentRoute === 'login' && !handleAdminUser" to="/signup">
                <b-button  variant="dark">SignUp</b-button>
                </router-link>
            </div>
            <div class="adminOptions" v-if="handleAdminUser === 'admin'">
                <router-link to="/createPoll">
                <b-button variant="light">Create</b-button>
                </router-link>
                <router-link to="/editPoll">
                <b-button variant="light">Edit</b-button>
                </router-link>
                <router-link to="/viewPoll">
                <b-button variant="light" @click="handleEditPoll">View</b-button>
                </router-link>
                <router-link to="/logout" v-if="loggenInDetail">
                <b-button  variant="dark" @click="handleLogOut">Log Out</b-button>
                </router-link>
            </div>
            <div class="guestOptions" v-if="handleAdminUser === 'guest'">
                <router-link to="/viewPoll">
                <b-button variant="light" @click="handleEditPoll">View</b-button>
                </router-link>
                <router-link to="/takePoll">
                <b-button variant="light" @click="handleTakeVotePoll">Take</b-button>
                </router-link>
                <router-link to="/logout" v-if="isLogin">
                <b-button  variant="dark" @click="handleLogOut">Log Out</b-button>
                </router-link>
            </div>
        </b-navbar>
        <router-view/>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
// import router from '../router';

export default {
    name: "NavBar",
    data(){
        return {
            show_Guest: false,
            show_Admin: false,
            loggenInDetail: null,
        }
    },
    // watch: {
    // IsLogin(newVal, oldVal) {
    //   console.log("Is login", newVal, oldVal);
    // }
  // },
  mounted() {
        console.log("mounted");
        this.loggenInDetail = localStorage.getItem('token');
        console.log(this.loggenInDetail);
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
      this.show_Guest = false;
      this.show_Admin = false;
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.$router.push('/login');
    },
    // handleAdminUser(){
    //   this.loggenInDetail = localStorage.getItem('token');
    //   console.log(localStorage)
    //   if(this.loggenInDetail) {
    //     if(localStorage.getItem('role') == 'admin'){
    //       this.show_Admin = true;
    //     } else if(localStorage.getItem('role') == 'guest') {
    //       this.show_Guest = true;
    //     }
    //     return true;
    //   }
    //   return false;
    // }
  },
  computed: {
    ...mapState([
      'isLogin'
    ]),
    currentRoute() {
      console.log(this.$route.name)
      return this.$route.name;
    },
    handleAdminUser(){
      console.log(this.isLogin);
      // this.loggenInDetail = localStorage.getItem('token');
      // console.log(localStorage)
      if(this.isLogin) {
        if(localStorage.getItem('role') == 'admin'){
          return "admin"
        } else if(localStorage.getItem('role') == 'guest') {
          return "guest"
        }
      }
      return false;
    }
    // IsLogin() {
    //   const data = localStorage.getItem('token');
    //   console.log(localStorage);
    //   if(data){
    //     if(localStorage.getItem('role') == 'admin'){
    //       this.show_Admin = true;
    //     } else if(localStorage.getItem('role') == 'guest') {
    //       this.show_Guest = true;
    //     }
    //     return true;
    //   }
    //   return false;
    // }
    // handleAdminUser(){
    //   this.loggenInDetail = localStorage.getItem('token');
    //   console.log(localStorage)
    //   if(this.loggenInDetail) {
    //     if(localStorage.getItem('role') == 'admin'){
    //       this.show_Admin = true;
    //     } else if(localStorage.getItem('role') == 'guest') {
    //       this.show_Guest = true;
    //     }
    //     return true;
    //   }
    //   return false;
    // }
  }
}
</script>

<style scoped>

</style>