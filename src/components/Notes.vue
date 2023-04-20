<template>
    <div class="notes">
        <label class="formItem">
            <Icon class="name" name="beizhu"/>
            <input type="text" maxlength="30" :value="msg"  placeholder="在这里写点备注吧!"
            @input="onValueChange($event.target.value)">
            <span class="num">{{msg.length + '/30'}}</span>
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    @Prop({default:'',type:String})
    value!: string
    onValueChange(event: string){
      this.$emit('update:value',event)
    }

    get msg(){
      return this.value
    }

  }
</script>

<style lang="scss" scoped>
    .notes {
        height: 8vh;
        .formItem {
            display: flex;
            align-items: center;
            margin: 0 18px;
            border-bottom: 1px solid #EBE9E9;

            .name {
                padding-left: 4px;
                width: 24px;
                height: 24px;
            }

            input {
                padding-left: 16px;
                flex-grow: 1;
                border: none;
                height: 8vh;
                color: #A09E9E;
                background: #FBFAFA;
            }
            .num {
                color: #A09E9E;
            }
        }
    }
</style>
