<!-- 首页 -->
<template>
  <div id="index" v-if="blogs.length">
    <h3>拼外卖！！！<div align="right">   <router-link :to="{name:'allfood'}"> 更多</router-link></div></h3>

    <section v-for="blog in blogs" :key="blog.id" v-if="blog.foodcontent">
        <router-link class="user" :to="{name:'user',params:{userId:blog.user.id},query:{page:1}}">
        <figure>
          <img :src="blog.user.avatar" :title="blog.user.username" alt="头像" width="60" height="60">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
      </router-link>
      <router-link class="link" :to="{name:'detail',params:{blogId:blog.id}}">
        <h2>{{blog.title}}
          <span>该贴发布于 {{blog.createdAt | formatDate}}</span>
        </h2>
        <p>{{blog.description || blog.title}}</p>
      </router-link>
    </section>
  <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=2)" width="80%" color=#987cb9 SIZE=10> </HR>
    <h3>拼车！！！！<div align="right">   <router-link :to="{name:'allcar'}"> 更多</router-link></div></h3>
  <section v-for="blog in blogs" :key="blog.id" v-if="blog.carcontent">
        <router-link class="user" :to="{name:'user',params:{userId:blog.user.id},query:{page:1}}">
        <figure>
          <img :src="blog.user.avatar" :title="blog.user.username" alt="头像" width="60" height="60">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
      </router-link>
      <router-link class="link" :to="{name:'detail',params:{blogId:blog.id}}">
        <h2>{{blog.title}}
          <span>该贴发布于 {{blog.createdAt | formatDate}}</span>
        </h2>
        <p>{{blog.description || blog.title}}</p>
      </router-link>
    </section>
  <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=2)" width="80%" color=#987cb9 SIZE=10> </HR>
    <h3>拼会员！！！！<div align="right">   <router-link :to="{name:'allmem'}"> 更多</router-link></div></h3>
     <section v-for="blog in blogs" :key="blog.id" v-if="blog.memcontent">
        <router-link class="user" :to="{name:'user',params:{userId:blog.user.id},query:{page:1}}">
        <figure>
          <img :src="blog.user.avatar" :title="blog.user.username" alt="头像" width="60" height="60">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
      </router-link>
      <router-link class="link" :to="{name:'detail',params:{blogId:blog.id}}">
        <h2>{{blog.title}}
          <span>该贴发布于 {{blog.createdAt | formatDate}}</span>
        </h2>
        <p>{{blog.description || blog.title}}</p>
      </router-link>
    </section>

    <el-pagination :current-page="page" background layout="prev, pager, next" :total="total" @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.css" scoped></style>
