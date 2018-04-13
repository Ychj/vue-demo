<template>
  <div class="single-select-box">
    <div class="icon-box" v-if="params.iconShow || true && this.selectedVal" @click="clear()">X</div>
    <label class="label-title" :class="params.labelClass" v-if="params.labelName">{{params.labelName}}</label>
    <div class="select-list-box" @click="showSelectBox()">
      <input type="text" placeholder="请选择" v-model="this.selectedVal">
      <ul class="select-value-list" v-show="showList">
        <li v-if="!params.selectLists || !params.selectLists.length" class="no-list">没有可选项</li>
        <li v-for="(el,index) in params.selectLists" @click="selectThis(el)" v-else>{{el[params.showName] || el}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    import Index from './index';
    export default Index
</script>

<style scoped lang="less">
  @import "./index";
</style>
