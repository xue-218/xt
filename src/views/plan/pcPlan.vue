<template>
  <div class="flex-col pc-plan-page">
    <!-- <YuanNav navTitle="流程图" /> -->
    <div class="flex-col plan-content">
      <div class="flex-col plan-banner">
        <div class="flex-col slogin">
          <div class="flex-col items-start plan-label">
            <span class="text">roadmap</span>
            <span class="text_2">规划蓝图</span>
          </div>
          <span class="plan-slogin">一起建设中国制造的全球共识</span>
        </div>
        <div class="plan-list">
          <div v-for="(item, index) in planList" :key="`listItem${index}`" class="plan-list-item">
            <template v-if="typeof item === 'string'">
              <div class="text_6">{{item}}</div>
            </template>
            <template v-else>
              <div v-for="(itm, indx) in item" :key="`listItemArrItem${indx}`" class="text_6">{{itm}}</div>
            </template>
            <div v-if="index + 1 !== planList.length" style="border-left: 1px dashed #FFF;height:16px;line-height:16px; margin: 0 auto" />
          </div>
        </div>
      </div>
      <YuanFooter />
    </div>
  </div>
</template>

<script>
// import YuanNav from '../../components/YuanNav.vue'
import YuanFooter from '../../components/YuanFooter.vue'

export default {
  components: { YuanFooter },
  data () {
    return {
      planList: [
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
        '元计划同名动漫电影筹划开拍',
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
.pc-plan-page{
  .plan-content{
    background-image: url('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/plan/pcbg.png');
    background-size: cover;
    background-position: center center;
    min-height: 100vh;

    .plan-banner {
      padding: 64px 16px 64px 16px;

      .text_6{
        font-style: normal;
        font-weight: 400;
        text-align: center;
        margin-bottom: 5px;
        color: #ffffff;
        font-size: 10.08px;
        font-family: PingFang SC;
      }
      .slogin {
        .plan-label {
          padding-top: 17.44px;
          height: 42.72px;
          position: relative;

          .text {
            color: #ffffff1a;
            font-size: 26.4px;
            font-family: PingFang SC;
            font-weight: 600;
            line-height: 20.96px;
            letter-spacing: 16.8px;
            text-transform: uppercase;
            width: 100%;
          }

          .text_2 {
            color: #ffffff;
            font-size: 32px;
            font-family: PingFang SC;
            font-weight: 600;
            line-height: 30.08px;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .plan-slogin {
          margin-top: 10.56px;
          color: #ffffff;
          font-size: 16px;
          font-family: PingFang SC;
          line-height: 15.04px;
          letter-spacing: 4.8px;
        }
      }
      .plan-list {
        margin-top: 64px;

        .plan-list-item{
          padding: 5px 0;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .border{
          width: 2.56px;
          height: 0px;
          border: 0.8px dashed #FFFFFF;
          transform: rotate(90deg);
          margin: auto;
        }
      }
  }

  }

}

</style>
