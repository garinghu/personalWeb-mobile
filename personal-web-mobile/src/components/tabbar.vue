<template>
  <div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖" >
        <img slot="icon" src="../assets/HTML.png" @click="toWeb">
        HTML + CSS
      </mt-tab-item>
      <mt-tab-item id="订单" >
        <img slot="icon" src="../assets/javascript.png" @click="toJS">
        原生JS
      </mt-tab-item>
      <mt-tab-item id="发现" >
        <img slot="icon" src="../assets/微信小程序.png" @click="toWX">
        微信小程序
      </mt-tab-item>
      <mt-tab-item id="我的"  >
        <img slot="icon" src="../assets/vue.png" @click="toVue">
        vue.js
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'tabbar',
    methods: {
      toWeb () {
        this.$store.commit('web')
         console.log(this.$store.state.totalPrice)
      },
      toJS () {
        this.$store.commit('js')
          console.log(this.$store.state.totalPrice)
      },
      toWX () {
        this.$store.commit('wx')
          console.log(this.$store.state.totalPrice)
      },
      toVue () {
        this.$store.commit('vuejs')
          console.log(this.$store.state.totalPrice)
      },
    }
  }
</script>

<style scoped>
  .mint-tab-item{
     background: #D8DCE5;
   }
</style>
