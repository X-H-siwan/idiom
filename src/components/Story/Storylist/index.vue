<template>
    <div>
        <div class="partL730">
            <div class="boxHui1 zimuLink">
                <strong class="red">中华成语故事大全：</strong>
                <a v-for="(item,index) in shidai" :key="index" :title="item" @click="tochaodai(item[1])" style="cursor:pointer">{{item[0]}}典故</a>                               
            </div>
            <div class="boxHui1">
                <div class="mtitle">
                    <h2><a class="more">总共有 <b>{{total}}</b> 个成语典故故事</a> {{}}</h2>
                </div>
                <ul class="ulLi120">                
                    <li v-for="(data,i) in caodai" :key="i" @click="open('/story/content',data)">
                        <a style="cursor:pointer">{{data.title}}</a>                        
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
                    <span>成语典故故事</span>
                    <p>成语故事出处</p>
                </div>
                <div class="Look_main">
                    <ul>
                        <li><span><a href="/bujingerzou.html" title="不胫而走的意思">不胫而走</a></span>
                            <p>汉&middot;孔融《论盛孝章书》：“珠玉无胫而自至者，以人好之也，况贤者之有足乎？”</p>
                        </li>                       
                    </ul>
                </div>
            </div> -->
        </div>
        <div class="partR250">
            <!-- 第一部分 -->
            <Alltype/>
            <!-- 第二部分 -->
            <Afterdragon/>               
        </div>
    </div>
</template>

<script>
    import Afterdragon from '@/components/Others/Afterdragon';
    import Alltype from '@/components/Others/Alltype';
    import {$open} from "@/util/js/common"
    export default {
        name:'Storylist',
        components:{            
            Afterdragon,
            Alltype
        },
        data(){
            return{
                caodai:[],//存放朝代
                total:0,//成语的总个数
                shidai:[],
                current:'',//当前时代
                curpage:1,//当前页面
                totalpage:0,
                contentdata:{},//准备送至内容页的对象
                
            }
        },
        mounted(){
            this.current=this.$route.query.arg1
            this.getdata(1);
            this.shidai=this.$store.getters.getcaodai;
           

        },
        methods:{
            getdata(key){
                let url=this.$store.getters.geturl;
                let that=this;  
                console.log(url+"/getgushilike?file=jgid&page="+key+"&limit=100&value="+that.current)              
                $.ajax({
                    url:url+"/getgushilike?file=jgid&page="+key+"&limit=100&value="+that.current,
                    type:'get',
                    crossDomain: true,
                    success:function(res){  
                        console.log(res)
                        that.caodai.length=0;
                        that.caodai=res.data.data
                        that.total=res.data.total
                        that.totalpage=Math.ceil(res.data.total/100);//计算总页数
                    }
                });    
            },
            //跳转至内容页后需要存放数据到vuex
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局  
            },
            tochaodai(key){
                this.current=key
                this.getdata(1)
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
           
            


        }

    }
</script>

<style lang="scss" scoped>

</style>