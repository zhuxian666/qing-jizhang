<template>
    <div class="layoutRapper">
        <div class="content">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Layout extends Vue {

  }
</script>

<style lang="scss" scoped>
.layoutRapper{
    display: flex;
    flex-direction: column;
    height: 100vh;

}
    .content{
        overflow: auto;
        flex-grow: 1;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>
