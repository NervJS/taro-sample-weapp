/*
 * @Description: Please Edit Description Info
 * @Author: chenfx
 * @Date: 2019-08-09 16:38:44
 * @LastEditTime: 2019-08-09 17:10:05
 */
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './tabTaro.scss'

@withWeapp('Component')
class _C extends Taro.Component {
  static defaultProps = {
    myProperty: ''
  }
  behaviors = []
  _observeProps = [
    {
      name: 'myProperty',
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    }
  ]
  state = {}
  attached = () => { }
  moved = () => { }
  detached = () => { }
  componentWillMount = () => {
    console.log('----taro component will mount')
  }
  componentDidMount = () => {
    console.log('----taro component did mount')
  }
  componentDidShow = () => {
    console.log('----taro component did show myProperty data:', this.props.myProperty)
  }
  onMyButtonTap = () => {
    this.setData({
      // 更新属性和数据的方法与更新页面数据的方法类似
    })
  }
  _myPrivateMethod = () => {
    // 这里将 data.A[0].B 设为 'myPrivateData'
    this.setData({
      'A[0].B': 'myPrivateData'
    })
  }
  _propertyChange = (newVal, oldVal) => { }
  clickHandler = () => {
    debugger;
    console.log('sdsd')
    this.triggerEvent('myevent', { f: 1 })
    // !!this.props.onMyevent && this.props.onMyevent({ f: 1 })
  }
  config = {
    component: true
  }

  render() {
    const { myProperty: myProperty, myProperty2: myProperty2 } = this.props
    const { } = this.state
    return (
      <View className='tab' onClick={this.clickHandler}>
        {myProperty}
      </View>
    )
  }
}

export default _C
