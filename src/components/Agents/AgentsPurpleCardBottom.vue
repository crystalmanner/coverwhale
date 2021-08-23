<template>
  <div
    class="bg-purpleMain rounded-2xl w-11/12 lg:w-9/12 mx-auto px-10 2md:px-24 flex flex-col-reverse 2md:flex-row items-center 2md:items-end mb-14"
  >
    <div class="customFlex-45 max-w-xs relative left-5">
      <img src="@/assets/Agents/some-guy.png" alt="" />
    </div>
    <div
      class="self-center customFlex-55 py-6 flex flex-col items-left justify-center gap-6 text-white"
    >
      <h1 class="2md:text-2xl text-xl">
        If you’re looking to get quick, fast quotes for your clients CoverWhale
        is your new best friend.
      </h1>
      <p class="text-sm hidden 2md:block">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit.
      </p>

      <BaseButton
      class="mx-auto"
        buttonLabel="GET IN TOUCH"
        variant="text-xs bg-white text-purpleLight border-4 rounded-full border-purpleMain border-opacity-80 py-3 px-5"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>

<style>
.customFlex-45 {
  flex: 45%;
}
.customFlex-55 {
  flex: 55%;
}
</style>
