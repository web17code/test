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
//stu1_pie 学生数据图标1，饼图
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
dataProcess.personTemp2_pie = personTemp2_pie
export default dataProcess;
