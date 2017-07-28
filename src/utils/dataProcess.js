/**
 * Created by web17code on 2017/7/28.
 * 处理不同图标的数据，
 * 每一个都是对应图表的id，具体方法根据给的数据写死的（时间活）
 * 格式：function xx (source,worked){return worked}
 * 参数：source后台数据,worked图表基本配置数据
 * 返回值：worked生成图表的数据
 */
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
  worked.yAxis.title.text="人数";
  return worked;
}
var dataProcess={};
dataProcess.stu1_pie = stu1_pie;
dataProcess.stu2_stackingBar = stu2_stackingBar;
dataProcess.stu3_pie = stu3_pie;
dataProcess.stu4_column = stu4_column;
export default dataProcess;
