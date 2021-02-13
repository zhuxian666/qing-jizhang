<template>
    <Layout>
    <div class="editTags">
        <Type :date="false" :type.sync="record.type"/>
        <div class="createWrapper" @click="createTag">追加新的标签
            <Icon name="bianji" class="create"/>
        </div>
        <ul>
            <li v-for="key in Object.keys(tagList)" :key="key">
                <div class="tag">
                    <Icon :name="tagList[key]"/>
                    <span>{{key}}</span>
                </div>
                <div class="del" @click="removeTag(key)">
                    <Icon name="shanchu"/>
                </div>
            </li>
        </ul>
    </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';

  @Component({
    components: {Type}
  })
  export default class EditDetail extends Vue {
    get record() {
      return this.$store.state.record;
    }

    get tagListZ() {
      return this.$store.state.tagListZ;
    }

    get tagListS() {
      return this.$store.state.tagListS;
    }

    get tagList() {
      if (this.record.type === '+') {
        return this.tagListS;
      } else {
        return this.tagListZ;
      }
    }
    created(){
      this.$store.commit('fetchTagListS')
      this.$store.commit('fetchTagListZ')
    }
    removeTag(key: string) {
      if (this.record.type === '+') {
        this.$store.commit('removeTagListS', key);
        this.$store.commit('saveTagListS')
      } else {
        this.$store.commit('removeTagListZ', key);
        this.$store.commit('saveTagListZ')

      }
      this.$forceUpdate();
    }

    createTag() {
      this.$router.push('/addTag')
    }
  }
</script>

<style lang="scss" scoped>
    .editTags {
        display: flex;
        /*flex-direction: column;*/
        justify-content: center;
        align-items: center;
        background: #ffffff;
        position: relative;
        flex-direction: column;

    }

    .createWrapper {
        height: 8vh;
        border-top: 1px solid #EEEDED;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 18px;
        border-bottom: 1px solid #EEEDED;

    }

    .create {
        margin-right: 8px;
    }

    .del {
        margin: 0 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon {
        width: 20px;
        height: 20px;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 72vh;
        width: 100vw;
        position: absolute;
        background: #EEEDED;
        top: 18vh;
        overflow: auto;

    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1vh 18px;
        width: 100%;
        background: #ffffff;
        border-bottom: 1px solid #EEEDED;
        margin: 0 18px;

        .tag {
            display: flex;
            align-items: center;

            .icon {
                margin-right: 8px;
                width: 22px;
                height: 22px;
            }
        }


    }
</style>
