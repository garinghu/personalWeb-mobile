<template>
  <div class="article-list">

      <div class="header">
        <div class="time">{{date}}</div>
        <div class="title">{{title}}</div>
        <div class="tags">
          {{tag}}
        </div>
      </div>
      <div class="markdown-body" v-html="content"></div>
  </div>
</template>

<script>
  import Axios from "axios"
  import  './content/markdownbody.css'
  export default {
    name: 'articledetail',
    data () {
      return {
        rateValue:0,
        date:'',
        title:'',
        tag:'',
        rate:'',
        content:'',
        articleID:'',
        tagStyle:''
      }
    },
    methods: {

    },
    mounted () {
      let articleID = this.$route.query.id;
      this.articleID = articleID;
      Axios.get('http://106.15.228.215:8080/Blog/data/detail/' + articleID)
        .then((res)=>{
          var x = res.data.data;
          var timestamp = new Date(x.date);
          var y = timestamp.getFullYear(),
            m = timestamp.getMonth() + 1,
            d = timestamp.getDate();
          x.date = y + '-' + m + '-'  + d;
          this.date = x.date
          this.title = x.title
          this.tag = x.classification
          this.rate = x.graded.toFixed(1)
          this.content = x.content;
          this.tagStyle = x.tag
        })
    },
    watch:{
      '$route' (to, from) {
        let articleID = this.$route.query.id;
        this.articleID = articleID;
        Axios.get('http://106.15.228.215:8080/Blog/data/detail/' + articleID)
          .then((res)=>{
            var x = res.data.data;
            var timestamp = new Date(x.date);
            var y = timestamp.getFullYear(),
              m = timestamp.getMonth() + 1,
              d = timestamp.getDate();
            x.date = y + '-' + m + '-'  + d;
            this.date = x.date
            this.title = x.title
            this.tag = x.classification
            this.rate = x.graded.toFixed(1)
            this.content = x.content;
            this.tagStyle = x.tag
          })
      }
    }
  }
</script>

<style scoped>
  *{
    font-family: "Work Sans", Arial, sans-serif;
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
  .header{
    width: 90%;
    height: 100px;
    margin:0 auto;
    border-bottom:1px solid rgb(183,183,183);
  }
  .time{
    color:rgb(183,183,183);
    margin-top: 1%;
  }
  .title{
    font-size:20px;
    font-weight: lighter;
    cursor:pointer;
    transition: all 0.5s;
    margin-top: 1%;
  }
  .title:hover{
    color:rgb(252,81,133);
  }
  .tags{
    float: left;
    margin-top: 1%;
  }
  .rate{
    float: right;
    margin-top: 1%;
  }
  .text{
    width: 90%;
    margin:0 auto;
    font-weight: lighter;
    border-bottom:1px solid rgb(183,183,183);
  }
  .myrate{
    margin-left: 5%;
    float: left;
  }
  .myrate{
    width: 20%;
    margin:20px 0 20px  40%;
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
