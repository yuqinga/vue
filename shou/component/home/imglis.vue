<template>
  <div class="tmpl">
  <!-- 顶部导航部分 -->
    <div class="imgclassfiy">
      <ul>
        <li @click="getimgcontentData(0)" class="ntcih1">全部</li>
        <li v-for="item in imgnewlist" key="item.id" @click="getimgcontentData(item.id)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <!-- 内容部分 -->
    <div class="imgcontent">
      <ul>
        <li v-for="(item,index) in imgliscontent" :key="item.id" class="imglistcc">
          <router-link :to="'/img/imglist/imgdetails'+item.id">
            <img :src="item.img_url" alt="">
            <div class="hideconten">
              <span>{{item.title}}</span><br/>
            {{item.zhaiyao}}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
    .imgclassfiy{
     z-index:16;
     width:100%;
     position:fixed;
     top:40px;
     left:50px;
    }
    .imgclassfiy .ntcih1{
      position:fixed;
      top:40px;
      left:0px;
      background:#E7E7E7;
      line-height:25px;
      width:50px;
      text-align: center;
    }
    ul{
      list-style:none;
      margin:0;
      padding:0;
    }
    li{
      padding:0;
      margin:0;
    }
    .imgclassfiy ul{
      white-space:nowrap;
      overflow-x:auto;
      height:25px;
      background:#F6F6F6;
    }
    .imgclassfiy ul li{
      height:25px;
      line-height:25px;
      background:#F6F6F6;
    }
    .imgcontent ul{
      padding:3px 3px;
    }
    .imgcontent{
      margin:2px 2px;
    }
    .imgclassfiy li{
      display:inline;
      padding:0 0px;
    }
    img{
      display:block;
      width:100%;
      height:400px;
    }
    .imglistcc{
      position:relative;
      margin:5px 0px;
    }
    span{
      font-size:20px;
      font-weight:600;
    }
    .hideconten{
      position:absolute;
      left:0;
      bottom:0;
      background-color:rgba(0,0,0,.2);
      color:#f6f6f6;
    }
    .active{
      border-bottom:1px solid green;
    }
    

</style>
<script>
import common from '../../js/common.js'
import { Indicator } from 'mint-ui';
  export default {
      data(){
        return{
          imgnewlist:[],
          imgliscontent:[]
        }
      },
      created(){
        this.getimgData()
        this.getimgcontentData(0)
      },
      methods:{
        //获取导航
        getimgData(){
          const url = common.apihost+'api/getimgcategory'
          this.$http.get(url).then(res=>{
              this.imgnewlist = res.body.message
              console.log(this.imgnewlist)
              
          })
        },
        //获取内容部分
        getimgcontentData(id){
          const url = common.apihost+'api/getimages/'+id

          Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                  });

          this.$http.get(url).then(res=>{
            Indicator.close()
            // console.log(res.body.message)
            this.imgliscontent=res.body.message
          },err=>{
            Indicator.close();
          })
        }
      }

  }

</script>