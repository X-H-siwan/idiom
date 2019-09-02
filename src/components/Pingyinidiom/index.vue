<template>
    <div>
        <div v-if="isPinyin">
            <div class="clearfix">
            <div class="mtitle">
                <h3>首字拼音是 <b class="red">{{pinyin}}</b> 的成语</h3>                
            </div>
            <ul class="ulLi120 fsc16">
                <li><a @click="openup('content')" title="八百孤寒的意思">八百孤寒</a></li>
                <li><a href="/babaizhijiao.html" title="八拜之交的意思">八拜之交</a></li>
                <li><a href="/badouzhicai.html" title="八斗之才的意思">八斗之才</a></li>
                <li><a href="/bafanghuying.html" title="八方呼应的意思">八方呼应</a></li>            
            </ul>
        </div>
            <!-- 分页 -->
        <div class="pages"><a href="/B/ba/">上一页</a>  <span>1</span> <a href="/B/ba/2.html">2</a> <a href="/B/ba/2.html">下一页</a>  </div>
            <!-- clearboth -->
        <div class="clear"></div>
        </div>


        <div v-else class="boxHui1">            
            <div class="mtitle">                
                <h2><a class="more">找到{{keywords}}的成语共 <b>27466</b> 个，当前第（1）页展示</a>abcd形式的成语大全</h2>
            </div>
            <ul class="ulLi120 fsc16">
                <li><a @click="openup('content')" title="八百孤寒的意思">八百孤寒</a></li>
                <li><a href="/babaizhijiao.html" title="八拜之交的意思">八拜之交</a></li>
                <li><a href="/badouzhicai.html" title="八斗之才的意思">八斗之才</a></li>
                <li><a href="/bafanghuying.html" title="八方呼应的意思">八方呼应</a></li>            
            </ul>
            <div class="clear"></div>
                <!-- 分页 -->
            <div class="pages"><a href="/B/ba/">上一页</a>  <span>1</span> <a href="/B/ba/2.html">2</a> <a href="/B/ba/2.html">下一页</a>  </div>
                <!-- clearboth -->
            <div class="clear"></div>
        </div>
        
        
    </div>
</template>

<script>
    export default {
        name:'Pingyinidiom',
        props:{
            keywords:String,
        },
        data(){
            return{
                pinyin:'',//上级页面传过来的关键字
                list:[],//数据包
                isPinyin:false,//判断应该显示哪一个title
            }
        },
        mounted(){
            this.pinyin=this.$route.query.arg1;
            if(this.$route.query.arg2==1){
                this.isPinyin=true
            }else if(this.$route.query.arg2==2){
                this.isPinyin=false
            }            
            this.getData(this.pinyin);
            
        },
        methods:{
            getData(key){

            },
            openup(key){                
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