<style scoped>
</style>

<template>
    <div :id="id"
         :option="option"
         :style="{height:size.height,width:size.width}"></div>
</template>
<script>
  import Highcharts from 'highcharts';//引入图表库
  import dataProcess from '../utils/dataProcess';//引入后台数据处理方法
  export default{
    name: 'chatHeadless',
    props:{
      id:{//图标的id
        type:String
      },
      option:{//图表的基本配置
        type:Object
      },
      getchartUrl:{//图表数据请求路径
        type:String,
        default:""
      },
      size:{
          type:Object,
          default:{
            height:"400px",
            width:"auto"
          }

      }
    },
    mounted: function(){
      if(this.getchartUrl!=""){
        this.$http.get(this.getchartUrl).then(function (data) {
          //处理数据
          var data = data.data;
          var worked = dataProcess[this.id](data,this.option,this.$route,Highcharts);
          new Highcharts.chart(this.id,worked);
        })
      }
    }
  }
</script>
