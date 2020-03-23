import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate, { Validator } from "vee-validate";
// 转换中文校验信息第一种方法
// import zh from "vee-validate/dist/locale/zh_CN";
// 方法二
import "./local/index";
import axios from "axios";
Vue.use(VeeValidate);
// 方法二：
// Validator.localize("zh-CN", zh);
const validator = new Validator();
validator.localize("zh-CN");
Vue.config.productionTip = false;
axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'http://your.domain.com';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
