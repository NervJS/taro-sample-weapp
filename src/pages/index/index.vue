<template>
  <view class='index'>
    <tab @Myevent={tabEvent} myProperty='This is tab' />
    <view class='title'>与小程序原生融合的各种示例</view>
    <view class='main'>
      <view class='wrapper'>
        <button type='primary' @tap="gotoWxParse">wxParse 示例</button>
      </view>
      <view class='wrapper'>
        <button type='primary' @tap="gotoEcharts">echarts-for-weixin 示例</button>
      </view>
      <view class='wrapper'>
        <button type='primary' @tap="gotoNative">混写原生页面示例</button>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import './index.scss'

export default {
  methods: {
  tabEvent (e) {
    console.log(e)
  },

  gotoWxParse () {
    Taro.navigateTo({
      url: '/pages/wxParse/wxParse'
    })
  },

  gotoEcharts () {
    Taro.navigateTo({
      url: '/pages/echarts/echarts'
    })
  },

  gotoNative () {
    Taro.navigateTo({
      url: '/pages/native/native'
    })
  }
  }
}
</script>
