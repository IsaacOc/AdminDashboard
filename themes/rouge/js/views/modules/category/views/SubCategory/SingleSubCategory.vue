<template>
  <hero-bar>Sub Category</hero-bar>

  <main-section>
    <card-component class="mb-6 w-full conrainer mx-auto" title="subCategory">
      <div
        class="flex justify-right ml-auto mb-2 mt-2 p-3 bg-white dark:bg-gray-900 dark:border-gray-900"
      >
        <jb-buttons type="justify-start lg:justify-end ml-auto" no-wrap>
          <jb-button
            to="/sub-category/create"
            color="primary"
            outline
            label="+ Add a subCategory"
          />
        </jb-buttons>
      </div>

      <div class="bg-white m-4 p-2 w-80 mx-auto" v-if="subCategory != null">
        <h5 class="mb-4">Name: {{ subCategory.sub_category_name }}</h5>
        <h5 class="mb-4">Description: {{ subCategory.sub_category_description }}</h5>
        <h5 class="mb-4">Parent Category Id: {{ subCategory.category_id }}</h5>
        <img
          :src="`/uploads/sub_category/banner_image/${subCategory.banner_image}`"
          alt="image"
          style="height: 80px; width: 100px"
        />
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
import CardComponent from "./CardComponent";
import JbButtons from "@/components/JbButtons";
import JbButton from "@/components/JbButton";

export default {
  name: "SingleSubCategory",
  components: {
    MainSection,
    HeroBar,
    CardComponent,
    HeroBar,
    JbButtons,
    JbButton,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    onMounted(() => {
      console.log(route.params.id);
      store.dispatch("fetchASubCategory", { id: route.params.id });
    });

    const subCategory = computed(() => {
      return store.getters.subCategory;
    });

    return {
      JbButtons,
      JbButton,
      subCategory,
    };
  },
};
</script>
