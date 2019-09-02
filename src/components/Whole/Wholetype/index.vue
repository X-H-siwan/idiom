
<template>
    <div class="main mt10">        
        <!-- 左边部分 -->
        <router-view v-if="isRouterAlive"></router-view>
        <!-- 主体部分 -->  
        <!-- 右边 -->
        <div class="partR250">
            <Alltype/>
            <Afterdragon/>
        </div>
    </div>  
</template>

<script>
    import {$open} from '@/util/js/common'  
    import Alltype from "@/components/Others/Alltype"  
    import Afterdragon from "@/components/Others/Afterdragon" 
    export default {       
        name:'Wholetype',
        components:{
            Alltype,
            Afterdragon,
        },
        props:{
            titlefrom:String
        },
        data(){
            return{
                isRouterAlive:true,          
            }
        },
        mounted(){
            
        },
        methods:{
           reload(){
               this.isRouterAlive=false;
               this.$nextTick(()=>{
                   this.isRouterAlive=true
               })
           }
        }

    }
</script>

<style lang="scss" scoped>

</style>