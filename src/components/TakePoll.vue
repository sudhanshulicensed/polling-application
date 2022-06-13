<template>
    <div class="editPoll">
        <b-jumbotron header="Take Poll"></b-jumbotron>
        <b-card class="card">
            <b-container class="container">
                <div class="pollHolder" v-for="(item, index) in editPollList" :key="index">
                    <div class="pollDetail" >
                        <p class="title">Title:{{ item.title }}</p>
                        <p class="options">Options in Poll</p>
                        <li v-for="(voteOption, index1) in item.options" :key="index1"
                          id="no-style"
                        >
                          <b-form-radio name="some-radios" @change="selectedRadio(voteOption, item, index)" v-model="ifOptionSelected" :value="voteOption.option">{{ voteOption.option }}</b-form-radio>
                        </li>{{item}}
                            <button id="vote" :disabled="buttonState !== index" @click="handleTakeVoteOk()">Press me to Vote</button>
                    </div>
                </div> 
            </b-container>
        </b-card>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: "TakePollComponent",
    data(){
        return {
            voteOptionSelected: "",
            voteOptionId: "",
            ifOptionSelected: "",
            buttonState: null,
        }
    },
    computed: {
        ...mapGetters([
          'editPollList'
        ]),
    },
    methods: {
           ...mapActions([
            'callTakeVote'
        ]),
      showList(){
        console.log(this.editPollList);
      },
      selectedRadio(voteOption,whholeItem,index){
        this.voteOptionSelected = voteOption.option;
        this.voteOptionId = whholeItem._id;
        this.buttonState = index;
      },
      async handleTakeVoteOk(){
        if(this.ifOptionSelected != ""){
            const payLoad = {
            id : this.voteOptionId,
            text : this.voteOptionSelected,
                        access_token: localStorage.token
        }
            const responseTookVote = await this.callTakeVote(payLoad);
            console.log(responseTookVote);
        }
        }
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

#no-style{
  list-style-type: none;
}

</style>