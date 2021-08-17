import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const createStore = () => {
    return new Vuex.Store({
      state: {
        isLogin:null,
        userInfo:{}
      },
      mutations: {
        islogin(state,login){
            state.isLogin = login
        },
        setUserInfo(state,user){
            state.userInfo = user
        }
      }
    })
  }
  
  export default createStore