<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  #app {
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    line-height: 1.5;
    background: #FBFAFA;
    color: #333333;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}
</style>
