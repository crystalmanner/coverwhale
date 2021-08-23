<template>
  <div
    class="text-center text-gray-600 p-6 xs:p-12 sm:p-16 card-general rounded-none"
  >
    <p class="text-sm text-left mb-10">
      "{{ agentsData[currentAgent].review }}"
    </p>
    <h1 class="text-lg">{{ agentsData[currentAgent].name }}</h1>
    <p class="text-xs">{{ agentsData[currentAgent].title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    agentsData: {
      type: Array,
      required: true
    },
    currentAgent: {
      type: Number,
      required: true
    },
  },
};
</script>

<style></style>
