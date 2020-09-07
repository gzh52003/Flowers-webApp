import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'
import md5 from 'js-md5';
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$md5 = md5;

Vue.prototype.setCookie = function (c_name, value, expiredays) {
  var exdate = new Date()
  // exdate.setDate(exdate.getDate() + expiredays)
  exdate.setHours(exdate.getHours() + expiredays)
  document.cookie = c_name + "=" + escape(value) +
    ((expiredays == null) ? "" : ";expires=" + exdate)
};

Vue.prototype.getCookie = function (c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + "=")
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      var c_end = document.cookie.indexOf(";", c_start)
      if (c_end == -1) c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ""
};



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
