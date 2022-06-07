<template>
    <div class="editPoll">
        <b-jumbotron header="View Poll"></b-jumbotron>
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
                </div>
            </b-container>
        </b-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "ViewPoll",
    computed: {
        ...mapGetters([
            'editPollList'
        ]),
    },
}
</script>
<style scoped>
.pollDetail{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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