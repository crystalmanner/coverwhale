<template>
  <div class="pt-24 pb-20 w-10/12 md:w-3/4 mx-auto">
    <div class="text-center pb-20">
      <h1 class="text-2xl font-normal w-full md:w-2/3 mx-auto">
        This talks about CoverWhale’s process and commitment to innovation.
      </h1>
    </div>
    <div class="flex justify-center items-center flex-wrap lg:flex-nowrap gap-10 px-0 lg:px-10">
      <FlatCardsInAbout
        cardTitle="Data Collection"
        cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd
      tempor incididunt."
        bgColor="#FCE8EB"
        textColor="#FF8586"
      >
        <template v-slot:bgImage>
          <img
            src="@/assets/About/flat-card-image-one.png"
            class="mx-auto py-8"
            alt=""
          />
        </template>
      </FlatCardsInAbout>

      <FlatCardsInAbout
        cardTitle="Data Analysis"
        cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd
      tempor incididunt."
        bgColor="#FEF8E8"
        textColor="#FFA675"
      >
        <template v-slot:bgImage>
          <img
            src="@/assets/About/flat-card-image-two.png"
            class="mx-auto py-8"
            alt=""
          />
        </template>
      </FlatCardsInAbout>

      <FlatCardsInAbout
        cardTitle="Fast Coverage"
        cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do
          eiusd tempor incididunt."
        bgColor="rgba(116, 138, 253, 0.36)"
        textColor="#A783FF"
      >
        <template v-slot:bgImage>
          <img
            src="@/assets/About/flat-card-image-three.png"
            class="mx-auto py-8"
            alt=""
          />
        </template>
      </FlatCardsInAbout>
    </div>
  </div>
</template>

<script>
import FlatCardsInAbout from "@/components/About/FlatCardsInAbout.vue";

export default {
  components: {
    FlatCardsInAbout,
  },
};
</script>

<style scoped>
.bg-pink-flat-card {
  background: #fce8eb;
}
</style>
