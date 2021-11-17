<template>
  <div>
      <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2">
        {{error}}  
      </div>
      <div class="conatiner mx-auto">
      <form class="bg-white w-93 shadow-md rounded mt-3 px-8 pt-6 pb-8 mx-4 mb-3">
         <div class="flex w-full justify-center py-2">
            <h3 class="text-primary font-bold">Update A Category</h3>
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="category_name">
            Category Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category_name" type="text" placeholder="Category Name">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
            Description
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Category Description">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="booking_type">
            Booking Type
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="booking_type" type="text" placeholder="booking-type">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="billing_strategy">
            Billing Strategy
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="billing_strategy" type="text" placeholder="Billing Strategy">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="job_type">
            Job Type
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="job_type" type="text" placeholder="Job Type">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="cancellation_fees">
            Cancellation Fees
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cancellation-fees" type="text" placeholder="Cancellation Fees">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="consultation_fees">
            Consultation Fees
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="consultation_fees" type="text" placeholder="Consultation Fees">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="visitation_fees">
            Visitation Fees
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="visitation_fees" type="text" placeholder="Visitation Fees">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="hourly_rate_fee">
            Hourly Rate Fee
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hourly_rate_fee" type="text" placeholder="Hourly Rate Fee">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="minimum_fee">
            Minimum Fee
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="minimum_fee" type="text" placeholder="Minimum Fee">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="maximum_fee">
            Maximum Fee
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maximum_fee" type="text" placeholder="Maximum Fee">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
            Status
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" type="text" placeholder="Status">
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
  name: 'CategoryUpdate',
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
      categoryName: '',
      location: '',
      status: ''
    })

    const error = ref('')

    const router = useRouter()

    const submit = () => {
      
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
