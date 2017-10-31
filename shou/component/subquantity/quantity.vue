<template>
  <div class="stylequantity">
      <div class="left" @click="subtract">-</div>
      <div class="content">{{conten}}</div>
      <div class="right" @click="add">+</div>
  </div>
</template>
<style scoped>
.stylequantity{
  margin:10px 0px;
}
  .left,.content,.right{
    border:1px solid rgba(92,92,92,.3);
    display:inline-block;
    width:30px;
    text-align:center;
    line-height:30px;
  }
</style>
<script>

export default{
  data(){
    return{
      conten:1
    }
  },
   created(){

    },
    methods:{
      subtract(){
        if(this.conten<=1){
          return
        }
        this.conten--
        this.inform()
      },
      add(){
        this.conten++
        this.inform()
      },
      inform(){
        console.log("传递给父组件建的---"+this.conten+"产品的数量")
        //参数1自定义事件的名称,参数2需要传递的值
        this.$emit('subNuber',this.conten)
      }
    }
  
}
</script>