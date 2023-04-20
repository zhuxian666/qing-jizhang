<template>
    <div class="types">
        <div class="type">
            <div class="zhi" @click="select('-')"
                 :class="type==='-'&& 'selected'">支出</div>
            <div class="shou" @click="select('+')"
                 :class="type==='+'&& 'selected'">收入</div>
        </div>
        <template v-if="date">
            <label>
                <input type="date" :value="getT(value)"
                       @input="onTimeChange($event.target.value)"
                       class="date">
            </label>
        </template>

    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  @Component
  export default class Notes extends Vue {
    @Prop({default:true,type:Boolean})
    readonly date?: boolean
    @Prop({default:'',type:String})
    readonly value?: string
    @Prop({default:'-',type:String})
    readonly type!: string
    select(type: string) {
      this.$emit('update:type',type)
    }
    getT(isoString: string){
      return dayjs(isoString).format('YYYY-MM-DD')
    }
    onTimeChange(event: string){
      this.$emit('update:value',event)

    }
  }
</script>

<style lang="scss" scoped>
    .types {
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #FFFFFF;
        padding: 0 18px;

        .type{
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 200px;
            > div{
                width: 15vw;
                font-size: 12px;
                text-align: center;
                margin: 0 5px;
                background: #F1F1F1;
                border-radius: 10%/20%;
                padding: 5px 4px;
            }
        }
        .zhi.selected {
             background: #ECF8F1;
            border: 1px solid #44B779;
            color: #44B779;
        }
        .shou.selected{
            background: #FBF7EB;
            border: 1px solid #E3D48D;
            color: #E3D48D;
        }
        input {
            padding-left: 16px;
            border: none;
            height: 8vh;
            color: #A09E9E;
            background: #FBFAFA;
        }
        .date {
            border: 1px solid #D9D9D9;
            height: 4vh;
            border-radius: 4px;
            width: 140px;
            background-color:transparent;
            color:#A09E9E;
        }
    }
</style>
