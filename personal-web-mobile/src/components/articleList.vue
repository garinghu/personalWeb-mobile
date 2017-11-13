<template>
  <div>
    <div class="article-list">
      <ul>
        <li v-for="(item, index) in getArticleList">
          <div>
            <div class="time"   @click="testThis(index)">
              {{item.date}}
            </div>
            <div class="title" >
              <router-link :to="{path:'/detail',query:{id:item.id}}">
                {{item.title}}
              </router-link>
            </div>
            <div class="discription">
              {{item.summary}}
            </div>
            <div :class="item.tag">
              {{item.classification}}
            </div>

            <div class="title-img"></div>
          </div>
        </li>
      </ul>
      <div class="loading" @click="getMore">
        <img src="../assets/slide-down.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from "axios"
  export default {
    name: 'articlelist',
    data () {
      return{
        getNum: 1,
        sortValue: 'date',
        backgroundDiv: {
          backgroundImage: 'url(' + require('../assets/images/img-1.jpg') + ')',
        },
        getArticleList: [],
        options: [{
          value: 'date',
          label: '时间'
        }, {
          value: 'graded',
          label: '评分'
        }]

      }
    },
    computed: {
      listClass () {
        return this.$store.state.totalPrice
      }
    },
    methods: {
      getMore () {
        this.getNum += 1
        if(this.$store.state.totalPrice == ''){
          Axios.get('http://106.15.228.215:8080/Blog/data/index/'  + 'date' + '/' + this.getNum)
            .then((res)=>{
              var x = res.data.data;
              for(let i = 0;i < x.length;i++){
                var timestamp = new Date(x[i].date);
                var y = timestamp.getFullYear(),
                  m = timestamp.getMonth() + 1,
                  d = timestamp.getDate();
                x[i].date = y + '-' + m + '-'  + d;
                x[i].graded = x[i].graded.toFixed(1);
              }
              this.getArticleList = x;
            })
        }else{
          Axios.get('http://106.15.228.215:8080/Blog/data/type/' + this.$store.state.totalPrice + '/' + this.sortValue + '/' + this.getNum)
            .then((res)=>{

              var x = res.data.data;
              for(let i = 0;i < x.length;i++){
                var timestamp = new Date(x[i].date);
                var y = timestamp.getFullYear(),
                  m = timestamp.getMonth() + 1,
                  d = timestamp.getDate();
                x[i].date = y + '-' + m + '-'  + d;
                x[i].graded = x[i].graded.toFixed(1);
              }
              this.getArticleList = x;
            })
        }

      }
    },
    mounted () {
      Axios.get('http://106.15.228.215:8080/Blog/data/index/date/1')
        .then((res)=>{
          console.log(res.data.data)
          var x = res.data.data;
          for(let i = 0;i < x.length;i++){
            var timestamp = new Date(x[i].date);
            var y = timestamp.getFullYear(),
              m = timestamp.getMonth() + 1,
              d = timestamp.getDate();
            x[i].date = y + '-' + m + '-'  + d;
            x[i].graded = x[i].graded.toFixed(1);
          }
          this.getArticleList = x;
        })

    },
    watch: {
      listClass (val) {
      		console.log(123123)
        this.getNum = 1;
        if(val == ''){

        }else{
          Axios.get('http://106.15.228.215:8080/Blog/data/type/' + val + '/' + 'date' + '/' + '1')
            .then((res)=>{
              var x = res.data.data;
              for(let i = 0;i < x.length;i++){
                var timestamp = new Date(x[i].date);
                var y = timestamp.getFullYear(),
                  m = timestamp.getMonth() + 1,
                  d = timestamp.getDate();
                x[i].date = y + '-' + m + '-'  + d;
                x[i].graded = x[i].graded.toFixed(1);
              }
              this.getArticleList = x;
            })
        }
      }
    }
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
    display: inline-block;
    border-radius:3px;
    border:1px solid #aaa;
    padding-left: 3px;
    padding-right: 3px;
    font-size:10px;
    color:#fff;
    background: rgb(131,145,165);
  }
  .name{
    display: inline-block;
    border-radius:3px;

    padding-left: 3px;
    padding-right: 3px;
    font-size:10px;
    color:#5A5E66;
    border:1px solid #D8DCE5
  }
  .common{
    display: inline-block;
    border-radius:3px;

    padding-left: 3px;
    padding-right: 3px;
    font-size:10px;
    color:rgb(109,194,243);
    background: rgb(208,225,243);
    border:1px solid rgb(201,228,255)
  }
  .success{
    display: inline-block;
    border-radius:3px;

    padding-left: 3px;
    padding-right: 3px;
    font-size:10px;
    color:rgb(94,209,121);
    background: rgb(206,230,227);
    border:1px solid rgb(211,238,119)
  }
  .warning{
    display: inline-block;
    border-radius:3px;

    padding-left: 3px;
    padding-right: 3px;
    font-size:10px;
    color:rgb(235,160,54);
    background: rgb(235,245,229);
    border:1px solid rgb(249,228,184)
  }
  .danger{
    display: inline-block;
    border-radius:3px;

    padding-left: 3px;
    padding-right: 3px;
    font-size:10px;
    color:rgb(250,94,104);
    background: rgb(255,237,237);
    border:1px solid rgb(254,206,206)
  }

  .article-list{
    width: 95%;
    background:#fff;
    margin:0 auto;
    margin-top: 5px;
    border-radius: 5px;
    box-shadow: 0 0 3px #878D99;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
  }
  ul{
    list-style: none;
  }
  li{
    width: 85%;
    border-bottom:1px solid rgb(183,183,183);
    padding:1% 0 1% 0;
    margin:0 auto;
  }
  .time,.title,.discription,.tags,.rate{

  }
  .time{
    color:rgb(183,183,183);
  }
  .title{
    font-size:16px;
    font-weight: lighter;
    margin-top: 1%;
    cursor:pointer;
    transition: all 0.5s;
  }
  .title:hover{
    color:rgb(252,81,133);
  }
  .discription{
    color:rgb(130,161,208);
    margin-top: 1%;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
  }
  .rate{
    margin-top: 1%;
  }
  .selection{
    margin-left: 5%;
  }
  .box-card{
    position: relative;
  }
  .loading{
    width: 80%;
    margin:0 auto;
    text-align: center;
    padding-top: 20px;
  }
  .loading img{
    width: 20px;
    transition: all 0.5s;
  }
  .loading img:hover{
    width: 25px;
  }
  a{
    color:#000;
    text-decoration: none;
    transition: all 0.5s;
    font-weight: lighter;
  }
  a:hover{
    color:rgb(252,81,133);
  }
  .tags{
    display: inline-block;
    font-size:10px;
    color:rgb(250,94,104);
    background: rgb(255,237,237);
    border:1px solid rgb(254,206,206);
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
