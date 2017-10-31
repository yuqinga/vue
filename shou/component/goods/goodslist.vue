<template>
  <div class="tmpl">
   <div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in goodslistArr" key="item.id">
		            <router-link :to="'/goods/goodsinfo/'+item.id">
                  <div class="border-goods">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">
                      <!-- 标题 -->
                        <p class="goods-title">
                          {{item.title}}
                        </p>
                      <!-- 价格 -->
                        <p class="goods-price">
                          <span>{{item.sell_price}}</span>&nbsp;&nbsp;&nbsp;
                          <s>{{item.market_price}}</s>
                        </p>
                      <!-- 提示 -->
                        <p class="goods-host">
                          <span>热卖中</span>&nbsp;
                          <span>剩余{{item.stock_quantity}}件</span>
                        </p>
                    </div>
                  </div>
                </router-link>
            </li>
		    </ul>    
		</div>
  </div>
</template>
<style scoped>
  .border-goods{
    border:1px solid rgba(92,92,92,.5);
    padding:10px;
    border-radius: 10px;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    height:80px;
  }
 .goods-title{
     /**
     让文字显示两行后省略
      */
       font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .goods-price{
    margin-top:10px;
    padding-top:5px;
    text-align:left;
    background:#f0f0f0;
    padding:5px;
  }
  .goods-price span{
    color:red;
    font-weight: 700;
  }
   .goods-price s{
   }
   .goods-host{
     background:#f0f0f0;
     padding-top:20px;
     text-align:left;
      padding:5px;
   }
</style>
<script>
import  common from '../../js/common.js'
export default{
  data(){
    return {
      goodslistArr:[]
    }
  },
  created(){
    this.getgoodslistData()
  },
  methods:{
    getgoodslistData(){
      const url = common.apihost+'api/getgoods'

      this.$http.get(url).then(res=>{
        this.goodslistArr=res.body.message
        console.log(this.goodslistArr);
      })
    }
  }
}
  
</script>