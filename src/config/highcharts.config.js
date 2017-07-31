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
    tutortitle1:"户籍统计",
    tutortitle2:"年龄分布",
    tutortitle3:"男女比例",
    tutortitle4:"教师职称统计",
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
  //负值的条形图
  minusBar:{
    chart: {
      type: 'bar'
    },
    title: {
      text:"标题",
      useHTML:true,
      style:{display:"none"}
    },
    xAxis: [{
      categories: ['0-4', '5-9', '10-14', '15-19',
        '20-24', '25-29', '30-34', '35-39', '40-44',
        '45-49', '50-54', '55-59', '60-64', '65-69',
        '70-74', '75-79', '80-84', '85-89', '90-94',
        '95-99', '100 + '],
      reversed: false,
      labels: {
        step: 1
      }
    }, { // mirror axis on right side
      opposite: true,
      reversed: false,
      //categories: categories,
      linkedTo: 0,
      labels: {
        step: 1
      }
    }],
    yAxis: {
      title: {
       text: ''               //指定y轴的标题
      },
      labels: {
        formatter: function () {
          //return (Math.abs(this.value) / 1000000) + 'M';
          return (this.value<0?this.value*-1:this.value) + '人';
        }
      },
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    tooltip: {
      formatter: function () {
        var num = this.point.y<0?this.point.y*-1:this.point.y
        return '<b>年龄分布：'  + this.point.category + '</b><br/>' +
          '数量: ' +num;
      }
    },
    series: [{
      name: '男',
      data: [-1746181, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
        -2664537, -3556505, -3680231, -3143062, -2721122, -2229181, -2227768,
        -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
    }, {
      name: '女',
      data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
        3360596, 3493473, 3050775, 2759560, 2304444, 2426504, 2568938, 1785638,
        1447162, 1005011, 330870, 130632, 21208]
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
      pointFormatter: function(){ return this.name+"<b>"+(this.y*100).toFixed(2)+"%</b><br/>"}
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
  //
}
export default options;
