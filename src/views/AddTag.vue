<template>
    <Layout>
    <div class="addTag">
        <div class="title" :class="{[hash[record.type]]:true}">
            <span><b>{{title + '新标签'}}</b></span></div>
        <div>
            <label class="TagName">
                <span class="name">标签名</span>
                <input class="inputName" type="text" placeholder="标签名不可重复" maxlength="4" v-model="value">
                <span class="num">{{value.length + '/4'}}</span>
            </label>
        </div>
        <Tags :type.sync="record.type" :edit="false" :value.sync="tag"/>
        <div class="ok" :class="{[hash[record.type]]:true}" @click="submit"><b>确认</b></div>
    </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/Tags.vue';

  @Component({
    components: {Tags}
  })
  export default class AddTag extends Vue {
    get record() {
      return this.$store.state.record;
    }

    get tagListZ() {
      return this.$store.state.tagListZ;
    }

    get tagListS() {
      return this.$store.state.tagListS;
    }

    tag = this.record.tag;
    value = '';
    title = '';
    hash = {'-': 'zhi', '+': 'shou'};

    created() {
      if (this.record.type === '+') {
        this.title = '收入';
      } else {
        this.title = '支出';
      }
    }

    submit() {
      if(this.value==='全部'){
        window.alert('输入的标签名不可用');
        return;
      }
      if (this.value.length === 0) {
        window.alert('输入标签啊');
        return;
      }
      if (this.record.type === '+') {
        if (Object.keys(this.tagListS).indexOf(this.value) >= 0) {
          window.alert('标签名重复了');
          return;
        }
        console.log({name: this.value, val: this.tag.val});
        this.$store.commit('createdTagListS', {name: this.value, val: this.tag.val});
        this.$store.commit('saveTagListS');
        window.alert('添加成功');
      } else {
        if (Object.keys(this.tagListZ).indexOf(this.value) >= 0) {
          window.alert('标签名重复了');
          return;
        }
        this.$store.commit('createdTagListZ', {name: this.value, val: this.tag.val});
        this.$store.commit('saveTagListZ');
        window.alert('添加成功');
      }
      this.value = '';
    }

  }
</script>

<style lang="scss" scoped>
    .addTag {
        height: 100vh;

        .zhi {
            color: #3EB575;
        }

        .shou {
            color: #E9B646;
        }

        .ok {
            height: 8vh;
            width: 40vw;
            border: 1px solid #EEEDED;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10vh;
            border-radius: 10%/25%;

            &.zhi {
                color: white;
                background: #3EB575;
            }

            &.shou {
                color: white;
                background: #E9B646;
            }
        }

        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 10vh;
            font-size: 24px;
            border-bottom: 1px solid #EEEDED;
        }

        .TagName {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 8vh;
            border-bottom: 1px solid #EEEDED;

            .name {
                margin: 0 18px;
                font-size: 16px;
            }

            .inputName {
                flex-grow: 1;
                border: none;
                font-size: 16px;
                background: inherit;
                height: 8vh;
                margin-right: 8px;
            }

            .num {
                color: #A09E9E;
                margin-right: 18px;
            }
        }
    }
</style>
