<template>
  <div>
      <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2">
        {{error}}  
      </div>
      <div class="conatiner mx-auto">
      <form v-if="thereIsData" class="bg-white w-93 shadow-md rounded mt-3 px-8 pt-6 pb-8 mx-4 mb-3" @submit.prevent="submit">
         <div class="flex w-full justify-center py-2">
            <h3 class="text-primary font-bold">UPDATE A CATEGORY</h3>
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="category_name">
            Category Name
            </label>
            <input v-model="form.category_name" :class="inputElClass" id="category_name" type="text" placeholder="Category Name">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
            Description
            </label>
            <input v-model="form.description" :class="inputElClass" id="description" type="text" placeholder="Category Description">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="job_type">
            Job Type
            </label>
            <input v-model="form.job_type" :class="inputElClass" id="job_type" type="text" placeholder="Job Type">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="hourly_rate_fee">
            Hourly Rate Fee
            </label>
            <input v-model="form.hourly_rate_fee" :class="inputElClass" id="hourly_rate_fee" type="text" placeholder="Hourly Rate Fee">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="minimum_fee">
            Minimum Fee
            </label>
            <input v-model="form.minimum_fee" :class="inputElClass" id="minimum_fee" type="text" placeholder="Minimum Fee">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="maximum_fee">
            Maximum Fee
            </label>
            <input v-model="form.maximum_fee" :class="inputElClass" id="maximum_fee" type="text" placeholder="Maximum Fee">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
            Status
            </label>
            <input v-model="form.status" :class="inputElClass" id="status" type="text" placeholder="Status">
         </div>
         <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="banner_image">
               Banner Image
            </label>
            <input type="file" name="banner_image" ref="banner_image" hidden @change="handleBannerImageChange" />
            <div class="photoPreview bg-light m-1" @click="$refs.banner_image.click()">
                <div v-if="form.banner_image">
                  <img
                    :src="`/uploads/sub_category/banner_image/${form.banner_image}`"
                    alt="Banner Image"
                    style="height: 100px; width: 150px"
                  />
                </div>
                <div class="flex flex-col justify center shadow appearance-none border rounded w-50 text-gray-700 leading-tight" style="height: 100px; width: 150px" v-else>
                  <p>Add Banner Image</p>
                  <p class="font-xl font-bold">+</p>
                </div>
              </div>
         </div>
         <div class="flex justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Update
            </button>
         </div>
      </form>
      <div class="w-full m-5 border border-dark-800 p-6" v-else>
         <h4 class="mx-auto">Loading ...</h4>
      </div>
      </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
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
      job_type: '',
      minimum_fee: '',
      maximum_fee: '',
      hourly_rate_fee: '',
      status: '',
      banner_image: '',
      bannerImage: '',
    })

    const thereIsData = ref(false)
   const error = ref('')

   const router = useRouter()
   const route = useRoute()

   onMounted(() => {
      console.log('mounted', route.params.id)
      store.dispatch('fetchACategory', {id: route.params.id})
         .then(({data}) => {
            form.category_name = data.category_name
            form.job_type = data.job_type
            form.minimum_fee = data.minimum_fee
            form.maximum_fee = data.maximum_fee
            form.hourly_rate_fee = data.hourly_rate_fee
            form.description = data.description
            form.status = data.status
            form.banner_image = data.banner_image
            thereIsData.value = true
         })
         .catch(err => {
            console.log(err.message)
            error.value = err.message
         })
   })

   const handleBannerImageChange = (e) => {
      console.log(form)
      form.banner_image = e.target.files[0];
      let bannerImageReader = new FileReader();
      bannerImageReader.readAsDataURL(form.banner_image);
      bannerImageReader.onload = (e) => {
         form.bannerImage = e.target.result;
      };
   }

   // Get category to be updated
   // const fetchedSubCategory = computed(() => { return store.getters.subCategory})
   const categories = computed(() => { return store.getters.categories})

   const submit = () => {
      console.log(form)
      const data = new FormData;
      // data.append('category_id', parseInt(form.category_id)),
      // data.append('sub_category_name', form.sub_category_name),
      // data.append('sub_category_description', form.sub_category_description),
      // data.append('status', form.status),
      // data.append('banner_image', form.banner_image),
      axios.put('/api/admin/category/' + route.params.id, form)
         .then(res => {
            console.log(res)
            router.push('/category')
         })
         .catch(err => {
            error.value = err.message
            console.log(err)
         })
      // console.log(form)
    }

   const inputElClass = computed(() => {
      const base = [
         'px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full',
         'dark:placeholder-gray-400', 'bg-white dark:bg-gray-800',
      ]

      return base
   })

    return {
      inputElClass,
      handleBannerImageChange,
      form,
      submit,
      mdiAccount,
      mdiAsterisk,
      error,
      thereIsData
    }
  }
}
</script>
<style>
   .test {
      background: black !important;
   }
</style>
