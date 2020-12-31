<template>
  <div class="box">
    <header class="header">
      <div v-for="(item,index) in buttonList" :key="index" class="button" @click="buttonClick(item.value,item.background)" :style="{background:item.background}">
        {{item.name}}
      </div>
    </header>
    <section class="section">
      <h2 :style="{color:color}">{{title}}</h1>
    </section>
  </div>
</template>

<script src="js/vertex.js"></script>
<script src="js/index.js"></script>
<script>
export default {
  data() {
    return {
      title: '',
      color: '',
      buttonList: [{
        background: '#DC143C',
        color: '',
        name: '动画',
        value: 'a'
      }, {
        background: '#FF1493',
        color: '',
        name: '漫画',
        value: 'b'
      }, {
        background: '#2E8B57',
        color: '',
        name: '游戏',
        value: 'c'
      }, {
        background: '#EE82E9',
        color: '',
        name: '原创',
        value: 'e'
      }, {
        background: '#D2691E',
        color: '',
        name: '网络',
        value: 'f'
      }, {
        background: '#008B8B',
        color: '',
        name: '其他',
        value: 'g'
      }, {
        background: '#FFA500',
        color: '',
        name: '影视',
        value: 'h'
      }, {
        background: '#FA8072',
        color: '',
        name: '诗词',
        value: 'i'
      }, {
        background: '#00BFFF',
        color: '',
        name: '哲学',
        value: 'k'
      }, {
        background: '#48D1CC',
        color: '',
        name: '网易云',
        value: 'g'
      }, {
        background: '#800000',
        color: '',
        name: '抖机灵',
        value: 'i'
      }]
    }
  },
  components: {},
  methods: {
    buttonClick(value,color) {
      this.color = color;
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
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin:0 20rpx 10rpx 5rpx;
    border-radius: 10px;
}
</style>
