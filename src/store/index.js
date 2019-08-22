import Vue from "vue"
import Vuex from "vuex"
import { stat } from "fs";
Vue.use(Vuex)
const moduleA={
       state:{
           name:'zhangsan'
       },
       actions: {
           aupdataname(context,payload){
               setTimeout(() => {
                   context.commit("Fullname",payload)
               }, 1900);
           }
       } ,
       mutations: {
           Fullname(state,payload){
               state.name=payload
           }
       },
       getters: {
           fname(state){
                return state.name + '111'
           },
           fname1(state,getters){
               return getters.fname+'222'
           },
           fname2(state,getters,rootstate){
               return getters.fname1+rootstate.count
           }
       },

}
const store = new Vuex.Store({
    state: {
        count:10,
        students:[
            {name:'hah',age:20},
            {name:'heihei',age:34},
            {name:'hehe',age:'28'}],
            info:{
                name:'shushu',
                age:'18',
                sex:'woman'
            }
    },
    mutations: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        incrementCount(state,counter){
            state.count+=counter
        },
        incrementstudent(state,student){
            state.students.push(student)
        },
        changeInfo(state){
            state.info.name="shengsheng"
            Vue.set(state.info,"address",'cannada')
            // Vue.delete(state.info,'age')
        },
        updataInfo(state){
            state.info.name='huiru'
        }
    },
    actions: {
        //方式一
        // aupdataInfo(context,payload){
        //     setTimeout(() => {
        //         context.commit('updataInfo');
        //         console.log(payload);       
        //     }, 1000);
        // }
        //方式二
        aupdataInfo(context,payload){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    context.commit('updataInfo');
                    console.log(payload);
                    resolve('1111')
                }, 1000);
            })
        }
    },
    getters: {
        doublecount(state){
            return state.count*state.count
        },
        more20(state){
            return state.students.filter(s=>s.age>20)
        },
        more20length(state,getters){
            return getters.more20.length
        },
        moreage(state){
            return age=>{
                return state.students.filter(s=>s.age>age)
            }
        }
    },
    modules: {
        a:moduleA
    },
   
})
export default store