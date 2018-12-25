export default {
  data() {
    return {
      ruleForm: {
        title: '',
        desc:'',
        wuyuexin: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入时间', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        desc: [
          {required:true,message:'请输入出发地点',trigger:'blur'},
          {min:3,max:80,message:'内容摘要需要在 3 ~ 80 个字符之间'}
        ],
        wuyuexin: [
          { required: true, message: '请填写目的地', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let Blogs = this.AV.Object.extend('Blogs');
          let blogs = new Blogs();
          let currentUser = this.AV.User.current();
          blogs.save({
            title:this.ruleForm.title,
            description:this.ruleForm.desc,
            wuyuexin:this.ruleForm.wuyuexin,
            user:currentUser,
            userId:currentUser.toJSON().objectId,
          })
            .then(res=>{
              this.$notify({
                title:'成功',
                message:'发帖成功 ヾ(๑╹◡╹)ﾉ"',
                type:'success',
                offset: 100
              });
              this.$router.push({
                name:'index',
                query:{page:1}
              });
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
