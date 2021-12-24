<template>
    <hero-bar>Orders</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Order"
            :icon="mdiAccountMultiple"
            has-table
        >
             <clients-map  checkable />
        </card-component>
    </main-section>
</template>

<script>
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import CardComponent from "./CardComponent";
import ClientsMap from "./ClientsOrderMap";

export default {
    name: "Order",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        ClientsMap,
        HeroBar,
    },
};

</script>
