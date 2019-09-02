<template>
    <div>
        <div class="partL730">
            <div class="boxHui content">
                <h2 id="cattitle">成语谜语大全及答案</h2>
                <div class="cbody">
                    <h3>成语谜语答案猜测思路</h3>                
                    <router-link tag="p" to="/riddle/list" align="center" style="cursor:pointer">查看全部成语谜语</router-link>
                    <p>
                        <b>一、猜谜要“别解”</b>
                        <br>“别解”一词，大家在前面已经接触到了，比如画谜中的“立体几何”一例，“不可捉摸”一例，算式谜中的“千方百计”一例等等。在解这些谜的时候，都运用了“别解”。</p>
                    <p align="center">
                        <img src="https://www.chengyu2.com/statics/images/miyu.jpg" alt="成语谜语大全及答案_成语谜语及谜底" width="600" height="603"></p>
                    <p>大家都知道，中国汉字有一字多义，一字多音的特点。所谓“别解”就是利用汉字的这个特点，对谜面或谜底中的某些字或词不作原意解释，也就是说不按通常的习惯去理解，或是引申出歧义，或是词组内部重新组合（顿读）形成新义，或是不读原来的音（别读）。这样，通过主观的思维，望文生义地寻找出另外一种新的含义，用这种新的解释使底面很好地扣合。</p>
                    <h3>成语谜语及谜底辩解说明</h3>
                    <p>
                        <b>二、了解谜语的制法和谜体</b>
                        <br>当我们看到一条谜语的时候，要想法儿分析出，它是用什么方法编制成的。也就是谜面是通过什么途径，来表现谜底的。常用的制谜方法有会意法，增损法，离合法，象形法，谐声法等等。用这些方法制成的谜，分别叫做会意体，增损离合体，象形象声体等。如：贴肚皮膏（打一成语）--置之度外</p>
                    <p>
                        <b>三、要有广博的知识和丰富的想象力</b>
                        <br>谜语的内容太丰富，太广泛了，天文，地理，生物，历史，政治，文化，艺术，体育，简直是无所不包，无所不有。所以，要能猜好谜语，必须要有广泛渊博的知识，有了丰富的生活积累，才能加以联想，推理，准确猜中。如：新兵打胜仗--首战告捷</p></div>
            </div>
        </div>
        <div class="partR250">
            <Allwatch/> 
            <Riddlebox/>  
        </div>
    </div>
</template>

<script>
    import Riddlebox from "@/components/Others/Riddlebox"
    import Allwatch from "@/components/Others/Allwatch"
    export default {
        name:'Riddleface',
        components:{
            Allwatch,
            Riddlebox
        }
    }
</script>

<style lang="scss" scoped>

</style>