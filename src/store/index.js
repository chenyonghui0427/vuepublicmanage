import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bread: sessionStorage.getItem('bread') ? JSON.parse(sessionStorage.getItem('bread')) : []
    },
    mutations: {
        ADD_BREAD(state, value) {
            sessionStorage.setItem('bread', JSON.stringify(value))
            state.bread = value
        }
    },
    actions: {
    },
    modules: {
    }
})
