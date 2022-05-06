<template>
<div>
    <BottomOverlay/>
    
    <MobileFilter/>
    <!-- <Header/> -->
    <div id="main-container">
        
        <div id="main-top">
            <div id="heading">
                <p id="p1">{{KurtaType}}</p>
                <p id="p2">{{items}} items</p>
            </div>
            <div id="functionality-grp">
                <div id="div1">
                    <button @click="hideFilter" id="btn">
                        <img src="https://ahujasons.com/images/el-images/filter-icon.svg" alt="">
                        <p id="btn-p"> HIDE FILTER </p> 
                    </button>
                </div>
                <div id="div2">
                    <div id="all-collected-filter">
                        <div v-for="option in selectedFiletrs" :key="option.value" id="selected-filetrs"><span>{{option.value}}</span>
                            <svg v-on:click="stopFilter(option)" xmlns="http://www.w3.org/2000/svg" height="18px"
                                width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    
                    <select v-model="sort_by" @change="changeProduct(selectedFiletrs,sort_by,pageNo)" name="" id="btn2">
                        <option value="" disabled selected>SORT BY :</option>
                        <option  v-for="sort in sortTypes" :key="sort.code" :value="sort.code">{{sort.label}}</option>
                    </select>
                </div>
                <div >
                </div>
                
            </div>
        </div>
        <div id="main-middel">
            <div v-if="showFilter" id="filter-type">
                    <div v-if="selectedFiletrs.length!==0"  v-on:click="clearFilter" id="choosen-filters"><span>Clear All</span>
                        <svg  xmlns="http://www.w3.org/2000/svg" height="18px"
                            width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
               
                <Filter-array :filters="filterTypes" :selectedFiletrs="selectedFiletrs" v-on:updateProductList="changeProduct($event,'',pageNo)"/>
            </div> 
            
            <div>
                <div v-if="showLoader" class="loader"></div>
                <Mainbody :products="products"/>
            </div>
        </div>
        <div>
           <MainFooter :count="items" v-on:changePage="changeProduct(selectedFiletrs,sort_by,$event)"/>
        </div>
    </div>
</div>
</template>
<script>
import Filters from "../components/Filters.vue"
import Mainbody from "../components/Mainbody.vue"
import MainFooter from "../components/MainFooter.vue"
import MobileFilter from "./MobileFilter.vue"
import BottomOverlay from "./BottomOverlay.vue"
// import Header from "./Header.vue"
import {bus} from "../main"
export default{
    name:"Main",
    data(){
        return{
            showLoader:false,
           KurtaType:"PshwnShawls",
           items:null,
            products:[],
            filterTypes:[],
            sortTypes:[],
            selectedFiletrs:[],
            showFilter:true,
            codekeyPair:"",
            sort_by:"",
            sort_dir:'desc',
            pageNo:"1",
        }
    },
    components:{
        "Filter-array":Filters,
        Mainbody,
        MainFooter,
        BottomOverlay,
        MobileFilter,
        // Header,
    },
    created(){
        bus.$on("updateSortedData",(sort)=>{
            this.changeProduct(this.selectedFiletrs,sort,this.pageNo)
        })
        bus.$on("updateFilters",(filterArray)=>{
            this.changeProduct(filterArray,this.sort_by,this.pageNo)
        })
    },
    mounted(){
        this.changeProduct(this.selectedFiletrs,this.sort_by,this.pageNo)
    },
    methods:{
        clearFilter(){
            this.selectedFiletrs=[];
            this.changeProduct(this.selectedFiletrs,'',this.pageNo)
        },
        stopFilter(arg){
            const index = this.selectedFiletrs.indexOf(arg);
                if (index > -1) {
                    this.selectedFiletrs.splice(index, 1);
                }
                this.changeProduct(this.selectedFiletrs,'',this.pageNo)
        },
       async changeProduct(event,sort_by,pageNo)
       {
           this.showLoader=true
            this.selectedFiletrs=event
             event.map((item)=>{
                if(this.codekeyPair===""){
                    let temp = (item.code + "-" + [...item.value].join(""));
                    temp = temp.replace(/\s/g, "+");
                    this.codekeyPair=this.codekeyPair+temp
                }
               else{
                    let temp = (item.code + "-" + [...item.value].join(""))
                    temp = temp.replace(/\s/g, "+");
                   this.codekeyPair=this.codekeyPair+`,` + temp
               }
            })
            
            //  sorting products

            if(sort_by==='lth'){
                sort_by='selling_price'
                this.sort_dir='asc'
            }else if(sort_by==='htl'){
                sort_by='selling_price'
                this.sort_dir='desc'
            }else this.sort_dir='desc'
              
             let params={
                  service:'category',
                 store:'1',
                 url_key:'top-wear-kurtas',
                 page:pageNo,
                 count:'20',
                 sort_by:sort_by,
                 sort_dir:this.sort_dir,
                 filter:this.codekeyPair
              }
              this.$router.push({
                  query:{ service:'category',
                 store:'1',
                 url_key:'top-wear-kurtas',
                 page:pageNo,
                 count:'20',
                 sort_by:sort_by,
                 sort_dir:this.sort_dir,
                 filter:this.codekeyPair}
              })
             let url='https://pim.wforwoman.com/pim/pimresponse.php/?'+ new URLSearchParams(params)
            const response = await fetch(url);
            if(response.status== 200){
            const data = await response.json();
            this.products=data.result.products
            this.showLoader=false;
            if(this.filterTypes.length===0){
                this.filterTypes=data.result.filters
                bus.$emit("filters",this.filterTypes)}
            if(this.sortTypes.length===0){
                this.sortTypes=[...data.result.sort,{code:'lth',label:'Price: Low to High'},{code:'htl',label:'Price: High to Low'}]
                this.sortTypes.splice(1,1);
                bus.$emit("sortTypes",this.sortTypes)
                }
            this.items=data.result.count
            this.KurtaType=data.result.name
            }else{
                console.log(response.status, response.statusText);
            }
            this.codekeyPair=""
            
        },
        hideFilter(){
             if(this.showFilter!==false){
                 this.showFilter=false;
                 document.querySelector('#btn-p').innerHTML="SHOW FILTER"
                 document.querySelector('#btn').style.width="145px"
                document.querySelector('#main-middel').style.gridTemplateColumns="100%"
                 document.querySelector('#selected-filetrs').style.display="none"
          }else{
            document.querySelector('#btn-p').innerHTML="HIDE FILTER"
            document.querySelector('#btn').style.width="135px"
            this.showFilter=true;
            document.querySelector('#main-middel').style.gridTemplateColumns="20% 80%"
            document.querySelector('#selected-filetrs').style.display="inherit"
          }
        }
    }
}
</script>
<style scoped>
.loader {
    margin-left:500px;
    margin-bottom: 10px;
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #0c0c0c;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
#container{
    width: 100%;
    display: flex;
    flex-direction: column;
}
#main-top{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
#heading{
    color: #303030;
    text-align: center;
    padding-bottom: 10px ;
    margin-bottom: 20px;

}
#p1{
    font-family:PlayfairDisplayRegular;
    font-size: 32px;
    height: 43px;   
    margin-bottom: 0%;
}
#p2{ 
    font-size: 18px;
    padding: 0;
    opacity: 0.7;
    margin: 0;
    margin-top: 5px;
    font-family:JostRegular;
}
#functionality-grp{
    display: flex;
}
#main-middel{
    margin-left: 20px;
    margin-right: 20px;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 18% 82%;
    border-bottom: 1px solid rgb(214, 211, 211);
}
#div1{
    margin-left: 20px;
    width: 18%;
    }
