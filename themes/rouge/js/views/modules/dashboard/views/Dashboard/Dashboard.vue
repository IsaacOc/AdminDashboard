<template>
    <hero-bar>Dashboard</hero-bar>
    <main-section>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
            <card-widget
                trend="12%"
                trend-type="up"
                color="text-green-500"
                :icon="mdiAccountMultiple"
                :number="512"
                label="Customers"
            />
            <card-widget
                trend="12%"
                trend-type="down"
                color="text-blue-500"
                :icon="mdiCartOutline"
                :number="7770"
                prefix="$"
                label="Providers"
            />
            <card-widget
                trend="Overflow"
                trend-type="alert"
                color="text-red-500"
                :icon="mdiChartTimelineVariant"
                :number="256"
                suffix="%"
                label="Services"
            />
            <card-widget
                trend="50%"
                trend-type="up"
                color="text-green-500"
                :icon="mdiCreditCard"
                :number="2000"
                prefix="$"
                label="Wallet"
            />
        </div>

        <card-component
            title="Trending"
            :icon="mdiFinance"
            :header-icon="mdiReload"
            class="mb-6"
            @header-icon-click="fillChartData"
        >
            <div v-if="chartData">
                <line-chart :data="chartData" class="h-96" />
            </div>
        </card-component>

        <card-component title="Bookings" has-table>
            <clients-table />
        </card-component>
    </main-section>
</template>

<script>
// @ is an alias to /src
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import {
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartTimelineVariant,
    mdiFinance,
    mdiMonitorCellphone,
    mdiReload,
    mdiGithub,
    mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "./chart.config";
import LineChart from "./LineChart";
import MainSection from "./MainSection";
import TitleBar from "./TitleBar";
import HeroBar from "./HeroBar";
import CardWidget from "./CardWidget";
import CardComponent from "./CardComponent";
import ClientsTable from "./ClientsTable";
import Notification from "./Notification";
import JbButton from "./JbButton";
import CardTransactionBar from "./CardTransactionBar";
import CardClientBar from "./CardClientBar";

export default {
    name: "Home",
    components: {
        MainSection,
        ClientsTable,
        LineChart,
        CardComponent,
        CardWidget,
        HeroBar,
        TitleBar,
        Notification,
        JbButton,
        CardTransactionBar,
        CardClientBar,
    },
    setup() {
        const titleStack = ref(["Admin", "Dashboard"]);

        const chartData = ref(null);

        const fillChartData = () => {
            chartData.value = chartConfig.sampleChartData();
        };

        onMounted(() => {
            fillChartData();
        });

        const store = useStore();

        const clientBarItems = computed(() => store.state.clients.slice(0, 3));

        const transactionBarItems = computed(() =>
            store.state.history.slice(0, 3)
        );

        const darkMode = computed(() => store.state.darkMode);

        return {
            titleStack,
            chartData,
            fillChartData,
            clientBarItems,
            transactionBarItems,
            darkMode,
            mdiAccountMultiple,
            mdiCartOutline,
            mdiChartTimelineVariant,
            mdiFinance,
            mdiMonitorCellphone,
            mdiReload,
            mdiGithub,
            mdiChartPie,
        };
    },
};
</script>
