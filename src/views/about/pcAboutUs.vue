<template>
<div class="flex-col pc-about-page">
    <!-- <YuanNav navTitle="关于我们" /> -->
    <div class="aboutus-content">
    <div class="bg-wrapper">
        <div class="flex-col aboutus-slogin">
        <div class="flex-col items-start group_1">
            <span class="text">about us</span>
            <span class="text_2">关于我们</span>
        </div>
        <span class="text_4">一起建设中国制造的全球共识</span>
        </div>
        <span class="text_6">元计划由深圳行者艺术与四川萃雅教育联合发行</span>
        <span class="text_7">
        行者数字艺术有限公司是一家专注动漫形象设计版权的公司，致力于打造原创动漫IP产业化，数字化。核心成员包括原上市公司研发中心副总裁、原香港知名地产公司运营部负责人、以及国际顶级设计师、网络知名小说家。旗下原创国潮科幻动漫IP《元计划》已和国内知名数藏平台唯一艺术达成战略合作，致力于发展动漫数字藏品与实体产业相互赋能，布局原创动漫全生态产业链。
        </span>
        <span class="text_8">
        四川萃雅教育科技有限公司是专注于中华文化传承教育的国有控股企业，四川萃雅教育始终立足文化自信，紧追新时代下中华文化发展的节奏，驻守文化根脉， 促进中华优秀文化传播传承。公司参与设立数字研究院为数字藏品提供专业的创意、设计和制作包装服务。
        </span>
    </div>
    <div class="other-wrapper">
        <div class="flex-col view_1">
        <div class="flex-col items-start group_3">
            <span class="text">about us</span>
            <span class="text_2">企业文化</span>
        </div>
        <span class="text_10">一起建设中国制造的全球共识</span>
        </div>
        <span class="text_12">
        我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。
        </span>
        <span class="text_13">希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！</span>
        <div class="flex-col items-start group_3 view_3">
        <span class="text">contact us</span>
        <span class="text_2">联系我们</span>
        </div>
        <div class="justify-between group_5">
        <div class="flex-col items-center">
            <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580709827727967799.png"
            class="image"
            />
            <span class="text_16">元计划公众号</span>
        </div>
        <div class="flex-col items-center">
            <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580709876124359559.png"
            class="image"
            />
            <span class="text_17">客服微信</span>
        </div>
        </div>
        <div class="flex-col group_9">
        <div class="flex-col items-center">
            <div class="justify-center group_11">
            <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16580704605694300981.png"
                class="image_2"
            />
            <span class="text_18">合作邮箱</span>
            </div>
            <span class="text_19">caijingya@xingzhe.team</span>
        </div>
        <div class="flex-col group_12">
            <div class="justify-center">
            <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16580704605682736546.png"
                class="image_2"
            />
            <span class="text_20">公司地址</span>
            </div>
            <span class="text_21">中国广东省深圳市南山区粤海街道高新南七道南面国信投资大厦603-1</span>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
// import YuanNav from '../../components/YuanNav.vue'

export default {
  // components: { YuanNav },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.pc-about-page {
padding: 0 0 48px;
background-color: #000000;
width: 100%;
overflow-y: auto;
overflow-x: hidden;
height: 100%;

.aboutus-content {
    display: flex;
    flex-direction: column;

    .bg-wrapper {
    padding: 64px 16px 0 16px;
    background-image: url('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/pc/aboutus/aboutusbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;

    .aboutus-slogin {
        text-align: center;

        .group_1 {
            padding-top: 16px;
            height: 36.96px;
            position: relative;
        }
        .text_4 {
            margin-top: 10.56px;
            color: #ffffff;
            font-size: 16px;
            font-family: PingFang SC;
            line-height: 15.04px;
            letter-spacing: 4.8px;
        }
    }
    .text_6 {
        margin-top: 51.04px;
        align-self: center;
        color: #ffffff;
        font-size: 10.08px;
        font-family: PingFang SC;
        line-height: 20px;
    }

    .text_7 {
        margin-top: 20px;
        color: #ffffff;
        font-size: 10.08px;
        font-family: PingFang SC;
        line-height: 20px;
    }
    .text_8 {
        margin-top: 32px;
        color: #ffffff;
        font-size: 10.08px;
        font-family: PingFang SC;
        line-height: 20px;
    }
    }

    .other-wrapper {
    padding: 0 16px;
    display: flex;
    flex-direction: column;

    .view_1 {
        margin-top: 78.56px;
        text-align: center;

        .text_10 {
        margin-top: 10.56px;
        color: #ffffff;
        font-size: 16px;
        font-family: PingFang SC;
        line-height: 15.04px;
        letter-spacing: 4.8px;
        }
    }
    .text_12 {
        margin-top: 51.04px;
        color: #ffffff;
        font-size: 10.08px;
        font-family: PingFang SC;
        line-height: 20px;
    }
    .text_13 {
        margin-top: 20px;
        color: #ffffff;
        font-size: 10.08px;
        font-family: PingFang SC;
        line-height: 20px;
    }
    .view_3 {
        margin-top: 78.56px;
        text-align: center;
    }
    .group_5 {
        margin-top: 35.52px;
        padding-left: 88.96px;
        padding-right: 88.48px;
        .image {
        width: 72.48px;
        height: 71.52px;
        }
        .text_16 {
        margin-top: 6.56px;
        color: #ffffff;
        font-size: 12px;
        font-family: PingFang SC;
        line-height: 11.04px;
        }
        .text_17 {
        margin-top: 6.56px;
        color: #ffffff;
        font-size: 12px;
        font-family: PingFang SC;
        line-height: 11.04px;
        }
    }
    .group_9 {
        margin-top: 30.08px;
        .group_12 {
        margin-top: 25.44px;
        align-self: center;
        width: 300px;
        .text_21 {
            margin-top: 12.96px;
            color: #ffffff;
            font-size: 12px;
            font-family: PingFang SC;
            line-height: 14.08px;
            letter-spacing: 1.2px;
            text-align: center;
        }
        .text_20 {
            margin: 3.04px 0 2.56px 8px;
            color: #ffffff;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 600;
            line-height: 15.04px;
            letter-spacing: 1.6px;
        }
        }
        .group_11 {
        padding: 0 28.48px;
        .text_18 {
            margin: 2.56px 9.44px 2.56px 7.52px;
            color: #ffffff;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 600;
            line-height: 15.04px;
            letter-spacing: 1.6px;
        }
        }
        .text_19 {
        margin-top: 8px;
        color: #ffffff;
        font-size: 12px;
        font-family: PingFang SC;
        line-height: 11.52px;
        letter-spacing: 1.2px;
        }
        .image_2 {
        width: 20px;
        height: 20px;
        }
    }
    .group_3 {
        padding-top: 16px;
        position: relative;
    }
    }

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

}
</style>
