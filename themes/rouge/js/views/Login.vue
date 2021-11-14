<template>
  <full-screen-section bg="login" v-slot="{ cardClass, cardRounded }">
    <card-component v-if="error.length !== 0">
      <div class="alert alert-danger px-auto py-2">
        {{error}}  
      </div>
    </card-component>
    <card-component  v-else :class="cardClass" :rounded="cardRounded" @submit.prevent="submit" form>

      <field label="Login" help="Please enter your email">
        <control v-model="form.email" :icon="mdiAccount" name="email" autocomplete="off"/>
      </field>

      <field label="Password" help="Please enter your password">
        <control v-model="form.password" :icon="mdiAsterisk" type="password" name="password" autocomplete="off"/>
      </field>

      <check-radio-picker name="remember" v-model="form.remember" :options="{ remember: 'Remember' }" />

      <divider />

      <jb-buttons>
        <jb-button type="submit" color="info" label="Login" />
        <jb-button to="/" color="info" outline label="Back" />
        <jb-button to="/register" color="success" outline label="Register" />
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import FullScreenSection from '@/components/FullScreenSection'
import CardComponent from '@/components/CardComponent'
import CheckRadioPicker from '@/components/CheckRadioPicker'
import Field from '@/components/Field'
import Control from '@/components/Control'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton'
import JbButtons from '@/components/JbButtons'

export default {
  name: 'Login',
  components: {
    FullScreenSection,
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
      email: '',
      password: '',
      remember: ['remember']
    })

    const error = ref('')

    const router = useRouter()

    const submit = () => {
      store.dispatch('login', form)
        .then(res => {
          console.log('resolved')
          router.push('/')
        })
        .catch(err => {
          error = err.message
        })
    }

    return {
      form,
      submit,
      mdiAccount,
      mdiAsterisk,
      error
    }
  }
}
</script>
