import axios from 'axios'

export default {
   state: {
      customer: null,
      user: null,
   },

   getters: {
      customer: state => {
         return state.customer
      }, 
   },

   mutations: {
    CUSTOMERS ( state, payload ) {
         return state.customer = payload
      },
   },

   actions: {

      getActiveCustomers(context) {
         console.log('customer')
         axios.get('/api/admin/customer')
            .then(res => {
               console.log(res.data)
               context.commit('CUSTOMERS', res.data)
            })
            .catch(err => {
               console.log(err.message)
            })
      },
   }
}