<style scoped>
  .chartTitle{
    border-bottom: 2px solid #E6E9ED;
    padding: 1px 17px 6px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 400;
    margin-top: 10px;
    color: grey;
  }
  .chartCollapse{
    text-align: center;
  }
  .fade-enter-active {
    transition: all .5s ease;
  }
  .fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter{
    transform: translateX(20px);
  }
  .fade-leave-to{
    transform: translateX(20px);
  }
</style>
<template>
  <div>
    <headDataShowPublic
      :getNumUrl="'json/Teacher_data_teacherStateCount.json?teacherState='"
      :orderText="orderText"
      part="3"></headDataShowPublic>
    <div class="layout-content">
      <div class="layout-content-main">
        <p class="chartTitle">基本信息</p>
        <Row type="flex" class="code-row-bg">
          <Col span="8" class="Pshadow">
          <!--人员信息：临时工图表1column-->
          <chartx3 id="persontemp1_minusBar"
                   :option="persontemp1_minusBar"
                   :getchartUrl="persontemp1_minusBar_url"
                   :chartTitleClass="'chatTitle_blue'"
                   :ctitle="ctitle.persontempTitle1"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <!--人员信息：临时工图表2pie-->
          <chartx3 id="personTemp2_pie"
                         :option="personTemp2_pie"
                         :getchartUrl="personTemp2_pie_url"
                         :chartTitleClass="'chatTitle_blue'"
                         :ctitle="ctitle.persontempTitle2"></chartx3>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import headDataShowPublic from "../components/headDataShowPublic.vue"//头部数字组件
  import options from "../config/highcharts.config.js"//表格基本配置
  import chartx3 from "../components/chartx3.vue"//Highcharts基本架子
  export default {
    name:"personInfoTutor",
    data: function () {
      return {
        //表头的数字块
        "orderText":[
          {Key:"total",Text:"临时工总数"}
        ],
        "ctitle":options.ctitle,//图表的标题
        //图标基本数据
        "persontemp1_minusBar":this.utils.deepCopy(options.minusBar),
        "personTemp2_pie":this.utils.deepCopy(options.pie),
        //图表获取数据的路径
        "persontemp1_minusBar_url":window.getHost+"json/Teacher_ageData_ageCount.json?teacherState="+this.$route.name[1],
        "personTemp2_pie_url":window.getHost+"json/Teacher_data_teacherSexCount.json?teacherState="+this.$route.name[1],
      }
    },
    components:{
      chartx3:chartx3,
      headDataShowPublic:headDataShowPublic
    }
  }
</script>
