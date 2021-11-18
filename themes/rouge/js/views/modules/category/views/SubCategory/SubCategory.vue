<template>
    <hero-bar>Sub Categories</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Categories"
            has-table
        >
            <div class="flex justify-right ml-auto mb-2 mt-2 bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900">
                <jb-buttons type="justify-start lg:justify-end p-2">
                    <jb-button to="/sub-category/create" color="primary" type="button" outline label="+ Add a Sub Category" />
                </jb-buttons>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Description</th>
                        <th>Parent Category</th>
                        <th>Sub Category Banner</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subCategory in subCategories" :key="subCategory.id">
                        <td >{{ subCategory.sub_category_name }}</td>
                        <td >{{ subCategory.sub_category_description }}</td>
                        <td >{{ subCategory.category_id }}</td>
                        <td >
                            <img :src="`/uploads/sub_category/banner_image/${subCategory.banner_image}`" alt="image" style="height: 80px; width: 100px" />
                        </td>
                        <td>
                            <jb-buttons type="justify-start lg:justify-end" no-wrap>
                                <jb-button type="button" :to="`/sub-category/${subCategory.id}`" class="mr-3" color="success" :icon="mdiEye" small />
                                <jb-button color="danger" :icon="mdiPencil" small :to="`/sub-category/update/${subCategory.id}`" type="button"/>
                                <jb-button color="danger" 
                                :icon="mdiTrashCan" small  
                                @click="deleteSubCategory(subCategory.id)" 
                                type="button"/>
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
import { mdiEye, mdiTrashCan, mdiPencil } from '@mdi/js'
import JbButtons from '@/components/JbButtons'
import JbButton from '@/components/JbButton'

export default {
    name: "Category",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        HeroBar,
        mdiEye, 
        mdiTrashCan, 
        mdiPencil,
        JbButtons, 
        JbButton
    },
    setup () {
        const store = useStore()

        const router = useRouter()

        onMounted(() => {
            store.dispatch('fetchAllSubCategories')
        })

        const subCategories = computed(() => { return store.getters.subCategories})

        const deleteSubCategory = (id) => {
            store.dispatch('deleteSubCategory', id)
        }

        return {
            subCategories,
            deleteSubCategory,
            mdiPencil,
            mdiEye,
            mdiTrashCan,
            JbButtons, 
            JbButton,
        }
    }
};
</script>
