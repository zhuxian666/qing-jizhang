<template>
    <div class="numberPad">
        <div class="output">
            <Icon class="money" name="money1"/>
            <div class="outputNum">0</div>
        </div>
        <Tags/>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button class="delete"><b>删除</b></button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button class="clear"><b>清空</b></button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok zhi"><b>确认</b></button>
            <button class="zero">0</button>
            <button>.</button>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/Tags.vue';

  @Component({
    components: {Tags}
  })
  export default class NumberPad extends Vue {

  }
</script>

<style lang="scss" scoped>
    .numberPad {
        .output {
            display: flex;
            height: 8vh;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #E8E7E7;
            margin: 0 18px;
            padding-top: 2vh;
        }

        ::v-deep.tags {
            flex-shrink: 1;
        }

        .money {
            width: 1.6rem;
            height: 1.6rem;
        }

        .outputNum {
            font-family: Consolas, monospace;
            font-size: 2rem;
        }

        .buttons {
            height: 30vh;
            background: #FBFBFB;
            margin-top: 1vh;
            button {
                width: 22%;
                height: 23%;
                border: none;
                float: left;
                background: #FFFFFF;
                margin-left: 2.4%;
                margin-top: 2%;
                border-radius: 4px;
            }

            & .ok {
                height: 50%;
                float: right;
                color: white;
                margin-right: 2.4%;
                margin-bottom: 2%;
                &.zhi{
                    background: #9CD7B7;
                }
                &.shou{
                    background: #F1D89F;
                }
                &.selected.zhi{
                     background: #3EB575;
                }
                &.selected.shou{
                    background: #E9B646;
                }
            }

            & .zero {
                width: 23.2*2%;
                margin-bottom: 2%;
            }
        }
    }
</style>
