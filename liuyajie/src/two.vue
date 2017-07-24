<template>
	
	<div class="wrap">
			<span class="left" @click="hi"> < </span>
			 
				<img src="./assets/img_05.jpg" />
			 
	 	
	 	
	 	<router-link to="/three">
			<span class="right">></span>
		</router-link>
	 </div>
	 
</template>

<script>
 
	
export default {
  
  data () {
    return {
       
    }
  },
  methods:{
  	hi(){
  		window.history.go(-1)
  	}
  }
}

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
	
.left{
		color: white;
		font-size: 35px;
		position: absolute;
		left: 0;
		top:50%;
		margin-top: -18px;
		opacity: .5;
	}
	
	.right{
		color: white;
		font-size: 35px;
		position: absolute;
		right: 0;
		top:50%;
		margin-top: -18px;
		opacity: .5;
	}
</style>