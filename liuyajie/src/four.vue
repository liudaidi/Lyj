<template>
	<div class="bbox">
		<div class="bounceIn">
			
		
		<span class="left" @click="hi"> < </span>
			<mains :data="data">
			</mains>
			
				<button style="width: 100px; height: 30px; background: white; border: 1px solid #ccc;" @click="btn">提交</button>
			
			</div>			
	 </div>
</template>

<script>
	let main={
		props:["data"],
		data(){
			return {
				selectItem:0,
				selectItemu:0
			}
		},
		template:`
		<div class="bo">
		<h3 style="font-size:18px">我为专车代言,放大你的影响力</h3>
		  <div v-for="(i,index) in data" @click="fn(index)" v-bind:class="{actived: index==selectItemu}">
		  		<p>{{i.name}}</p>
		  		<ul>
		  			<li v-for="(s,ind) in i.list" @click="fns(ind,index)" v-bind:class="{ active: ind==selectItem }">
	  					  {{s}} 
		  			</li>
		  		</ul>
		  </div>
	</div>	`,
	methods:{
		fn(ind){
			this.selectItemu=ind 
		},
		fns(b,i){
			
			this.selectItem=b 
		}
	}
	}
	
	export default({
		data(){
			return{data:""}
		},
		created:function(){
	   	this.$http.get('./server/data.json')
		  .then((response)=> {
		    this.data=response.data
		    console.log(this.data)
		  })
  	},
  	components:{
  		mains:main
  	},
  	methods:{
		hi(){
			window.history.go(-1)
		},
		btn(){
			 
			this.$router.push({path:"/last"})
		}
	}
		  
})
</script>
<style>
	.wrap{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.wrap img{
		width: 100%;
		height: 100%;
	}
	
	*{
		margin: 0;
		padding: 0;
		font-size: 14px;
	}
	
	.left{
		color: white;
		font-size: 35px;
		position: absolute;
		left: 0;
		top:50%;
		margin-top: -18px;
	}
	
	.right{
		color: white;
		font-size: 35px;
		position: absolute;
		right: 0;
		top:50%;
		margin-top: -18px;
	}
	.bbox{
		width: 100%;
		height: 100%;
		position: relative;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-image: url("images/img_05.jpg");
		background-size:100%  100%;
	}
	
	.content{
		width: 100%;
		text-align: center;
		position: absolute;
		top: 60px;
	}
	
	.content p{
		padding: 5px;
	}
	
	.content p span{
		padding: 10px;
	}
	
	
	.bo{
		width: 90%;
		height: 85%;
		background: white;
		margin: 0 auto;
		text-align: center;
		opacity: 0.8;
		font-size: 14px;
		margin-top: 30px;
	}
	
	.actived .active{
		color: red;
	}
	
</style>