<template>
  <div id="detail" v-if="user && blog">
    <section class="top">
      <router-link :to="{name:'user',params:{userId:user.objectId},query:{page:1}}">
        <img :src="user.avatar" alt="头像" width="60" height="60">
        <div>
          <h2>{{blog.title}}</h2>
          <p><span class="user-link">{{user.username}}</span> 发表于 {{blog.createdAt | formatDate}}</p>
        </div>
      </router-link>
    </section>
    <section class="content">
      <h3 v-if="blog.foodcontent">拼外卖信息：</h3>
      <h3 v-if="blog.carcontent">拼车信息：</h3>
      <h3 v-if="blog.memcontent">拼会员信息：</h3>
      <div v-html="foodcontent" v-if="blog.foodcontent"></div>
      <div v-html="memcontent" v-if="blog.memcontent"></div>
      <div v-html="carcontent" v-if="blog.carcontent"></div>
    </section>
  </div>
</template>
<style src="./detail.css" scoped></style>
<script src="./detail.js"></script>
