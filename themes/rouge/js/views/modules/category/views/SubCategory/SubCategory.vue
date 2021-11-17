<template>
    <hero-bar>Sub Categories</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Sub Categories"
            :icon="mdiAccountMultiple"
            has-table
        >
            <div class="dflex mb-2 mt-2 bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900">
                <router-link to="/sub-category/create" class="" type="button">Add A Sub Category</router-link>
                <jb-button to="/sub-category/create" color="primary" outline label="+ Add a Category" />
            </div>
            
            
            <clients-table checkable />
        </card-component>
    </main-section>
</template>

<script>
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import CardComponent from "./CardComponent";
import ClientsTable from "./ClientsTable";
import { mdiAccountMultiple } from '@mdi/js'

export default {
    name: "SubCategory",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        ClientsTable,
        HeroBar,
        mdiAccountMultiple
    },
};
</script>
