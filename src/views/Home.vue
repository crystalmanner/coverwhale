<template>
  <div class="home">
    <NavBar/>
    <AppDescription/>
    <div class="pink-image-background">
      <OverflowingCard/>
      <CoverWhaleNewWay/>
      <GettingCoveredSteps/>
      <ReviewsFromPeople/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import AppDescription from "@/components/Home/HomeAppDescription.vue"
import OverflowingCard from "@/components/Home/HomeOverflowingCard.vue"
import CoverWhaleNewWay from "@/components/Home/CoverWhaleNewWay.vue"
import GettingCoveredSteps from "@/components/Home/GettingCoveredSteps.vue"
import ReviewsFromPeople from "@/components/Home/ReviewsFromPeople.vue"
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    AppDescription,
    OverflowingCard,
    CoverWhaleNewWay,
    GettingCoveredSteps,
    ReviewsFromPeople,
    NavBar,
    Footer
  },
}
</script>
