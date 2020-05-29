<template>
    <div id="Demo7">
        <Clock>
            <span style="color:red">เวลาปัจจุบัน</span>
        </Clock>
        <Clock>
            <span style="color:">Time</span>
        </Clock>
        <Clock>
            <!-- Default -->
        </Clock> 
        <Clock>
            <template v-slot:header>
                <div>
                    <h1>TOP</h1>
                </div>
            </template>
            <template v-slot:footer>
                <div>
                    <h1>DOWN</h1>
                </div>
            </template>
        </Clock>
    </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue"
export default {
    name:"Demo7",
    components:{
        Clock
    }
}
</script>

<style>

</style>