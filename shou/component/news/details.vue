<template>
  <div class="tmpl" v-show="isloading">
    <div class="box">
    <!--标题 -->
      <h4>{{detaArr.title}}</h4>
      <p>
        <span style="color:black">{{detaArr.add_time|dateFmt('YYYY-MM-DD HH:mm:ss')}}</span>
        <span class="fl"> {{detaArr.click}}次浏览</span>
        <span class="fl">分类:民生竞技</span>
      </p>
    </div>
    <hr>
    <!-- 内容部分-->
     <div class="content-dirails">
      <p v-html="detaArr.content"></p>
     </div>

     <!--评论子组件 -->
     <subcommon :detalisId="this.$route.params.newid"></subcommon>
  </div>
 
</template>

<style scoped>
  h4{
    margin:5px 2px;
    padding-bottom:10px;
    color:#26aaff;
  }
  hr,p{
    padding:0;
    margin:0;
  }
  hr{
    color:black;
  }
  .box{
    padding:5px 5px;
  }
  .fl{
    float:right;
    padding-left:10px;
  }
</style>

<script>
import common from '../../js/common.js'
import subcommon from '../subcomponent/subcommon.vue'
import { Indicator } from 'mint-ui';
   export default{
     data(){
      return {
        detaArr:[],
        isloading:false
      }
     },
     created(){
        this.getdetailsData()
     },
     methods:{
      getdetailsData(){
        const url = common.apihost+'api/getnew/'+this.$route.params.newid

         Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                  });

        this.$http.get(url).then(response=>{
           Indicator.close();
            this.detaArr=response.body.message[0]
            this.isloading=true
            // console.log(this.detaArr)
        },err=>{
           Indicator.close();
        })
      }
     },
     components:{
      subcommon:subcommon
    }
   }
</script>