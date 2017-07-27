<style scoped>
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
    <headdatashow></headdatashow>
    <div class="layout-content">
      <div class="layout-content-main">
        <Row type="flex" class="code-row-bg">
          <Col span="8" class="Pshadow">
          <chartx3 id="pie_1"
                   :option="option_stackingBar"
                   :chartTitleClass="'chatTitle_blue'"
                   :ctitle="ctitle.stutitle1"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <chartx3 id="bar_1"
                   :option="option_bar"
                   :ctitle="ctitle.stutitle2"
                   :chartTitleClass="'chatTitle_blue'"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <chartx3 id="column_1"
                   :option="option_column"
                   :ctitle="ctitle.stutitle3"
                   :chartTitleClass="'chatTitle_blue'"></chartx3>
          </Col>
        </Row>
        <transition name="fade">
          <Row type="flex" class="code-row-bg" v-show="rstu.isshow">
            <Col span="8" class="Pshadow">
            <chartx3 id="column_1sss1"
                     :option="option_column"
                     :ctitle="ctitle.stutitle4"
                     :chartTitleClass="'chatTitle_blue'"></chartx3>
            </Col>
            <Col span="8" class="Pshadow">
            <chartx3 id="column_12"
                     :option="option_column"
                     :ctitle="ctitle.stutitle5"
                     :chartTitleClass="'chatTitle_blue'"></chartx3>
            </Col>
          </Row>
        </transition>
        <Button large
                @click="fold(rstu)"
                class="longButton">
          {{rstu.text}}
        </Button>
        <Row type="flex"  class="code-row-bg">
          <Col span="8" class="Pshadow">
          <chartx3 id="pie_2"
                   :option="option_stackingBar"
                   :ctitle="ctitle.tutortitle1"
                   :chartTitleClass="'chatTitle_red'"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <chartx3 id="bar_2"
                   :option="option_bar"
                   :ctitle="ctitle.tutortitle2"
                   :chartTitleClass="'chatTitle_red'"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <chartx3 id="column_2"
                   :option="option_column"
                   :ctitle="ctitle.tutortitle3"
                   :chartTitleClass="'chatTitle_red'"></chartx3>
          </Col>
        </Row>
        <transition name="fade">
          <Row type="flex"  class="code-row-bg" v-show="rtutor.isshow">
            <Col span="8" class="Pshadow">
            <chartx3 id="column_21"
                     :option="option_column"
                     :ctitle="ctitle.tutortitle4"
                     :chartTitleClass="'chatTitle_red'"></chartx3>
            </Col>
            <Col span="8" class="Pshadow">
            <chartx3 id="column_22"
                     :option="option_column"
                     :ctitle="ctitle.tutortitle5"
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
  import chartx3 from "../components/chartx3.vue"//Highcharts架子
  import headDataShow from "../components/headDataShow.vue"
  import options from "../config/highcharts.config.js"
  export default {
    name:"app",
    data: function () {
      return {
        "option_bar":this.utils.deepCopy(options.bar),
        "option_stackingBar":this.utils.deepCopy(options.stackingBar),
        "option_column":this.utils.deepCopy(options.column),
        "ctitle":options.ctitle,//表的主题数据
        "rstu":{"text":"查看更多","isshow":true},
        "rtutor":{"text":"查看更多","isshow":true}
      }
    },
    methods:{
      "fold":function(now){
        now.text=now.isshow?'查看更多':'收起';
        now.isshow=!now.isshow;
      }
    },
    mounted:function(){
      //console.log(this.$route.name[1]);
      this.rstu.isshow=false;
      this.rtutor.isshow=false;
    },
    components:{
      chartx3:chartx3,
      headdatashow:headDataShow
    }
  }
</script>
