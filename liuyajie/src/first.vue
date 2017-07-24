<template>
	<div class="wrap bounceIn">
		
		 	  	
	 	<img src="./assets/img_03.jpg" alt="" />
	 	
	 	<router-link to="/two">
			<span class="right">></span>
		</router-link>
	 	
	 </div>
</template>

<script>
	 
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