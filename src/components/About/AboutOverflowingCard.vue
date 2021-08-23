<template>
  <div>
    <div
      class="p-5 sm:px-12 sm:py-9 card-general grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-3 mx-8 sm:mx-32 relative bottom-10"
    >
      <div class="text-purpleMain text-center lg:text-left">
        <img src="@/assets/cover-whale-logo-purple.png" class="w-44 mb-4 mx-auto lg:mx-0" alt="">
        <p class="text-sm">
          Stay in the know. We've got you covered.
        </p>
      </div>
      <div
        class="flex flex-col lg:flex-row items-start justify-start gap-1 lg:gap-3"
      >
        <div>
          <img class="w-6 lg:w-36 mt-2" src="@/assets/Home/Icons/earth.png" alt="">
        </div>
        <div>
          <p class="sm:font-bold mb-1">This can be a link to a press release</p>
          <p class="mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            reiciendis, consequuntur voluptatum dolores itaque natus sapiente
            dignissimos. Soluta, fugit vero?
          </p>
          <BaseButton buttonLabel="Read More" variant="bg-purpleMain">
            <template v-slot:iconAppend>
              <svg
                class="w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </template>
          </BaseButton>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row items-start justify-start gap-1 lg:gap-3"
      >
        <div>
          <img src="@/assets/Home/Icons/cloud.png" class="w-6 lg:w-36 mt-2" alt="">
        </div>
        <div>
          <p class="sm:font-bold mb-1">Or just a short announcement</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            est? Vel enim cupiditate atque facilis, sapiente labore. Nulla,
            cupiditate eaque.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>

<style></style>
