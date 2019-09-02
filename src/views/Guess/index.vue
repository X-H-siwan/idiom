
<template>
    <div>
        <Header></Header>
        <!-- 主体 -->
        <div class="main">
            <div class="website">
                <div class="webGuide">位置：<a href="/" title="成语大全 四字成语">成语大全</a> &gt; 看图猜成语答案图解</div>
                <div class="favorite"></div>
            </div>
            <router-view></router-view>
        </div>

        <Footer></Footer>
        <table class="popup" style="left: 0px; top: 392.5px; opacity: 0; display: none;"><tbody><tr><td class="popup-inner">你的提示已经用光了</td></tr></tbody></table>
    </div>
</template>

<script>
    import Footer from '@/components/Footer';
    import Header from "@/components/Header";
    export default {
        name:'Guess',
        components:{
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>