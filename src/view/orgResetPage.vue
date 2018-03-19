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
    <headdatashowOrg></headdatashowOrg>
    <div class="layout-content">
      <div class="layout-content-main">
        <p class="chartTitle">学生信息</p>
        <Row type="flex" class="code-row-bg">
          <Col span="8" class="Pshadow">
          <!--学生图表1pie-->
          <chartx3 id="stu1_pie"
                   :option="stu1_pie"
                   :getchartUrl="stu1_pie_url"
                   :chartTitleClass="'chatTitle_blue'"
                   :ctitle="ctitle.stutitle1"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <!--学生图表2 bar式叠加-->
          <chartx3 id="stu2_stackingBar"
                               :option="stu2_stackingBar"
                               :getchartUrl="stu2_stackingBar_url"
                               :ctitle="ctitle.stutitle2"
                               :chartTitleClass="'chatTitle_blue'"></chartx3>
          </Col>
          <!--学生图表3pie-->
          <Col span="8" class="Pshadow">
          <chartx3 id="stu3_pie"
                   :option="stu3_pie"
                   :getchartUrl="stu3_pie_url"
                   :ctitle="ctitle.stutitle3"
                   :chartTitleClass="'chatTitle_blue'"></chartx3>
          </Col>
        </Row>
        <transition name="fade">
          <Row type="flex" class="code-row-bg" v-show="rstu.isshow">
            <!--学生图表4column-->
            <Col span="8" class="Pshadow">
            <chartx3 id="stu4_column"
                     :option="stu4_column"
                     :ctitle="ctitle.stutitle4"
                     :getchartUrl="stu4_column_url"
                     :chartTitleClass="'chatTitle_blue'"></chartx3>
            </Col>
            <!--<Col span="8" class="Pshadow">
            <chartx3 id="stu5_pie"
                     :option="stu1_pie"
                     :ctitle="ctitle.stutitle5"
                     :getchartUrl="stu1_pie_url"
                     :chartTitleClass="'chatTitle_blue'"></chartx3>
            </Col>-->
          </Row>
        </transition>
        <Button large
                @click="fold(rstu)"
                class="longButton">
          {{rstu.text}}
        </Button>
        <p class="chartTitle"style="margin-top:30px;">教职工信息</p>
        <Row type="flex"  class="code-row-bg">
          <Col span="8" class="Pshadow">
          <!--教师1pie-->
          <chartx3 id="tutor1_pie"
                   :option="tutor1_pie"
                   :getchartUrl="tutor1_pie_url"
                   :ctitle="ctitle.tutortitle1"
                   :chartTitleClass="'chatTitle_red'"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
            <!--教师2堆叠条形图-->
            <chartx3 id="tutor2_minusBar"
                     :option="tutor2_minusBar"
                     :getchartUrl="tutor2_minusBar_url"
                     :ctitle="ctitle.tutortitle2"
                     :chartTitleClass="'chatTitle_red'"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <!--教师3饼图-->
          <chartx3 id="tutor3_pie"
                   :option="tutor3_pie"
                   :getchartUrl="tutor3_pie_url"
                   :ctitle="ctitle.tutortitle3"
                   :chartTitleClass="'chatTitle_red'"></chartx3>
          </Col>
        </Row>
        <transition name="fade">
          <Row type="flex"  class="code-row-bg" v-show="rtutor.isshow">
            <Col span="8" class="Pshadow">
            <!--教师图表4column-->
            <chartx3 id="tutor4_column"
                     :option="tutor4_column"
                     :getchartUrl="tutor4_column_url"
                     :ctitle="ctitle.tutortitle4"
                     :chartTitleClass="'chatTitle_red'"></chartx3>
            </Col>
            <Col span="8" class="Pshadow">
            <!--教师课程图表5column-->
            <chartx3 id="tutor5_pie"
                     :option="tutor5_pie"
                     :getchartUrl="tutor5_column_url"
                     :ctitle="ctitle.tutorCourse"
                     :chartTitleClass="'chatTitle_red'"></chartx3>
            </Col>
          </Row>
        </transition>
        <Button large
                @click="fold(rtutor)"
                class="longButton">
          {{rtutor.text}}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
  import headDataShowOrg from "../components/headDataShowOrg.vue"//头部数字组件
  import options from "../config/highcharts.config.js"//表格基本配置
  import chartx3 from "../components/chartx3.vue"//Highcharts基本架子
  export default {
    name:"app",
    data: function () {
      return {
        "rstu":{"text":"查看更多","isshow":true},
        "rtutor":{"text":"查看更多","isshow":true},
        "ctitle":options.ctitle,//图表的标题
        //图标基本数据
        "stu1_pie":this.utils.deepCopy(options.pie),
        "stu2_stackingBar":this.utils.deepCopy(options.stackingBar),
        "stu3_pie":this.utils.deepCopy(options.pie),
        "stu4_column":this.utils.deepCopy(options.column),
        "tutor1_pie":this.utils.deepCopy(options.pie),
        "tutor2_minusBar":this.utils.deepCopy(options.minusBar),
        "tutor3_pie":this.utils.deepCopy(options.pie),
        "tutor4_column":this.utils.deepCopy(options.column),
        "tutor5_pie":this.utils.deepCopy(options.pie),
        //图表获取数据的路径
        "stu1_pie_url":window.getHost+"json/Student_studentData_studentHJCountInfo.json?OUName="+this.$route.name[1],
        "stu2_stackingBar_url":window.getHost+"json/Student_ageData_studentAgeCountInfo.json?OUName="+this.$route.name[1]+"&small_age="+this.$route.name[3]+"&large_age="+this.$route.name[4],
        "stu3_pie_url":window.getHost+"json/Student_studentData_studentAgeCountInfo.json?OUName="+this.$route.name[1]+"&small_age="+this.$route.name[3]+"&large_age="+this.$route.name[4],
        "stu4_column_url":window.getHost+"json/Student_studentData_studentSexCountInfo.json?OUName="+this.$route.name[1],
        "tutor1_pie_url":window.getHost+"json/Teacher_teacherData_teacherHJCount.json?OUName="+this.$route.name[1],
        "tutor2_minusBar_url":window.getHost+"json/Teacher_teacherData_teacherSexAgeCount.json?OUName="+this.$route.name[1],
        "tutor3_pie_url":window.getHost+"json/Teacher_teacherData_teacherSexCount.json?OUName="+this.$route.name[1],
        "tutor4_column_url":window.getHost+"json/Teacher_teacherData_teacherLevelCount.json?OUName="+this.$route.name[1],
        "tutor5_column_url":window.getHost+"json/Teacher_subject_teacherKCCount.json?OUName="+this.$route.name[1]
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
      headdatashowOrg:headDataShowOrg
    }
  }
</script>
