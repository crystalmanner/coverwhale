<template>
  <div class="home">
    <NavBar />
    <AboutAppDescription />
    <div class="purple-image-background">
      <AboutOverflowingCard />
      <CoverWhaleProcess />
      <PurpleSheetMid />
      <MeetTheTeam />
      <div class="background-for-about-footer">
        <PurpleSheetBottom />
        <Footer class="2md:bg-none" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

import AboutAppDescription from "@/components/About/AboutAppDescription.vue";
import AboutOverflowingCard from "@/components/About/AboutOverflowingCard.vue";
import CoverWhaleProcess from "@/components/About/CoverWhaleProcess.vue";
import PurpleSheetMid from "@/components/About/PurpleSheetMid.vue";
import MeetTheTeam from "@/components/About/MeetTheTeam.vue";
import PurpleSheetBottom from "@/components/About/PurpleSheetBottom.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    AboutAppDescription,
    AboutOverflowingCard,
    CoverWhaleProcess,
    PurpleSheetMid,
    MeetTheTeam,
    PurpleSheetBottom,
    Footer,
    NavBar,
  },
};
</script>

<style scoped>
.background-for-about-footer {
  background-color: #f9f2f2;
}
</style>
