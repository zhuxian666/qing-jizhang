<template>
    <Layout>
        <div class="bar"><b>统计</b></div>
        <div class="statistics">
            <div class="content">
                <div class="main">
                    <div class="divWrapper1">
                        <div class="divWrapper2"><span class="zhiText"><b>本月共支出</b></span>
                            <span class="zhi"><b>￥{{zhiTotal}}</b></span></div>
                        <div class="divWrapper2"><span class="shouText"><b>本月共收入</b></span>
                            <span class="shou"><b>￥{{shouTotal}}</b></span></div>
                    </div>
                </div>
                <div class="chartWrapper" ref="chartWrapper">
                    <div class="wrapper2" ref="wrapper2"></div>
                </div>
                <div class="wrapper1" ref="wrapper1"></div>
                <div v-if="this.tagMountZ.length!==0" class="rankWrapper" ref="rankWrapper"></div>
                <div v-if="this.tagMountS.length!==0" class="rankWrapper1" ref="rankWrapper1"></div>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import dayjs from 'dayjs';
  import {ECharts} from 'echarts';
  import * as echarts from 'echarts';
  import clone from '@/lib/clone';

  @Component
  export default class Statistics extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }

    getT = dayjs().format('YYYY-M');

    get zhiList() {
      return this.recordList.filter((item: RecordItem) => {return item.type === '-';});
    }

    get shouList() {
      return this.recordList.filter((item: RecordItem) => {return item.type === '+';});
    }

    get tagListZ() {
      return this.$store.state.tagListZ as tagListZ;
    }

    get tagListS() {
      return this.$store.state.tagListS as tagListS;
    }

    get tagMountZ() {
      const list = clone(this.zhiList) as RecordItem[];
      const tag = Object.keys(clone(this.tagListZ));
      type TagResult = { title: string; total?: number; items: RecordItem[] }[]
      const result: TagResult = [];
      tag.forEach((item: string) => {
        const list1 = list.filter((key) => {return key.tag.name === item;});
        result.push({title: item, items: [...list1]});
      });
      result.forEach((item) => {item.total = item.items.reduce((sum, val) => {return sum += val.amount;}, 0);});
      type Array = { key: string; value: number }[]
      const KY: Array = [];
      result.forEach((item) => {
        if (item.total) {
          return KY.push({key: item.title, value: item.total});
        }
      });
      KY.sort((a, b) => {return a.value - b.value;});

      return KY;
    }

    get tagMountS() {
      const list = clone(this.shouList) as RecordItem[];
      const tag = Object.keys(clone(this.tagListS));
      type TagResult = { title: string; total?: number; items: RecordItem[] }[]
      const result: TagResult = [];
      tag.forEach((item: string) => {
        const list1 = list.filter((key) => {return key.tag.name === item;});
        result.push({title: item, items: [...list1]});
      });
      result.forEach((item) => {item.total = item.items.reduce((sum, val) => {return sum += val.amount;}, 0);});
      type Array = { key: string; value: number }[]
      const KY: Array = [];
      result.forEach((item) => {
        if (item.total) {
          return KY.push({key: item.title, value: item.total});
        }
      });
      KY.sort((a, b) => {return a.value - b.value;});
      return KY;
    }

    chart?: ECharts;
    chart2?: ECharts;
    chart3?: ECharts;
    chart4?: ECharts;

    get zhiTotal() {
      const monthTotal = this.timeListMZ.filter((item) => {return item.title === this.getT;});
      return monthTotal.reduce((sum, val) => {
        if (val.total) {return sum += val.total;} else return 0;
      }, 0);
    }

    get shouTotal() {
      const monthTotal = this.timeListMS.filter((item) => {return item.title === this.getT;});
      return monthTotal.reduce((sum, val) => {
        if (val.total) {return sum += val.total;} else return 0;
      }, 0);
    }

    mounted() {
      const div = this.$refs.chartWrapper as HTMLDivElement;
      div.scrollLeft = div.scrollWidth;
      this.chart = echarts.init(this.$refs.wrapper1 as HTMLDivElement);
      this.chart.setOption(this.chartOptions1, true);
      this.chart2 = echarts.init(this.$refs.wrapper2 as HTMLDivElement);
      this.chart2.setOption(this.chartOptions2, true);
      if(this.tagMountZ.length!==0){
        this.chart3 = echarts.init(this.$refs.rankWrapper as HTMLDivElement);
        this.chart3.setOption(this.chartOptions3, true);
      }
      if(this.tagMountS.length!==0){
        this.chart4 = echarts.init(this.$refs.rankWrapper1 as HTMLDivElement);
        this.chart4.setOption(this.chartOptions4, true);
      }
    }

    @Watch('options')
    onOptionsChange(newValue: any) {
      this.chart!.setOption(newValue, true);
    }

    get timeListZ() {
      const list = clone(this.zhiList) as RecordItem[];
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
      return result;
    }

    get timeListS() {
      const list = clone(this.shouList) as RecordItem[];
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
      return result;
    }

    get timeListMZ() {
      const list = clone(this.zhiList) as RecordItem[];
      list.sort((a, b) => {return dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf();});
      if (list.length === 0) {return [] as Result;}
      const result: Result = [{title: dayjs(list[0].createAt).format('YYYY-M'), items: [list[0]]}];
      for (let i = 1; i < list.length; i++) {
        const current = list[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createAt), 'month')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createAt).format('YYYY-M'), items: [current]});
        }
      }
      result.forEach((item) => {item.total = item.items.reduce((sum, val) => {return sum += val.amount;}, 0);});
      return result;
    }

    get timeListMS() {
      const list = clone(this.shouList) as RecordItem[];
      list.sort((a, b) => {return dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf();});
      if (list.length === 0) {return [] as Result;}
      const result: Result = [{title: dayjs(list[0].createAt).format('YYYY-M'), items: [list[0]]}];
      for (let i = 1; i < list.length; i++) {
        const current = list[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createAt), 'month')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createAt).format('YYYY-M'), items: [current]});
        }
      }
      result.forEach((item) => {item.total = item.items.reduce((sum, val) => {return sum += val.amount;}, 0);});
      return result;
    }

    get keyValueMZ() {
      const today = new Date();
      type Array = { key: string; value: number }[]
      const array = [] as Array;
      for (let i = 0; i <= 5; i++) {
        const dateString = dayjs(today)
          .subtract(i, 'month').format('YYYY-M');
        const found = this.timeListMZ.filter((item) => {return item.title === dateString;});
        array.push({
          key: dateString, value: found.reduce((sum, val) => {
            if (val.total) {return sum += val.total;} else return 0;
          }, 0)
        });
      }
      array.sort((a, b) => {return dayjs(a.key).valueOf() - dayjs(b.key).valueOf();});
      return array;
    }

    get keyValueMS() {
      const today = new Date();
      type Array = { key: string; value: number }[]
      const array = [] as Array;
      for (let i = 0; i <= 5; i++) {
        const dateString = dayjs(today)
          .subtract(i, 'month').format('YYYY-M');
        const found = this.timeListMS.filter((item) => {return item.title === dateString;});
        array.push({
          key: dateString, value: found.reduce((sum, val) => {
            if (val.total) {return sum += val.total;} else return 0;
          }, 0)
        });
      }
      array.sort((a, b) => {return dayjs(a.key).valueOf() - dayjs(b.key).valueOf();});
      return array;
    }

    get keyValueListZ() {
      const today = new Date();
      type Array = { key: string; value: number }[]
      const array = [] as Array;
      for (let i = 0; i <= 29; i++) {
        const dateString = dayjs(today)
          .subtract(i, 'day').format('YYYY-M-DD');
        const found = this.timeListZ.filter((item) => {return item.title === dateString;});
        array.push({
          key: dateString, value: found.reduce((sum, val) => {
            if (val.total) {return sum += val.total;} else return 0;
          }, 0)
        });
      }
      array.sort((a, b) => {return dayjs(a.key).valueOf() - dayjs(b.key).valueOf();});
      return array;
    }

    get keyValueListS() {
      const today = new Date();
      type Array = { key: string; value: number }[]
      const array = [] as Array;
      for (let i = 0; i <= 29; i++) {
        const dateString = dayjs(today)
          .subtract(i, 'day').format('YYYY-M-DD');
        const found = this.timeListS.filter((item) => {return item.title === dateString;});
        array.push({
          key: dateString, value: found.reduce((sum, val) => {
            if (val.total) {return sum += val.total;} else return 0;
          }, 0)
        });
      }
      array.sort((a, b) => {return dayjs(a.key).valueOf() - dayjs(b.key).valueOf();});
      return array;
    }

    get chartOptions1() {
      const keysZ = this.keyValueMZ.map(item => item.key.substring(5) + '月');
      const valuesZ = this.keyValueMZ.map(item => item.value);
      const valuesS = this.keyValueMS.map(item => item.value);
      return {
        title: {
          text: '月度对比',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['支出', '收入'],
        },
        toolbox: {
          show: true,
          feature: {
            magicType: {show: true, type: ['line', 'bar']},
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: [...keysZ,
            ]
          }
        ],
        yAxis: [
          {
            show: false
          }
        ],
        series: [
          {
            name: '支出',
            type: 'bar',
            color: '#3EB575',
            data: [...valuesZ]

          },
          {
            name: '收入',
            type: 'bar',
            color: '#E9B646',
            data: [...valuesS]
          }
        ]
      };
    }

    get chartOptions2() {
      const keysZ = this.keyValueListZ.map(item => {
        return dayjs(item.key).format('D');
      });

      const valuesZ = this.keyValueListZ.map(item => item.value);
      const valuesS = this.keyValueListS.map(item => item.value);
      return {
        grid: {
          left: 0,
          right: 10,
        },
        title: {
          text: '每日对比',
          left: 10
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['支出', '收入'],
        },
        toolbox: {
          show: true,
          right: 10,
          feature: {
            magicType: {show: true, type: ['line', 'bar']},
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            axisLabel: {interval: 0},
            data: [...keysZ]
          }
        ],
        yAxis: [
          {
            show: false
          }
        ],
        dataZoom: [
          {
            show: false, //是否显示下方滚动条
            realtime: true,
            start: 100, //显示数据开始位置
            end: 55 //显示数据结束位置
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 50
          }
        ],
        series: [
          {
            name: '支出',
            type: 'bar',
            color: '#3EB575',
            data: [...valuesZ],

          },
          {
            name: '收入',
            type: 'bar',
            color: '#E9B646',
            data: [...valuesS],

          }
        ]
      };
    }

    get chartOptions3() {
      const keysZ = this.tagMountZ.map(item => item.key);
      const valuesZ = this.tagMountZ.map(item => item.value);
      return {
        title: {
          text: '支出排行榜',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          axisTick: {show: false},
          data: [...keysZ]
        },
        series: [
          {
            name: '支出',
            type: 'bar',
            barMaxWidth: 40,
            color: '#3EB575',
            data: [...valuesZ]
          },
        ]
      };
    }

    get chartOptions4() {
      const keysS = this.tagMountS.map(item => item.key);
      const valuesS = this.tagMountS.map(item => item.value);
      return {
        title: {
          text: '收入排行榜',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          axisTick: {show: false},
          data: [...keysS]
        },
        series: [
          {
            name: '收入',
            type: 'bar',
            barMaxWidth: 40,
            color: '#E9B646',
            data: [...valuesS]
          }
        ]
      };
    }

  }
