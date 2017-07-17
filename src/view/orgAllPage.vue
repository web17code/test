<style scoped>

</style>
<template>
  <div>
    <headdatashow></headdatashow>
    <div class="layout-content">
      <div class="layout-content-main">
        <Row type="flex" justify="space-around"  class="code-row-bg">
          <Col span="8" class="Pshadow">
          <chartx3 :id="pie_1" :option="option_bar1" :chartTitleClass="'chatTitle_blue'"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <chartx3 :id="bar_1" :option="option_bar" :chartTitleClass="'chatTitle_blue'"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <chartx3 :id="column_1" :option="option_column" :chartTitleClass="'chatTitle_blue'"></chartx3>
          </Col>
        </Row>
        <Row type="flex" justify="space-around"  class="code-row-bg">
          <Col span="8" class="Pshadow">
          <chartx3 :id="pie_2" :option="option_bar1" :chartTitleClass="'chatTitle_red'"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <chartx3 :id="bar_2" :option="option_bar" :chartTitleClass="'chatTitle_red'"></chartx3>
          </Col>
          <Col span="8" class="Pshadow">
          <chartx3 :id="column_2" :option="option_column" :chartTitleClass="'chatTitle_red'"></chartx3>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import chartx3 from "../components/chartx3.vue"//Highcharts架子
  import headDataShow from "../components/headDataShow.vue"
  import options from "../config/highcharts.config.js"
  import utils from "../utils/utils"
  var optionbar1 = utils.deepCopy(options.bar);
  var title969 = utils.deepCopy(options.ctitle_969);
  optionbar1.title = title969;
  export default {
    name:"app",
    data: function () {
      return {
        "pie_1":"pie_1",
        "pie_2":"pie_2",
        "bar_1":"bar_1",
        "bar_2":"bar_2",
        "column_1":"column_1",
        "column_2":"column_2",
        "option_bar":this.utils.deepCopy(options.bar),
        "option_bar1":optionbar1,
        "option_column":this.utils.deepCopy(options.column)

      }
    },
    components:{
      chartx3:chartx3,
      headdatashow:headDataShow
    }
  }
</script>
