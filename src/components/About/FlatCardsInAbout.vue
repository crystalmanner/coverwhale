<template>
  <div>
    <div
      class="flex flex-col justify-between flatCard mx-auto"
      :style="`background-color: ${bgColor};`"
    >
      <slot name="bgImage"></slot>
      <p class="text-xl px-2" :style="`color: ${textColor}`">{{cardTitle}}</p>
    </div>
    <p class="mt-2 md:font-bold mx-auto px-4 2md:px-3 max-w-xs">{{cardDescription}}</p>
  </div>
</template>

<script>
export default {
    props: {
        cardTitle: {
            type: String,
        },
        cardDescription: {
            type: String,
        },
        bgColor: {
            type: String,
        },
        textColor: {
            type: String,
        }
    },
};
</script>

<style></style>
