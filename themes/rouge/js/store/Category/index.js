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
         return state.categories.filter(c => c.id != payload)
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
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
         console.log('category', 'id', id)
         axios.get('/api/admin/category/' + id)
            .then(res => {
               console.log(res.data)
               context.commit('CATEGORY', res.data)
            })
            .catch(err => {
               console.log(err.message)
            })
      },
      deleteCategory(context, {id}) {
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
         console.log('category Delete', 'id', id)
         axios.delete('/api/admin/category/' + id)
            .then(res => {
               console.log(res.data)
               context.commit('DELETEDCATEGORY', id)
            })
            .catch(err => {
               console.log(err.message)
            })
      },
   }
}