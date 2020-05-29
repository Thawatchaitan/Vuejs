<template>
  <div>
    <h1>VUEJS</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/T_Test">Tempplate_test</router-link></li>
      <li><router-link to="/demo1">Demo1</router-link></li>
      <li><router-link to="/demo2">Demo2</router-link></li>
      <li><router-link to="/demo3">Demo3</router-link></li>
      <li><router-link to="/demo4">Demo4</router-link></li>
      <li><router-link to="/demo5">Demo5</router-link></li>
      <li><router-link to="/demo6">Demo6 input</router-link></li>
      <li><router-link to="/demo7">Demo7 slot and mutiple slot</router-link></li>
      <li><router-link to="/demo8">Demo8 if-else</router-link></li>
      <li><router-link to="/demo9">Demo9 Forloop</router-link></li>
      <li><router-link to="/demo10">Demo10 Life cycle</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"Header",
}
</script>

<style scoped>
  ul{
    margin:0;
    padding:0;
  }
  li{
    display: inline;
    margin: 8px;
  }
  .footer{
    font-size: 12px;
    color: gray;
  }
</style>>