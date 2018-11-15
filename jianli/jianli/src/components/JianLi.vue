<template>
	<div class="jianli-czj">
		<div class="left" ref="xx">
			<pre>
				{{code}}
			</pre>	
		</div>
		<div v-html="stylecode" >
		
		</div>
		<div class="article" v-html="compiledMarkdown" ref="xxx"></div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
			code:'',
			finalcode:`
		/* 
 		* 面试官你好，我是XXX
 		* 只用文字作做我介绍太单调了
 		* 我就用代码来介绍吧
 		* 首先准备一些样式
 		*/
 		.left{
 		transition: all 1s;
 		width:45%;
 		height:90vh;
 		overflow:auto;
  		font-size:18px;
  		background:grey;
  		color:white;
  		border: 1px solid #aaa;
		padding: 16px;
		margin-left:35px;
		}
		/* 加一个呼吸效果 */
		@keyframes breath{
		  0%{box-shadow: 0 0 10px rgba(0,0,0,1)}
		  100%{box-shadow: 0 0 10px rgba(0,0,0,0.2)
		  }
		}
		.left{
		animation: breath 1s infinite alternate-reverse;
		}
		/*加点3d效果*/
		html{
			-webkit-perspective:1000px;
			perspective:1000px;
		}
		.left{
			-webkit-transition:none;
			transition:none;
			-webkit-transform:rotateY(10deg) translateZ(-100px);
			transform:rotateY(10deg) translateZ(-100px);
		}
		/* 现在正式开始写一个个人简历 */
		/*我要准备一张白纸*/
		.article{
		flex-wrap: nowrap;
		width: 45%;
		height: 90vh;
		overflow:auto;
		display:none;
		border: 20px solid grey;
		border-radius:10px;
		position: fixed;
		left:50%;
		display:block;
		}
		/*白纸准备好了，👉右面开始写简历*/

				`,
				
				jianli:`<h1>个人简历</h1>
				<p>自我介绍</p>
				我叫 崔兆剑
				1996 年 6 月出生
				无锡科技职业学校毕业
				自学前端，半年工作经验
				希望应聘前端开发岗位
				<p># 技能介绍</p>
				<p>1.熟练使用HTML CSS JavaScript JQuery</p>
				<p>2.ajax前后台交互得心应手 </p>
				<p>3.HTML5 Css3 做手机端和动画</p>
				<p>4.easyui和Bootstrap框架也会用</p>
				<p>5.js类框架vue.js，vue全家桶，都可以，比如这个项目就是用vue-cli做的</p>
				<p>6.简单的php,服务器操作都可以</p>,
				<p># 项目介绍</p>
				<p>1. XXX 轮播</p>
				<p>1. XXX 轮播</p>
				<p>3. XXX 画板</p>
				# 联系方式
				- QQ 1194275388
				- Email 1194275388@qq.com
				- 手机 13151901719
				<p># 项目介绍</p>
				<p>1. </p>
				<p>1. </p>
				<p>3. </p>
				
				`,
				compiledMarkdown:'',
				
				zongjie:`
			以上便是我的简历，请您过目，若有幸得以面试，不胜荣幸

				`

				

			}
		},





		created(){
			this.makeResume()
		},
		methods:{
				
			async makeResume(){

				await this.slowlyShowStyle('',this.finalcode)

				await this.slowlyShowDiv()
				await this.slowlyShowStyle(this.finalcode,this.zongjie)
			},
			slowlyShowStyle(prefix,code){
				return new Promise((resolve,reject)=>{
					let length = code.length;
					let n = 0;
					let timer = setInterval(()=>{
					this.code = prefix+code.substring(0,n);
					this.$nextTick(()=>{
						this.$refs.xx.scrollTop = 100000
					})
					if (n===length-1) {
						window.clearInterval(timer);
						resolve()
						console.log("写完了");
					}else{
					n+=1;	
					}
					
				},50)
				})
				
			},
			slowlyShowDiv(){
				return new Promise((resolve,reject)=>{
					let length = this.jianli.length;
					let n = 0;
					let timer = setInterval(()=>{
					this.compiledMarkdown = this.jianli.substring(0,n);
					this.$nextTick(()=>{
						this.$refs.xxx.scrollTop =100000
					})
					if (n===length-1) {
						window.clearInterval(timer);
						resolve()
						console.log("写完了");
					}else{
					n+=1;	
					}
					
				},50)
				})
			}
			




		},
		computed:{
			 stylecode(){
				return '<style>'+this.code+'</style>'
			}
			
		}
		
	}
</script>

<style type="text/css" scoped>
	.jianli-czj{
		display: flex;
	}
	
		    
	
</style>
