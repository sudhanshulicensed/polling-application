<template>
    <div class="login-comp">
        <b-jumbotron header="LogIn"></b-jumbotron>
        <b-container fluid>
            <b-row class="my-1 justify-content-center flex-column align-items-center row-gap">
                <b-row sm="12">
                    <b-col sm="3">
                      <label><code>Username</code>:</label>
                    </b-col>
                    <b-col sm="9">
                      <b-form-input v-model="username">{{ username }}</b-form-input>
                    </b-col>
                </b-row>
                <b-row sm="12">
                    <b-col sm="3">
                      <label><code>Password</code>:</label>
                    </b-col>
                    <b-col sm="9">
                      <b-form-input v-model="password">{{ password }}</b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                  <b-col sm="3"></b-col>
                  <b-col sm="6 d-flex justify-content-end">
                    <b-button variant="info" @click="handleLogin">LogIn</b-button>
                  </b-col>
                </b-row>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "LoginComponent",
    data() {
      return {
        username: "",
        password: "",
      }
    },
    methods: {
      ...mapActions([
        'callLogin'
      ]),
      handleLogin(){
        const payLoad = {
          username : this.username,
          password : this.password,
        }
        console.log(this.username, this.password)
        this.callLogin(payLoad);
      }
    }
}
</script>

<style scoped>
  .row-gap{
    row-gap: 10px;
  }
</style>