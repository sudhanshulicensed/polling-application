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
        <b-form-radio name="some-radios" value="A">{{
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
      v-model="showEditPollModal"
      title="Type what you want to add as an option in Poll"
    >
      <p class="my-4">Option:</p>
      <b-form-input v-model="text" placeholder="Option for Poll"></b-form-input>
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
              @click="newOption"
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
      text: "",
      showDeletePollModal: false,
      showEditPollModal: false,
      showEditTitleModal: false,
      editPollTitle: {},
      deletePollOption: {},
    };
  },
  computed: {
    ...mapGetters([
        "editPollList",

    ]),
  },
  methods: {
    ...mapActions([
            'callDeletePoll',
            "callEditTitle"
        ]),
    showResponse() {
      console.log("Edit Poll", this.editPollList);
    },
    async handleDeletePoll(item){
        const payLoad = {
            id: item._id,
        }
        const responseDelete = await this.callDeletePoll(payLoad.id);
        console.log("parameter",item._id);
        console.log("const payload", payLoad)
        console.log("res", responseDelete)

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
    newOption() {

        this.showEditPollModal = true;
    },
  },
  mounted() {
    this.showResponse();
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