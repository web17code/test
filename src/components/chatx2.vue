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
  import Highcharts from 'highcharts';
  export default{
    name: 'chatbase',
    props:{
      id:{
        type:String
      },
      option:{
        type:Object
      },
      chartTitleClass:{
        type:String
      },
      ctitle:{
        type:String
      }
    },
    mounted: function(){
      new Highcharts.chart(this.id,this.option);
    }
  }
</script>
