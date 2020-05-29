<template>
  <div id="demo2">
    <!-- interpolation -->
    <h1>{{title}}</h1>
    <h2>{{count}}</h2>
    <button @click="onClickAdd">Add</button>
  </div>
</template>

<script>
export default {
  name:"demo2",
  data() {
    return {
      title:"Practice vuejs",
      count:0
    }
  },

  methods:{
    onClickAdd(){
      this.count+=1
    }
  },
}
</script>

<style>

</style>
