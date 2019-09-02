
<template>
    <div>
        <Header></Header>
        <!-- 主体 -->
        <div class="main">
            <!-- 位置 -->
            <div class="website">
                <div class="webGuide">位置：
                    <a href="/" title="成语大全 四字成语">成语大全</a>&gt;
                    <a href="/miyu/" title="成语谜语大全及谜底">成语谜语大全及谜底</a>&gt; 趣味成语之最谜语及答案</div>
                <div class="favorite"></div>
            </div>
            <!-- 位置 -->
            <!-- 左边 -->
            <div class="partL730">
                <div class="boxHui1">
                    <div class="mtitle"><h2><a class="more">总共有 <b>{{total}}</b> 个趣味成语谜语，点击链接查看谜语答案</a>世界之最成语谜语大全及答案</h2></div>
                    <ul class="li160">
                        <li v-for="(item,index) in zuibox" :key="index">
                            <a style="cursor:pointer" @click="open('/riddle/content',item)">{{item.title}}</a>
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <div class="partR250">
                <Alltype/> 
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Alltype from "@/components/Others/Alltype"
    import Footer from '@/components/Footer';
    import Header from "@/components/Header";
    import {$open} from '@/util/js/common'
    export default {
        name:'Most',
        components:{
            Header,
            Footer,
            Alltype
        },
        data(){
            return{
                zuibox:[],//存放数据
                total:0,//总数
            }
        },
        mounted(){
            this.getdata()
        },
        methods:{
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局  
            },
            getdata(){
                let url=this.$store.getters.geturl;
                let that=this;                
                $.ajax({
                    url:url+"/zui",
                    type:'get',
                    crossDomain: true,
                    success:function(res){  
                        that.zuibox=res.data.zui;
                        that.total=res.data.total;
                    }
                });    
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>