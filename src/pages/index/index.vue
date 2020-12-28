<template>
  <div class="box">
    <header class="header">
      <button type="primary" @click="buttonClick('a')" style="margin:0 20rpx 10rpx 5rpx" size="small">动画</button>
      <button type="primary" @click="buttonClick('b')" style="margin:0 20rpx 10rpx 5rpx" size="small">漫画</button>
      <button type="primary" @click="buttonClick('c')" style="margin:0 20rpx 10rpx 5rpx" size="small">游戏</button>
      <button type="primary" @click="buttonClick('d')" style="margin:0 20rpx 10rpx 5rpx" size="small">文学</button>
      <button type="primary" @click="buttonClick('e')" style="margin:0 20rpx 10rpx 5rpx" size="small">原创</button>
      <button type="primary" @click="buttonClick('f')" style="margin:0 20rpx 10rpx 5rpx" size="small">来自网络</button>
      <button type="primary" @click="buttonClick('g')" style="margin:0 20rpx 10rpx 5rpx" size="small">其他</button>
      <button type="primary" @click="buttonClick('h')" style="margin:0 20rpx 10rpx 5rpx" size="small">影视</button>
      <button type="primary" @click="buttonClick('i')" style="margin:0 20rpx 10rpx 5rpx" size="small">诗词</button>
      <button type="primary" @click="buttonClick('g')" style="margin:0 20rpx 10rpx 5rpx" size="small">网易云</button>
      <button type="primary" @click="buttonClick('k')" style="margin:0 20rpx 10rpx 5rpx" size="small">哲学</button>
      <button type="primary" @click="buttonClick('i')" style="margin:0 20rpx 10rpx 5rpx" size="small">抖机灵</button>
      <button type="primary" @click="buttonClick('a')" style="margin:0 20rpx 10rpx 5rpx" size="small">其他</button>
    </header>
    <section class="section">
      <h1>{{title}}</h1>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  components: {},
  methods: {
    buttonClick(value) {
      let that = this;
      wx.request({
        url: `https://v1.hitokoto.cn?c=${value}`, //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          that.title = res.data.hitokoto;
        }
      })
    }
  },
  created() {
    // let app = getApp()
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 25rpx;
  margin-left: 20rpx;
}
.section{
  width: 100%;
  box-sizing: border-box;
  padding-left: 20rpx;
  padding-right: 20px;
  margin-top: 50rpx;
}
h1{
  font-size: 50rpx;
}
</style>
