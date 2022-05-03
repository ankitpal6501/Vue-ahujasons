<template>
    <div class="image-grp" v-if="gallery.length">
        <VueSlickCarousel v-bind="slickOptions" >
                <div  v-for="photo in gallery" :key="photo.image">
                    <img :src="photo.image" alt="">
                </div>
        </VueSlickCarousel>
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
            }
        }
    },
    components: { VueSlickCarousel },

}
</script>
<style scoped>
.image-grp{
    margin: 30px;
}
img{
    display: flex;
    max-width: -webkit-fill-available;
}

</style>