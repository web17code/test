<style scoped>
  .chatsConent{
    margin:15px;
  }
  .chatsConent .chatTitle_blue{
    height: 40px;
    text-align: center;
    line-height:40px;
    background-color:#5F9EA0;
    color: #fff;
    font-size: 14px;
  }
  .chatsConent .chatTitle_red{
    height: 40px;
    text-align: center;
    line-height:40px;
    background-color:#E67D6A;
    color: #fff;
    font-size: 14px;
  }
  .chatBaseStyle{
    height: 260px;
    padding-left:5px;
    padding-right:5px;
    padding-bottom:5px;
    padding-top:20px;
    background: #fff;
    border:1px solid #d1dbe5;
    border-top:none;
  }
</style>

<template>
  <div class="chatsConent Sshadow">
    <div :class="chartTitleClass">{{ctitle}}</div>
    <div :id="id" :option="option" class="chatBaseStyle"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts';//引入图表库
  import dataProcess from '../utils/dataProcess';//引入后台数据处理方法
  export default{
    name: 'chatbase',
    props:{
      id:{//图标的id
        type:String
      },
      option:{//图表的基本配置
        type:Object
      },
      chartTitleClass:{//图标的标题类名
        type:String
      },
      ctitle:{//图标标题
        type:String
      },
      getchartUrl:{//图表数据请求路径
        type:String,
        default:""
      }
    },
    mounted: function(){
      if(this.getchartUrl!=""){
        this.$http.get(this.getchartUrl).then(function (data) {
          //处理数据
          var data = data.data.data;
          var worked = dataProcess[this.id](data,this.option,this.$route);
          new Highcharts.chart(this.id,worked);
        })
      }
    }
  }
</script>
