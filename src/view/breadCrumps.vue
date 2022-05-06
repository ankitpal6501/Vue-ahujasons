<template>
    <div class="pathToPage">
        <div>
            <p>Home <img src="../assets/Arrow.svg" alt=""></p>
            
        </div>
        <div>
            <p>Women <img src="../assets/Arrow.svg" alt=""></p>
           
        </div>
        <div>
            <p>Dresses <img src="../assets/Arrow.svg" alt=""></p>
            
        </div>
        <div>
            <p class="kurta-title">{{name}}</p>
            
        </div>
    </div>
</template>
<script>
export default {
    name:"breadCrumps",
    data(){
        return{
            endPoint:""
        }
    },
    props:{
        name:{
            type:String
        }
    }
}
</script>
<style scoped>
.pathToPage{
    display: flex;
    flex-direction: row;
    color: #565656;
    font-size: 12px;
    margin-left: 20px;
    font-family: Neue Helvetica, 'helveticRoman';
}
p img{
    margin-left: 10px;
    margin-right: 10px;
}
.kurta-title{
    color: #000000;
}
@media screen and (max-width:767px) {
    .pathToPage{
        display: none;
    }
}
</style>