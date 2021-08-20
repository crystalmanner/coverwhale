<template>
  <div class="text-white flex relative bg-purpleMain overflow-hidden">
    <div class="px-5 sm:px-32 py-6 md:w-9/12 lg:w-3/5 z-10">
      <p class="text-4xl font-bold pb-5">
        The most important innovation for truckers <span>since coffee.</span>
      </p>
      <p class="pb-10">
        Packed with <span>free loss control</span> and
        <span>coaching services</span> for drivers. We have multiple programs to
        support a <span>wide range of trucking operations</span> with in-house
        binding authority
      </p>
      <BaseButton
        class="pb-20 md:pb-44"
        buttonLabel="GET STARTED"
        variant="bg-purpleExtraLight border-none font-semibold px-6 py-2"
      >
        <template v-slot:iconSvgPrepend>
          <img src="@/assets/Icons/chatting.png" class="w-3" alt="">
        </template>
      </BaseButton>
    </div>
    <img
      src="@/assets/Home/bus-home-app-desc.png"
      alt=""
      class="absolute -right-5 -bottom-5 opacity-20 lg:opacity-100 imageWidth"
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
  width: 35rem;
}
</style>
