<template>
    <div>
        <h3 class="maintitle"><em>带有*字的成语查询</em></h3>
        <div class="cn_fl cn_fl_5">
            <a v-for="(item,index) in box" :key="index" @click="open(item)" :title="item" style="cursor:pointer">{{item}}</a>            
        </div>
    </div>
</template>

<script>
    import {$open} from '@/util/js/common'
    export default {
        name:'Wordsearch',
        data(){
            return{
                box:['妨','媳','札','旖','苇','慝','庚','磔','蜮','馘','蜃','魃','皋','瑾','岱','侪','廋','藐','惓','赈']
            }
        },
        methods:{
            open(key){
                let path = '/dragon/result'
                this.$router.push({
                    path,
                    query:{
                        arg1:key+'***'
                    }
                })
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>