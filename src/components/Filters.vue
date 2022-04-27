<template>
    <div id="filter-type">
        <div v-for="(filter,index) in filters" :key="filter.filter_lable" id="selectoption">
                <p  v-on:click="showOption(index)" id="filter-lable">{{filter.filter_lable}}</p>
                <div  v-on:click="showOption(index)" id="filter-add">
                    <svg v-if="index1!==index" id="add" xmlns="http://www.w3.org/2000/svg" height="23px"
                        width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg v-if="index1==index" id="remove" xmlns="http://www.w3.org/2000/svg" height="23px"
                        width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                </div>
                <div v-if="index1==index">
                    <div v-for="option in filter.options" :key="option.value" id="filters">
                        <label class="container" @change="updateProductList(option)">{{option.value}}
                            <input type="checkbox" :checked="checkStatus(option)" :id="option.value_key" :value="option.value_key">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>    
        </div>
        
    </div>
</template>
<script>
export default {
    name:"Filters",
    props:{
        filters:{
            type:Array
        },
        selectedFiletrs:{
            type:Array
        }
    },
    data(){
        return{
            show:false,
            selectedOptions:[],
            index1:-1,
            isFocus:false
        }
        
    },
    watch : {
    selectedFiletrs() {
        this.selectedOptions = this.selectedFiletrs;
    }
  },
    methods:{
        checkStatus(option){
            for(let i = 0; i < this.selectedOptions.length; i++){
                if(option.value == this.selectedOptions[i].value){
                    return true                    
                } else{
                    return false
                }
            }
        },
        showOption(index){
            if(this.index1!==index) {
                this.index1=index 
            }else{
            this.index1=-1 
            }       
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
             this.$emit("updateProductList",this.selectedOptions)
        }
    }
}
</script>
<style scoped>
#filter-lable{
    margin: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    font-family:JostSemibold;
    font-size: 16px;
    color: #303030;
}
#selectoption{
    padding: 0%;
    position: relative;
    color: #303030;
    font-family:JostMedium;
    border-bottom: 1px solid rgb(214, 211, 211);
}
#filter-add{
     position: absolute;
    right: 0%;
    top: 15px;
}
/* custom filter */

.container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-family:JostSemibold;
  font-size: 14px;
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
  height: 16px;
    width: 16px;
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
@media screen and (max-width: 860px){
    #filter-type{
        display: none;
    }
}
</style>