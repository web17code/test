<style scoped>
  /**
  * Created by web17code on 2017/7/12.
  */
  .layout-header p {
    text-align: center;
  }

  .layout-header .dataItem {
    border-left: 2px solid #ADB2B5;
  }

  .layout-header .dataItem:nth-of-type(1) {
    border-left: none;
  }

  .layout-header .dataItem .dataItem_num {
    color: #73879C;
    font-size: 20px;
    font-weight: bold;
  }

  .layout-header .dataItem .dataItem_name {
    color: grey;
    font-size: 20px;
  }
</style>

<template>
  <div class="layout-header">
    <Row>
      <Col span="6" class-name="dataItem">
        <p class="dataItem_name">机构总数</p>
        <p class="dataItem_num">{{headernum.unitCount}}</p>
      </Col>
      <Col span="6" class-name="dataItem">
        <p class="dataItem_name">班级总数</p>
        <p class="dataItem_num" >{{headernum.classCount}}</p>
      </Col>
      <Col span="6" class-name="dataItem">
        <p class="dataItem_name">教职工总数</p>
        <p class="dataItem_num" >{{headernum.teacherCount}}</p>
      </Col>
      <Col span="6" class-name="dataItem">
        <p class="dataItem_name">学生总数</p>
        <p class="dataItem_num" >{{headernum.teacherCount}}</p>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        "headernum": {classCount: 0,studentCount: 0,teacherCount: 0,unitCount: 0}
      }
    },
    mounted: function () {
      this.$http.get(
          window.getHost+'json/Unit_countData_unitCountInfo.json?OUName='+this.$route.name[1]+'&r='+Math.random()
      ).then(function (data) {
          if(data.data.code=="0000"){
            this.headernum=data.data.data;
          }
      })
    }
  }
</script>
