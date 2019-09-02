<template>
    <div class="msg_bar">
        <dl>
            <dt>成语谜语大全</dt>
            <dd>
                <ul>
                    <li v-for="(item,index) in list" :key=index>
                        <i class="dot"></i>
                        <a style="cursor:pointer" @click="open('/riddle/content',item)" :title="item.title">{{item.title}}</a>
                    </li>                    
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
    import {$open} from "@/util/js/common"
    export default {
        name:'Riddlebox',
        data(){
            return{
                list:[],
            }
        },
        mounted(){
            this.getdata()
        },
        methods:{
            getdata(){                
                let url=this.$store.getters.geturl;
                let that=this                           
                $.ajax({
                    url:url+="/mi?limit=10&page=1",
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.list=res.data.data;                                                
                    }
                });
            },
            //打开内容页
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局  
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>