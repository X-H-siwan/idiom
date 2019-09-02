<template>
    <!-- 左边 -->
    <div>
        <div class="partL730">
            <div class="boxHui content">
                <h2 id="cattitle">成语对对子</h2>
                <div class="cbody">
                    <h3>成语对对子的规则</h3>
                    <p align="center"><a @click="open('/parallel/list')" title="成语对对子" style="cursor:pointer;color:red">查看全部成语对对子</a></p>
                    <p>成语是人们长期以来习用的、简洁精辟的定型词组或短句，大多由四个字组成。内容博大精深，语言摇曳多姿，细细品味，你会发现许多成语可以两两对映，相映成趣。成语对联一般分为以下几种，可以是意思相近的成语组成；可以是意思相反的成语组成；可以是承上启下的关系成语组成，也可以是因果关系组成；但不管哪种成语结构要求是一至，对仗工整的一组成语！</p>
                    <p align="center"><img src="https://www.chengyu2.com/statics/images/duiduizi.jpg" alt="成语对对子大全_成语对联" width="500" height="300"></p>
                    <h3>成语对联举例说明</h3>
                    <p>如“锦上添花”是指在锦上面再绣上花，比喻好上加好，美上加美。斟酌“锦上添花”的语言结构及意义，把它作为上联，我们可以寻找出另一句成语“雪中送炭”作为下联，下雪的时候送上一筐及时的炭，比喻在别人急需时给以帮助。斟酌“良药苦口”的语言结构及意义，把它作为上联，我们可将“忠言逆耳”作为下联应对。一个是比喻某些真心的劝戒或尖锐的批语听起来可能暂时不舒服，但是很有益处；一个是说忠实的劝告听起来不好受。诸如此类的成语，尚有不少。下面就列举了一些，有解释的成语还做了链接。这个可以拿来考考别人，也可以自己看看，在加深了对成语内涵认识的同时，也锻炼了自己的对联能力，你一定会感到饶有兴味。</p>
                    <p> 成语对对子填空举例：（注意对仗要工整，意思要相对）<br>粗茶淡饭（山珍海味） 流芳百世（遗臭万年）,
                    井然有序（杂乱无章） 指鹿为马（点石成金）<br> 固若金汤（危如累卵） 精雕细刻（粗制滥造）,
                    雪中送炭（锦上添花） 伶牙利齿（笨嘴拙舌）</p>                        
                </div>
            </div>
        </div>
        <div class="partR250">
            <Parallelbox/>
            <Allwatch/>
            
            
        </div>
    </div>
</template>

<script>    
    import {$open} from '@/util/js/common'
    import Parallelbox from "@/components/Others/Parallelbox"
    import Allwatch from "@/components/Others/Allwatch"
    export default {
        name:'Parallelface',
        components:{
            Parallelbox,
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