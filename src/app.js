import { Block } from '@tarojs/components'

// Vue.config.productionTip = false

const App = {
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h(Block, this.$slots.default)
  }
}

export default App
