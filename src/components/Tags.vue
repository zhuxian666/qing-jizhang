<template>
    <div class="tags">
        <div v-for="(val,key) in iconName"
             :key="key" class="iconWrapper"
             @click="onSelected(key)" :class="{selected:selectedTag===key}">
            <Icon :name="key"/>
            {{val}}
        </div>
        <div class="iconWrapper editWrapper"
             @click="editTags">
            编辑
            <Icon name="bianji"/>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    iconName = {
      fushi: '服饰', canyin: '餐饮',
      jiaotong: '交通',
      zhufang: '住房',
      gouwu: '购物',
      shenhuofuwu: '生活服务',
      xuexi: '学习',
      yule: '娱乐',
      yundong: '运动',
      lvyou: '旅游',
      jiudian: '酒店',
      qinzi: '亲子',
      chongwu: '宠物',
      yiliao: '医疗',
      qitarenqing: '其他人情',
      qita: '其他',
      huaban: '红包',
      zhuanzhang: '转账',

      qitarenqingshouru: '其他人情',
      shengyi: '生意',
      tuikuan: '退款',
      gongzi: '工资',
      jiangjin: '奖金',
      qitashouru: '其他',
      huabanshouru: '红包',
      zhuanzhangshouru: '转账',
      shangjiazhuangzhang: '商家转账',
    };
    @Prop({default: '服饰', type: String})
    readonly value!: string;
    selectedTag = this.value;

    onSelected(key: string) {
      this.selectedTag = key;
      this.$emit('update:value', key);
    }

    editTags() {
      this.$router.push('/editDetail')
    }
  }
</script>

<style lang="scss" scoped>
    .tags {
        display: flex;
        text-align: center;
        flex-wrap: wrap;
        justify-content: flex-start;
        max-height: 30vh;
        overflow: auto;

        .iconWrapper {
            border: 1px solid #D9D9D9;
            border-radius: 10%/20%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 28%;
            margin-left: 4%;
            margin-top: 2%;
            background: #FCFCFC;

            .icon {
                width: 24px;
                height: 24px;
            }
        }

        .iconWrapper.selected {
            background: #3EB575;
            color: white;
        }

        .editWrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 46.6px;
        }
    }

</style>
