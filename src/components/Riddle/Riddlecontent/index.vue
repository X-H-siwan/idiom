<template>
    <div>
        <div class="partL730">
            <div class="boxHui" id="caicy_1">
                <div class="content">
                    <h2>{{cybox.title}}的谜底？</h2>
                    <div class="cbody">
                        <p class="indent0">谜题：{{cybox.title}}
                            <br>谜面：猜一个四字成语</p>
                    </div>
                </div>
                <div class="caicy_div">
                    <div style="position:relative;min-height:310px;">
                        <div class="caicy_status" id="caicy_status"></div>
                        <div class="caicy_input_div clearfix w4">
                            <span class="caicy_input" @click="backword(1)" v-text="word1"></span>
                            <span class="caicy_input" @click="backword(2)" v-text="word2"></span>
                            <span class="caicy_input" @click="backword(3)" v-text="word3"></span>
                            <span class="caicy_input" @click="backword(4)" v-text="word4"></span>
                        </div>
                        <input type="hidden" id="the_answer" value="归根结蒂">
                        <div id="caicy_select_div" v-show='!answer'>
                            <div class="caicy_act_div clearfix" id="caicy_act_div">
                                <span class="caicy_act_btn caicy_act_hint" @click="haveword">字面提示</span>
                                <span class="caicy_act_btn caicy_act_hint" @click="havehint">意境提示</span>
                                <span class="caicy_act_btn caicy_act_daan" id="caicy_daan" data-count="0" @click="checkanswer">查看答案</span>
                                <span class="caicy_act_btn caicy_act_change" id="caicy_reset" data-count="0" @click="guessagain">重新猜过</span>
                                <a class="caicy_act_btn caicy_act_change" @click="changeone">换过一题</a></div>
                            <div class="caicy_select_div clearfix">
                                <span class="caicy_select" @click="pickup" v-for="(font,index) in fonts" 
                                :style="(index+1)%6==0 ? 'margin-right:0':''"
                                :key="index">{{font}}</span>
                            </div>
                            <div class="tishi" id="tishi" v-show="istishi">
                                <b class="red">{{cybox.title}}打一成语提示：</b>花生是长在土里的，所以它的花一落下来，而是在土里结果。</div></div>
                        <div class="caicy_right_div" id="caicy_right_div" v-show='answer'>
                            <h2>{{cybox.title}}的谜底:{{cybox.midi}}</h2>
                            <div class="caicy_right_item clearfix">
                                <div class="caicy_right_item_label">成语发音：</div>
                                <div class="caicy_right_item_value">{{detail.fayin}}</div></div>
                            <div class="caicy_right_item clearfix">
                                <div class="caicy_right_item_label">成语解释：</div>
                                <div class="caicy_right_item_value">{{detail.shiyi}}</div></div>
                            <div class="caicy_right_item clearfix">
                                <div class="caicy_right_item_label">成语造句：</div>
                                <div class="caicy_right_item_value">{{detail.shili}}</div></div>
                            <div class="caicy_right_item clearfix">
                                <div class="caicy_right_item_label">相关查询：</div>
                                <div class="caicy_right_item_value">
                                    <a @click="open('/idiom_whole/idiomcontent')" style="cursor:pointer">{{cybox.midi}}的意思</a>、
                                    <a @click="open('/idiom_dragon/havedragon')" style="cursor:pointer">{{cybox.midi}}成语接龙</a></div>
                            </div>                        
                            <div style="text-align: center;margin:20px 0;">
                                <a class="caicy_right_act_btn" @click="preone" rel="nofollow" style="cursor:pointer">上一题</a>
                                <a class="caicy_right_act_btn" @click="open('/idiom_whole/idiomcontent')" style="cursor:pointer">更多详细解释</a>
                                <a class="caicy_right_act_btn" @click="changeone" style="cursor:pointer">下一题</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="partR250">            
            <Riddlebox/>  
            <Allwatch/> 
        </div>
    </div>
</template>

