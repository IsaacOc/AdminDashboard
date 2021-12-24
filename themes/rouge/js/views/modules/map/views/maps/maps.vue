<template>
    <hero-bar>Maps</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="Map"
            :icon="mdiAccountMultiple"
            has-table
        >
             <clients-map ref="mapbox" checkable />
        </card-component>
    </main-section>
</template>

<script>
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import CardComponent from "./CardComponent";
import ClientsMap from "./ClientsMap";

export default {
    name: "Maps",
    components: {
        MainSection,
        HeroBar,
        CardComponent,
        ClientsMap,
        HeroBar,
    },
};

</script>
