<template>
    <!-- <el-container class="welcomeList"> -->
        <!-- <el-header  >
            <el-tabs @tab-click="handleClick">
                <el-tab-pane :label="item" name="recommend" v-for="(item,index) in tabs" :key="index"></el-tab-pane>
        </el-tabs>
        </el-header> -->
            <div class="welcome-List">

                <el-aside width="270px">
                    <el-card shadow="hover" class="box-card" style="display:flex;font-size: 18px; font-weight: 500; color: #1d2129;">
                                        
                        <img src='../assets/日历.png' style="width:30px;padding-top: 10px; display:inline-block;justify-content: center;align-self:center"/>
                        上午好！
                        <el-button type="primary" plain class="display:inline-block" size="small">去签到</el-button>
                        <p style="margin-left:35px;font-size:13px">点亮你在社区的每一天</p>
                    </el-card>
                    <el-card shadow="hover">
                        <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a44a1763fd4b4f63ac82735d6ce28142~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" class="image"/>
                    </el-card >
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <img src="../assets/juejin.jpg" class="image">
                    </el-card>
                </el-aside>
                
              
                <!-- <div class="recommand-component">
                    <Recommend></Recommend>
                </div> -->
                <!-- <el-main class="recommand-component"> -->
                    <!-- <router-view></router-view> -->
                    <!-- <Recommend></Recommend> -->
                <!-- </el-main> -->
            </div>
            
    <!-- </el-container> -->
</template>

<script lang="ts">
import Recommend from "./Recommend.vue";


export default {
    name:"Welcome",
    // data() {
    //     return {
    //         tabs: ["综合", "关注", "前端", "后端","Android","人工智能","开发工具","代码人生",'阅读']
    //     };
    // },
    // methods: {
    //     handleClick(tab, event) {
    //         this.$router.push(`/${tab.name}`);
    //         console.log(tab.name);
    //     }
    // },
    components: { Recommend }
}
</script>
<style scoped lang="less">
.welcome-List{
    // width:500px;
    // display: inline-block;
    margin-top:20px;
}
.recommand-component{
    // padding-block-start: 0%;
    margin:0  0 0 20px;
}

.el-aside {
    float: right;
    margin-left: 200px;
    padding-left:20px
}
// 去掉滚动条
.el-aside::-webkit-scrollbar{
    display:none;
    // height:100vh;
}
.banner{
    width: 240px;
    height: 200px;
    .bannerImg {
        width:100%;
        height: 100%;
    }
}
// .el-header {
//     display: flex;
//     margin-left: 250px;
// }
.el-card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    margin-right:0;
}
.image {
    width:250px;
    height:auto;
}
</style>