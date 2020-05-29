<template>
  <div id="demo2">
    <h1>Event & Method</h1>
    <button v-on:click="clickMe">click</button>
    <button v-on:click="clickMe1('Welcome 2')">click2</button>
    <button @click="clickMe1('Welcome 3')">click3</button>
    <h3>{{getTimestamp()}}</h3>
    
  </div>
</template>

<script>
export default {
    name:"Demo2",
    mounted(){
        this.initial()
    },
    methods:{
        initial(){
            console.log("Initialization");
        }, 
        clickMe(){
            alert("Hi");
        },
        clickMe1(message){
            alert(message);
        },
        getTimestamp(){
            return Date();
        }
    },
}
</script>

<style>

</style>