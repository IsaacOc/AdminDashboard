import axios from 'axios'

export default {
   state: {
      subCategories: null,
      subCategory: null,
   },

   getters: {
      subCategories: state => {
         return state.subCategories
      }, 
      subCategory: state => {
         return state.subCategory
      }
   },

   mutations: {
      SUBCATEGORIES ( state, payload ) {
         return state.subCategories = payload
      },
      SUBCATEGORY (state, payload) {
         return state.subCategory = payload
      },
      DELETEDSUBCATEGORY (state, payload) {
         return state.subCategories = state.subCategories.filter(c => c.id != payload)
      }
   },

   actions: {
      fetchAllSubCategories(context) {
         console.log('sub categories', context.rootState.token)
         axios.get('/api/admin/sub-category')
            .then(res => {
               console.log(res.data)
               context.commit('SUBCATEGORIES', res.data)
            })
            .catch(err => {
               console.log(err.message)
            })
      },

      fetchASubCategory(context, {id}) {
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.token
         console.log('category', 'id', id)
         return new Promise((resolve, reject) => {
         axios.get('/api/admin/sub-category/' + id)
            .then(res => {
               console.log(res.data)
               context.commit('SUBCATEGORY', res.data)
               resolve(res)
            })
            .catch(err => {
               console.log(err.message)
               reject(err)
            })
         })
      },
      deleteSubCategory(context, payload) {
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.token
         console.log('SUB category Delete', payload)
         axios.delete('/api/admin/sub-category/' + payload)
            .then(res => {
               console.log(res.data)
               context.commit('DELETEDSUBCATEGORY', payload)
            })
            .catch(err => {
               console.log(err.message)
            })
      },
   }
}