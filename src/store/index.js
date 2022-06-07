import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
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
        string = string.concat(payLoad.options[i].option, "____");
        console.log(string);
      }
      string = string.concat(payLoad.options[payLoad.options.length -1].option);
      console.log(string);
      const response = await axios.post
      (`https://secure-refuge-14993.herokuapp.com/add_poll?title=${payLoad.title}%20polll&options=${string}`);
    }
  },
  modules: {
  }
})
