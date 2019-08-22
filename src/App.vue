<template>
  <div id="app">
    <h2>{{$store.state.count}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount(10)">+10</button>
    <button @click="addstudent">addstudent</button>
    <h2>{{$store.getters.doublecount}}</h2>
    <h2>{{$store.getters.more20}}</h2>
    <h2>{{$store.getters.more20length}}</h2>
    <h2>{{$store.getters.moreage(28)}} </h2>
    <hello-vue></hello-vue>
    <button @click="changeinfo">changeinfo</button>
    <h2>{{$store.state.info}} </h2>
    <button @click="updataInfo">updataInfo</button>
    <h2>我是属于module里面的</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="fullname">fullname</button>
    <h2>{{$store.getters.fname}}</h2>
    <h2>{{$store.getters.fname1}}</h2>
    <h2>{{$store.getters.fname2}} </h2>
    <button @click="asc">异步修改</button>
  </div>
</template>

<script>
import HelloVue from './store/HelloVue'

export default {
  name: 'app',
  data () {
    return {
      msg:'我是app的内容',
      
    }
  },
  components: {
    HelloVue
  },
  methods: {
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addcount(counter){
      this.$store.commit('incrementCount',counter)
    },
    addstudent(){
      const student={name:"linus",age:"68"}
      this.$store.commit('incrementstudent',student)
    },
    changeinfo(){
      this.$store.commit('changeInfo')
    },
    updataInfo(){
      this.$store.dispatch("aupdataInfo",'我是女王').then(res=>{
        console.log('sucess');
        console.log(res)
      })
    },
    fullname(){
      this.$store.commit('Fullname','111111')
    },
    asc(){
      this.$store.dispatch('aupdataname','wangwu')
    }
  }
}
</script>

<style>

</style>
