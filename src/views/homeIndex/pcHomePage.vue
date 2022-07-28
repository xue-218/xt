<template>
  <div class="pc-container">
    <div class="flex-col pc-homeindex">
      <video
        v-if="!isAndroid"
        ref="video"
        muted
        poster="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_mobile.mp4?x-oss-process=video/snapshot,t_100,f_jpg,w_750,h_1000,m_fast"
        loop="loop"
        autoplay="autoplay"
        src="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_mobile.mp4"
        class="flex-col pc-banner"
        id="video-home"
        playsinline
        webkit-playsinline="true"
        x5-video-player-type="h5"
        data-object-fit=""
        preload="auto"
      />
      <div v-else class="flex-col pc-banner bg-video" />
      <Swiper class="custom-swiper" />
    </div>
    <YuanFooter />
  </div>
</template>

<script>
import YuanFooter from '../../components/YuanFooter.vue'
import Swiper from './swiper.vue'

export default {
  components: { YuanFooter, Swiper },
  data () {
    return {
      isAndroid: navigator.userAgent.toLowerCase().indexOf('android') > -1
    }
  },
  mounted () {
    const that = this
    document.addEventListener('touchstart', () => {
      that.$refs.video.play()
    }, false)
    // 必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    document.addEventListener('WeixinJSBridgeReady', function () {
      that.$refs.video.play()
    }, false)
  }
}
</script>

<style scoped lang="scss">
.pc-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .pc-homeindex {
      .pc-banner {
        height: 560px;
        // padding: 108.96px 0 282.08px;
        // background-image: url("https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_mobile.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center cover;
        position: relative;
        &.bg-video{
          background-image: url("https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_mobile.webp");
        }
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          content: "";
          // background: rgba(0,0,0,.7);
        }
      }

      .custom-swiper {
        margin-top: -160px;
      }

      .slogin {
          margin-top: 32px;
          .slogin_1 {
          color: #ffffff;
          font-size: 34.08px;
          font-family: Microsoft YaHei;
          font-weight: 700;
          line-height: 40.96px;
          letter-spacing: 1.76px;
          }

          .slogin_2 {
          margin-top: 4px;
          color: #ffffff;
          font-size: 34.08px;
          font-family: Microsoft YaHei;
          font-weight: 700;
          line-height: 40.96px;
          letter-spacing: 1.76px;
          }
      }
    }
}
</style>
