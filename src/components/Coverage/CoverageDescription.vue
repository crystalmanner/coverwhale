<template>
  <div class="text-white flex relative bg-purpleMain overflow-hidden pt-6">
    <div class="px-5 sm:px-32 py-6 md:w-9/12 lg:w-3/5 z-10">
      <p class="mb-8">COVERAGE</p>
      <p class="text-4xl pb-5">
        Plans made easy so you can do what you do best. <span>Drive.</span>
      </p>
      <BaseButton
        class="pb-20 md:pb-28"
        buttonLabel="GET STARTED"
        variant="bg-purpleExtraLight border-none font-semibold px-6 py-2"
      >
        <template v-slot:iconPrepend>
          <img src="@/assets/Icons/chatting.png" class="w-3" alt="" />
        </template>
      </BaseButton>
    </div>
    <img
      src="@/assets/Coverage/coverage-desc-bg.png"
      alt=""
      class="absolute -right-5 -bottom-6 opacity-20 lg:opacity-100 imageWidth"
    />
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

<style>
span {
  color: rgba(202,156,220,255);
}
</style>
