<template>
  <div class="wrapper_container">
    <div class="wrapper">
      <form>
        <input type="text" id="input-1">
        <label for="input-1">
          <span class="label_content1">姓名</span>
        </label>

        <input type="text" id="input-2">
        <label for="input-2">
          <span class="label_content2">微博</span>
        </label>

        <input type="text" id="input-3">
        <label for="input-2">
          <span class="label_content3">微信</span>
        </label>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'InputFloat'
  }
</script>
<style type="text/css">
  .wrapper_container {
    margin: 0;
    padding: 0;
  }

  .wrapper {
    display: inline-block;
    width: 300px;
    vertical-align: middle;
  }

  input {
    display: inline-block;
    margin-top: 15px;
    margin-left: 15px;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-family: "PingFang SC Regular";
    font-size: 12px;
    border: 1px solid #dddee1;
    border-radius: 4px;
    color: #495060;
    background-color: #fff;
    position: relative;
    cursor: text;
    overflow: visible;
    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
  }


  span.label_content1 {
    position: absolute;
    top: 27px;
    padding-left: 25px;
    font-size: 12px;
    font-family: 'PingFang SC Regular';
  }
  span.label_content2 {
    position: absolute;
    top: 84px;
    padding-left: 25px;
    font-size: 12px;
    font-family: 'PingFang SC Regular';
  }
  span.label_content3 {
    position: absolute;
    top: 141px;
    padding-left: 25px;
    font-size: 12px;
    font-family: 'PingFang SC Regular';
  }
</style>
