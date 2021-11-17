<template>
    <hero-bar>Category</hero-bar>

    <main-section>
        <card-component
            class="mb-6 w-full"
            title="Category"
            has-table
        >
            <div class="flex justify-right ml-auto mb-2 mt-2 p-3 bg-white dark:bg-gray-900 dark:border-gray-900">
                <router-link to="/category/create" class="" type="button">Add A Category</router-link>
                <jb-buttons type="justify-start lg:justify-end ml-auto" no-wrap>
                    <jb-button to="/category/create" color="primary" outline label="+ Add a Category" />
                </jb-buttons>
            </div>

            <div class="bg-white m-4 p-2 w-60 mx-auto" v-if="category != null">
               <h5 class="mb-4">Name: {{category.category_name}}</h5>
               <h5 class="mb-4">Description: {{category.description}}</h5>
               <h5 class="mb-4">Billing Strategy: {{category.billing_strategy}}</h5>
               <h5 class="mb-4">Job Type: {{category.job_type}}</h5>
               <h5 class="mb-4">Cancellation Fees: {{category.cancellation_fees}}</h5>
               <h5 class="mb-4">Visitation Fees: {{category.visitation_fees}}</h5>
               <h5 class="mb-4">Maximum Fee: {{category.maximum_fee}}</h5>
               <h5 class="mb-4">Minimum Fees: {{category.minimum_fee}}</h5>
               <h5 class="mb-4">Consulattion Fees: {{category.consulation_fees}}</h5>
            </div>

        </card-component>
    </main-section>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import {useStore} from 'vuex'
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import CardComponent from "./CardComponent";
import JbButtons from '@/components/JbButtons'
import JbButton from '@/components/JbButton'

export default {
    name: "SingleCategory",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        HeroBar, 
        JbButtons, 
        JbButton,
    },
    setup () {
        const store = useStore()
         const route = useRoute()

        onMounted(() => {
           console.log(route.params.id)
            store.dispatch('fetchACategory', {id: route.params.id})
        })

        const category = computed(() => { return store.getters.category})

        return {
            JbButtons, 
            JbButton,
            category
        }
    }
};
</script>
