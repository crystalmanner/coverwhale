<template>
  <div class="nav flex justify-between items-center bg-purpleMain py-6 xs:py-10 px-5 xs:px-10">
    <router-link to="/" class="cursor-pointer">
      <img src="@/assets/cover-whale-logo-white.png" class="w-44" alt="">
    </router-link>
    <div
      class="hidden lg:flex items-center text-sm gap-9 text-white font-semibold text-gray-100"
    >
      <router-link to="/about">About</router-link>
      <router-link to="/coverage">Coverage</router-link>
      <router-link to="/agents">Agents</router-link>
      <router-link to="">Investors</router-link>
      <router-link to="">Careers</router-link>
      <router-link to="">Press</router-link>
      <router-link to="">Licenses</router-link>
      <BaseButton buttonLabel="Get in Touch" variant="text-xs font-semibold" />
    </div>
    <div class="block lg:hidden w-6 stroke-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-6"
        fill=""
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
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
