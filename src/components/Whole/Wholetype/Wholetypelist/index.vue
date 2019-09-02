<template>
<div>
    <div class="website">
        <div class="webGuide">位置：
            <a href="/" title="成语大全 四字成语">成语大全</a>&gt; 所有{{curtitle}}信息</div>
        <div class="favorite"></div>
    </div>
    <div class="partL730">
        <div class="link_group">
            <dl>
                <dt>{{curtitle}}：</dt>
                <dd v-for="(item,index) in typeall" :key="index">
                    <a @click="open('/idiom_whole/wholetype/all',item.id,curindex)" style="cursor:pointer" :title="item.title">{{item.title}}</a>
                </dd>                        
            </dl>
        </div>
        <div>
            <h3 class="maintitle"><em>{{curtitle}}列表</em></h3>
            <!-- 外层循环 -->
            <div class="zw_lcont">
                <div class="zw_box" v-for="(list,i) in typeall" :key="i">
                    <h4 @click="open('/idiom_whole/wholetype/all',list.id,curindex,i)" style="cursor:pointer">
                        <strong>{{curtitle}}之<a :title="list.title">{{list.title}}</a></strong>
                        <a :title="list.title" class="more">全部&gt;&gt;</a>
                    </h4>
                    <ul> 
                        <li v-for="(data,i2) in cybox[i]" :key="i2">
                            <a @click="opencontent('/idiom_whole/idiomcontent',data)" style="cursor:pointer" :title="data.title">{{data.title}}</a>
                        </li>                           
                    </ul>
                </div>
            </div>
        </div> 
        <!-- 展示列表 -->
    </div>
</div>
    
</template>

<script>
    import {$open} from '@/util/js/common'    
import { Promise } from 'q';
    export default {
        name:'Wholetypelist',
        data(){
            return{
                typeall:[],//所有类型
                curindex:0,//当前index
                curtitle:'',//当前title
                cybox:[],
            }
        },
        mounted(){
            this.curindex=this.$route.query.arg2;
            this.curtitle=this.$store.getters.getcaodaistr;
            console.log(this.curtitle)
            this.typeall=this.$store.getters.gettypebox[this.curindex].slice(0,9);
            this.togetcy()            
        },
        methods:{            
            open(path,key2,key3,key4){     
                console.log(key2)           
                this.$router.push({
                    path,
                    query:{                        
                        a:key2,
                        b:key3,
                        c:key4
                    }
                })            
            },
            //打开内容页
            opencontent(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局
            },
            //根据sort_id获取成语列表
            getcy(key){                
                let url=this.$store.getters.geturl;
                let that=this;
                $.ajax({
                    url:url+'/jg?page=1&limit=20&file=jgid&value='+key,
                    type:'get', 
                    dataType: 'json', 
                    crossDomain: true,
                    success:function(res){
                       that.cybox.push(res.data.data.data)
                    }
                })
            },
            //根据id不同创建多个ajax获取数据
            togetcy(){
                for(let i=0;i<this.typeall.length;i++){
                    this.getcy(this.typeall[i].id)
                }
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>