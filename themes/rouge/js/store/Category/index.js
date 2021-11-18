import axios from 'axios'

export default {
   state: {
      categories: null,
      category: null,
   },

   getters: {
      categories: state => {
         return state.categories
      }, 
      category: state => {
         return state.category
      }
   },

   mutations: {
      CATEGORIES ( state, payload ) {
         return state.categories = payload
      },
      CATEGORY (state, payload) {
         return state.category = payload
      },
      DELETEDCATEGORY (state, payload) {
         return state.categories = state.categories.filter(c => c.id != payload)
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
         console.log(context.rootState.token)
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.token
         axios.get('/api/admin/user', {headers: { 'Authorization': 'Bearer ' + context.rootState.token}})
            .then(res => {
               console.log(res.data)
               context.commit('USER', res.data)
            })
            .catch(err => {
               console.log(err.message)
            })
      },
      fetchAllCategories(context) {
         console.log('categories')
         axios.get('/api/admin/category')
            .then(res => {
               console.log(res.data)
               context.commit('CATEGORIES', res.data)
            })
            .catch(err => {
               console.log(err.message)
            })
      },

      fetchACategory(context, {id}) {
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.token
         console.log('category', 'id', id)
         return new Promise((resolve, reject) => {
            axios.get('/api/admin/category/' + id)
               .then(res => {
                  console.log(res.data)
                  context.commit('CATEGORY', res.data)
                  resolve(res)
               })
               .catch(err => {
                  console.log(err.message)
                  reject(err)
               })
         })
      },
      deleteCategory(context, payload) {
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.token
         console.log('category Delete', 'id', payload)
         axios.delete('/api/admin/category/' + payload)
            .then(res => {
               console.log(res.data)
               context.commit('DELETEDCATEGORY', payload)
            })
            .catch(err => {
               console.log(err.message)
            })
      },
   }
}