<template>
    <div class="notes">
        <label class="formItem">
            <Icon class="name" name="beizhu"/>
            <input type="text" :value="value"  placeholder="在这里写点备注吧!"
            @input="onValueChange($event.target.value)">
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    @Prop({default:'',type:String})
    readonly value!: string
    onValueChange(event: string){
      this.$emit('update:value',event)
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
                padding-left: .2rem;
                width: 1.4rem;
                height: 1.4rem;
            }

            input {
                padding-left: 16px;
                flex-grow: 1;
                border: none;
                height: 8vh;
                color: #A09E9E;
                background: #FBFAFA;
            }
        }
    }
</style>
