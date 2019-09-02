<template>
    <div class="guess_entrace_left">
        <div>
            <h2><em></em>看图猜四字成语</h2>
        </div>
        <div id="GuessEntrance_1" style="text-align:center">
            <div class="slides_container" style="overflow: hidden; position: relative; display: block;">
                <div class="slides_control" id="slides_control" style="position: relative; width: 720px; height: 12px; left: -240px;">
                    <a @click="open('/guess/content')" style="cursor:pointer;position: absolute; top: 0px; left: 240px; z-index: 0; display: none;">
                        <img src="/static/images/c6.png" width="240" height="200" alt="看图猜成语(1)">
                    </a>
                    <a @click="open('/guess/content')" style="cursor:pointer;position: absolute; top: 0px; left: 240px; z-index: 0; display: none;">
                        <img src="/static/images/c7.png" width="240" height="200" alt="看图猜成语(2)">
                    </a>
                    <a @click="open('/guess/content')" style="cursor:pointer;position: absolute; top: 0px; left: 240px; z-index: 5; display: block;">
                        <img src="/static/images/c11.png" width="240" height="200" alt="看图猜成语(6)">
                    </a>
                    <a @click="open('/guess/content')" style="cursor:pointer;position: absolute; top: 0px; left: 240px; z-index: 0; display: none;">
                        <img src="/static/images/c30.png" width="240" height="200" alt="看图猜成语(19)">
                    </a>
                    <a @click="open('/guess/content')" style="cursor:pointer;position: absolute; top: 0px; left: 240px; z-index: 0; display: none;">
                        <img src="/static/images/c22.png" width="240" height="200" alt="看图猜成语(21)">
                    </a>
                </div>
            </div>
            <ul class="slides_pagination" id="slides_pagination">
                <li class="current"><a href="#0">1</a></li>
                <li class=""><a href="#1">2</a></li>
                <li class=""><a href="#2">3</a></li>
                <li><a href="#3">4</a></li>
                <li><a href="#4">5</a></li>
            </ul>
        </div>
        <div><a class="gel_guess_btn" style="cursor:pointer" @click="open('/guess/content')" target="_blank">开始猜</a></div>
    </div>
</template>

<script>
    import {$open} from '@/util/js/common';
    export default {
        name:'Carousal',        
        data(){
            return{
                leave:false,
            }
        },
        mounted(){
            this.run()
        },
        methods:{
            run(){               
                let as=document.getElementById('slides_control').children;
                let lis=document.getElementById('slides_pagination').children;
                let i=0
                setInterval(() => {                    
                    for(let j=0;j<as.length;j++){
                        as[j].style.display="none";
                        as[j].style.zIndex=0;
                        lis[j].className=''
                    }
                    i++;
                    if(i==5){
                        i=0
                    }                    
                    as[i].style.display='block';
                    as[i].style.Zindex=5;
                    lis[i].className='current'
                }, 2000);     
            },
            open(path){
                $open(path,this.$router)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>