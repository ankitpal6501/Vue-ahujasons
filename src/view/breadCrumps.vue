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
            <p>Home <img src="../assets/Arrow.svg" alt=""></p>
            
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
    }
}
</script>
<style scoped>
.pathToPage{
    display: flex;
    flex-direction: row;
    color: #565656;
    font-size: 12px;
    margin-left: 10px;
    font-family: Neue Helvetica, 'helveticRoman';;
}
</style>