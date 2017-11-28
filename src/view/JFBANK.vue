<style scoped>
  .btnBlock {
    padding-top: 15px;
    padding-left: 25px;
    padding-bottom: 15px;
  }

  .btnBlock button {
    min-width: 80px;
    padding: 4px 9px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #f7f7f7;
    border-color: #dddee1;
    font-size: larger;
    display: inline-block;
    margin-bottom: 0px;
    vertical-align: middle;
    cursor: pointer;
    color: #495060;
    transition: color .2s linear, background-color .2s linear, border .2s linear;
  }

  .btnBlock button:focus {
    color: #495060;
    background-color: #f7f7f7;
    outline: 0;
  }

  .btnBlock button:hover {
    background: #fff;
  }
</style>

<template>
  <div class="btnBlock">
    <button @click="showMarker1()">查询余额</button>
    <br><br>
    <button @click="showMarker2()">参与活动</button>
    <br><br>
    <button @click="showMarker3()">兑换书包</button>
    <br><br>
    <br><br>
    <br><br>
  </div>
</template>

<script>
  export default {
    name: "app",
    data: function () {
      return {}
    },
    methods: {
      showMarker1: function () {
        this.$http.post("http://demo.zhunedu.com/dataview/json/Bank_accountInfo.json", {})
          .then(function (result) {
            //处理数据
            if(result.data.data.status==200){
              alert("账户余额："+result.data.data.data.balance);
            }else{
              alert("账户余额："+result.data.data.msg);
            }
          })
      },
      showMarker2: function () {
        this.$http.post("http://demo.zhunedu.com/dataview/json/Bank_pay.json", {})
          .then(function (result) {
            //处理数据
            if(result.data.data.status==200){
              alert("支付成功");
            }else{
              alert("支付失败,"+result.data.data.msg);
            }
          })
      },
      showMarker3: function () {
        this.$http.post("http://demo.zhunedu.com/dataview/json/Bank_income.json", {})
          .then(function (result) {
            //处理数据
            if(result.data.data.status==200){
              alert("兑换成功");
            }else{
              alert("兑换失败,"+result.data.data.msg);
            }
          })
      },
    }
  }
</script>
