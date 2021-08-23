<template>
  <div class="w-11/12 sm:w-9/12 mx-auto pt-2">
    <div class="bg-purpleMain rounded-2xl px-8 md:px-14 py-12 mt-24 flex items-center flex-col gap-8 sm:gap-0 sm:flex-row">
      <div class="text-white">
        <h1 class="text-3xl pb-6">
          Still in love with how long it takes to get commercial insurance?
          Don’t click <span class="hidden sm:block">there -></span>
        </h1>
        <p class="">
          Getting coverage through CoverWhale. No biggie. Even our call to
          actions are witty.
        </p>
      </div>
      <div>
        <BaseButton
        class="mx-12"
          buttonLabel="GET STARTED"
          variant="bg-gray-200 border-none rounded-full px-5 py-2 text-purpleMain font-semibold w-40 text-sm font-semibold"
        >
          <template v-slot:iconPrepend>
            <img
              src="@/assets/Icons/chatting-purple.png"
              class="w-4"
              alt=""
            />
          </template>
        </BaseButton>
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
