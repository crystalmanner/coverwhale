<template>
  <div class="text-white flex relative bg-purpleMain overflow-hidden">
    <div class="px-5 sm:px-32 pb-6 pt-10 md:w-9/12 lg:w-3/5 z-10">
    <p class="uppercase mb-12">AGENTS</p>
      <p class="text-4xl font-semibold pb-5">
        <span>Multiple programs</span> to support a wide range of trucking operations
      </p>
      <BaseButton
        class="pb-16"
        buttonLabel="GET STARTED"
        variant="bg-purpleExtraLight border-none font-semibold px-6 py-2"
      >
        <template v-slot:iconPrepend>
          <img src="@/assets/Icons/chatting.png" class="w-3" alt="">
        </template>
      </BaseButton>
    </div>
    <img
      src="@/assets/Agents/agents-description.png"
      alt=""
      class="absolute -right-10 -bottom-10 opacity-20 lg:opacity-100 imageWidth"
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

<style scoped>
span {
  color: rgba(202,156,220,255);
}
.imageWidth {
  width: 32rem;
}
</style>
