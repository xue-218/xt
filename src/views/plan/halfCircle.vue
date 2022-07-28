<template>
  <div class="half-circle">
    <div :class="`left ${direction === 'left' && 'circle-active'}`" />
    <div :class="`right ${direction === 'right' && 'circle-active'}`" />
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  props: {
    direction: {
      default: 'left'
    }
  }
}
</script>

<style scoped lang="scss">
.half-circle {
  width: 10px;
  height: 10px;
  display: flex;
  border-radius: 50%;
  overflow: hidden;

  & > div {
    width: 50%;

    &.circle-active {
      background-color: #fff;
    }
  }

  .left {
    background-color: transparent;
  }

  .right {
    background-color: transparent;
  }
}
</style>
