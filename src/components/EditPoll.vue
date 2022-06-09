<template>
  <div class="editPoll">
    <b-modal
      v-for="(item, index) in deletePollOption"
      :key="index"
      v-model="showDeletePollModal"
      title="Select option to remove from poll"
    >
      <p>Title: {{ deletePollOption.title }}</p>
      <li
        id="no-style"
        v-for="(item, index) in deletePollOption.options"
        :key="index"
      >
        <b-form-radio name="some-radios" v-model="selected" value="A">{{
          item.option
        }}</b-form-radio>
      </li>
    </b-modal>
    <b-modal v-model="showEditTitleModal">
        
      <p>{{ editPollTitle.title }}</p>
      <input type="text">
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
              <li v-for="(item, index) in item.options" :key="index">
                {{ item.option }}
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
  },
  methods: {
    ...mapActions([
            'callDeletePoll',
            "callEditTitle",
            'callEditpoll',
            'callAddOption',
        ]),
    callMountRes(){
        console.log("mounted");
        this.callEditpoll();
    },
    callAddOptionRes(){
        console.log("Here");
        this.callEditpoll();
        // this.callAddOption();
    },
    async handleDeletePoll(item){
        const payLoad = {
            id: item._id,
        }
        const responseDelete = await this.callDeletePoll(payLoad.id);
        this.callMountRes();
        console.log("parameter",item._id);
        console.log("const payload", payLoad);
        console.log("res", responseDelete);
    },
    handleUpdateTitle(item) {
        this.editPollTitle = item;
        this.showEditTitleModal = true;
        const payLoad = {

        }
        console.log("Update Title", item)
        this.callEditTitle(payLoad);
    },
    deleteOption(item) {
      this.deletePollOption = item;
      this.showDeletePollModal = true;
    },
    handleNewOption(item) {
        this.objForNewOption = item;
        console.log(item);
        console.log("in handleNewOption", this.objForNewOption);
        this.showAddOptionModal = true;
    },
    async handleOk(text, editPollList){
        if(this.text != "") {
            const payLoad = {
                id: this.objForNewOption._id,
                text: this.text,
            }
            console.log(editPollList)
            console.log(text)
            console.log("handleok,", payLoad)
            const responseAddOption = await this.callAddOption(payLoad);
            this.callAddOptionRes();
            console.log(responseAddOption);
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