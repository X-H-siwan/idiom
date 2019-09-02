<template>
    <div class="boxHui1 sortA clearfix">
        <a v-for="(item,index) in list" style="cursor:pointer" @click="opentype('/idiom_whole/wholetype',item,index)" :key="index">{{item}}</a> 
    </div>
</template>

<script>
    import { $open } from '@/util/js/common.js'
    export default {
        name:'Alltype',
        data(){
            return{
                list:[],
            }
        },
        mounted(){
            this.list=this.$store.getters.gettype;            
        },
        methods:{
            opentype(path,key,key2){
                if(this.$parent.isRouterAlive){
                    this.$parent.reload()
                }                
                this.$router.push({
                    path,
                    query:{                        
                        arg2:key2
                    }
                });
                this.$store.dispatch('setcaodaistr',key)
            }, 
        }
    }
</script>

<style lang="scss" scoped>

</style>