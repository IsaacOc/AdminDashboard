<template>
  <div bg="login container">
     <div class="register w-48">
         <card-component v-if="error.length !== 0">
            <div class="alert alert-danger px-auto py-2">
            {{error}}  
            </div>
         </card-component>
         <card-component class="test register rounded border card"  v-else @submit.prevent="submit" form>
            <field label="First Name" help="Please enter your First Name">
            <control v-model="form.firstname" :icon="mdiAccountCircle" name="firstname" autocomplete="off"/>
            </field>
            <field label="Last Name" help="Please enter your Last Name">
            <control v-model="form.lastname" :icon="mdiAccount" name="lastname" autocomplete="off"/>
            </field>
            <field label="Email" help="Please enter your email">
            <control v-model="form.email" :icon="mdiAirplane" name="email" autocomplete="off"/>
            </field>
            <field label="Phone" help="Please enter your phone">
            <control v-model="form.phone" :icon="mdiCellphoneBasic" name="phone" autocomplete="off"/>
            </field>
            <field label="Password" help="Please enter your password">
            <control v-model="form.password" :icon="mdiAsterisk" type="password" name="password" autocomplete="off"/>
            </field>

            <check-radio-picker name="remember" v-model="form.remember" :options="{ remember: 'Remember' }" />

            <divider />
            <div class="d-flex px-auto">
               <jb-buttons>
                  <jb-button type="submit" color="info" label="Register" />
                  <jb-button to="/" color="info" outline label="Back" />
                  <jb-button to="/login" color="success" outline label="Login" />
               </jb-buttons>
            </div>
         </card-component>
      </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk, mdiAirplane, mdiAccountCircle, mdiCellphoneBasic } from '@mdi/js'
// import FullScreenSection from '@/components/FullScreenSection'
import CardComponent from '@/components/CardComponent'
import CheckRadioPicker from '@/components/CheckRadioPicker'
import Field from '@/components/Field'
import Control from '@/components/Control'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton'
import JbButtons from '@/components/JbButtons'

export default {
  name: 'Register',
  components: {
   //  FullScreenSection,
    CardComponent,
    CheckRadioPicker,
    Field,
    Control,
    Divider,
    JbButton,
    JbButtons
  },
  setup () {
    const store = useStore()

    const form = reactive({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      isAdmin: '1',
      remember: ['remember']
    })

    const error = ref('')

    const router = useRouter()

    const submit = () => {
      store.dispatch('register', form)
        .then(res => {
          console.log('resolved')
          router.push('/')
        })
        .catch(err => {
          error.value = err.message
        })
    }

    return {
      form,
      submit,
      mdiAccount,
      mdiAsterisk,
      mdiAirplane,
      mdiCellphoneBasic,
      mdiAccountCircle,
      error
    }
  }
}
</script>
<style>
.test {
   background: black !important;
}
</style>