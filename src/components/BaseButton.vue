<template>
  <div>
    <button
      :class="
        'border-2 border-gray-100 rounded-md text-gray-100 px-3 py-1 text-sm inline-flex items-center gap-2 ' +
          variant
      "
      @click="buttonFunction()"
    >
      <slot name="iconSvgPrepend"></slot>
      {{ buttonLabel }}
      <slot name="iconSvgAppend"></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    buttonFunction: {
      type: Function,
      default: () => {},
    },
    buttonLabel: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
