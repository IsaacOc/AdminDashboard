import axios from 'axios'

export default {
   state: {
      country: [],
      states: [],
      cities: [],

   },

   getters: {
      country: state => {
         return state.country
      },

      states: state => {
         return state.states
      },

      cities: state => {
         return state.cities
      }
   },

   mutations: {
      COUNTRY ( state, payload ) {
         return state.country = payload
      },

      STATE ( state, payload ) {
        return state.states = payload
     },

     CITIES ( state, payload ) {
       return state.cities = payload
    }
   },

   actions: {
      getCountry(context) {
        console.log('country')
        return fetch('https://api.countrystatecity.in/v1/countries',{
                    method: 'get',
                    redirect: 'follow',
                    headers: {
                        'content-type':'application/json',
                        'X-CSCAPI-KEY': 'Y2RWTlNSaXc1bUtJZ0taQ2h4OVJPTG5BZVA1U3dlWkxXU282OE9WMQ==',
                        
                    }
            })
            .then(res => res.json()
            .then(data => ({
                 data: data
            })
        ).then(res => {

            context.commit('COUNTRY', res.data)
         
        }))
            .catch(err => {
                if(err.json){
                    return err.json.then(json => {
                        console.log(json.message)
                    });
                }
            })
      },


      getState(context, payload ) {
        console.log('states')
        const url = 'https://api.countrystatecity.in/v1/countries/' + payload + '/states'
        return fetch(url, {
                    method: 'get',
                    redirect: 'follow',
                    headers: {
                        'content-type':'application/json',
                        'X-CSCAPI-KEY': 'Y2RWTlNSaXc1bUtJZ0taQ2h4OVJPTG5BZVA1U3dlWkxXU282OE9WMQ==',
                        
                    }
            })
            .then(res => res.json()
            .then(data => ({
                 data: data
            })
        ).then(res => {

            context.commit('STATE', res.data)
        }))
            .catch(err => {
                if(err.json){
                    return err.json.then(json => {
                        console.log(json.message)
                    });
                }
            })
     },
     getTown(context, payload ) {
       console.log('cities')
       const url = 'https://api.countrystatecity.in/v1/countries/' + payload.countryCod + '/states/' + payload.stateCode + '/cities'
       console.log(url)
       return fetch(url, {
                   method: 'get',
                   redirect: 'follow',
                   headers: {
                       'content-type':'application/json',
                       'X-CSCAPI-KEY': 'Y2RWTlNSaXc1bUtJZ0taQ2h4OVJPTG5BZVA1U3dlWkxXU282OE9WMQ==',
                       
                   }
           })
           .then(res => res.json()
           .then(data => ({
                data: data
           })
       ).then(res => {

           context.commit('CITIES', res.data)
       }))
           .catch(err => {
               if(err.json){
                   return err.json.then(json => {
                       console.log(json.message)
                   });
               }
           })
    },

   }
}