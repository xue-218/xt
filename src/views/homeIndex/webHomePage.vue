<template>
  <div class="web-container">
     <video
      loop="loop"
      v-if="!isAndroid"
      ref="video"
      autoplay="autoplay"
      src="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_pc.mp4"
      poster="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_pc.mp4?x-oss-process=video/snapshot,t_100,f_jpg,w_1920,h_1080,m_fast"
      class="items-center justify-center banner"
      id="video-home"
      data-object-fit=""
      playsinline
      muted
      x5-playsinline
      webkit-playsinline="true"
      x5-video-player-type="h5"
      preload="auto"
    />
    <img v-else class="items-center justify-center banner" src="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_pc.webp"/>
    <div class="flex-col story_list">
      <div class="flex-row">
        <div :class="`flex-col story left-story ${sectionActive === 1 && 'left-active'}`" @click="(e) => setSectionActive(e, 1)">
          <div class="flex-col items-center story_label"><span class="text_5">第一章· 前序</span></div>
          <div :class="`cloes_active_icon ${sectionActive === 1 && 'icon_active'}`" @click="setSectionHidden">x</div>
          <span :class="`story_desc ${sectionActive === 1 && 'section_hidden'}`">
            在宇宙中的另一个巨大的恒星上，存在着一个已经繁衍进化了 ，1000万年的高等文明生物「元」，元类文明有着与人类高度相近的生活方式......
          </span>
          <div :class="`justify-between story_detail ${sectionActive === 1 && 'story_detail_active'}`">
            <div class="flex-col desc">
              <span>
                在宇宙中的另一个巨大的恒星上，存在着一个已经繁衍进化了1000万年的高等文明生物「元」，元类文明有着与人类高度相近的生活方式，但部分地区却掌握着远超人类文明的科技水准。身体机械化、灵魂移植术，这些人类看来非常科幻的技术，在这个世界已经常态化。
              </span>
              <span>
                虽然部分地区的文明程度极为发达，但由于星球体积过于庞大，约为地球的900万倍，导致星球上不同地域的族群。进化方向出现了较大的差异，星球北部的地质环境较为温和，居民文明程度高，对智慧与科技有着高度向往，而星球南部由于地质环境极其恶劣，并且重力远超北部星球100多倍，导致在长期的自然筛选下南部居民的身体进化得极为坚硬，且拥有着超乎想象的力量。
              </span>
              <span>
                星球北部的科学家对于南部有着非常迫切的探索欲望，在过去的数百万年里始终在尝试着越过赤道进入南半球进行探索，但似乎南半球从始至终，被一股从星球内核散发出神秘的磁场笼罩，无论通过任何方式都无法穿越屏障进入南半球，导致南北半球虽然同处一个星球，但从星球诞生以来从未有过任何形式的交流。
              </span>
              <span>
                终于，北半球各个国家联合组建了科考军团，对未知领域南半球发起了历史上，规模最大且参与国家及人数最多的一次探索，该行动被命名为「元计划」。
              </span>
              <span>
                南半球的文明程度远不及北半球，但似乎因为某种神秘物质的存在，导致了南半球的引力巨大，但同时因为这种神秘物质存在，所散发的磁场似乎赐予了南部族群，除坚硬与力量之外的另一种能力「通灵」，极少数的南部元类拥有着通灵的能力，他们从诞生以来就知道北部星球文明的存在，并且非常强烈的感知到这次北部的物种可能突破磁场进入南半球，他们不知道这意味着什么，也无法预料北半球族群的“入侵”，会给南半球带来什么样的后果。于是，南部通灵者开始召集南部族群，筹划针对北部“入侵”的保卫战。
              </span>
              <span>未完待续 更多内容关注公众号获取</span>
            </div>
            <div class="flex-col items-center scan_code_wrapper">
              <img
                src="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/scan.png"
                class="scan_image"
              />
              <span class="scan_code_title">元计划公众号</span>
            </div>
          </div>
          <img src="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/rightImg.png" :class="`section-more-icon  ${sectionActive === 1 && 'section_hidden'}`" />
        </div>
        <div :class="`flex-col story right-story ${sectionActive === 2 && 'right-active'}`" @click="(e) => setSectionActive(e, 2)">
          <div class="flex-col items-center story_label"><span class="text_5">第二章 · 起缘</span></div>
          <div :class="`cloes_active_icon ${sectionActive === 2 && 'icon_active'}`" @click="setSectionHidden">x</div>
          <span :class="`story_desc ${sectionActive === 2 && 'section_hidden'}`">
            三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大......
          </span>
          <div :class="`justify-between story_detail ${sectionActive === 2 && 'story_detail_active'}`">
            <div class="flex-col desc">
              <span>
                三个月前博士通过观测发现一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大。不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。
              </span>
              <span>
                非常巧合的是这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征出奇的相似。此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。
              </span>
              <span>
                如果数据分析得无误，这颗不明行星将会在218.5天后与元星球相撞，博士连续3天无休止地重复推演计算，但得到的结果与时间都是一样。于是博士连夜会见了国家首脑并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日。至此元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索充满着未知的风险。但他们别无选择因为博士深刻地明白也许只有南部存在的神秘物质，才是应对元末日唯一的办法。
              </span>
              <span>
                因为元星球是一颗恒星并且由于自身南北质量的极度不平衡，导致这颗恒星从未有过任何的星体运动，南部族群包括通灵者在内似乎对星球的危机并无感知，他们还在过着一如既往的“平静”生活，几个南部的勇士正在进行他们日常的狩猎行为，但今天的猎物似乎比往常大了一些。
              </span>
              <span>
                一月一次的南部祭祀这次似乎有了一些不同，通灵者的呼吸没有了以往的平静，他们感知到了北部的行动不知道这意味着什么，也不知道为何北部会如此大规模地进军南部，通灵者隐约地感知到这次北部进军不仅仅是探索，面对这目的不详的大规模“入侵”。通灵者感受到了一丝不安，因为通灵者世代相传着，一个关于南部族群存亡并且必须世代守护的秘密。
              </span>
              <span>未完待续 更多内容关注公众号获取</span>
            </div>
            <div class="flex-col items-center scan_code_wrapper">
              <img
                src="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/scan.png"
                class="scan_image"
              />
              <span class="scan_code_title">元计划公众号</span>
            </div>
          </div>
          <img src="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/rightImg.png" :class="`section-more-icon  ${sectionActive === 2 && 'section_hidden'}`" />
        </div>
      </div>
      <div :class="`flex-col story_3 ${sectionActive === 3 && 'active'}`" @click="(e) => setSectionActive(e, 3)">
        <div class="flex-col items-center story_label"><span class="text_5">第三章· 碰撞</span></div>
        <div :class="`cloes_active_icon ${sectionActive === 3 && 'icon_active'}`" @click="setSectionHidden">x</div>
        <span :class="`story3_desc  ${sectionActive === 3 && 'section_hidden'}`">
          元计划正式启动后，由博士领导各领域顶尖科学家团队，以及护卫军队随行。为不引起民众恐慌动乱，于夜色中秘密出发南部磁场边界，这一次打开红色电磁力场与以往不同，博士团队利用从异常行星采集的频率波段，对红磁场进行点对点式穿透果然不负众望，经过几天的尝试，连接南北半球的通道终于被打开......
        </span>
        <div :class="`justify-between story_detail ${sectionActive === 3 && 'story_detail_active'}`">
          <div class="flex-col desc">
            <span>
              元计划正式启动后由博士领导各领域顶尖科学家团队，以及护卫军队随行，为不引起民众恐慌动乱，于夜色中秘密出发南部磁场边界。这一次打开红色电磁力场与以往不同，博士团队利用从异常行星采集的频率波段，对红磁场进行点对点式穿透。果然不负众望，经过几天的尝试，连接南北半球的通道终于被打开。
            </span>
            <span>
              北部族对南半球认知非常有限，他们并不清楚通道的另一边是否有危险生物。军队上校提出清除障碍行动，博士表示反对第一次接触印象尤为重要，军队的行动容易被视为敌意行为。博士认为，科研队派出先锋小队作为外交使者。经过一番争论，上校妥协。但声明遇到威胁安全情况，军队命令与行动享优先权。
            </span>
            <span>
              与此同时，通灵者大会召集各族长以及各族优秀战士汇聚一堂，告知族人们，北部元类即将打开通道进入他们的领地。一直生存在肉弱强食南部世界，处于食物链顶端的各族长与战士表示：宣示主权，驱逐外来者！
            </span>
            <span>
              通灵者之首，巫祭认为事情没有那么简单，他们通过灵视看到过北部族科技力量，能轻易之间毁灭一个小部落，如今他们的武器装备远不及北部元类。尚不清楚对方来意不可轻举妄动。经讨论南部元类暂时遵巫祭所言，一边派出战士监督北部元类动作，一边集合战士守卫家园。
            </span>
            <span>
              另外一边，博士团队派出的无人机探测取样分析后，数据表示北部元类若在没有防护措施下进入南半球区域，有毒的空气将会在一分钟内使元类休克，五分钟后死亡。100倍的重力之下，进入南半球的元类都需穿戴特制的外附铠甲，以消除重力差异影响。博士团队与护卫军进入南半球部族，亲眼了解到这里的荒凉，飞沙走石不见绿。
            </span>
            <span>
              此行目的是寻找散发可见电磁波的高密度超重物质，这种物质被博士们团队命为“以太”，随着他们继续前进，以太信号探测器显示信号越清晰。追寻信号的第一天，他们见到了各类体型巨大的陆地生物。
            </span>
            <span>
              当天傍晚，博士团队突然遭受星犀牛群的攻击，博士判断是他们误闯了星犀牛领地，面对发怒的星犀牛群，士兵们本能反应拿起手中的激光枪反击防卫。意外地是小功率激光枪对星犀牛并没有作用，大功率激光枪，也并不能一击必杀星犀牛。一时之间，团队被冲散，不少士兵更是被星犀牛撞破防护面罩，中毒而亡。
            </span>
            <span>
              上校的侦察兵发现，这星犀牛群背后，隐藏着元皮肤外露于空气而行动敏捷，明显不是北部族同伴。绝对是南部蛮夷元类，设置如此卑鄙的陷阱！因被偷袭护卫军损失了几十名手下，上校怒不可遏。不顾博士的阻拦，上校发誓要报仇，为死去的战友讨回公道。上校取得最高指挥权，召集后援重火力部队，大批空中战斗侦察机从通道涌入。
            </span>
            <span>未完待续 更多内容关注公众号获取</span>
          </div>
          <div class="flex-col items-center scan_code_wrapper">
            <img
              src="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/scan.png"
              class="scan_image"
            />
            <span class="scan_code_title">元计划公众号</span>
          </div>
        </div>
        <img src="https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/rightImg.png" :class="`section-more-icon  ${sectionActive === 3 && 'section_hidden'}`" />
      </div>
    </div>
    <YuanFooter />
  </div>
