<template>
    <hero-bar>StoreFront</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Cities"
            :icon="mdiAccountMultiple"
            has-table
        >
             <clients-storefront checkable /> 
        </card-component>
    </main-section>
</template>

<script>
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import CardComponent from "./CardComponent";
import ClientsStorefront from "./ClientsStorefront";

export default {
    name: "StoreFront",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        ClientsStorefront,
        HeroBar,
    },
};

    
</script>
