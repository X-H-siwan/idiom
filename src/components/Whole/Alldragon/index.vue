<template>
    <div class="main mt10">
        <div class="website">
            <div class="webGuide">位置：<a href="/" title="成语大全 四字成语">成语大全</a> &gt; {{title}}大全
        </div>
            <div class="favorite"></div>
        </div>
        <div class="partL730">
            <div class="boxHui1 zimuLink">
                <strong class="red">带出的成语大全：</strong>
                <a style="cursor:pointer" @click="handleword(1)" :class="number==1?'red':''">{{curcy.substring(0,1)}}开头的成语</a> &nbsp; 
                <a style="cursor:pointer" @click="handleword(2)" :class="number==2?'red':''">第二个字是{{curcy.substring(0,1)}}的成语</a> &nbsp; 
                <a style="cursor:pointer" @click="handleword(3)" :class="number==3?'red':''">第三个字是{{curcy.substring(0,1)}}的成语</a> &nbsp; 
                <a style="cursor:pointer" @click="handleword(4)" :class="number==4?'red':''">{{curcy.substring(0,1)}}结尾的成语</a>
            </div>
            <div class="Look">
                <h3>{{title}}大全列表</h3>
                <div class="Look_title"><span>{{title}}</span>
                    <p>首字出的成语解释</p>
                </div>
                <div class="Look_main">                    
                    <ul>
                        <li v-for="(item,index) in list" :key="index" @click="open('/idiom_whole/idiomcontent',item)">
                            <p :title="item.title" style="cursor:pointer;width:50px">
                                <span :class="number==1?'first':''" style="width: 12px;text-indent: 0">{{item.title.substring(0,1)}}</span>
                                <span :class="number==2?'first':''" style="width: 12px;text-indent: 0">{{item.title.substring(1,2)}}</span>
                                <span :class="number==3?'first':''" style="width: 12px;text-indent: 0">{{item.title.substring(2,3)}}</span>
                                <span :class="number==4?'first':''" style="width: 12px;text-indent: 0">{{item.title.substring(3,4)}}</span>                            
                            </p> 
                            &nbsp;{{item.shiyi}}
                        </li>
                    </ul>
                </div>
                <div class="pages clearfix">
                    <a @click="prepage" style="cursor:pointer">上一页</a> 
                    <a @click="page(1)" style="cursor:pointer">首页</a>                
                    <span>{{curpage}}</span>
                    <a class="bgb" @click="page(totalpage)" style="cursor:pointer">尾页(共{{totalpage}}页)</a>
                    <a @click="nextpage" style="cursor:pointer">下一页</a>
                </div>
            </div>
        </div>  

        <div class="partR250">            
            <Alltype/>           
        </div>      
    </div>
</template>

<script>
    import Alltype from "@/components/Others/Alltype"
    import {$open} from "@/util/js/common"
    export default {
        name:'Alldragon',
        components:{
            Alltype
        },
        data(){
            return{
                curcy:'',
                list:[],//存放成语
                curpage:1,//当前页面
                totalpage:0,
                number:1,
                title:'',//当前title
            }
        },
        mounted(){
            this.curcy=this.$store.getters.getdragon;            
            this.handleword(1)
        },
        methods:{
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局    
            },
            //初步处理数据再拿去请求
            handleword(n){                
                this.number=n;               
                let key='';
                let word=this.curcy.substring(0,1);
                if(n==1){
                    this.title=word+'开头的成语';
                    key='w1='+ word;
                }else if(n==2){
                    this.title='第二个字是'+word+'的成语';
                    key='w2='+ word;
                }
                else if(n==3){
                    this.title='第三个字是'+word+'的成语';
                    key='w3='+ word;
                }else if(n==4){
                    key='w4='+ word;
                    this.title=word+'结尾的成语'
                }
                this.getdata(key);
            },
            //获取数据
            getdata(key){                
                let url=this.$store.getters.geturl;
                let that=this;
                console.log(url+"/xuan?limit=50&page="+this.curpage+'&'+key)
                $.ajax({
                    url:url+"/xuan?limit=30&page="+this.curpage+'&'+key,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.list=res.data.data;
                        that.totalpage=Math.ceil(res.data.total/30);                        
                    }
                })
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

<style scoped>
.first{
    color: red;   
    
}

</style>