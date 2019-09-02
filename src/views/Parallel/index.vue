


<template>
    <div>
        <Header></Header>
        <!-- 主体 -->
        <div class="main">
            <!-- 位置 -->
            <div class="website">
                <div class="webGuide">位置：<a href="/" title="成语大全 四字成语">成语大全</a> &gt; 
                <span @click='refresh' style="cursor:pointer">成语对联大全</span> &gt; <span v-show="isList">成语对联大全列表</span>
            </div>
            <div class="favorite"></div></div>
            
                <router-view></router-view>
            
                     
            
            <!-- 右边 -->
            
        </div>
        <!-- 主体 -->
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '@/components/Footer';
    import Header from "@/components/Header";
    import  Allwatch from '@/components/Others/Allwatch';

    export default {
        name:'Parallel',
        inject:['reload'],
        components:{
            Header,
            Footer,
            Allwatch,
            
        },
        data(){
            return{
                isList:false,//显示列表
                keywords:'',//关键字传递到content组件后请求相关数据
            }
        },
        methods:{
            //点击跳转到内容页
            toContent(){
                this.keywords='内容页已经到了'
            },
            //点击显示列表页
            list(){
                this.isList=true;
            },
            //点击刷新当前路由
            refresh(){
                this.reload()
            }
        }


    }
</script>

<style lang="scss" scoped>

</style>