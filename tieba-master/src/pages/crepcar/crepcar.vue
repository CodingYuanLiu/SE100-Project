<template>
  <div id="crepcar">
    <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="拼车标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="拼车简介" prop="desc">
        <el-input  type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="详细信息" prop="carcontent">
        <el-input  type="textarea" v-model="ruleForm.carcontent" placeholder="应包含联系方式、日期、上车地点、目的地点等信息"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">发帖</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style src="./crepcar.css" scoped></style>

<script src="./crepcar.js"></script>
