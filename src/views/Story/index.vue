
<template>
    <div>
        <Header></Header>
        <!-- 主体部分 -->
        <div class="main">
            <!-- 位置 -->
            <div class="website">
                <div class="webGuide">位置：
                    <a href="/" title="成语大全 四字成语">成语大全</a>&gt; 成语故事大全</div>
                <div class="favorite"></div>
            </div>
            <!-- 位置 -->
            <router-view></router-view>            
            <!-- 右半部分 -->
            
        </div>

        <Footer></Footer>
        <!-- 右边 -->
        <div class="partR250">
            <Allwatch/>
            <Afterdragon/>
        </div>
    </div>
</template>

<script>
    import Allwatch from '@/components/Others/Allwatch';
    import Afterdragon from '@/components/Others/Afterdragon';
    import Footer from '@/components/Footer';
    import Header from "@/components/Header"; 
    export default {
        inject:['reload'],
        name:'Idiom_story',
        components:{
            Header,
            Footer,
            Allwatch,
            Afterdragon
        },
        data(){
            return{                           
                show_conponent:true,//不同页面显示那些组件
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>