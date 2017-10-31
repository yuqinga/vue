<template>
  <div class="tmpl">

    <!-- 轮播图部分 -->
    <div class="border-radius">
      <subswiper :lunbo_url="'api/getthumimages/'+$route.params.goodsId" :lunbo_time="time"></subswiper>
    </div>
    <!-- 商品介绍部分 -->
    <div class="goodsintr border-radius">
         <h4>{{goodsdescribe.title}}</h4>
         <p>市场价:
            <s>${{goodsdescribe.market_price}}</s>&nbsp;&nbsp;
            $<span>{{goodsdescribe.sell_price}}</span>
        </p>
        <quantity v-on:subNuber="getNuberConten"></quantity>
        <mt-button type="primary" size="small">立即购买</mt-button>
        <mt-button type="danger" size="small" @click="addToshopCart">加入购物车</mt-button>
    </div>
    <!-- 商品参数部分 -->
    <div class="border-radius goodsintr">
      <h4>商品参数:</h4>
      <p>商品货号:{{goodsdescribe.goods_no}}</p>
      <p>库存情况:{{goodsdescribe.stock_quantity}}</p>
      <p>上架时间:{{goodsdescribe.add_time}}</p>
    </div>
    <!--图文信息相关 -->
    <div class="border-radius goodsintr">
        <mt-button type="primary" size="large" plain @click="phtointroduce">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="commcomment">商品评论</mt-button>
    </div>
  </div>
</template>
<style scoped>
  .border-radius{
    border:1px solid #929292;
    border-radius: 5px;
    padding:5px;
    box-shadow:0 0 1px 2px #f0f0f0;
  }
  .goodsintr{
    margin-top:10px;
  }
  .goodsintr p span{
    color:red;
  }
  .tmpl{
    padding:5px;
  }
  h4{
    font-size:16px;
    color:#0094ff;
    padding-bottom:5px;
    border-bottom:1px solid #929292;
  }
  .mint-button--primary.is-plain,.mint-button--danger.is-plain{
    margin-bottom:8px;
  }
</style>
<script>
import subswiper from '../../component/subswiper/subswiper.vue'
import common from '../../js/common.js'
import quantity from '../../component/subquantity/quantity.vue'
import bus from '../../js/commonvue.js'

import { Toast } from 'mint-ui'
  export default{
    data(){
      return{
        time:1000,
        goodsdescribe:{},
        mycontent:1
      }
    },
    created(){
      this.getgoodinfoData()
    },
    methods:{
      //获取指定商品的信息 
      getgoodinfoData(){
        const url = common.apihost+'api/goods/getinfo/'+this.$route.params.goodsId
        this.$http.get(url).then(res=>{
          this.goodsdescribe=res.body.message[0]
          console.log(this.goodsdescribe)
        })
      },
      //点击跳转图片详情页
      phtointroduce(){
        this.$router.push({
          name:'goodsintroduce',
          params:{goodsId:this.$route.params.goodsId}
        })
      },
      //点击跳转评论详情页
      commcomment(){
        this.$router.push({
          path:'/goods/goodscomment',
          query:{goodsId:this.$route.params.goodsId}
        })
      },
      getNuberConten(conten){
        this.mycontent=conten
      },
      //点击加入购物车
      addToshopCart(){
          bus.$emit('goodsCoount',this.mycontent)
          Toast({
            message: '加入购物车成功',
            position: 'middle',
            duration: 2000
          });

          //将商品的数据添加到仓库中
          const goodsObj={goodsId:this.$route.params.goodsId,count:this.mycontent}
          //使用同步的方法将商品信息传递到仓库去
          this.$store.commit('addGoods',goodsObj)
      }
    },
    //集成子组件
    components:{
        subswiper,
        quantity
    }

  }
</script>
