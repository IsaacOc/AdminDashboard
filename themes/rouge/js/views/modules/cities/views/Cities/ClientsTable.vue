<template>

    <div
        class="flex justify-end lg:justify-end mb-2 mt-2 bg-white dark:bg-gray-900 dark:border-gray-900"
      >
        <jb-buttons type="py-2">
          <jb-button
            to="/city/create"
            class="ml-auto mr-2 text-white bg-blue-500 hover:bg-blue-300 border border-blue-500"
            :icon="mdiPlus"
            color="primary"
            type="button"
            label="Add a City"
          />
        </jb-buttons>
      </div>

<div class="space-x-4 ...">
  <div class="inline-block ml-8 w-2/5">   <div>
      <span class="mx-8 my-8 font-sans bold text-4x1">country</span>
        <table>
            <tbody>
                <tr v-for="count in county" :key="count.id">
                    <td class="actions-cell">{{ count.name}}
                        <jb-buttons type="justify-start lg:justify-end" no-wrap>
                            <jb-button
                                class="mr-3"
                                color="success"
                                :icon="mdiEye"
                                small
                                @click="getStates(count.iso2)"
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
    </div></div>
  <div class="inline-block ml-8 w-2/5">   <div >
      <span class="mx-8 my-8 font-sans bold text-4x1">State/Districts</span>
        <table>
            <tbody>
                <tr v-for="state in stat" :key="state.id">
                    
                    <td class="actions-cell">
                        {{ state.name }}
                        <jb-buttons type="justify-start lg:justify-end" no-wrap>
                            <jb-button
                                class="mr-3"
                                color="success"
                                :icon="mdiEye"
                                small
                                @click="getCities(state.iso2)"
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
    </div></div>
  <div class="inline-block ml-8 w-2/5">   <div >
      <span class="mx-8 my-8 font-sans bold text-4x1">Cites/Towns</span>
        <table>            
            <tbody>
                <tr v-for="city in citie" :key="city.id">

                    <td class="actions-cell">
                        {{ city.name }}
                        <jb-buttons type="justify-start lg:justify-end" no-wrap>
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
    </div></div>
</div>
</template>

<script>
import { reactive, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { mdiEye, mdiTrashCan } from "@mdi/js";
import Level from "@/components/Level";
import JbButtons from "@/components/JbButtons";
import JbButton from "@/components/JbButton";
import UserAvatar from "@/components/UserAvatar";
import axios from 'axios'

export default {
    name: "ClientsTable",
    components: {
        Level,
        JbButtons,
        JbButton,
       // UserAvatar,
    },
    props: {
        checkable: Boolean,
                    
    },
    setup() {
        const store = useStore();

const form = reactive({
      countryCod: '',
      stateCode:''
    })
        onMounted(() => {
          store.dispatch('getCountry');
        });

        const getStates = (countryCode) => {
            console.log('states')
            form.countryCod = countryCode;
            
            store.dispatch('getState', countryCode);
        };

        const getCities = (stateCode) => {
            console.log(stateCode)
            form.stateCode = stateCode;
            store.dispatch('getTown', form );
        };


        const county = computed(() => store.getters.country);

        const stat = computed(() => store.getters.states);

        const citie = computed(() => store.getters.cities);

        const darkMode = computed(() => store.state.darkMode);


        
        return {
            darkMode,
            mdiEye,
            mdiTrashCan,
            county,
            stat,
            citie,
            getStates,
            getCities,
            //countryCod,
            //code,
        };
    },
};
</script>
