import axios from 'axios'

export default {
   state: {
      loggedIn: false,
   },

   getters: {
      loggedIn: state => {
         return state.loggedIn
      }
   },

   mutations: {
      LOGGEDIN ( state, payload ) {
         return state.loggedIn = true
      },

      LOGGEDOUT( state ) {
         return state.loggedIn = false
      },

      REGISTERED( state, payload ) {
         return state.loggedIn = true
      }
   },

   actions: {
      login({commit}, {email, password}) {
         console.log(email, password, 'env', process.env.BASEURL)
         return new Promise((resolve, reject) => {
            axios.post('/api/admin/login', { email, password }, { headers: {'Content-type': 'application/json' } })
               .then(res => {
                  console.log(res.data)
                  commit('LOGGEDIN', res.data.token)
                  resolve(res)
               })
               .catch(err => {
                  console.log(err.message)
                  reject(err)
               })
         })
      },

      register({commit}, {firstname, lastname, email, phone, password, isAdmin }) {
         console.log(firstname, lastname, email, password, isAdmin, phone,)
         // return new Promise((resolve, reject) => {
            axios.post('/api/admin/register', { firstname, lastname, email, phone, password, isAdmin }, { headers: {'Content-type': 'application/json' } })
               .then(res => {
                  console.log(res.data)
                  commit('REGISTERED', res.data.token)
                  // resolve(res)
               })
               .catch(err => {
                  console.log(err.message)
                  // reject(err)
               })
         // })
      },

      logout({commit}) {
         console.log('logout')
         return new Promise((resolve, reject) => {
            axios.post('/api/admin/logout')
               .then(res => {
                  console.log(res.data)
                  commit('LOGGEDOUT')
                  resolve(res)
               })
               .catch(err => {
                  console.log(err.message)
                  reject(err)
               })
         })
      },
   }
}