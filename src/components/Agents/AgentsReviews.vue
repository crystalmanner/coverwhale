<template>
  <div class="w-11/12 xs:w-9/12 lg:w-7/12 mx-auto">
    <div>
      <h1 class="text-lg text-center mb-9">
        See what our agents say about us.
      </h1>
    </div>
    <div class="mx-4">
      <transition name="fade" mode="out-in">
        <AgentReviewCard
          :key="currentAgent"
          :currentAgent="currentAgent"
          :agentsData="agentsData"
        />
      </transition>
    </div>
    <div class="mx-auto py-12">
      <SelectAgentReview
        :agentsData="agentsData"
        :currentAgent="currentAgent"
        :changeCurrentAgent="changeCurrentAgent"
      />
    </div>
  </div>
</template>

<script>
import AgentReviewCard from "@/components/Agents/AgentReviewCard.vue";
import SelectAgentReview from "@/components/Agents/SelectAgentReview.vue";

export default {
  components: {
    AgentReviewCard,
    SelectAgentReview,
  },
  data() {
    return {
      currentAgent: 2,
      agentsData: [
        {
          review:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "Another Name",
          title: "Agent",
          picture: "member-photo-three.png"
        },
        {
          review:
            "Lorem ipsum dolor sit amet, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "Some Name",
          title: "Agent",
          picture: "member-photo-two.png"
        },
        {
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "Wade Warren",
          title: "Former Agent",
          picture: "member-photo-one.png"
        },
        {
          review:
            "Lorem ipsum dolor sit amet, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "Second last Name",
          title: "Agent",
          picture: "member-photo-four.png"
        },
        {
          review:
            "Lorem ipsum dolor sit amet, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "Last Name",
          title: "Agent",
          picture: "member-photo-five.png"
        },
      ],
    };
  },
  methods: {
    changeCurrentAgent(data) {
      this.currentAgent = data;
    },
  },
};
</script>

<style></style>
