<template>
  <div class="tmpl">
  <!--新闻列表页 -->
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in newslisArr" :key="index">
					<a href="javascript:;" class="">
           <router-link :to="'/new/details/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<p class="mui-ellipsis">{{item.zhaiyao}}</p>
              <p>
                <span class="fl">{{item.add_time | dateFmt('YYYY-MM-DD HH:mm')}}</span> <span class="fr">点击{{item.click}}次</span>
              </p>
						</div>
          </router-link>
					</a>
				</li>
			</ul>
  </div>
</template>
<style scoped>
h3{
  font-size:16px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
   color:#26aaff;
}
.mui-table-view-cell{
  height:80px;
}
.mui-media-object{
  max-width:60px;
  height:60px;
}
  span{
    color:#26aaff;
    font-size:12px;
     font-weight:lighter;
  }
  .fl{
    float:left;

  }
  .fr{
    float:right;
  }
.mui-ellipsis{
  font-size:12px;
  font-weight:lighter;
}

</style>
<script>

//导入连接
import common from '../../js/common.js'

  export default{
    data(){
      return {
        newslisArr:[]
      }
    },
    created(){
        this.getnewlistData()
    },
    methods:{
      getnewlistData(){
        const url = common.apihost +'api/getnewslist'
        this.$http.get(url).then(response=>{
            this.newslisArr=response.body.message
            // console.log(this.newslisArr)
        })
      }
    },
  }
</script>