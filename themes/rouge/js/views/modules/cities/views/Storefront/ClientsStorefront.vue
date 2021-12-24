<template>
  <div>
    <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2 center">
      {{ error }}
    </div>
    <div class="conatiner mx-auto">
      <div class="bg-white shadow-md rounded mt-1 px-8 pt-2 pb-2 mr-5 mx-4 mb-3">
        <div class="flex w-full justify-center py-2">
          <h3 class="text-blue-500 font-semibold">ADD A STOREFRONT</h3>
        </div>
        <div class="w-full mt-1 mb-3">
          <form ref="store" class="" @submit.prevent="submit">
            <div class="mr-2">
              <h5 class="text-bold text-black text-left font-semibold">INFORMATION</h5>
            </div>
            <div class="w-93 px-8 pt-2 pb-8 mr-5 mx-3">
              
              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="name"
                  >
                    Name
                  </label>
                </div>
                <div class="w-3/4">
                  <input
                    name="name"
                    v-model="form.name"
                    :class="inputElClass"
                    id="name"
                    type="text"
                    placeholder="StoreFront Name"
                  />
                </div>
              </div>

              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="location"
                  >
                    Country
                  </label>
                </div>
                <div class="w-3/4">
                  <select v-model="country" @change="onChange(country)" :class="inputElClass">
                    <option v-for="option in county" :value="{id: option.iso2, name: option.name }" v-bind:key="option.id">
                      {{ option.name }}
                    </option>
                  </select>
                </div>
              </div>              
               

              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="location"
                  >
                    State
                  </label>
                </div>
                <div class="w-3/4">
                  <select v-model="state" @change="handleChange(state)" :class="inputElClass">
                    <option v-for="option in stat" :value="{id: option.iso2, name: option.name}" v-bind:key="option.id">
                      {{ option.name }}
                    </option>
                  </select>
                </div>
              </div>              
              

              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="location"
                  >
                    City
                  </label>
                </div>
                <div class="w-3/4">
                  <select v-model="form.city" :class="inputElClass">
                    <option v-for="option in citie" :value="option.name" v-bind:key="option.id">
                      {{ option.name }}
                    </option>
                  </select>
                </div>
              </div>              
              

            </div>
            
            
            <div class="flex justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive,onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import FullScreenSection from "@/components/FullScreenSection";
import CardComponent from "@/components/CardComponent";
import CheckRadioPicker from "@/components/CheckRadioPicker";
import Field from "@/components/Field";
import Control from "@/components/Control";
import Divider from "@/components/Divider.vue";
import JbButton from "@/components/JbButton";
import JbButtons from "@/components/JbButtons";

export default {
  name: "StoreFornt",
  components: {
    FullScreenSection,
    CardComponent,
    CheckRadioPicker,
    Field,
    Control,
    Divider,
    JbButton,
    JbButtons,
  },
  setup() {
    const store = useStore();

    const form = reactive({
      name: "",
      country: "",
      stateCode: "",
      countryCod: "",
      state: "",
      city: "",
    });

    const error = ref("");

    const router = useRouter();

    
        onMounted(() => {
                store.dispatch("getCountry");

        });

        const onChange = (country) => {
             form.countryCod = country.id;
             form.country = country.name;
             store.dispatch('getState', form.countryCod );
             event.stopPropagation()
        };


        const handleChange = (state) => {
            form.stateCode = state.id;
            form.state = state.name;
            store.dispatch('getTown', form );
        };

        const county = computed(() => store.getters.country);

        const stat = computed(() => store.getters.states);

        const citie = computed(() => store.getters.cities);

        const darkMode = computed(() => store.state.darkMode);

    const submit = () => {
      console.log(form);

      const data = new FormData();
        data.append("name", form.name),
        data.append("country", form.country),
        data.append("state", form.state),
        data.append("city", form.city);
      axios
        .post("/api/admin/storefront", data)
        .then((res) => {
          this.$ref.store.clear();
          router.push("/storeFront");
        })
        .catch((err) => {
          error.value = err.message;
          console.log(err);
        });
      // console.log(form)
    };

    const inputElClass = computed(() => {
      const base = [
        "bg-white-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500",
      ];

      return base;
    });

    return {
      inputElClass,
      form,
      submit,
      mdiAccount,
      mdiAsterisk,
      error,
      county,
      handleChange,
      onChange,
      darkMode,
      stat,
      citie,
    };
  },
};
</script>
<style>
.test {
  background: black !important;
}
</style>
