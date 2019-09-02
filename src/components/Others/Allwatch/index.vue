<template>
    <div class="msg_bar">
        <dl>
            <dt>大家正看的成语故事</dt>
            <dd>  
                <ul>                
                    <li v-for="(item,index) in list" :key="index" style="cursor:pointer" @click="open('/story/content',item)">
                        <i class="dot"></i><a  :title="item.title">{{item.title}}</a>
                    </li>                    
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
    import {$open} from "@/util/js/common"
    export default {
        name:'Allwatch',
        data(){
            return{
                list:[],//成语故事
                data$:{},
            }
        },
        mounted(){
            this.getdata()
        },
        methods:{
            eventup(item){
                this.data$=item;
                this.$emit('ondatachange',this.data$)
            },
            getdata(){
                let url=this.$store.getters.geturl;
                url+='/getgushilike?file=jgid&page=1&limit=12&value=1021'
                let that=this                           
                $.ajax({
                    url,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.list=res.data.data           
                    }
                });
            },
            //跳转至内容页后需要存放数据到vuex
            open(path,item){
                console.log(item)                
                if(this.$route.path!=path){
                    $open(path,this.$router);
                    this.$store.dispatch('setcybox',item);//将当前点击的成语相关信息存放进全局
                }else{
                    // this.$parent.cybox=item;
                    // // this.$parent.reload()
                    // console.log(this.$parent)
                    this.eventup(item);
                }
                  
            },
        }

    }
</script>

<style lang="scss" scoped>

</style>