<template>
    <div>
        <h1>Random No from computed property {{getrandomno}}</h1>
        <h1>Random No from computed property {{getrandomno}}</h1>
        <h1>Random No from computed property {{getrandomno}}</h1>
        <br>
        <h1>Random No from Methods {{getrandomno1()}}</h1>
        <h1>Random No from Methods {{getrandomno1()}}</h1>
        <br>
        <h2>{{fullname}}</h2>
    </div>
</template>

<script>
export default {
    name:"Demo4",

    data() {
        return {
            firstname:"Thawatchai",
            lastname:"Saetan"
        }
    },

    methods: {
        getrandomno1:function(){
            return Math.random();
        }
    },
    computed: {
        fullname(){
            return this.firstname + " " + this.lastname
        },
        getrandomno:function(){
            return Math.random();
        }
    },
}
</script>

<style>

</style>