<template>
  <div
    class="w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 2md:gap-10 py-28"
  >
    <CoverageCard :coveragePlan="coveragePlanOne" />
    <CoverageCard :coveragePlan="coveragePlanTwo" />
    <CoverageCard :coveragePlan="coveragePlanThree" />
    <CoverageCard :coveragePlan="coveragePlanFour" />
    <CoverageCard :coveragePlan="coveragePlanFive" />
  </div>
</template>

<script>
import CoverageCard from "@/components/Coverage/CoverageCard.vue";

export default {
  components: {
    CoverageCard,
  },
  data() {
    return {
      coveragePlanOne: {
        title: "Automobile Liability",
        info: "Covers damage to others (3rd parties) as required by law",
        themeColor: "blueMain",
        checklistItemOne: "Limit up to $1M (CSL)",
        checklistItemTwo: "Meet state limit requirements",
        checklistItemThree:
          "Safety Programs available (Dashcams and Coaching) to help you save even more!",
        themeGradient: "light-blue-gradient",
      },
      coveragePlanTwo: {
        title: "Physical Damage",
        info: "Covers damage to your own truck and equipment",
        themeColor: "purpleLight",
        checklistItemOne: "Covers Truck and Trailer",
        checklistItemTwo: "Options for Non-Owned Trailers",
        checklistItemThree: "Options for Trailer Interchange",
        themeGradient: "light-purple-gradient",
      },
      coveragePlanThree: {
        title: "Cargo",
        info: "Covers cargo in your posession that you are hauling",
        themeColor: "greenLight",
        checklistItemOne: "Limits up to $250,000",
        checklistItemTwo: "Refrigeration Coverage Available",
        checklistItemThree: "Broad Form for wide range of covered Commodities",
        themeGradient: "light-green-gradient",
      },
      coveragePlanFour: {
        title: "Truckers General Liability",
        info:
          "Covers injuries or property damage you cause as a result of business activities not directly related to operating your truck",
        themeColor: "blueMain",
        checklistItemOne: "Customers Slipping/ falling on your premises",
        checklistItemTwo: "Erroneous delivery of products resulting in damage",
        checklistItemThree:
          "Actions of a driver while representing the insured on the premises of others, such as, loading docks, truck stops, etc.",
        themeGradient: "light-blue-gradient"
      },
      coveragePlanFive: {
        title: "Non-Trucking Liability Insurance",
        info:
          "Covers independent semi drivers outside the scope of their lease agreement with the motor carrier",
        themeColor: "greenLight",
        checklistItemOne:
          "Coverage generally applies when semi operators are driving their big rigs without trailers on their own time",
        checklistItemTwo:
          "Does not provide coverage to semi drivers while they are under dispatch",
        checklistItemThree:
          "Covers independent semi drivers outside the scope of their lease agreement with the motor carrier",
        themeGradient: "light-green-gradient",
      },
    };
  },
};
</script>