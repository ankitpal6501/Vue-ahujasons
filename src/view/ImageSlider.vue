<template>
    <div>
    <div class="image-grp" v-if="gallery.length">
        <VueSlickCarousel v-bind="slickOptions" >
                <div  v-for="photo in gallery" :key="photo.image">
                    <img :src="photo.image" alt="">
                </div>
        </VueSlickCarousel>
        <img class="share-icon" src="../assets/Share.svg" alt="">
    </div>
    <div class="mobile-image" v-if="gallery.length">
        <VueSlickCarousel v-bind="mobile_slickOptions" >
                <div  v-for="photo in gallery" :key="photo.image">
                    <img :src="photo.image" alt="">
                </div>
        </VueSlickCarousel>
        <img class="share-icon1" src="../assets/Share.svg" alt="">
    </div>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
    name:"ImageSlider",
    props:{
        gallery:{
            type:Array
        }
    },
    data(){
        return{
            slickOptions: {
            dots: true,
            arrows:true,
            focusOnSelect: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            touchThreshold: 5
            },
            mobile_slickOptions:{
                arrows:false,
                dots: true,
                focusOnSelect: true,
                infinite: true,
                centerMode: true,
                centerPadding: "70px",
                speed: 500,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnDotsHover: true,
                pauseOnFocus: true,
                pauseOnHover: true
            }
        }
    },
    components: { VueSlickCarousel },

}
</script>
<style scoped>
.mobile-image{
    display: none;
}
.image-grp{
    margin: 0px 10px;
    position: relative;
}
.share-icon{
    position: absolute;
    top: 1%;
    right: 1%;
}
img{
    max-width: -webkit-fill-available;
}
@media screen and (max-width:767px) {
    .image-grp{
        display: none;
    }
    .mobile-image{
        display: block;
        position: relative;
    }
    .share-icon1{
        position: absolute;
        bottom: -2%;
        right: 1%;
        width: 40px;
}
    
}

</style>