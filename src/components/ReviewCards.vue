<template>
  <div class="card-general bg-white mb-3 rounded-lg md:w-10/12 w-full">
    <div class="px-4 py-4 border-b-2 border-gray-200 flex gap-3">
      <div>
        <img src="@/assets/Home/some-person.png" class="w-10" alt="" />
      </div>
      <div class="text-xs">
        <p class="text-gray-400">{{ userName }}</p>
        <p class="text-blue-400">{{ userJob }}</p>
      </div>
    </div>
    <div class="p-4">
      <p class="italic text-sm font-light">
        "{{userReview}}"
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        userName: {
            type: String,
            default: ''
        },
        userJob: {
            type: String,
            default: ''
        },
        userReview: {
            type: String,
            default: ''
        }
    },
};
</script>

<style></style>
