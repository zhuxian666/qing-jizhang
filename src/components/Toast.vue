<template>
    <div class="toast">
        <Icon name="yes"/>
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  @Component
  export default class Toast extends Vue {

  }
</script>

<style lang="scss" scoped>
   .toast{
       @keyframes in {
           0%{opacity: 0;transform: translateY(-100%)}
           100%{opacity: 1;}
       }
       animation: in .3s;
       background: #595959;
       color: white;
       position: fixed;
       z-index: 20;
       padding: 10px;
       border-radius: 4px;
       width: 90px;
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       align-items: center;
       top: 20px;
       left: 50%;
       margin-left: -45px;
       box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
       .icon{
           width: 16px;
           height: 16px;
           margin-right: 5px;
       }
   }

</style>
