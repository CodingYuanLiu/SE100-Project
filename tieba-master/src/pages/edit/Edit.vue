<template>
  <div id="create">
  	<el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="拼单信息标题" prop="title">
    <el-input v-model="ruleForm.title"></el-input>
  </el-form-item>
    <el-form-item label="内容摘要" prop="desc">
    <el-input :rows="2" type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="详细内容" v-if="ruleForm.carcontent" prop="carcontent">
    <el-input :rows="6" type="textarea" v-model="ruleForm.carcontent" placeholder="支持 markdown 语法"></el-input>
  </el-form-item>
  <el-form-item label="详细内容" v-if="ruleForm.foodcontent" prop="foodcontent">
    <el-input :rows="6" type="textarea" v-model="ruleForm.foodcontent" placeholder="支持 markdown 语法"></el-input>
  </el-form-item>
  <el-form-item label="详细内容" v-if="ruleForm.memcontent" prop="memcontent">
    <el-input :rows="6" type="textarea" v-model="ruleForm.memcontent" placeholder="支持 markdown 语法"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<style src="./edit.css" scoped></style>

<script src="./edit.js"></script>
