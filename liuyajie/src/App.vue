<template>
			<div id="app">
				   	<div class="wrap">
					   		<router-view></router-view>
					   		
				   	</div>
	  </div>
</template>	

<script>
export default {
  name: 'app',
  data () {
    return {
     	data: ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
 *{
	margin: 0;
	padding: 0;
}
body,html{
	width: 100%;
	height: 100%;
}
.wrap{
	width: 100%;
	height: 100%;
}
.wrap img{
	width: 100%;
	height: 100%;
}



</style>
