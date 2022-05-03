<template>
    <div class="similar-product" v-if="similarProducts.length">
        <div class="heading">
            <p>Similar Products</p>
        </div>
        <VueSlickCarousel v-bind="slickOptions" >
            <div v-for="product in similarProducts" :key="product.id" class="box">
                <div class="card">
                    <div class="product-img">
                        <img id="img1" :src="product.image" alt="" />
                    </div>
                    <img id="img2" src="../assets/heart.svg" alt=""/>
                    <p id="p1">{{ product.name }}</p>
                    <p id="p2">
                        <span id="old-price">Rs.{{ product.price }}</span>
                        <span id="price">Rs.{{ product.selling_price }}</span>
                        <span id="discount-per">-{{ product.discount }}%</span>
                    </p>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
    name:"SimilarProduct",
    data(){
        return{
            slickOptions: {
            focusOnSelect: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            touchThreshold: 5,
            centerPadding: "50px",
}
        }
    },
    props:{
        similarProducts:{
            type:Array
        }
    },
    components: { VueSlickCarousel },
}
</script>
<style scoped>

.similar-product{
    font-family: helveticRoman; 
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.heading{
    text-align: center;
    font-size: 24px;
    color: #000000;
}
.product-img{
    position: relative;
    cursor: pointer;
 }
.product-img:hover #view-details {
  height: 45px;
}
#p1{
  margin-top: 8px;
  margin-bottom: 6px;
  font-size: 16px;
}
#p2 {
  margin: 0;
  text-align: left;
  font-size: 16px;
  color: #4C0B36
}
#old-price {
  color: #c5c5c5;
  text-decoration: line-through;
  padding-right: 6px;
}
#discount-per {
  padding-left: 6px;
  color: #bf1616;
}
.card {
  position: relative;
  margin-bottom: 40px;
  padding: 0px 10px;
}
#img1 {
  display: block;
  width: 100% ;
  height: auto;
}

#img2 {
  position: absolute;
  right: 15px;
  top: 10px;
}

</style>