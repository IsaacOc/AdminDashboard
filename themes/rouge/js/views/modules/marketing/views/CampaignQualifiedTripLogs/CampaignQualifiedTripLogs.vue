<template>
    <hero-bar>Campaign Qualified Trip Logs</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Campaign Qualified Trip Logs"
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
    name: "CampaignQualifiedTripLogs",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        ClientsTable,
        HeroBar,
    },
};
</script>
