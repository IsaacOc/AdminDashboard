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
                <jb-button to="/category/create" color="primary" outline label="+ Add a Category" />
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
import JbButton from '@/components/JbButton'

export default {
    name: "Category",
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
