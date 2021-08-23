<template>
  <div class="coverage">
      <NavBar/>
      <CoverageDescription/>
      <div class="coverage-mid-gradient-bg">
        <CoveragePlans/>
        <Footer/>
      </div>
  </div>
</template>

<script>
import CoverageDescription from "@/components/Coverage/CoverageDescription.vue"
import CoveragePlans from "@/components/Coverage/CoveragePlans.vue"
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Coverage",
    components: {
        CoverageDescription,
        CoveragePlans,
        NavBar,
        Footer
    },
}
</script>

<style>
.coverage-mid-gradient-bg {
  background: rgb(251, 241, 245);
  background: linear-gradient(
    to bottom left,
    rgba(251, 241, 245, 1) 0%,
    rgba(246, 243, 237, 1) 12%,
    rgba(239, 234, 249, 1) 68%,
    rgba(225, 238, 255, 1) 100%
  );
}
</style>