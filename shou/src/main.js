//描述与vue的关系
//导入我们的第三方包
import Vue from 'vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Moment from 'moment'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'

//集成到Vue中
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VuePreview)
Vue.use(Vuex)

//导入mint的css样式  
import 'mint-ui/lib/style.css'
import'muiv3/dist/css/mui.min.css'
import'../css/common.css'



//引入要渲染的跟组件
import App from './App.vue'


//过滤器
Vue.filter('dateFmt',(input,formatString)=>{
  const lasteFormatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  return Moment(input).format(lasteFormatString)
})

//导入路由配置文件
import home from '../component/home/home.vue'
import classfiy from '../component/classfiy/classfiy.vue'
import shopping from '../component/shopping/shopping.vue'
import my from '../component/my/my.vue'


//导入九宫格里面的路由
import newlist from '../component/news/newlist.vue'
import newdetails from '../component/news/details.vue'
import imglist from '../component/home/imglis.vue'
import imgdefails from '../component/home/imgdetails.vue'
import goodslist from '../component/goods/goodslist.vue'
import goodsinfo from '../component/goods/goodsinfo.vue'
import goodsintroduce from '../component/goods/goodsintroduce.vue'
import goodscomment from '../component/goods/goodscomment.vue'


//定义路由// 动态路径参数 以冒号开头
const router = new VueRouter({
  routes:[
    { path:'/',redirect:'/home'},
    { path: '/home', component:home },
    { path: '/classify', component:classfiy },
    { path: '/shopping', component:shopping },
    { path: '/my', component:my },
    { path: '/new/newlist', component:newlist },
    { path: '/new/details/:newid', component:newdetails },
    { path: '/img/imglist', component:imglist},
    { path: '/img/imglist/imgdetails:imgId', component:imgdefails},
    { path: '/goods/goodslist',component:goodslist},
    { path: '/goods/goodsinfo/:goodsId',component:goodsinfo},
    { name:'goodsintroduce',path: '/goods/goodsintroduce',component:goodsintroduce},
    { path:'/goods/goodscomment',component:goodscomment}
    
  ]
})


//仓库的声明
const store = new Vuex.Store({
  state: {//用来储存数据
    goodArr:[]
  },
  getters:{//用来获取数据
    getgoodsinfo(state){//返回加入购物车的数据
      return state.goodArr
    },
    getsubcount(state){//返回加入购物车的商品数量
      let totaCount=0
      for(var i=0;i<state.goodArr.length;i++){
        totaCount+=state.goodArr[i].count
      }
      return totaCount
    }
  },
  mutations: {//同步更改数据
    addGoods(state,goodsObj){
      console.log("添加商品到购物车")
      console.log(state.goodArr)
      console.log(goodsObj)
      state.goodArr.push(goodsObj)
    }
  },
  actions:{//异步更改数据
    
  }
})

//创建根实例
new Vue({
  el:"#app",
   store,
   router,
  render:function(createElement){//当项目已启动显示的就是app的组件
    return createElement(App);
  }

})
