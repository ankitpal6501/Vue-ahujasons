<template>
  <div id="container">
    <Header/>
    <Main/>
    <Footer/>
    <BottomOverlay/>
  </div>
</template>

<script>
import BottomOverlay from "./BottomOverlay.vue"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import Main from "./Main.vue"
export default {
  name: 'HelloWorld',
  components:{
    Header,
    Footer,Main,
    BottomOverlay
  },
  props: {
    msg: String
  }
}
</script>
<style scoped>
#container{
  display: flex;
  flex-direction: column;
}
@font-face {
    font-family:JostMedium;
    src: url(../font/Jost500Medium.woff);
  }
  @font-face {
    font-family:JostRegular;
    src: url(../font/Jost-Regular.woff);
  }
  @font-face {
    font-family:JostSemibold;
    src: url(../font/Jost-SemiBold.woff);
  }
  @font-face {
    font-family:Jostbold;
    src: url(../font/Jost-Bold.woff);
  }
  @font-face {
    font-family:PlayfairDisplayRegular;
    src: url(../font/PlayfairDisplay-Regular.woff);
  }
</style>

