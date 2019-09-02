<template>
    <div>
        <Header></Header>
        <!-- 主体 -->
        <div class="main">
            <div class="website"><div class="webGuide">位置：
                <a href="/" title="成语大全 四字成语">成语大全</a> &gt; <span>成语接龙</span></div>
                <div class="favorite"></div>
            </div>
            <!-- 结果左边 -->
            <router-view></router-view>
            <!-- 成语接龙组件 -->
            <!-- 右边 -->
            
        </div>
        
        <!-- 主体 -->
        <Footer></Footer>
    </div>
</template>

<script>
    import { $open,$dragonsearch } from '@/util/js/common.js'
    import Footer from '@/components/Footer';
    import Header from "@/components/Header"; 
    export default {
        name:'Dragon',
        components:{
            Header,
            Footer,            
        },    
        data(){
            return{
                     
            }
        },
        methods:{
           
        },
        
       
    }
</script>

<style lang="scss" scoped>

</style>