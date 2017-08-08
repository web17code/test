/**
 * Created by web17code on 2017/7/28.
 * 处理不同图标的数据，
 * 每一个都是对应图表的id，具体方法根据给的数据写死的（时间活）
 * 格式：function xx (source,worked){return worked}
 * 参数：source后台数据,worked图表基本配置数据
 * 返回值：worked生成图表的数据
 */
//图例配置
var legend = {
  layout: 'vertical',
  align: 'right',
  verticalAlign: 'top',
  x: 0,
  y: 0,
  floating: true,
  borderWidth: 1,
  backgroundColor: ('#FFFFFF'),
  shadow: true
}
//机构信息的stu1_pie 学生数据图标1，饼图
function stu1_pie(source,worked,route){
  worked.series=[];//清空默认的数据
  worked.series[0]={};
  worked.series[0].name="户籍分布";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]=["沪籍",source.hj_local_count/source.total];
  worked.series[0].data[1]=["未分类",source.hj_other_count/source.total];
  worked.series[0].data[2]=["非沪籍",source.hj_out_count/source.total];
  return worked;
}
function stu2_stackingBar (source,worked,route){
  worked.series=[];//清空默认的数据
  worked.series[0]={};
  worked.series[0].name="男生";
  worked.series[0].data = [source.boy.age_count_small,source.boy.age_count_between,source.boy.age_count_large]
  worked.series[1]={};
  worked.series[1].name="女生";
  worked.series[1].data = [source.girl.age_count_small,source.girl.age_count_between,source.girl.age_count_large]
  worked.xAxis.categories=[route.name[3]+"岁以下", route.name[3]+'-'+route.name[4]+'岁',route.name[4]+'岁以上'];
  return worked;
}
function stu3_pie(source,worked,route){
  worked.series=[];//清空默认的数据
  worked.series[0]={};
  worked.series[0].name="年龄比例";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]=[route.name[3]+"岁以下",source.age_count_small/source.total];
  worked.series[0].data[1]=[route.name[3]+'-'+route.name[4]+'岁',source.age_count_between/source.total];
  worked.series[0].data[2]=[route.name[4]+'岁以上',source.age_count_large/source.total];
  return worked;
}
function stu4_column(source,worked,route){
  worked.series=[];//清空默认的数据
  worked.series[0]={name:"男生",data:[source.boy_count]};
  worked.series[1]={name:"女生",data:[source.girl_count]};
  worked.xAxis.categories=['性别'];
  worked.yAxis.title.text="";
  return worked;
}
function tutor1_pie(source,worked,route){
  worked.series=[];//清空默认的数据
  worked.series[0]={};
  worked.series[0].name="户籍分布";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]=["沪籍",source.hj_local_count/source.total];
  worked.series[0].data[1]=["未分类",source.hj_other_count/source.total];
  worked.series[0].data[2]=["非沪籍",source.hj_out_count/source.total];
  return worked;
}
function tutor2_minusBar(source,worked,route){
  worked.series = [];//清空数据
  worked.series[0]={};
  worked.series[0].name="男";
  worked.series[0].data=[source.boy_age_large_count*-1,source.boy_age_between_count*-1,source.boy_age_small_count*-1,source.boy_age_null_count*-1];
  worked.series[1]={};
  worked.series[1].name="女";
  worked.series[1].data=[source.girl_age_large_count,source.girl_age_between_count,source.girl_age_small_count,source.girl_age_null_count];
  worked.xAxis[0].categories=[];
  worked.xAxis[1].categories=[];
  worked.xAxis[0].categories=["45岁以上","30-45岁","30岁以下","未分类"];//修改x轴显示
  worked.xAxis[1].categories=["45岁以上","30-45岁","30岁以下","未分类"];//修改x轴显示
  return worked;
}
function tutor3_pie(source,worked,route){
  worked.series=[];//清空默认的数据
  worked.series[0]={};
  worked.series[0].name="性别比例";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]=["男",source.boy_count/source.total];
  worked.series[0].data[1]=["未分类",source.other_count/source.total];
  worked.series[0].data[2]=["女",source.gril_count/source.total];
  return worked;
}
function tutor4_column(source,worked,route){
  worked.series=[];//清空默认的数据
  worked.series[0]={name:"人数",data:[source.level_senior_count,source.level_one_count,source.level_two_count,source.level_three_count,source.level_other_count]};
  worked.xAxis.categories=["高级教师","一级教师","二级教师","三级教师","其他"];
  worked.yAxis.title.text="";
  worked.legend = legend;
  worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
  return worked;
}
//人员信息的教师页面的数据处理函数
function persontutor1_column(source,worked,route){
  worked.series=[];//清空默认的数据
  worked.series[0]={name:"人数",data:[source.bk,source.zk,source.zz,source.zs,source.dz,source.yjs]};
  worked.xAxis.categories=["本科","专科","中专","中师","大专","研究生"];
  worked.yAxis.title.text="人数";
  worked.legend = legend;
  worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
  return worked;
}
function persontutor2_column(source,worked,route){
  worked.series=[];//清空默认的数据
  worked.series[0]={name:"人数",data:[source.bs,source.ss,source.xs]};
  worked.xAxis.categories=["博士","硕士","学士"];
  worked.yAxis.title.text="人数";
  worked.legend = legend;
  worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
  return worked;
}
//人员信息的学生页面的数据处理函数
function personstu1_column(source,worked,route){
  worked.series=[];//清空默认的数据
  //数据格式
  var backDataStyle = {
    grade_tx_count  :  "托小",
    grade_tz_count  :  "托中",
    grade_td_count  :  "托大",
    grade_xb_count  :  "小班",
    grade_zb_count  :  "中班",
    grade_db_count  :  "大班",
    grade_hlb_count :  "混龄班",
    grade_ynj_count :  "一年级",
    grade_enj_count :  "二年级",
    grade_snj_count :  "三年级",
    grade_snj_count :  "四年级",
    grade_wnj_count :  "五年级",
    grade_lnj_count :  "六年级",
    grade_qnj_count :  "七年级",
    grade_bnj_count :  "八年级",
    grade_jnj_count :  "九年级",
    grade_gy_count  :  "高一",
    grade_ge_count  :  "高二",
    grade_gs_count  :  "高三",
    grade_gy_count  :  "高预(民族班)",
		grade_gsi_count :  "高四(盲校)",
    grade_qt_count :  "其他(特教)"}
  worked.series[0]={name:"个数",data:[]}
  worked.xAxis.categories = [];
  //添加图表数据
  for(var key in backDataStyle){
    worked.series[0].data.push(source[key]);
    worked.xAxis.categories.push(backDataStyle[key]);
  }
  worked.yAxis.title.text="";
  worked.legend = legend;
  worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
  return worked;
}
function personstu2_pie(source,worked,route){
  worked.series[0]={};
  worked.series[0].name="户籍分布";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]=["沪籍",source.hj_local_count/source.total];
  worked.series[0].data[1]=["未分类",source.hj_other_count/source.total];
  worked.series[0].data[2]=["非沪籍",source.hj_out_count/source.total];
  return worked;
}
function personstu3_pie(source,worked,route){
  worked.series[0]={};
  worked.series[0].name="户籍类型分布";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  var total = 0;
  for(var key in source){
    total+=parseInt(source[key]);
  }
  worked.series[0].data[0]=["未落常住户口",source.hk_resident/total];
  worked.series[0].data[1]=["非农业家庭户口",source.hk_not_agriculture/total];
  worked.series[0].data[2]=["农业家庭户口",source.hk_agriculture/total];
  worked.series[0].data[3]=["非农业集体户口",source.hk_not_collective/total];
  worked.series[0].data[4]=["农业集体户口",source.hk_collective/total];
  worked.series[0].data[5]=["其他户口",source.hk_other/total];
  return worked;
}
//人员信息临时工页面
function persontemp1_minusBar(source,worked,route){
  worked.series = [];//清空数据
  worked.series[0]={};
  worked.series[0].name="男";
  worked.series[0].data=[source.boy.teacher_age_small_count*-1,source.boy.teacher_age_between1_count*-1,source.boy.teacher_age_between2_count*-1,source.boy.teacher_age_between3_count*-1,source.boy.teacher_age_large_count*-1];
  worked.series[1]={};
  worked.series[1].name="女";
  worked.series[1].data=[source.girl.teacher_age_small_count,source.girl.teacher_age_between1_count,source.girl.teacher_age_between2_count,source.girl.teacher_age_between3_count,source.girl.teacher_age_large_count];
  worked.xAxis[0].categories=[];
  worked.xAxis[1].categories=[];
  worked.xAxis[0].categories=["25岁以下","25-35岁","35-45岁","45-55岁","55岁以上"];//修改x轴显示
  worked.xAxis[1].categories=["25岁以下","25-35岁","35-45岁","45-55岁","55岁以上"];//修改x轴显示
  return worked;
}
function personTemp2_pie(source,worked,route){
  worked.series[0]={};
  worked.series[0].name="性别统计";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]=["男",source.boy_count/source.total];
  worked.series[0].data[1]=["女",source.gril_count/source.total];
  worked.series[0].data[2]=["未分类",source.other_count/source.total];
  return worked;
}
//总览页面
function All1_twoPie(source,worked,route,Highcharts){
  var colors = {
    GB:"#8085e8",
    MB:"#90ed7d",
    QT:"#f15c80"
  }
  //各类型的数量
  var GB_num = source.type_bb.GB;
  var MB_num = source.type_bb.MB;
  var QT_num = source.type_bb.QT;
  //整理数据，将原数据进行分组
  var items = source.type_lb;//要遍历的数据
  var itemsed={};//存放处理后的数据
  var total = 0;//所有机构总数量
  for(var i = 0; i<items.length; i++){
    total+=items[i].total;
    if(itemsed[items[i].type_py]!=undefined){
      //存在key，只存子元素的数据
      itemsed[items[i].type_py].sdata.push({
        name: items[i].name,
        total:items[i].total
      })
    }else{
      itemsed[items[i].type_py]={};//创建key对应的对象
      itemsed[items[i].type_py].type_name = items[i].type_name;
      itemsed[items[i].type_py].type_py = items[i].type_py;
      itemsed[items[i].type_py].sdata = [];//创建该项的子数据
      itemsed[items[i].type_py].sdata.push({//存子数据
        name: items[i].name,
        total:items[i].total
      })
    }
  }
  itemsed.GB.total = GB_num;
  itemsed.MB.total = MB_num;
  itemsed.QT.total = QT_num;
  var innerData = [];//内圈数据
  var outerData = [];//外圈数据
  var items = source.type_lb;
  //循环得到外层数据
  /*for(var i = 0; i<items.length; i++){
    outerData.push({
      name:items[i].name,
      y:items[i].total,
      color:colors[i]
    });
  }*/
  for(var key in itemsed){
    innerData.push({
      name:itemsed[key].type_name,
      y:itemsed[key].total,
      color:colors[key]
    })
    var itemed = itemsed[key].sdata;
    for(var i = 0; i < itemed.length; i++){
      outerData.push({
        name:itemed[i].name,
        y:itemed[i].total,
        color:Highcharts.Color(colors[key]).brighten((itemed[i].total/total)/2).get()
      })
    }
  }
  worked.series=[];//清空默认数据
  worked.series[0]={};
  worked.series[0].name="数量";
  worked.series[0].size="50%";
  worked.series[0].data=innerData;
  worked.series[0].dataLabels={
    formatter: function () {
      return this.y > 5 ? this.point.name : null;
    },
    color: 'white', // 距离值为负时显示在在扇区里面
    distance: -70
  }
  worked.series[1]={};
  worked.series[1].name="机构";
  worked.series[1].size="60%";
  worked.series[1].innerSize='50%';
  worked.series[1].data=outerData;
  worked.series[1].dataLabels={
    softConnector: true,   // 是否使用曲线
    //connectorColor: 'red', // 连接线颜色，默认是扇区颜色
    distance: 10, // 数据标签与扇区距离
    connectorPadding: 0,  // 数据标签与连接线的距离
    formatter: function () {
      // 通过函数判断是否显示数据标签，为了防止数据标签过于密集
      return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + ((this.y/total)*100).toFixed(2) + '%'  : null;
    }
  }
  //Highcharts.Color(data[i].color).brighten(brightness).get()
  return worked;
}
//总览页面的学生分析
function All1stu_Pie(source,worked,route,Highcharts){
  var source = source.data;
  worked.series=[];//清空默认的数据
  worked.series[0]={};
  worked.series[0].name="户籍分布";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]={name: '沪籍',y: source.hj_local_count,sliced: true,selected: true}
  worked.series[0].data[1]=["未分类",source.hj_other_count];
  worked.series[0].data[2]=["非沪籍",source.hj_out_count];
  worked.plotOptions.pie.size="70%";
  worked.tooltip={
    headerFormat: '{series.name}:<br>',
    pointFormatter: function(){ return this.name+":<b>"+this.y+"名，百分比："+((this.y/source.total)*100).toFixed(2)+"%</b><br/>"}
  };
  return worked;
}
function All1stu_Pie_2(source,worked,route,Highcharts){
  var source = source.data;
  worked.series[0]={};
  worked.series[0].name="学生办别统计";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]={name: '公办',y: source.gb,sliced: true,selected: true}
  worked.series[0].data[1]=["民办",source.mb];
  worked.plotOptions.pie.size="70%";
  worked.tooltip={
    headerFormat: '{series.name}:<br>',
    pointFormatter: function(){ return this.name+":<b>"+this.y+"名，百分比："+((this.y/source.total)*100).toFixed(2)+"%</b><br/>"}
  };
  return worked;
}
function All1stu_Pie_3(source,worked,route,Highcharts){
  var source = source.data;
  worked.series[0]={};
  worked.series[0].name="学生学段统计";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]={name: '小学',y: source.xx,sliced: true,selected: true};
  worked.series[0].data[1]=["中学",source.zx];
  worked.series[0].data[2]=["学前教育	",source.xqjy];
  worked.series[0].data[3]=["一贯制",source.ygz];
  worked.series[0].data[4]=["特殊教育",source.tsjy];
  worked.series[0].data[5]=["中职成校",source.zhcx];
  worked.series[0].data[6]=["民办教育",source.mbjy];
  worked.series[0].data[7]=["其他单位",source.qtdw];
  worked.series[0].data[8]=["相关机构	",source.xgjg];
  worked.plotOptions.center=["50%","55%"];
  worked.plotOptions.pie.size="75%";
  worked.tooltip={
    headerFormat: '{series.name}:<br>',
    pointFormatter: function(){ return this.name+":<b>"+this.y+"名，百分比："+((this.y/source.total)*100).toFixed(2)+"%</b><br/>"}
  };
  return worked;
}
function All1tutor_ring_1(source,worked,route,Highcharts){
  var source = source.data;
  worked.series[0]={};
  worked.series[0].name="教师编制结构统计";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]={name: '教师',y: source.bz_js_count};
  worked.series[0].data[1]=["工勤",source.bz_gq_count];
  worked.series[0].data[2]=["职员	",source.bz_zy_count];
  worked.series[0].data[3]=["未分类	",source.bz_other_count];
  worked.series[0].innerSize = '65%';
  worked.series[0].size = '75%';
  worked.tooltip={
    headerFormat: '{series.name}:<br>',
    pointFormatter: function(){ return this.name+":<b>"+this.y+"名，百分比："+((this.y/source.total)*100).toFixed(2)+"%</b><br/>"}
  };
  return worked;
}
function All1tutor_pie_2(source,worked,route,Highcharts){
  var source = source.data;
  worked.series[0].size = '75%';
  worked.series[0].name="教师任教学科统计";
  worked.series[0].type="pie";
  worked.series[0].data=[];//清空默认的数据
  worked.series[0].data[0]={name: '语文',y: source.yw_count,sliced: true,selected: true};
  worked.series[0].data[1]=["数学",source.ss_count];
  worked.series[0].data[2]=["外语	",source.wy_count];
  worked.series[0].data[3]=["体育",source.ty_count];
  worked.series[0].data[4]=["音乐",source.yy_count];
  worked.series[0].data[5]=["美术",source.ms_count];
  worked.series[0].data[6]=["学前教育",source.xqjy_count];
  worked.series[0].data[7]=["其他",source.qt_count];
  worked.tooltip={
    headerFormat: '{series.name}:<br>',
    pointFormatter: function(){ return this.name+":<b>"+this.y+"名，百分比："+((this.y/source.total)*100).toFixed(2)+"%</b><br/>"}
  };
  return worked;
}
function All1GBtutor_bar1(source,worked,route,Highcharts){
  var source = source.data;
  worked.series=[];//清空默认的数据
  worked.series[0]={name:"人数",data:[source.bs,source.yjs,source.bk, source.zk,source.zz,source.zs,source.dz]};
  worked.xAxis.categories=["博士","研究生","本科","专科","中专","中师","大专"];
  worked.yAxis.title.text="";
  worked.legend = legend;
  worked.chart.spacing=[50,30,10,30];
  worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
  return worked;
}
function All1GBtutor_bar2(source,worked,route,Highcharts){
  var source = source.data;
  worked.series=[];//清空默认的数据
  worked.series[0]={name:"人数",data:[source.xs,source.ss,source.bs]};
  worked.xAxis.categories=["学士","硕士","博士"];
  worked.yAxis.title.text="";
  worked.legend = legend;
  worked.chart.spacing=[50,30,10,30];
  worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
  return worked;
}
function All1GBtutor_bar3(source,worked,route,Highcharts){
  var source = source.data;
  worked.series=[];//清空默认的数据
  worked.series[0]={name:"人数",data:[source.level_senior_count,source.level_one_count,source.level_two_count,source.level_three_count,source.level_js_count,source.level_gjjs_count,source.level_other_count]};
  worked.xAxis.categories=["高级教师","一级教师","二级教师","三级教师","讲师","高级讲师","其他"];
  worked.yAxis.title.text="";
  worked.legend = legend;
  worked.chart.spacing=[50,30,10,30];
  worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
  return worked;
}
function All1GBtutor_minusbar4(source,worked,route,Highcharts){
  var source = source.data;
  worked.series = [];//清空数据
  worked.series[0]={};
  worked.series[0].name="男";
  worked.series[0].data=[source.boy.teacher_age_small_count*-1,source.boy.teacher_age_between1_count*-1,source.boy.teacher_age_between2_count*-1,source.boy.teacher_age_between3_count*-1,source.boy.teacher_age_large_count*-1];
  worked.series[1]={};
  worked.series[1].name="女";
  worked.series[1].data=[source.girl.teacher_age_small_count,source.girl.teacher_age_between1_count,source.girl.teacher_age_between2_count,source.girl.teacher_age_between3_count,source.girl.teacher_age_large_count];
  worked.xAxis[0].categories=[];
  worked.xAxis[1].categories=[];
  worked.xAxis[0].categories=["25岁以下","25-35岁","35-45岁","45-55岁","55岁以上"];//修改x轴显示
  worked.xAxis[1].categories=["25岁以下","25-35岁","35-45岁","45-55岁","55岁以上"];//
  worked.chart.spacing=[50,30,10,30];
  return worked;
}
function All1GBtutor_minusbar5(source,worked,route,Highcharts){
  var source = source.data;
  worked.series = [];//清空数据
  worked.series[0]={};
  worked.series[0].name="男";
  worked.series[0].data=[source.boy.teaching_small_count*-1,source.boy.teaching_between1_count*-1,source.boy.teaching_between2_count*-1,source.boy.teaching_between3_count*-1,source.boy.teaching_large_count*-1,source.boy.teaching_null_count*-1];
  worked.series[1]={};
  worked.series[1].name="女";
  worked.series[1].data=[source.girl.teaching_small_count,source.girl.teaching_between1_count,source.girl.teaching_between2_count,source.girl.teaching_between3_count,source.girl.teaching_large_count,source.girl.teaching_null_count];
  worked.xAxis[0].categories=[];
  worked.xAxis[1].categories=[];
  worked.xAxis[0].categories=["3年以下","3-10年","10-20年","20-30年","30年以上","未登记"];//修改x轴显示
  worked.xAxis[1].categories=["3年以下","3-10年","10-20年","20-30年","30年以上","未登记"];//修改x轴显示
  worked.chart.spacing=[50,30,10,30];
  return worked;
}
function All1key_stackingBar1(source,worked,route,Highcharts){
  var source = source.data;
  worked.series=[];//清空默认的数据
  worked.series[0]={};
  worked.series[0].name="民办";
  worked.series[0].data = [source.mb_db,source.mb_wnj,source.mb_jnj,source.mb_gs];
  worked.series[1]={};
  worked.series[1].name="公办";
  worked.series[1].data = [source.gb_db,source.gb_wnj,source.gb_jnj,source.gb_gs]
  worked.xAxis.categories=["大班","五年级","九年级","高三"];
  worked.chart.spacing=[100,30,10,30];
  return worked;
}
function All1key_stackingBar2(source,worked,route,Highcharts){
  var source = source.data;
  worked.series=[];//清空默认的数据
  worked.series[0]={};
  worked.series[0].color='rgba(186,60,61,.9)'
  worked.series[0].name="男";
  worked.series[0].data = [source.boy_retire,source.boy_retire_less1,source.boy_retire_less2];
  worked.series[1]={};
  worked.series[1].color="#8085E9";
  worked.series[1].name="女";
  worked.series[1].data = [source.girl_retire,source.girl_retire_less1,source.girl_retire_less2]
  worked.xAxis.categories=["已到退休年龄","差一年退休","差两年退休"];
  worked.chart.spacing=[100,30,10,30];

  return worked;
}
var dataProcess={};
dataProcess.stu1_pie = stu1_pie;
dataProcess.stu2_stackingBar = stu2_stackingBar;
dataProcess.stu3_pie = stu3_pie;
dataProcess.stu4_column = stu4_column;
dataProcess.tutor1_pie = tutor1_pie;
dataProcess.tutor2_minusBar = tutor2_minusBar;
dataProcess.tutor3_pie = tutor3_pie;
dataProcess.tutor4_column = tutor4_column;

