<template>
    <div id="main-container">
        <div id="main-top">
            <div id="heading">
                <p id="p1">Women Pashmina Shawls</p>
                <!-- <p id="p1">{{KurtaType}}</p> -->
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
                    <div v-for="option in selectedFiletrs" :key="option.value" id="selected-filetrs"><span>{{option.value}}</span>
                        <svg v-on:click="stopFilter(option)" xmlns="http://www.w3.org/2000/svg" height="18px"
                            width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
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
                <div id="filter-count">
                    <p>Filters</p>
                    <div v-if="selectedFiletrs.length!==0"  v-on:click="clearFilter" id="choosen-filters"><span>Clear All</span>
                        <svg  xmlns="http://www.w3.org/2000/svg" height="18px"
                            width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <Filter-array :filters="filterTypes" :selectedFiletrs="selectedFiletrs" v-on:updateProductList="changeProduct($event,'',pageNo)"/>
            </div> 
            <Mainbody :products="products"/>
        </div>
        <div>
           <MainFooter :count="items" v-on:changePage="changeProduct(selectedFiletrs,sort_by,$event)"/>
        </div>
    </div>
</template>
<script>
import Filters from "../components/Filters.vue"
import Mainbody from "../components/Mainbody.vue"
import MainFooter from "../components/MainFooter.vue"
export default{
    name:"Main",
    data(){
        return{
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
    },
    mounted(){
        this.getData()
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
       async getData()
       {
            const response = await fetch("https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=");
            if(response.status== 200){
            const data = await response.json();
            this.products=data.result.products
            this.filterTypes=data.result.filters
            this.sortTypes=[...data.result.sort,{code:'lth',label:'Price: Low to High'},{code:'htl',label:'Price: High to Low'}]
            this.items=data.result.count
            this.KurtaType=data.result.name
            }else{
                console.log(response.status, response.statusText);
            }
            this.sortTypes.splice(1,1);
        },
        async changeProduct(event,sort_by,pageNo){
            this.selectedFiletrs=event
             event.map((item)=>{
                 let value=[...item.value].join("")
                if(this.codekeyPair===""){
                    let temp = (item.code + "-" + value);
                    temp = temp.replace(/\s/g, "+");
                    this.codekeyPair=this.codekeyPair+temp
                }
               else{
                    let temp = (item.code + "-" + value)
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
            let url='https://pim.wforwoman.com/pim/pimresponse.php/?'+ new URLSearchParams({ 
                 service:'category',
                 store:'1',
                 url_key:'top-wear-kurtas',
                 page:pageNo,
                 count:'20',
                 sort_by:sort_by,
                 sort_dir:this.sort_dir,
                 filter:this.codekeyPair
               })
           
           const response1 = await fetch(url)
            if(response1.status==200)
            {
                const data1 = await response1.json();
                this.products=data1.result.products
                this.items=data1.result.count
                this.KurtaType=data1.result.name
            }else{
                console.log(response1.status, response1.statusText);
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
    margin: 0;
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
    margin-right:20px;
    width: 20%;
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
#div2{
  margin-right: 20px;
  width: 80%;
  position: relative;
  display: inherit;
  align-items: center;
}
#selected-filetrs{
    display: inherit;
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
     width: 250px;
     height: 55px;
     border: 1px solid rgb(214, 211, 211);
    position: absolute;
    background-color: white;
    right: 0%;
}
#filter-type{
        margin-right: 20px;
    }
   #filter-count{
        border: 1px solid #303030;
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
    margin-left: 10px;
    background-color: white;
    padding-left: 1px;
    padding-top: 5px;
    border: 1px solid rgb(214, 211, 211);
    margin-bottom: 10px;
   
}
#filter-type p{
    font-size: 20px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: jostSemibold;
}
#choosen-filters svg{
    float: right;
}
#choosen-filters span{
    padding-left: 10px;
    font-family: JostRegular;
    font-size: 14px;
}
@media screen and (max-width: 860px){
    #selected-filetrs{
        display: none;
    }
    #div1{
        display: none; 
    }
    #main-middel{
        margin:20px;
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
</style>
