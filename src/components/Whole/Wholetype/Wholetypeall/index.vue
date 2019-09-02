<template>
<div>
    <!-- 位置 -->
        <div class="website">
            <div class="webGuide">位置：
                <a href="/" title="成语大全 四字成语">成语大全</a>&gt;
                <a :title="curtype">{{curtype}}</a>&gt; 所有{{title}}信息</div>
            <div class="favorite"></div>
        </div>
        <!-- 位置 -->
        <div class="partL730">
        <div class="link_group">
            <dl>
                <dt>{{curtype}}：</dt>
                <dd  v-for="(item,index) in typeall" :key="index" @click="getcur(item,index)" style="cursor:pointer">
                    <a :title="item.title" :class="item.pinyin==pinyin ? 'current':''">{{item.title}}</a>
                </dd>                        
            </dl>
        </div>
        <div class="boxHui1">
            <div class="mtitle">
                <h2><a class="more">找到{{title}}共 <b>{{total}}</b> 个，当前第（{{curpage}}）页展示</a>{{title}}大全</h2>
            </div>
            <ul class="ulLi120 fsc16">
                <li v-for="(it,i) in cybox[0]" :key="i">
                <a @click="open('/idiom_whole/idiomcontent',it)" style="cursor:pointer">{{it.title}}</a>
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
</div>
    
</template>

<script>
    import {$open} from '@/util/js/common'
    export default {
        name:'Wholetypeall',
        data(){
            return{
                typeall:[],//所有类型
                curtype:'',
                cyindex:'',//当前的细分类，样式为红色，从最开始从from路由获取，同时是id，根据id获取数据
                pinyin:'',//当前细分类的拼音
                title:'',//当前细分类的title
                curindex:0,
                cybox:[],//存放请求过来的数据
                total:0,//获取数据数量   
                totalpage:0,
                curpage:1,//当前页面            
            }
        },
        mounted(){
            this.curindex=this.$route.query.b;              
            this.typeall=this.$store.getters.gettypebox[this.curindex];
            this.curtype=this.$store.getters.getcaodaistr;             
            this.cyindex=this.$route.query.a;
            this.title=this.typeall[this.$route.query.c].title;
            this.pinyin=this.typeall[this.$route.query.c].pinyin
            this.getData(this.cyindex);
        
        },
        methods:{            
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局           
            },
            //all页面点击当前的细分类，重新请求数据，改变当前curmtype
            getcur(item,index){
                this.pinyin=item.pinyin;
                this.title=this.typeall[index].title;
                this.cyindex=item.id;
                this.curpage=1;
                this.getData();
            },
            //根据当前关键字获取数据
            getData(){               
                let url=this.$store.getters.geturl;
                let that=this;                
                $.ajax({
                    url:url+'/jg?page='+that.curpage+'&limit=50&value='+that.cyindex+'&file=jgid',
                    type:'get', 
                    dataType: 'json', 
                    crossDomain: true,
                    success:function(res){                        
                        that.cybox.length=0,//每次赋值前需要将容器清空
                        that.cybox.push(res.data.data.data);                        
                        that.total=res.data.data.total;//获取总数
                        that.totalpage=Math.ceil(res.data.data.total/105);//计算总页数  
                                              
                    },
                    error:function(res){
                        console.log(res)
                    }
                })                
            },
            //上一页
            prepage(){
                if(this.curpage==1){
                    return
                }else{
                    this.curpage-=1;
                    this.getData()
                }
            },
            //下一页
            nextpage(){
                if(this.curpage==this.total){
                    return
                }
                this.curpage +=1;
                this.getData(); 
            },
            //首页
            page(key){
                if(this.curpage==1 && key ==1){
                    return
                }
                this.curpage=key;
                this.getData()
            },

        }

    }    
</script>

<style lang="scss" scoped>

</style>