<template>
  <div class="agents">
      <NavBar/>
      <AgentsDescription/>
      <div class="extra-light-purple-gradient">
          <CoverWhaleForAgents/>
          <AgentsReviews/>
          <Footer/>
      </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
import AgentsDescription from "@/components/Agents/AgentsDescription.vue"
import CoverWhaleForAgents from "@/components/Agents/CoverWhaleForAgents.vue"
import AgentsReviews from "@/components/Agents/AgentsReviews.vue"

export default {
    name: "Agents",
    components: {
        AgentsDescription,
        NavBar,
        CoverWhaleForAgents,
        AgentsReviews,
        Footer
    },
}
</script>

<style>

</style>