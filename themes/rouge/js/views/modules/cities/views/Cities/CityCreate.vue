<template>
  <div>
    <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2">
      {{ error }}
    </div>
    <div class="conatiner mx-auto">
      <div class="bg-white shadow-md rounded mt-1 px-8 pt-2 pb-2 mr-5 mx-4 mb-3">
        <div class="flex w-full justify-center py-2">
          <h3 class="text-blue-500 font-semibold">ADD A CITY</h3>
        </div>
        <div class="w-full mt-1 mb-3">
          <form class="" @submit.prevent="submit">
            <div class="mr-2">
              <h5 class="text-bold text-black text-left font-semibold">INFORMATION</h5>
            </div>
            <div class="w-93 px-8 pt-2 pb-8 mr-5 mx-3">
              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="category_name"
                  >
                    City Name
                  </label>
                </div>
                <div class="w-3/4">
                  <input
                    name="city_name"
                    v-model="form.category_name"
                    :class="inputElClass"
                    id="city_name"
                    type="text"
                    placeholder="City Name"
                  />
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
import { reactive, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import FullScreenSection from "@/components/FullScreenSection";
import CardComponent from "@/components/CardComponent";
import Field from "@/components/Field";
import Control from "@/components/Control";
import Divider from "@/components/Divider.vue";
import JbButton from "@/components/JbButton";
import JbButtons from "@/components/JbButtons";

export default {
  name: "CityCreate",
  components: {
    FullScreenSection,
    CardComponent,
    Field,
    Control,
    Divider,
    JbButton,
    JbButtons,
  },
  setup() {
    const store = useStore();

    const form = reactive({
      city_name: "",
      
    });

    const error = ref("");

    const router = useRouter();


    const submit = () => {
      console.log(form);
      const data = new FormData();
      data.append("city_name", form.city_name),
      axios
        .post("/api/admin/city", data)
        .then((res) => {
          console.log(res);
          router.push("/city");
        })
        .catch((err) => {
          error.value = err.message;
          console.log(err);
        });
      // console.log(form)
    };


    return {
      form,
      submit,
      mdiAccount,
      mdiAsterisk,
      error,
    };
  },
};
</script>
<style>
.test {
  background: black !important;
}
</style>
