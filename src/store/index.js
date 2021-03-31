import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persistedstate'
import $loading from '../components'
Vue.use(Vuex)
Vue.use($loading)

export default new Vuex.Store({
  state: {
    backColor: 'chocolate',
    colors: ['red', 'chocolate', 'blue', 'green', 'orange'],
    myBooks: []
  },
  mutations: {
    changeColor(state) {
      let i = Math.round(Math.random()*4)
      state.backColor = state.colors[i]
    },

    changeMyBooks(state, value) {
      let flag = false
      state.myBooks.forEach(item => {
        if(item.name == value.name) {
          Vue.$loading.show('书架中已有此书')
          flag = true
        }
      })
      if(!flag) {
        state.myBooks.unshift(value)
        Vue.$loading.show('加入成功')
      }
      setTimeout(() => {
        Vue.$loading.hide()
      }, 1000);
    },

    delBooks(state, i) {
      state.myBooks.splice(i, 1)
    },

    changeState(state, params) {
      state.myBooks[params.i].state = params.state
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [persist()]
})
