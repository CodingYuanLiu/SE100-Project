<template>
  <div id="crepfood">
    <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="拼外卖标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="拼外卖日期" prop="fooddate">
        <el-input  type="textarea" v-model="ruleForm.fooddate"></el-input>
      </el-form-item>
      <el-form-item label="拼外卖地址" prop="foodaddr">
        <el-input  type="textarea" v-model="ruleForm.foodaddr"></el-input>
      </el-form-item>
      <el-form-item label="详细信息" prop="foodcontent">
        <el-input  type="textarea" v-model="ruleForm.foodcontent" placeholder="应包含取餐地址、联系方式、日期等信息"></el-input>
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
