import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      // {
      //     path:'/app',
      //     component: App,
      //     children: [
      //         {
      //             path:'helloworld',
      //             name: 'helloworld',
      //             component: HelloWorld,
      //         }
      //     ]
      // },
      {
          path:'/app/helloworld',
          name: 'helloworld',
          component: HelloWorld,
      },
      {
          path: '/',
          redirect: {name:'helloworld'},
      },
  ]
})
