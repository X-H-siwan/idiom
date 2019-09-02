<template>
    <div class="main mt10">           
        <!-- 左边 -->
        <div class="partL730">
            <!-- 点击字母查询组件 -->
            <div class="boxHui1 zimuLink">成语词典拼音查找：
                <a v-for="item in pybox" :key="item.id" @click="open('/idiom_whole/wholezimu',item.pinyin,'zimu')" style="cursor:pointer">{{item.pinyin | toupper}}</a>
            </div>
            <!-- 大家都在查-->
            <!-- <div class="boxHui1">
                <div class="mtitle"><h2>最近大家都在查的四字成语大全</h2></div>
                <ul class="ulLi120">					    
                    <li><i class="dot"></i><a v-on:click="open('/idiom_whole/idiomcontent')" style="cursor:pointer" title="">成语测试</a></li>
                </ul>
            </div> -->
            <!-- 外层循环 -->
            <div class="link_group">
                <!-- 内层循环 -->
                <dl v-for="(item,index) in typebox2" :key="index">
                    <dt>
                        <a @click="open2('/idiom_whole/wholetype',item,index)" :title="item" style="cursor:pointer">{{item}}</a>：
                    </dt>					    
                    <dd v-for="(iitem,iindex) in typebox[index]" :key="iindex">
                        <a @click="open3('/idiom_whole/wholetype/all',item,iitem,index,iindex)" :title="iitem.title" style="cursor:pointer">{{iitem.title | cutword}}</a>
                    </dd>
                </dl>
            </div>
        </div>    
        <!-- 右边 -->
        <div class="partR250">
            <div class="boxHui1">
                <a href="/" title="成语大全">
                    <img src="https://www.chengyu2.com/statics/images/cydq.jpg" width="250" height="220" alt="成语大全 四字成语 成语故事">
                </a>
            </div>
            <Allwatch/>
            <Wordsearch/>
            <Afterdragon/>
            <Carousal/>
            <Riddlebox/>
            <Parallelbox/>
        </div>
        
    </div>

</template>

<script>  
    import Allwatch from '@/components/Others/Allwatch'
    import  Wordsearch from "@/components/Others/Wordsearch"
    import  Afterdragon from "@/components/Others/Afterdragon";
    import  Carousal from "@/components/Others/Carousal"
    import  Riddlebox from "@/components/Others/Riddlebox"
    import  Parallelbox from "@/components/Others/Parallelbox"


    import {$open} from '@/util/js/common';   
    export default {
        name:'Wholeface',
        components:{
            Allwatch,
            Wordsearch,
            Afterdragon,
            Carousal,
            Riddlebox,
            Parallelbox
        },
        data(){
            return{
                pybox:[],//存放后台返回的字母
                typebox:[],//存放后台返回类型    
                typebox2:[],//存放后台返回类型的key值
            }
        },
        mounted(){            
            this.getData();
        },
        methods:{
            open(path,key,arg3){               
                $open(path,this.$router,key);
                if(arg3=='zimu'){
                    this.$store.dispatch('setzimu',key);                    
                }
            },
            open2(path,key,key2){                
                this.$router.push({
                    path,
                    query:{                        
                        arg2:key2
                    }
                }); 
                this.$store.dispatch('setcaodaistr',key)
            },
            //点击细分类进入all界面
            open3(path,key,key2,key3,key4){
                console.log(key3) 
                // this.$store.dispatch('settypebox',key2) 
                this.$store.dispatch('setcaodaistr',key)              
                this.$router.push({
                    path,
                    query:{
                        // arg2:key2.id,
                        // arg3:key3
                        a:key2.id,
                        b:key3,
                        c:key4
                    }
                })   
            },
            //获取数据
            getData(){                
                let that=this;
                let url=this.$store.getters.geturl;
                $.ajax({
                    url:url+"/index",
                    type:'get',
                    crossDomain: true,
                    success:function(res){                        
                        that.pybox=res.pinyin;                        
                        Object.keys(res.artlist).forEach(function(key){
                            that.typebox2.push(key)                            
                            that.typebox.push(res.artlist[key])                                                   
                        })
                        that.$store.dispatch('settypebox',that.typebox)
                        that.$store.dispatch('setzimubox',that.pybox) 
                        that.$store.dispatch('settype',that.typebox2)                       
                    }
                });       
            },            
        },
        filters:{            
            cutword:function(value){
                if(value.length>10){                    
                    return value.substring(0,9)
                }else{
                    return value
                }
                 
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>