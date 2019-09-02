<template>
    <div class="msg_bar">
        <dl>
            <dt>在线成语词典接龙查询</dt>
            <dd>
                <ul>                    
                    <li v-for="(item,index) in box" :key="index" @click="open(item)" :title="item">
                        <i class="dot"></i>
                        <a style="cursor:pointer">{{item}}</a>
                    </li>                   				
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
    import {$open} from '@/util/js/common'
    export default {
        name:'Afterdragon',
        data(){
            return{
                box:['碍口识羞','爱日惜力','碍手碍脚','爱如己出','爱礼存羊','爱别离苦','爱毛反裘','爱博而情不专','爱民如子','爱不忍释','爱屋及乌','爱莫能助'],
                data$:'',               
            }
        },
        methods:{
            open(key){
                if(this.$route.path!='/dragon/after'){                    
                    this.$store.dispatch('setdragon',key)
                    this.$router.push({path:'/dragon/after'})
                }else{                    
                    this.data$=key;
                    this.$emit('ondatachange',this.data$)
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>