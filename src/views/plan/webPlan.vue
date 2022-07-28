<template>
  <div class="flex-col web-plan-page">
    <div class="flex-col plan-banner">
      <div class="flex-col items-center plan_label">
        <span class="plan_label_bg">roadmap</span>
        <span class="plan_label_title">规划蓝图</span>
      </div>
      <span class="plan-slogin">一起建设中国制造的全球共识</span>
    </div>
    <div class="process-list">
      <div class="connect-line"></div>
      <div v-for="(item, index) in processList" :key="index"  class="process-line">
        <template v-if="index % 2 === 0">
          <div class="line-left">
            <span class="left-label">{{item}}</span><HalfCircle direction="left" />
          </div>
          <div />
        </template>
        <template v-else-if="index % 2 === 1 && (typeof item !== 'object')">
          <div />
          <div class="line-right">
            <HalfCircle direction="right" /><span class="right-label">{{item}}</span>
          </div>
        </template>
        <template v-else>
          <div />
          <div class="line-right">
            <HalfCircle direction="right" />
            <div class="line-item-arr">
              <span v-for="(itm, indx) in item" :key="`ceil${indx}`" class="right-label">{{itm}}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="footer-bg">
      <YuanFooter />
    </div>
  </div>
</template>

<script>
import YuanFooter from '../../components/YuanFooter.vue'
import HalfCircle from './halfCircle.vue'

export default {
  components: { YuanFooter, HalfCircle },
  data () {
    return {
      processList: [
        '元计划故事背景介绍发布',
        '元计划动漫宣传片发布',
        '元计划人物形象版权品发售',
        '连载漫画故事线持续发布',
        '元计划南北冲突第战役打响',
        '启动元计划空投计划',
        '开启元计划形象周期性选拔参与实体赋能',
        ['上线天猫，抖音等线上品牌店', '推出首款元计划手办并持续发布线下自研周边产品'],
        '宣布项目经济模型重要信息',
        '邀请签约娱乐文化体育等产业高端流量明星加入元计划',
        '与一线国产服装品牌合作联名发布元计划潮牌服饰',
        '元计划IP同名小说进入发布倒计时',
        '元计划同名动漫电影筹备开拍',
        '元计划冠名流量综艺或赛事',
        '元计划空间碎片空投开始',
        '元计划同款游戏进入内测倒计时',
        '元计划元宇宙世界进入内测倒计时',
        '链游元宇宙发布，元计划元宇宙世界发布......'
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.web-plan-page {
  background-color: #000000;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;

  .plan-banner {
    height: 56vw;
    background-image: url('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/plan/bannertop.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    justify-content: center;

    .plan_label {
      font-size: 2.18vw;
      padding-top: 1.26vw;
      position: relative;
      font-family: PingFang SC;
      font-weight: 600;
      .plan_label_bg {
        color: #ffffff1a;
        line-height: 1.58vw;
        letter-spacing: 1.7vw;
        text-transform: uppercase;
      }
      .plan_label_title {
        color: #ffffff;
        line-height: 1.98vw;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .plan-slogin {
      margin-top: 1vw;
      align-self: center;
      color: #ffffff;
      font-size: 1.03vw;
      font-family: PingFang SC;
      line-height: 0.95vw;
      letter-spacing: 0.82vw;
    }
  }

  .process-list {
    width: 100%;
    color: #fff;
    font-size: 1vw;
    margin-top: -16.7vw;
    z-index: 1;
    position: relative;

    .connect-line {
      position: absolute;
      width: 1px;
      height: calc(100% - 2.5vw);
      background-color: #fff;
      top: 1.25vw;
      left: calc(50% - 1px);
    }

    .process-line {
      padding: 0.78vw 0;
      display: flex;

      & > div {
        width: 50%;
      }

      .line-left {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        transform: translateX(4px);

        .left-label {
          margin-right: 15px;
        }
      }

      .line-right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transform: translateX(-5px);

        .right-label {
          margin-left: 15px;
        }

        .line-item-arr {
          transform: translateY(10px);
          display: flex;
          flex-direction: column;
          text-align: left;

          & > span:last-child {
            margin-top: 10px;
          }
        }
      }
    }
  }

  .footer-bg {
    margin-top: -38.3vw;
    padding: 58vw 0 1vw;
    background-image: url('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/plan/footerbg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
}

@media screen and (max-width: 1080px) {
  .web-plan-page {
    min-width: 1080px;

    .plan-banner {
      padding: 192px 0 404.48px;
      background-image: url('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/plan/bannertop.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;

      .plan_label {
        padding-top: 17.44px;
        height: 42.72px;
        position: relative;

        .plan_label_bg {
          color: rgba(255, 255, 255, 0.1019607843);
          font-size: 34.08px;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 25.28px;
          letter-spacing: 27.2px;
          text-transform: uppercase;
        }

        .plan_label_title {
          color: #ffffff;
          font-size: 34.08px;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 31.68px;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .plan-slogin {
        margin-top: 16px;
        align-self: center;
        color: #ffffff;
        font-size: 16.48px;
        font-family: PingFang SC;
        line-height: 15.2px;
        letter-spacing: 13.12px;
      }
    }

    .process-list {
      width: 100%;
      color: #fff;
      font-size: 14px;
      margin-top: -288px;
      z-index: 1;
      position: relative;

      .connect-line {
        position: absolute;
        width: 1px;
        height: calc(100% - 40px);
        background-color: #fff;
        top: 20px;
        left: calc(50% - 1px);
      }

      .process-line {
        padding: 15px 0;
        display: flex;

        & > div {
          width: 50%;
        }

        .line-left {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          transform: translateX(4px);

          .left-label {
            margin-right: 15px;
          }
        }

        .line-right {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          transform: translateX(-5px);

          .right-label {
            margin-left: 15px;
          }

          .line-item-arr {
            transform: translateY(10px);
            display: flex;
            flex-direction: column;
            text-align: left;

            & > span:last-child {
              margin-top: 10px;
            }
          }
        }
      }
    }

    .footer-bg {
      margin-top: -400px;
      padding: 596.48px 0 16px;
      background-image: url('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/plan/footerbg.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  }
}

</style>
