<template>
    <div>
        <div class="partL730">
            <div class="boxHui content">
                <h2 id="cattitle">{{cybox.title}}的对联_{{cybox.title1}}对对子</h2>
                <div class="cbody">
                    <p align="center">
                        <strong class="red">{{cybox.title}}　－　{{cybox.title1}}</strong></p>
                    <p>成语对对子《{{cybox.title}}》是《{{cybox.title1}}》；成语对联《{{cybox.title1}}》的上联是《{{cybox.title}}》；
                        《{{cybox.title}}》的对联下联是《{{cybox.title1}}》；《{{cybox.title1}}》对对子对的是《{{cybox.title}}》；</p>
                    <p>
                        <strong>对对子
                            <a @click="open('/idiom_whole/idiomcontent',cybox1)" style="cursor:pointer">{{cybox.title}}的意思</a></strong>
                        <br>读音：{{cybox1.fayin}}
                        <br>出处：{{cybox1.chuchu}}
                        <br>解释：{{cybox1.shiyi}}
                        <br>近义词：
                        {{cybox1.jinyici|cut}}
                        <br>反义词：
                        {{cybox1.fanyici|cut}}
                        <br>
                        <a @click="open('/idiom_whole/idiomcontent',cybox1)" style="cursor:pointer;color:blue">查看详细解释</a>、
                        <a @click="open2(cybox.title)" :title="cybox.title" style="cursor:pointer;color:blue">{{cybox.title}}成语接龙</a></p>
                    <p>
                        <strong>对联
                            <a @click="open('/idiom_whole/idiomcontent',cybox2)" style="cursor:pointer">{{cybox2.title1}}的意思</a></strong>
                        <br>读音：{{cybox2.fayin}}
                        <br>出处：{{cybox2.chuchu}}
                        <br>解释：{{cybox2.shiyi}}
                        <br>近义词：
                        {{cybox2.jinyici|cut}}
                        <br>反义词：
                        {{cybox2.fanyici|cut}}
                        <br>
                        <a @click="open('/idiom_whole/idiomcontent',cybox2)" style="cursor:pointer;color:blue">查看详细解释</a>、
                        <a @click="open2(cybox.title1)" :title="cybox.title1" style="cursor:pointer;color:blue">{{cybox.title1}}成语接龙</a>
                    </p>
                </div>
            </div>
        </div>
        <!-- 右边 -->
        <div class="partR250">
            <Parallelbox/>
            <Alltype/>
            
        </div>
    </div>
</template>

<script>
    import Parallelbox from "@/components/Others/Parallelbox"
    import Alltype from "@/components/Others/Alltype"
    import {$open} from "@/util/js/common"
    export default {
        name:'Parallelcontent',
        components:{
            Parallelbox,
            Alltype,            
        },
        data(){
            return{
                cybox:[],//存放数据
                cyid1:'',
                cyid2:'',
                cybox1:{},//存放成语一的解释
                cybox2:{},//存放成语二的解释
                box:[{},{}],
            }
        },
        mounted(){
            this.cybox=this.$store.getters.getcybox;
            console.log(this.cybox);
            this.getdata()
        },
        methods:{
            getdata(){
                this.cyid1=this.cybox.cyid;
                this.cyid2=this.cybox.cyid1;
                this.request(this.cyid1,1);
                this.request(this.cyid2,2);
            },
            //请求数据函数
            request(id,key){
                let url=this.$store.getters.geturl;                
                url+="/getchengyu/?file=id&value="+id;
                let that=this                           
                $.ajax({
                    url,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        if(key==1){
                            that.cybox1=res.data[0]
                        }else{
                            that.cybox2=res.data[0]
                        }                  
                    }
                });
                console.log(this.cybox1)
            },
            open(path,item){
                $open(path,this.$router);
                this.$store.dispatch('setcybox',item)
            },
            open2(key){
                let path = '/dragon/after';
                this.$store.dispatch('setdragon',key)
                this.$router.push({path})
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>