
<template>
    <div class="msg_bar">
        <dl>
            <dt>在线成语接龙查询</dt>
            <dd>  
                <ul>                
                    <li><i class="dot"></i><a @click="havedragon('天天向上')" title="哀哀父母成语接龙">哀哀父母</a></li>
                    <li><i class="dot"></i><a href="/jielong/ailizhengshi.html" title="哀梨蒸食成语接龙">哀梨蒸食</a></li>
                    <li><i class="dot"></i><a href="/jielong/aijiancabang.html" title="挨肩擦膀成语接龙">挨肩擦膀</a></li>
                    <li><i class="dot"></i><a href="/jielong/amdyxs.html" title="哀莫大于心死成语接龙">哀莫大于心死</a></li>
                    <li><i class="dot"></i><a href="/jielong/aiganwanyan.html" title="哀感顽艳成语接龙">哀感顽艳</a></li>
                    <li><i class="dot"></i><a href="/jielong/aiaiyujue.html" title="哀哀欲绝成语接龙">哀哀欲绝</a></li>
                    <li><i class="dot"></i><a href="/jielong/feiyisuosi.html" title="匪夷所思成语接龙">匪夷所思</a></li>
                    <li><i class="dot"></i><a href="/jielong/aibingbisheng.html" title="哀兵必胜成语接龙">哀兵必胜</a></li>
                    <li><i class="dot"></i><a href="/jielong/aijiandabei.html" title="挨肩搭背成语接龙">挨肩搭背</a></li>
                    <li><i class="dot"></i><a href="/jielong/aierbushang.html" title="哀而不伤成语接龙">哀而不伤</a></li>
                    <li><i class="dot"></i><a href="/jielong/aitianjiaodi.html" title="哀天叫地成语接龙">哀天叫地</a></li>
                    <li><i class="dot"></i><a href="/jielong/aigantiandi.html" title="哀感天地成语接龙">哀感天地</a></li>
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name:'Dragon_search_online',
        data(){
            return{

            }
        },
        methods:{
            havedragon(key){                
                this.$router.push({
                    path:'/dragon/after',
                    query:{
                        arg1:key
                    }
                })
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>