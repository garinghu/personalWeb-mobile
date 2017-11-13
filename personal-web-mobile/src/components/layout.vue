<template>
  <div>
    <keep-alive>
      <router-view name="header"></router-view>
    </keep-alive>

    <keep-alive>
      <router-view name="headerimg"></router-view>
    </keep-alive>

    <keep-alive>
      <router-view name="myinfo"></router-view>
    </keep-alive>

    <keep-alive>
      <router-view name="articlelist"></router-view>
    </keep-alive>

    <keep-alive>
      <router-view name="tabbar"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'layout'
  }
</script>

<style>

</style>
