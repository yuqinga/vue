<template>
   <div>
      <!--轮播图部分 -->
    <mt-swipe :auto="lunbo_time">
      <mt-swipe-item v-for="(item,index) in lunboArr" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
   </div>
</template>
<style scoped>
  .mint-swipe{
    height:200px;
  }
 img{
   width:100%;
   height:100%;
  }
</style>
<script>
import commom from '../../js/common.js'
export default{
  data(){
    return{
      lunboArr:[]
    }
  },
  created(){
    this.getlunboData()
  },
  methods:{
     getlunboData(){
      const url = commom.apihost+this.lunbo_url
      this.$http.get(url).then(response=>{
        this.lunboArr=response.body.message
        // console.log(this.lunboArr)
      })
      }
  },
  props:['lunbo_url','lunbo_time']
}
  
</script>