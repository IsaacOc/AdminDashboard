<template>
  <div>
    <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2">
      {{ error }}
    </div>
    <div class="conatiner mx-auto">
      <div class="bg-white shadow-md rounded mt-1 px-8 pt-2 pb-2 mr-5 mx-4 mb-3">
        <div class="flex w-full justify-center py-2">
          <h3 class="text-blue-500 font-semibold">CREATE A CATEGORY</h3>
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
                    Name
                  </label>
                </div>
                <div class="w-3/4">
                  <input
                    name="category_name"
                    v-model="form.category_name"
                    :class="inputElClass"
                    id="category_name"
                    type="text"
                    placeholder="Category Name"
                  />
                </div>
              </div>

              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="location"
                  >
                    Location
                  </label>
                </div>
                <div class="w-3/4">
                  <select v-model="form.location" :class="inputElClass" id="location">
                    <option value="" disabled>Choose A service</option>
                    <option value="1">Salon</option>
                    <option value="2">Cleaning</option>
                  </select>
                </div>
              </div>
              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="decription"
                  >
                    Description
                  </label>
                </div>
                <div class="w-3/4">
                  <textarea
                    name="description"
                    v-model="form.description"
                    :class="inputElClass"
                    id="description"
                    placeholder="Category Description"
                    rows="8"
                    cols=""
                  ></textarea>
                </div>
              </div>
              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="status"
                  >
                    Status
                  </label>
                </div>
                <div class="w-3/4">
                  <div class="mt-2 flex flex-row mb-2">
                    <div class="mr-3">
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio"
                          name="radio"
                          value="1"
                          v-model="form.status"
                          checked
                        />
                        <span class="ml-2">Active</span>
                      </label>
                    </div>
                    <div class="mr-3">
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio"
                          v-model="form.status"
                          name="status"
                          value="2"
                        />
                        <span class="ml-2">Disabled</span>
                      </label>
                    </div>
                    <div class="mr-3">
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio"
                          v-model="form.status"
                          name="status"
                          value="3"
                        />
                        <span class="ml-2">Hidden</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="banner_image"
                  >
                    Banner Image
                  </label>
                </div>
                <div class="w-3/4">
                  <input
                    type="file"
                    name="banner_image"
                    ref="banner_image"
                    hidden
                    @change="handleBannerImageChange"
                  />
                  <div
                    class="bg-light m-1"
                    style="height: 100px; width: 150px"
                    @click="$refs.banner_image.click()"
                  >
                    <div v-if="form.bannerImage">
                      <img
                        :src="form.bannerImage"
                        alt="Banner Image"
                        style="height: 100px; width: 150px"
                      />
                    </div>
                    <div
                      class="flex flex-col justify center appearance-none border rounded w-full leading-tight"
                      style="height: 100px; width: 150px"
                      v-else
                    >
                      <img
                        src="/thumnail.png"
                        alt="thumb nail"
                        style="height: 100px; width: 150px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center mb-3">
              <div class="w-1/4">
                <label
                  class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                  for="image_text"
                >
                  Image Text
                </label>
              </div>
              <div class="w-3/4">
                <input
                  name="image_text"
                  v-model="form.image_text"
                  :class="inputElClass"
                  id="image_text"
                  type="text"
                  placeholder="Image Text"
                />
              </div>
            </div>
            <div class="mr-2 mt-4">
              <h5 class="text-bold text-black text-left font-semibold">AVAILABILITY</h5>
            </div>
            <div class="w-93 px-8 pt-2 pb-8 mr-5 mx-3">
              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="status"
                  >
                    User Group
                  </label>
                </div>
                <div class="w-3/4">
                  <div class="flex flex-col">
                    <div class="mt-2 flex flex-row mb-2">
                      <div class="mr-3">
                        <label class="inline-flex items-center">
                          <input
                            type="radio"
                            class="form-radio"
                            name="radio"
                            value="1"
                            v-model="form.usergroup"
                            checked
                          />
                          <span class="ml-2">All</span>
                        </label>
                      </div>
                      <div class="mr-3">
                        <label class="inline-flex items-center">
                          <input
                            type="radio"
                            class="form-radio"
                            v-model="form.usergroup"
                            name="usergroup"
                            value="2"
                          />
                          <span class="ml-2">Guest</span>
                        </label>
                      </div>
                      <div class="mr-3">
                        <label class="inline-flex items-center">
                          <input
                            type="radio"
                            class="form-radio"
                            v-model="form.usergroup"
                            name="usergroup"
                            value="3"
                          />
                          <span class="ml-2">Authenticated User</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        v-model="form.apply"
                        name="apply"
                        value="1"
                      />
                      <span class="ml-3">Apply to All categories</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="position"
                  >
                    Position
                  </label>
                </div>
                <div class="w-3/4">
                  <input
                    name="position"
                    v-model="form.position"
                    :class="inputElClass"
                    id="position"
                    type="text"
                    placeholder="Position"
                  />
                </div>
              </div>
              <div class="flex items-center mb-3">
                <div class="w-1/4">
                  <label
                    class="block text-gray-600 text-center mb-1 mb-0 pr-4"
                    for="creation_date"
                  >
                    Creation Date
                  </label>
                </div>
                <div class="w-3/4">
                  <input
                    name="creation_date"
                    v-model="form.creation_date"
                    :class="inputElClass"
                    id="creation_date"
                    type="date"
                    placeholder="Created Date"
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
import CheckRadioPicker from "@/components/CheckRadioPicker";
import Field from "@/components/Field";
import Control from "@/components/Control";
import Divider from "@/components/Divider.vue";
import JbButton from "@/components/JbButton";
import JbButtons from "@/components/JbButtons";

export default {
  name: "CategoryCreate",
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
      category_name: "",
      description: "",
      location: "Choose A service",
      status: "",
      usergroup: "",
      creation_date: "",
      position: "",
      apply: "",
      image_text: "",
      banner_image: "",
      bannerImage: null,
    });

    const error = ref("");

    const router = useRouter();

    const handleBannerImageChange = (e) => {
      console.log(form);
      form.banner_image = e.target.files[0];
      let bannerImageReader = new FileReader();
      bannerImageReader.readAsDataURL(form.banner_image);
      bannerImageReader.onload = (e) => {
        form.bannerImage = e.target.result;
      };
    };

    const submit = () => {
      console.log(form);
      const data = new FormData();
      data.append("category_name", form.category_name),
        data.append("description", form.description),
        data.append("location", form.location),
        data.append("banner_image", form.banner_image),
        data.append("image_text", form.image_text),
        data.append("apply", form.apply),
        data.append("usergroup", form.usergroup),
        data.append("status", form.status),
        data.append("creation_date", form.creation_date);
      data.append("position", form.position);
      axios
        .post("/api/admin/category", data)
        .then((res) => {
          console.log(res);
          router.push("/category");
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
      handleBannerImageChange,
    };
  },
};
</script>
<style>
.test {
  background: black !important;
}
</style>
