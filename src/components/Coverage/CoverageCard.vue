<template>
  <div class="card-general flex flex-col justify-between">
      <div :class="`p-4 ${coveragePlan.themeGradient}`">
          <h1 class="text-lg text-white p-1.5 pb-1">{{coveragePlan.title}}</h1>
          <p class="text-xs text-white">{{coveragePlan.info}}</p>
      </div>
      <div class="p-3">
          <CoverageCheckList :themeColor="coveragePlan.themeColor" :checkListItem="coveragePlan.checklistItemOne"/>
          <CoverageCheckList :themeColor="coveragePlan.themeColor" :checkListItem="coveragePlan.checklistItemTwo"/>
          <CoverageCheckList variant="border-none pb-6" :themeColor="coveragePlan.themeColor" :checkListItem="coveragePlan.checklistItemThree"/>
      </div>
      <BaseButton
        class="m-2"
        buttonLabel="GET QUOTE"
        :variant="`border-none justify-center w-full text-xs py-2.5 bg-${coveragePlan.themeColor}`"
      />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue"
import CoverageCheckList from "@/components/Coverage/CoverageCheckList.vue"

export default {
    props: {
        coveragePlan: {
            type: Object,
            default: {}
        }
    },
    components: {
        BaseButton,
        CoverageCheckList
    },
}
</script>

<style>
</style>