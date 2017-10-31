<template>
  <div class="tmpl">
    <div class="subtile">
      <h4>提交评论</h4>
      <hr>
      <!-- 输入框部分 -->
      <textarea ref="contentextarea" cols="10" rows="3" name=""></textarea>
      <mt-button type="primary" @click="postpushData">提交评论</mt-button>
    </div>
    <!--内容区 -->
    <div class="subcontent">
      <h4>评论列表</h4>
      <ul>
        <li v-for="(item,index) in commonlist" :key="index">
        <p>{{item.content}}</p>
          <span class="fl">{{item.add_time}}</span> <span class="fr">{{item.user_name}}</span>
        </li>
      </ul>
    <mt-button type="default" class="jiazai" @click="jiazai">加载更多</mt-button>      
    </div>
  </div>
</template>

<style scoped>
.subtile{
  margin:2px 5px;
}
  h5{
    color:black;
    padding-bottom:3px;
  }
  .mint-button--normal{
    width:100%;
  }
  textarea{
    margin:0;
  }
  .subcontent{
    margin:5px 5px;
  }
  ul{
   list-style: none;
   margin:0;
   padding:0;
  }
  li{
    border-top:1px solid gray;
    height:80px;
    padding:5px 0;
  }
  .fl{
    float:left; 
  }
  .fr{
    float:right;
  }
  p{
    height:40px;
  }
  span{
    font-size:14px;
    color:#26aaff;
  }
  .jiazai{
    padding:0;
    margin-top:10px;
    border:1px solid red;
    color:red;
  }
</style>
<script>
import common from '../../js/common.js'
import { Toast } from 'mint-ui'
  export default{
    data(){
      return{
        pageindex:1,
        commonlist:[]
      }
    },
    created(){
        // console.log("我是传递过来的"+this.detalisId)
        this.getsubData()
    },
    methods:{
      getsubData(){
        const url =common.apihost+'api/getcomments/:'+this.detalisId+"?pageindex="+this.pageindex
        this.$http.get(url).then(res=>{
         

         if(this.pageindex=1){
            this.commonlist=res.body.message
         }else{
           this.commonlist=this.commonlist.concat(res.body.message)
         }
         console.log(this.commonlist)
        })
      },
      jiazai:function(){
        this.pageindex++;
        console.log(this.pageindex);
        this.getsubData()
      },
      postpushData(){
        const values= this.$refs.contentextarea.value
         //判断一下用户输是否有值
         if(values==null|| values.trim().length<=0){
            Toast({
              message: "请输入内容",
              position: 'middle',
              duration: 3000
                  });
         }
         //发送请求
         const url = common.apihost+'api/postcomment/'+this.detalisId
         this.$http.post(url,{content:values},{emulateJSON:true}).then(res=>{
           console.log(res.body)
           if(res.body.status==0){
            Toast({
              message: res.body.message,
              position: 'middle',
              duration: 3000
                  });
           }
           //清空文本
           this.$refs.contentextarea.value=""
           //重新加载第一页的数据
           this.pageindex=1
           this.getsubData()
         })
        }
    },
    props:['detalisId']
  }
</script>
