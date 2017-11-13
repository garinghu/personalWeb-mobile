<template>
  <div>
    <div class="markdown-body" v-html="content"></div>
  </div>
</template>

<script>
  import './markdownbody.css'
  import './prism.css'
  export default {
    name: 'content',
    props: [
     'content'
    ]
  }
</script>

<style scoped>
  .markdown-body{
    width: 95%;
    margin: 0 auto;
  }



</style>
