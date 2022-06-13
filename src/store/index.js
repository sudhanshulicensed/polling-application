import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt_decode from "jwt-decode";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    editResponse: null,
    role: "",
    isLogin: false,
  },
  getters: {
    editPollList: (state) => state.editResponse,
    getRole: (state) => state.todoData,
  },
  mutations: {
    CALLEDITPOLL(state, response) {
    state.editResponse = response;
    },
    updateLogin(state, value){
      if(value){
        
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
      return state.isLogin;
    },
  },
  actions: {
    async callSignup({commit}, payLoad){
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/add_user?username=${payLoad.username}&password=${payLoad.password}&role=${payLoad.role}`);
      return response;
    },
    async callLogin({commit}, payLoad) {
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/login?username=${payLoad.username}&password=${payLoad.password}`);
      var token = response.data.token;
      if(token) {
        var decode = jwt_decode(token);
        return [response, decode];
      } else {
        console.log("User doesn't exist");
      }
    },
    async callCreatepoll({commit}, payLoad){
      let string = "";
      for(let i = 0; i< payLoad.options.length-1; i++) {
        string = string.concat(payLoad.options[i].option, "____")
      }
      string = string.concat(payLoad.options[payLoad.options.length -1].option);
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
    async callTakeVote({commit}, payLoad){
      // const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/do_vote?id=${payLoad.id}&option_text=${payLoad.text},`, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWEwMTgyYzU5NTI3ZmUwMDEyMzcwN2IyIiwiaWF0IjoxNTEwMDQ4NDY4LCJleHAiOjE1MTM2NDg0Njh9.DG93Hq-Fde9kNZbgnr34l2dZyeEYyJ0OfD_9yZK1JCQ")
      console.log(localStorage)
      console.log(localStorage.token);
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/do_vote?id=${payLoad.id}&option_text=${payLoad.text}`,{},{
        headers: {'access_token': payLoad.access_token}
      })
      console.log(response);
      return response;
    }
  },
})
