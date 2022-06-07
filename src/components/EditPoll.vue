<template>
    <div class="editPoll">
        <b-jumbotron header="Edit Poll"></b-jumbotron>
        <b-card>
            <b-container fluid>
                <div class="pollHolder" v-for="(item, index) in editPollList" :key="index">
                    <div class="pollDetail" >
                        <!-- {{ editPollList }} -->
                        <p class="title">Title: {{ item.title }}</p>
                        <p class="options">Options in Poll</p>
                        <ol>
                            <li v-for="(item, index) in item.options" :key="index">{{ item.option }}</li>
                        </ol>
                    </div>
                    <div class="editPollButtons">
                        <b-button variant="outline-primary">Edit Title</b-button>
                        <b-button variant="outline-primary">New Option</b-button>
                        <b-button variant="outline-danger">Delete Option</b-button>
                        <b-button variant="outline-danger">Delete Poll</b-button>
                    </div>
                </div>
                
                
            </b-container>
        </b-card>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: "EditPoll",
    computed: {
        ...mapGetters([
            'editPollList'
        ]),
    },
    methods : {
        showResponse(){
            console.log("Edit Poll", this.editPollList);
        },
    },
    mounted(){
        this.showResponse();
    }
}
</script>

<style scoped>
.pollDetail{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.editPollButtons{
    display: flex;
    justify-content: end;
    column-gap: 10px;
}

li{
    text-align: start;
}
</style>