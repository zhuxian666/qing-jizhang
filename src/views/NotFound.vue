<template>
    <div class="notFount">
        <div>
            <span class="four">4</span>
            <span class="zero">0</span>
            <span class="four1">4</span>
        </div>
        你访问的页面不存在请
        <router-link to="/" class="goaBack">返回首页
        </router-link>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NotFound extends Vue {

  }
</script>

<style lang="scss" scoped>
    .notFount {
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .four {
            color: #EA4335;
            font-size: 100px;
        }
        .zero {
            color: #FBBC05;
            font-size: 100px;

        }
        .four1 {
            color: #44A759;
            font-size: 100px;
        }
        div{
            display: flex;
            justify-content: center;
            padding-top: 100px;
            width: 100%;
        }
        .goaBack{
            color: #4285F4;
        }
    }
</style>
