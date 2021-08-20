<template>
  <div class="home">
    <AboutAppDescription/>
    <div class="purple-image-background pb-20">
      <AboutOverflowingCard/>
      <CoverWhaleProcess/>
      <CoverWhaleStory/>
    </div>
  </div>
</template>

<script>
import AboutAppDescription from "@/components/About/AboutAppDescription.vue"
import AboutOverflowingCard from "@/components/About/AboutOverflowingCard.vue"
import CoverWhaleProcess from "@/components/About/CoverWhaleProcess.vue"
import CoverWhaleStory from "@/components/About/CoverWhaleStory.vue"

export default {
  name: 'Home',
  components: {
    AboutAppDescription,
    AboutOverflowingCard,
    CoverWhaleProcess,
    CoverWhaleStory
  },
}
</script>
