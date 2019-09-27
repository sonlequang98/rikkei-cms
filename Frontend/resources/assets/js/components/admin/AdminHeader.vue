<template>
	<div id="header">
		<div id="menu_left">
			<h4 class="text-center">総合ジャーナル</h4>
		</div>
		<div id="main">
			
		</div>
		<div id="menu_right">
			<ul class="nav navbar-nav navbar-right">
						<li class="dropdown">
							<h4 class="dropdown-toggle" data-toggle="dropdown">{{user.name}}</h4>
							<ul class="dropdown-menu">
								<li>
									<form @submit.prevent="logout">
										<button type="submit" id="btn-logout">ログアウト</button>
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
		height: 55px;
		padding: 10px;
	}
	#header{
		width: 100%;
		height: 55px;
		background-color: #5b9bd5;
	}
	#menu_left{
		color: white;
		padding-top: 13px;
		background-color: #5b9bd5;
		width: 20%;
		float: left;
		height: 55px;
	}
	#main{
		background-color: #5b9bd5;
		width: 60%;
		float: left;
		height: 55px;
	}
	#menu_right{
		color: white;
		padding-top: 13px;
		background-color: #5b9bd5;
		width: 10%;
		height: 55px;
		float: right;
	}
	#btn-logout{
		background-color: white;
		border: 1px solid #5b9bd5;
	}
</style>
