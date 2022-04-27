<template>
  <div id="datadisplay">
    <div v-for="product in products" :key="product.id" id="box">
      <div class="product-img">
            <img id="img1" :src="product.image" alt="" />
            <div id="view-details">
                <p>VIEW DETAIL</p>
            </div>
      </div>
      <img id="img2" src="../assets/heart.svg" alt="" />
      <p id="p1">{{ product.name }}</p>
      <p id="p2">
        <span id="old-price">Rs.{{ product.price }}</span>
        <span id="price">Rs.{{ product.selling_price }}</span>
        <span id="discount-per">-{{ product.discount }}%</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Mainbody",
  props: {
    products: {
      type: Array,
    },
  },
};
</script>
<style scoped>
#datadisplay {
  color: #0c0c0c;
  font-family: JostMedium;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 20px;
}
/* #datadisplay > * {
  flex: 0 0 23%;
} */
.product-img{
    width: 100%;
    position: relative;
    cursor: pointer;
 }
.product-img:hover #view-details {
  height: 45px;
}
#view-details {
  font-family: JostRegular;
  position: absolute;
  background-color: #bf1616;
  left: 0%;
  bottom: 0%;
  overflow: hidden;
  transition: .5s ease;
  right: 0%;
  width: 100%;
  text-align: center;
  color: #ffff;
  height: 0px;
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
#box {
  width: 23%;
  position: relative;
  margin-bottom: 40px;
}
#img1 {
  display: block;
  width: 100%;
  height: auto;
}

#img2 {
  position: absolute;
  right: 10px;
  top: 10px;
}
@media screen and (max-width: 600px) {
  #box{
     width: 48%;
  }
  /* #datadisplay > * {
  flex: none;
} */
}
</style>
