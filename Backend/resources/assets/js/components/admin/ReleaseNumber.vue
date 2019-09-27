<template>
	<div>
		<div id="header">
			<admin-header></admin-header>
		</div>
		<div id="body">
			<div id="menu">
				<admin-side-bar></admin-side-bar>
			</div>
			<div id="main">
				<div id="main-header">
					<h4>発売号一覧管理</h4>
					<div id="create-new">
						<router-link :to="{ name: 'releaseNumberCreate'}">新規登録</router-link>
					</div>
				</div>
				<div id="div">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AdminHeader from './AdminHeader.vue'; 
	import AdminSideBar from './AdminSideBar.vue'; 
	
	export default{
		name: 'ReleaseNumber',
		mounted(){
			
		},	
		components:{
			AdminHeader,
			AdminSideBar,
		},
		data(){
			return {
				
			}
		},
		methods:{
			
			}
	};
</script>

<style scoped>
	body{
		font-family: Sans-serif;
		size: 20px;
		width: 100%;
		font-size: 20px;
	}
	#body{
		width: 100%;
	}
	#header{
		width: 100%;
	}
	#menu{
		padding-top: 10px;
		width: 15%;
		float: left;
	}

	#main{
		padding-top: 35px;
		width: 85%;
		float: right;
		border-left: 1px solid black;
	}
	#main-header{
		margin-left: 20px;
	}

	#div{
		margin-left: 35px;
		margin-right: 100px;
	}
	h4{
		font-weight: bold;
		margin-bottom: 30px;
		font-size: 20px;	
	}
	#create-new{
		background-color: #5b9bd5;
		width: 120px;
		color: white;
		padding: 4px;
		text-align: center;
	}
	#create-new a{
		color: white;
		font-size: 16px;
	}
	
	
</style>

