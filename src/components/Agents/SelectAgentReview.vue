<template>
  <div class="w-full">
    <div class="flex items-center w-72 xs:w-80 mx-auto">
      <div
        v-for="(item, index) in agentsData"
        :key="index"
        @click="changeTheCurrentAgent(index)"
        :class="[
          'rounded-full h-14 w-14 transform scale-90 overflow-hidden mx-auto border-4 border-transparent cursor-pointer ',
          index == currentAgent
            ? 'transition duration-200 ease-in-out border-4 border-purpleLight scale-110'
            : '',
        ]"
      >
        <img :src="require(`@/assets/About/${item.picture}`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        agentsData: {
            type: Array,
        },
        changeCurrentAgent: {
            type: Function
        },
        currentAgent: {
            type: Number
        }
    },
    methods: {
        changeTheCurrentAgent(index) {
            this.changeCurrentAgent(index)
        }
    },
};
</script>

<style></style>
