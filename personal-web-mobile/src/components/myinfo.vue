<template>
  <div>
    <div class="myinfo">
      <div class="myphoto"></div>
      <div class="about-me">
        <span>胡家麟</span>
        <span>GaringHu</span>
        <div class="mytags">
          <div class="tag info">很早的一批微信开发者</div>
          <div class="tag name">前端手艺人</div>
          <div class="tag common">信犀实验室社长</div>
          <div class="tag success">97年生人</div>
          <div class="tag warning">对前端调试乐此不疲</div>
          <div class="tag danger">爱生活，爱vue</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myinfo'
  }
</script>

<style scoped>
  .tag{
    display: inline-block;
    border-radius:3px;
    border:1px solid #aaa;
    padding-left: 3px;
    padding-right: 3px;
    font-size:10px;
  }
  .info{
    color:#fff;
    background: rgb(131,145,165);
  }
  .name{
    color:#5A5E66;
    border:1px solid #D8DCE5
  }
  .common{
    color:rgb(109,194,243);
    background: rgb(208,225,243);
    border:1px solid rgb(201,228,255)
  }
  .success{
    color:rgb(94,209,121);
    background: rgb(206,230,227);
    border:1px solid rgb(211,238,119)
  }
  .warning{
    color:rgb(235,160,54);
    background: rgb(235,245,229);
    border:1px solid rgb(249,228,184)
  }
  .danger{
    color:rgb(250,94,104);
    background: rgb(255,237,237);
    border:1px solid rgb(254,206,206)
  }
  .myinfo{
    width: 95%;
    height: 100px;
    background:#fff;
    margin:0 auto;
    margin-top: 5px;
    border-radius: 5px;
    box-shadow: 0 0 3px #878D99;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .myphoto{
    flex:1;
    background:url(../assets/images/myphoto.png)  center 0px/cover;
    height: 100px;
  }
  .about-me{
    flex:3;
    height: 100px;

  }
  .about-me .mytags{
    width: 95%;
    margin:0 auto;
  }

</style>
