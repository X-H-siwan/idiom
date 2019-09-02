
<template>
    <div>
        <Header></Header>
        <!-- 主体 -->
            <div class="main">
                <div class="website"><div class="webGuide">位置：<a href="/" title="成语大全 四字成语">成语大全</a> &gt; 成语查询</div><div class="favorite"></div></div>
                <div class="partL730">
                    <div class="boxHui content">
                        <h2 id="cattitle">成语在线查询</h2>
                        <div class="cbody">
                            <h3>四字成语定位查询</h3>
                            <div class="searchbox">
                                <form method="post" id="searchForm">
                                    <strong>成语定位查询:</strong>
                                    <input type="text" name="zi1" size="1" value="" maxlength="1" class="inputzi">
                                    <input type="text" name="zi2" size="1" maxlength="1" value="" class="inputzi">
                                    <input type="text" name="zi3" size="1" value="" class="inputzi" maxlength="1">
                                    <input type="text" name="zi4" size="1" maxlength="1" value="" class="inputzi"> 
                                    <button @click="open('/dragon/result')" class="btsubmit">查 询</button>
                                </form>
                            </div>
                            <p><b>提示：</b>请在输入框中输入一个成语或成语者要对应位置的字，(如输入成语：“百依百顺 或 百*百*”)，点击“查询”，系统将自动生成对应关系的成语。每个框输入一个汉字，
                            即含有该字对应位置的成语，至少输入一个汉字；</p>
                            <p align="center"><img src="https://www.chengyu2.com/statics/images/chaxun.jpg" alt="四字成语查询_成语在线查询" width="400" height="300"></p>
                            <h3>按成语首字拼间查成语</h3>
                            <p>按拼音检索：
                                <a v-for="(item,index) in zimubox" :key="index" class="current" 
                                @click="openzimu('/idiom_whole/wholezimu/all',item.pinyin)" style="cursor:pointer;margin:0 5px;">{{item.pinyin | toupper}}</a>
                            </p>
                            <h3>按成语属性分类查成语</h3>
                            <p>
                                <a v-for="(item,index) in type" :key="index" @click="opentype('/idiom_whole/wholetype',item,index)" style="cursor:pointer;margin:0 5px;">{{item}}</a> 
                            </p>
                            <p>可以查询到成语读音、成语解释、成语出处，成语故事典故；包适成语的近义词、反义词，成语的用法等</p>
                        </div>
                    </div>
                </div>
                <div class="partR250">                     
                    <Allwatch/>
                    <Wordsearch/>  
                </div>
            </div>
        <!-- 主体 -->
        <Footer></Footer>
    </div>
</template>

<script>
    import { $open,$dragonsearch } from '@/util/js/common.js'
    import Footer from '@/components/Footer';
    import Header from "@/components/Header";
    import Allwatch from "@/components/Others/Allwatch";
    import Wordsearch from "@/components/Others/Wordsearch";
    
    export default {
        name:'Search',
        components:{
            Header,
            Footer,
            Allwatch,
            Wordsearch
        },
        data(){
            return {
                word:'',//将要查询的成语
                zimubox:[],//存放上级给过来的字母列表
                type:[],//十二种类型
            }
        },
        mounted(){
            this.zimubox=this.$store.getters.getzimubox; 
            this.type=this.$store.getters.gettype
        },
        methods:{
            //点击打开内容页
            open(path){                
                let input=document.getElementsByClassName('inputzi');
                this.word='';
                for(let i=0;i<input.length;i++){
                    if(input[i].value==''){
                        this.word+='*'
                    }else{
                        this.word+=input[i].value
                    }
                }
                this.$router.push({
                    path,
                    query:{
                        arg1:this.word
                    }
                })
            }, 
            openzimu(path,key){
                this.$router.push({
                    path,
                    query:{
                        arg1:key,                        
                    }
                })
            },
            opentype(path,key,key2){
                this.$router.push({
                    path,
                    query:{
                        arg1:key,
                        arg2:key2
                    }
                })
            },        
        }
    }
</script>

<style lang="scss" scoped>

</style>