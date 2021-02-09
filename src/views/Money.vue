<template>
      <Layout>
            <Type :value.sync="record.createAt"
                  :type.sync="record.type"/>
            <Notes :value.sync="record.notes"/>
            <number-pad :type="record.type" @submit="submit"
                        :value.sync="record.amount"/>
      </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/NumberPad.vue';
  import Type from '@/components/Type.vue';
  import Notes from '@/components/Notes.vue';
  @Component({
        components: {Notes, Type, NumberPad}
  })
  export default class Money extends Vue {
        get record(){
              return this.$store.state.record
        }
     @Watch('record',{deep:true})
        onRecordChange(val: RecordItem){
           console.log(val.type,val.amount,val.createAt,val.notes,val.tag.name);
     }
     created(){
           this.$store.commit('fetchRecordList')
           this.$store.commit('fetchTagListS')
           this.$store.commit('fetchTagListZ')
     }
     submit(){
           this.$store.commit('createdRecordList',this.record)
           this.$store.commit('saveRecordList')
           this.record.notes=''
     }
  }
</script>

<style lang="scss" scoped>

</style>
