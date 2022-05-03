<template>
  <div id="container">
    <Header/>
    <router-view></router-view>
    <Footer/>
    <BottomOverlay/>
    <HeaderModel/>
    <MobileFilter/>
  </div>
</template>

<script>
import MobileFilter from "./MobileFilter.vue"
import BottomOverlay from "./BottomOverlay.vue"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import HeaderModel from "./HeaderModel.vue"
export default {
  name: 'HelloWorld',
  components:{
    Header,
    Footer,
    BottomOverlay,
    HeaderModel,
    MobileFilter
  },
}
</script>
<style scoped>
#container{
  display: flex;
  flex-direction: column;
}
@font-face {
  font-family: helveticRoman;
  src: url(../font/HelveticaNeueRoman.woff);
}
@font-face {
  font-family: helveticMedium;
  src: url(../font/HelveticaNeueMedium.woff);
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

