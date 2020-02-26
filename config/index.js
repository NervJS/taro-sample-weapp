const config = {
  projectName: 'taro-sample-weapp',
  date: '2018-9-10',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  framework: 'vue',
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/components/wxParse/wxParse.wxss', to: 'dist/components/wxParse/wxParse.wxss'},
      { from: 'src/components/wxParse/wxParse.wxml', to: 'dist/components/wxParse/wxParse.wxml'}
    ],
    options: {}
  },
  weapp: {
    compile: {
      exclude: ['src/components/ec-canvas/echarts.js']
    },
    module: {
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {

      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
