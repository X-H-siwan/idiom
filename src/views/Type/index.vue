
<template>
    <div>
        <Header></Header>
        <!-- 主体部分 -->
        <div class="main">
            <!-- 网页位置 -->
            <div class="website"><div class="webGuide">位置：<a href="/" title="成语大全 四字成语">成语大全</a> &gt; {{title}}</div><div class="favorite"></div></div>
            <!-- 左边部分 -->
            <div class="partL730">
                <div class="link_group">
                    <dl>
                        <dt>字数查成语分类：</dt>
                        <dd><a @click="openup('/type/pingyinidiom')" title="ABCD式的成语">ABCD式的成语</a></dd>                        
                    </dl>
                </div>

                <!-- 展示全部组件 -->
                <router-view v-if="showallnow"/>

                <div v-else>
                    <h3 class="maintitle"><em>{{title}}列表</em>
                        <!-- <span>
                            <a href="/cydq/3zi/">三字成语故事</a> | <a href="/cydq/5zi/">五字成语故事</a> | 
                            <a href="/cydq/6zi/">六字成语故事</a> | <a href="/cydq/8zi/">八字成语故事</a>
                        </span> -->
                    </h3>
                    <!-- 外层循环 -->
                    <div class="zw_lcont">
                        <div class="zw_box">
                            <h4>
                                <strong>各种形式的成语之<a @click="openup('/type/pingyinidiom')" title="ABCD式的成语">ABCD式的成语</a></strong>
                                <a @click="openup('/type/pingyinidiom')" title="ABCD式的成语" class="more">全部&gt;&gt;</a>
                            </h4>
                            <ul>                            
                                
                                <li><a @click="openup('content')" title="成语测试成语故事">成语测试</a></li>                           
                            </ul>
                        </div>
                    </div>                    
                </div>                
            </div>
            <!-- 右半部分 -->
            <div class="partR250">
                <!-- 第一部分 -->
                
                <!-- 第二部分 -->
                <Dragon_search/>
            </div>
        </div>
        <!-- 主体部分 -->
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '@/components/Footer';
    import Header from "@/components/Header";
    
    import Dragon_search from '@/components/Dragon/Dragon_search';
    export default {
        name:'Type',
        components:{
            Header,
            Footer,
            
            Dragon_search
        },        
        data(){
            return{
                title:'',//获取上级关键字
                showallnow:false,//当前是否需要加载显示全部的组件
            }
        },
        mounted(){
            this.title = this.$route.query.arg1
        },
        methods:{
            openup(key){
                this.showallnow=true
                this.$router.push({
                        path:key,
                        query:{                            
                            arg1:'形式',  
                            arg2:2                        
                        }
                    })
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>