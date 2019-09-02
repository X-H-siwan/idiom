<template>
    <div>
        <Header></Header>
        <!-- 主体 -->
            <div class="main">
                <!-- 位置 -->
                <div class="website">
                    <div class="webGuide">位置：
                        <a href="/" title="成语大全 四字成语">成语大全</a>&gt;
                        <a href="/gushi/" title="成语故事大全">成语故事大全</a>&gt; 中华成语故事动画片</div>
                    <div class="favorite"></div>
                </div>
                <!-- 左边 -->
                <div class="partL730">
                    <div class="boxHui1">
                        <div class="mtitle"><h2><a class="more">总共有<b>{{total}}</b>个成语动画片视频</a>中华成语故事动画片大全</h2></div>
                        <ul class="videoul">            
                            <li v-for="(item,index) in list" :key="index">
                                <a @click="open('/story/content',item)" style="cursor:pointer">
                                    <img :src="item.picture" width="90" height="90" alt="短兵相接动画故事"><span>{{item.title}}</span>
                                </a>
                            </li>
                        </ul>
                        <div class="clear"></div>
                        <div class="pages">
                            <a @click="prepage" style="cursor:pointer">上一页</a> 
                            <a @click="page(1)" style="cursor:pointer">首页</a>                
                            <span>{{curpage}}</span>
                            <a class="bgb" @click="page(totalpage)" style="cursor:pointer">尾页(共{{totalpage}}页)</a>
                            <a @click="nextpage" style="cursor:pointer">下一页</a>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- <div class="Look">
                        <div class="Look_title">
                            <span>成语动画片列表</span>
                            <p>成语故事动画片出处</p>
                        </div>
                        <div class="Look_main">
                            <ul>
                                <li><a @click="open('/idiom_whole/idiomcontent')" style="cursor:pointer">爱屋及乌</a>&nbsp;《尚书大传·大战》：“爱人者，兼其屋上之乌。”</li>
                            </ul>
                        </div>
                    </div> -->
                </div>
                <!-- 右边 -->
                <div class="partR250">
                    <Alltype/> 
                    <Allwatch/>
                </div>
            </div>
        <!-- 主体 -->
        <Footer></Footer>
    </div>
</template>

<script>
    import Alltype from "@/components/Others/Alltype"
    import Allwatch from "@/components/Others/Allwatch"
    import Footer from '@/components/Footer';
    import Header from "@/components/Header";
    import {$open} from "@/util/js/common"
    export default {
        name:'Carton',
        components:{
            Header,
            Footer,
            Alltype,
            Allwatch
        },
        data(){
            return{
                list:[],//存放数据
                curpage:1,//当前页面
                total:'',//总数
                totalpage:1,//总页码
            }
        },
        mounted(){            
            this.getdata()
        },
        methods:{
            open(path,item){
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局 
                $open(path,this.$router);
                   
            },
            getdata(){                
                let url=this.$store.getters.geturl;                
                url+="/dong?limit=55&page="+this.curpage;
                let that=this                           
                $.ajax({
                    url,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.list=res.data.data;
                        that.total=res.data.total;
                        that.totalpage=Math.ceil(that.total/100);                        
                    }
                });
                
            },           
            //上一页
            prepage(){
                if(this.curpage==1){
                    return
                }else{
                    this.curpage-=1;
                    this.getdata(this.curpage)
                }
            },
            //下一页
            nextpage(){                
                if(this.curpage==this.totalpage){
                    return
                }
                this.curpage +=1;
                this.getdata(this.curpage); 
            },
            //首页
            page(key){
                if(this.curpage==1 && key ==1){
                    return
                }
                this.curpage=key;
                this.getdata(this.curpage)
            },
        },        
    }
</script>

<style lang="scss" scoped>

</style>