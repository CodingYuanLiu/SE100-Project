export default {
  data() {
    return {
      ruleForm: {
        title: '',
        desc:'',
        carcontent: '',
        carleave:'',
        cargo:''
      },
      rules: {
        carleave: [
          { required: true, message: '请输入拼车出发地', trigger: 'blur' },
          { min: 2, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        cargo: [
          {required:true,message:'请输入拼车目的地',trigger:'blur'},
          {min:2,max:10,message:'内容摘要需要在 3 ~ 16 个字符之间'}
        ],
        desc: [
          {required:true,message:'请输入拼车时间',trigger:'blur'},
          {min:3,max:80,message:'内容摘要需要在 3 ~ 80 个字符之间'}
        ],
        carcontent: [
          { required: true, message: '请填写拼车详细信息', trigger: 'blur' }
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
            title:this.ruleForm.carleave+'->'+this.ruleForm.cargo,
            description:this.ruleForm.desc,
            carcontent:this.ruleForm.carcontent,
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
