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
    }
  },
  modules: {
  }
})
