<style scoped>
  .chartCollapse{
    text-align: center;
  }
  .fade-enter-active {
    transition: all .5s ease;
  }
  .fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter{
    transform: translateX(20px);
  }
  .fade-leave-to{
    transform: translateX(20px);
  }
  /*本页面样式*/
  .All1_title_content{
    border-bottom: 2px solid #999;
    padding-bottom: 5px;
    padding-left: 15px;
    margin-top: 30px;
  }
  .All1_title{
    color:#495060;
    font-size:18px;
  }
  .eduOrgTxT{
    margin-top: 65px;
  }
  .eduOrgTxT p{
    color:#495060;
    font-size:18px;
    padding: 10px 0;
  }
  .p_desc{
    text-align: center;
    font-size: 14px;
    color: #434348;
  }
  .timePicker{
    position: absolute;
    z-index: 99;
    right: 5%;
    top: 3%;
  }
  .qqzl_title{
    background: #999EFF;
    color:#fff;
    text-align: center;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    margin-top:10px;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
  }
  .layout-content-main{
    padding:20px;
  }
</style>
<template>
  <div>
  <div class="layout-content">
    <div class="layout-content-main">
      <p class="qqzl_title">区情总览</p>
      <p class="All1_title_content">
        <Icon type="ios-location" size="28" color="#495060" ></Icon>
        <span class="All1_title">地图分布统计</span>
      </p>
      <Row class="code-row-bg">
        <Col span="24">
          <mapp></mapp>
        </Col>
      </Row>
      <p class="All1_title_content">
        <Icon type="ribbon-b" size="28" color="#495060" ></Icon>
        <span class="All1_title">教育机构分析</span>
      </p>
      <Row class="code-row-bg">
        <Col span="16" class="Pshadow">
        <chartHeadless id="All1_twoPie"
                       :option="All1_twoPie"
                       :size="All1_twoPie_size"
                       :getchartUrl="All1_twoPie_url"></chartHeadless>
        </Col>
        <Col span="8">
          <div class="eduOrgTxT">
            <p>公办：109</p>
            <p>公办：26</p>
            <p>公办：5</p>
          </div>
        </Col>
      </Row>
      <p class="All1_title_content">
        <Icon type="ios-body" size="28" color="#495060" ></Icon>
        <span class="All1_title">在校学生分析</span>
      </p>
      <Row class="code-row-bg">
        <Col span="8">
        <chartHeadless id="All1stu_Pie"
                       :option="All1stu_Pie"
                       :size="All1_sizeX3"
                       :getchartUrl="All1stu_Pie_url"></chartHeadless>
        <p class="p_desc">户籍分布</p>
        </Col>
        <Col span="8">
        <chartHeadless id="All1stu_Pie_2"
                       :option="All1stu_Pie_2"
                       :size="All1_sizeX3"
                       :getchartUrl="All1stu_Pie_2_url"></chartHeadless>
        <p class="p_desc">学生办别统计</p>
        </Col>
        <Col span="8">
        <chartHeadless id="All1stu_Pie_3"
                       :option="All1stu_Pie_3"
                       :size="All1_sizeX3"
                       :getchartUrl="All1stu_Pie_3_url"></chartHeadless>
        <p class="p_desc">学生学段统计</p>
        </Col>
      </Row>
      <p class="All1_title_content">
        <Icon type="person" size="28" color="#495060" ></Icon>
        <span class="All1_title">在编教职工分析</span>
      </p>
      <Row class="code-row-bg">
        <Col span="12">
        <chartHeadless id="All1tutor_ring_1"
                       :option="All1tutor_ring_1"
                       :size="All1_sizeX3"
                       :getchartUrl="All1tutor_ring_1_url"></chartHeadless>
        <p class="p_desc">教师编制结构统计</p>
        </Col>
        <Col span="12">
        <chartHeadless id="All1tutor_pie_2"
                       :option="All1tutor_pie_2"
                       :size="All1_sizeX3"
                       :getchartUrl="All1tutor_pie_2_url"></chartHeadless>
        <p class="p_desc">教师任教学科统计</p>
        </Col>
      </Row>
      <p class="All1_title_content">
        <Icon type="person" size="28" color="#495060" ></Icon>
        <span class="All1_title">公办教职工分析</span>
      </p>
      <Row class="code-row-bg">
        <Col span="8">
        <chartHeadless id="All1GBtutor_bar1"
                       :option="All1GBtutor_bar1"
                       :size="All1_twoPie_size"
                       :getchartUrl="All1GBtutor_bar1_url"></chartHeadless>
        <p class="p_desc">教师学历分布统计</p>
        </Col>
        <Col span="8">
        <chartHeadless id="All1GBtutor_bar2"
                       :option="All1GBtutor_bar2"
                       :size="All1_twoPie_size"
                       :getchartUrl="All1GBtutor_bar2_url"></chartHeadless>
        <p class="p_desc">教师最高学位分布统计</p>
        </Col>
        <Col span="8">
        <chartHeadless id="All1GBtutor_bar3"
                       :option="All1GBtutor_bar3"
                       :size="All1_twoPie_size"
                       :getchartUrl="All1GBtutor_bar3_url"></chartHeadless>
        <p class="p_desc">教师职称分布统计</p>
        </Col>
        <Col span="12">
        <chartHeadless id="All1GBtutor_minusbar4"
                       :option="All1GBtutor_minusbar4"
                       :size="All1_twoPie_size"
                       :getchartUrl="All1GBtutor_minusbar4_url"></chartHeadless>
        <p class="p_desc">教师年龄统计</p>
        </Col>
        <Col span="12">
        <chartHeadless id="All1GBtutor_minusbar5"
                       :option="All1GBtutor_minusbar5"
                       :size="All1_twoPie_size"
                       :getchartUrl="All1GBtutor_minusbar5_url"></chartHeadless>
        <p class="p_desc">教师教龄统计</p>
        </Col>
      </Row>
      <p class="All1_title_content">
        <Icon type="ios-bookmarks" size="28" color="#495060" ></Icon>
        <span class="All1_title">关键信息</span>
      </p>
      <Row class="code-row-bg">
        <Col span="12">
        <chartHeadless id="All1key_stackingBar1"
                       :option="All1key_stackingBar1"
                       :size="All1_twoPie_size"
                       :getchartUrl="All1key_stackingBar1_url"></chartHeadless>
        <p class="p_desc">升学学生统计</p>
        </Col>
        <Col span="12" style="position: relative">
        <Date-picker type="month" placeholder="选择月" class="timePicker" @on-change="reInitChart" v-model="nowMouth"></Date-picker>
        <chartHeadless id="All1key_stackingBar2"
                       :option="All1key_stackingBar2"
                       :size="All1_twoPie_size"
                       :getchartUrl="All1key_stackingBar2_url"></chartHeadless>
        <p class="p_desc">退休预警统计</p>
        </Col>
      </Row>
    </div>
  </div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts';//引入图表库
  import dataProcess from  '../utils/dataProcess'//引入数据处理
  import options from "../config/highcharts.config.js"//表格基本配置
  import chartHeadless from "../components/chartHeadless.vue"//Highcharts基本架子
  import map1 from "../components/map1.vue"//地图组件
  export default {
    name:"app",
    data: function () {
      return {
          //
          "nowMouth":null,//new Date(),
          //图表的大小
          "All1_twoPie_size":{height:"auto",width:"100%"},
          "All1_sizeX3":{height:"auto",width:"100%"},
          //图表的基本配置
          "All1_twoPie":this.utils.deepCopy(options.twoPie),
          "All1stu_Pie":this.utils.deepCopy(options.pie),
          "All1stu_Pie_2":this.utils.deepCopy(options.pie),
          "All1stu_Pie_3":this.utils.deepCopy(options.pie),
          "All1tutor_ring_1":this.utils.deepCopy(options.pie),
          "All1tutor_pie_2":this.utils.deepCopy(options.pie),
          "All1GBtutor_bar1":this.utils.deepCopy(options.column),
          "All1GBtutor_bar2":this.utils.deepCopy(options.column),
          "All1GBtutor_bar3":this.utils.deepCopy(options.column),
          "All1GBtutor_minusbar4":this.utils.deepCopy(options.minusBar),
          "All1GBtutor_minusbar5":this.utils.deepCopy(options.minusBar),
          "All1key_stackingBar1":this.utils.deepCopy(options.stackingColumn),
          "All1key_stackingBar2":this.utils.deepCopy(options.stackingColumn),
          //图表的数据URL
          "All1_twoPie_url":window.getHost+"json/Unit_type.json",
          "All1stu_Pie_url":window.getHost+"json/Student_info_studentHJCountInfo.json",
          "All1stu_Pie_2_url":window.getHost+"json/Student_info_studentBBCount.json",
          "All1stu_Pie_3_url":window.getHost+"json/Student_info_studentLBCount.json",
          "All1tutor_ring_1_url":window.getHost+"json/Teacher_data_teacherBZCount.json?teacherState=事业单位在编人员",
          "All1tutor_pie_2_url":window.getHost+"json/Teacher_data_teacherRJXKCount.json?teacherState=事业单位在编人员",
          "All1GBtutor_bar1_url":window.getHost+"json/Teacher_teacherInfo_teacherZGXLCount.json?typeName=公办",
          "All1GBtutor_bar2_url":window.getHost+"json/Teacher_teacherInfo_teacherZGXWCount.json?typeName=公办",
          "All1GBtutor_bar3_url":window.getHost+"json/Teacher_teacherInfo_teacherLevelCount.json?typeName=公办",
          "All1GBtutor_minusbar4_url":window.getHost+"json/Teacher_ageData_ageCount.json?typeName=公办",
          "All1GBtutor_minusbar5_url":window.getHost+"json/Teacher_ageData_teachingCount.json?typeName=公办",
          "All1key_stackingBar1_url":window.getHost+"json/Student_info_studentSXCount.json",
          "All1key_stackingBar2_url":window.getHost+"json/Teacher_teacherInfo_teacherTXCount.json?typeName=公办&retire=true&time=201708"
      }
    },
    mounted:function(){
        //this.r1.isshow=false;//渲染完成后隐藏指定的图，这么费劲的做操作主要是因为ie初始化会把v-show=false渲染成display：block。
    },
    components:{
      chartHeadless:chartHeadless,//图表组件
      mapp:map1
    },
    methods:{
      "fold":function(now){
          now.text=now.isshow?'查看更多':'收起';
          now.isshow=!now.isshow;
      },
      "reInitChart":function (date) {
            var date = date.split('-')[0]+date.split('-')[1];
            this.$http.get(window.getHost+"json/Teacher_teacherInfo_teacherTXCount.json?typeName=公办&retire=true&time="+date).then(function (data) {
              //处理数据
              var data = data.data;
              var worked = dataProcess.All1key_stackingBar2(data,this.All1key_stackingBar2,this.$route,Highcharts);
              new Highcharts.chart("All1key_stackingBar2",worked);
            })
      }
    }
 }
</script>
