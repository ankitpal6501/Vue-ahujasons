<template>
   <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { HelloWorld },
  name: 'App',
}
</script>

<style>
#app {
    max-width: 1600px;
    margin: 0% auto;
  
}
.slick-prev:before, .slick-next:before{
    color: black !important;
}
@media screen and (max-width:767px) {
  .slick-list{
    padding: 0px 20px 0px 0px !important;
  }
}
</style>

