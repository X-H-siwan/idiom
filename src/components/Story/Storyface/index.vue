
<template>   
    <div>
        <div class="partL730">
            <div class="boxHui1 zimuLink">
                <strong class="red">中华成语故事大全：</strong>
                <a v-for="(item,index) in stbox" :key="index" :title="item[0]" @click="tochaodai('/story/list',item[1])"  style="cursor:pointer" >{{item[0]}}故事</a>                
            </div>
            <h3 class="maintitle">
                <em>成语典故故事分类</em>
            </h3>
            <div class="zw_lcont">
                <div v-for="(Date,iii) in stbox" :key="iii" :class="(iii+1)%3==0 ? 'zw_box lastlt':'zw_box'">
                    <h4 style="cursor:pointer" @click="tochaodai('/story/list',Date[1])">
                        <strong><a  :title="Date">{{Date[0]}}典故</a></strong>
                        <a  title="" class="more">全部&gt;&gt;</a>
                    </h4>
                    <ul>
                        <li v-for="(cy,ii) in stbox[iii][2]" :key="ii" style="cursor:pointer">
                            <a :title="cy.title"  @click="open('/story/content',cy)" >{{cy.title}}</a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
        <!-- 右半部分 -->
        <div class="partR250"> 
            <div class="boxHui1"><img src="https://www.chengyu2.com/statics/images/gushi.jpg" width="250" height="182" alt="中华成语故事大全 四字成语典故故事"></div>               
            <!-- 第三部分 -->
            <Allwatch/>
        </div>
    </div>
</template>

<script>   
    import Allwatch from '@/components/Others/Allwatch';
    import {$open} from "@/util/js/common"
    export default {       
        name:'Storyface',
        components:{
            Allwatch    
        },
        data(){
            return{                           
               stbox:[],//故事盒子               
               stboxindex:0,//存放位置，用于list页面请求数据
            }
        },
        mounted(){
            this.getStory()
        },
        methods: {
            //故事页面获取数据
            getStory(){
                let url=this.$store.getters.geturl;
                let that=this;
                $.ajax({
                    url:url+"/gushi",
                    type:'get',
                    crossDomain: true,
                    success:function(res){                        
                        console.log(res);
                        Object.keys(res.ChaodaiArray).forEach((key)=>{
                            if(res.ChaodaiArray[key][2].length!=0){
                                that.stbox.push(res.ChaodaiArray[key])
                            }                                                       
                        })       
                        console.log(that.stbox)                 
                    }
                });    
            },
            //跳转至内容页后需要存放数据到vuex
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局  
            },
            tochaodai(path,key){
                this.$router.push({
                    path,
                    query:{
                        arg1:key
                    }
                });
                this.$store.dispatch('setcaodai',this.stbox);
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>