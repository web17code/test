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
  .orgMapContent{
    padding: 0 20px 0;
  }
  .mapcontent{
    background:#fff;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
<template>
  <div class="orgMapContent">
    <headDataShowMap :part="4" :getNumUrl="getNumUrl" :orderText="orderText"></headDataShowMap>
    <div class="mapcontent">
      <mapp :has_query="true" :orderText="orderText"></mapp>
    </div>
  </div>
</template>

<script>
  import headDataShowMap from "../components/headDataShowMap.vue"//头部数字组件
  import mapp from "../components/map1.vue"//地图组件
  export default {
    name:"orgApp",
    data: function () {
      return {
          orderText:[{Key:"unit_count",Text:"机构总数"},{Key:"teacher_total",Text:"教师总数"},{Key:"teacher_zb",Text:"在编教师总数"},{Key:"student_total",Text:"学生总数"},{Key:"student_gb",Text:"公办学生总数"},{Key:"student_mb",Text:"民办学生总数"}],
          getNumUrl:"json/Unit_unitData_countInfo.json"
      }
    },
    components:{
      mapp:mapp,//地图组件
      headDataShowMap:headDataShowMap//头部信息组件
    }
  }
</script>
