  <style scoped>
  /**
  * Created by web17code on 2017/7/31.
  * 传递数字的请求接口getNumUrl来自父组件
  * part表示每一块的大小来自父组件
  * numText描述行的数据Arrary，来自父组件
  * headernum表示数字行的数据，本组件获取的
  */
  .layout-header p {
    text-align: center;
  }
  .layout-header .dataItem:nth-of-type(1) .dataItem_text,
  .layout-header .dataItem:nth-of-type(1) .dataItem_num
  {
    border-left: none;
  }
  .layout-header .dataItem .dataItem_text{
    border-left: 2px solid #ADB2B5;
  }
  .layout-header .dataItem .dataItem_num{
    border-left: 2px solid #ADB2B5;
  }
  .layout-header .dataItem_text {
    color: grey;
    font-size: 16px;
  }
  .layout-header .dataItem_num {
    color: #73879C;
    font-size: 20px;
    font-weight: bold;
  }
</style>

<template>
  <div class="layout-header">
    <!--描述行-->
    <Row>
      <Col :span="part"  class-name="dataItem" v-for="txt in orderText" :key="txt.Key">
        <p class="dataItem_text" >{{txt.Text}}</p>
      </Col>
    </Row>
    <!--数字行-->
    <Row>
      <Col :span="part"  class-name="dataItem" v-for="count in orderText" :key="count.Key">
        <p class="dataItem_num">{{headernum[count.Key]}}</p>
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
    props:{
        orderText:{//文字展示
            type:[Array,Object]
        },
        getNumUrl:{//获取数字
            type:String
        },
        part:{//共24份，每一份的大小
            type:[Number,String]
        }
    },
    mounted: function () {
      this.$http.get(
          window.getHost+this.getNumUrl+this.$route.name[1]+'&r='+Math.random()//+
      ).then(function (data) {
          if(data.data.code=="0000"){
            this.headernum=data.data.data;
          }
      })
    }
  }
</script>
