<template>
    <modal-box v-model="isModalActive" title="Sample modal">
        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
        <p>This is sample modal</p>
    </modal-box>

    <modal-box
        v-model="isModalDangerActive"
        large-title="Please confirm"
        button="danger"
        has-cancel
    >
        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
        <p>This is sample modal</p>
    </modal-box>

    <div v-if="checkedRows.length" class="bg-gray-50 p-3 dark:bg-gray-800">
        <span
            v-for="checkedRow in checkedRows"
            :key="checkedRow.id"
            class="
                inline-block
                bg-gray-100
                px-2
                py-1
                rounded-sm
                mr-2
                text-sm
                dark:bg-gray-700
            "
        >
            {{ checkedRow.name }}
        </span>
    </div>
    <div style="overflow-x: scroll">
        <table>
            <thead>
                <tr>
                    <th v-if="checkable"></th>
                    <th></th>
                    <th>Booking ID</th>
                    <th>Call Type</th>
                    <th>City</th>
                    <th>Customer</th>
                    <th>Booking Date</th>
                    <th>Category</th>
                    <th>Address</th>
                    <th>Total Billing</th>
                    <th>Booking Type</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in itemsPaginated" :key="client.id">
                    <checkbox-cell
                        v-if="checkable"
                        @checked="checked($event, client)"
                    />
                    <td class="image-cell">
                        <user-avatar :username="client.name" class="image" />
                    </td>
                    <td data-label="Booking ID">{{ client.name }}</td>
                    <td data-label="Call Type">{{ client.company }}</td>
                    <td data-label="City">{{ client.city }}</td>
                    <td data-label="Customer" class="progress-cell">
                        <progress max="100" :value="client.progress">
                            {{ client.progress }}
                        </progress>
                    </td>
                    <td data-label="Booking Date">
                        <small
                            class="text-gray-500 dark:text-gray-400"
                            :title="client.created"
                            >{{ client.created }}</small
                        >
                    </td>
                    <td data-label="Category">{{ client.city }}</td>
                    <td data-label="Address">{{ client.city }}</td>
                    <td data-label="Total Billing">{{ client.city }}</td>
                    <td data-label="Booking Type">{{ client.city }}</td>
                    <td data-label="Payment Method">{{ client.city }}</td>
                    <td data-label="Status">{{ client.city }}</td>
                    <td class="actions-cell">
                        <jb-buttons type="justify-start lg:justify-end" no-wrap>
                            <jb-button
                                class="mr-3"
                                color="success"
                                :icon="mdiEye"
                                small
                                @click="isModalActive = true"
                            />
                            <jb-button
                                color="danger"
                                :icon="mdiTrashCan"
                                small
                                @click="isModalDangerActive = true"
                            />
                        </jb-buttons>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="table-pagination">
        <level>
            <jb-buttons>
                <jb-button
                    v-for="page in pagesList"
                    @click="currentPage = page"
                    :active="page === currentPage"
                    :label="page + 1"
                    :key="page"
                    :outline="darkMode"
                    small
                />
            </jb-buttons>
            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
        </level>
    </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { mdiEye, mdiTrashCan } from "@mdi/js";
import ModalBox from "@/components/ModalBox";
import CheckboxCell from "@/components/CheckboxCell";
import Level from "@/components/Level";
import JbButtons from "@/components/JbButtons";
import JbButton from "@/components/JbButton";
import UserAvatar from "@/components/UserAvatar";

export default {
    name: "ClientsTable",
    components: {
        ModalBox,
        CheckboxCell,
        Level,
        JbButtons,
        JbButton,
        UserAvatar,
    },
    props: {
        checkable: Boolean,
    },
    setup() {
        const store = useStore();

        const darkMode = computed(() => store.state.darkMode);

        const items = computed(() => store.state.clients);

        const isModalActive = ref(false);

        const isModalDangerActive = ref(false);

        const perPage = ref(10);

        const currentPage = ref(0);

        const checkedRows = ref([]);

        const itemsPaginated = computed(() =>
            items.value.slice(
                perPage.value * currentPage.value,
                perPage.value * (currentPage.value + 1)
            )
        );

        const numPages = computed(() =>
            Math.ceil(items.value.length / perPage.value)
        );

        const currentPageHuman = computed(() => currentPage.value + 1);

        const pagesList = computed(() => {
            const pagesList = [];

            for (let i = 0; i < numPages.value; i++) {
                pagesList.push(i);
            }

            return pagesList;
        });

        const remove = (arr, cb) => {
            const newArr = [];

            arr.forEach((item) => {
                if (!cb(item)) {
                    newArr.push(item);
                }
            });

            return newArr;
        };

        const checked = (isChecked, client) => {
            if (isChecked) {
                checkedRows.value.push(client);
            } else {
                checkedRows.value = remove(
                    checkedRows.value,
                    (row) => row.id === client.id
                );
            }
        };

        return {
            darkMode,
            isModalActive,
            isModalDangerActive,
            currentPage,
            currentPageHuman,
            numPages,
            checkedRows,
            itemsPaginated,
            pagesList,
            checked,
            mdiEye,
            mdiTrashCan,
        };
    },
};
</script>
