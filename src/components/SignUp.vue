<template>
    <div>
       <div class="login-comp">
        <b-jumbotron header="SignUp"></b-jumbotron>
        <b-container fluid>
            <b-row sm="12" class="row-gap my-1 justify-content-center flex-column align-items-center">
                <b-col sm="6">
                    <b-row class="row-gap">
                        <b-col sm="3">
                            <label><code>Username</code>:</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input v-model="username">{{ username }}</b-form-input>
                        </b-col>
                    </b-row>
                <b-row class="row-gap" >
                    <b-col sm="3">
                        <label><code>Password</code>:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input :type="types[0]" v-model="password">{{ password }}</b-form-input>
                    </b-col>
                </b-row>
                <b-row class="row-gap">
                    <b-col sm="3">
                        <label><code>Role</code>:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                    </b-col>
                </b-row>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="3"></b-col>
                <b-col sm="6 d-flex justify-content-end">
                    <b-button variant="info" @click="handleSignup ">SignUp</b-button>
                </b-col>
            </b-row>
        </b-container>
     </div>
</div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name: "SignUpComponent",
    data() {
      return {
        info: null,
        username: "",
        password: "",
        types: [
          'password',
        ],
        selected: null,
        options: [
          { value: null, text: 'Role' },
          { value: 'admin', text: 'Admin' },
          { value: 'guest', text: 'Guest' },
        ],
      }
    },
    methods: {
        ...mapActions([
            'callSignup',
        ]),
        handleSignup(){
            const payLoad = {
                username : this.username,
                password : this.password,
                role : this.selected,
            }
            console.log(this.username, this.password, this.selected)
            this.callSignup(payLoad);
        }
    },
}
</script>

<style scoped>
    lable{
        margin-top: 0.5rem;
    }

    .row-gap{
        margin-bottom: 10px;
    }

    /* .btn-flex{
        display: ;
    } */
</style>