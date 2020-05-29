<template>
  <div id="demo8">
      <div v-if="type =='A'">
          A
      </div>
      <div v-else-if="type =='B'">
          B
      </div>
      <div v-else-if="type =='C'">
          C
      </div>
      <div v-if="isShow">
          Blink
      </div>
      <div v-else>
          Blink2
      </div>
      <div v-show="isShow">
          BBBBB
      </div>
  </div>
</template>

<script>
export default {
    mounted() {
        setInterval(() => {
            // this.isShow = !this.isShow
            this.isShow = true
        }, 1000);
    },
    data() {
        return {
            type:"A",
            isShow:true
        }
    },
}
</script>

<style>

</style>v