<template>
    <hero-bar>Notifications</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Notifications"
            :icon="mdiAccountMultiple"
            has-table
        >
            <clients-table checkable />
        </card-component>
    </main-section>
</template>

<script>
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import CardComponent from "./CardComponent";
import ClientsTable from "./ClientsTable";

export default {
    name: "Notifications",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        ClientsTable,
        HeroBar,
    },
};
</script>
