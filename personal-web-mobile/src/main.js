// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'mint-ui/lib/style.css'

import LayOut from './components/layout.vue'
import Header from './components/header.vue'
import Tabbar from './components/tabbar.vue'
import MyInfo from './components/myinfo.vue'
import ArticleList from './components/articleList.vue'
import ArticleDetail from './components/articleDetail.vue'
import DetailHeader from './components/detailHeader.vue'
import HeaderImg from './components/headerImg.vue'

Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        headerimg:HeaderImg,
        tabbar: Tabbar,
        myinfo: MyInfo,
        articlelist: ArticleList
      }
    },
    {
      path:'/detail',
      components:{
        header: DetailHeader,
        headerimg:HeaderImg,
        tabbar: Tabbar,
        myinfo: MyInfo,
        articlelist: ArticleDetail
      }
    }
  ]
})

let store = new Vuex.Store({
  state: {
    totalPrice: ''
  },

  mutations: {
    web (state) {
      state.totalPrice = '网站制作'
    },
    js (state) {
      state.totalPrice = '原生js'
    },
    wx (state) {
      state.totalPrice = '微信小程序'
    },
    vuejs (state) {
      state.totalPrice = 'vue.js'
    }
  },

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  render: h => h(LayOut),
  components: { LayOut }
})
