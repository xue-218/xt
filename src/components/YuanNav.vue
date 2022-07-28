<template>
  <div class="yuanjihua-nav">
    <div :class="`web-nav justify-between ${isScroll && 'web-nav-scrollbg'}`">
      <img
        src="../assets/logo.png"
        class="nav_active_image"
      />
      <div class="flex-row nav-list">
        <img class="active-light" :style="{ transform: `translateX(${translateX[active]}rem)` }" src="../assets/highlight.png" alt="" />
        <router-link
          v-for="(item, index) in routeInfo"
          :key="index"
          :class="`nav-item ${active === item.active && 'nav-active'}`" :to="item.path"
        >
          <span class="text">{{ item.title }}</span>
        </router-link>
      </div>
    </div>
    <div class="mobile-nav">
      <i class="nav-icon el-icon-back" @click="() => {this.$router.go(-1)}" />
      <span class="nav-title">{{pcNavTitle[active]}}</span>
      <div class="nav-icon-img" @click="() => {this.isNavModalShow = !this.isNavModalShow}">
        <img src="../assets/moreIcon.png" />
      </div>
      <div v-if="isNavModalShow" class="nav-list-modal" @click="onPcNavClick">
        <router-link class="nav-list-item" to="/">首页</router-link>
        <router-link class="nav-list-item" to="/about">关于我们</router-link>
        <router-link class="nav-list-item" to="/plan">规划图</router-link>
        <a class="nav-list-item" @click="navClick">图例展示</a>
        <a class="nav-list-item" @click="navClick">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    navTitle: {
      default: '元计划'
    }
  },
  data () {
    return {
      isScroll: false,
      active: 0,
      routeInfo: [
        {
          title: '首页',
          path: '/',
          active: 0
        }, {
          title: '关于我们',
          path: '/about',
          active: 1
        }, {
          title: '规划图',
          path: '/plan',
          active: 2
        }
        // {
        //   title: '图例展示',
        //   path: '/',
        //   active: 3
        // }
      ],
      translateX: [3.3, 8.8, 14.5, 20.2],
      pcNavTitle: ['元计划', '关于我们', '规划图'],
      navRelate: {
        homeIndex: 0,
        about: 1,
        plan: 2
      },
      isNavModalShow: false,
      scrollThrottle: this.debounce(this.handleScroll, 10)
    }
  },
  mounted () {
    if (screen.width > 600) window.addEventListener('scroll', this.scrollThrottle) // 监听页面滚动
  },
  destroyed () {
    if (screen.width > 600) window.removeEventListener('scroll', this.scrollThrottle) // 销毁滚动事件
  },
  methods: {
    navClick () {
      this.isNavModalShow = false
      this.$message({
        message: '即将开放!',
        duration: 1000,
        customClass: 'mobile-message'
      })
    },
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isScroll = scrollTop > 0
    },
    debounce (fn, delay) {
      var timer // 维护一个 timer
      return function () {
        var _this = this // 取debounce执行作用域的this
        var args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(function () {
          fn.apply(_this, args) // 用apply指向调用debounce的对象，相当于_this.fn(args);
        }, delay)
      }
    },
    onPcNavClick () {
    }
  },
  watch: {
    $route: {
      handler: function (to, from) {
        this.active = this.navRelate[to.name]
        this.isNavModalShow = false
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
  .yuanjihua-nav {
    width: 100%;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
  }

  .web-nav {
    padding: 0 8vw;
    height: 60px;
    background: transparent;

    &.web-nav-scrollbg {
      background-color: #000;
    }

    .nav_active_image {
      align-self: center;
      width: 100.48px;
      height: 35.04px;
    }

    .nav-list {
      margin-right: 8.48px;

      .active-light {
        width: 30px;
        height: 15px;
        transition: all 0.3s;
      }

      .nav-item {
        margin: 0 20.8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        justify-content: center;

        &.nav-active {
          & > .text {
            font-weight: 350;
          }
        }

        .high-light-img {
          width: 33.44px;
          height: 16.48px;
        }

        & > span {
          min-width: 33.44px;
        }
      }

      .text {
        align-self: center;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: 200;
        line-height: 12px;
        font-size: 14.4px;
      }
    }
  }

  .mobile-nav {
    padding: 0 5px;
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    .nav-icon {
      width: 44px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20.8px;
      cursor: pointer;
    }

    .nav-icon-img {
      padding: 10px;
      width: 44px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & > img {
        width: 20px;
        height: 20px;
      }
    }

    .nav-list-modal {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      right: 0;
      top: 44px;
      background-color: #fff;
      z-index: 99;

      .nav-list-item {
        width: 100%;
        height: 45px;
        padding: 0 15px;
        display: flex;
        // justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #000;

        &:not(:last-child) {
          border-bottom: 1px solid #eee;
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .web-nav {
      min-width: 1080px;
      padding: 0 80px;
    }
  }

  @media screen and (min-width: 600px) {
    .yuanjihua-nav {
      .web-nav {
        display: flex;
      }
      .mobile-nav {
        display: none;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .yuanjihua-nav {
      position: sticky;
      top: 0;

      .web-nav {
        display: none;
      }
      .mobile-nav {
        display: flex;
      }
    }
  }
</style>
