<template>
    <Layout>
        <div class="detail">
            <div class="bar"><span><b>明细</b></span></div>
            <div class="select">
                <div class="typeButton">
                    <div class="zhi" @click="type='-'">支出</div>
                    <div class="line"></div>
                    <div class="shou" @click="type='+'">收入</div>
                </div>
                <ul class="types">
                    <li v-for="key in tagList" class="type"
                        :key="key" @click="showCard(key)"
                        :class="{selected:selectedItem===key}">{{key}}
                    </li>
                </ul>
            </div>
            <div class="cardList">
                <template v-if="timeList.length">
                    <ul class="listItem">
                        <li class="item" v-for="(item,index) in timeList" :key="index">
                            <div class="wrapper">
                                <div class="liBar">
                                    <h3>{{beautify(item.title)}}</h3><span class="total">￥ {{type}}{{item.total}}</span>
                                </div>
                                <v-touch v-for="val in item.items"
                                         v-on:panleft="swipeleft(val)"
                                         v-on:panright="swiperight(val)"
                                         :key="val.id"
                                         class="touch">
                                    <div class="touchContent" :ref="'touch-'+ val.id">
                                        <div class="tagName">
                                            <Icon :name="val.tag.val"/>
                                            <span>{{val.tag.name}}</span>
                                        </div>
                                        <div class="notes">{{val.notes}}</div>
                                        <div class="amount">
                                            <span>{{val.type}}</span>
                                            <span>{{val.amount}}</span>
                                        </div>
                                        <div class="remove" @click="removeItem(val.id)">
                                            <div>删除</div>
                                        </div>
                                    </div>
                                </v-touch>
                            </div>
                        </li>
                    </ul>
                </template>
                <template v-else>
                    <div class="nothing">
                        <Icon class="none" name="none"/>
                        还没有记账
                        <div class="jizhang" @click="$router.push('/money')"><b>记一笔</b></div>
                    </div>
                </template>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import clone from '@/lib/clone';
  import dayjs from 'dayjs';

  @Component
  export default class Detail extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }

    get tagListZ() {
      return this.$store.state.tagListZ as tagListZ;
    }

    get tagListS() {
      return this.$store.state.tagListS as tagListS;
    }

    get tagList() {
      if (this.type === '+') {
        const list1 = clone(this.tagListS);
        const list2 = Object.keys(list1);
        list2.unshift('全部');
        return list2;
      } else {
        const list1 = clone(this.tagListZ);
        const list2 = Object.keys(list1);
        list2.unshift('全部');
        return list2;
      }
    }

    swipeleft(val: RecordItem) {
        (this.$refs['touch-'+ val.id] as HTMLDivElement[])[0].style.transform='translateX(-20vw)'
    }
    swiperight(val: RecordItem) {
        (this.$refs['touch-'+ val.id] as HTMLDivElement[])[0].style.transform='none'
    }
    removeItem(id: number) {
      this.$store.commit('removeRecord', id);
    }

    beautify(string: string) {
      const day = dayjs(string);
      const now = dayjs();
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
      } else if (day.isSame(now, 'year')) {
        return day.format('M月D日');
      } else {
        return day.format('YYYY年M月D日');
      }
    }

    created() {
      this.$store.commit('fetchRecordList');
      this.$store.commit('fetchTagListS');
      this.$store.commit('fetchTagListZ');
    }

    type = '-';
    selectedItem = '' || this.tagList[0];

    add(item: string) {
      this.type = item;
    }

    showCard(key: string) {
      this.selectedItem = key;
    }

    get group() {
      if (this.selectedItem === this.tagList[0]) {
        return this.recordList.filter((item: RecordItem) => {return item.type === this.type;});
      } else {
        return this.recordList.filter((item: RecordItem) => {return item.tag.name === this.selectedItem;});
      }
    }

    @Watch('type')
    onTypeChange() {
      this.selectedItem = this.tagList[0];
    }

    get timeList() {
      const list = clone(this.group) as RecordItem[];
      list.sort((a, b) => {return dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf();});
      if (list.length === 0) {return [] as Result;}
      const result: Result = [{title: dayjs(list[0].createAt).format('YYYY-M-DD'), items: [list[0]]}];
      for (let i = 1; i < list.length; i++) {
        const current = list[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createAt).format('YYYY-M-DD'), items: [current]});
        }
      }
      result.forEach((item) => {item.total = item.items.reduce((sum, val) => {return sum += val.amount;}, 0);});
      result.forEach((item) => {item.items.reverse();});
      return result;
    }
  }
