//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hitokoto: 'test',
    // motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  data:{
    test : '',
    hasUserInfo:false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getHitokotoResp:function(){
    wx.request({
      url: 'https://v1.hitokoto.cn', //路由
      // data:{   //数据
      //   "name":"egon"
      // },
      method:"GET",//请求方法
      // header:{ //请求头
      //   "content-type":"application/json"
      // },
      // success(e){ //回调
      //     //e为后台返回的值
      //   app.setData 
      //   console.log(app.globalData.test)
      // }
      success : res => {
        // app['hitokoto'] = res.data.hitokoto
        this.setData({
          hitokoto: res.data.hitokoto
        })
      }
    })
  }
})
