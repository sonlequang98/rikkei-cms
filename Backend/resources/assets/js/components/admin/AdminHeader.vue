<template>
	<div id="header">
		
		<div id="menu_left">
			<h3 class="text-center">総合ジャーナル</h3>
		</div>
		<div id="main">
			
		</div>
		<div id="menu_right">
			<ul class="nav navbar-nav navbar-right" id="drop-down">
				<li class="dropdown">
					<h3 class="dropdown-toggle" data-toggle="dropdown">{{user.name}}</h3>
						<ul class="dropdown-menu">
							<li>
								<form @submit.prevent="logout">
									<button type="submit" id="btn-logout" style="color:black;">ログアウト</button>
								</form>
							</li>
						</ul>
				</li>
			</ul>
			
			
		</div>
	</div>
</template>

<script>
	export default{
		name: 'admin-header',
		data(){
			return{
				user: []
			}
		},
		mounted(){
			this.user = this.$store.state.currentUser;
		},
		methods:{
			logout(){
				this.$store.dispatch('logout');
				this.$router.push({name: 'login'});
			}
		},
	};
</script>

<style scoped>
	body{
		background-color: #5b9bd5;
		padding: 10px;
		height: 70px;
		width: 100%;
		font-family: Sans-serif;
	}
	#header{
		width: 100%;
		background-color: #5b9bd5;
		padding: 10px;
		height: 70px;
		padding-bottom: 15px;
	}
	#menu_left{ 
		color: white;
		padding-top: 10px;
		background-color: #5b9bd5;
		width: 17%;
		float: left;
		height: 55px;
	}
	#main{
		background-color: #5b9bd5;
		width: 70%;
		float: left;
		height: 55px;
	}
	#menu_right{
		color: white;
		padding-top: 10px;
		background-color: #5b9bd5;
		width: 13%;
		height: 55px;
		float: right;
	}
	#btn-logout{
		background-color: white;
		border: 1px solid #5b9bd5;
	}
	h3{
		margin-top: 10px;
		font-size: 30px;
	}
	#drop-down{
		padding-right: 60px;
	}
</style>
