<template>
  <div class="tmpl" v-show="isloading">
    <!-- 标题 -->
    <div class="imgdetailstitle">
      <h3>{{imgdetaArr.title}}</h3>
      <p>
        <span>{{imgdetaArr.add_time| dateFmt("YYYY-MM-DD HH:mm:ss")}}</span>&nbsp;&nbsp;&nbsp;
        <span>{{imgdetaArr.click}}次浏览</span>
      </p>
    </div>
   <!-- 图片部分 -->
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in imgsrcArr" :key="index">
                   <img :src="item.src" alt="" class="srcimg preview-img" @click="$preview.open(index,imgsrcArr)">
                </li>
		        </ul> 
		</div>

   <!-- 内容部分 -->

   <div class="imgdetailscontent">
    <p v-html="imgdetaArr.content"></p>
   </div>

   <!-- 评论部分 -->

 <subcomponent :detalisId="imgdetaArr.id"></subcomponent>

  </div>
</template>
<style scoped>
    h3{
      padding-top:10px;
      color:#26aaff;
      font-size:20px; 
    }
    .srcimg{
      height:100px;
      width:100px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
      margin-right:-4px;
    }
    .imgdetailscontent p{
      margin-top:10px;
    }
    .pswp__top-bar{
      width:100%;
      height:100%;
    }
</style>
<script>
import common from '../../js/common.js'
import subcomponent from '../subcomponent/subcommon.vue'
  export default{
    data(){
      return{
        imgdetaArr:[],
        imgsrcArr:[],
        isloading:false
      }
    },
    created(){
      this.getimgdetailsData()
      this.getimgsrcData()
    },
    methods:{
      //获取内容部分
        getimgdetailsData(){
          const url = common.apihost+'api/getimageInfo/'+this.$route.params.imgId
          this.$http.get(url).then(res=>{
            // console.log(res.body.message)
            this.imgdetaArr=res.body.message[0]
          })
        },
        //获取图片部分
      getimgsrcData(){
        const url = common.apihost+'api/getthumimages/'+this.$route.params.imgId
        this.$http.get(url).then(res=>{
          this.isloading=true
          res.body.message.forEach(item=>{
            item.w = 600
            item.h = 400
          })
          this.imgsrcArr=res.body.message
          // console.log(this.imgsrcArr)
        })
      }
    },
   components:{
     subcomponent:subcomponent
   }

  }
</script>