<template>
  <div class="tmpl">
    <!--轮播图部分 -->

    <!--写死的数据 -->
  <!-- <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="https://img1.360buyimg.com/da/jfs/t7264/351/1197482837/200647/e576cea8/599ac7e2Nacd9d922.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://img1.360buyimg.com/da/jfs/t7939/72/743330977/58984/ca8b1456/5996cdd3Nda407eff.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://m.360buyimg.com/mobilecms/s720x322_jfs/t8518/195/20828126/74386/595d5372/599ef445Nd186f8ac.jpg!q70.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    -->


    <!--请求的数据-->
<subswiper lunbo_url="api/getlunbo" :lunbo_time="time"></subswiper>
    <!--<mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunboArr" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>-->
    
  
  <!-- 九宫格 -->
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
                <router-link to="/new/newlist">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                          <a href="#">
                                <span class="mui-icon mui-icon-home"></span>
                                <div class="mui-media-body">新闻咨询</div>
                          </a>
                    </li>
                </router-link>
                <router-link to="/img/imglist">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                      <a href="#">
                            <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                            <div class="mui-media-body">图片分享</div>
                      </a>
                    </li>
                </router-link>
                <router-link to="/goods/goodslist">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                      <a href="#">
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">商品购买</div>
                      </a>
                    </li>
                </router-link>
                <router-link to="">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                      <a href="#">
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">留言反馈</div>
                      </a>
                    </li>
                </router-link>
                <router-link to="">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                      <a href="#">
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">视频专区</div>
                      </a>
                    </li>
                </router-link>
                <router-link to="">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                      <a href="#">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">联系我们</div>
                      </a>
                    </li>
                </router-link>
		        </ul> 
		</div>
  </div>
</template>

<style scoped>
  .mint-swipe{
    height:180px;
  }
 img{
   width:100%;
   height:100%;
 }

 /*九宫格部分*/
 .mui-icon-home:before,
 .mui-icon-email:before,
 .mui-icon-chatbubble:before,
 .mui-icon-location:before,
 .mui-icon-search:before,
 .mui-icon-phone:before{
    content:''
 }
 .mui-icon{
   width:3rem;
   height:3rem;
 }
 .mui-icon-home{
   background-image:url('../../src/img/menu3.fw.png');
   background-size:cover;
 }
 .mui-icon-email{
   background-image:url('../../src/img/menu4.fw.png');
   background-size:cover;
 }
 .mui-icon-chatbubble{
   background-image:url('../../src/img/menu5.fw.png');
   background-size:cover;
 }
 .mui-icon-location{
   background-image:url('../../src/img/menu6.fw.png');
   background-size:cover;
 }
 .mui-icon-search{
   background-image:url('../../src/img/menu9.fw.png');
   background-size:cover;
 }
 .mui-icon-phone{
   background-image:url('../../src/img/menu10.fw.png');
   background-size:cover;
 }
 .mui-content>.mui-table-view:first-child{
   margin-top:0;
 }
 .mui-content>.mui-table-view[data-v-54f02512]:first-child{
   background:white;
 }
 .mui-grid-view.mui-grid-9 .mui-table-view-cell{
   border-right:none;
   border-bottom:none;
 }
</style>
  
<script>
//导入连接
import common from '../../js/common.js'
import subswiper from '../../component/subswiper/subswiper.vue'

//固定写法创建出一个对象来
export default{
  data(){
    return {
      time:3000
    }
  },
  created(){
     
  },
  methods:{//发送请求

    },
    components:{
      subswiper
    }
  
  }




</script>