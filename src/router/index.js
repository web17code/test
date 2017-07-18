import Vue from 'vue'
import Router from 'vue-router'
import All1page from '../view/All1page.vue'
import orgAllPage from '../view/orgAllPage.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path:'/',
      name:'Allele',
      component:All1page
    },
    {
      path:'/All/All',
      name:'Allele',
      component:All1page
    },
    {
      path:'/organ/All',
      name:'Allele2',
      component:orgAllPage
    }
  ]
})
export default router;