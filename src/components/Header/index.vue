<template>
    <header id="header">
        <div id="xtopjsinfo">
            <div class="top top_w">
                <div class="top_in clearfix">
                    <span class="top_keyw">在线成语词典提供成语解释、出处、成语谜语、成语故事大全、成语接龙、近义词、反义词等查询</span>
                    <i><a title="加入收藏" target="_self" href="javascript:;">加入收藏</a></i><i>|</i>
                    <i class="t_home"><a title="设为主页" target="_self" href="javascript:;">设为主页</a></i>
                </div>
            </div>
        </div>
        <div class="header mt10 clearfix">
            <a class="logo" href="/" title="在线成语词典查询">在线成语词典</a>
            <h1><a href="/" title="成语大全 四字成语">成语大全 四字成语</a></h1>
            <div class="header_right">
                <div class="search mt10">
                    <div class="search_box clearfix">
                        <p id="searchForm">
                            <input type="text" onblur="if(this.value == ''){this.value='独步天下';this.className='search_txt'}" 
                            onclick="if(this.value == '独步天下'){this.value='';this.className='search_txt focus'};" 
                            value="独步天下" name="q" autocomplete="off" id="search_txt" class="search_txt">
                            <button onmouseout="this.className='search_btn'" 
                            onmouseover="this.className='search_btn search_btn_hover'" 
                            class="search_btn" @click="search()">查成语</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu_xy mt10">
            <div class="menu_xy_inner">
                <ul class="clearfix">
                    <li><router-link tag="a" to="/idiom_whole"><span>成语大全</span></router-link></li>
                    <li><router-link tag="a" to="/story"><span>成语故事</span></router-link></li>
                    <li><router-link tag="a" to="/dragon"><span>成语接龙</span></router-link></li>
                    <li><router-link tag="a" to="/parallel"><span>成语对对子</span></router-link></li>
                    <li><router-link tag="a" to="/riddle"><span>成语谜语</span></router-link></li>
                    <li><router-link tag="a" to="/most"><span>成语之最</span></router-link></li>
                    <li><router-link tag="a" to="/carton"><span>成语动画</span></router-link></li>
                    <li><router-link tag="a" to="/guess"><span>看图猜成语</span></router-link></li>
                    <li class="last"><router-link tag="a" to="/search"><span>成语查询</span></router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name:"Header",
        methods:{
            search(){
                let value=document.getElementById('search_txt').value.trim();
                let str = value.replace(/\s+/g,"");
                let url=this.$store.getters.geturl;
                let that=this;
                $.ajax({
                    url:url+"/getchengyu1?fiel=title&like=1&value="+str,
                    type:'get',
                    crossDomain: true,
                    success:function(res){
                        that.$router.push({
                            path:'/idiom_whole/idiomcontent',
                        })
                        that.$store.dispatch('setcybox',res.data);
                        
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>