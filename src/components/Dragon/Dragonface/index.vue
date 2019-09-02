<template>
    <div>
        <div class="partL730">
            <div class="boxHui content">
                <h2 id="cattitle">成语接龙游戏</h2>
                <div class="cbody">
                <div class="searchbox">
                    <div><strong>成语接龙查询:</strong>
                        <input type="text" name="zi1" size="1" value="" maxlength="1" class="inputzi">
                        <input type="text" name="zi2" size="1" maxlength="1" value="" class="inputzi">
                        <input type="text" name="zi3" size="1" maxlength="1" value="" class="inputzi">
                        <input type="text" name="zi4" maxlength="1" size="1" value="" class="inputzi"> 
                        <!-- <label title="下一个成语的字头接上一个成语的字尾">
                            <input type="radio" name="mode" value="0" checked="">顺接</label>
                        <label title="下一个成语的字尾接上一个成语的字头">
                            <input type="radio" name="mode" value="1">逆接</label>  -->
                        <button @click="open('/dragon/result')" class="btsubmit">查 询</button>
                    </div>
                </div>
                <p><strong>成语接龙查询提示：</strong>请在输入框中输入一个成语或者要开始接龙的一个字，(如输入成语：“欣欣向荣”)，点击“查询”，系统将自动生成相应游戏规则的成语接龙。
                每个框输入一个汉字，即含有该字对应位置的成语；<br>
                注意：本成语接龙查询系统答案仅供参考学习, 请勿依赖本系统参与到成语接龙游戏中去, 以免失去小游戏乐趣。<br></p>
                <p align="center"><img src="https://www.chengyu2.com/statics/images/jielong.jpg" alt="成语接龙大全_成语接龙游戏_成语接龙查询" width="439" height="280"></p>
                <h3>成语接龙游戏规则：</h3>
                <p><b>一、顺序成语接龙游戏规则：</b><br>1.第一个人随便说出一个成语，如“东张西望”； <br>
                2.接着下面接的人必须接上一个人说出成语的最后一个字开头的成语，如“望子成龙”，就要说“望”字开头的成语（可以事先说明，同音字是否可以，但不能重复之前被说过的成语）；<br> 
                3.就这样一直接下去，到谁那接不上来（中断）或重复了之前说过的成语，就得受惩罚或者算输。</p>
                <p><b>二、逆序成语接龙游戏规则：</b><br>1.第一个人随便说出一个成语，如“一心一意”； <br>
                2.接着下面接的人必须接以上一个人说出成语的第一个字结尾的成语，如“百里挑一”，就要说“一”字结尾的成语（可以事先说明，同音字是否可以，但不能重复之前被说过的成语）；<br> 
                3.就这样一直接下去，如：“杀一警百”；到谁那接不上来（中断）或重复了之前说过的成语，就得受惩罚或者算输。</p>
                <p><b>三、其它成语接龙游戏规则：</b><br>为了提高成语难度，可以定义接龙的规则，如:【双飞】：每人说出两个成语，第一个成语字头和第二个成语字尾一致，接第一个成语的第二个字;<br>
                【埋龙】：埋龙就是隐去成语最后的那个字，对方接已隐去的那个字开头的成语;<br>
                【接二连三】:三个成语，前两个双飞，第三个成语从前两年个成语中分别选字组成一个成语，但不得选双飞那个字，接前一成语的第二个字</p>
                </div>
            </div>
        </div>
        <div class="partR250">
            <Afterdragon/>
            <Wordsearch/>
        </div>
    </div>
</template>

<script>
    import Afterdragon from '@/components/Others/Afterdragon';
    import Wordsearch from '@/components/Others/Wordsearch';
    import { $open,$dragonsearch } from '@/util/js/common.js'
    export default {
        name:'Dragonface',
        components:{
            Afterdragon,
            Wordsearch
        },
        data(){
            return{
                word:'',//将要查询的成语
            }
        },
        methods:{
            //点击打开内容页
            open(path){
                let input=document.getElementsByClassName('inputzi');
                this.word='';
                for(let i=0;i<input.length;i++){
                    if(input[i].value==''){
                        this.word+='*'
                    }else{
                        this.word+=input[i].value
                    }
                }
                this.$router.push({
                    path,
                    query:{
                        arg1:this.word
                    }
                })
            },            
        },
        

    }
</script>

<style lang="scss" scoped>

</style>