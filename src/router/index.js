import Vue from 'vue'
import Router from 'vue-router'
import All1page from '../view/All1page.vue'
import orgAllPage from '../view/orgAllPage.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path:'/',
      name:'All',
      component:All1page,
      query:{"param":"总览"}
    },
    {
      path:'/All',
      name:'All',
      component:All1page,
      query:{"param":"也是总览"}
    },
    //机构的路由
    {
      path:'/organ_All/',
      name:'organ',
      component:orgAllPage,
      query:{"param":"机构总览"}
    },
    {
      path:'/organ_preschoolEdu',
      name:'organ',
      component:orgAllPage,
      query:{"param":"学前教育"}
    }

    //
  ]
})
export default router;
