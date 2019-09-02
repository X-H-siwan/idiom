<template>
    <div>
        <h3 class="maintitle"><em>带有*字的成语接龙</em></h3>
        <div class="cn_fl cn_fl_5">            
            <a @click="open('/idiom_whole/word')" style="cursor:pointer" title="膀的成语">膀</a>
            <a href="/zi/83b9.html" title="莹的成语">莹</a>
            <a href="/zi/867b.html" title="虻的成语">虻</a>
            <a href="/zi/8114.html" title="脔的成语">脔</a>
            <a href="/zi/4f51.html" title="佑的成语">佑</a>
            <a href="/zi/955d.html" title="镝的成语">镝</a>
            <a href="/zi/54e5.html" title="哥的成语">哥</a>
            <a href="/zi/672d.html" title="札的成语">札</a>
            <a href="/zi/8019.html" title="耙的成语">耙</a>
            <a href="/zi/6ba3.html" title="殣的成语">殣</a>
            <a href="/zi/819c.html" title="膜的成语">膜</a>
            <a href="/zi/94db.html" title="铛的成语">铛</a>
            <a href="/zi/8ff3.html" title="迳的成语">迳</a>
            <a href="/zi/510b.html" title="儋的成语">儋</a>
            <a href="/zi/9f37.html" title="鼷的成语">鼷</a>
            <a href="/zi/803d.html" title="耽的成语">耽</a>
            <a href="/zi/5eea.html" title="廪的成语">廪</a>
            <a href="/zi/901b.html" title="逛的成语">逛</a>
            <a href="/zi/4fde.html" title="俞的成语">俞</a>
            <a href="/zi/6369.html" title="捩的成语">捩</a>
        </div>
    </div>
</template>

<script>
    import { $dragonsearch,$open } from '@/util/js/common.js'
    export default {
        name:'Dragon_hasword',        
        methods:{
            search(){
                $dragonsearch(this);                
            },
            open(path){                
                $open(path,this.$router);
            }, 
        }
    }
</script>

<style lang="scss" scoped>

</style>