#btn{
    display: inherit;
    position: relative;
    width: 135px;
    height: 55px;
    font-family:JostSemibold;
    border: 1px solid rgb(214, 211, 211);
    background-color: white;
}
#btn img{
    width:"45px";
    height:"22.53015px";
    float: left;
}
#btn p{
    position: absolute;
    float: right;
    font-size: 16px;
    right: 5%;
    top: 0%;
}
#all-collected-filter{
    display: flex;
    flex-wrap: wrap;
    width: 75%;
}
#div2{
  margin-right: 20px;
  width: 82%;
  position: relative;
  display: flex;
  align-items: center;
}
#selected-filetrs{
    display: inherit;
    margin-right:5px;
    margin-bottom: 4px;
    border-radius: 18px;
    height: 25px;
    width: auto;
    background-color: white;
    padding-left: 13px;
    padding-top: 5px;
    border: 1px solid rgb(214, 211, 211);
   
}
#selected-filetrs span{
    font-family: JostRegular;
    font-size: 14px;
}
 #btn2{
     width: 25%;
     height: 55px;
     border: 1px solid rgb(214, 211, 211);
    position: absolute;
    background-color: white;
    right: 0%;
}
#filter-type{
        margin-right: 20px;
    }
#btn2 p{
    font-size: 16px;
    margin: 10px;
}
#choosen-filters{
    display: block;
    height: 25px;
    width: 100px;
    border-radius: 10px;
    background-color: white;
    padding-left: 1px;
    padding-top: 5px;
    border: 1px solid rgb(214, 211, 211);
    margin-bottom: 10px;
   
}  
 #choosen-filters svg{
    float: right;
}
#choosen-filters span{
    padding-left: 10px;
    font-family: JostRegular;
    font-size: 14px;
}
@media screen and (max-width:1024px){
    #main-middel{
        grid-template-columns: 22% 78%;
        margin-right: 0px;
    }
}
@media screen and (max-width: 767px){
    .loader{
        margin-left:362px;
    }
    #selected-filetrs{
        display: none;
    }
    #div1{
        display: none; 
    }
    #main-middel{
        margin:20px;
        margin-right: 0%;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 100%;
        border-bottom: 1px solid rgb(214, 211, 211);
    }
    #btn2{
        display: none;
    }
    #filter-type{
        display: none;
    }
    
}
@media screen and (max-width: 590px){
       .loader {margin-left: 240px;}
       #main-middel {margin-right:20px;}
    }
</style>
