import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';
import Nav from '@/components/Nav.vue';
import Icon from '@/components/Icon.vue';
// @ts-ignore
import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'});
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


if (document.documentElement.clientWidth > 500){
  window.alert('请使用手机打开本页面，以保证浏览效果');
}
