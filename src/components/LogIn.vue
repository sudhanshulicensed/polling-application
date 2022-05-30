<template>
    <div class="login-comp">
        <b-jumbotron header="LogIn"></b-jumbotron>
        <b-container fluid>
            <b-row class="my-1" v-for="type in types" :key="type">
            <b-col sm="3">
                <label :for="`type-${type}`"><code>{{ type }}</code>:</label>
            </b-col>
            <b-col sm="6">
                <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
            </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "LoginComponent",
    data() {
      return {
        types: [
          'email',
          'password',
        ]
      }
    }
}
</script>

<style scoped>

</style>