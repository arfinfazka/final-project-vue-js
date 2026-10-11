import axios from "axios";
import Cookies from "js-cookie";

export default {
    namespaced: true,
    state() {
        return {
            token: null,
            tokenExpirationDate: null,
            userLogin: {},
            isLogin: false,
        };
    },
    getters: {},
    mutations: {
        setToken(state, { idToken, expireIn }) {
            state.token = idToken;
            state.tokenExpirationDate = expireIn;
            Cookies.set("tokenExpirationDate", expireIn);
            Cookies.set("jwt", idToken)
        },
        setUserLogin(state, {userData, loginStatus}){
            state.userLogin = userData;
            state.isLogin = loginStatus;
        },
        setUserLogout(state){
            state.token = null
            state.userLogin = {}
            state.isLogin = false
            state.tokenExpirationDate = null
            Cookies.remove("jwt");
            Cookies.remove("tokenExpirationDate");
            Cookies.remove("UID");
        }
    },
    actions: {
        async register({ commit, dispatch }, payload) {
            try {
                const { data } = await axios.post(import.meta.env.VITE_FIREBASE_REGISTER, { email: payload.email, password: payload.password, returnSecureToken: true })
                commit("setToken", {
                    idToken: data.idToken,
                    expireIn: Date.now() + 60 * 60 * 1000
                })
                

                const newUserData = {
                    userId: data.localId, 
                    fullname: payload.fullname,
                    username: payload.username,
                    email: payload.email, 
                };



                Cookies.set("UID", newUserData.userId);
                await dispatch("addNewUser", newUserData);
            } catch (err) {

            }
        },
        async login({ commit, dispatch }, payload) {
            try {
                const { data } = await axios.post(import.meta.env.VITE_FIREBASE_LOGIN, { email: payload.email, password: payload.password, returnSecureToken: true })
                commit("setToken", {
                    idToken: data.idToken,
                    expireIn: Date.now() + 60 * 60 * 1000
                })
                Cookies.set("UID", data.localId);
                await dispatch("getUser", data.localId)
            } catch (err) {

            }
        },
        async addNewUser({ commit, state }, payload) {
            console.log("register4", payload)
            try {
                const { data } = await axios.post(`${import.meta.env.VITE_FIREBASE_URL}/user.json?auth=${state.token}`, payload)
                commit("setUserLogin", { userData: payload, loginStatus: true })
            } catch (err) {
                console.log(err);
            }
            
        },
        async getUser({ commit }, payload){
            try{
                const {data} = await axios.get(`${import.meta.env.VITE_FIREBASE_URL}/user.json?`)
                for (let key in data) {
                    if (data[key].userId === payload) {
                        Cookies.set("UID", data[key].userId)
                        commit("setUserLogin", 
                            { userData: data[key], loginStatus: true}
                        )
                    }
                } 
            } catch (err) {
                console.log(err)
            }
        }
    },

}