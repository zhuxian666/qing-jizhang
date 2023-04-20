import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagListZ:{},
      tagListS:{},
      record: {type: '-', notes: '', amount: 0, tag: {name: '服饰', val: 'fushi'}, createAt: (new Date().toISOString())},
    }  as RootState,
  getters:{

  },

  mutations: {
    saveRecordList(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createdRecordList(state, record: RecordItem) {
      let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;
      function createId() {
        id++;
        window.localStorage.setItem('_idMax', id.toString());
        return id;
      }
      state.record.id = createId()
      const record2 = JSON.parse(JSON.stringify(record)) as RecordItem;
      state.recordList.push(record2);
      store.commit('saveRecordList');
    },
    removeRecord(state,id){
      let index: number |undefined
        for(let i=0;i<state.recordList.length;i++){
          if(state.recordList[i].id===id){
            index=i
          }
        }
      if (index!==undefined){
        state.recordList.splice(index,1)
        store.commit('saveRecordList')
      }
    },

    saveTagListZ(state) {
      window.localStorage.setItem('tagListZ', JSON.stringify(state.tagListZ));
    },
    createdTagListZ(state, tag: tag){
      Vue.set(state.tagListZ,tag.name,tag.val)
    },
    removeTagListZ(state, key: string) {
      const confirm = window.confirm(`请确认是否删除这个标签：${key}`) as unknown as boolean;
      if (confirm) {
        Vue.delete(state.tagListZ,key)

      }
    },
    fetchTagListZ(state) {
      state.tagListZ = JSON.parse(window.localStorage.getItem('tagListZ')
        ||'{"服饰": "fushi", "餐饮": "canyin", "交通": "jiaotong", "住房": "zhufang", "购物": "gouwu", "生活服务": "shenhuofuwu","学习": "xuexi", "娱乐": "yule", "运动": "yundong", "旅游": "lvyou", "酒店": "jiudian", "亲子": "qinzi", "宠物": "chongwu","医疗": "yiliao", "其他人情": "qitarenqing", "其他": "qita", "红包": "huaban", "转账": "zhuanzhang"}');
    },

    saveTagListS(state) {
      window.localStorage.setItem('tagListS', JSON.stringify(state.tagListS));
    },
    createdTagListS(state, tag: tag){
      Vue.set(state.tagListS,tag.name,tag.val)
      // state.tagListS.set(tag.name,tag.val)
    },
    removeTagListS(state, key: string) {
      const confirm = window.confirm(`请确认是否删除这个标签：${key}`) as unknown as boolean;
      if (confirm) {
        Vue.delete(state.tagListS,key)
        // state.tagListS.delete(key);
      }
    },
    fetchTagListS(state) {
      state.tagListS = JSON.parse(window.localStorage.getItem('tagListS')
        || '{ "工资": "gongzi", "其他人情": "qitarenqingshouru", "生意": "shengyi", "退款": "tuikuan", "奖金": "jiangjin","其他": "qitashouru", "红包": "huabanshouru", "转账": "zhuanzhangshouru", "商家转账": "shangjiazhuangzhang"}');
    },

  },
  actions: {},
  modules: {}
});
export default store;
