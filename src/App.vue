<style>
  .dataview{
    min-height: 100vh;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
  }
  /*diao ding start*/
  .layout-ceiling{
    background: #077;
    padding: 10px 0;
    overflow: hidden;
    color: #fff;
  }
  .layout-ceiling-main{
    float: right;
    margin-right: 15px;
  }
  .layout-ceiling-main a{
    /*color: #9ba7b5;*/
    color: #fff;
  }
  /*diao ding end*/
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
    min-height:75vh;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    /*height: 60px;*/
    margin-left: 15px;
    margin:15px;
  }
  .layout-logo-left{
    width: 90%;
    height: 50px;
    background: floralwhite;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-logo-left img{
    height: 50px;
  }
  /*long button style*/
  .longButton{
    width: 97.5%;
    margin: 0 auto;
    display: block;
    font-size: 14px;
  }
</style>

<template>
  <div class="layout" id="app">
    <!--吊顶部分-->
    <div class="layout-ceiling">
      <div class="layout-ceiling-main">
        <!--<a href="#">注册登录</a> |
        <a href="#">帮助中心</a> |
        <a href="#">安全中心</a> |-->
        <a href="javascript:void(0);">帮助中心</a> |
        <a href="logout.jsp">注销登录</a>
      </div>
    </div>
    <Row type="flex" class-name="dataview">
      <!--左菜单-->
      <i-col span="4" class="layout-menu-left">
        <div class="layout-logo-left"><img src="./assets/logo.png" alt=""></div>
        <Menu :active-name="activeMenuItem"
              :open-names="openMenuItem"
              @on-select="gorouter"
              theme="dark" width="auto"accordion>
          <Submenu v-for="menu in menus" :name="menu.name" :key="menu.name">
            <template slot="title">
              <Icon :type="menu.icon"></Icon>
              {{menu.title}}
            </template>
            <Menu-item  v-for="(submenu,key) in menu.memuitem"
                        :key="key"
                        :name="key">{{submenu.text}}</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <!--内容区-->
      <i-col span="20">
        <router-view v-if="isnew"></router-view>
        <div class="layout-copy">
          2012-2017 &copy; 谆享教育
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import router from './router/index.js'//引入路由配置，没啥卵用
  import menuConfig from './config/menu.config.json'//遍历菜单
  export default {
      data:function(){
          return {
            menus:menuConfig.menus,
            openMenuItem:[this.$route.name[0]],//根据路由名字展开菜单
            activeMenuItem:this.$route.path,//根据路由设置选中的菜单
            isnew:true//销毁组件的一个变量
          }
      },
      methods:{
        //点击后进行路由跳转
        gorouter:function(name){
            if(name!=null){
              this.isnew=false;//销毁组件
              this.$nextTick(function(){this.isnew=true})//重建组件
              router.push(name);//路由跳转
            }
        }
      }
  }
</script>
