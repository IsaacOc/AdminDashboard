<template>
    <hero-bar>Categories</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Categories"
            :icon="mdiAccountMultiple"
            has-table
        >
            <div class="flex justify-right ml-auto mb-2 mt-2 bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900">
                <router-link to="/category/create" class="" type="button">Add A Category</router-link>
                <jb-buttons type="justify-start lg:justify-end" no-wrap>
                    <jb-button to="/category/create" color="primary" type="button" outline label="+ Add a Category" />
                </jb-buttons>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Category Banner</th>
                        <th>Category Name</th>
                        <th>Visitation Fees</th>
                        <th>Maximum Fee</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories" :key="category.id">
                        <td >
                            <img src="" alt="image" />
                        </td>
                        <td >{{ category.category_name }}</td>
                        <td >{{ category.visitation_fee }}</td>
                        <td >{{ category.maximum_fee }}</td>
                        <td>
                                <button class="" @click="deleteCategory(category.id)" type="button">Delete</button>
                            <jb-buttons type="justify-start lg:justify-end" no-wrap>
                                <jb-button type="button" :to="`/category/${category.id}`" class="mr-3" color="success" :icon="mdiEye" small />
                                <!-- <jb-button color="danger" :icon="mdiTrashCan" small  @click="deleteCategory" type="button"/> -->
                            </jb-buttons>
                        </td>
                    </tr>
                </tbody>
            </table>
        </card-component>
    </main-section>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import {useStore} from 'vuex'
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import CardComponent from "./CardComponent";
import { mdiAccountMultiple, mdiEye, mdiTrashCan } from '@mdi/js'
import JbButtons from '@/components/JbButtons'
import JbButton from '@/components/JbButton'

export default {
    name: "Category",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        HeroBar,
        mdiAccountMultiple,
        mdiEye, 
        mdiTrashCan, 
        JbButtons, 
        JbButton
    },
    setup () {
        const store = useStore()

        const router = useRouter()

        onMounted(() => {
            store.dispatch('fetchAllCategories')
        })

        const categories = computed(() => { return store.getters.categories})

        const deleteCategory = (id) => {
            console.log(id)
            store.dispatch('deleteCategory', {id: id})
        }
        return {
            categories,
            mdiEye,
            mdiTrashCan,
            mdiAccountMultiple,
            JbButtons, 
            JbButton,
        }
    }
};
</script>
