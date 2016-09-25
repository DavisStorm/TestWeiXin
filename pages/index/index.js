//index.js
//获取应用实例
var app = getApp()

var indexData = {

  ads:[
        {
            "title": "",
            "img_url": "http://mall.520it.com/img/a1.jpg",

        },
        {
            "title": "",
            "img_url": "http://mall.520it.com/img/a2.jpg",

        },
        {
            "title": "",
            "img_url": "http://mall.520it.com/img/a3.jpg",

        },
        {
            "title": "",
            "img_url": "http://mall.520it.com/img/a4.jpg",

        },
        {
            "title": "",
            "img_url": "http://mall.520it.com/img/a5.jpg",

        }

  ],

  motto: [
   {"name":"Android学院"},
   {"name":"Android学院"},
  {"name":"UI学院"},
  {"name":"UI学院"},
   {"name":"IOS学院"},
   {"name":"IOS学院"},
  {"name":"Java学院"},
  {"name":"Java学院"},
  {"name":"C++学院"},
  {"name":"C++学院"},
  {"name":"H5学院"},
  {"name":"H5学院"}
  ]


}

Page({
  data: indexData,
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  button_xiaomage (){

     wx.navigateTo({
      url: '../logs/logs'
    })

  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  }
})
