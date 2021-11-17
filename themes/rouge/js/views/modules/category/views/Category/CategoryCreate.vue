<template>
  <div>
      <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2">
        {{error}}  
      </div>
      <div class="conatiner mx-auto">
      <form class="bg-white w-93 shadow-md rounded mt-3 px-8 pt-6 pb-8 mx-4 mb-3" @submit.prevent="submit">
         <div class="flex w-full justify-center py-2">
            <h3 class="text-primary font-bold">Create A Category</h3>
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="category_name">
            Category Name
            </label>
            <input v-model="form.category_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category_name" type="text" placeholder="Category Name">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
            Description
            </label>
            <input v-model="form.description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Category Description">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="booking_type">
            Booking Type
            </label>
            <input v-model="form.booking_type" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="booking_type" type="text" placeholder="booking-type">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="billing_strategy">
            Billing Strategy
            </label>
            <input v-model="form.billing_strategy" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="billing_strategy" type="text" placeholder="Billing Strategy">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="job_type">
            Job Type
            </label>
            <input v-model="form.job_type" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="job_type" type="text" placeholder="Job Type">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="cancellation_fees">
            Cancellation Fees
            </label>
            <input v-model="form.cancellation_fees" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cancellation-fees" type="text" placeholder="Cancellation Fees">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="consultation_fees">
            Consultation Fees
            </label>
            <input v-model="form.consultation_fees" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="consultation_fees" type="text" placeholder="Consultation Fees">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="visitation_fees">
            Visitation Fees
            </label>
            <input v-model="form.visitation_fee" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="visitation_fee" type="text" placeholder="Visitation Fees">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="hourly_rate_fee">
            Hourly Rate Fee
            </label>
            <input v-model="form.hourly_rate_fee" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hourly_rate_fee" type="text" placeholder="Hourly Rate Fee">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="minimum_fee">
            Minimum Fee
            </label>
            <input v-model="form.minimum_fee" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="minimum_fee" type="text" placeholder="Minimum Fee">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="maximum_fee">
            Maximum Fee
            </label>
            <input v-model="form.maximum_fee" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maximum_fee" type="text" placeholder="Maximum Fee">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
            Status
            </label>
            <input v-model="form.status" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" type="text" placeholder="Status">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="banner_web">
            Banner Web
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="banner_web" type="file">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="banner_mobile">
            Banner Mobile
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="banner_mobile" type="file">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="selected_state_icon">
            Seleceted State Icon
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="selected_state_icon" type="file">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="un_selected_state_icon">
            Un Selected State Icon
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="un_selected_state_icon" type="file">
         </div>
         <div class="flex justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Save
            </button>
         </div>
      </form>
      </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import axios from 'axios'
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
  name: 'CategoryCreate',
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
      category_name: '',
      description: '',
      booking_type: '',
      billing_strategy: '',
      job_type: '',
      cancellation_fees: '',
      consultation_fees: '',
      minimum_fee: '',
      maximum_fee: '',
      visitation_fee: '',
      hourly_rate_fee: '',
      consulation: '',
      status: '',
      banner_web: '',
      banner_mobile: '',
      selected_state_icon: '',
      un_selected_state_icon: '',
    })

    const error = ref('')

    const router = useRouter()

    const submit = () => {
      const data = new FormData;
      data.append('category_name', form.category_name),
      data.append('description', form.description),
      data.append('booking_type', form.booking_type),
      data.append('job_type', form.job_type),
      data.append('consultation_fee', form.consultation_fees),
      data.append('minimum_fee', form.minimum_fee),
      data.append('maximum_fee', form.maximum_fee),
      data.append('billing_strategy', form.billing_strategy),
      data.append('visitation_fees', form.visitation_fees),
      data.append('hourly_rate_fee', form.hourly_rate_fee),
      data.append('status', form.status),
      data.append('banner_web', form.banner_web),
      data.append('banner_mobile', form.banner_mobile),
      data.append('selected_state_icon', form.selected_state_icon),
      data.append('un_selected_state_icon', form.un_selected_state_icon)
      axios.post('/api/admin/category', form)
         .then(res => {
            console.log(res)
            route.push('/category')
         })
         .catch(err => {
            error.value = err.message
            console.log(err)
         })
      // console.log(form)
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
<style>
   .test {
      background: black !important;
   }
</style>
