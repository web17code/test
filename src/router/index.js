import Vue from 'vue'
import Router from 'vue-router'
import All1page from '../view/All1page.vue'//首页
import personInfoTutor from '../view/personInfoTutor.vue'//人员信息教师的页面
import personInfoStu from '../view/personInfostu.vue'//人员信息教师的页面
import personInfoTemp from '../view/personInfotemp.vue'//人员信息临时工的页面
import orgMap from  '../view/orgMap.vue'//机构信息的地图页面
import orgResetPage from  '../view/orgResetPage.vue'//机构信息的页面

//积分银行临时用
import JFBANK from '../view/JFBANK.vue'

import page404 from "../view/404.vue"


Vue.use(Router)

var router = new Router({
  routes: [
    {
      path:'/',
      name:['index',"总览",'pk'],
      component:All1page,
    },
    {
      path:'/All',
      name:['All',"总览"],
      component:All1page,
    },
    //机构的路由
    {
      path:'/organ_map',
      name:['organ','全区',"D27C86EE280F4D6EA9E1B06752F66220",4,5],
      component:orgMap,
    },
    {
      path:'/organ_preschoolEdu',
      name:['organ','学前教育',"D27C86EE280F4D6EA9E1B06752F66220",4,5],
      component:orgResetPage,
    },
    {
      path:'/organ_primaryschool',
      name:['organ',"小学","B1B48027D18C4108BB567723D763034E",9,10],
      component:orgResetPage,
    },
    {
      path:'/organ_initialmiddleschool',
      name:['organ',"中学","F302FFEF8B364108BCD825D895D843BC",13,15],
      component:orgResetPage,
    },
    {
      path:'/organ_nineYear',
      name:['organ',"一贯制","FD3F1B36E28349479F6817ECDEA273E3",11,13],
      component:orgResetPage,
    },
    {
      path:'/organ_specialEdu',
      name:['organ',"特殊教育","FE2673BFD8704E12A949C5B7EB940273",4,5],
      component:orgResetPage,
    },
    {
      path:'/organ_ZZZY',
      name:['organ',"中职成校","F5EBC4EA7D3846419601AB3ACC70B94F	",18,23],
      component:orgResetPage
    },
    {
      path:'/organ_otherOrg',
      name:['organ',"其他单位","8c1980ffdb804f7286b10a7fca945d68",4,5],
      component:orgResetPage
    },
    {
      path:'/organ_relateOrg',
      name:['organ',"相关机构","0ace878d4854452096f31aa691e774ee",4,5],
      component:orgResetPage
    },
    {
      path:'/organ_civilianOrg',
      name:['organ',"民办教育","AB54DB4D3E63475FAB30DBCE4E29D564",5,6],
      component:orgResetPage
    },
    /*线上使用纳民小学
    {
      path:'/organ_civilianOrg',
      name:['organ',"纳民小学","AB54DB4D3E63475FAB30DBCE4E29D564",5,6],
      component:orgResetPage
    },*/
    /*{
      path:'/organ_relevantOrg',
      name:['organ',"相关机构"],
      component:orgResetPage
    },
    {
     path:'/organ_adultSchool',
     name:['organ',"成校","000000XXLB2012090113420140919632981",4,5],
     component:orgResetPage
     },
    {
      path:'/organ_privateNineEdu',
      name:['organ',"民办九年制"],
      component:orgResetPage
    },
    {
      path:'/organ_nonGovernmentalEdu',
      name:['organ',"民非学校"],
      component:orgResetPage
    },
    {
      path:'/organ_privateSpecialEdu',
      name:['organ',"民办特教"],
      component:orgResetPage
    },
    {
      path:'/organ_privatePreEdu',
      name:['organ',"民办早教"],
      component:orgResetPage
    },
    {
      path:'/organ_privateKindergarten',
      name:['organ',"民办幼儿园"],
      component:orgResetPage
    },*/
    //人员信息的路由
    {
      path:'/person_publicTeach',
      name:['person',"公办","tutor"],
      component:personInfoTutor
    },
    {
      path:'/person_privateTeach',
      name:['person',"民办","tutor"],
      component:personInfoTutor
    },
    {
      path:'/person_publicStudent',
      name:['person',"公办","stu"],
      component:personInfoStu
    },
    {
      path:'/person_privateStudent',
      name:['person',"民办","stu"],
      component:personInfoStu
    },
    {
      path:'/person_temporary',
      name:['person',"临时工"],
      component:personInfoTemp
    },

    //积分银行临时用
    {
      path:'/JFBANK',
      name:"积分银行演示",
      component:JFBANK
    },


    //没有找到路由的情况
    {
      path:'/*',
      name:['other',"404"],
      component:page404
    }
  ]
})
export default router;
