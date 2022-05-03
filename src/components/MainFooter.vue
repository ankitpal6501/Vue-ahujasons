<template>
<div>
    <div id="mainfooter">
        <p>Page {{startFrom}} to {{perpage-1}}</p>
        <div id="page-btn">
            <button  class="next" @click="goback"><p>PREV</p> 
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" 
                height="23px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <button class="clickable" v-for="i in getNumber(startFrom,perpage)" :key="i" @click="changePage(i)">{{i}}</button>
            <button  class="next" @click="goNext"><p>NEXT</p> 
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" 
                height="23px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
     <div id="Mobile-mainfooter">
        <div id="Mobile-page-btn">
            <button  class="Mobile-next" @click="goback"><p>PREV</p> 
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" 
                height="23px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <button class="clickable" v-for="i in getNumber(startFrom,perpage)" :key="i" @click="changePage(i)">{{i}}</button>
            <button  class="Mobile-next" @click="goNext"><p>NEXT</p> 
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" 
                height="23px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
        <p>Page {{startFrom}} to {{perpage}}</p>
    </div>
</div>
</template>
<script>
export default {
    name:"MainFooter",
    data(){
        return{
            startFrom:1,
            perpage:7,
        }
    },
    props:{
        count:{
            type:Number
        }
    },
    computed:{
        pageCount(){
            if(this.count<20 || this.count===undefined) return 1
            return Math.round(this.count/20);
        }
    },
    methods:{

        getNumber(start,stop){
            return new Array(stop-start).fill(start).map((n,i)=>n+i);
        },
        getBackNumber(start,stop){
            return new Array(stop-start).fill(start).map((n,i)=>n+i);
        },
        goback(){
            if(this.startFrom===1){
                return
            }
            this.startFrom=this.startFrom-6
            this.perpage=this.perpage-6
        },
        goNext(){
            if(this.perpage>=this.pageCount){
                return
            }
            this.startFrom=this.perpage
            this.perpage=this.perpage+6
            
        },
        changePage(number){
            this.$emit("changePage",number)
        }
    }
}
</script>
<style scoped>
#Mobile-mainfooter{
    display: none;
}
#mainfooter{
    position: relative;
    color: #0C0C0C;
    margin: 20px;
    font-family: jostRegular;
    font-size: 16px;
    margin-bottom: 60px;
    display:flex;

}
#page-btn{
    display: inherit;
    position: absolute;
    left: 40%;
}
.clickable{
    background-color: white;
    padding: 10px;
    width: auto;
    font-size: 16px;
    border: none;
    height: 50px;
}
.next{
    display: inherit;
    background-color: white;
    align-items: center;
    font-size: 16px;
    font-family:JostSemibold;
    height: 50px;
    padding-left: 10px;
    border: 1px solid rgb(214, 211, 211) ;
}
.next svg{
    margin-left: 10px;
}
.clickable:hover{
    background-color: #4C0B36;
    color: #ffff;
}
.next:hover{
    background-color: #4C0B36;
    color: #ffff;
}
@media screen and (max-width:767px) {
    #mainfooter{
        display: none;
    }
    #Mobile-mainfooter{
        display: block;
        text-align: center;
    }
    .Mobile-next{
        display: inline-flex;
    width: fit-content;
    background-color: white;
    align-items: center;
    font-size: 16px;
    font-family:JostSemibold;
    height: 50px;
    padding-left: 10px;
    border: 1px solid rgb(214, 211, 211) ;
    }
    .Mobile-next svg{
    margin-left: 10px;
    }
    .Mobile-next:hover{
    background-color: #4C0B36;
    color: #ffff;
    }
}

</style>