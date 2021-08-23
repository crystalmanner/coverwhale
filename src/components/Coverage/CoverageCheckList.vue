<template>
  <div
    :class="['border-b-2 border-b-gray-400 p-3 flex items-start gap-3 ', variant]"
  >
    <div>
      <svg
      class="mt-0.5"
        id="Group_578"
        data-name="Group 578"
        xmlns="http://www.w3.org/2000/svg"
        width="17.318"
        height="17.318"
        viewBox="0 0 17.318 17.318"
      >
        <path
          id="Path_28"
          data-name="Path 28"
          :class="`fill-current text-${themeColor}`"
          d="M8.659,0a8.659,8.659,0,1,0,8.659,8.659A8.668,8.668,0,0,0,8.659,0Zm0,0"
        />
        <path
          id="Path_29"
          data-name="Path 29"
          class="fill-current text-white"
          d="M149.6,166.56l-4.69,4.69a.721.721,0,0,1-1.02,0l-2.345-2.345a.721.721,0,0,1,1.02-1.02l1.835,1.835,4.18-4.18a.721.721,0,1,1,1.02,1.02Zm0,0"
          transform="translate(-136.548 -159.736)"
        />
      </svg>
    </div>
    <p :class="['text-xs ', `text-${themeColor}`]">{{ checkListItem }}</p>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
    },
    themeColor: {
      type: String,
    },
    checkListItem: {
      type: String,
    },
  },
};
</script>
