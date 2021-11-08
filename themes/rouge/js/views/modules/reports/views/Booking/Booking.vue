<template>
    <hero-bar>Bookings Report</hero-bar>

    <main-section>
        <card-component
            title="Requests Generated"
            :icon="mdiFinance"
            :header-icon="mdiReload"
            class="mb-6"
            @header-icon-click="fillChartData"
        >
            <div v-if="chartData">
                <line-chart :data="chartData" class="h-96" />
            </div>
        </card-component>
    </main-section>
</template>

<script>
import { ref, onMounted } from "vue";
import * as chartConfig from "./chart.config";
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import LineChart from "./LineChart";
import CardComponent from "./CardComponent";

export default {
    name: "Booking",
    components: {
        MainSection,
        HeroBar,
        LineChart,
        CardComponent,
    },
    setup() {
        const chartData = ref(null);

        const fillChartData = () => {
            chartData.value = chartConfig.sampleChartData();
        };

        onMounted(() => {
            fillChartData();
        });

        return {
            chartData,
            fillChartData,
        };
    },
};
</script>
