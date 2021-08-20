<template>
  <div class="home">
    <AppDescription/>
    <div class="pink-image-background">
      <OverflowingCard/>
      <CoverWhaleNewWay/>
      <GettingCoveredSteps/>
      <ReviewsFromPeople/>
    </div>
  </div>
</template>

<script>
import AppDescription from "@/components/Home/HomeAppDescription.vue"
import OverflowingCard from "@/components/Home/HomeOverflowingCard.vue"
import CoverWhaleNewWay from "@/components/Home/CoverWhaleNewWay.vue"
import GettingCoveredSteps from "@/components/Home/GettingCoveredSteps.vue"
import ReviewsFromPeople from "@/components/Home/ReviewsFromPeople.vue"

export default {
  name: 'Home',
  components: {
    AppDescription,
    OverflowingCard,
    CoverWhaleNewWay,
    GettingCoveredSteps,
    ReviewsFromPeople
  },
}
</script>
