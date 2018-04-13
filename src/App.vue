<template>
  <div id="app" @click="clickRoot">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
  import Menu from './components/public/head/index.vue';
  export default {
    name: 'App',
    components:{
      Menu
    },
    methods: {
      clickRoot() {
        // 关闭下拉框
        this.SelectObserve.publish('hide');
      }
    }
  }
</script>

<style lang="less">
  @import "./commons/less/common.less";
  #app {
    height: 100%;
  }
</style>
