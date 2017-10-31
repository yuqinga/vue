<template>
  <div class="tmpl">
  <!-- 标题 -->
    <div class="paddingborder">
      <h4>{{introduceArr.title}}</h4>
      <hr>
    </div>
      <!-- 内容部分 -->
    <div v-html="introduceArr.content"  class="padding"></div>
  </div>
</template>
<style scoped>
.tmpl{
  width:100%;
}
  h4{
    font-size:16px;
    color:#0094ff;
  }
  .padding,.paddingborder{
    padding:5px;
  }
  .gomeImgLoad{
    width:100%;
  }
 
</style>
<script>
import common from '../../js/common.js'

  export default{
    data(){
      return{
        introduceArr:{}
      }
    },
    created(){
      this.getintroduceDate()
    },
    methods:{
      getintroduceDate(){
        const url = common.apihost+'api/goods/getdesc/'+this.$route.params.goodsId
        this.$http.get(url).then(res=>{
          this.introduceArr=res.body.message[0]
          console.log(this.introduceArr)
        })

      }
    }
    
  }
</script>