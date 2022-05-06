<template>
    <!-- <div class="container"> -->
        
        <!-- <div class="mobile-pdp">
            <button @click="openModal" id="dropbtn">
                <img src="../assets/Left Arrow.svg" alt="">
            </button>
            <div id="searchlogo">
                <button> <img src="../assets/Path 3927.svg" alt=""></button>
                <button> <img src="../assets/heart.svg" alt=""></button>
                <button><img src="../assets/My Bag.svg" alt="">
                <span class="counter">3</span></button>
            </div>
        </div> -->
        <div class="detail-container">
            <!-- <div class="header-PDP">
                <Header/>
            </div> -->
            <breadCrumps :name="allData.name"/>
            <div class="View-page">
                <ImageSlider :gallery="gallery"/>
                <div class="details">
                    <p class="product-heading">{{allData.name}}</p>
                    <div class="rating">
                        <img class="star" src="../assets/Star.svg" alt="">
                        <img class="star" src="../assets/Star.svg" alt="">
                        <img class="star" src="../assets/Star.svg" alt="">
                        <img class="star" src="../assets/Star.svg" alt="">
                        <img class="star" src="../assets/halfStar.svg" alt="">
                        <div class="starCount">
                            <img class="countTo_10" src="../assets/(10).svg" alt="">
                            <img class="count_arrow" src="../assets/Arrow.svg" alt="">
                        </div>
                    </div>
                    <div class="prices">
                        <p id="p2">
                            <span id="old-price"> <img src="../assets/Rupees.svg" alt="">{{allData.selling_price}}</span>
                            <span v-if="allData.discount!=='0'" id="discount-per">{{allData.discount}}%off</span>
                        </p>
                        <p id="p3"><span v-if="allData.discount!=='0'"> MRP </span><span v-if="allData.discount!=='0'" class="discountedPrice">Rs.{{allData.price}}</span> (inclusive all taxes)</p>
                    </div>
                    <div class="Club-member">
                        <p> <span>VIP Club Member get an extra discount of Rs.60 and Free Shipping.</span> 
                        <span v-if="ShowMore">This necessity was
                                as personal to me as it was universal.
                                This need combined with my passion for
                                teaching resulted in GeeksforGeeks as
                                we know today. My message to you, in
                                our inaugural edition of Geeks Digest,
                                would be that if you are looking for
                                a problem to work on, you dont need
                                to look very far for it. All you should
                                do is to look around yourself.</span>
                                <button @click="displayContent" >{{this.message}}</button></p>
                    </div>
                    <div class="models">
                        <p class="kurta-color">COLOR: {{color}}</p>
                        <div class="model-images">
                            <div v-for="(color,index) in colorVarient" :key="color.color_name" v-bind:class="{highLight:index2==index}"
                             @click="chooseColor(color.color_name,index)" class="list_of_img" >
                                <img class="selected_image" v-bind:class="{selected:index2==index}" src="../assets/Selected.svg" alt="">
                                <img :src="color.image_url" alt="" class="color_choose">
                            </div>
                        </div>
                        <div class="size-chart">
                            <p class="size-choose"><span>SIZE : {{currentSize}}</span> <span class="chart-link"><a href="">SIZE CHART</a></span></p>
                            <div class="Size-option">
                                <button @click="activeButton(size.size)" class="btn" v-for="size in sizes" :key="size.size">{{size.size}}</button>
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
                    <div class="location">
                        <div class="pincode">
                            <img src="../assets/location.svg" alt=""><input @input="CheckPincode($event)" type="number" name="pincode" v-model="myPincode" > 
                            <label for="pincode" class="change-pincode">Check Pincode</label>
                        </div>
                        <p> Delivered by:<span> Feb 15 - Feb 16</span></p>
                    </div>
                    <div class="mobile-location">
                        <div>
                            <p>CHECK DELIVERY & SERVICES</p>
                            <div class="input1">
                                <input type="number" name="pincode" @onkeyup="CheckPincode($event)" v-model="myPincode" >
                                <label for="pincode">Check</label>
                            </div>
                            <div class="delivery-icons">
                                <img src="../assets/Delivered.svg" alt=""> <p><span>Delivered by: Feb 15 - Feb 16</span></p>
                            </div>
                            <div class="delivery-icons">
                                <img src="../assets/COD.svg" alt=""> <p><span>COD available</span></p>
                            </div>
                            <div class="delivery-icons">
                                <img src="../assets/Easy 30 days return.svg" alt=""> <p><span>Easy 30 days return & exchange available</span></p>
                            </div>
                        </div>
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
        </div>
    <!-- </div> -->
