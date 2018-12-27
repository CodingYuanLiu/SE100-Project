<template>
  <div id="crepmem">
    <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="拼会员平台" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="拼会员期限" prop="desc">
        <el-input  type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="详细信息" prop="memcontent">
        <el-input  type="textarea" v-model="ruleForm.memcontent" placeholder="应包含联系方式，会员期限等信息"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">发帖</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style src="./crepmem.css" scoped></style>

<script src="./crepmem.js"></script>
