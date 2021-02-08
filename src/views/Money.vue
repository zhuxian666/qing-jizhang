<template>
      <Layout>
            <Type/>
            <Notes/>
            <number-pad/>
      </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/NumberPad.vue';
  import Type from '@/components/Type.vue';
  import Notes from '@/components/Notes.vue';
  @Component({
        components: {Notes, Type, NumberPad}
  })
  export default class Money extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
