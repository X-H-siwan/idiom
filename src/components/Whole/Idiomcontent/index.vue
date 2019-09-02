<template> 
    <div class="main mt10">
        <!-- 位置 -->
        <div class="website">
            <div class="webGuide">位置：
                <a href="/" title="成语大全 四字成语">成语大全</a>&gt; 成语《{{infos.title}}》的意思及详解</div>
            <div class="favorite"></div>
        </div>
        <!-- 位置 -->          
        <div class="partL730">
            <div class="boxHui content">
                <h2>{{infos.title}}的意思_{{infos.title}}出处、造句</h2>
                <div class="listbody">
                    <p class="description">2019年08月24日:在线成语词典网（www.chengyu2.com）提供成语{{infos.title}}的意思及对应读音、{{infos.title}}是什么意思、近义词、反义词、英语翻译、{{infos.title}}造句等详细信息。访问地址：http://www.chengyu2.com/badouzhicai.html</p>
                    <p>
                        <b>成语名称：</b>{{infos.title}}</p>
                    <p>
                        <b>成语读音：</b>
                        <span class="fayin">{{infos.fayin}}</span></p>
                    <p>
                        <b>成语解释：</b>{{infos.shiyi}}</p>
                    <p>
                        <b>成语出处：</b>{{infos.chuchu}}</p>
                    <p>
                        <b>成语造句：</b>{{infos.shili}}</p>
                    <p>
                        <b>近 义 词：</b>
                        {{infos.jinyici | cut}}
                        </p>
                    <p>
                        <b>反 义 词：</b>
                        {{infos.fanyici | cut}}
                        </p>
                    <p>
                        <b>成语用法：</b>{{infos.yufa}}</p>
                    <p>
                        <b>成语繁体：</b>{{infos.fanti}}</p>
                    <p>
                        <b>常用程度：</b>{{infos.changyong}}</p>
                    <p>
                        <b>感情色彩：</b>{{infos.ganqing}}</p>
                    <p>
                        <b>成语结构：</b>{{infos.jiegou}}</p>
                    <p>
                        <b>成语正音：</b>{{infos.zhengyin}}</p>
                    <p>
                        <b>成语形式：</b>{{infos.xingshi}}</p>
                    <p>
                        <b>相关查询：</b>
                        <a @click="open(infos.zi1)" style="cursor:pointer;color:blue">带{{infos.zi1}}字的成语</a>、
                        <a @click="open(infos.zi2)" style="cursor:pointer;color:blue">带{{infos.zi2}}字的成语</a>、
                        <a @click="open(infos.zi3)" style="cursor:pointer;color:blue">带{{infos.zi3}}字的成语</a>、
                        <a @click="open(infos.zi4)" style="cursor:pointer;color:blue">带{{infos.zi4}}字的成语</a></p>
                    <p>
                        <b>成语接龙：</b>、
                        <a @click="open(infos.zi1,1)" style="cursor:pointer;color:blue">{{infos.zi1}}开头的成语</a>、
                        <a @click="open(infos.zi1,4)" style="cursor:pointer;color:blue">{{infos.zi1}}结尾的成语</a>、
                        <a @click="open(infos.zi3,3)" style="cursor:pointer;color:blue">第三个字是{{infos.zi3}}的成语</a>、
                        <a @click="open(infos.zi2,2)" style="cursor:pointer;color:blue">第二个字是{{infos.zi2}}的成语</a>、
                        <a @click="open(infos.zi4,1)" style="cursor:pointer;color:blue">{{infos.zi4}}开头的成语</a>、
                        <a @click="open(infos.zi4,4)" style="cursor:pointer;color:blue">{{infos.zi4}}结尾的成语</a></p>
                    <h3>
                        <span :title="infos.title">{{infos.title}}成语接龙</span>：</h3>
                    <ul class="list_content">
                        <li v-for="(item,index) in dlist" :key="index">
                            <a @click="todetail(item)" :title="item.title" style="cursor:pointer;color:blue">{{item.title}}</a>&nbsp;
                            <span>{{item.shiyi}}</span>
                        </li>                        
                    </ul>
                    <p>{{infos.shiyi}}</p>
                </div>
            </div>
        </div> 
        <div class="partR250">
            <div class="boxHui1">
                <a href="/" title="成语大全">
                    <img src="https://www.chengyu2.com/statics/images/cydq.jpg" width="250" height="220" alt="成语大全 四字成语 成语故事">
                </a>
            </div>
            <Allwatch/>
            <Wordsearch/>
            <Riddlebox/>
        </div> 
    </div>  
</template>

<script>
    import Allwatch from '@/components/Others/Allwatch'
    import  Wordsearch from "@/components/Others/Wordsearch"   
    import  Riddlebox from "@/components/Others/Riddlebox"  
    import {$open} from '@/util/js/common'  
    export default {
        name:'Idiomcontent',   
        components:{
            Allwatch,
            Wordsearch,            
            Riddlebox,
        },
        data(){
            return{              
                infos:[],
                dlist:[],
            }
        },
        mounted(){            
            this.infos=this.$store.getters.getcybox;//获取存放在vuex中的当前成语
            this.getdata()
        },   
        methods:{
            goback(){
                this.$router.go(-1)
            },
            open(key,n){
                let argument='';
                if(n==1){
                    argument=key+'***'
                }else if(n==2){
                    argument='*'+key+'**'
                }else if(n==3){
                    argument='**'+key+'*'
                }else if(n==4){
                    argument='***'+key
                }else(
                    argument=key+'***'
                )
                let path = '/dragon/result'
                this.$router.push({
                    path,
                    query:{
                        arg1:argument
                    }
                })
            },
            getdata(){
                let url=this.$store.getters.geturl;
                let that=this;
                let str = 'w1='+this.infos.title.substring(3,4)                
                $.ajax({
                    url:url+"/xuan?limit=8&"+str,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.dlist=res.data.data;                        
                    }
                })
            },
            todetail(key){
                this.infos=key;
                this.getdata()
            }
        },    
    }
</script>

<style lang="scss" scoped>

</style>