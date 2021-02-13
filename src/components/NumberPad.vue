<template>
    <div class="numberPad">
        <div class="output">
            <Icon class="money" name="money1"/>
            <div class="outputNum">{{output}}</div>
        </div>
        <Tags :value.sync="record.tag" :type="record.type"/>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="del" class="delete"><b>删除</b></button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clear" class="clear"><b>清空</b></button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button @click="ok" class="ok"
                    :class="{[hash[type]]:hash[type]===hash[type],
                              selected:selected}"><b>确认</b></button>
            <button @click="inputContent" class="zero">0</button>
            <button @click="inputContent">.</button>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Tags from '@/components/Tags.vue';

  @Component({
    components: {Tags}
  })
  export default class NumberPad extends Vue {
    @Prop({default: '-', type: String})
    readonly type!: string;
    @Prop({default: 0, type: Number})
    readonly value!: number;
    get record(){
      return this.$store.state.record
    }
    output = '0';
    hash = {'-': 'zhi', '+': 'shou'};
    selected = false
    updated(){
        this.selected = parseFloat(this.output) !== 0;
    }
    inputContent(event: MouseEvent) {
      const button = event.target as HTMLButtonElement;
      const input = button.textContent as string;
      if (parseFloat(this.output)>100000){return;}
      if (this.output === '0') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ('0123456789'.indexOf(input!) !== -1) {
          this.output = input;
          return;
        }
      }
      const index = this.output.indexOf('.');
      if (index >= 0 && input === '.') {return;}
      if (index >= 0 && this.output.length - index > 2) {return;}

      this.output += input;
    }

    clear() {
      this.output = '0';
    }

    del() {
      this.output = this.output.slice(0, -1);
      if (this.output.length === 0) {
        this.output = '0';
      }
    }

    ok() {
      if(parseFloat(this.output)===0){alert('金额不能小于0.01元')}else {
        this.$emit('update:value', parseFloat(this.output));
        this.$emit('submit')
        this.clear();
      }

    }
  }
</script>

<style lang="scss" scoped>
    .numberPad {
        .output {
            display: flex;
            height: 8vh;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #E8E7E7;
            margin: 0 18px;
            padding-top: 2vh;
        }

        ::v-deep.tags {
            flex-shrink: 1;
        }

        .money {
            width: 25px;
            height: 25px;
        }

        .outputNum {
            font-family: Consolas, monospace;
            font-size: 32px;
        }

        .buttons {
            height: 30vh;
            background: #FBFBFB;
            margin-top: 1vh;

            button {
                width: 22%;
                height: 23%;
                border: none;
                float: left;
                background: #FFFFFF;
                margin-left: 2.4%;
                margin-top: 2%;
                border-radius: 4px;
            }

            & .ok {
                height: 50%;
                float: right;
                color: white;
                margin-right: 2.4%;
                margin-bottom: 2%;

                &.zhi {
                    background: #9CD7B7;
                }

                &.shou {
                    background: #F1D89F;
                }

                &.selected.zhi {
                    background: #3EB575;
                }

                &.selected.shou {
                    background: #E9B646;
                }
            }

            & .zero {
                width: 23.2*2%;
                margin-bottom: 2%;
            }
        }
    }
</style>
