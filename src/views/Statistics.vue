<template>
    <Layout>
        <div class="bar"><b>统计</b></div>
        <div class="statistics">
            <div class="content">
            <div class="main">
                <input type="month" class="month" v-model="getT">
                <div class="divWrapper1">
                    <div class="divWrapper2"><span class="zhiText"><b>共支出</b></span>
                        <span class="zhi"><b>￥1112288</b></span></div>
                    <div class="divWrapper2"><span class="shouText"><b>共收入</b></span>
                        <span class="shou"><b>￥2222288</b></span></div>
                </div>
            </div>
            <div class="chart-wrapper" ref="chartWrapper">
                <div class="wrapper2" ref="wrapper2"></div>
            </div>
                <div class="wrapper1" ref="wrapper1"></div>
        </div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import dayjs from 'dayjs';
  import _ from 'lodash';
  import {ECharts} from 'echarts';
  import * as echarts from 'echarts';

  @Component
  export default class Statistics extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }
    getT = dayjs().format('YYYY-M')
    get zhiList(){
      return this.recordList.filter((item: RecordItem)=>{return item.type==='-'})
    }
    get shouList(){
      return this.recordList.filter((item: RecordItem)=>{return item.type==='+'})
    }
    chart?: ECharts;
    chart2?: ECharts;
    mounted() {
      const div = (this.$refs.chartWrapper as HTMLDivElement);
      div.scrollLeft = div.scrollWidth;
      this.chart = echarts.init(this.$refs.wrapper1 as HTMLDivElement);
      this.chart.setOption(this.chartOptions1);
      this.chart2 = echarts.init(this.$refs.wrapper2 as HTMLDivElement);
      this.chart2.setOption(this.chartOptions2);
    }

    @Watch('options')
    onOptionsChange(newValue: any) {
      this.chart!.setOption(newValue);
    }

    get keyValueListZ() {
      const today = new Date();
      const array = [];
      for (let i = 0; i <= 29; i++) {
        const dateString = dayjs(today)
          .subtract(i, 'day').format('YYYY-M-D');
        const found = _.find(this.zhiList, {
          createAt: dateString
        });
        array.push({
          key: dateString, value: found ? found.total : 0
        });
      }
      array.sort((a, b) => {
        if (a.key > b.key) {
          return 1;
        } else if (a.key === b.key) {
          return 0;
        } else {
          return -1;
        }
      });
      return array;
    }
    get keyValueListS() {
      const today = new Date();
      const array = [];
      for (let i = 0; i <= 29; i++) {
        const dateString = dayjs(today)
          .subtract(i, 'day').format('YYYY-M-D');
        const found = _.find(this.shouList, {
          createAt: dateString,
        });
        array.push({
          key: dateString, value: found ? found.amount : 0
        });
      }
      array.sort((a, b) => {
        if (a.key > b.key) {
          return 1;
        } else if (a.key === b.key) {
          return 0;
        } else {
          return -1;
        }
      });
      return array;
    }

    get chartOptions1() {
      return {
        title: {
          text: '月度对比',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['支出', '收入']
        },
        toolbox: {
          show: true,
          feature: {
            magicType: {show: true, type: ['line', 'bar']},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: ['5月', '6月', '7月', '8月', '9月', '10月']
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
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],

          },
          {
            name: '收入',
            type: 'bar',
            color: '#E9B646',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          }
        ]
      };
    }

    get chartOptions2() {
      const keysZ = this.keyValueListZ.map(item => item.key);
      const valuesZ = this.keyValueListZ.map(item => item.value);
      const keysS = this.keyValueListS.map(item => item.key);
      const valuesS = this.keyValueListS.map(item => item.value);
      return {
        title: {
          text: '每日对比',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['支出', '收入']
        },
        toolbox: {
          show: true,
          feature: {
            magicType: {show: true, type: ['line', 'bar']},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: [...keysZ]
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
        font-size: 1.1rem;
    }
    .statistics {
        height: 90vh;
        overflow: auto;
        width: 100vw;

        .wrapper1 {
            height: 40vh;
            padding: 3vw;

        }
.chart-wrapper{
/*    width: 300vw;*/
/*overflow: auto;*/
}
        .wrapper2 {
            height: 40vh;
            padding: 3vw;

        }
        .main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .month {
                margin: 6vh 0 4vh;
                width: 28vw;
                border: 1px solid #E4E4E4;
                height: 4vh;
                border-radius: 4px;
                background-color: transparent;
                color: #A09E9E;
            }

            .divWrapper1 {
                display: flex;
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
                width: 100%;
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
                font-size: 1rem;
            }

            .zhi {
                font-size: 1.8rem;
                color: #3EB575;

            }

            .shou {
                font-size: 1.8rem;
                color: #E9B646;
            }

            .shouText {
                color: #E9B646;
                font-size: 1rem;
            }

        }
    }


</style>
