import axios from 'axios'

export default {
   state: {
      categories: null,
   },

   getters: {
      categories: state => {
         return state.categories
      }
   },

   mutations: {
      CATEGORIES ( state, payload ) {
         return state.categories = payload
      },
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
                  commit('LOGGEDIN', token)
                  resolve(res)
               })
               .catch(err => {
                  console.log(err.message)
                  reject(err)
               })
         })
      },

      fetchAuthenticatedUser(context) {
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
         axios.get('/api/admin/user')
            .then(res => {
               console.log(res.data)
               context.commit('USER', res.data)
            })
            .catch(err => {
               console.log(err.message)
            })
      },
      fetchAllCategories() {
         console.log('categories')
      }
   }
}