<script>
    import Riddlebox from "@/components/Others/Riddlebox"
    import Allwatch from "@/components/Others/Allwatch"
    import {$open} from "@/util/js/common"
    export default {
        name:'Riddlecontent',
        components:{
            Allwatch,
            Riddlebox
        },
        data(){
            return{
                word1:'',
                word2:'',
                word3:'',
                word4:'',
                answer:false,//是否展示答案
                getanswer:'',//存下答案准备对比
                allowguess:true,//允许清空填写               
                istishi:false,//点击显示提示
                wordbox:[],//选择的4个放进盒子备用
                cybox:[],//存放上级传过来的数据
                fonts:[],//存放汉字
                detail:{},//存放详细
                curindex:1,//当前谜语的id
            }
        },
        mounted(){
            this.cybox=this.$store.getters.getcybox;            
            this.cutword();
            this.getanswer=this.cybox.midi;
            this.curindex=this.cybox.d;
            this.getdetail()
        },
        methods:{
            //上一题
            preone(){
                if(this.curindex==1){
                    alert('没有上一题了哦');
                    return 
                }else{
                    this.curindex-=1;
                    this.answer=false;
                    this.istishi=false; 
                    this.guessagain(); 
                    let url=this.$store.getters.geturl;
                    url+="/mi?limit=1&page="+this.curindex;
                    let that=this                           
                    $.ajax({
                        url,
                        type:'get',
                        crossDomain: true,
                        success:function(res){                          
                            that.cybox=res.data.data[0];
                            that.getanswer=that.cybox.midi;
                            that.getdetail();
                            that.cutword()
                        }
                    });
                }
            },
            //换一题
            changeone(){
                this.answer=false;
                this.istishi=false; 
                this.guessagain();               
                this.curindex +=1;
                let url=this.$store.getters.geturl;
                url+="/mi?limit=1&page="+this.curindex;
                let that=this                           
                $.ajax({
                    url,
                    type:'get',
                    crossDomain: true,
                    success:function(res){                      
                        that.cybox=res.data.data[0];
                        that.getanswer=that.cybox.midi;
                        that.getdetail();
                        that.cutword()
                    }
                });
            },
            getdetail(){
                let w1=this.getanswer.substring(0,1),
                    w2 = this.getanswer.substring(1,2),
                    w3 = this.getanswer.substring(2,3),
                    w4 = this.getanswer.substring(3,4);
                let url=this.$store.getters.geturl;
                url+="/xuan?w1="+w1+'&w2='+w2+'&w3='+w3+'&w4='+w4;
                this.getdata(url)
            },
            //获取信息
            getdata(url){
                let that=this                           
                $.ajax({
                    url,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.detail=res.data.data[0]
                    }
                });
            },
            //处理汉字
            cutword(){
                let words=this.cybox.fonts;
                this.fonts=words.split(',');
            },
            //点击打开内容页
            open(path,key){                            
                $open(path,this.$router);
                this.$store.dispatch('setcybox',this.detail)
            },
            //点击显示字面提示
            haveword(){
                if(this.word1==''){
                    this.word1=this.getanswer.slice(0,1);
                }else if(this.word2==''){
                    console.log(this.word2)
                    this.word2=this.getanswer.slice(1,2);
                }else{
                    let popup=document.getElementsByClassName('popup')[0];
                    let speed=387;
                    popup.style.opacity=1;
                    popup.style.display='table';
                    popup.style.left=speed + 'px';
                    setTimeout(function(){
                        popup.style.opacity=0;
                        popup.style.display='none';
                        speed -= 387;
                        popup.style.left=speed + 'px';
                    },2000)

                    return false
                }
            },
            //点击显示提示
            havehint(){
                this.istishi=true;
            },
            //点击已经选择的文字后，文字消失，文字块儿显示
            backword(number){
                if(number==1){
                    this.deal(1)
                    this.word1=''
                }else if(number==2){
                    this.deal(2)
                    this.word2=''
                }else if(number==3){
                   this.deal(3)
                   this.word3=''
                }else if(number==4){
                   this.deal(4)
                   this.word4=''
                }
            },
            //处理对象
            deal(n){                                 
                this.wordbox.forEach(item=>{
                    if(item.id==n){
                        item.v.classList.remove('selected');
                        let index=this.wordbox.indexOf(item)
                        this.wordbox.splice(index,1)
                    }
                })
            },
            //点击选字
            makesure(key,n){
                if(key.classList.contains('selected')){                    
                    return 
                }else{
                    n==1? this.word1 =key.innerText : n==2?this.word2=key.innerText:n==3?this.word3=key.innerText:n==4?this.word4=key.innerText:''
                    key.classList.add('selected');
                    this.wordbox.push({id:n,v:key});
                }
            },
            //点击选字
            pickup(e){
                if(this.word1==''){
                    this.makesure(e.currentTarget,1)                   
                }else if(this.word2==''){
                    this.makesure(e.currentTarget,2)                        
                }else if(this.word3==''){
                    this.makesure(e.currentTarget,3)                    
                }else if(this.word4==''){
                    this.makesure(e.currentTarget,4)
                }
            },
            //再猜一次
            guessagain(){                
                if(this.allowguess){
                    console.log('hehe')
                    this.wordbox.length=0
                    console.log(this.wordbox)
                    $('.caicy_select').each(function(){
                        if($(this).hasClass('selected')){
                            $(this).removeClass('selected')
                        }
                    })
                    this.word1=this.word2=this.word3=this.word4='';
                    $('#caicy_status').removeClass('status_cha');
                    $('#caicy_status').removeClass('status_gou');
                }else{
                    return false
                }                              
            },
            //判断成语的对错
            right_wrong(){
                let idiom=this.word1+this.word2+this.word3+this.word4;
                if(idiom==this.getanswer){
                    $('#caicy_status').addClass('status_gou');
                    this.answer=true;//当答案为真时，显示答案块儿，隐藏选择字块儿
                    this.allowguess=false;//当答案为真时，不允许点击重新猜过
                    let inputs=$('.caicy_input');
                    for(let i=0;i<inputs.length;i++){
                        inputs[i].classList.add('right')
                    }
                }else{
                    $('#caicy_status').addClass('status_cha');
                }
            },          
                        
            //点击显示答案
            checkanswer(){
                this.answer=true;
                this.word1=this.getanswer.slice(0,1)
                this.word2=this.getanswer.slice(1,2)
                this.word3=this.getanswer.slice(2,3)
                this.word4=this.getanswer.slice(3,4)
                let inputs=$('.caicy_input');
                for(let i=0;i<inputs.length;i++){
                    inputs[i].classList.add('right')
                }                
                $('#caicy_status').addClass('status_gou');
            }
        },
        watch:{
            word4:function(){                
                if(this.word4!=''){                    
                    this.right_wrong()
                }

            }
        }

    }
</script>

<style lang="scss" scoped>

</style>