</script>

<style lang="scss" scoped>
    .bar {
        display: flex;
        height: 10vh;
        align-items: center;
        justify-content: center;
        background: #3EB575;
        color: #FFFFFF;
        font-size: 18px;
    }

    .content {
        width: 100%;
        max-width: 565px;
        overflow: auto;
        height: 100%;
    }

    .statistics {
        height: 90vh;
        overflow: auto;
        width: 100vw;

        .wrapper1 {
            margin: 30px 0;
            height: 40vh;
            padding: 3vw;
            border-bottom: 1px solid #C9C8C8;;

        }

        .chartWrapper {
            max-width: 100vw;
            overflow: auto;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .wrapper2 {
            height: 40vh;
            width: 100vw;
            border-bottom: 1px solid #C9C8C8;;
            margin: 30px 0;

        }

        .rankWrapper {
            height: 60vh;
            width: 100vw;
            padding: 3vw;
            border-bottom: 1px solid #C9C8C8;;
            margin: 30px 0;

        }

        .rankWrapper1 {
            height: 60vh;
            width: 100vw;
            padding: 3vw;
            margin-bottom: 50px;
            margin-top: 30px;

        }

        .main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #C9C8C8;;

            .divWrapper1 {
                display: flex;
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
                width: 100%;
                margin-top: 50px;
            }

            .divWrapper2 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 45%;
                margin-bottom: 4vh;
            }

            .zhiText {
                color: #3EB575;
                font-size: 16px;
            }

            .zhi {
                font-size: 28px;
                color: #3EB575;

            }

            .shou {
                font-size: 28px;
                color: #E9B646;
            }

            .shouText {
                color: #E9B646;
                font-size: 16px;
            }

        }
    }


</style>
