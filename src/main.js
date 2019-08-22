import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })
axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=5000
axios.all([
  axios({
    url:'/home/multidata'
  }),axios({
    url:'/home/data',
    params:{
      type:'sell',
      page:3
    }
  }),
  // axios({
  //   url:'https://weapp003.hopertech.com:20003/jeecg-boot/sys/getCaptcha',
  //   params:{
  //     phone:'17746373512'
  //   }
  // }),
]).then(res=>{
  console.log(res);
})
const instance1=axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})
instance1({
  url:'/home/multidata'
}).then(res=>{
  console.log(res)
})
instance1({
  url:'/home/data',
  params:{
    type:'pop',
    page:4
  }
}).then(res=>{
  console.log(res);
  
})
