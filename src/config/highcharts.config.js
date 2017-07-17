/**
 * Created by web17code on 2017/7/11.
 */
var options = {
  ctitle_969: {
    text:"标题",
    useHTML:true,
    style:{
      display:"none",
    }
  },
  //柱状图配置
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
  }
}
export default options;
