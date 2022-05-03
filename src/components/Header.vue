<template>
<div id="header" >
    <div id="headertop">
        <p>COMPLIMENTARY GIFT BOX PACKING ON ALL PRE-PAID ORDERS</p>
        <div id="toptags">
            <div class="country-flag">
                <img id="india" src="https://ahujasons.com/images/ahuja/indFlag.jpg" alt=""><span> INR</span>
                <svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" height="13px"
                    width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <div class="other-country">
                    <img src="" alt="">USA
                    <img src="" alt="">UK
                </div>
            </div>
                <a href="#">OUR STORES</a> 
                <a href="#">MY ACCOUNT</a>
                <a href="#">BLOG</a>
        </div>
    </div>
    <div id="headerbottom">
        <div id="headertag">
            <a href=""><span>WOMEN</span><svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" height="16px"
                    width="23px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
            <a href=""><span>MEN</span><svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" height="16px"
                    width="23px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
            <a href="">SALE</a>
            <a href=""><span>COLLECTION</span><svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" height="16px"
                    width="23px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
        </div>
        <div id="logo">
            <img src="https://ahujasons.com/images/logo.svg" alt="">
        </div>
        <div id="resttag">
            <a href=""><span>OUR STORY</span><svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" height="16px"
                    width="23px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
            <a href="">CRAFTMANSHIP</a>
        </div>
        <div id="searchlogo">
            <button> <img src="https://ahujasons.com/images/search.svg" alt=""></button>
            <button> <img src="https://ahujasons.com/images/wish-list-header.svg" alt=""></button>
            <button class="badge"><img src="	https://ahujasons.com/images/cart-header.svg" alt="">
            <span class="counter">3</span></button>
        </div>
    </div>

  <!-- mobile header -->
  <div id="headermobile">
        <button @click="openModal" id="dropbtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="45px"
                height="30.53015" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
        </button>
        <div id="logo-1">
            <img src="https://ahujasons.com/images/ahuja/smallLogo.png" alt="">
        </div>
        <div id="searchlogo">
            <img class="india" src="https://ahujasons.com/images/ahuja/indFlag.jpg" alt=""><span>INR</span>
            <button> <img src="https://ahujasons.com/images/search.svg" alt=""></button>
            <button> <img src="https://ahujasons.com/images/wish-list-header.svg" alt=""></button>
            <button><img src="	https://ahujasons.com/images/cart-header.svg" alt="">
            <span class="counter">3</span></button>
        </div>
    </div>
</div>
</template>
<script>
import {bus} from "../main"
export default{
    name:"Header",
    methods:{
        openModal(){
            bus.$emit("openModel")
        }
    }
}
</script>
<style scoped>
#header{  
    display: flex;
    flex-direction: column;
    font-family:JostRegular;
    box-shadow: 5px 5px 5px hsla(0,0%,77.3%,.47059); 
}
#headertop{
    font-family:JostRegular;
    display: flex;
    font-size: 12px;
    border-bottom: 1px solid rgb(214, 211, 211);
    justify-content: space-between;
}
#headertop p{
   opacity: 1;
    width: 401px;
    height: 20px;
    color: #303030;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-top: 5px;
}
#india{
    height: 10px;
    width: 20px;
}
#toptags{
    margin-left: 0%;
    padding-top: 5px;
}
.other-country{
    display: none;
}
.country-flag{
    display: contents;
}
.badge{
    position: relative;
}
.counter{
    background: #4C0B36;
    height: 15px;
    WIDTH: 15PX;
    display: inline-block;
    border-radius: 50%;
    color: #fff;
    font-size: 11px;
    padding: 2px;
    position: absolute;
    bottom: -5px;
    right: -2px;
    line-height: 16px;
}
#toptags a{
    opacity: 1;
    width: 401px;
    height: 20px;
    color: #303030;
}
#headerbottom{
    display: flex;
    font-family:JostMedium;
    font-size: 16px;
    background-color: white;
    justify-content:space-between;
}
#headertag, #resttag,#searchlogo{
    margin-top: 60px;
}
#headertag{
    margin-left: 60px;
}
#headertag a{
    position: relative;
}
#headertag svg{
    position: absolute;
    top: 35%;
    right: 0%;

}
#headertag span{
    padding-right: 4px;
}
#resttag a{
    position: relative;
}
#resttag svg{
    position: absolute;
    top: 35%;
    right: 0%;

}
#resttag span{
    padding-right: 4px;
}
#searchlogo button{
    border: none;
    background-color: white;
    margin-right:10px;
}
#header a{
    color: #303030;
    padding: 20px;
    text-decoration: none;

}
#logo{
    margin: 15px;
    margin-left:40px;
    margin-right:40px;
}
#headermobile{
    display: none;
}
@media screen and (max-width:1024px) {
    #headerbottom{
        font-size: 14px;
    }
    #headertag,#searchlogo,#resttag{
        margin-top: 50px;
    }
    #header a{
        padding: 14px;
    }
    #headertag svg{
        top: 31%;
        right: -3%;
    }
    #resttag svg{
        top: 31%;
        right: -3%;
    }
    /* #resttag{
        margin-top: 50px;
    } */
    
}
@media screen and (max-width: 767px){
    .counter{
    padding: 1px;
    bottom: -4px;
    right: 12px;
    line-height: 15px;
    }
    #toptags{
        display: none;
    }
    #headertop{
        justify-content: center;
        background-color: #9d8b61
    }
    #headerbottom{
        display: none;
    }
    #headermobile{
        display:flex;
        flex-direction: row;
        position: relative;
        margin: 0%;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    #dropbtn{
        position: absolute;
        left: 0%;
        top: 40%;
        width: auto;
        height: auto;
        margin: 0%;
        background-color: white;
        border: none;
        padding: 0%;
    }
    #logo-1{
        padding: 0%;
        margin: 0%;
        margin-left: 45px;
        margin-top: 20px;
    }
    #logo-1 img{
        height: 50px;
    }
    #searchlogo span{
        font-family:JostRegular;
    }
   #searchlogo img{
        height: 15px;
        width: 23px;
    }
    #searchlogo{
        position: absolute;
        margin-top: 40px;
        right: 0%;
    }
}
</style>