</template>

<script>
import YuanFooter from '../../components/YuanFooter.vue'

export default {
  components: { YuanFooter },
  data () {
    return {
      sectionActive: false,
      currentIndex: 0,
      timer: null,
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
  },
  methods: {
    setSectionActive (e, activeIndex) {
      if (!this.sectionActive) this.sectionActive = activeIndex
    },
    setSectionHidden (e) {
      e.stopPropagation()
      this.sectionActive = false
    }
  }
}
</script>

<style scoped lang="scss">
.web-container {
    display: flex;
    flex-direction: column;

    .banner {
      height: 56vw;
      min-height: 100%;
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;

      .image_2 {
        width: 20.8vw;
        height: 7.2vw;
      }

      .text_4 {
        margin-top: 1vw;
        color: #ffffff;
        font-size: 4.4vw;
        font-family: "Microsoft YaHei";
        font-weight: bold;
      }
    }

    .story_list {
      // margin-top: 5.7vw;
      padding: 0 5.7vw;
      position: relative;
      cursor: pointer;
      .story_detail {
        display: none;
        height: 29.3vw;
        flex: 1;
        opacity: 0;
        margin-top: 2vw;
        font-size: 1.2vw;
        align-items: flex-end;
        font-family: PingFang SC;

        &.story_detail_active {
          display: flex;
          opacity: 1;
        }

        .desc {
          line-height: 2.2vw;
          width: 60%;
          height: 100%;
          overflow: scroll;

          & > span {
            text-indent:24px;
            color: #ffffff;
            text-align: justify;

            &:not(:first-child) {
              margin-top: 8px;
            }
          }
        }

        .scan_code_wrapper {
          .scan_image {
            width: 6.5vw;
            height: 6.5vw;
          }
          .scan_code_title {
            margin-top: 5.28px;
            color: #ffffff;
            font-size: 1.2vw;
          }
        }
      }

      .cloes_active_icon {
        width: 2vw;
        height: 2vw;
        position: absolute;
        right: 1vw;
        top: 1vw;
        font-size: 1.5vw;
        background-color: #fff;
        opacity: 0.8;
        border-radius: 50%;
        color: #000;
        display: none;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;

        &.icon_active {
          display: flex;
        }
      }

      .story_label {
        width: 8.5vw;
        height: 2.3vw;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;

        .text_5 {
          color: #000000;
          font-family: PingFang SC;
          font-weight: 600;
        }
      }

      .story {
        padding: 4.3vw 2.7vw 5.4vw;
        height: 23.4vw;
        width: 50%;
        margin-right: 0%;
        background-color: #000d22;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        position: relative;
        transition: all 0.5s;
        z-index: 3;
        overflow: hidden;
        font-size: 1.2vw;

        &.left-story {
          background-image: url('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/session1@2x.png');
        }

        &.right-story {
          background-image: url('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/session2@2x.png');
        }

        &.left-active {
          height: 46.8vw;
          width: 100%;
          margin-right: -50%;
          z-index: 10;
          margin-bottom: -23.4vw;
          cursor: default;
        }

        &.right-active {
          height: 46.8vw;
          width: 100%;
          margin-left: -50%;
          z-index: 10;
          margin-bottom: -23.4vw;
          cursor: default;
        }

        .story_desc {
          margin-top: 1.1vw;
          line-height: 2.2vw;
          width: 24.4vw;
          text-align: left;
          color: #ffffff;
          font-family: PingFang SC;
          text-indent: 2em;
          &.section_hidden {
            display: none;
          }
        }
      }

      .story_3 {
        height: 23.4vw;
        padding: 4.3vw 2.7vw 5.4vw;
        margin-top: 0;
        background-image: url('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/session3@2x.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        transition: all 0.5s;
        z-index: 3;
        text-align: left;
        position: relative;
        font-size: 1.2vw;
        &.active {
          height: 46.8vw;
          margin-top: -23.4vw;
          background-size: cover;
          background-position: 55% 100%;
          cursor: default;
        }

        .story3_desc {
          margin-top: 1.1vw;
          line-height: 2.2vw;
          text-align: left;
          color: #ffffff;
          font-family: PingFang SC;
          width: 60%;
          text-indent: 2em;
          &.section_hidden {
            display: none;
          }
        }
      }

    }

    .section-more-icon {
      margin-top: 2vw;
      width: 3.125vw;
      height: 0.52vw;

      &.section_hidden {
        display: none;
      }
    }
}

@media screen and (max-width: 1080px) {
  .web-container {
    .banner {
      .image_2 {
        width: 224px;
        height: 80px;
      }

      .text_4 {
        margin-top: 11.2px;
        font-size: 48px;
      }
    }
    .story_list {
      height: 492.96px;
      margin-top: 56.48px;
      padding: 0 55.52px;
      .story_label {
        height: auto;
        border-radius: 2.56px;
        width: 82.56px;
        padding: 6.56px 0 6.72px;

        .text_5 {
          line-height: 10.24px;
        }
      }
      .story {
        height: 247px;
        padding: 40.96px 26.88px 47.36px;
        font-size: 11.04px;

        &.left-active {
          height: 494px;
          margin-bottom: -247px;
        }

        &.right-active {
          height: 494px;
          margin-bottom: -247px;
        }

        &.active {
          height: 493.76px;
          margin-bottom: -247px;
        }
        .story_desc {
          text-align: left;
          margin-top: 11.68px;
          color: #ffffff;
          line-height: 22.08px;
          font-size: 10.08px;
          width: 230.08px;
        }
      }
      .story_3 {
        padding: 41.76px 26.56px 47.04px;
        height: 247px;
        font-size: 11.04px;
        &.active {
          height: 492.96px;
          margin-top: -247px;
        }
      }
      .story_detail {
        height: 336px;
        flex: 1;
        font-size: 10.08px;
        margin-top: 24px;

        .desc {
          width: 60%;
          height: 100%;
          line-height: 22.08px;
          overflow: scroll;

          & > span {
            &:not(:first-child) {
              margin-top: 8px;
            }
          }
        }

        .scan_code_wrapper {
          .scan_image {
            width: 66.56px;
            height: 66.08px;
          }
          .scan_code_title {
            margin-top: 5.28px;
            font-size: 10.08px;
          }
        }
      }
      .cloes_active_icon {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 24px;
      }
    }
    .section-more-icon {
      margin-top: 16px;
      width: 30.56px;
      height: 5.76px;
    }
  }
}
</style>
