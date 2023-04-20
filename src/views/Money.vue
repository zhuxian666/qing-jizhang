<template>
      <Layout>
            <Type :value.sync="record.createAt"
                  :type.sync="record.type"/>
            <Notes :value.sync="record.notes" :cleal="clear"/>
            <number-pad :type="record.type" @submit="submit"
                        :value.sync="record.amount"/>
            <Toast v-if="clear">已保存</Toast>
      </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/NumberPad.vue';
  import Type from '@/components/Type.vue';
  import Notes from '@/components/Notes.vue';
  import Toast from '@/components/Toast.vue';
  @Component({
        components: {Toast, Notes, Type, NumberPad}
  })
  export default class Money extends Vue {
        get record(){
              return this.$store.state.record
        }
     created(){
           this.$store.commit('fetchRecordList')
           this.$store.commit('fetchTagListS')
           this.$store.commit('fetchTagListZ')
     }
     clear = false
     submit(){
           this.$store.commit('createdRecordList',this.record)
           this.record.notes=''
           this.clear=true
           setTimeout(()=>{
                 this.clear=false
           },1000)
     }
  }
</script>

<style lang="scss" scoped>

</style>
