<template>
    <div>        
        <div class="clearfix" v-for="(py,i) in pinyinlist" :key='i'>
            <div class="mtitle">
                <h3>首字拼音是 <b  class="red">{{py}}</b> 的成语 <a class="more">查看全部 &gt;&gt;</a></h3>
            </div>
            <ul class="ulLi120 fsc16">                
                <li v-for="(item,index) in cylist[i]" :key="index" @click="open('/idiom_whole/idiomcontent',item)" style="cursor:pointer" ><a >{{item.title}}</a></li>                
            </ul>
        </div>            
    </div>
</template>

<script>
    import {$open} from "@/util/js/common"
    export default {
        name:'Wholezimuall',
        data(){
            return{
                czimu:'',//父级传来当前字母
                cylist:[],
                pinyinlist:[],
            }
        },
        mounted(){
            this.czimu=this.$store.getters.getzimu;
            this.pinyinlist=this.$store.getters.getpinyinlist;
            this.cylist=this.$store.getters.getcybox;
            console.log(this.$route.query.arg1)
                              
        },
        methods:{
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局    
            },
            change(){
                this.czimu=this.$store.getters.getzimu
            },
            
        }
    }
</script>

<style lang="scss" scoped>

</style>