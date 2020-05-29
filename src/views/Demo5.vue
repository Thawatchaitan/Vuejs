<template>
    <div>
        <img :src="imgurl">
        <div :class="[false ? error:'',important]">COLOR CHECK</div>
        <div :style="{color,fontSize}">COLOR CHECK</div>
        <div :style="isActive ? styleOB:'' ">COLOR CHECK</div>
        <button @click="isActive = !isActive">Toogle</button>
    </div>
</template>

<script>
export default {
    name:"Demo5",
    data() {
        return {
            imgurl:"https://lh3.googleusercontent.com/proxy/ACsZlYFcoBxEGV9yBZWVL-Goy1Gg6bMrD7PKcfij56McCoUKislZHESXR0RPbm-5kuAqGRXcAV9JuiosfHGw2dcP26iFz1FyYrWqkwhE_nqhKSGTSbXbFLOs7M2XUt8"
            ,error:"error_class",
            important:"important",
            color:"green",
            fontSize:"30px",
            styleOB:{
                backgroundColor:"cyan",
                color:"red",
            },
            isActive:false,
        }
    },
}
</script>

<style>
    .error_class{
        background: red;
        color: white;
    }
    .important{
        font-weight: 900;
        
    }
</style>