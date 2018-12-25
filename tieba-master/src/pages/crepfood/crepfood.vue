<template>
  <div id="crepfood">
    <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="拼单时间" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="配送地址" prop="desc">
        <el-input  type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="配送商家" prop="content">
        <el-input  type="textarea" v-model="ruleForm.content" placeholder="支持 markdown 语法"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">发帖</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style  src="./crepfood.css" scoped></style>

<script src="./crepfood.js"></script>
