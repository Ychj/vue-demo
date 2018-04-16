<template>
  <div id="page1">
    <h3 class="title">
      这是page1
    </h3>
    <div class="search-box">
      <singleSelect :params="selectParams[0]" ref="type"/>
      <singleSelect :params="selectParams[1]" ref="menu"/>
      <button @click="resetData()">重置</button>
    </div>
    <div class="echarts-box" id="pie-doughnut-box"></div>
  </div>
</template>

<script>
  import index from './index'
  export default index;
</script>

<style lang="less">
  @import "./index.less";
</style>
