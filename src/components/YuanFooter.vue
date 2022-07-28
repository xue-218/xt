<template>
  <div class="yuanjihua-footer">
    <div class="web-footer">
      @2022 深圳行者数学艺术有限公司官网 版权所有. 粤ICP备2022071585号-1
    </div>
    <div class="pc-footer">
      <div>@2022 深圳行者数字艺术有限公司官网 版权所有</div>
      <div>粤ICP备2022071585号-1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .yuanjihua-footer {
    .web-footer {
      padding: 24px 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10.08px;
      color: #fff;
    }

    .pc-footer {
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 10.08px;
      color: #fff;
    }
  }
  @media screen and (min-width: 600px) {
    .yuanjihua-footer {
      .pc-footer {
        display: none;
      }
      .web-footer {
        display: block;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .yuanjihua-footer {
      .pc-footer {
        display: block;
      }
      .web-footer {
        display: none;
      }
    }
  }
</style>
