<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money"/>
            <span>记账</span>
        </router-link>
        <router-link to="/detail" class="item" active-class="selected">
            <Icon name="detail"/>
            <span>明细</span>
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"/>
            <span>统计</span>
        </router-link>
    </nav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Nav extends Vue {

  }
</script>

<style lang="scss" scoped>
nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10vh;
    padding: 2px 0;
    background: #FFFFFF;
    /*<!--box-shadow: 0px -1px 10px -3px rgba(0,0,0,0.2);-->*/
    > .item{
        font-size: 12px;
        padding: 12px 0 8px;
        display: flex;
        flex-direction: column;
        width: 33.33333%;
        justify-content: center;
        align-items: center;
        .icon{
            width: 22px;
            height: 22px;
        }
    }
    .selected .icon,.selected span{
        color: #3EB575;
    }
}
</style>
