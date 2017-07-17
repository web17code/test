<style scoped>
    /**
    * Created by web17code on 2017/7/12.
    */
    .layout-header p{
      text-align: center;
    }
    .layout-header .dataItem{
      border-left: 2px solid #ADB2B5;
    }
    .layout-header .dataItem:nth-of-type(1){
      border-left: none;
    }
    .layout-header .dataItem .dataItem_num{
      color:#73879C;
      font-size: 20px;
      font-weight: bold;
    }
    .layout-header .dataItem .dataItem_name{
      color: grey;
      font-size: 20px;
    }
</style>

<template>
  <div class="layout-header">
    <Row>
      <Col span="6" class-name="dataItem">
        <p class="dataItem_name">数量一</p>
        <p class="dataItem_num">666</p>
      </Col>
      <Col span="6" class-name="dataItem">
        <p class="dataItem_name">数量二</p>
        <p class="dataItem_num">666</p>
      </Col>
      <Col span="6" class-name="dataItem">
        <p class="dataItem_name">数量三</p>
        <p class="dataItem_num">666</p>
      </Col>
      <Col span="6" class-name="dataItem">
        <p class="dataItem_name">数量四</p>
        <p class="dataItem_num">666</p>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        props: {
            age: {
                 /*type: String,//Number,Boolean,Function,Object,Array,Symbol
            default: "",
            required: true,
            validator: function (value) {
                return value > 10
            }*/
        }
    },
        method: {
        method1: function ()
            {

        }
    },
    created: function ()
        {

    },
    mounted:
        function () {

    }
  }
</script>
