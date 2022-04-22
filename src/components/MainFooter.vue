<template>
    <div id="mainfooter">
        <p>Page 1 to {{pageCount}}</p>
        <div id="page-btn">
            <button id="clickable" v-for="i in pageCount" :key="i" @click="changePage(i)">{{i}}</button>
            <!-- <button  id="next"><p>NEXT</p> 
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" 
                height="23px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button> -->
        </div>
    </div>
</template>
<script>
export default {
    name:"MainFooter",
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
        changePage(number){
            this.$emit("changePage",number)
        }
    }
}
</script>
<style scoped>

#mainfooter{
    position: relative;
    color: #0C0C0C;
    margin: 20px;
    margin-bottom: 60px;
    display:flex;

}
#page-btn{
    display: block;
    position: absolute;
    left: 10%;
}
#clickable{
    background-color: white;
    padding: 10px;
    width: auto;
    font-size: 16px;
    border: none;
    height: 50px;
}
#next{
    display: inherit;
    background-color: white;
    align-items: center;
    font-size: 16px;
    font-family:JostSemibold;
    height: 50px;
    padding-left: 10px;
    border: 1px solid rgb(214, 211, 211) ;
}
#next svg{
    margin-left: 10px;
}
#clickable:hover{
    background-color: #4C0B36;
    color: #ffff;
}
#next:hover{
    background-color: #4C0B36;
    color: #ffff;
}

</style>