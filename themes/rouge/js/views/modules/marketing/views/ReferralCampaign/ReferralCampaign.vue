<template>
    <hero-bar>Referral Campaign</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Referral Campaign"
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
    name: "ReferralCampaign",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        ClientsTable,
        HeroBar,
    },
};
</script>
