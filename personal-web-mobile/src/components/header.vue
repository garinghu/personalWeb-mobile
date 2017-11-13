<template>
  <div class="container" >
    <mt-header title="GaringHu" fixed>
      <mt-button  slot="left">
        <img src="../assets/menu.png" alt="" :class="[{menu},{rotate:rotatel == true}]" @click="showMenu">
      </mt-button>
      <mt-button slot="right">
        <a href="https://github.com/garinghu/GuringHu/tree/master/personalWeb">
          <img slot="icon" src="../assets/github.png">
        </a>
      </mt-button>
    </mt-header>
    <div :class="[{list},{listdown:rotatel == true}]">
      <ul>
        <a href="http://my.csdn.net/w3045872817">
          <li>友情链接</li>
        </a>

        <a href="http://106.15.228.215:81/game/index.html">
          <li>h5小游戏</li>
        </a>

        <a href="http://106.15.228.215:8080/Blog/images/1509943902939.html">
          <li>我的简历</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        header:'header',
        scrolltop:'scrolltop',
        scroll: '',
        rotate:'rotate',
        menu:'menu',
        rotatel:'false',
        list:'list',
        listdown:'listdown'
      }
    },
    methods: {
      menul() {
        this.scroll = document.body.scrollTop;
      },
      showMenu () {
        this.rotatel = !this.rotatel;
      }
    },
    mounted() {
      window.addEventListener('scroll', this.menul)
    },
  }
</script>

<style scoped>
  .container{
  }
  .mint-header{
    background:#5A5E66;
  }
  ul{
    list-style: none;
  }
  a{
    color:#fff;
    text-decoration: none;
  }
  .header{
    background:rgb(0,0,0,0);
    position: fixed;
    z-index: 100;
    color:#fff;
    line-height:60px;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }
  .scrolltop{
    line-height:80px;
    background:rgba(0,0,0,0.5);
  }
  .name{
    text-shadow: 0 0 5px #fff;
  }
  .min{
    text-align: center;
  }
  img{
    vertical-align: middle;
  }
  .menu{
    transition: all 0.5s ease-in-out;
  }
  .rotate{
    transform:rotate(90deg);
  }
  .list{
    transition: all 0.5s ease-in-out;
    height: 0;
    position: fixed;
    overflow: hidden;
    background: rgba(0,0,0,0.5);
    width: 100%;
    margin-top: 0px;
  }
  .listdown{
    height: 70px;
  }
  li{
    width: 100%;
    border-top:1px solid #fff;
    text-align: center;
    cursor:pointer;
    transition: text-shadow 0.5s ease-in-out;
  }
  li:hover{
    text-shadow: 0 0 5px #fff;
  }
</style>
