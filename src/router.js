import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue';
import Markdown from '@/components/Markdown.vue';
import GithubLog from '@/components/GithubLog.vue';
import Grid from '@/components/grid/Grid.vue';
import TreeStructure from '@/components/tree-structure/TreeStructure.vue';
// const svgPath = '@/components/svg/Svg.vue';
import Svg from '@/components/svg/Svg.vue';
import Modal from '@/components/modal/Modal.vue';
import DraggableHeader from '@/components/draggable-header/DraggableHeader.vue';
import EmbededComponent from '@/components/embeded-component/EmbededComponent.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/home',
          name: 'home',
          component: Home,
      },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
      {
          path:'/app/helloworld',
          name: 'helloworld',
          component: HelloWorld,
      },
      {
          path:'/app/markdown',
          name: 'markdown',
          component: Markdown,
      },
      {
          path:'/app/github-log',
          name: 'github-log',
          component: GithubLog,
      },
      {
          path:'/app/grid',
          name: 'grid',
          component: Grid,
      },
      {
          path: '/app/tree-structure',
          name: 'tree-structure',
          component: TreeStructure
      },
      {
          path: '/app/svg',
          name: 'svg',
          // component: () => import(/* webpackChunkName: 'svg' */ svgPath)
          component: Svg
      },
      {
          path: '/app/modal',
          name: 'modal',
          component: Modal
      },
      {
          path: '/app/draggable-header',
          name: 'draggable-header',
          component: DraggableHeader
      },
      {
          path: '/app/embeded-component',
          name: 'embeded-component',
          component: EmbededComponent
      },
      {
          path: '/',
          redirect: {name:'helloworld'},
      },
  ]
})
