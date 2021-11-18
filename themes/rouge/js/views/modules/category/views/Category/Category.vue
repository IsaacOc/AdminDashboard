<template>
    <hero-bar>Categories</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Categories"
            :icon="mdiAccountMultiple"
            has-table
        >
            <div class="flex justify-right ml-auto mb-2 mt-2 bg-white dark:bg-gray-900 dark:border-gray-900">
                <jb-buttons type="justify-end lg:justify-end">
                    <jb-button to="/category/create" color="primary" type="button" outline label="+ Add a Category" />
                </jb-buttons>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Description</th>
                        <th>Maximum Fee</th>
                        <th>Category Banner</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories" :key="category.id">
                        <td >{{ category.category_name }}</td>
                        <td >{{ category.description }}</td>
                        <td >{{ category.maximum_fee }}</td>
                        <td >
                            <img :src="`/uploads/sub_category/banner_image/${category.banner_web}`" alt="image" style="height: 80px; width: 100px" />
                        </td>
                        <td>
                            <jb-buttons type="justify-start lg:justify-end" no-wrap>
                                <jb-button type="button" :to="`/category/${category.id}`" class="mr-3" color="success" :icon="mdiEye" small />
                                <jb-button type="button" :to="`/category/update/${category.id}`" class="mr-3" color="primary" :icon="mdiPencil" small />
                                <jb-button color="danger" :icon="mdiTrashCan" small  @click="deleteCategory" type="button"/>
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
import { mdiAccountMultiple, mdiEye, mdiTrashCan, mdiPencil } from '@mdi/js'
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
        mdiPencil,
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
            store.dispatch('deleteCategory', id)
        }
        return {
            categories,
            mdiEye,
            mdiTrashCan,
            mdiAccountMultiple,
            mdiPencil,
            JbButtons, 
            JbButton,
            deleteCategory
        }
    }
};
</script>
