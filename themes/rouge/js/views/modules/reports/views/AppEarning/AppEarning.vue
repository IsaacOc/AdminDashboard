<template>
    <hero-bar>App Earnings</hero-bar>

    <main-section>
        <card-component
            class="mb-6"
            title="App Earnings Report"
            :icon="mdiAccountMultiple"
            has-table
        >
            <clients-table checkable />
        </card-component>

        <card-component
            title="Total Amount Of App Earnings"
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
import ClientsTable from "./ClientsTable";
import HeroBar from "./HeroBar";
import LineChart from "./LineChart";
import CardComponent from "./CardComponent";

export default {
    name: "AppEarning",
    components: {
        MainSection,
        ClientsTable,
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
