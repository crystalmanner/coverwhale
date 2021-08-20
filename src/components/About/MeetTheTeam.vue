<template>
  <div class="w-11/12 sm:w-9/12 mx-auto">
      <div class="text-center mt-32 mb-20 hidden sm:block">
          <p class="text-3xl font-normal">The team behind CoverWhale</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10 mt-20 sm:mt-0">
          <TeamMemberCard
            memberTitle="Founder"
            memberName="Jason Bonnety"
          >
            <template v-slot:memberPhoto>
                <img src="@/assets/About/member-photo-one.png" class="w-72" alt="" />
            </template>
          </TeamMemberCard>

          <TeamMemberCard
            memberTitle="CEO"
            memberName="San De Grazia"
          >
            <template v-slot:memberPhoto>
                <img src="@/assets/About/member-photo-two.png" class="w-72" alt="" />
            </template>
          </TeamMemberCard>
          <TeamMemberCard
            memberTitle="COO"
            memberName="Kevin Smith"
          >
            <template v-slot:memberPhoto>
                <img src="@/assets/About/member-photo-three.png" class="w-72" alt="" />
            </template>
          </TeamMemberCard>
          <TeamMemberCard
            memberTitle="CTO"
            memberName="Mitt Rondey"
          >
            <template v-slot:memberPhoto>
                <img src="@/assets/About/member-photo-four.png" class="w-72" alt="" />
            </template>
          </TeamMemberCard>
          <TeamMemberCard
            memberTitle="GMO"
            memberName="Alexandra Slater"
          >
            <template v-slot:memberPhoto>
                <img src="@/assets/About/member-photo-five.png" class="w-72" alt="" />
            </template>
          </TeamMemberCard>
          <TeamMemberCard
            memberTitle="CTF"
            memberName="John Bissell"
          >
            <template v-slot:memberPhoto>
                <img src="@/assets/About/member-photo-six.png" class="w-72" alt="" />
            </template>
          </TeamMemberCard>
      </div>
  </div>
</template>

<script>
import TeamMemberCard from "./TeamMemberCard.vue";

export default {
    components: {
        TeamMemberCard,
    },
}
</script>

<style>

</style>