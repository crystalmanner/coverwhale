<template>
  <div class="mb-2 w-full">
    <input
      :type="inputType"
      :value="modelValue"
      class="w-full border-b-2 border-purpleMain text-light text-sm text-color-custom pb-1.5 outline-none"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeHolder"
    />
  </div>
</template>

<script>

export default {
  props: ["modelValue", "inputType", "placeHolder", "error", "mask"],
};
</script>

<style>

</style>
