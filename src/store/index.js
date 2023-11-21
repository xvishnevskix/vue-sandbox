import { createStore } from 'vuex'
import { postModule } from '@/store/postModule'

export default createStore({
    state: {
        likes: 0,
        isAuth: false,
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        post: postModule
    }
})