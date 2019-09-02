<template>
    <div>
        <div class="partL730">
            <div class="boxHui content">
                <h2 id="cattitle">看图猜成语游戏</h2>
                <div class="cbody">
                    <p>看图猜成语游戏共收集200多个成语图片及答案； <a  @click="open('/guess/content')" style="cursor:pointer">&gt;&gt; 点击进入看图猜成语游戏</a></p>
                    <h3>看图猜成语的规则</h3>
                    <p>每个关卡各是一副图，玩家需要从图中内容猜出一个成语即可过关，游戏有点难度，看看你能过多少关，可别抓破头皮。 看图猜成语这款游戏里迎来了新的改版，目前分为500多题。根据图片意思猜出成语，每题有两次提示的机会，点击下边汉字组成正确答案！ </p>
                    <h3>看图猜成语答案及图片示例</h3>
                    <p align="center"><img src="https://www.chengyu2.com/statics/images/ktccy2.png" alt="看图猜成语答案及图片" width="407" height="420"></p>
                    <p><strong>上图看图猜成语答案图解答案顺序依次对应如下：</strong>1.狗急跳墙； 2.草木皆兵； 3.画蛇添足；4.朝三暮四；5.开门见山； 6.鸡同鸭讲； 7.衣食父母； 8.鱼目混珠； 9.九牛二虎</p>
                    <p align="center"><img src="https://www.chengyu2.com/statics/images/ktccy1.png" alt="看图猜成语答案图解" width="272" height="274"></p>
                    <p><strong>上图看图猜成语答案图解答案顺序依次对应如下：</strong>1.走马观花； 2.心心相惜； 3.杯水车薪； 4.哭笑不得； 5.美中不足； 6.HappyNewYear（新年快乐）； </p>
                    <p align="center"><a @click="open('/guess/content')" style="cursor:pointer">进入看图猜成语游戏</a></p>
                </div>
            </div>
        </div>
        <div class="partR250">
            <Carousal/> 
            <Allwatch/>  
        </div>
    </div>    
</template>

<script>
    import Carousal from "@/components/Others/Carousal"
    import Allwatch from "@/components/Others/Allwatch"
    import {$open} from '@/util/js/common';
    export default {
        name:'Guessface',
        components:{
            Carousal,
            Allwatch
        },
        methods:{
            open(path){
                $open(path,this.$router)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>