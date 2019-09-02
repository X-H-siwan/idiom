<template>
    <div class="msg_bar">
        <dl>
            <dt>四字成语对联大全</dt>
            <dd>
                <ul>
                    <li v-for="(item,index) in list" :key="index"  @click="open('/parallel/content',item)">
                        <a style="cursor:pointer">{{item.title}}</a>
                    </li>                   
                </ul>

            </dd>
        </dl>
    </div>
</template>

<script>
    import {$open} from '@/util/js/common'
    export default {
        name:'Parallelbox',
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
                    url:url+="/duiduizi?limit=10&page=1",
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.list=res.data.data;                        
                    }
                });
            },
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item)
            },
        }

    }
</script>

<style lang="scss" scoped>

</style>