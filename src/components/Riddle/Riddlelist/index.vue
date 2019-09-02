<template>
    <!-- 左边内容页 -->
    <div>
        <div class="partL730">
            <div class="boxHui1">
                <div class="mtitle">
                    <h2><a class="more">总共有<b>{{total}}</b>个成语谜语，点击链接查看谜语答案</a>成语谜语大全及答案【第({{curpage}})页】</h2>
                </div>
                <ul class="li160">            
                    <li v-for="(item,index) in list" :key="index" style="cursor:pointer">
                        <a @click="open('/riddle/content',item)">{{item.title}}</a>
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
        </div>
        <div class="partR250">
            
            <Riddlebox/>  
            <Allwatch/> 
        </div>
    </div>
</template>

<script>
    import Riddlebox from "@/components/Others/Riddlebox"
    import Allwatch from "@/components/Others/Allwatch"
    import {$open} from "@/util/js/common"
    export default {
        name:'Riddlelist',
        components:{
            Allwatch,
            Riddlebox
        },
        data(){
            return{
                list:[],//当前列表页数据
                curpage:1,//当前页
                total:'',//总数
                totalpage:1,//总页码
            }
        },
        mounted(){
            this.getdata()
        },
        methods:{
            //打开内容页
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局  
            },
            //获取数据
            getdata(){                
                let url=this.$store.getters.geturl;                
                url+="/mi?limit=100&page="+this.curpage;
                let that=this                           
                $.ajax({
                    url,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.list=res.data.data;
                        that.total=res.data.total;
                        that.totalpage=Math.ceil(that.total/100)                        
                    }
                });
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
                console.log('hehe')
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
        },
    }
</script>

<style lang="scss" scoped>

</style>