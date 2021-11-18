import axios from 'axios'

export default {
   state: {
      // loggedIn: true ? localStorage.getItem('rouge_token') !== null || undefined : false,
      // token: localStorage.getItem('rouge_token') || null,
      auth_error: null,
      user: null,
   },

   getters: {
      user: state => {
         return state.user
      }
   },

   mutations: {
      // LOGGEDIN ( state, payload ) {
      //    return state.loggedIn = true
      // },

      USER ( state, payload) {
         return state.user = payload
      },

      // LOGGEDOUT( state ) {
      //    return state.loggedIn = false
      // },

      // REGISTERED( state, payload ) {
      //    return state.loggedIn = true
      // },

      AUTH_ERROR(state, payload) {
         return state.auth_error = payload
      }
   },

   actions: {
      login({commit}, {email, password}) {
         console.log(email, password)
         return new Promise((resolve, reject) => {
            axios.post('/api/admin/login', { email, password }, { headers: {'Content-type': 'application/json' } })
               .then(res => {
                  console.log(res.data)
                  const token = res.data.token
                  localStorage.setItem('rouge_token', token)
                  // commit('LOGGEDIN', token)
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
         return new Promise((resolve, reject) => {
            axios.post('/api/admin/register', { firstname, lastname, email, phone, password, isAdmin }, { headers: {'Content-type': 'application/json' } })
               .then(res => {
                  console.log(res.data)
                  // commit('REGISTERED', res.data.token)
                  resolve(res)
               })
               .catch(err => {
                  console.log(err.message)
                  reject(err)
               })
         })
      },

      fetchAuthenticatedUser(context) {
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.token
         axios.get('/api/admin/user')
            .then(res => {
               console.log(res.data)
               context.commit('USER', res.data)
            })
            .catch(err => {
               console.log(err.message)
            })
      },

      logout(context) {
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.token
            console.log('logout')
            return new Promise((resolve, reject) => {
               axios.post('/api/admin/logout')
                  .then(res => {
                     console.log(res.data)
                     localStorage.removeItem('rouge_token')
                     // context.commit('LOGGEDOUT')
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