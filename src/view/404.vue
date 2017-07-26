<style scoped>
  .errorBody{
    height: 50vh;
  }
  .errorBody .logo{
    width: 100px;
    margin: 0 auto;
    margin-top: 30vh;
  }
  .errorBody .logo img{
    display: block;
  }
  .errorBody p.txt{
    text-align: center;
    font-size: 18px;
    color:#495060;
  }
</style>

<template>
    <div class="errorBody">
      <div class="logo"><img src="../assets/img/logo404.png" alt="404logo"></div>
      <p class="txt">您找的页面不存在，点击返回<a href="#/">首页</a></p>
    </div>
</template>

<script>
    export default {}
</script>
