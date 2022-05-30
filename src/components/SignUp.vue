<template>
    <div>
       <div class="login-comp">
        <b-jumbotron header="SignUp"></b-jumbotron>
        <b-container fluid>
            <b-row class="my-1" v-for="type in types" :key="type">
                <b-col sm="3">
                    <label :for="`type-${type}`"><code>{{ type }}</code>:</label>
                </b-col>
                <b-col sm="6">
                    <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
                </b-col>
            </b-row>
                <!-- <b-row class="my-1"> -->
                    <b-col sm="6">
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                    </b-col>
                <!-- </b-row> -->
        </b-container>
     </div>
</div>
</template>

<script>
export default {
    name: "SignUpComponent",
    data() {
      return {
        types: [
          'text',
          'password',
        ],
        selected: null,
        options: [
          { value: null, text: 'Role' },
          { value: 'a', text: 'Admin' },
          { value: 'b', text: 'Guest' },
        ]
      }
    }
}
</script>

<style scoped>

</style>