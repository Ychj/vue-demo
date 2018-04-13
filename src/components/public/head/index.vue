<template>
  <div id="head-box" class="head-box">
    <div id="menu">
      <router-link v-for="(el,index) in this.menuLists" :key="index" :to="el.path" class="title-content">{{el.title}}</router-link>
    </div>
  </div>
</template>

<script>
  import index from './index'
  export default index;
</script>

<style scoped>
  @import "./index.less";
</style>
