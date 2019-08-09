/*
 * @Description: Please Edit Description Info
 * @Author: chenfx
 * @Date: 2019-08-09 16:37:43
 * @LastEditTime: 2019-08-09 17:02:17
 */
const { add } = require('../../utils/util')

Page({
  data: {
    text: 'This is page data.',
    x: add(1, 2),
    taroText: 'This is taro component data......'
  },
  created(options) {
    console.log(options)
    // Do some initialize when page load.
  },
  onReady() {
    // console.log(this.selectComponent())
    // Do something when page ready.
  },
  // Event handler.
  // viewTap() {
  //   debugger;
  //   this.setData({
  //     text: 'Set some data for updating view.'
  //   }, function () {
  //     // this is setData callback
  //   })
  // },

  handler(e) {
    console.log(e)
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  taroHandler(e) {
    console.log('---taro component trigger', e)
    this.setData({
      text: 'taro components click handle change text.....'
    })
  },
  customData: {
    hi: 'MINA'
  }
})
