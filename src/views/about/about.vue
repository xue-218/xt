<template>
  <div class="aboutus-page">
    <WebAboutUs />
    <PcAboutUs />
  </div>
</template>

<script>
import WebAboutUs from './webAboutUs'
import PcAboutUs from './pcAboutUs.vue'

export default {
  components: { WebAboutUs, PcAboutUs },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

.aboutus-page {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;
}

@media screen and (max-width: 600px) {
  .aboutus-page {
    .web-about-page {
      display: none;
    }

    .pc-about-page {
      display: flex;
      font-size: 16px;
    }
  }
}

@media screen and (min-width: 600px) {
  .aboutus-page {
    .web-about-page {
      display: flex;
    }

    .pc-about-page {
      display: none;
    }
  }
}
</style>
