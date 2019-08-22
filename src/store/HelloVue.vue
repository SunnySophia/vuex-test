<template>
    <div>
        <h2>{{msg}}</h2>
        <h2>{{$store.state.count}}</h2>
       
    </div>
     
</template>
<script>
export default {
    data () {
        return {
             msg:'我是helloVue的内容'
        }
    }
   
}
</script>
<style scoped>

</style>


