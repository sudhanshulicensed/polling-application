<template>
    <div class="editPoll">
        <b-jumbotron header="Edit Poll"></b-jumbotron>
        <b-card class="card">
            <b-container class="container">
                <div class="pollHolder" v-for="(item, index) in editPollList" :key="index">
                    <div class="pollDetail" >
                        <p class="title">Title: {{ item.title }}</p>
                        <p class="options">Options in Poll</p>
                        <ol>
                            <li v-for="(item, index) in item.options" :key="index">{{ item.option }}</li>
                        </ol>
                    </div>
                    <div class="editPollButtons">
                        <b-button variant="outline-primary" @click="editTitle">Edit Title</b-button>
                        <b-button variant="outline-primary">New Option</b-button>
                        <b-button variant="outline-danger">Delete Option</b-button>
                        <b-button variant="outline-danger" @click="deletePoll(index, editPollList)" >Delete Poll</b-button>
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
        deletePoll(index, editPollList){
            editPollList.splice(index, 1);
        },
        editTitle(){
            console.log("Any")
        }
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

.pollHolder{
    border: 1px solid black;
    box-sizing: border-box;
    box-shadow: 5px 5px 2px rgba(129, 236, 236, 0.4);
    margin-bottom: 35px;
    padding: 10px;
}

.container{
    box-sizing: border-box !important;
}

.card{
    width: 100%;
    box-sizing: border-box;
    padding-top: 5px;
    display: flex;
    align-items: center;
}
</style>