</template>
<script>
import SimilarProduct from "./SimilarProduct.vue"
import ImageSlider from "./ImageSlider.vue"
import breadCrumps from "./breadCrumps.vue"
// import Header from "../components/Header.vue"
export default {
    name:"ViewDetails",
    components:{
        ImageSlider,
        SimilarProduct,
        breadCrumps,
        // Header,
    },
     data(){
        return{
            index2:-1,
            ShowMore:false,
            message:"Learn more",
            error:"",
            myPincode:"",
            currentSize:"6",
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
                },
            ],
            gallery:[],
            color:"BLUE",
            colorVarient: [
                {
                image_url: "https://wforwoman.gumlet.io/product/21AUW16786-117537/665/21AUW16786-117537_1.JPG",
                color_name: "Blue"
                },
                {
                image_url: "https://wforwoman.gumlet.io/product/21AUW16783-117388/665/21AUW16783-117388.jpg",
                color_name: "Pink"
                },
                {
                image_url: "https://wforwoman.gumlet.io/product/20AUW13770-114732/665/20AUW13770-114732_1.JPG",
                color_name: "Black"
                }
      ],
        }
    },
    created(){
        this.param.url_key=this.$route.params.id.replace(".html","")
    },
    mounted(){
        this.getImgDetail()
        
    },
    methods:{
        displayContent(){
            if(this.ShowMore===true){
            this.message="Learn more"
            this.ShowMore=false
            }else{
                this.ShowMore=true
                this.message="Show less"
            }
        },
        CheckPincode(){
            if(this.myPincode>6){
               this.myPincode=this.myPincode.slice(0,6)
            }
        },
        chooseColor(arg,index){
            this.color=arg.toUpperCase();
             if(this.index2!==index) {
                this.index2=index 
            }else{
            this.index2=-1 
            }  
        },

         showDropLinks(index){
            if(this.index1!==index) {
                this.index1=index 
            }else{
            this.index1=-1 
            }       
        },
        activeButton(arg){
            this.currentSize=arg
            let btns = document.querySelectorAll('.btn');
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
.selected{
    display: block !important;
}
.highLight{
    border: 2px solid #000000 !important;
}
.active{
    background-color: #000000 !important;
    color: #ffff !important;
}
.mobile-pdp{
    display: none;
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
        cursor: pointer;
    }
.shop h3{
        font-weight: 400;
        font-size: 12px;
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
    font-family: Neue Helvetica, 'helveticMedium';
    color: #262626;
    grid-template-columns: 60% 40%;
    font-size: 12px;
    margin-left: 10px;
}
.details{
    margin-left: 44px;
    margin-right: 30px;
}
.product-heading{
    font-family: Neue Helvetica, 'helveticRoman';
    color: #262626;
    font-size: 15px;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom:10px;
}
#p2 {
  margin: 0;
  text-align: left;
  font-size: 20px;
}
#p3{
   font-size: 12px;
   color: #aeacac;
   margin: 0%;
}
.discountedPrice{
    text-decoration: line-through;
}
.Club-member{
    margin-bottom: 10px;
    margin-top: 20px;
    border-bottom: 1px solid hsla(0,0%,77.3%,.47059);
    border-top: 1px solid hsla(0,0%,77.3%,.47059);
    color: #262626;
    font-size: 13px;
    font-weight: 400;
}
.Club-member button{
    color: #000000;
    border: none;
    padding: 0%;
    margin-left: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom:1px solid #000000 ;
}
#old-price {
  padding-right: 6px;
}
#discount-per {
  padding-left: 6px;
  color: #bf1616;
}
.models{
    color: #262626;
    font-family: Neue Helvetica, 'helveticRoman';
    font-size: 12px;
}
.model-images{
    display: flex;
    flex-direction: row; 
}
.list_of_img{
    border: 2px solid transparent;
    position: relative;
    margin-right: 10px;
}
.selected_image{
    display: none;
    position: absolute;
    right: 3px;
    top: 2px;
}
.color_choose{
    max-width: 75px;
    cursor: pointer;
    float: left;
}
.kurta-color,.size-choose{
    font-weight: 600;
}
.size-chart{
    margin-top: 30px;
}
.size-chart a{
    color: #000000;
}
.chart-link{
    float: right;
    color: #000000;
}
.btn{
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 9px;
    background-color: ffff;
    background-color: #fff;
    height: 38px;
    width: 38px;
    font-size: 12px;
    color: #262626;
    border: 1px solid rgba(139, 138, 138, 0.471);
    cursor: pointer;
}
.fitting{
    display: flex;
    margin-top: 10px;
}
.fit-info{
    display: inherit;
    margin-left: 10px;
    margin-top: 2px;
    border-radius: 16px;
    height: 22px;
    width: auto;
    background-color: white;
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 8px;
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
    width: 80%;
    height: 50px;
    font-family: Neue Helvetica, 'helveticMedium';
    font-size: 14px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
}
.fans{padding-bottom: 20px;
    border-bottom: 1px solid hsla(0,0%,77.3%,.47059);
}
.fans-images{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
.prices{
    font-family: Neue Helvetica, 'helveticRoman';
    margin-top:15px ;
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
    position: relative;
    border-radius: 5px;
    background-color: #ECECEC;
    height: 31px;
    padding: 10px;
    display: flex;
}
.pincode img{
    width: 16px;
}
/* .pincode span{
    font-weight: 600;
    position: absolute;
    bottom: 1%;
    left: 11%;
    font-size: 10px;
    color: red;
} */
.pincode label{
    position: absolute;
    right: 0%;
    text-align: right;
    margin: 6px 10px;
}
.pincode input{
    border: none;
    background-color: #ECECEC;
    margin-left: 6px;
}
 input::-webkit-outer-spin-button,
 input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.pincode input:focus{
     outline: none;
}
.mobile-location{
    display: none;
    padding: 10px;
}
.mobile-location img{
    height: 25.85px;
    width: 35.37px;
    vertical-align: bottom;
}
.mobile-location p{
    margin-bottom: 15px;
}
.mobile-location span{
        margin-left: 15px;
        vertical-align: super;
}
.delivery-icons{
    display: flex;
    flex-direction: row;
    margin-top: 15px;
}
.delivery-icons p{
    margin: 0%;
    padding-top: 7px;
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
.location span{
    font-weight: 600;
}
.change-pincode{
    float: right;
    font-size: 13px;
    margin-top: 6px;
}
.rating{
    display: flex;
    flex-direction: row;
}
.rating img{
    margin-right: 5px;
}
.starCount{
    position: relative;
}
.countTo_10{
    margin-top: 4px;
    margin-left: 4px;
}
.count_arrow{
    position: absolute;
    top: 35%;
    width: 5px;
}
@media screen and (max-width:767px) {
    #p3{
        margin-top:5px;
    }
    .header-PDP{
        display: none;
    }
    .mobile-pdp{
        display:flex;
        flex-direction: row;
        position: absolute;
        box-sizing: border-box;
        top:0%;
        z-index: 1;
        background: transparent;

    }
    .mobile-location{
        display: block;
    }
    .input1{
        border: 1px solid #0c0c0c;
        width: 100%;
        height: 50px;
        border-radius: 5px;
    }
    .input1 input{
        border: none;
        margin: 18px 10px;
    }
    .input1 label{
        float: right;
        margin:18px 10px;
    }
    .input1 input:focus{
        outline: none;
    }
    .location{
        display: none;
    }
  .View-page{
      display: flex !important;
      flex-direction: column !important;
      margin-left: 0%;
  }  
  .detail-container{
      margin: 0%;
  }
  .details{
      margin: 0%;
      position: relative;
  }
  .add-to-bag{
      position: fixed;
      bottom: 0%;
      left: 0%;
      z-index: 1;
      background-color: #fff;
      width: 100%;
      text-align: center;
      padding: 0%;
  }
  .add-to-bag button{
        margin: 10px;
        margin-left: 60px;
  }
  .add-to-bag img{
        position: absolute;
        margin-top: 22px;
        margin-left: 16px;
        height: 23px;
        width: 25px;
  }
  .product-heading{
      padding-left: 10px;
      padding-top: 20px;
      color: #565656;
      font-weight: 400;
      font-size: 17px;
  }
  #p2{
      font-size: 23px;
  }
  .add-to-bag,.models, .Club-member, .prices,.delivery-time{
      padding-left: 10px;
      padding-right: 10px;
  }
  .prices{
      margin-top:6px;
  }
  .shop,.fans{
      padding-left: 10px;   
  }
  .Club-member{
      border-top: 15px solid hsla(0,0%,77.3%,.47059);
      font-size: 15px;
  }
  .mobile-location,.delivery-time,.shop,.fans,.Club-member{
      border-bottom: 15px solid hsla(0,0%,77.3%,.47059);
  }
  .rating{
      position:absolute;
      top:58px;
      right: 15px;
  }

}

</style>