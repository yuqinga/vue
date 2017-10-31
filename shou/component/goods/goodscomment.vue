<template>
  <div class="tmpl">
  <subcomponent :detalisId="this.$route.query.goodsId"></subcomponent>
  </div>
</template>
<style scoped>
  
</style>
<script>
  import subcomponent from '../subcomponent/subcommon.vue'
  export default{
      components:{
        subcomponent
      }
  }
</script>