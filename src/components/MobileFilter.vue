<template>
    <div class="filter-overlay">
        <div class="headline">
            <p>Filter</p>
            <div v-if="selectedOptions.length!==0"  v-on:click="clearFilter" id="choosen-filters"><span>Clear All</span>
                        <svg  xmlns="http://www.w3.org/2000/svg" height="18px"
                            width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
        </div>
        <div class="mid-filters">
            <div class="filter-type">
                    <div @click="getFilterOptions(filter)" v-for="filter in filterTypes" :key="filter.filter_lable" class="filter-box">
                        <a>{{filter.filter_lable}}</a>
                    </div>
            </div>
            <div class="filter-options">
                <div v-for="option in filterCategory.options" :key="option.value" class="filters">
                        <label @change="updateProductList(option)" class="container" >{{option.value}}
                            <input type="checkbox" :checked="checkStatus(option)" :id="option.value_key" :value="option.value_key">
                            <span class="checkmark"></span>
                        </label> 
                 </div>
            </div>
        </div>
        <div class="action-button">
            <button @click="closefilters" class="cancle">CLOSE</button>
            <button @click="applyFilters" class="apply">APPLY</button>
        </div>
    </div>
</template>
<script>
import {bus} from "../main"
export default {
    name:"MobileFilter",
    data(){
        return{
            index1:-1,
            filterTypes:[],
            filterCategory:[],
            selectedOptions:[]
        }
    },
    created(){
        bus.$on("openfilters",()=>{
             if(document.querySelector('.filter-overlay').style.display!=="none")
            {document.querySelector('.filter-overlay').style.width="100%";
            document.querySelector('.action-button').style.display="flex"}
        })
        bus.$on("filters",(data)=>{
            this.filterTypes=data
        })
    },
    methods:{
        clearFilter(){
            this.selectedOptions=[]
        },
        checkStatus(option){
            // debugger; // eslint-disable-line no-debugger
            return this.selectedOptions.includes(option)?true:false 
        },
        updateProductList(option){
            if(this.selectedOptions.includes(option)){
                const index = this.selectedOptions.indexOf(option);
                if (index > -1) {
                    this.selectedOptions.splice(index, 1);
                }
            }else{
            this.selectedOptions.push(option);
            }
            
        },
        applyFilters(){
             bus.$emit("updateFilters",this.selectedOptions);
             this.closefilters()
        },
        getFilterOptions(filter){
            this.filterCategory=filter;
            let filters = document.querySelectorAll('.filter-box');
            filters.forEach(filter => {
                filter.addEventListener('click', function () {
                filters.forEach(flt => flt.style.backgroundColor="#f3f3f3");
                    this.style.backgroundColor="#fff";        
                });
            });
        },
        closefilters(){
            document.querySelector('.filter-overlay').style.width="0%";
            document.querySelector('.action-button').style.display="none";
        }
    }
}
</script>
<style scoped>
.filter-overlay{
    display: none;
}
.action-button{
    display: none;
}
@media screen and (max-width:767px){
    #choosen-filters{
    display: block;
    height: 25px;
    width: 100px;
    border-radius: 10px;
    background-color: white;
    padding-left: 1px;
    padding-top: 3px;
    border: 1px solid rgb(214, 211, 211);
    margin-right: 10px;
    margin-top: 10px;
   
}  
 #choosen-filters svg{
     padding-top: 4px;
    float: right;
}
#choosen-filters span{
    padding-left: 10px;
    font-family: JostRegular;
    font-size: 14px;
}
   .filter-overlay{
    display: block;
        height: 100%;
        width: 0%;
        position: fixed;
        z-index: 1;
        background-color:#ffff;
        overflow-x: hidden;
   } 
   .headline{
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       font-size: 18px;
        margin: 0%;
        color: #303030;
        padding-left: 10px;
        font-family: jostMedium;
        border-bottom: 1px solid #efefef;
   }
   .headline p{
       margin: 0%;
        padding-top:11px;
        padding-bottom:11px ;
   }
   .mid-filters{
       display: flex;
       width: 100%;
       flex-direction: row;
   }
   .filter-type{
       width: 25%;
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        padding: 0%;
        background-color: #f3f3f3;
        padding-bottom:50px;
   }
    .filter-box{
       display: inherit;
       background-color: #f3f3f3;
   }
   .filter-box a{
       text-decoration: none;
       width: 100%;
       padding: 10px 12px;
       color: #303030;
        font-size: 14px;
        font-weight: 700;
        font-family: jostSemibold;
        border-bottom: 1px solid #e4e4e4;
   }
   .filter-options{
        width: 75%;
        padding-left: 13px;
        overflow: scroll;
        padding-top: 13px;
        height: 82vh;
   }
   .action-button{
       width: 100%;
       position: fixed;
       bottom: 0%;
   }
   .action-button button{
       width: 50%;
       font-size: 13px;
       background-color: #ffff;
       border-top: 1px solid #eaeaec;
       border-right: 1px solid #eaeaec;
       border-bottom: none;
       border-left: none;
       letter-spacing: 1px;
       font-weight: 700;
       padding: 11px 0 11px 0;
   }
  
   .cancle{
       color: #303030;
   }
   .apply{
       color: red;
   }
   .container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-family:JostRegular;
  font-size: 12px;
  color: #303030;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 13px;
    width: 13px;
    border: 1px solid #9b9797;
}


.container input:checked ~ .checkmark {
  background-color: #4C0B36;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 5px;
  bottom: 4px;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

}
</style>