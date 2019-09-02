<template>
    <div>
        <Header></Header>
        <!-- 头部 -->


        <router-view></router-view>
        
        <!-- 脚部 -->
        <Footer></Footer>        
    </div>
</template>

<script>  
   
    import Footer from '@/components/Footer';   
    import Header from "@/components/Header";
    import {$open} from "@/util/js/common";
    export default {
        name:'Idiom_whole',
        components:{
            Header,
            Footer,            
        },
        data(){
            return {
                keepAlive:true,
            }
        },
        mounted(){
            

        },
        methods:{
            // open(path){                
            //     this.$store.dispatch('setshowornot',true);//点击显示内容页
            //     $open(path,this.$router,'八百孤寒');               
            // }
        },
        computed:{
            // showcontent:function(){                
            //     return this.$store.getters.getshowornot;//是否显示意思
            // }
        },
        beforeRouteLeave (to, from, next) {
            console.log(from.name)            
            next();
        },
       
        
    
    }
</script>

<style scoped>
a{
    cursor: pointer;
}
</style>