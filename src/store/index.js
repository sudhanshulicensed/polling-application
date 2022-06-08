import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editResponse: null,
  },
  getters: {
    editPollList: (state) => state.editResponse,
  },
  mutations: {
    CALLEDITPOLL(state, response) {
    state.editResponse = response;
    console.log("From Index: ", response)
    }
  },
  actions: {
    async callSignup({commit}, payLoad){
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/add_user?username=${payLoad.username}&password=${payLoad.password}&role=${payLoad.role}`);
    },
    async callLogin({commit}, payLoad) {
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/login?username=${payLoad.username}&password=${payLoad.password}`);
    },
    async callCreatepoll({commit}, payLoad){
      let string = "";
      for(let i = 0; i< payLoad.options.length-1; i++) {
        string = string.concat(payLoad.options[i].option, "____")
        console.log(string);
      }
      string = string.concat(payLoad.options[payLoad.options.length -1].option);
      console.log(string);
      const response = await axios.post
      (`https://secure-refuge-14993.herokuapp.com/add_poll?title=${payLoad.title}%20polll&options=${string}`);
    },
    async callEditpoll({commit}){
      const response = await axios.get(`https://secure-refuge-14993.herokuapp.com/list_polls`);
      commit("CALLEDITPOLL", response.data.data)
    },
    async callDeletePoll({commit}, payLoad){
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/delete_poll?id=${payLoad}`);
      return response;
    },
    async callEditTitle({commit}, payLoad){
      console.log("payLoad", payLoad)
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/update_poll_title?id=577212fdd1bba33c17b5b64e&title=newtitle`);
      console.log("callEditPoll", response)
    }
  },
})
