<template>
  <div >
       <!--顶部固定导航-->
        <mt-header fixed title="于清项目"></mt-header>
        <div class="fh" v-show="isbotton" @click="btngo"><span><</span>返回</div>
       <!--中间内容,根据路由变化-->
         <router-view></router-view>
       <!--底部的tabBar-->
         <mt-tabbar v-show="isShowBar">
            <mt-tab-item>
              <router-link to="/home">
                <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
              </router-link>
            </mt-tab-item>
            <mt-tab-item>
              <router-link to="/classify">
                 <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
              </router-link>
            </mt-tab-item>
            <mt-tab-item>
              <router-link to="/shopping">
              <span class="redradule">{{appshoppingcontent}}</span>
                <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">            
              </router-link>
            </mt-tab-item>
            <mt-tab-item>
              <router-link to="/my">
                <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">            
              </router-link>
            </mt-tab-item>
        </mt-tabbar>
  </div>
</template>
<style scoped>
.fh{
  position:fixed;
  top:0;
  left:10;
  z-index:20;
  color:white;
  font-size:14px;
  line-height: 40px;
  font-weight: 700;
}
.fh span{
  padding:0  3px;
}
.header{
  position:relative;
}
 img{
    width:42px;
    height:35px;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    border-top:1px solid #f6f6f6;
    background:#fff;
  }
  .mint-tabbar{
    position:fixed;
    bottom:0;
  }
  .hide{
    display:none;
  }
  .redradule{
    font-size:12px;
    line-height:1.3;
    background:red;
    border-radius:50%;
    position:absolute;
    top:7px;
    left:63%;
    text-align:center;
    padding:1px 5px;
    color:#fff;
  }
</style>


<script>
import bus from '../js/commonvue.js'
  export default{
    data(){
        return {
          isShowBar:true,
          isbotton:false,
          appshoppingcontent:0
        }
    },
    created(){
        // console.log(this.$route)
         this.isShowOrHide(this.$route.path);
        //  bus.$on('goodsCoount',function(conten){
        //    this.appshoppingcontent+=conten
        //     console.log(conten)
        //  }.bind(this))
       

    },
    updated(){//当仓库的值被更改的时候会调用   更改徽标的值是updated里面写
    // console.log(11111)
    this.appshoppingcontent=this.$store.getters.getsubcount
    },
    watch:{//监控路由的状态
      "$route":function(newvalue,oldvalue){
        this.isShowOrHide(newvalue.path)
      }
    },
    methods:{
      btngo(){
        this.$router.go(-1)
      }, 
      isShowOrHide(path){
        if(path=='/home'){
          this.isShowBar=true
          this.isbotton=false
        }else{
          this.isShowBar=false
          this.isbotton=true
        }
    }
    },
   
  }
</script>