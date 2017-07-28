/**
 * Created by web17code on 2017/7/11.
 */
var options = {
  "ctitle":{
    stutitle1:"户籍分布数据",
    stutitle2:"学生不同性别年龄分布统计",
    stutitle3:"学生年龄分布统计",
    stutitle4:"学生性别分布统计",
    stutitle5:"学生性别分布统计",
    tutortitle1:"职称",
    tutortitle2:"年龄分布",
    tutortitle3:"男女比例",
    tutortitle4:"待定4",
    tutortitle5:"待定5"
  },
  //柱状图配置（横向）
  bar:{
    chart: {
      type: 'bar'                         //指定图表的类型，默认是折线图（line）
    },
    title: {
      text:"标题",
      useHTML:true,
      style:{display:"none"}
    },
    xAxis: {
      categories: ['苹果', '香蕉', '橙子'] //指定x轴分组
    },
    yAxis: {
      min:0,
      title: {
        text: '吃水果个数'                //指定y轴的标题
      }
    },
    series: [{                              //指定数据列
      name: '小明',                       //数据列名
      data: [1, 1, 4]                     //数据
    }, {
      name: '小红',
      data: [5, 7, 3]
    }],
    credits: {                //去掉hightcharts水印
      enabled:false
    }
  },
  //纵向柱状图配置
  column:{
    chart: {
      type: 'column'                         //指定图表的类型，默认是折线图（line）
    },
    title: {
      text:"标题",
      useHTML:true,
      style:{display:"none"}
    },
    xAxis: {
      categories: ['苹果', '香蕉', '橙子'] //指定x轴分组
    },
    yAxis: {
      title: {
        text: '吃水果个数'                //指定y轴的标题
      }
    },
    series: [{                              //指定数据列
      name: '小明',                       //数据列名
      data: [1, 1, 4]                     //数据
    }, {
      name: '小红',
      data: [5, 7, 3]
    }],
    credits: {                //去掉hightcharts水印
      enabled:false
    }
  },
  //堆叠柱状图配置
  stackingBar:{
    chart: {
      type: 'bar'                         //指定图表的类型，默认是折线图（line）
    },
    title: {
      text:"标题",
      useHTML:true,
      style:{display:"none"}
    },
    plotOptions: {
      series:{
        stacking: 'normal'
      }
    },
    legend: {
      reversed: true
    },
    xAxis: {
      categories: ['苹果', '香蕉', '橙子'] //指定x轴分组
    },
    yAxis: {
      /*min:0,*/
      title: {
        text: ''               //指定y轴的标题
      }
    },
    series: [{
      name: '小红',
      data: [5, 7, 3]
    },{                              //指定数据列
      name: '小明',                       //数据列名
      data: [1, 1, 4]                     //数据
    },{
      name: '小华',
      data: [5, 7, 3]
    }],
    credits: {                //去掉hightcharts水印
      enabled:false
    }
  },
  //基本饼图配置
  pie:{
    title: {
      text:"标题",
      useHTML:true,
      style:{display:"none"}
    },
    tooltip: {
      headerFormat: '{series.name}<br>',
      //pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
      pointFormatter: function(){return this.series.name+"<b>"+(this.y*100).toFixed(2)+"%</b><br/>"}
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
      name: '数据分布',
      data: [
        ['Firefox',   55.0],
        ['IE',       26.8],

      ]
    }],
    credits: {                //去掉hightcharts水印
      enabled:false
    }
  }
}
export default options;
