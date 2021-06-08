import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'main',
    component: () => import('@/views/Main'),
    redirect:'/user',
    children:[
      {
        path:'/user',
        component: () => import('@/views/User')//用户管理
      },
      {
        path:'/classify',
        component: () => import('@/views/Classify') //查询分类
      },
      {
        path:'/classify/add',
        component: () => import('@/views/Classify/add.vue') //添加分类
      },
      {
        path:'/goods/set/add',
        component: () => import('@/views/Goods/add.vue') //添加商品
      },
      {
        path:'/goods/:state',
        component: () => import('@/views/Goods') //在售商品
      },
      {
        path:'/goods/set/updata',
        component: () => import('@/views/Goods/update.vue') //修改商品
      },
      {
        path:'/home',
        component: () => import('@/views/Home') //控制台
      },
      {
        path:'/news',
        component: () => import('@/views/News')
      },
      {
        path:'/news:id',
        component: () => import('@/views/News/newslist.vue')
      }
    ]
  },
  {
    path:'/login',
    component: () => import('@/views/Login')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
