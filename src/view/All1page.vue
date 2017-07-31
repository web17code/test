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
</style>
<template>
  <div>
  <div class="layout-content">
    <div class="layout-content-main">
      <Row class="code-row-bg">
        <Col span="24">
          <mapp></mapp>
        </Col>
      </Row>
      <Row class="code-row-bg">
        <Col span="8" class="Pshadow">
        <chartx3 id="pie_1" :option="option_bar1" :chartTitleClass="'chatTitle_blue'"></chartx3>
        </Col>
        <Col span="8" class="Pshadow">
        <chartx3 id="column_1" :option="option_bar" :chartTitleClass="'chatTitle_blue'"></chartx3>
        </Col>
        <Col span="8" class="Pshadow">
        <chartx3 id="column_2" :option="option_column" :chartTitleClass="'chatTitle_blue'"></chartx3>
        </Col>
      </Row>
      <transition name="fade">
      <Row class="code-row-bg" v-show="r1.isshow">
        <Col span="8" class="Pshadow">
          <chartx3 id="pie_1s" :option="option_bar1" :chartTitleClass="'chatTitle_red'"></chartx3>
        </Col>
        <Col span="8" class="Pshadow">
          <chartx3 id="column_1as" :option="option_bar" :chartTitleClass="'chatTitle_blue'"></chartx3>
        </Col>
        <Col span="8" class="Pshadow">
         <chartx3 id="'pie_1sasd'" :option="option_bar1" :chartTitleClass="'chatTitle_blue'"></chartx3>
        </Col>
        <Col span="8" class="Pshadow">
          <chartx3 id="pie_1ss" :option="option_bar1" :chartTitleClass="'chatTitle_blue'"></chartx3>
        </Col>
        <Col span="8" class="Pshadow">
          <chartx3 id="column_1ass" :option="option_bar" :chartTitleClass="'chatTitle_blue'"></chartx3>
        </Col>
      </Row>
      </transition>
      <Button large
              @click="fold(r1)"
              class="longButton">
        {{r1.text}}
      </Button>
      <Row class="code-row-bg">
        <Col span="8" class="Pshadow">
        <chartx3 id="pie_1s" :option="option_bar1" :chartTitleClass="'chatTitle_blue'"></chartx3>
        </Col>
        <Col span="8" class="Pshadow">
        <chartx3 id="column_1as" :option="option_bar" :chartTitleClass="'chatTitle_blue'"></chartx3>
        </Col>
      </Row>
    </div>
  </div>
  </div>
</template>

<script>
  import chartx3 from "../components/chartx3.vue"//Highcharts架子
  import options from "../config/highcharts.config.js"
  import utils from "../utils/utils"
  import map1 from "../components/map1.vue"
  var optionbar1 = utils.deepCopy(options.bar);
  export default {
    name:"app",
    data: function () {
      return {
          "pie_1":"pie_1",
          "column_1":"column_1",
          "column_2":"column_2",
          "column_3":"column_3",
          "option_bar":this.utils.deepCopy(options.bar),
          "option_bar1":this.utils.deepCopy(options.stackingBar),
          "option_column":this.utils.deepCopy(options.column),
          "r1":{"text":"查看更多","isshow":true},
      }
    },
    mounted:function(){
        this.r1.isshow=false;//渲染完成后隐藏指定的图，这么费劲的做操作主要是因为ie初始化会把v-show=false渲染成display：block。
    },
    components:{
      chartx3:chartx3,
      mapp:map1
    },
    methods:{
      "fold":function(now){
          now.text=now.isshow?'查看更多':'收起';
          now.isshow=!now.isshow;
      }
    }
 }
</script>
