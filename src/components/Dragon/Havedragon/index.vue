<template>
    <div>
        <div class="partL730">
            <div class="boxHui content">
                <h2 id="cattitle">{{givenby}}成语接龙游戏</h2>
                <div class="cbody">
                    <h3>{{givenby}}顺序成语接龙游戏</h3>
                    <div class="jielong2_idiom">{{givenby.substring(0,3)}}
                        <b>{{givenby.substring(3,4)}}</b>
                    </div>
                    <div class="jielong2_arrow"></div>
                    <div class="jielong2_idioms clearfix">
                        <span class="jielong2_idioms_1" v-for="(cy,index) in three" :key="index" @click="afteragain(cy.title)">
                            <a style="cursor:pointer" :title="cy.title">
                                <b>{{cy.title.substring(0,1)}}</b>{{cy.title.substring(1,4)}}</a>
                        </span>                        
                    </div>
                    <ul class="ulLi100">
                        <li v-for="(item,i) in rest" :key="i" @click="afteragain(item.title)">
                            <a style="cursor:pointer" :title="item.title">{{item.title}}</a>
                        </li>
                    </ul>
                    <p align="center" @click="open('/idiom_whole/all')">
                        <a style="cursor:pointer">查看全部<span style="color:red;">{{givenby.substring(3,4)}}</span>开头的成语</a></p>
                    <p>相关查询：
                        <a @click="open('/idiom_whole/idiomcontent')" style="cursor:pointer" :title="givenby">{{givenby}}的意思</a></p>
                    <br>



                    <!-- 倒序 -->
                    <h3>{{givenby}}逆序成语接龙游戏</h3>
                    <div class="jielong2_idiom">
                        <b>{{givenby.substring(0,1)}}</b>{{givenby.substring(1)}}</div>

                    <div class="jielong2_arrow">

                    </div>
                    <div class="jielong2_idioms clearfix">
                        <span class="jielong2_idioms_1" v-for="(cy1,index1) in three1" :key="index1" @click="afteragain(cy1.title)">
                            <a >{{cy1.title.substring(0,3)}}
                                <b>{{cy1.title.substring(3,4)}}</b>
                            </a>
                        </span>                        
                    </div>
                    <ul class="ulLi100">
                        <li v-for="(item1,i1) in rest1" :key="i1" @click="afteragain(item1.title)">
                            <a style="cursor:pointer" :title="item1.title">{{item1.title}}</a>
                        </li>
                    </ul>
                    <p align="center" style="cursor:pointer" @click="open('/idiom_whole/all')">
                        <a >查看全部<span style="color:red;">{{givenby.substring(0,1)}}</span>结尾的成语</a></p>
                </div>
            </div>
        </div>
        <div class="partR250">
            <Afterdragon @ondatachange="onDataChange"/>
            <Wordsearch/>
        </div>
    </div>
</template>

<script>
    import Afterdragon from '@/components/Others/Afterdragon';
    import Wordsearch from '@/components/Others/Wordsearch';
    import {$open} from '@/util/js/common'
    export default {
        name:"Havedragon",
        components:{
            Afterdragon,
            Wordsearch
        },
        data(){
            return{
                givenby:'',//上级传过来的成语                
                cut2:'',
                three:[],//前面三个
                rest:[],//剩下的
                three1:[],//前面三个
                rest1:[],//剩下的
            }
        },
        mounted(){
            this.givenby=this.$store.getters.getdragon;
            console.log(this.givenby)
            this.cutword()
        },
        methods:{
            onDataChange(val){
                this.givenby=val;
            },
            //点击查询成语的意思
            open(path,item){
                if(!item){
                    $open(path,this.$router);
                    this.$store.dispatch('setdragon',this.givenby)
                }else{
                    $open(path,this.$router);
                    this.$store.dispatch('setcybox',item)
                }
            },            
            //切字
            cutword(){
                let str='w1='+this.givenby.substring(3,4);
                let str2='w4='+this.givenby.substring(0,1)                
                this.getdata(str,1)
                this.getdata(str2,2)
            },
            //获取数据
            getdata(key,n){     
                let url=this.$store.getters.geturl;
                let that=this;
                $.ajax({
                    url:url+"/xuan?"+key,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        if(n==1){
                            that.three=res.data.data.splice(0,3);
                            that.rest=res.data.data
                        }else if(n==2){
                            that.three1=res.data.data.splice(0,3);
                            that.rest1=res.data.data
                        }
                    }
                })
            },
            //点击成语再次开始接龙
            afteragain(key){
                this.givenby=key;
                this.cutword();
            }
        },
        watch:{
            givenby:function(){
                this.cutword()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>