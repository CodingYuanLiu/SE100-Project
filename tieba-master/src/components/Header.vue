<template>
  <el-menu :default-active="$route.path" mode="horizontal" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/register" class="right" v-if="!isLogin">注册</el-menu-item>
    <template>
    <el-submenu index="my" style="float:right">
      <template slot="title">发帖<i class="el-icon-edit"></i></template>
      <el-menu-item index="/crepcar" >拼车</el-menu-item>
      <el-menu-item index="/crepmem" >拼会员</el-menu-item>
      <el-menu-item index="/crepfood" >拼外卖</el-menu-item>
    </el-submenu>
    </template>
    <template>
    <el-menu-item index="/login" class="right" v-if="!isLogin">登录</el-menu-item>
    <el-submenu index="you" style="float:right" v-if="isLogin">
    <template slot="title">{{userInfo.username}}</template>
    <el-menu-item index="/my?pge=1">我的帖子</el-menu-item>
    <el-menu-item index="1" @click="onLogout">注销</el-menu-item>
    </el-submenu>
    </template>
  </el-menu>
</template>
<script>
  import { mapState, mapActions } from 'vuex';
  export default {
  	data() {
  		return {};
  	},
    computed:{
      ...mapState({
        isLogin:state => state.auth.isLogin,
        userInfo:state => state.auth.userInfo
      }),
    },
    created(){
      this.checkLogin();
    },
  	methods: {
      ...mapActions(['checkLogin','logout']),
      onLogout(){
        this.logout().then(()=>{
          this.$router.push('/');
        });
      },
      reload(){
        setTimeout(()=>{
          window.location.reload();
        },500);
      },
  		handleSelect(index, keyPath) {
  			console.log(index, keyPath);
  		}
  	}
  }
</script>
<style scoped>
	.el-menu--horizontal>.el-menu-item{
		font-size: 18px;
	}
	.el-menu--horizontal>.el-menu-item.right{
		float: right;
	}
  .el-menu--horizontal{
    padding: 0 5%；
  }
</style>
