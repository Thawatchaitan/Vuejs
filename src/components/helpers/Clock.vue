<template>
      <div id="clock">
          <slot name="header"></slot>
          <slot>Now</slot> : {{time}}
          <slot name="footer"></slot>
      </div>
</template>

<script>
import moment from"moment";
export default {
    name:"Clock",
    data() {
        return {
            time:""
        }
    },
    mounted() {
        setInterval(() => {
            this.time = moment(Date()).format('MM/DD/YYYY:SS HH:mm:ss')
        }, 100);
    },
}
</script>

<style>

</style>