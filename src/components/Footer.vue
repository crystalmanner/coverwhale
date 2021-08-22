<template>
  <div class="w-11/12 lg:w-9/12 mx-auto py-14">
    <div class="flex flex-col 2md:flex-row justify-between gap-10 mb-12 2md:mb-24">
      <div>
        <div>
          <img src="@/assets/cover-whale-logo-purple.png" class="w-44 mb-4" alt="">
        </div>
        <div class="flex gap-4 mb-3 hidden 2md:flex">
          <img src="@/assets/Icons/contact-mail.png" class="w-7" alt="">
          <p class="text-sm font-light text-purpleMain">info@coverwhale.com</p>
        </div>
        <div class="flex gap-4 hidden 2md:flex">
          <img src="@/assets/Icons/contact-phone.png" class="w-7" alt="">
          <p class="text-sm font-light text-purpleMain">+1 206 656 1175</p>
        </div>
      </div>

      <div class="flex flex-col 2md:flex-row gap-6 gray-colored-text">
        <div class="flex flex-col gap-2 mr-3">
          <router-link to="" class="text-md">About</router-link>

          <router-link to="" class="text-sm">Team</router-link>
          <router-link to="" class="text-sm">Our Process</router-link>
        </div>
        <div class="flex flex-col gap-2">
          <router-link to="" class="text-md">Coverage</router-link>

          <router-link to="" class="text-sm">Automobile Liability</router-link>
          <router-link to="" class="text-sm">Physical Damage</router-link>
          <router-link to="" class="text-sm">Cargo</router-link>
          <router-link to="" class="text-sm">Truckers General Liability</router-link>
          <router-link to="" class="text-sm">Non-Trucking Liability Insurance</router-link>
        </div>
        <div>
          <router-link to="" class="text-md">Agents</router-link>
        </div>
        <div>
          <router-link to="" class="text-md">Investors</router-link>
        </div>
        <div>
          <router-link to="" class="text-md">Careers</router-link>
        </div>
        <div>
          <router-link to="" class="text-md">Contact</router-link>
        </div>
        <div>
          <router-link to="" class="text-md">Login</router-link>
        </div>
      </div>
    </div>
    <div class="flex justify-end items-center gap-3">
      <p class="text-sm font-light">Licenses</p>
      <p class="text-4xl text-gray-500 relative bottom-3">.</p>
      <p class="text-sm font-light">Privacy Policy</p>
      <p class="text-4xl text-gray-500 relative bottom-3">.</p>
      <p class="text-sm font-light">Terms of Use</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.gray-colored-text {
  color: #3B3B3B;
}
</style>