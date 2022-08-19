import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'
import Recommend from '@/components/Recommend.vue'
import User from '@/components/user.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
    redirect:'/welcome',
      children:[
        {
          
          path:'/welcome',
          component:Welcome,
          children:[
            {
            name:"tuijain",
            path:'/recommend',
            component:Recommend
          },
          
          ]
        },
        
      ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
