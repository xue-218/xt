<template>
  <transition name="fade">
    <div @touchend="end" @touchstart="start" @touchmove="move" class="swiper">
      <div
        v-for="(item, index) in imgs"
        :key="item.id"
        :style="{ ...config5[index], width: '270px', height: '420px', opacity: 1, transition: '.4s' }"
        @click="chooseItem(item)"
      >
        <img :src="item.cover" style="width: 100%; height: 100%;" />
      </div>
    </div>
  </transition>
</template>
<script>
import storyFirst from '../../assets/pc/first.png'
import storySecond from '../../assets/pc/second.png'
import storyThird from '../../assets/pc/third.png'
import storyFourth from '../../assets/pc/fourth.png'
import storyDetail from '../../assets/pc/detail.png'

export default {
  name: 'swiper',
  data () {
    return {
      loading: true,
      currentIndex: 0, // 当前中间imgs数组中index
      centerInfo: '', // 当前中间信息
      startX: '',
      endX: '',
      defaultImgs: [storyFirst, storySecond, storyThird, storyFourth],
      imgs: [
        {
          id: 0,
          index: 0,
          cover: storyFirst,
          showDetail: false
        },
        {
          id: 1,
          index: 1,
          cover: storySecond,
          showDetail: false
        },
        {
          id: 2,
          index: 2,
          cover: storyThird,
          showDetail: false
        },
        {
          id: 3,
          index: 3,
          cover: storyFourth,
          showDetail: false
        }
      ],
      config5: [
        {
          position: 'absolute',
          top: '0px',
          left: ((screen.width - 270) / 2) + 'px',
          zIndex: 4
        },
        {
          position: 'absolute',
          top: '0px',
          left: ((screen.width) - 270 / 6) + 'px',
          zIndex: 3
        },
        {
          position: 'absolute',
          top: '0px',
          left: -300 + 'px',
          zIndex: 1
        },
        {
          position: 'absolute',
          top: '0px',
          left: -(270 / 6 * 5) + 'px',
          zIndex: 2
        }
      ]
    }
  },
  methods: {
    prev () {
      this.config5.push(this.config5.shift())
      this.centerIndex('prev')
    },
    next () {
      this.config5.unshift(this.config5.pop())
      this.centerIndex('next')
    },
    // 开始移动端滑动屏幕
    start (event) {
      this.startX = event.changedTouches[0].clientX
      this.startY = event.changedTouches[0].clientY
    },
    // 连续滑动
    move (event) {
      // this.endY = event.changedTouches[0].clientY
      // this.endX = event.changedTouches[0].clientX
      // this.stopDefault(event)
      // // 如果是滑动，注解（223行到231行）这段。如果是连续滑动，放开（223行到231行）注解
      // this.interval = this.endX - this.startX
      // if (this.interval > 40) {
      //   this.startX = this.endX
      //   this.prev()
      // }
      // if (this.interval < -40) {
      //   this.startX = this.endX
      //   this.next()
      // }
    },
    // 滑动
    end (event) {
      // 如果是滑动，放开（236行到238行）的注解。如果是连续滑动，注解（236行到238行）
      // this.endY = event.changedTouches[0].clientY;
      // this.endX = event.changedTouches[0].clientX;
      this.endY = event.changedTouches[0].clientY
      this.endX = event.changedTouches[0].clientX
      this.stopDefault(event)
      // 如果是滑动，注解（223行到231行）这段。如果是连续滑动，放开（223行到231行）注解
      this.interval = this.endX - this.startX
      if (this.interval > 40) {
        this.startX = this.endX
        this.prev()
      }
      if (this.interval < -40) {
        this.startX = this.endX
        this.next()
      }
    },
    // 阻止touchmove的横向默认事件（ios快捷操作会关闭页面）
    stopDefault (event) {
      const differenceY = this.endY - this.startY
      const differenceX = this.endX - this.startX
      if (Math.abs(differenceX) > Math.abs(differenceY)) {
        event.preventDefault()
      }
    },
    // 当前imgs在位置上的index（并非img数组的index）
    centerIndex (val) {
      if (val === 'prev') {
        for (const val of this.imgs) {
          if (val.index === this.imgs.length - 1) {
            val.index = 0
          } else {
            val.index = val.index + 1
          }
        }
      } else {
        for (const val of this.imgs) {
          if (val.index === 0) {
            val.index = this.imgs.length - 1
          } else {
            val.index = val.index - 1
          }
        }
      }
    },
    // 点击
    chooseItem (item) {
      if (item.index === this.currentIndex) {
        this.imgs[item.id].cover = item.showDetail ? this.defaultImgs[item.id] : storyDetail
        this.imgs[item.id].showDetail = !item.showDetail
        return
      }
      if (item.index === 1) this.next()
      if (item.index === 3) this.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper {
    width: 100%;
    height: 420px;
    position: relative;
    overflow: hidden;
    div {
      opacity: 0;
    }
  }
</style>
