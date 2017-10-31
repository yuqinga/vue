<template>
  <div class="tmpl">
    <!-- 1.0 商品列表-->
    <div class="goodsStyle">
    <!-- 开关 -->
      <mt-switch v-model="switchArr"></mt-switch>
    <!--图片部分 -->

    <!-- 显示数量部分 -->

    <!-- 删除按钮 -->
    </div>
    <!-- 2.0 统计商品信息-->
  </div>
</template>
<style scoped>
  
</style>
<script>
import common from '../../js/common.js'
    export default{
      data(){
        return{
          switchArr:true
        }
      },
      created(){
        this.getgoodsList()
      },
      methods:{
        getgoodsList(){
        const list = this.$store.getters.getgoodsinfo
        //1.先判断购物车里是否为0
        if(list.length<=0){
          return
        }
        //2.懵逼的从对象里面讲goodId取出来
        const templateObj={}
        for(var i = 0 ;i<list.length;i++){
          var goodsObj= list[i]
          // console.log(goodsObj)
          if(templateObj[goodsObj.goodsId]){
            templateObj[goodsObj.goodsId]+=goodsObj.count
          }else{
            templateObj[goodsObj.goodsId] = goodsObj.count
          }
        }
        //3懵逼的搞一个临时的数组,装id==>[87,88]
        const tempArray =[]
        for(var key in tempArray){
          tempArray.push(key)
        }
        //4懵逼形成需要的参数 ==>87,88
        const idsString = tempArray.join(",")
        //5发送网络请求
        const url = common.apihost+'api/goods/getshopcarlist'+idsString
        this.$http.get(url).then(res=>{
          console.log(res)
        })
        }
      }
    }
</script>