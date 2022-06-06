<template>
    <div class="createPoll">
        <b-jumbotron header="Create Poll"></b-jumbotron>
        <b-container fluid>
            <b-row sm="12">
                <b-col sm="8">
                    <b-row class="row-gap" >
                        <b-col sm="3">
                            <label><code>Question</code>:</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input v-model="title">{{ title }}</b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="row-gap" v-for="(item, index) in options" :key="index">
                        <b-col sm="3">
                            <label><code>Option{{(index +1)}}</code>:</label>
                        </b-col>
                        <b-col sm="8" >
                            <b-form-input v-model="item.option"></b-form-input>
                        </b-col>
                        <b-col sm="1">
                            <b-button variant="danger" v-if="options.length > 3" @click="deleteOption(index)">Delete</b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-row>
                        <b-button variant="info" @click="handleCreatePoll()">Submit</b-button>
                        <b-button variant="info" @click="addOption">Add Option</b-button>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "CreatePoll",
    data() {
        return {
            title: "",
            option: "",
            vote: 0,
            checkForDelete: true,
            options: [{
                option: "Akjh",
                vote: 1,
            }],

        }
    },
    methods: {
        ...mapActions([
            'callCreatepoll',
        ]),
        handleCreatePoll(){
            const payLoad = {
                title: this.title,
                options: this.options,
            }
            this.callCreatepoll(payLoad);
        },
        addOption(){
            if(this.optionText != "") {
                this.options.push({option: this.option, vote: this.vote});
            }
        },
        deleteOption(index){
            this.options.splice(index, 1);
        }
    }
}
</script>

<style scoped>
    .row-gap{
        margin-bottom: 10px;
    }
</style>