dataProcess.persontutor1_column = persontutor1_column;
dataProcess.persontutor2_column = persontutor2_column;

dataProcess.personstu1_column = personstu1_column;
dataProcess.personstu2_pie = personstu2_pie;
dataProcess.personstu3_pie = personstu3_pie;

dataProcess.persontemp1_minusBar=persontemp1_minusBar;
dataProcess.personTemp2_pie = personTemp2_pie;

dataProcess.All1_twoPie = All1_twoPie;
dataProcess.All1stu_Pie = All1stu_Pie;
dataProcess.All1stu_Pie_2 = All1stu_Pie_2;
dataProcess.All1stu_Pie_3 = All1stu_Pie_3;
dataProcess.All1tutor_ring_1 = All1tutor_ring_1;
dataProcess.All1tutor_pie_2 = All1tutor_pie_2;
dataProcess.All1GBtutor_bar1 = All1GBtutor_bar1;
dataProcess.All1GBtutor_bar2 = All1GBtutor_bar2;
dataProcess.All1GBtutor_bar3 = All1GBtutor_bar3;
dataProcess.All1GBtutor_minusbar4 = All1GBtutor_minusbar4;
dataProcess.All1GBtutor_minusbar5 = All1GBtutor_minusbar5;
dataProcess.All1key_stackingBar1 = All1key_stackingBar1;
dataProcess.All1key_stackingBar2 = All1key_stackingBar2;
export default dataProcess;
//worked.series[0].innerSize = '65%';
//worked.series[0].size = '75%';
//worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
//worked.chart.spacing=[50,30,30,30];//图标的内边距
