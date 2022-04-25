<template>
    <div  id="datadisplay">
        <div  v-for="product in products" :key="product.id" id="box">
        <img id="img1" :src="product.image" alt="">
         <img id="img2" src="assest/small heart.svg" alt="">
         <p id="p1">{{product.name}}</p>
         <p id="p2"><span id="old-price">Rs.{{product.price}}</span>
            <span id="price">Rs.{{product.selling_price}}</span> 
            <span id="discount-per">-{{product.discount}}%</span>
        </p>
        </div>
    </div>
</template>
<script>
export default {
    name:"Mainbody",
    props:{
        products:{
            type:Array
        }
    }
}
</script>
<style scoped>
#datadisplay{
    color:#0C0C0C;
    font-family:JostMedium;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom:20px ;
}
#datadisplay>*{
    flex: 0 1 23%;
}

#p2{
    margin: 0;
    text-align: left;
    padding: 5px 10px 0;
    font-size: 14px;
    color: #000;
    color: #4C0B36;
}
#old-price{
    color: #c5c5c5;
    text-decoration: line-through;
    padding-right: 6px;
}
#discount-per{
    padding-left:6px ;
    color: #bf1616;;
}
#box{
    position: relative;
    margin-bottom: 40px;
}
#img1{
    width: 100%;
}
#img2{
    position: absolute;
    right: 20px;
    top: 15px;
}
@media screen and (max-width: 860px){
    #datadisplay{
        justify-content: space-between;
    }
    #box{   
        position: relative;
        width:48%;
      }
    #img1{
        width: 100%;
    }
} 
</style>