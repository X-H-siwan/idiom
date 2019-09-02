<template>
    <div class="clearfix">
        <div class="mtitle">
            <h3>首字拼音是 <b class="red">{{singlepinyin}}</b> 的成语</h3>
        </div>
        <ul class="ulLi120 fsc16">
            <li v-for="(item,index) in rightnow" :key="index" @click="open('/idiom_whole/idiomcontent',item)" style="cursor:pointer"><a>{{item.title}}</a></li>                   
        </ul>
    </div>
</template>

<script>
    import {$open} from '@/util/js/common'
    export default {
        name:'Wholezimusigle',
        data(){
            return{
                singlepinyin:'',//当前拼音
                pinyinlist:[],
                cylist:[],
                rightnow:[],
                currentindex:0,//当前所在位置下标
            }
        },
        mounted(){
            this.singlepinyin=this.$route.query.arg1;
            this.pinyinlist=this.$store.getters.getpinyinlist;
            this.cylist=this.$store.getters.getcybox; 
            this.currentindex=this.pinyinlist.indexOf(this.singlepinyin)
            this.rightnow=this.cylist[this.currentindex]
        },
        methods:{
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局    
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>