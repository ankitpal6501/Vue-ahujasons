<template>
        <div class="similar-product" v-if="similarProducts.length">
          <div class="heading">
              <p>Similar Products</p>
          </div>
          <div class="desktop">
            <VueSlickCarousel v-bind="slickOptions" >
                <div v-for="product in similarProducts" :key="product.id" class="box">
                    <div class="card">
                        <div class="product-img">
                            <img id="img1" :src="product.image" alt="" />
                        </div>
                        <img id="img2" src="../assets/heart.svg" alt=""/>
                        <p id="p1">{{ product.name }}</p>
                        <p id="p2">
                            <span id="price">
                              <!-- <img src="../assets/Rupees.svg" alt=""> -->
                              Rs.{{ product.selling_price }}</span>
                            <span id="old-price">Rs.{{ product.price }}</span>
                            <span id="discount-per">-{{ product.discount }}%</span>
                        </p>
                    </div>
                </div>
            </VueSlickCarousel>
          </div>
          <div class="mobile">
            <VueSlickCarousel v-bind="mobile_slickOptions" >
              <div v-for="product in similarProducts" :key="product.id" class="box">
                <div class="card">
                  <div class="product-img">
                    <img id="img1" :src="product.image" alt="" />
                  </div>
                  <img id="img2" src="../assets/heart.svg" alt=""/>
                  <p id="p1">{{ product.name }}</p>
                  <p id="p2">
                    <span id="price">Rs.{{ product.selling_price }}</span>
                    <span id="old-price">Rs.{{ product.price }}</span>
                    <span id="discount-per">{{ product.discount }}%</span>
                  </p>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
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
            },

            mobile_slickOptions:{
            arrows:false,
            dots:false,
            focusOnSelect: true,
            infinite: true,
            centerMode: true,
            centerPadding: "30px",
            speed: 500,
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnDotsHover: true,
            pauseOnFocus: true,
            pauseOnHover: true
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
.mobile{
  display: none;
}
.similar-product{
    font-family: Neue Helvetica, 'helveticRoman';
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.heading{
    text-align: center;
    font-size: 24px;
    color: #000000;
    font-weight: 600;
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
  font-size: 13px;
  color: #565656;
}
#p2 {
  margin: 0;
  text-align: left;
  font-size: 14px;
}

#price {
    padding-right: 12px;
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
  margin: 0px 20px;
}
#img1 {
  display: block;
  width: 100% ;
  height: auto;
}

#img2 {
  position: absolute;
  right: 7px;
  top: 7px;
  width: 17px;
}
@media screen and (max-width:767px) {
  .mobile{
    display: block;
  }
  .desktop{
    display: none;
  }
  .similar-product{
    padding: 0%;
    margin-bottom: 20px;
  }
  .heading{
    text-align: start;
    font-size: 18px;
    padding-left:10px ;
    color: #262626;
  }
  
}
</style>