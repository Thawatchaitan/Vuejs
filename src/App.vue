<template>
  <div>
    <Header/>
    <Content/>
    <Footer @onClock="onClock" title="Copyright" color="red"/>
    <div class="clock"><span>{{time}}</span></div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
import Content from "@/components/layout/Content.vue"
import moment from "moment"

export default {
  name:"app",
  methods: {
    onClock(value){
      this.time = moment(value).format('MM/DD/YYYY:SS HH:mm:ss')
    }
  },
  data() {
    return {
      time:""
    }
  },
  components:{
    Header,
    Footer,
    Content,
  }
}

</script>

<style scoped>
  .clock{
    font-size: 20px;
  }

</style>>