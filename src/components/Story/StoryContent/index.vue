<template>
    <div>
        <div class="partL730">
            <div class="boxHui content">
                <h2 id="cattitle">{{data.title}}的故事</h2>
                <div class="cbody">
                    <p class="description" style="height:80px;">
                        <b>故事概述：</b>{{data.description}}
                    </p>
                    <h3>{{data.title}}的成语故事动画视频</h3>                
                    <div class="playcode">         
                        <embed :src="data.playurl" 
                        quality="high" width="640" height="500" align="middle" allowscriptaccess="sameDomain" 
                        type="application/x-shockwave-flash">           
                        <p>查看<a style="cursor:pointer" @click="open('/idiom_whole/idiomcontent')" :title="data.title">{{data.title}}的意思</a> &gt;&gt;</p>
                    </div>
                    <p align="center">
                        <img :src="pic" :alt="data.title"/></p>
                    <h3>{{data.title}}的故事描述：</h3>                    
                    <p v-html="data.gushi"></p>
                    <p>
                        <b>相关查询：</b>
                        <a style="cursor:pointer" @click="open('/idiom_whole/idiomcontent')" :title="data.title">{{data.title}}的意思</a>、
                        <a style="cursor:pointer" @click="todragon(data.title)" :title="data.title">{{data.title}}成语接龙</a>、
                        <a v-show="para==null?false:true" @click="open2('/parallel/content')" style="cursor:pointer" :title="data.title">{{data.title}}对对子</a>
                    </p>
                </div>
            </div>
        </div>

        <!-- 右边 -->
        <div class="partR250">
            <Allwatch @ondatachange="onDataChange"/>
            <Afterdragon/>
        </div>
    </div>
</template>
<script>
    import Allwatch from '@/components/Others/Allwatch';
    import Afterdragon from '@/components/Others/Afterdragon';
    import {$open} from "@/util/js/common"

    export default {
        name:'Storycontent',
        inject:['reload'],
        components:{
            Allwatch,
            Afterdragon
        },
        data(){
            return{
                data:[],//整个对象存放处
                pic:'',//图片需要拼接字符串
                cybox:{},//这里需要查询后给到内容页
                para:[],
            }
        },
        mounted(){
            this.data=this.$store.getters.getcybox;
            this.pic= 'https://www.chengyu2.com'+this.data.picture
            this.getcy();
            this.getpara()
        },
        methods:{
            onDataChange(val){
                this.data=val;
            },
            todragon(key){                
                let path = '/dragon/after';
                this.$store.dispatch('setdragon',key)
                this.$router.push({path})            
            },
            getcy(){
                let word=this.data.title;
                let url=this.$store.getters.geturl;
                let that=this;                
                $.ajax({
                    url:url+"/xuan?limit=20&w1="+word.substring(0,1)+'&w2='+word.substring(1,2)+'&w3='+word.substring(2,3)+'&w4='+word.substring(3,4),
                    type:'get', 
                    dataType: 'json', 
                    crossDomain: true,
                    success:function(res){
                        that.cybox=res.data.data[0];
                    },
                    error:function(res){
                        console.log(res)
                    }
                })    
            },
            getpara(){
                let url=this.$store.getters.geturl;
                let that=this;
                $.ajax({
                    url:url+'/duiduizi_content?fiel=id&value='+that.data.id,
                    type:'get', 
                    dataType: 'json', 
                    crossDomain: true,
                    success:function(res){                        
                        that.para=res.data             
                    },
                    error:function(res){
                        console.log(res)
                    }
                })    
            },
            open(path){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',this.cybox);//将当前点击的成语相关信息存放进全局    
            },
            open2(path,key){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',this.para);//将当前点击的成语相关信息存放进全局    
            }
        },
        watch:{
            cybox:function(){
                console.log('数据更新了哦')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>