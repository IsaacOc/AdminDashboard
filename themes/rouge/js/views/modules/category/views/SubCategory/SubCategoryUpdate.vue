<template>
  <div>
      <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2">
        {{error}}  
      </div>
      <div class="conatiner mx-auto">
      <form class="bg-white w-93 shadow-md rounded mt-3 px-8 pt-6 pb-8 mx-4 mb-3">
         <div class="flex w-full justify-center py-2">
            <h3 class="text-primary font-bold">Update A Sub Category</h3>
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="category-name">
            Parent Category Name
            </label>
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
               <option>Really long option that will likely overlap the chevron</option>
               <option>Category One</option>
               <option>Category Two</option>
            </select>
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="sub_category_name">
            Sub Category Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sub_category_name" type="text" placeholder="Sub Category Name">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="sub_category_description">
            Sub Category Description
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sub_category_description" type="text" placeholder="Sub Category Description">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
            Status
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" type="text" placeholder="status">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="banner_image">
            Banner Image
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="banner_image" type="file">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="selected_state_icon">
            Selected State Icon
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
  name: 'SubCategoryCreate',
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
