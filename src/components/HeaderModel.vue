<template>
            <div @click="outsideClick($event)" class="overlay">
                <div class="overlay-top">
                    <div class="user-profile">
                        <div class="upper">
                            <button class="dp">
                                 <img src="https://ahujasons.com/images/login-mobile-icon.png" alt="">
                            </button>
                             <button @click="closeModal" class="about-more">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px"
                                    width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                 </svg>
                            </button>
                         </div>
                         <div class="bottom">
                             <button class="login">LOGIN</button>
                             <button class="nav">
                                 <svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" height="20px"
                                 width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                     </svg>
                                     <svg class="up-arrow" xmlns="http://www.w3.org/2000/svg" height="20px"
                                     width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                 </svg>
                                </button>
                             </div>
                     </div>
                    <div class="category"> 
                        <div class="category-item">
                             <h3 class="show-category">WOMEN
                                <div class="category-add">
                                     <svg class="go-down" xmlns="http://www.w3.org/2000/svg" height="20px"
                                         width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                     </svg>
                                     <svg class="go-up" xmlns="http://www.w3.org/2000/svg" height="20px"
                                         width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                     </svg>
                                 </div>
                            </h3>
                            <div class="dropdown-category">
                                <a href="#">Men</a>
                                <a href="#">Woman</a>
                                <a href="#">Home</a>
                                <a href="#">Sale</a>
                                <a href="#">Collection</a>
                             </div>
                        </div>
                         <div class="category-item">
                            <h3 class="show-category">MEN
                                <div class="category-add">
                                    <svg class="go-down" xmlns="http://www.w3.org/2000/svg" height="20px"
                                    width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                     </svg>
                                     <svg class="go-up" xmlns="http://www.w3.org/2000/svg" height="20px"
                                     width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                     </svg>
                                 </div>
                             </h3>   
                        </div>
                         <div class="category-item">
                            <h3 class="show-category">DECORE
                             <div class="category-add">
                                <svg class="go-down" xmlns="http://www.w3.org/2000/svg" height="20px"
                                 width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                 </svg>
                                 <svg class="go-up" xmlns="http://www.w3.org/2000/svg" height="20px"
                                 width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                 </svg>
                             </div>
                             </h3>   
                         </div>
                         <div class="category-item">
                            <h3 class="show-category">ONLINE EXCLUSIVE SALE
                                <div class="category-add">
                                    <svg class="go-down" xmlns="http://www.w3.org/2000/svg" height="20px"
                                    width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                     </svg>
                                     <svg class="go-up" xmlns="http://www.w3.org/2000/svg" height="20px"
                                     width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                    </svg>
                                </div>
                             </h3>   
                        </div>
                        <div class="category-item">
                            <h3 class="show-category">OUR STORY
                                <div class="category-add">
                                    <svg class="go-down" xmlns="http://www.w3.org/2000/svg" height="20px"
                                     width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                     </svg>
                                     <svg class="go-up" xmlns="http://www.w3.org/2000/svg" height="20px"
                                     width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                     </svg>
                                 </div>
                             </h3>   
                        </div>
                     </div>
                </div>
            </div>
</template>
<script>
import {bus} from "../main"
export default {
    name:"HeaderModel",
    created(){
        bus.$on("openModel",()=>{
            if(document.querySelector('.overlay').style.display!=="none")
       { document.querySelector('.overlay').style.width="100%";} 
        })
    },
    methods:{
        outsideClick(event){
           if (
            event.target.matches(".about-more") ||
             !event.target.closest(".overlay-top")
            ) {
                 this.closeModal()
             }
        },
        closeModal(){
            if(document.querySelector('.overlay').style.display!=="none")
            {document.querySelector('.overlay').style.width="0%";}
       },  
    }
}
</script>
<style scoped>
.overlay{
    display: none;
}
@media screen and (max-width: 860px){
    .overlay{
        display: block;
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color:rgba(0, 0, 0, 0);
        background-color: rgba(0, 0, 0, 0.7);
        overflow-x: hidden;
        transition: 0.5s;
    }
    .overlay-top{
        height: 100%;
        width: 80%;
        background-color:#ffff;
        background-color: rgba(250, 249, 249, 0.9);
        display: flex;
        flex-direction: column;
    
    }
    .user-profile{
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color:#501337;
    }
    .upper{
        margin: 15px;
        position: relative;
    }
    .dp{
        float: left;
        margin: 0%;
        background-color: #ffff;
        border: none;
        border-radius: 5px;
        height: 43px;
    }
    .about-more{
        padding: 0%;
        margin: 0%;
        border: none;
        float: right;
        color: antiquewhite;
        background-color:#501337;
    }
    .bottom{
        margin: 20px;
        margin-top:5px;
        position: relative;
    }
    .login{
        margin: 0%;
        padding: 0%;
        font-size: 16px;
        font-weight: 400;
        font-family:JostRegular;
        border: none;
        float: left;
        color: antiquewhite;
        font-family: JostRegular;
        background-color:#501337;
    }
    .nav{
        border: none;
        margin-right:4px;
        float: right;
        color: antiquewhite;
        background-color:#501337;
    }
    .up-arrow,.go-up{
        display: none;
    }
    .category{
        display: flex;
        flex-direction: column;
    }
    .category-item{
        margin: 20px;
        margin-bottom: 0%;
        border-bottom: 1px solid #dad5d5;
        display: flex;
        flex-direction: column;
    }
    .show-category{
        font-size: 16px;
        font-weight: 400;
        position: relative;
        color: #303030;
        font-family:JostRegular;
        margin: 10px;
    }
    .category-add{
        float: right;
        margin: 0%;
        padding: 0%;
    }
    .dropdown-category{
        margin: none;
        display: none;
        flex-direction: column;
        z-index: 1;
        min-width: 100%;
    }
    .dropdown-category a{
        font-size: 16px;
        font-weight: 400;
        font-family:JostRegular;
        padding-top:12px;
        text-decoration: none;
        color: #303030;
    }

}
</style>