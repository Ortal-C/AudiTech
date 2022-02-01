import { userService } from '../services/user.service.js'

export const userStore = {
    state: {
        isLoggedin: false,
        user: {},
    },
    getters: {
        isLoggedin({ isLoggedin }) { return isLoggedin },
        user({ user }) { return user },
    },
    mutations: {
        setIsLoggedin(state, { user }) {
            state.isLoggedin = user ? true : false;
        },
        setUser(state, { user }) {
            state.user = { username: user } || null;
        }
    },
    actions: {
        async login({ commit }, { userCred }) {
            try {
                const user = await userService.login(userCred);
                commit({ type: 'setUser', user })
                commit({ type: 'setIsLoggedin', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setUser', user: null })
                commit({ type: 'setIsLoggedin', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
    }
}