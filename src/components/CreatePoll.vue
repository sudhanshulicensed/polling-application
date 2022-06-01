<template>
    
    <div>
        <b-jumbotron header="Create Poll"></b-jumbotron>
        <b-container fluid>
            <div role="group">
                <label for="input-live">Name:</label>
                <b-form-input
                id="input-live"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter your name"
                trim
                ></b-form-input>

                <!-- This will only be shown if the preceding input has an invalid state -->
                <b-form-invalid-feedback id="input-live-feedback">
                Enter at least 3 letters
                </b-form-invalid-feedback>

                <!-- This is a form text block (formerly known as help block) -->
                <b-form-text id="input-live-help">Your full name.</b-form-text>
            </div>
        </b-container>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>