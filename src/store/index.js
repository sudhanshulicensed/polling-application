import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt_decode from "jwt-decode";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editResponse: null,
    role: "",
  },
  getters: {
    editPollList: (state) => state.editResponse,
    getRole: (state) => state.todoData,
  },
  mutations: {
    CALLEDITPOLL(state, response) {
    state.editResponse = response;
    },
  },
  actions: {
    async callSignup({commit}, payLoad){
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/add_user?username=${payLoad.username}&password=${payLoad.password}&role=${payLoad.role}`);
      console.log(response);
      return response;
    },
    async callLogin({commit}, payLoad) {
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/login?username=${payLoad.username}&password=${payLoad.password}`);
      console.log("Response", response);
      var token = response.data.token;
      var decode = jwt_decode(token);
      console.log("Decode Value", decode)
      return [response, decode];
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
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/update_poll_title?id=${payLoad.id}&title=${payLoad.title}`);
      return response;
    },
    async callAddOption({commit}, payLoad){
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/add_new_option?id=${payLoad.id}&option_text=${payLoad.text}`);
      return response;
    },
    async callDeleteOption({commit}, payLoad){
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${payLoad.id}&option_text=${payLoad.text}`)
    },
    // async callTakeVote({commit}, payLoad){
    //   const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/do_vote?id=${payLoad.id}&option_text=${payLoad.text}`)
    //   return response;
    // }
  },
})
