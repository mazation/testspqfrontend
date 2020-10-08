import axios from 'axios';
import {serverUrl} from '../../config'

const state = {
    token: localStorage.getItem('token') || null,
    confirmed: localStorage.getItem('confirmed') || false,
    registerSent: false,
    calls: [],
    callsNumber: 0,
    balanceHistory: [],
    balance: "загружается...",
    user: {}
}

const getters = {
    loggedIn(state) {
        return state.token != null 
      },
      isConfirmed(state) {
          return state.confirmed
      },
      registerSent(state) {
          return state.registerSent
      },
      calls(state) {
          return state.calls
      },
      callsNumber(state) {
          return state.callsNumber
      },
      balance(state) {
          return state.balance
      },
      balanceHistory(state) {
          return state.balanceHistory
      },
      user(state) {
          return state.user
      }
}

const actions = {
    async newUser({commit}, props) {
        return new Promise((resolve, reject) => {
            axios.post(
                serverUrl + "/register", {
                    email: props.email,
                    password: props.password
                }
            )
            .then(response => {
                commit("register")
                resolve(response)
            })
            .catch(error => {
                reject(error)
            }) 
        })
    },
    async confirmEmail({commit}, props) {
        return new Promise((resolve, reject) => {
             axios.get(
                serverUrl + "/confirm/" + props.confirmToken, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                })
            .then(response => {
                if(response.status == 200) {
                    localStorage.setItem("confirmed", true)
                    commit('getConfirmToken')
                }                
                resolve(response)
            })
            .catch(error => {
                reject(error)
            }) 
        })
    },
    async login({ commit }, props) {
        return new Promise((resolve, reject) => {
            axios.post(
               serverUrl + "/login", {
                   email: props.email,
                   password: props.password
               })
           .then(response => {
               
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("confirmed", response.data.confirmed)
                commit('login', response.data.token)
                resolve(response)
           })
           .catch(error => {
               reject(error)
           }) 
       })
    },
    logout({commit}) {
        localStorage.removeItem("token")
        localStorage.removeItem("confirmed")
        commit("logout")
    },
    async getCalls ({commit}, paginate) {
        return new Promise((resolve, reject) => {
            axios.post(
                serverUrl + "/calls/get", {
                    paginate
                },
                {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                }
            )
            .then(response => {
                commit("getCalls", response.data)
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    
    async getBalance({commit}) {
        return new Promise((resolve, reject) => {
            axios.get(serverUrl + "/users/1/balance/get", {headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")  
            }})
            .then(response => {
                commit("getBalance",  response.data)
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    async getUser({commit}, id) {
        axios.get(serverUrl + "/users/get/" + id, {headers: {
            "Authorization": "Bearer " + localStorage.getItem("token") 
        }})
        .then(response => {
            commit("getUser", response.data)
        })
        .catch(error => {
            console.error(error)
        })
    },
    async editUser({commit}, userData) {
        return new Promise((resolve, reject) => {
            axios.post(serverUrl + "/users/edit/1", {
                "surname": userData.surname,
                "name": userData.name,
                "patronym": userData.patronym,
                "phone": userData.phone 
            }, {
                headers: {
                "Authorization": "Bearer " + localStorage.getItem("token") 
            }})
            .then(response =>
                {
                    commit("editUser", response.data)
                    resolve(response)
                }
            )
            .catch(error => reject(error))
        })
        
    }

}

const mutations = {
    getConfirmToken(state) {
        state.confirmed = true
    },
    register(state) {
        state.registerSent = true
    },
    login(state, token) {
        state.token = token
    },
    logout(state) {
        state.token = null
        state.confirmed = false
    },
    getCalls(state, data) {
        state.calls = data.calls
        state.callsNumber = data.calls_number
    },
    getBalance(state, data) {
        state.balanceHistory = data.balance
        state.balance = data.balance[data.balance.length - 1].balance
    },
    getUser(state, data) {
        state.user = data.user
    },
    editUser(state, data) {
        state.user = data.user
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}