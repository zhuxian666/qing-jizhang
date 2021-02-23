<template>
    <div class="tags">
        <template v-if="edit">
            <div v-for="key in Object.keys(iconName)"
                 :key="key" class="iconWrapper"
                 @click="onSelected(key,iconName[key])"
                 :class="{selected:selectedTag.name===key,
             [hash[type]]:hash[type]===hash[type],}">
                <Icon :name="iconName[key]"/>
                {{key}}
            </div>
            <div class="iconWrapper editWrapper"
                 @click="editTags">
                编辑
                <Icon name="bianji"/>
            </div>
        </template>
        <template v-else>
            <div v-for="key in Object.keys(tagLists)"
                 :key="key" class="iconWrapper noEdit"
                 @click="onAddSelected(key,tagLists[key])"
                 :class="{selected:addSelected.val===tagLists[key],[hash[type]]:true}">
                <Icon :name="tagLists[key]"/>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  import tagLists from '@/constants/tagLists'

  @Component
  export default class Tags extends Vue {
    get iconNameZ(){
      return this.$store.state.tagListZ
    }
    get iconNameS(){
      return this.$store.state.tagListS
    }
    tagLists = tagLists
    @Prop({ type: Object})
    readonly value!: tag;
    @Prop({default: '-', type: String})
    readonly type!: string;
    @Prop({default: true, type: Boolean})
    readonly edit!: boolean;
    hash = {'-': 'zhi', '+': 'shou'};
    get iconName() {
      if (this.type === '+') {
        return this.iconNameS;
      }  else {
        return this.iconNameZ
      }
    }
    @Watch('iconName',{immediate:true})
    onIconNameChange(){
      this.selectedTag.name = Object.keys(this.iconName)[0];
    }
    @Watch('tagLists',{immediate:true})
    onTagListsChange(){
      this.addSelected.val = Object.values(this.tagLists)[0];
    }
    selectedTag = this.record.tag
     get record(){
      return this.$store.state.record
     }
    addSelected = {} as tag
    onSelected(key: string,val: string) {
      this.selectedTag = {name:key, val: val};
      this.$emit('update:value', this.selectedTag);
    }
    onAddSelected(key: string,val: string){
       this.addSelected = {name:key,val:val}
      this.$emit('update:value', this.addSelected);

    }
    editTags() {
      this.$router.push('/editTags');
    }
  }
</script>

<style lang="scss" scoped>
    .tags {
        height: 30vh;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        &::-webkit-scrollbar {
            display: none;
        }
        .iconWrapper {
            border: 1px solid #D9D9D9;
            height: 48px;
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

        .iconWrapper.selected.zhi {
            background: #3EB575;
            color: white;
        }

        .iconWrapper.selected.shou {
            background: #E9B646;
            color: white;
        }

        .editWrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 48px;
        }
        .noEdit{
            height: 8vh;
        }
    }
</style>
