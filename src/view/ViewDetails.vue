<template>
    <div class="detail-container">
        <div class="View-page">
            <ImageSlider :gallery="gallery"/>
            <div class="details">
                <p class="product-heading">{{allData.name}}</p>
                <div class="prices">
                    <p id="p2">
                        <span id="old-price">Rs.{{allData.selling_price}}</span>
                        <span id="discount-per">{{allData.discount}}%off</span>
                    </p>
                    <p id="p3"> MRP <span>Rs.{{allData.price}}</span> (inclusive all taxes)</p>
                </div>
                <div class="Club-member">
                    <p>VIP Club Member get an extra discount of Rs.60 and Free Shipping. Learn More</p>
                </div>
                <div class="models">
                    <p>COLOR: BLUE</p>
                    <div class="model-images">
                        <img src="../assets/model.svg" alt="">
                        <img src="../assets/model1.jpg" alt="">
                        <img src="../assets/model2.jpg" alt="">
                    </div>
                    <div class="size-chart">
                        <p class="size-choose"><span>SIZE : L</span> <span class="chart-link"><a href="">SIZE CHART</a></span></p>
                        <div class="Size-option">
                            <button @click="activeButton" class="btn" v-for="size in sizes" :key="size.size">{{size.size}}</button>
                        </div>
                    </div>
                    <div class="fitting">
                        <p>fit info</p>
                        <div class="fit-info"> <span>{{allData.fit}}</span></div>
                    </div>
                    <div class="fitting">
                        <p>Model</p>
                        <div class="fit-details">
                            <div class="fit-info"><span>177.5cm tall</span></div>
                            <div class="fit-info"><span>Wears size M</span></div>
                        </div>
                    </div>
                </div>
                <div class="add-to-bag">
                    <button>ADD TO BAG</button>
                    <img src="../assets/Heart (1).svg" alt="">
                </div>
                <div class="delivery-time">
                    <p>
                        <span>Delivery by: Mar 07 - Mar 10</span>
                        <span class="check-details"> <a href=""> CHECK DETAILS </a></span>
                    </p>
                </div>
                <div class="fans">
                    <p>FANS PHOTOS</p>
                    <div class="fans-images">
                        <img src="../assets/fan1.jpg" alt="">
                        <img src="../assets/fan2.jpg" alt="">
                        <img src="../assets/fan3.jpg" alt="">
                        <img src="../assets/fan4.jpg" alt="">
                    </div>
                </div>
                <div>
                    <div v-for="(content,index) in footerContent" :key="content.id" class="shop">  
                        <h3 @click="showDropLinks(index)" class="show-data">{{content.id}}
                        <div class="mobile-dynamic-icon">
                            <svg v-if="index1!==index" class="plus" xmlns="http://www.w3.org/2000/svg" height="23px"
                            width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <svg v-if="index1==index" class="minus" xmlns="http://www.w3.org/2000/svg" height="23px"
                                width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </div>
                        </h3>
                        <ul v-if="index1==index" class="dropdown-content">
                            <li v-for="innerContent in footerInnerContent" :key="innerContent.code" class="detail-list" href="#">
                                <span class="detail-label">{{innerContent.label}}</span>
                                <span class="detail-value">{{innerContent.value}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="location">
                    <div class="pincode">
                        <img src="../assets/location.svg" alt=""><span>110019</span>
                        <span class="change-pincode">Change Pincode</span>
                    </div>
                    <p> Delivered by:<span> Feb 15 - Feb 16</span></p>
                </div>
                <div class="invite">
                    <div class="invite-now">
                        <p>invite friend and earn</p> <p>You Get Rs. 100 Harpa Points for every friend</p>
                        <a href="">invite now</a>
                    </div>
                    <img src="../assets/invite.svg" alt="">
                </div>
            </div>
        </div>
        <SimilarProduct :similarProducts="similarProduct"/>
        <SimilarProduct :similarProducts="similarProduct"/>
    </div>
</template>
<script>
import SimilarProduct from "./SimilarProduct.vue"
import ImageSlider from "./ImageSlider.vue"
export default {
    name:"ViewDetails",
    components:{
        ImageSlider,
        SimilarProduct
    },
     data(){
        return{
            allData:{},
            similarProduct:[],
            sizes:[],
            param:{
                service:"product",
                store:"1",
                url_key:""
            },
            index1:-1,
            footerInnerContent:[],
            footerContent:[
                {
                    id:"PRODUCT DETAILS",
                    categories:["65% viscose, 35% nylon","Made in india","Handwash","Unlined","Shoulder cut-outs",
                    "Ribbed knit fabric","Revolve Style NO. AAYR-WD5","Manufacturer Style NO. ATD4 F21",]
                },
                {
                    id:"SIZE AND FIT",
                    categories:["Ahujasons Export","Ahujasons Wholesale","Our Storyome","Legacy","Craftsman ship","Our Store","Blogs"]
                },
            ],
            gallery:[],
        }
    },
    created(){
        this.param.url_key=this.$route.params.id.replace(".html","")
    },
    mounted(){
        this.getImgDetail()
    },
    methods:{
         showDropLinks(index){
            if(this.index1!==index) {
                this.index1=index 
            }else{
            this.index1=-1 
            }       
        },
        activeButton(){
            let btns = document.querySelectorAll('.btn');
            console.log(btns);
            btns.forEach(filter => {
                filter.addEventListener('click', function () {
                btns.forEach(flt => flt.classList.remove('active'));
                    this.classList.add('active')        
                });
            });
        },
        async getImgDetail(){
            const response= await fetch("https://pim.wforwoman.com/pim/pimresponse.php/?"+new URLSearchParams(this.param))
            if(response.status===200){
                const data=await response.json();
                this.allData=data.result;
                this.gallery=data.result.gallery;
                this.sizes=data.result.new_size_chart.result;
                this.similarProduct=data.result.similar_products;
                this.footerInnerContent=data.result.visible_attributes
                console.log(data);

            }else{
                console.log(response.status, response.statusText);
            }
        }
    }
}
</script>
<style scoped>
.active{
    background-color: #000000 !important;
    color: #ffff !important;
}
.detail-container{
    display: flex;
    flex-direction: column;
    margin: 12px 20px;
}

.dropdown-content{
        padding-left: 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        z-index: 1;
        min-width: 100%;
    }
    .dropdown-content li{
        list-style: none;
        vertical-align: top;
        border-bottom: 1px solid #eaeaec;
        margin: 0 0 8px 12px;
        padding: 0 0 7px;
        width: 45%;
    }
    .detail-label{
        line-height: 18px;
        float: left;
        width: 100%;
        color: #7e818c;
    }
    .detail-value{
        line-height: 18px;
        color: #282c3f;
        word-break: break-word;
    }
.show-data{
        position: relative;
    }
.shop h3{
        font-weight: 400;
     }
    .shop{
        position: relative;
        border-bottom: 1px solid hsla(0,0%,77.3%,.47059);
    }
.mobile-dynamic-icon{
        position: absolute;
        right: 2%;
        top: 0%;
    }
.View-page{
    display: grid;
    grid-template-rows: auto;
    font-family: helveticMedium;
    color: #303030;
    grid-template-columns: 60% 40%;
    font-size: 12px;
}
.details{
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
}
.product-heading{
    font-family: helveticRoman;
    color: #262626;
    font-size: 16px;
}
#p2 {
  margin: 0;
  font-family: helveticRoman;
  text-align: left;
  font-size: 20px;
}
#p3{
   font-family: helveticRoman; 
   font-size: 12px;
   color: #aeacac;
   margin: 0%;
}
#p3 span{
    text-decoration: line-through;
}
.Club-member{
    margin-bottom: 10px;
    margin-top: 20px;
    border-bottom: 1px solid hsla(0,0%,77.3%,.47059);
    border-top: 1px solid hsla(0,0%,77.3%,.47059);
    color: #262626;
    font-size: 13px;
}
#old-price {
  color: #0c0c0c;
  padding-right: 6px;
}
#discount-per {
  padding-left: 6px;
  color: #bf1616;
}
.models{
    color: #262626;
    font-family: helveticRoman;
    font-size: 12px;
}
.model-images{
    display: flex;
    flex-direction: row;
}
.model-images img{
    margin-right: 10px;
}
.size-chart{
    margin-top: 30px;
}
.size-chart a{
    color: #000000;
}
.chart-link{
    float: right;
    font-family: helveticMedium;
    color: #000000;
}
.btn{
    margin-right: 10px;
    border-radius: 9px;
    background-color: ffff;
    background-color: #fff;
    height: 38px;
    width: 38px;
    font-size: 12px;
    color: #303030;
    border: 1px solid rgba(139, 138, 138, 0.471);
}
.fitting{
    display: flex;
    margin-top: 20px;
}
.fit-info{
    display: inherit;
    margin-left: 10px;
    border-radius: 18px;
    height: 25px;
    width: auto;
    background-color: white;
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 5px;
    border: 1px solid rgb(214, 211, 211);
}
.add-to-bag{
    display: flex;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid hsla(0,0%,77.3%,.47059);
}
.add-to-bag img{
    margin-top: 10px;
    margin-left: 18px;
    height: 25px;
    width: 21px;
}
.add-to-bag button{
    background-color: #000000;
    color: #fff;
    width: 294px;
    height: 50px;
    font-family: helveticMedium;
    font-size: 14px;
    border-radius: 10px;
}
.fans{padding-bottom: 20px;
    border-bottom: 1px solid hsla(0,0%,77.3%,.47059);
}
.fans-images{
    display: flex;
    flex-direction: row;
}
.fans-images img{
    margin-right: 5px;
}
.check-details{
    float: right;
}
.check-details a{
    color: #000000;
}
.delivery-time{
    padding: 10px 0px;
    border-bottom: 1px solid hsla(0,0%,77.3%,.47059);
}
.invite{
    display: flex;
    background:#efcca1 ;
    border-radius: 5px;
    justify-content:space-between;
    padding: 5px;
}
.invite-now p{
   margin-top: 0%;
   margin-bottom: 5px;
}
.invite-now{
    margin-right: 4PX;
}
.fit-details{
    display: flex;
    flex-wrap: wrap;
}
.pincode{
    border-radius: 5px;
    background-color: #ECECEC ;
    height: 31px;
    padding: 10px;
    font-size: 14px;
}
.location{
     border-bottom: 1px solid hsla(0,0%,77.3%,.47059);
     margin: 20px 0px 20px 0px;
     padding-bottom: 20px;
}
.location p{
    margin: 0%;
    margin-top: 5px;
    font-size: 13px;
}
.change-pincode{
    float: right;
    font-size: 13px;
    margin-top: 6px;
}

</style>