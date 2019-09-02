<template>
    <div>
        <Header></Header>
        <!-- 主体 -->
        <div class="main">
            <div class="website">
                <div class="webGuide">位置：
                    <a href="/" title="成语大全 四字成语">成语大全</a>&gt; 
                    <router-link tag="span" to="/riddle" style="cursor:pointer">成语谜语大全及答案</router-link>                                        
                </div>
                <div class="favorite"></div>
            </div>
            <!-- 组件路由 -->
            <router-view></router-view>
            <!-- 右边 -->
            
        </div>
        <!-- 主体 -->
        <Footer></Footer>
        <table class="popup" style="left: 0px; top: 392.5px; opacity: 0; display: none;"><tbody><tr><td class="popup-inner">你的提示已经用光了</td></tr></tbody></table>
    </div>
</template>

<script>
    import Footer from '@/components/Footer';
    import Header from "@/components/Header";
    import {$open} from '@/util/js/common';
    export default {
        name:'Riddle',
        inject:['reload'],
        components:{
            Header,
            Footer,
        },
        data(){
            return{
                islist:false,                
            }
        },
        methods:{
            //点击刷新
            refresh(){
                this.reload()
            },
        },
        computed:{
            showcontent(){
                return this.$store.getters.getriddleshow;//显示内容
            }
        }    
    }
</script>

<style lang="scss" scoped>

</style>