<template>
  <div>
      <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2">
        {{error}}  
      </div>
      <div class="conatiner mx-auto">
      <form class="bg-white w-93 shadow-md rounded mt-3 px-8 pt-6 pb-8 mx-4 mb-3" @submit.prevent="submit">
         <div class="flex w-full justify-center py-2">
            <h3 class="text-primary font-bold">Create A Sub Category</h3>
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="category-name">
            Parent Category Name
            </label>
            <select v-model="form.category_id" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
               <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.category_name }}</option>
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
import { reactive, ref, onMounted, computed } from 'vue'
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
      category_id: 'Choose the Parent Category',
      sub_category_name: '',
      sub_category_description: '',
      status: '',
      banner_image: '',
      selected_state_icon: '',
      un_selected_state_icon: ''
    })

   const error = ref('')

   const router = useRouter()

   onMounted(() => {
      console.log('mounted')
      store.dispatch('fetchAllCategories')
   })
   const categories = computed(() => { return store.getters.categories})

   const submit = () => {
      const data = new FormData
      data.append('category_id', form.category_id),
      data.append('sub_category_name', form.sub_category_name),
      data.append('sub_category_description', form.sub_category_description),
      data.append('status', form.status),
      data.append('banner_image', form.banner_image),
      data.append('selected_state_icon', form.selected_state_icon),
      data.append('un_selected_state_icon', form.un_selected_state_icon)
      axios.post('/api/admin/sub-category', data)
         .then(res => {
            console.log(res.data)
         })
         .catch(err => {
            console.log(err)
         })
      // console.log(form)
   }

    return {
      form,
      submit,
      mdiAccount,
      mdiAsterisk,
      error,
      categories,
    }
  }
}
</script>
<style>
   .test {
      font-weight: normal;
   }
</style>
