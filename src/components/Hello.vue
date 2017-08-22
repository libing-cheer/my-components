<template>
  <div class="hello">
    <div>Welcome to my-components</div>

    <div class="flex">
      <div @click="inputLink">input悬浮标签组件</div>
      <div>utc时间组件</div>
      <div>未知组件</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {}
    },
    methods: {
      inputLink() {
        this.$router.push({path: '/input-float'})
      }
    }
  }
</script>

<style scoped>
  body, html {
    margin: 0;
    padding: 0;
  }

  .hello > div {
    margin-top: 10px;
    text-align: center;
    color: rgba(45, 132, 56, 1);
    font-size: 18px;
  }

  .flex {
    display: flex;
    background: rgba(23, 43, 211, 0.5);
  }

  .flex > div {
    flex: 1;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
    border-right: 1px solid #FFFFFF;
  }

  .flex > div:last-child {
    border-right: none;
  }
</style>
