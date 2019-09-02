<template>
    <div>
        <div class="partL730">
            <div class="boxHui content">
                <div class="cbody">
                    <div class="searchbox clearfix">
                        <div id="searchForm"><strong>成语定位查询:</strong>
                            <input type="text" name="zi1" size="1" value="" class="inputzi">
                            <input type="text" name="zi2" size="1" value="" class="inputzi">
                            <input type="text" name="zi3" size="1" value="" class="inputzi">
                            <input type="text" name="zi4" size="1" value="" class="inputzi"> 
                            <button @click="search" class="btsubmit">查 询</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Look">
                <div class="Look_title"><span>{{curcy}}成语</span><p>成语的意思</p></div>
                <div class="Look_main">
                    <ul>
                        <li v-for="(item,index) in resbox" :key="index" @click="opencontent('/idiom_whole/idiomcontent',item)" style="cursor:pointer">
                            <a :title="item.title">{{item.title}}</a> &nbsp;{{item.shiyi}}
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
        <div class="partR250"> 
            <Alltype/>                         
            <Allwatch/>
        </div>
    </div>
</template>

<script>
    import  Alltype from '@/components/Others/Alltype';
    import  Allwatch from '@/components/Others/Allwatch';
    import { $open,$dragonsearch } from '@/util/js/common.js'
    export default {
        name:'Dragonresult',
        components:{
            Alltype,
            Allwatch
        },
        data(){
            return{
                resbox:[],//搜索结果盒子
                curcy:'',//当前成语
            }
        },
        mounted(){
            this.getCy(this.$route.query.arg1)
        },
        methods:{
            //点击打开内容页
            open(path){                
                $open(path,this.$router);
            },
            //提交表单数据进行查询
            search(){
                let input=document.getElementsByClassName('inputzi');
                this.curcy='';
                for(let i=0;i<input.length;i++){
                    if(input[i].value==''){
                        this.curcy+='*'
                    }else{
                        this.curcy+=input[i].value
                    }
                }
                this.getCy(this.curcy)                
            },
            //获取参数进行查询
            getCy(key){                
                let word1=key.substring(0,1);
                let word2=key.substring(1,2);
                let word3=key.substring(2,3);
                let word4=key.substring(3,4);
                let box1=[word1,word2,word3,word4]                
                let box=['w1','w2','w3','w4'];
                let str=''
                let input=document.getElementsByClassName('inputzi');

                for(let i=0;i<box.length;i++){
                    if(box1[i]!='*'){
                        str+=box[i]+'='+box1[i]+'&';
                        input[i].value=box1[i];
                    }
                }
                this.curcy=key;
                let url=this.$store.getters.geturl;
                let that=this;               
                $.ajax({
                    url:url+"/xuan?limit=20&"+str,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.resbox=res.data.data;                        

                    }
                })
            },
            //打开内容页前先对vuex里面的cybox赋值
            opencontent(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局  
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>