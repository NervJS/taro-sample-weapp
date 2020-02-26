<template>
  <view>
    <wxparse :html="html" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      html: `<div style="color: red">我是HTML代码</div>`
    }
  }
}
</script>

<style>

</style>
