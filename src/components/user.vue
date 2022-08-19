<template>
    <el-main class="main" style=" border:0px solid #ffffff;
                                    margin: 10px auto;
                                    margin-top: 10px;
                                    margin-right: 360px;
                                    margin-left: 360px;
                                    height: 180px;
                                    background: white;">
        <el-container style="margin-top: 0px">
          <el-aside style="" width="150px">
            <el-avatar class="pic"
                       :size="50"
            ></el-avatar>
          </el-aside>
          <el-main style="margin-top: 0px">
            <el-tag style="border: 0px #ffffff; float: left;font-size: x-large; margin-top: -20px"
                                                                                color="white"
                                                                                type="info"
                                                                                v-model="name">{{name}}</el-tag>

          </el-main>
          <el-aside style="" width="150px">
            <el-button type="primary" v-on:click="onsubmit()">编辑个人资料</el-button>
          </el-aside>
        </el-container>
        </el-main>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
