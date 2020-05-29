<template>
    <div>
        <h1>Data</h1>
        <button @click="count++">cout add</button><br>
        <button @click="isLogged='true'">true</button><br>
        <button @click="isLogged='false'">false</button>
        <div>{{count}}</div>
        <div>{{message}}</div>
        <div>{{isLogged}}</div>
        <input type="text" placeholder="input" v-model="message">
        <h2 v-if="isLogged">Yahoo</h2>
        <div>{{account}}</div>
        <div>{{courses[0]}}</div>
        <ul>
            <li v-for="(item, index) in courses" :key="index">
                - {{index}}.
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Demo3",
    mounted(){
        this.message = "Welcome"
    },
    data(){
        return{
            count:0,
            message:"",
            isLogged:false,
            account:{
                username:"admin",
                password:"1234"
            },
            courses:[
                "Angular",
                "NODEJS",
                "vUEJS"
            ],
            isActive:false,
        }
    },
}
</script>

<style scoped>
    li{
        color:red;
    }
</style>