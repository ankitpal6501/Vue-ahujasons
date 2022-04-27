<template>
    <div class="filter-overlay">
        <div class="headline">
            <p>Filter</p>
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
                            <input type="checkbox"  :id="option.value_key" :value="option.value_key">
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
                filters.forEach(flt => flt.classList.remove('active'));
                    this.classList.add('active');        
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
@media screen and (max-width:860px){
    .active:hover{
        background-color: #fff;
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
        overflow-y: scroll;
        background-color: #f3f3f3;
        height: 86vh;
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