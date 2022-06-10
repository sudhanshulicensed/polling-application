<template>
  <div class="editPoll">
    <b-modal
      @ok="handleDeleteOptionOk"
      v-model="showDeletePollModal"
      title="Select option to remove from poll"
    >
      <p>Title: {{ deletePollOption.title }} </p>
      <li
        id="no-style"
        v-for="(item, index) in deletePollOption.options"
        :key="index"
      >
        <b-form-radio name="some-radios" @change="selectedRadio(item.option)" v-model="selected" :value="item.option">{{
          item.option
        }}</b-form-radio>
      </li>
    </b-modal>
    <b-modal @ok="handleEditTitleOk(editTitleText, editPollList)" v-model="showEditTitleModal">
      <p>{{ editPollTitle.title }}</p>
      <input type="text" v-model="editTitleText">
      {{ editTitleText }}
      <!-- Another Option -->
      <!-- <p>{{ editPollTitle ? editPollTitle.title : null}}</p> -->
    </b-modal>
    <b-modal
      @ok="handleOk(text, editPollList)"
      v-model="showAddOptionModal"
      title="Type what you want to add as an option in Poll"
    >
      <p class="my-4">Option:</p>
      <b-form-input v-model="text" placeholder="Option for Poll"></b-form-input>
      {{ text }}
    </b-modal>
    <b-jumbotron header="Edit Poll"></b-jumbotron>
    <b-card class="card">
      <b-container class="container">
        <div
          class="pollHolder"
          v-for="(item, index) in editPollList"
          :key="index"
        >
          <div class="pollDetail">
            <p class="title">Title: {{ item.title }}</p>
            <p class="options">Options in Poll</p>
            <ol>
              <li v-for="(item1, index) in item.options" :key="index">
                {{ item1.option }}
              </li>
            </ol>
          </div>
          <div class="editPollButtons">
            <b-button variant="outline-primary" @click="handleUpdateTitle(item)"
              >Edit Title</b-button
            >
            <b-button
              variant="outline-primary"
              @click="handleNewOption(item)"
              v-b-modal.modal-1
              >New Option
            </b-button>

            <b-button variant="outline-danger" @click="deleteOption(item)"
              >Delete Option
            </b-button>
            <b-button
              variant="outline-danger"
              @click="handleDeletePoll(item)"
              >Delete Poll</b-button
            >
          </div>
        </div>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from 'vuex';

export default {
  name: "EditPoll",
  data() {
    return {
      selected: "",
      showDeletePollModal: false,
      showAddOptionModal: false,
      showEditTitleModal: false,
      editPollTitle: {},
      deletePollOption: {},
      text: "",
      deletePollOptionText: "",
      editTitleText: "",
      objForNewOption: {},
    };
  },
  computed: {
    ...mapGetters([
        "editPollList",
    ]),
  },
  mounted(){
    this.callMountRes();
    this.callAddOptionRes();
    this.callEditTitleRes();
  },
  methods: {
    ...mapActions([
            'callDeletePoll',
            "callEditTitle",
            'callEditpoll',
            'callAddOption',
            'callDeleteOption',
        ]),
    callMountRes(){
        this.callEditpoll();
    },
    callAddOptionRes(){
        this.callEditpoll();
    },
    callEditTitleRes(){
      this.callEditpoll();
    },
    selectedRadio(item){
      this.deletePollOptionText = item;
    },
    async handleDeletePoll(item){
        const payLoad = {
            id: item._id,
        }
        const responseDelete = await this.callDeletePoll(payLoad.id);
        this.callMountRes();
    },
    handleUpdateTitle(item){
        this.editPollTitle = item;
        this.editPollTitleOk = item;
        this.showEditTitleModal = true;
    },
    async handleEditTitleOk(editTitleText) {
        const payLoad = {
          title: editTitleText,
          id: this.editPollTitle._id,
        }
        const responseEditTitle = await this.callEditTitle(payLoad);
        this.callMountRes();
    },
    deleteOption(item) {
      this.deletePollOption = item;
      console.log(this.deletePollOption)
      this.showDeletePollModal = true;
    },
    async handleDeleteOptionOk() {
      const payLoad = {
        id : this.deletePollOption._id,
        text : this.deletePollOptionText,
      }
      console.log(payLoad)
      const responsedelPollOptText = await this.callDeleteOption(payLoad);
      this.callMountRes();
    },
    handleNewOption(item) {
        this.objForNewOption = item;
        this.showAddOptionModal = true;
    },
    async handleOk(text, editPollList){
        if(this.text != "") {
            const payLoad = {
                id: this.objForNewOption._id,
                text: this.text,
            }
            const responseAddOption = await this.callAddOption(payLoad);
            this.callAddOptionRes();
            this.text = "";
        } else {
            console.log("oop");
        }
    }
  },
};
</script>

<style scoped>
.pollDetail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.editPollButtons {
  display: flex;
  justify-content: end;
  column-gap: 10px;
}

li {
  text-align: start;
}

.pollHolder {
  border: 1px solid black;
  box-sizing: border-box;
  box-shadow: 5px 5px 2px rgba(129, 236, 236, 0.4);
  margin-bottom: 35px;
  padding: 10px;
}

.container {
  box-sizing: border-box !important;
}

.card {
  width: 100%;
  box-sizing: border-box;
  padding-top: 5px;
  display: flex;
  align-items: center;
}

#no-style {
  list-style-type: none;
}
</style>