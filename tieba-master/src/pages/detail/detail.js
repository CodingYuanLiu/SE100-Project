import marked from 'marked';
import mixin from '@/utils/mixin.js';
export default {
	data(){
		return {
			blog:null,
			user:null,

		}
	},
	computed:{
		memcontent(){
			return marked(this.blog.memcontent);
		},
      foodcontent(){
        return marked(this.blog.foodcontent);
	  },
	  carcontent(){
        return marked(this.blog.carcontent);
	  },
	},
	created(){
		this.getBlogDetail();
	},
	mixins:[mixin],
	methods:{
		getBlogDetail(){
			let query = new this.AV.Query('Blogs');
			query.include('user');
			query.get(this.$route.params.blogId).then(res=>{
				let data = res.toJSON();
				this.blog = data;
				this.user = data.user;
			});
		},
	},
}
