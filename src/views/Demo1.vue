<template>
  <div id="demo1">
      <h1>DEMO</h1>
      <h1>v-model</h1>
      <!--MVVM-->
      <input v-model="message" type="text" placeholder="input here">
      <div>{{message}}</div>
      <button @click="message=''">Clear</button>
  </div>
</template>

<script>
export default {
    name:"demo1",
    data(){
      return{
        message:""
      }
    },
}
</script>

<style>

</style>