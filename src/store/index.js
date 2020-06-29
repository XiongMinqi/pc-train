// import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  answerList: {},
  practiseList:{},
  paperInfo: {},
  header:{
    'x-auth-token':''
  }
}

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {}
})