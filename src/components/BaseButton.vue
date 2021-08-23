<template>
  <div>
    <button
      :class="
        'border-2 border-gray-100 rounded-md text-gray-100 px-3 py-1 inline-flex items-center gap-2 ' +
          variant
      "
      @click="buttonFunction()"
    >
      <slot name="iconPrepend"></slot>
      {{ buttonLabel }}
      <slot name="iconAppend"></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
    },
    buttonFunction: {
      type: Function,
      default: () => {},
    },
    buttonLabel: {
      type: String,
    },
  },
};
</script>

<style></style>
