import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt_decode from "jwt-decode";

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
    },
  },
  actions: {
    async callSignup({commit}, payLoad){
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/add_user?username=${payLoad.username}&password=${payLoad.password}&role=${payLoad.role}`);
    },
    async callLogin({commit}, payLoad) {
      const response = await axios.post(`https://secure-refuge-14993.herokuapp.com/login?username=${payLoad.username}&password=${payLoad.password}`);
      console.log(response);
      var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmExZWYxMjlhMzE0NjAwMTUwYzE3NGYiLCJ1c2VybmFtZSI6Im1ha2U3NzcwIiwicm9sZSI6ImFkbWluIiwiX192IjowLCJpYXQiOjE2NTQ3ODI0MjAsImV4cCI6MTY1ODM4MjQyMH0.1K1dHWytd65DO6jbwlG4gFSLyIQpXma2fIczn5A6Ohw";
      var decode = jwt_decode(token);
      console.log(decode)
      return response;
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
