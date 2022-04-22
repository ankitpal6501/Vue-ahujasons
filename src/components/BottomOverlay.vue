<template>
    <div>
        
            <div class="sortoverlay">
                <div class="sortovery-inner">
                    <h1 class="sort-heading"> SORT BY</h1>
                    <p>PRICE: LOW TO HIGH</p>
                    <p>PRICE: HIGH TO LOW</p>
                    <p>DISCOUNT</p>
                    <p>POPULARITY</p>
                    <p>NEWEST</p>
                </div>
            </div>

            <div class="overlay-filters">
                <button @click="handelSortModel" class="product-sort">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px"
                    width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                      </svg>
                      SORT BY
                </button>
                <button class="mobile-filter">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px"
                    width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      FILTER
                </button>
            </div>
    </div>
</template>
<script>
export default {
    name:"BottomOverlay",
    methods:{
         handelSortModel(){
           
           if(document.querySelector('.sortoverlay').style.display!=="none")
            { 
                console.log("hello");
                if(document.querySelector('.sortoverlay').style.width==="100%")
               { 
                   document.querySelector('.sortoverlay').style.width="0%";
                   document.querySelector('.sortovery-inner').style.display="none"
                }
              else
                {
                    document.querySelector('.sortoverlay').style.width="100%"
                    document.querySelector('.sortovery-inner').style.display="block"
                }
            }
       }
    }
}
</script>
<style scoped>
.sortoverlay{
    display: none;
}
.overlay-filters{
    display: none;
}
@media screen and (max-width:860px){
    
    .overlay-filters{
        display: inherit;
        z-index: 1;
        position: fixed;
        width: 100%;
        height: 2%;
        bottom: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        left: 0%;
    }
    .product-sort,.mobile-filter{
        color: #303030;
        font-family: JostSemibold;
        border-top: 1px solid #f1f1f1;
        position: relative;
        width: 50%;
        border: none;
        background-color: #ffff;
    }
    .product-sort svg{
        position: absolute;
        left: 15%;
    }
    .mobile-filter svg{
        position: absolute;
        left: 15%;
    }
    .sortoverlay{
        display: inherit;
        position: fixed;
        width: 0;
        height: 100%;
        left: 0;
        bottom: 0;
        z-index: 1;
        background-color:rgba(0, 0, 0, 0);
        background-color: rgba(0, 0, 0, 0.7);
        overflow-y: hidden;
    }
    .sortovery-inner{
        display: none;
        color: #303030;
        font-size: 13px;
        font-weight: 100;
        font-family: JostSemibold;
        width:100%;
        position: fixed;
        bottom: 4%;
        background-color:#ffff;
    }
    .sort-heading{
        border-bottom: 1px solid #f1f1f1;
        text-align: center;
        font-family: JostBold;
        font-weight: 600;
        font-size: 18px;
        color: #0C0C0C;
        margin: 0%;
        padding-top: 5px;
    }
    .sortovery-inner p{
        border-bottom: 1px solid #f1f1f1;
        padding-bottom: 13px;
        padding-top: 13px;
        margin: 0%;
        margin-left: 0%;
        width: 100%;
        text-align: center;
    }
    .sortovery-inner p:hover{
        background-color: #ececec;
    }
}
</style>