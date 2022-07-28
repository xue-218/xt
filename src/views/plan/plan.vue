<template>
  <div class="flex-col plan-page">
    <WebPlan />
    <PcPlan />
  </div>
</template>

<script>
import WebPlan from './webPlan'
import PcPlan from './pcPlan.vue'

export default {
  components: { WebPlan, PcPlan },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .plan-page {
  }

  @media screen and (max-width: 600px) {
    .plan-page {
      .web-plan-page {
        display: none;
      }

      .pc-plan-page {
        display: flex;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .plan-page {
      .web-plan-page {
        display: flex;
      }

      .pc-plan-page {
        display: none;
      }
    }
  }
</style>
