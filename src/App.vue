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
.slick-dots li.slick-active button:before{
    font-size: 14px !important;
}
.slick-dots li{
      margin: 0px -1px !important;
      color: black !important;
}
 .slick-prev:before{
  content: url('./assets/Right Arrow.svg') !important;
}
.slick-next:before{
  content: url('./assets/Left Arrow.svg') !important;
}
@media screen and (max-width:767px) {
  .slick-list{
    padding: 0px 20px 0px 0px !important;
  }
}
</style>

