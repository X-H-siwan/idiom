<template>
    <div>
        <div class="partL730">
            <div class="boxHui1">
                <div class="mtitle"><h2><a class="more">总共有 <b>{{total}}</b> 对成语对联，点击链接查看成语对对子解释</a>成语对对子大全【第({{curpage}})页】</h2></div>
                <ul class="li160">                        
                    <li v-for="(item,index) in list" :key="index">
                        <a :title="item.title" @click="open('/parallel/content',item)" style="cursor:pointer">{{item.title}} － {{item.title1}}</a>
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
            <Parallelbox/>
            <Alltype/>
            <Allwatch/>
        </div>
    </div>
</template>

<script>
    import Parallelbox from "@/components/Others/Parallelbox"
    import Allwatch from "@/components/Others/Allwatch"
    import Alltype from "@/components/Others/Alltype"
    
    import {$open} from '@/util/js/common'
    export default {
        name:'Parallellist',
        components:{
            Parallelbox,
            Allwatch,
            Alltype
        },
        data(){
            return{
                list:[],//存放对子列表
                curpage:1,//当前页
                total:'',//总数
                totalpage:'',//总页码
            }
        },
        mounted(){
            this.getdata()
        },
        methods:{
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item)
            },
            getdata(){
                let url=this.$store.getters.geturl;                
                url+="/duiduizi?limit=100&page="+this.curpage;
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

<style lang="scss" scoped>

</style>