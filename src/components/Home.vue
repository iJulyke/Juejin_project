<template>

<div>
    <div id="scroll_content" ref="scroller" style="height:99.2vh; overflow:auto;" @scroll="achieveBottom">
        <!-- 顶部的导航栏 -->
        <el-container >  
            <el-header>
                <div class="rightbox">
                    <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" class="logo-img"/>
                    <el-tabs @tab-click="handleClick">
                        <el-tab-pane label="首页" name="welcome" ></el-tab-pane>
                        <el-tab-pane label="沸点" name="second"></el-tab-pane>
                        <el-tab-pane label="课程" name="third"></el-tab-pane>
                        <el-tab-pane label="直播" name="fourth"></el-tab-pane>
                        <el-tab-pane label="活动" name="fifth"></el-tab-pane>
                        <el-tab-pane label="商城" name="sixth"></el-tab-pane>
                        <el-tab-pane label="APP" name="seventh"></el-tab-pane>
                        <el-tab-pane label="插件" name="eighth"></el-tab-pane>
                    </el-tabs>
                </div>
                <div class="leftbox">
                    <el-input placeholder="探索稀土掘金" clearable class="input-with-select" style="width:400px">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                    <el-button type="primary" style="margin:10px">创作者中心</el-button>
                    <el-dropdown @command="toPerson" class="headerperson" style=" margin: 0px auto;
                                                                      margin-right: 10px;
                                                                      float: right;">
                        <span class="el-dropdown-link">
                        <el-avatar class="pic"
                                    :size="50"
                        ></el-avatar>
                        </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="test">个人主页</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>

            <el-header class="bottonbox">
                <el-tabs @tab-click="handleClick">
                    <el-tab-pane :label="item" name="recommend" v-for="(item,index) in tabs" :key="index"></el-tab-pane>
            </el-tabs>
            </el-header>

        </el-container>

        <!-- 左侧welcome列表 -->
        <div class="welcome-component">
            <router-view></router-view>
        </div>         

        <!-- 右侧recommand详情页 -->
        <div class="rightList">
            <!-- 右侧详情页顶部导航栏 -->
            <el-card class="navList" shadow="hover" body-style="padding:15.6px 20px 15.6px 14px">
                <div class="nav-bar">
                    <ul class="metaList">
                        <li class="topBar" >推荐</li>
                        <li class="separate"></li>
                        <li class="topBar">最新</li>
                        <li class="separate"></li>
                        <li class="topBar">热榜</li>
                    </ul>
                </div>
            </el-card>

            <!-- 详情页item -->
            <div v-for="i in count">
                <Item></Item>
            </div>
        </div>

        <!-- 置顶按钮，应当检测scroll的滚动 -->
        <div class="topButton">
            <button class="top" @click="toTop">
            <img src="../assets/置顶.png" style="width:28px;display:inline-block;justify-content: center;align-self:center"  />
            </button>
        </div>

        
    </div>
</div>
</template>
<script>
import Item from "./Item.vue"
export default{
    
    components:{ Item },
    data() {
        return {
            tabs: ["综合", "关注", "前端", "后端","Android","人工智能","开发工具","代码人生",'阅读'],
            count: 18,
            input:'',
            name:'掘金用户',
            activeIndex: '1',
        };
    },
    mounted() {
        this.achieveBottom();
        console.log("this.$ref.scroller:",this.$refs.scroller);
        // this.$refs.scroller.addEventListener('scroll', this.scroll);
    },
    methods: {
        handleClick(tab, event) {
            this.$router.push(`/${tab.name}`);
            console.log(tab.name);
        },
        load() {
            this.count += 18;
        },
        // 当距底部 < 1 时，获取数据。实现列表无限下拉。
        achieveBottom() {
            var div = document.getElementById("scroll_content");
            const canGetNewData = div.scrollHeight - div.scrollTop - div.clientHeight;
            if (canGetNewData <= 2) {
                console.log(canGetNewData, "canGetNewData____");
                // this.getNewData();
                this.load();
            }
        },
        // 一键置顶
        toTop() {
            var div = document.getElementById("scroll_content");
            console.log(div.scrollTop)
            div.scrollTop=0;
        },
        toPerson(){
            this.$router.push('/user');
        },
        // onsubmit() {
        //     this.$router.push('/user/person');
        // },
    },


}
</script>


<style lang="less" scoped>
// 一键置顶按钮
.top {
    position: fixed;
    width: 30px;
    height: 30px;
    bottom: 50px;
    right: 100px;
    
}
.top{
    float: left;
    width: 44px;
    height: 44px;
    text-align: center;
    background: #fff;
    border-radius: 44px;
    border-color:transparent;
    padding-top:2px;
    padding-right: 9px;
    margin: 0 -78px;
    cursor: pointer;
}
.top:hover{
  transform: scale(1.4);
  box-shadow: 0 0  2px 2px #86aed9;
}

// 整个界面通过scroll包裹
#scroll_content {
  overflow-y: auto;
  height:100%;
  width:100%;
  display:inline-block;
  background: #f4f5f5
}
// 左侧welcome列表
.welcome-component{
    display: inline-block;
    float: left;
    width:500px
}
// 右侧详情页展示栏
.rightList{
    display: inline-block;
    float:left;
    margin-left: 20px;
    
}
// 右侧详情页顶部导航栏
.navList{
    display: inline-block;
    margin-right:60px;
    width:784px;
    margin-top:20px;
    margin-bottom:0px;
}
.nav-bar {
    display: inline-block;
    margin-right:500px
}
.metaList{
    display: flex;
    align-items: baseline;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    list-style-type: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
}
.topBar{
    margin: 0 5px 0 6px;
    font-size: 14px;
    color: #86909c;
    padding: 0 3px;
}
.topBar:hover{
    color: #1d7dfa;
}
/* 分隔符号 */
.separate {
    width: 1px;
    height: 14px;
    background: #e5e6eb;
    display: inline-block;
    vertical-align: center;
}

.el-header {
    margin:0 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e6eb;
}
.el-container {
    // height:100%;
    background-color:white;
}
.logo-img {
    display: inline-block;
    width: 107px;
    height: 22px;
}
.el-tabs {
    display: inline-block;
    padding-left: 30px;
    margin-top: 10px;
}
.rightbox {
    display: flex;
    align-items: center;
}
.leftbox {
    display: flex;
    align-items: center;
}

.bottonbox{
    display: flex;
    // margin-left: 220px;
    padding-left:220px;
    border-bottom: 1px solid #e5e6eb;
    margin:0;
}
</style>
