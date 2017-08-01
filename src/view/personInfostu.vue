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
      :getNumUrl="'json/Student_countInfo.json?typeName='"
      :orderText="orderText"
      part="3"></headDataShowPublic>
    <div class="layout-content">
      <div class="layout-content-main">
        <p class="chartTitle">基本信息</p>
        <Row type="flex" class="code-row-bg">
          <Col span="12" class="Pshadow">
          <!--人员信息：学生图表1column-->
          <chartx3 id="personstu1_column"
                   :option="personstu1_column"
                   :getchartUrl="personstu1_column_url"
                   :chartTitleClass="'chatTitle_blue'"
                   :ctitle="ctitle.personstuTitle1"></chartx3>
          </Col>
          <Col span="12" class="Pshadow">
          <chartx3 id="personstu2_pie"
                         :option="personstu2_pie"
                         :getchartUrl="personstu2_pie_url"
                         :chartTitleClass="'chatTitle_blue'"
                         :ctitle="ctitle.personstuTitle2"></chartx3>
          </Col>
          <Col span="12" class="Pshadow">
          <chartx3 id="personstu3_pie"
                   :option="personstu3_pie"
                   :getchartUrl="personstu3_pie_url"
                   :chartTitleClass="'chatTitle_blue'"
                   :ctitle="ctitle.personstuTitle3"></chartx3>
          </Col>
        </Row>
<!--        <transition name="fade">
          <Row type="flex" class="code-row-bg" v-show="rstu.isshow">
            &lt;!&ndash;学生图表4column&ndash;&gt;
            <Col span="8" class="Pshadow">

            </Col>
          </Row>
        </transition>
        <Button large
                @click="fold(rstu)"
                class="longButton">
          {{rstu.text}}
        </Button>-->
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
        "rstu":{"text":"查看更多","isshow":true},
        "rtutor":{"text":"查看更多","isshow":true},
        //表头的数字块
        "orderText":[
          {Key:"student_count",Text:"学生总数"},
          {Key:"student_girl_count",Text:"女生总数"},
          {Key:"student_boy_count",Text:"男生总数"},
          {Key:"teacher_count",Text:"教师总数"},
          {Key:"ssb",Text:"师生比（%）"},
          {Key:"class_count",Text:"班级总数"},
          {Key:"pjbe",Text:"平均班额"}
        ],
        "ctitle":options.ctitle,//图表的标题
        //图标基本数据
        "persontutor1_column":this.utils.deepCopy(options.column),
        "persontutor2_column":this.utils.deepCopy(options.column),
        "personstu1_column":this.utils.deepCopy(options.column),
        "personstu2_pie":this.utils.deepCopy(options.pie),
        "personstu3_pie":this.utils.deepCopy(options.pie),
        //图表获取数据的路径
        "persontutor1_column_url":window.getHost+"json/Teacher_teacherInfo_teacherZGXLCount.json?typeName="+this.$route.name[1],
        "persontutor2_column_url":window.getHost+"json/Teacher_teacherInfo_teacherZGXWCount.json?typeName="+this.$route.name[1],
        "personstu1_column_url":window.getHost+"json/Student_studentInfo_studentGradeCount.json?typeName="+this.$route.name[1],
        "personstu2_pie_url":window.getHost+"json/Student_studentInfo_studentHJCountInfo.json?typeName="+this.$route.name[1],
        "personstu3_pie_url":window.getHost+"json/Student_studentInfo_studentHKXZCount.json?typeName="+this.$route.name[1]
      }
    },
    methods:{
      "fold":function(now){
        now.text=now.isshow?'查看更多':'收起';
        now.isshow=!now.isshow;
      }
    },
    mounted:function(){
      this.rstu.isshow=false;
      this.rtutor.isshow=false;
    },
    components:{
      chartx3:chartx3,
      headDataShowPublic:headDataShowPublic
    }
  }
</script>
