<template>
  <div>
    <mt-header title="GuringHu" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style scoped>
  .mint-header{
    background:#5A5E66;
  }
</style>