</script>

<style lang="scss" scoped>
    .detail {
        .cardList {
            background: #EEEDED;
            height: 68vh;
            overflow: auto;
            width: 100vw;
            max-width: 500px;

            &::-webkit-scrollbar {
                display: none;
            }

            .listItem {
                .item {
                    background: #FFFFFF;
                    display: flex;
                    flex-direction: row;

                    .wrapper {
                        display: flex;
                        flex-direction: column;
                        width: 100vw;
                        overflow: hidden;

                        .touch {
                            touch-action: pan-y!important;
                            width: 100%;
                            .touchContent{
                                transition: all .3s;
                                display: flex;
                                flex-direction: row;
                                justify-content: space-between;
                                align-items: center;
                                width: 120vw;
                                height: 9vh;
                                border-bottom: 1px solid #EEEDED;;
                            }
                            .remove {
                                animation: left .5s;
                                background: #F75855;
                                width: 20vw;
                                height: 100%;
                                text-align: center;

                                div {
                                    color: #FFFFFF;
                                    font-size: 14px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    width: 100%;
                                    height: 100%;
                                }
                            }

                            .notes {
                                width: 50vw;
                                display: flex;
                                flex-wrap: wrap;
                                color: #808080;
                                overflow: auto;

                                &::-webkit-scrollbar {
                                    display: none;
                                }

                            }

                            .amount {
                                display: flex;
                                justify-content: flex-end;
                                align-items: center;
                                width: 20vw;
                                padding-right: 15px;

                            }

                            .tagName {
                                display: flex;
                                width: 30vw;
                                justify-content: flex-start;
                                align-items: center;
                                white-space: nowrap;
                                padding: 0 12px;
                            }

                            .icon {
                                height: 24px;
                                width: 24px;
                                margin-right: 5px;
                            }
                        }

                        .liBar {
                            background: #FCFBFB;
                            height: 8vh;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            border-radius: 5px;
                            padding: 0 18px;

                            h3 {
                                font-size: 20px;
                            }

                            .total {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }

        .nothing {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;

            .none {
                margin: 5vh 0 0;
                width: 12vh;
                height: 12vh;
            }

            .jizhang {
                margin-top: 4vh;
                font-size: 16px;
                color: #FFFFFF;
                width: 30vw;
                max-width: 200px;
                height: 8vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #3EB575;
                border-radius: 10%/20%;
            }
        }

        .bar {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 10vh;
            background: #3EB575;
            color: #ffffff;
            font-size: 18px;
        }

        .select {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            color: #ffffff;
            background: #3EB575;
            height: 12vh;

            .typeButton {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                background: #5EBF8A;
                height: 5vh;
                width: 150px;
                font-size: 16px;
                white-space: nowrap;
                border-radius: 3px;
                margin-left: 10px;
                margin-top: 1vh;

                .zhi {
                    padding: 0 16px 0 20px;
                }

                .shou {
                    padding: 0 22px 0 16px;
                }

                .line {
                    width: 1px;
                    height: 3vh;
                    background: #72C99A;
                }
            }

            .types {
                display: flex;
                flex-direction: row;
                overflow: auto;
                position: relative;

                &::-webkit-scrollbar {
                    display: none;
                }

                .type {
                    height: 6vh;
                    white-space: nowrap;
                    padding: 0 4vw;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    border-bottom: 3px solid transparent;
                    border-top: 3px solid transparent;

                    &.selected {
                        border-bottom: 3px solid #0E351A;
                    }
                }
            }
        }
    }
</style>
