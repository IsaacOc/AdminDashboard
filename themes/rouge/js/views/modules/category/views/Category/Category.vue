<template>
  <hero-bar>CATEGORIES</hero-bar>

  <main-section>
    <card-component class="mb-6" title="Categories" :icon="mdiAccountMultiple" has-table>
      <div
        class="flex justify-end lg:justify-end mb-2 mt-2 bg-white dark:bg-gray-900 dark:border-gray-900"
      >
        <jb-buttons type="py-2">
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

      <div class="flex flex-row w-full mx-2 mr-4 mb-1">
        <div class="-my-2 overflow-x-auto sm:-mx-3 lg:-mx-4 w-4/5">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <input type="checkbox" class="rounded" />
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      NAME
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SERVICES
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      STATUS
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">ACTIONS</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    class="hover:bg-black"
                    v-for="category in categories"
                    :key="category.id"
                  >
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <input type="checkbox" class="rounded" />
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-0">
                          <div class="text-sm font-medium text-gray-900">
                            {{ category.category_name }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ category.description }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Active
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <jb-buttons type="py-2">
                        <jb-button
                          to="#"
                          class="mr-2 text-black bg-ehite hover:bg-blue-300 border-none"
                          :icon="mdiCogOutline"
                          type="button"
                        />
                        <jb-button
                          type="button"
                          :to="`/category/${category.id}`"
                          class="mr-3"
                          color="success"
                          :icon="mdiEye"
                          small
                        />
                        <jb-button
                          type="button"
                          :to="`/category/update/${category.id}`"
                          class="mr-3"
                          color="primary"
                          :icon="mdiPencil"
                          small
                        />
                        <jb-button
                          color="danger"
                          :icon="mdiTrashCan"
                          small
                          @click="deleteCategory"
                          type="button"
                        />
                      </jb-buttons>
                    </td>
                  </tr>

                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="py-1 inline-block mx-autosm:px-1 lg:px-4 w-1/5 rounded-lg mx-4 bg-gray-50"
        >
          <div class="flex flex-col pl-2" v-if="categories != null">
            <h3 class="text-md text-semibold text-gray-900">Total</h3>
            <p class="text-xs text-gray-800">Salons 50</p>
            <p class="text-xs text-gray-800">Cleaning 35</p>
          </div>
        </div>
      </div>
      <!-- <table>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Maximum Fee</th>
            <th>Category Banner</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id" class="hover:bg-black">
            <td>{{ category.category_name }}</td>
            <td>{{ category.description }}</td>
            <td>{{ category.maximum_fee }}</td>
            <td>
              <img
                :src="`/uploads/sub_category/banner_image/${category.banner_web}`"
                alt="image"
                style="height: 80px; width: 100px"
              />
            </td>
            <td>
              <jb-buttons type="justify-start lg:justify-end" no-wrap>
                <jb-button
                  type="button"
                  :to="`/category/${category.id}`"
                  class="mr-3"
                  color="success"
                  :icon="mdiEye"
                  small
                />
                <jb-button
                  type="button"
                  :to="`/category/update/${category.id}`"
                  class="mr-3"
                  color="primary"
                  :icon="mdiPencil"
                  small
                />
                <jb-button
                  color="danger"
                  :icon="mdiTrashCan"
                  small
                  @click="deleteCategory"
                  type="button"
                />
              </jb-buttons>
            </td>
          </tr>
        </tbody>
      </table> -->
    </card-component>
  </main-section>
</template>

<script>
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import MainSection from "./MainSection";
import HeroBar from "./HeroBar";
import CardComponent from "./CardComponent";
import {
  mdiAccountMultiple,
  mdiEye,
  mdiTrashCan,
  mdiPencil,
  mdiPlus,
  mdiCogOutline,
} from "@mdi/js";
import JbButtons from "@/components/JbButtons";
import JbButton from "@/components/JbButton";

export default {
  name: "Category",
  components: {
    MainSection,
    HeroBar,
    CardComponent,
    HeroBar,
    mdiAccountMultiple,
    mdiCogOutline,
    mdiEye,
    mdiPencil,
    mdiPlus,
    mdiTrashCan,
    JbButtons,
    JbButton,
  },
  setup() {
    const store = useStore();

    const router = useRouter();

    onMounted(() => {
      store.dispatch("fetchAllCategories");
    });

    const categories = computed(() => {
      return store.getters.categories;
    });

    const deleteCategory = (id) => {
      store.dispatch("deleteCategory", id);
    };
    return {
      categories,
      mdiEye,
      mdiTrashCan,
      mdiAccountMultiple,
      mdiCogOutline,
      mdiPencil,
      JbButtons,
      JbButton,
      deleteCategory,
      mdiPlus,
    };
  },
};
</script>
