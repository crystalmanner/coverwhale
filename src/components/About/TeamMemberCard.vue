<template>
  <div>
    <div class="rounded-lg max-w-sm">
      <slot name="memberPhoto"></slot>
    </div>
    <div class="text-left py-3">
      <p class="text-gray-500">{{ memberTitle }}</p>
      <p class="text-lg text-gray-700 font-semibold leading-3">{{ memberName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    memberTitle: {
      type: String,
    },
    memberName: {
      type: String,
    },
  },
};
</script>

<style></style>
