<template>
    <div class="main mt10">
        <div class="website">
            <div class="webGuide">位置：<a href="/" title="成语大全 四字成语">成语大全</a> &gt; 拼音首字母是{{zimu|toupper}}的成语</div>
            <div class="favorite"></div>
        </div>
        <!-- 主体部分 -->
        <div class="partL730">
            <div class="boxHui1 zimuLink">按拼音检索：
                <a v-for="(item,index) in zimubox" :key="index" :class="zimu==item.pinyin ? 'current' : ''" 
                @click="openall('/idiom_whole/wholezimu/all',item.pinyin)" style="cursor:pointer">{{item.pinyin | toupper}}</a>  
            </div>              
            <div class="boxHui1">
                <div class="mtitle">
            <h2>成语首字母是<b class="red">{{zimu|toupper}}</b>的拼音</h2>
            </div>
            <div class="yingList clearfix">
                <a v-for="(pinyin,iindex) in yingList" :key="iindex" @click="open('/idiom_whole/wholezimu/single',pinyin)">{{pinyin}}</a> 
            </div>
            
            <router-view v-if='isRouterAlive'></router-view>            
            </div>            
        </div>
        
        <!-- 主体部分 -->
        <div class="partR250">
           <Alltype/>
        </div>
    </div>
</template>

<script>    
    import {$open} from '@/util/js/common';
    import Alltype from "@/components/Others/Alltype"
    export default {
        name:'Wholezimu',
        components:{
            Alltype
        },
        data(){
            return{
                zimu:'',//存放当前字母
                zimubox:[],//存放上级给过来的字母列表
                isRouterAlive:true,
                yingList:[],
                pinyinlist:[],
                
            }
        },
        mounted(){
            this.zimu=this.$route.query.arg1; 
            this.zimubox=this.$store.getters.getzimubox;
            this.getData();
            this.reload();

        },
        methods:{
            //刷新
            reload(){                
                this.isRouterAlive=false;                
                this.$nextTick(()=>{
                    this.isRouterAlive=true;
                    this.change();
                })
            },
            change(){
                this.$store.dispatch('setzimu',this.zimu);
                this.$store.dispatch('setpinyinlist',this.yingList);
                this.$store.dispatch('setcybox',this.pinyinlist);
                
            },
            //获取数据
            getData(){
                console.log(this.zimu)
                let that=this;
                let url=this.$store.getters.geturl;                
                $.ajax({
                    url:url+"/wd?word="+that.zimu,
                    type:'get', 
                    dataType: 'json', 
                    crossDomain: true,
                    success:function(res){
                        that.yingList.length=0;
                        that.pinyinlist.length=0
                        Object.keys(res).forEach((key)=>{
                            that.yingList.push(key);
                            that.pinyinlist.push(res[key])                           
                        })
                        that.putdata()
                    }
                })
            },
            putdata(){                
                this.$store.dispatch('setpinyinlist',this.yingList);
                this.$store.dispatch('setcybox',this.pinyinlist);                           
            },            
            open(path,key){                
                $open(path,this.$router,key);
                this.reload()
            },
            openall(path,key){
                this.zimu=key;
                this.getData();
                $open(path,this.$router,key);
                this.reload();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>