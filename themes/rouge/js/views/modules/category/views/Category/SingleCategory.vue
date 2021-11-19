<template>
  <hero-bar>Category</hero-bar>

  <main-section>
    <card-component class="mb-6 container mx-auto" title="Category" has-table>
      <div
        class="flex justify-right ml-auto mb-2 mt-2 p-3 bg-white dark:bg-gray-900 dark:border-gray-900"
      >
        <jb-buttons type="py-2 flex flex-row justify-between">
          <jb-button
            to="/category"
            class="ml-auto mr-2 text-white bg-green-500 hover:bg-green-300 border border-green-500"
            :icon="mdiArrowLeft"
            color="primary"
            type="button"
            label="Back to Categories"
          />
          <jb-button
            to="/category/create"
            class="ml-auto mr-2 text-white bg-blue-500 hover:bg-blue-300 border border-blue-500"
            :icon="mdiPlus"
            color="primary"
            type="button"
            label="Add a Category"
          />
        </jb-buttons>
      </div>

      <div class="bg-white m-4 p-2 w-full mx-auto" v-if="category != null">
        <div class="flex flex-row w-full mb-2">
          <div class="w-1/4 mr-4">
            <p class="block text-gray-600 text-center text-3xl">Name</p>
          </div>
          <div class="w-3/4">
            <p class="block text-gray-600 text-center text-3xl">
              {{ category.category_name }}
            </p>
          </div>
        </div>
        <div class="flex flex-row w-full mb-2">
          <div class="w-1/4 mr-4">
            <p class="block text-gray-600 text-center text-3xl">Description</p>
          </div>
          <div class="w-3/4">
            <p class="block text-gray-600 text-center text-3xl">
              {{ category.description }}
            </p>
          </div>
        </div>
        <div class="flex flex-row w-full mb-2">
          <div class="w-1/4 mr-4">
            <p class="block text-gray-600 text-center text-3xl">Location</p>
          </div>
          <div class="w-3/4">
            <p class="block text-gray-600 text-center text-3xl">
              {{ category.location }}
            </p>
          </div>
        </div>
        <div class="flex flex-row w-full mb-2">
          <div class="w-1/4 mr-4">
            <p class="block text-gray-600 text-center text-3xl">Image</p>
          </div>
          <div class="w-3/4">
            <img
              :src="`/uploads/category/banner_image/${category.banner_image}`"
              alt="image"
              style="height: 150px; width: 200px"
            />
          </div>
        </div>

        <div class="flex flex-row w-full mb-2">
          <div class="w-1/4 mr-4">
            <p class="block text-gray-600 text-center text-3xl">Image Text</p>
          </div>
          <div class="w-3/4">
            <p class="block text-gray-600 text-center text-3xl">
              {{ category.image_text }}
            </p>
          </div>
        </div>
        <div class="flex flex-row w-full mb-2">
          <div class="w-1/4 mr-4">
            <p class="block text-gray-600 text-center text-3xl">Position</p>
          </div>
          <div class="w-3/4">
            <p class="block text-gray-600 text-center text-3xl">
              {{ category.position }}
            </p>
          </div>
        </div>
        <div class="flex flex-row w-full mb-2">
          <div class="w-1/4 mr-4">
            <p class="block text-gray-600 text-center text-3xl">Creation Date</p>
          </div>
          <div class="w-3/4">
            <p class="block text-gray-600 text-center text-3xl">
              {{ category.creation_date }}
            </p>
          </div>
        </div>
      </div>
    </card-component>
  </main-section>
</template>

<script>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import { mdiPlus, mdiArrowLeft } from "@mdi/js";
import CardComponent from "./CardComponent";
import JbButtons from "@/components/JbButtons";
import JbButton from "@/components/JbButton";

export default {
  name: "SingleCategory",
  components: {
    MainSection,
    HeroBar,
    CardComponent,
    HeroBar,
    mdiPlus,
    mdiArrowLeft,
    JbButtons,
    JbButton,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    onMounted(() => {
      store.dispatch("fetchACategory", { id: route.params.id });
    });

    const category = computed(() => {
      return store.getters.category;
    });

    return {
      JbButtons,
      JbButton,
      category,
      mdiPlus,
      mdiArrowLeft,
    };
  },
};
</script>
